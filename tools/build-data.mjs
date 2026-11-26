// Data pipeline: source/ (raw v4 data) -> data/ (compact runtime data).
//
//  * endireita e alinha as casas (cantos retos, paralelas à rua, recuo uniforme na quadra)
//  * alinha muros e portões com as ruas
//  * classifica as árvores por espécie/contexto
//  * empacota relevo + malhas das ruas num binário gzip (geo.bin.gz)
//  * converte as texturas de satélite para WebP (2 resoluções)
//
// Usage: node tools/build-data.mjs
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import sharp from 'sharp';
import { buildCreek } from './creek.mjs';
import { buildWater } from './water.mjs';
import {
  area, centroid, cleanRing, minAreaRect, extentsAt, diff90, rectPoly, rotate, selfIntersects,
  segPointDist, Grid, round, dist, pointInPoly,
} from './geom.mjs';

const SRC = 'source', OUT = 'data';

/** Minimal WKB (hex) LineString parser -> [[lon, lat], ...] */
function parseWkbLine(hex) {
  const b = Buffer.from(hex, 'hex');
  const le = b[0] === 1;
  const u32 = o => (le ? b.readUInt32LE(o) : b.readUInt32BE(o));
  const f64 = o => (le ? b.readDoubleLE(o) : b.readDoubleBE(o));
  const type = u32(1) % 1000;
  if (type !== 2) return [];
  const n = u32(5), out = [];
  for (let i = 0; i < n; i++) out.push([f64(9 + i * 16), f64(17 + i * 16)]);
  return out;
}
const DEG = Math.PI / 180;
fs.mkdirSync(OUT, { recursive: true });
const C = JSON.parse(fs.readFileSync(path.join(SRC, 'city.json'), 'utf8'));
const log = (...a) => console.log(...a);

// ---------------------------------------------------------------------------------------------
// Road index
// ---------------------------------------------------------------------------------------------
const LOT_ROADS = new Set(['trunk', 'trunk_link', 'primary', 'secondary', 'tertiary', 'residential', 'unclassified', 'service', 'track']);
const viadIds = new Set(((C.viaduct2 || {}).ways || []).map(w => w.id));
const roadSegs = [];
for (const r of C.roads) {
  if (!LOT_ROADS.has(r.hw)) continue;
  for (let i = 0; i < r.p.length - 1; i++) {
    const [ax, az] = r.p[i], [bx, bz] = r.p[i + 1];
    const L = Math.hypot(bx - ax, bz - az);
    if (L < 0.3) continue;
    roadSegs.push({ r, i, ax, az, bx, bz, L, dir: Math.atan2(bz - az, bx - ax), hw: (r.w || 6) / 2 });
  }
}
const roadGrid = new Grid(40);
for (const s of roadSegs) roadGrid.addBox(s, Math.min(s.ax, s.bx), Math.min(s.az, s.bz), Math.max(s.ax, s.bx), Math.max(s.az, s.bz));

/** Nearest road segment to a point (distance measured to the road edge, not the centerline). */
function nearestRoad(x, z, maxD) {
  let best = null;
  for (const s of roadGrid.query(x, z, maxD)) {
    const q = segPointDist(x, z, s.ax, s.az, s.bx, s.bz);
    const d = q.d - s.hw;
    if (d < maxD && (!best || d < best.d)) best = { ...q, d, seg: s, dir: s.dir };
  }
  return best;
}

// ---------------------------------------------------------------------------------------------
// Buildings: regularize footprints
// ---------------------------------------------------------------------------------------------

/** Snap every edge of p (rotated into the frame of angle t) to horizontal/vertical and rebuild the ring. */
function orthogonalize(p, t) {
  const q = rotate(p, -t);
  let edges = [];
  for (let i = 0; i < q.length; i++) {
    const a = q[i], b = q[(i + 1) % q.length];
    const dx = b[0] - a[0], dz = b[1] - a[1], len = Math.hypot(dx, dz);
    const h = Math.abs(dx) >= Math.abs(dz);
    edges.push({ h, c: h ? (a[1] + b[1]) / 2 : (a[0] + b[0]) / 2, len });
  }
  const mergeRuns = () => {
    let changed = true;
    while (changed && edges.length > 1) {
      changed = false;
      for (let i = 0; i < edges.length; i++) {
        const e = edges[i], n = edges[(i + 1) % edges.length];
        if (e.h === n.h && e !== n) {
          const L = e.len + n.len || 1;
          e.c = (e.c * e.len + n.c * n.len) / L; e.len = L;
          edges.splice((i + 1) % edges.length, 1);
          changed = true; break;
        }
      }
    }
  };
  mergeRuns();
  // drop tiny jogs (< 0.7 m) — they read as noise once extruded
  for (let guard = 0; guard < 20; guard++) {
    if (edges.length <= 4) break;
    const verts = vertsOf(edges);
    let idx = -1, minL = 0.7;
    for (let i = 0; i < edges.length; i++) {
      const a = verts[(i - 1 + edges.length) % edges.length], b = verts[i];
      const L = dist(a, b);
      if (L < minL) { minL = L; idx = i; }
    }
    if (idx < 0) break;
    edges.splice(idx, 1);
    mergeRuns();
  }
  if (edges.length < 4 || edges.length % 2) return null;
  const v = vertsOf(edges);
  return rotate(v, t);
}
function vertsOf(edges) {
  // vertex i = intersection of edge i-1 and edge i
  const out = [];
  for (let i = 0; i < edges.length; i++) {
    const a = edges[(i - 1 + edges.length) % edges.length], b = edges[i];
    out.push(a.h ? [b.c, a.c] : [a.c, b.c]);
  }
  return out;
}

const stats = { rect: 0, ortho: 0, keep: 0, aligned: 0, setback: 0, pushedOffRoad: 0, shrunk: 0, dropped: 0 };
const B = [];
for (const b of C.buildings) {
  let p = cleanRing(b.p);
  if (p.length < 3) continue;
  const A = area(p);
  if (A < 6) { stats.dropped++; continue; }
  const m = minAreaRect(p);
  const rectness = A / m.area;
  const [gx, gz] = centroid(p);
  const road = nearestRoad(gx, gz, 40);
  let t = m.t, aligned = false;
  if (road) {
    const dd = diff90(m.t, road.dir);
    const tol = (road.d < 20 ? 24 : 15) * DEG;
    if (Math.abs(dd) < tol) { t = m.t - dd; aligned = true; stats.aligned++; }
  }
  let poly = null, kind = 'rect';
  const big = A > 400;
  if (rectness > 0.83 || p.length <= 5) {
    const e = extentsAt(p, t);
    // keep the footprint area close to the original (snapping the angle inflates extents a bit)
    const k = Math.sqrt(Math.min(1, Math.max(0.72, (m.a * m.b) / (e.a * e.b))));
    poly = rectPoly(e.cx, e.cz, t, e.a * k, e.b * k);
    stats.rect++;
  } else {
    const o = orthogonalize(p, t);
    const ok = o && !selfIntersects(o) && Math.abs(area(o)) / A > 0.75 && Math.abs(area(o)) / A < 1.3;
    if (ok) { poly = cleanRing(o, 0.02, 1); kind = 'ortho'; stats.ortho++; }
    else if (big) { poly = p; kind = 'keep'; stats.keep++; }
    else {
      const e = extentsAt(p, t);
      const k = Math.sqrt(Math.min(1, Math.max(0.72, A / (4 * e.a * e.b))));
      poly = rectPoly(e.cx, e.cz, t, e.a * k, e.b * k); stats.rect++;
    }
  }
  B.push({ src: b, p: poly, t, aligned, kind, road });
}

// --- uniform setbacks along each street side ---------------------------------------------------
{
  const groups = new Map();
  for (const bd of B) {
    if (!bd.aligned || !bd.road) continue;
    const s = bd.road.seg;
    const ux = (s.bx - s.ax) / s.L, uz = (s.bz - s.az) / s.L;
    const nx = -uz, nz = ux;
    // signed distance of every vertex to the (infinite) road centerline
    let dmin = 1e9, side = 0;
    const [cx, cz] = centroid(bd.p);
    side = Math.sign((cx - s.ax) * nx + (cz - s.az) * nz) || 1;
    for (const [x, z] of bd.p) {
      const d = ((x - s.ax) * nx + (z - s.az) * nz) * side;
      if (d < dmin) dmin = d;
    }
    const front = dmin - s.hw; // gap between road edge and facade
    if (front > 9 || front < -3) continue;
    const along = s.i * 1000 + ((cx - s.ax) * ux + (cz - s.az) * uz); // segment-major ordering
    const key = s.r.id + ':' + side;
    let g = groups.get(key); if (!g) groups.set(key, g = []);
    g.push({ bd, front, along, nx: nx * side, nz: nz * side, seg: s });
  }
  const SIDEWALK = 1.4; // keep facades off the curb/sidewalk strip
  for (const g of groups.values()) {
    g.sort((a, b) => a.along - b.along);
    // cluster consecutive houses of the same block (gap along road < 28 m, same segment run)
    const clusters = [];
    let cur = [];
    for (const it of g) {
      if (cur.length && (Math.abs(it.along - cur[cur.length - 1].along) > 28)) { clusters.push(cur); cur = []; }
      cur.push(it);
    }
    if (cur.length) clusters.push(cur);
    for (const cl of clusters) {
      const fr = cl.map(c => c.front).sort((a, b) => a - b);
      const med = Math.max(SIDEWALK, fr[fr.length >> 1]);
      for (const it of cl) {
        let target = it.front;
        if (cl.length >= 3 && Math.abs(it.front - med) < 1.8) target = med;
        if (target < SIDEWALK) target = Math.min(SIDEWALK, it.front + 3);
        const shift = target - it.front;
        if (Math.abs(shift) < 0.05) continue;
        it.bd.p = it.bd.p.map(([x, z]) => [x + it.nx * shift, z + it.nz * shift]);
        if (it.front < SIDEWALK) stats.pushedOffRoad++; else stats.setback++;
      }
    }
  }
}

// --- resolve overlaps between neighbours ------------------------------------------------------
{
  const g = new Grid(30);
  B.forEach((bd, i) => {
    bd.i = i;
    let x0 = 1e9, z0 = 1e9, x1 = -1e9, z1 = -1e9;
    for (const [x, z] of bd.p) { x0 = Math.min(x0, x); z0 = Math.min(z0, z); x1 = Math.max(x1, x); z1 = Math.max(z1, z); }
    bd.box = [x0, z0, x1, z1];
    g.addBox(bd, x0, z0, x1, z1);
  });
  const frame = (p, t) => {
    const ux = Math.cos(t), uz = Math.sin(t);
    let u0 = 1e9, u1 = -1e9, v0 = 1e9, v1 = -1e9;
    for (const [x, z] of p) {
      const u = x * ux + z * uz, v = -x * uz + z * ux;
      u0 = Math.min(u0, u); u1 = Math.max(u1, u); v0 = Math.min(v0, v); v1 = Math.max(v1, v);
    }
    return { u0, u1, v0, v1 };
  };
  for (const a of B) {
    if (a.dead || a.p.length !== 4) continue;
    const [x0, z0, x1, z1] = a.box;
    for (const b of g.query((x0 + x1) / 2, (z0 + z1) / 2, Math.max(x1 - x0, z1 - z0) / 2 + 2)) {
      if (b === a || b.dead || b.i < a.i || b.p.length !== 4) continue;
      if (Math.abs(diff90(a.t, b.t)) > 3 * DEG) continue;
      const fa = frame(a.p, a.t), fb = frame(b.p, a.t);
      const ou = Math.min(fa.u1, fb.u1) - Math.max(fa.u0, fb.u0);
      const ov = Math.min(fa.v1, fb.v1) - Math.max(fa.v0, fb.v0);
      if (ou <= 0.02 || ov <= 0.02) continue;
      const aA = (fa.u1 - fa.u0) * (fa.v1 - fa.v0), aB = (fb.u1 - fb.u0) * (fb.v1 - fb.v0);
      const small = aA < aB ? a : b, big = small === a ? b : a;
      if (ou * ov > 0.6 * Math.min(aA, aB)) { small.dead = true; stats.dropped++; continue; }
      // shrink the smaller one along the axis of least penetration
      const fs = small === a ? fa : fb, fbg = small === a ? fb : fa;
      let { u0, u1, v0, v1 } = fs;
      if (ou < ov) { if ((u0 + u1) / 2 < (fbg.u0 + fbg.u1) / 2) u1 -= ou + 0.06; else u0 += ou + 0.06; }
      else { if ((v0 + v1) / 2 < (fbg.v0 + fbg.v1) / 2) v1 -= ov + 0.06; else v0 += ov + 0.06; }
      if (u1 - u0 < 2 || v1 - v0 < 2) { small.dead = true; stats.dropped++; continue; }
      const t = a.t, ux = Math.cos(t), uz = Math.sin(t);
      const P = (u, v) => [u * ux - v * uz, u * uz + v * ux];
      small.p = [P(u0, v0), P(u1, v0), P(u1, v1), P(u0, v1)];
      stats.shrunk++;
    }
  }
}

const buildings = [];
for (const bd of B) {
  if (bd.dead) continue;
  const s = bd.src;
  let p = bd.p;
  if (area(p) < 0) p = p.slice().reverse();
  buildings.push({
    p: p.map(([x, z]) => [round(x), round(z)]),
    h: s.h, f: s.f, r: s.r, rc: s.rc, rm: s.rm, hv: s.hv, nb: s.nb, cen: s.cen || undefined,
    osm: s.osm || undefined, sol: s.sol || undefined, rf: s.rf,
    t: round(bd.t, 4), k: bd.kind === 'rect' ? undefined : bd.kind,
  });
}
log('buildings', C.buildings.length, '->', buildings.length, stats);

// ---------------------------------------------------------------------------------------------
// Walls & gates: rotate into line with the street grid
// ---------------------------------------------------------------------------------------------
function alignSegs(list) {
  let n = 0;
  return list.map(w => {
    const [x1, z1, x2, z2] = w;
    const mx = (x1 + x2) / 2, mz = (z1 + z2) / 2, L = Math.hypot(x2 - x1, z2 - z1);
    const a = Math.atan2(z2 - z1, x2 - x1);
    const r = nearestRoad(mx, mz, 30);
    if (!r || L < 0.3) return w.map(v => typeof v === 'number' ? round(v) : v);
    const d = diff90(a, r.dir);
    if (Math.abs(d) > 14 * DEG) return w.map(v => typeof v === 'number' ? round(v) : v);
    n++;
    const t = a - d, hx = Math.cos(t) * L / 2, hz = Math.sin(t) * L / 2;
    return [round(mx - hx), round(mz - hz), round(mx + hx), round(mz + hz), ...w.slice(4)];
  });
}
const walls = alignSegs(C.walls), gates = alignSegs(C.gates || []);

// drop wall pieces that now cut through a house
{
  const g = new Grid(30);
  for (const b of buildings) {
    let x0 = 1e9, z0 = 1e9, x1 = -1e9, z1 = -1e9;
    for (const [x, z] of b.p) { x0 = Math.min(x0, x); z0 = Math.min(z0, z); x1 = Math.max(x1, x); z1 = Math.max(z1, z); }
    g.addBox(b, x0, z0, x1, z1);
  }
  const inside = (x, z) => { for (const b of g.query(x, z, 1)) if (pointInPoly(x, z, b.p)) return true; return false; };
  const keep = w => !inside((w[0] + w[2]) / 2, (w[1] + w[3]) / 2);
  const n0 = walls.length;
  C.walls = walls.filter(keep);
  C.gates = gates.filter(keep);
  log('walls', n0, '->', C.walls.length, 'gates', gates.length, '->', C.gates.length);
}

// ---------------------------------------------------------------------------------------------
// Trees: species by context. t = [x, z, size, seed, species]
//  0 copa comum  1 mangueira  2 oiti (árvore de rua)  3 coqueiro  4 palmeira imperial
//  5 ipê-amarelo 6 ipê-roxo   7 eucalipto  8 mata nativa  9 cerrado seco  10 arbusto
// ---------------------------------------------------------------------------------------------
const hash = x => { const t = Math.sin(x * 12.9898 + 78.233) * 43758.5453; return t - Math.floor(t); };
const sp = { };
const trees = C.trees.map((t, i) => {
  const [x, z, size, seed] = t;
  let s;
  const h = hash(seed * 1.31 + i * 0.017);
  if (seed >= 4e6 && seed < 5e6) s = 9;
  else if (seed >= 1e3) {
    s = h < 0.07 ? 7 : h < 0.1 ? 5 : 8;
  } else {
    const r = nearestRoad(x, z, 6);
    if (r && r.d < 3.5 && !viadIds.has(r.seg.r.id)) s = h < 0.62 ? 2 : h < 0.7 ? 5 : h < 0.74 ? 6 : 0;
    else if (size >= 6) s = h < 0.55 ? 1 : h < 0.68 ? 0 : h < 0.78 ? 3 : h < 0.86 ? 5 : 8;
    else s = h < 0.3 ? 0 : h < 0.48 ? 1 : h < 0.62 ? 3 : h < 0.7 ? 10 : h < 0.76 ? 5 : h < 0.8 ? 6 : h < 0.88 ? 2 : 8;
  }
  sp[s] = (sp[s] || 0) + 1;
  return [round(x, 1), round(z, 1), round(size, 1), seed, s];
});
log('tree species', sp);

// ---------------------------------------------------------------------------------------------
// Córrego (creek): smooth, classify, carve into the height grid
// ---------------------------------------------------------------------------------------------
const hbuf0 = fs.readFileSync(path.join(SRC, fs.existsSync(path.join(SRC, 'height_v6.u16')) ? 'height_v6.u16' : 'height.u16'));
const heightU16 = new Uint16Array(hbuf0.buffer.slice(hbuf0.byteOffset, hbuf0.byteOffset + hbuf0.byteLength));
const heightOrig = heightU16.slice();
const M = C.meta;
const hAt = (x, z) => {
  const fx = (x - M.XMIN) / M.G, fz = (z - M.ZMIN) / M.G;
  const c = Math.max(0, Math.min(M.GW - 2, Math.floor(fx))), r = Math.max(0, Math.min(M.GH - 2, Math.floor(fz)));
  const u = Math.max(0, Math.min(1, fx - c)), v = Math.max(0, Math.min(1, fz - r));
  const g = (rr, cc) => M.HB + heightOrig[rr * M.GW + cc] / 100;
  return (g(r, c) * (1 - u) + g(r, c + 1) * u) * (1 - v) + (g(r + 1, c) * (1 - u) + g(r + 1, c + 1) * u) * v;
};
let creek = null;
const creeks = [];
{
  // ---- 1) Córrego da Natividade + afluente, from OpenStreetMap (via Overture base/water)
  const LAT0 = M.LAT0, LON0 = M.LON0;
  const toXZ = ([lon, lat]) => [(lon - LON0) * M.KX, (LAT0 - lat) * M.KZ];
  const water = fs.existsSync(path.join(SRC, 'overture_base_water.json')) ? JSON.parse(fs.readFileSync(path.join(SRC, 'overture_base_water.json'), 'utf8')) : [];
  const byId = new Map();
  for (const r of water) {
    if (r.subtype !== 'stream') continue;
    const id = r.sources && r.sources[0] && r.sources[0].record_id.split('@')[0];
    byId.set(id, parseWkbLine(r.geometry).map(toXZ));
  }
  const chain = ids => { let out = []; for (const id of ids) { const p = byId.get(id); if (!p) return null; out = out.concat(out.length ? p.slice(1) : p); } return out; };
  const withAcc = (p, a0, a1) => { let L = 0; const d = [0]; for (let i = 1; i < p.length; i++) { L += Math.hypot(p[i][0] - p[i - 1][0], p[i][1] - p[i - 1][1]); d.push(L); } return p.map(([x, z], i) => [x, z, 0, a0 + (a1 - a0) * d[i] / (L || 1)]); };
  const mainLine = chain(['w804841580', 'w477588522', 'w804841523']);
  const tribLine = chain(['w804841550', 'w804841575']);
  const ctxBase = { meta: M, height: heightU16, roads: C.roads, rail: C.rail, buildings, at: hAt };
  let mainCreek = null;
  if (mainLine) {
    const res = buildCreek(withAcc(mainLine, 2000, 9000), ctxBase, { name: 'Córrego da Natividade', wMin: 2.6, wMax: 4.2, smooth: 2, displace: false });
    mainCreek = res.creek; creeks.push(res.creek); log('creek Natividade', res.stats);
  }
  if (tribLine) {
    // join level = main creek water level where the tributary meets it
    let join = -1e9;
    if (mainCreek) { const e = tribLine[tribLine.length - 1]; let bd = 1e9; for (const q of mainCreek.pts) { const d = Math.hypot(q[0] - e[0], q[1] - e[1]); if (d < bd) { bd = d; join = q[2]; } } }
    const res = buildCreek(withAcc(tribLine, 300, 1500), ctxBase, { name: 'Afluente do Natividade', wMin: 1.2, wMax: 2.0, smooth: 2, displace: false, joinLevel: join });
    creeks.push(res.creek); log('creek afluente', res.stats);
  }
  // ---- 2) Canal do Triângulo: from the viaduto do Centro, past the Capela Mortuária, east along
  //         the railway (seen on the album photos), then north under the Centro to the Rio Doce
  //         following the valley line of the hydrology pass (source/creek_raw.json).
  const fixFile = path.join(SRC, 'canal_triangulo.json');
  if (fs.existsSync(fixFile) && fs.existsSync(path.join(SRC, 'creek_raw.json'))) {
    const canal = JSON.parse(fs.readFileSync(fixFile, 'utf8'));
    const raw = JSON.parse(fs.readFileSync(path.join(SRC, 'creek_raw.json'), 'utf8'));
    const k = raw.findIndex(p => Math.hypot(p[0] - canal.joinHydro[0], p[1] - canal.joinHydro[1]) < 20);
    const head = canal.pts.map(([x, z], i, a) => [x, z, 0, 400 + 600 * i / a.length]);
    const tail = raw.slice(k).map(p => [p[0], p[1], p[2], Math.max(1000, p[3] / 40)]);
    const res = buildCreek(head.concat(tail), ctxBase, { name: 'Canal do Triângulo', wMin: 1.6, wMax: 2.6, toRiver: true, smooth: 3 });
    creeks.push(res.creek); log('creek canal', res.stats);
  }
  // clear trees standing in any water / on the canal walls
  const n0 = trees.length;
  for (const cr of creeks) {
    const cp = cr.pts;
    const tg = new Grid(20);
    for (let i = 0; i < cp.length - 1; i++) tg.addBox(i, Math.min(cp[i][0], cp[i + 1][0]), Math.min(cp[i][1], cp[i + 1][1]), Math.max(cp[i][0], cp[i + 1][0]), Math.max(cp[i][1], cp[i + 1][1]));
    for (let k = trees.length - 1; k >= 0; k--) {
      const [x, z] = trees[k];
      for (const i of tg.query(x, z, 6)) {
        const a = cp[i], b = cp[i + 1];
        if (a[4] === 2 && b[4] === 2) continue;
        const q = segPointDist(x, z, a[0], a[1], b[0], b[1]);
        if (q.d < a[3] / 2 + (a[4] === 1 ? 1.6 : 0.9)) { trees.splice(k, 1); break; }
      }
    }
  }
  log('trees removed from creek beds', n0 - trees.length);
  creek = creeks[0] || null;
}

// ---------------------------------------------------------------------------------------------
// Street names (Overture transportation segments = OpenStreetMap names), matched by proximity
// ---------------------------------------------------------------------------------------------
{
  const f = path.join(SRC, 'overture_transportation_segment.json');
  if (fs.existsSync(f)) {
    const segs = JSON.parse(fs.readFileSync(f, 'utf8'));
    const ng = new Grid(30);
    let nNamed = 0;
    for (const r of segs) {
      const name = r.names && r.names.primary;
      if (!name || r.subtype !== 'road') continue;
      const pts = parseWkbLine(r.geometry).map(([lon, lat]) => [(lon - M.LON0) * M.KX, (M.LAT0 - lat) * M.KZ]);
      for (let i = 0; i < pts.length - 1; i++) {
        const [ax, az] = pts[i], [bx, bz] = pts[i + 1];
        ng.addBox({ ax, az, bx, bz, name }, Math.min(ax, bx), Math.min(az, bz), Math.max(ax, bx), Math.max(az, bz));
      }
      nNamed++;
    }
    let matched = 0;
    for (const r of C.roads) {
      const votes = new Map();
      for (let i = 0; i < r.p.length - 1; i++) {
        const [ax, az] = r.p[i], [bx, bz] = r.p[i + 1];
        const L = Math.hypot(bx - ax, bz - az);
        for (let t = 0; t <= L; t += 5) {
          const x = ax + (bx - ax) * t / (L || 1), z = az + (bz - az) * t / (L || 1);
          let best = null, bd = 7;
          for (const s of ng.query(x, z, 8)) { const q = segPointDist(x, z, s.ax, s.az, s.bx, s.bz); if (q.d < bd) { bd = q.d; best = s.name; } }
          if (best) votes.set(best, (votes.get(best) || 0) + 1);
        }
      }
      let top = null, tv = 0, total = 0;
      for (const [k, v] of votes) { total += v; if (v > tv) { tv = v; top = k; } }
      if (top && tv >= 2 && tv >= total * 0.4) { r.n = top; matched++; }
    }
    log('street names: overture named segments', nNamed, '-> roads named', matched, 'of', C.roads.length);
  }
}

// ---------------------------------------------------------------------------------------------
// Comércios e serviços reais (Overture Maps places: Meta, Microsoft, Foursquare...)
// ---------------------------------------------------------------------------------------------
const PLACE_GROUPS = {
  saude: ['pharmacy_and_drug_store', 'dental_clinic', 'diagnostics_imaging_or_lab_service', 'medical_service', 'behavioral_or_mental_health_clinic', 'surgery', 'hospital', 'clinic_or_treatment_center', 'doctor'],
  alimentacao: ['restaurant', 'casual_eatery', 'bar', 'cafe', 'fast_food_restaurant', 'food_service', 'smoothie_juice_bar', 'food_and_beverage_store', 'bakery'],
  lojas: ['fashion_and_apparel_store', 'hardware_home_and_garden_store', 'electronics_store', 'sporting_goods_store', 'flowers_and_gifts_store', 'department_store', 'shopping', 'vehicle_parts_store', 'personal_care_and_beauty_store', 'warehouse_club_store', 'arts_crafts_and_hobby_store', 'animal_and_pet_store', 'supplier_or_distributor'],
  servicos: ['personal_or_beauty_service', 'professional_service', 'automotive_service', 'home_service', 'legal_service', 'attorney_or_law_firm', 'design_service', 'technical_service', 'printing_service', 'real_estate_service', 'travel_service', 'media_service', 'event_or_party_service', 'corporate_or_business_office', 'family_service', 'animal_or_pet_service', 'b2b_service', 'b2b_industrial_and_machine_service', 'b2b_transportation_and_storage_service', 'b2b_energy_and_utility_service', 'gym', 'radio_station', 'manufacturer'],
  bancos: ['bank_or_credit_union', 'financial_service'],
  igrejas: ['christian_place_of_worship', 'religious_organization'],
  educacao: ['specialty_school', 'place_of_learning', 'elementary_school', 'college_university', 'education', 'educational_service'],
  publico: ['government_office', 'police_station', 'courthouse', 'community_and_government', 'social_or_community_service', 'museum', 'historic_site', 'train_station', 'public_transit_facility_or_service', 'park', 'stadium_arena', 'sports_and_recreation', 'arts_and_entertainment'],
  hospedagem: ['hotel'],
  postos: ['gas_station'],
};
const groupOf = {};
for (const [g, list] of Object.entries(PLACE_GROUPS)) for (const c of list) groupOf[c] = g;
let places = [];
if (fs.existsSync(path.join(SRC, 'overture_places_place.json'))) {
  const raw = JSON.parse(fs.readFileSync(path.join(SRC, 'overture_places_place.json'), 'utf8'));
  // points shared by 3+ places are geocoding fall-backs (town centroid), not real locations
  const at = new Map();
  for (const r of raw) { const k = r.bbox.xmin.toFixed(5) + ',' + r.bbox.ymin.toFixed(5); at.set(k, (at.get(k) || 0) + 1); }
  const seen = [];
  for (const r of raw) {
    const k = r.bbox.xmin.toFixed(5) + ',' + r.bbox.ymin.toFixed(5);
    if (at.get(k) >= 3) continue;
    const conf = r.confidence || 0;
    if (conf < 0.45) continue;
    const name = r.names && r.names.primary ? r.names.primary.replace(/\s+/g, ' ').trim() : null;
    if (!name) continue;
    const cat = r.basic_category || (r.taxonomy && r.taxonomy.primary);
    const g = groupOf[cat];
    if (!g) continue;
    const x = (r.bbox.xmin - M.LON0) * M.KX, z = (M.LAT0 - r.bbox.ymin) * M.KZ;
    if (x < M.XMIN + 5 || x > M.XMAX - 5 || z < M.ZMIN + 5 || z > M.ZMAX - 5) continue;
    if (seen.some(s => s.name.toLowerCase() === name.toLowerCase() && Math.hypot(s.x - x, s.z - z) < 40)) continue;
    const a = r.addresses && r.addresses[0] && r.addresses[0].freeform ? r.addresses[0].freeform.replace(/\s+/g, ' ').replace(/, Aimorés.*$/i, '').trim() : '';
    const tax = r.taxonomy && r.taxonomy.primary ? r.taxonomy.primary : cat;
    const phone = r.phones && r.phones[0] ? r.phones[0] : '';
    seen.push({ name, x, z });
    places.push([name, round(x, 1), round(z, 1), g, tax, a, phone, round(conf, 2)]);
  }
  log('places', raw.length, '->', places.length, Object.fromEntries(Object.keys(PLACE_GROUPS).map(g => [g, places.filter(p => p[3] === g).length])));
}

// ---------------------------------------------------------------------------------------------
// Quebra-molas (lombadas). No public data source reachable from here lists the real ones, so they
// are placed where the municipality usually puts them — in front of schools, churches, the hospital,
// clinics and the praça — on paved local streets. source/quebra_molas.json overrides/extends:
//   { "remove": [[x,z],...], "add": [[x,z],...] }   (metres, map coordinates)
// ---------------------------------------------------------------------------------------------
const bumps = [];
{
  const fix = fs.existsSync(path.join(SRC, 'quebra_molas.json')) ? JSON.parse(fs.readFileSync(path.join(SRC, 'quebra_molas.json'), 'utf8')) : {};
  const viad = new Set([...((C.viaduct2 || {}).ways || []).map(w => w.id), 1314627853, 1314627854, 1314627855]);
  const cand = C.roads.filter(r => !viad.has(r.id) && !r.b && ['residential', 'tertiary', 'unclassified', 'secondary'].includes(r.hw) && r.s !== 'dirt');
  const nearestRoad = (x, z, maxD) => {
    let best = null;
    for (const r of cand) for (let i = 0; i < r.p.length - 1; i++) {
      const q = segPointDist(x, z, r.p[i][0], r.p[i][1], r.p[i + 1][0], r.p[i + 1][1]);
      if (q.d < maxD && (!best || q.d < best.d)) best = { ...q, r, i };
    }
    return best;
  };
  const targets = [];
  for (const pl of places) if (['educacao', 'igrejas'].includes(pl[3]) || /hospital|clinic|surgery|medical/.test(pl[4])) targets.push([pl[1], pl[2], pl[0]]);
  for (const [n, x, z] of C.extras.poi) if (/Hospital|Igreja|Praça/.test(n)) targets.push([x, z, n]);
  for (const a of fix.add || []) targets.push([a[0], a[1], 'manual']);
  for (const [x, z, why] of targets) {
    const q = nearestRoad(x, z, why === 'manual' ? 30 : 28);
    if (!q) continue;
    const r = q.r, [ax, az] = r.p[q.i], [bx, bz] = r.p[q.i + 1];
    const L = Math.hypot(bx - ax, bz - az) || 1;
    // keep clear of junction ends (≥ 12 m along the street)
    if (q.t * L < 6 && q.i === 0 || (1 - q.t) * L < 6 && q.i === r.p.length - 2) continue;
    if (bumps.some(b => Math.hypot(b[0] - q.px, b[1] - q.pz) < 45)) continue;
    if ((fix.remove || []).some(([rx, rz]) => Math.hypot(rx - q.px, rz - q.pz) < 10)) continue;
    bumps.push([round(q.px, 2), round(q.pz, 2), round((bx - ax) / L, 4), round((bz - az) / L, 4), round((r.w || 7) / 2, 2), r.id, why.slice(0, 40)]);
  }
  log('quebra-molas', bumps.length);
}

// ---------------------------------------------------------------------------------------------
// city.json
// ---------------------------------------------------------------------------------------------
const rp = a => a.map(([x, z]) => [round(x), round(z)]);
const city = {
  v: 5,
  meta: C.meta,
  buildings,
  walls: C.walls,
  gates: C.gates,
  wallc: C.wallc,
  gatec: C.gatec,
  trees,
  roads: C.roads.map(r => ({ ...r, p: rp(r.p) })),
  rail: C.rail.map(r => ({ pts: rp(r.pts), h: r.h.map(v => round(v)) })),
  viaduct: C.viaduct,
  viaduct2: C.viaduct2,
  curbs: C.curbs.map(c => c.map(v => round(v))),
  neigh: C.neigh,
  extras: C.extras,
  creek,
  creeks,
  places,
  bumps,
};
fs.writeFileSync(path.join(OUT, 'city.json'), JSON.stringify(city));

// ---------------------------------------------------------------------------------------------
// geo.bin.gz — height grid, backdrop grid, road surface meshes
// ---------------------------------------------------------------------------------------------
function deltaRows(u16, W, H) {
  // first column raw, rest = differences to the left neighbour (terrain is smooth -> tiny ints)
  const out = new Int16Array(W * H);
  for (let r = 0; r < H; r++) {
    let prev = 0;
    for (let c = 0; c < W; c++) {
      const v = u16[r * W + c];
      out[r * W + c] = c === 0 ? v - 32768 : v - prev;
      prev = v;
    }
  }
  return out;
}
const height = heightU16; // carved by the creek pass
const bbuf = fs.readFileSync(path.join(SRC, 'back.u16'));
const back = new Uint16Array(bbuf.buffer.slice(bbuf.byteOffset, bbuf.byteOffset + bbuf.byteLength));
const water = await buildWater(path.join(SRC, 'backtex.jpg'), back, C.meta);
log('water bodies', water.bodies.map(b => [b.level, b.n]), 'flattened cells', water.flat);
city.water = { bodies: water.bodies, maskSize: water.maskSize, R: 3600 };
fs.writeFileSync(path.join(OUT, 'city.json'), JSON.stringify(city));
const mbuf = fs.readFileSync(path.join(SRC, 'meshes.f32'));
const sections = [];
sections.push({ name: 'height', type: 'i16d', w: C.meta.GW, h: C.meta.GH, data: deltaRows(height, C.meta.GW, C.meta.GH) });
sections.push({ name: 'back', type: 'i16d', w: C.meta.BG, h: C.meta.BG, data: deltaRows(back, C.meta.BG, C.meta.BG) });
sections.push({ name: 'watermask', type: 'u8', w: water.maskSize, h: water.maskSize, data: water.mask });
for (const [k, [off, n]] of Object.entries(C.meshes)) {
  if (!n) continue;
  const f = new Float32Array(mbuf.buffer.slice(mbuf.byteOffset + off, mbuf.byteOffset + off + n * 4));
  if (k.startsWith('m_')) {
    const q = new Int16Array(n);
    for (let i = 0; i < n; i++) q[i] = Math.round(f[i] * 20); // 5 cm grid
    sections.push({ name: k, type: 'q20', data: q });
  } else {
    const q = new Uint8Array(n);
    for (let i = 0; i < n; i++) q[i] = Math.round(((f[i] % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI)) / (2 * Math.PI) * 256) & 255;
    sections.push({ name: k, type: 'ang8', data: q });
  }
}
{
  let off = 0;
  const header = sections.map(s => {
    const h = { name: s.name, type: s.type, off, len: s.data.length, w: s.w, h: s.h };
    off += s.data.byteLength; off = (off + 3) & ~3;
    return h;
  });
  const hjson = Buffer.from(JSON.stringify(header));
  const hlen = (hjson.length + 3) & ~3;
  const total = 4 + hlen + off;
  const buf = Buffer.alloc(total);
  buf.writeUInt32LE(hlen, 0);
  hjson.copy(buf, 4);
  for (let i = hjson.length; i < hlen; i++) buf[4 + i] = 32;
  sections.forEach((s, i) => Buffer.from(s.data.buffer, s.data.byteOffset, s.data.byteLength).copy(buf, 4 + hlen + header[i].off));
  const gz = zlib.gzipSync(buf, { level: 9 });
  fs.writeFileSync(path.join(OUT, 'geo.bin.gz'), gz);
  log('geo.bin', total, 'gz', gz.length);
}

// ---------------------------------------------------------------------------------------------
// Images
// ---------------------------------------------------------------------------------------------
const g0 = sharp(path.join(SRC, 'ground.jpg'));
const gm = await g0.metadata();
await sharp(path.join(SRC, 'ground.jpg')).webp({ quality: 80, effort: 6 }).toFile(path.join(OUT, 'ground-4k.webp'));
await sharp(path.join(SRC, 'ground.jpg')).resize(2048).webp({ quality: 82, effort: 6 }).toFile(path.join(OUT, 'ground-2k.webp'));
await sharp(path.join(SRC, 'backtex.jpg')).webp({ quality: 78, effort: 6 }).toFile(path.join(OUT, 'back-2k.webp'));
await sharp(path.join(SRC, 'backtex.jpg')).resize(1024).webp({ quality: 80, effort: 6 }).toFile(path.join(OUT, 'back-1k.webp'));
log('ground', gm.width, gm.height);
for (const f of fs.readdirSync(OUT)) log(' ', f.padEnd(18), fs.statSync(path.join(OUT, f)).size);
const cj = fs.readFileSync(path.join(OUT, 'city.json'));
log('city.json gzip ~', zlib.gzipSync(cj, { level: 9 }).length);
