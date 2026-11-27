// Data pipeline: source/ (raw v4 data) -> data/ (compact runtime data).
//
//  * limpa as casas (cantos retos sem girar, nada invadindo rua/trilho/córrego, sem sobreposição)
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
import { fixBuildings, corridorGrid, cutCorridors, bbox as bboxOf } from './buildings-fix.mjs';
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

// Conservative: every house keeps its own position and orientation (only tiny < 6° snaps), square
// corners only when the shape stays the same, and whatever invades the street / railway is cut at the
// kerb. Duplicated and overlapping footprints are removed / separated. See tools/buildings-fix.mjs.
const skipRoad = new Set([...viadIds, 1314627853, 1314627854, 1314627855, ...C.roads.filter(r => r.b).map(r => r.id)]);
const fixed = fixBuildings(C.buildings, C.roads, { rail: C.rail, skipRoadIds: skipRoad });
const buildings = [];
for (const bd of fixed.list) {
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
log('buildings', C.buildings.length, '->', buildings.length, fixed.stats);

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
    if (Math.abs(d) > 6 * DEG) return w.map(v => typeof v === 'number' ? round(v) : v);
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
  // ... and pieces standing on the carriageway
  const rg = corridorGrid(C.roads, [], [], skipRoad);
  const onRoad = (x, z) => { for (const s of rg.query(x, z, 8)) if (segPointDist(x, z, s.ax, s.az, s.bx, s.bz).d < s.hw - 0.45) return true; return false; };
  const keep = w => { const mx = (w[0] + w[2]) / 2, mz = (w[1] + w[3]) / 2; return !inside(mx, mz) && !onRoad(mx, mz) && !onRoad(w[0], w[1]) && !onRoad(w[2], w[3]); };
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
// trees standing inside a house (footprints moved/cut) go away
{
  const g = new Grid(30);
  for (const b of buildings) { const [x0, z0, x1, z1] = bboxOf(b.p); g.addBox(b, x0, z0, x1, z1); }
  const n0 = trees.length;
  for (let k = trees.length - 1; k >= 0; k--) { const [x, z] = trees[k]; for (const b of g.query(x, z, 1)) if (pointInPoly(x, z, b.p)) { trees.splice(k, 1); break; } }
  log('trees inside houses removed', n0 - trees.length);
}

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
  // ---- 2) Córrego do Triângulo (S1 "Vale da Rotatória", reference PDF): from the hill SW of the
  //         Residencial down the grota, across the avenue, along the wooded hill of the club, east
  //         of the rotatória, under the railway and (galeria) under the Centro to the Natividade.
  //         The canal seen on the photos at the foot of the viaduto do Centro is a tributary of it.
  const s1File = path.join(SRC, 'corrego_triangulo.json');
  if (fs.existsSync(s1File)) {
    const s1 = JSON.parse(fs.readFileSync(s1File, 'utf8')).pts;
    // the digitized line stops short of the Natividade: run it into the nearest point of its bed
    if (mainCreek) {
      const e = s1[s1.length - 1]; let bq = null, bd = 1e9;
      for (const q of mainCreek.pts) { const d = Math.hypot(q[0] - e[0], q[1] - e[1]); if (d < bd) { bd = d; bq = q; } }
      if (bq && bd < 90) s1.push([bq[0], bq[1]]);
    }
    const levelNear = (cr, x, z) => { let bd = 1e9, lv = -1e9; for (const q of cr.pts) { const d = Math.hypot(q[0] - x, q[1] - z); if (d < bd) { bd = d; lv = q[2]; } } return lv; };
    // railway side test: the Centro (north of the tracks) has the creek in a galeria
    const railSegs = [];
    for (const rl of C.rail) for (let i = 0; i < rl.pts.length - 1; i++) railSegs.push([rl.pts[i], rl.pts[i + 1]]);
    const northOfRail = (x, z) => {
      let best = null;
      for (const [a, b] of railSegs) { const q = segPointDist(x, z, a[0], a[1], b[0], b[1]); if (!best || q.d < best.q.d) best = { q, a, b }; }
      if (!best) return false;
      let { a, b } = best; if (b[0] < a[0]) [a, b] = [b, a];
      return (b[0] - a[0]) * (z - a[1]) - (b[1] - a[1]) * (x - a[0]) < 0 && best.q.d > 4;
    };
    const end = s1[s1.length - 1];
    const culvert = (x, z) => northOfRail(x, z) && Math.hypot(x - end[0], z - end[1]) > 28;
    const join = mainCreek ? levelNear(mainCreek, end[0], end[1]) : -1e9;
    const res = buildCreek(withAcc(s1, 300, 7000), ctxBase, { name: 'Córrego do Triângulo', wMin: 1.3, wMax: 3.0, smooth: 2, displace: false, joinLevel: join, culvert });
    const s1c = res.creek; creeks.push(s1c); log('creek Triângulo (S1)', res.stats);
    // canal do viaduto: from the foot of the viaduto ramp east along the railway to S1
    const fixFile = path.join(SRC, 'canal_triangulo.json');
    if (fs.existsSync(fixFile)) {
      const canal = JSON.parse(fs.readFileSync(fixFile, 'utf8'));
      let pts = canal.pts.slice();
      // stop where it reaches the S1 corridor, ending exactly on S1
      let k = pts.findIndex(p => s1c.pts.some(q => Math.hypot(q[0] - p[0], q[1] - p[1]) < 14));
      if (k < 0) k = pts.length - 1;
      pts = pts.slice(0, k + 1);
      const tip = pts[pts.length - 1];
      let bq = null, bd = 1e9; for (const q of s1c.pts) { const d = Math.hypot(q[0] - tip[0], q[1] - tip[1]); if (d < bd) { bd = d; bq = q; } }
      pts.push([bq[0], bq[1]]);
      const head = pts.map(([x, z], i, a) => [x, z, 0, 300 + 900 * i / a.length]);
      const r2 = buildCreek(head, ctxBase, { name: 'Canal do Viaduto', wMin: 1.4, wMax: 2.2, smooth: 3, joinLevel: bq[2] });
      creeks.push(r2.creek); log('creek canal do viaduto', r2.stats);
    }
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
  // houses must not stand in the creek bed / on the canal walls either
  {
    const st = {};
    const items = buildings.map(b => ({ b, p: b.p, A0: Math.abs(area(b.p)), kind: b.k || 'rect' }));
    const keep = new Set(cutCorridors(items, corridorGrid([], [], creeks), st));
    for (let k = buildings.length - 1; k >= 0; k--) {
      const it = items[k];
      if (!keep.has(it)) { buildings.splice(k, 1); continue; }
      if (it.p !== it.b.p) { it.b.p = it.p.map(([x, z]) => [round(x), round(z)]); it.b.k = it.kind === 'rect' ? undefined : it.kind; }
    }
    log('buildings vs creeks', st, '->', buildings.length);
  }
  // walls / gates must not cross an open creek bed (they hung across the carved valley)
  {
    const cs = [];
    for (const cr of creeks) for (let i = 0; i < cr.pts.length - 1; i++) {
      const a = cr.pts[i], b = cr.pts[i + 1];
      if (a[4] === 2 && b[4] === 2) continue;
      cs.push([a[0], a[1], b[0], b[1], Math.max(a[3], b[3]) / 2 + (a[4] === 1 ? 1.2 : 2.8)]);
    }
    const cg = new Grid(25);
    for (const c of cs) cg.addBox(c, Math.min(c[0], c[2]) - c[4], Math.min(c[1], c[3]) - c[4], Math.max(c[0], c[2]) + c[4], Math.max(c[1], c[3]) + c[4]);
    const hits = w => {
      const L = Math.hypot(w[2] - w[0], w[3] - w[1]), n = Math.max(1, Math.ceil(L / 0.8));
      for (let k = 0; k <= n; k++) {
        const x = w[0] + (w[2] - w[0]) * k / n, z = w[1] + (w[3] - w[1]) * k / n;
        for (const c of cg.query(x, z, 8)) if (segPointDist(x, z, c[0], c[1], c[2], c[3]).d < c[4]) return true;
      }
      return false;
    };
    const n0 = C.walls.length, g0 = C.gates.length;
    C.walls = C.walls.filter(w => !hits(w)); C.gates = C.gates.filter(w => !hits(w));
    log('walls across creeks removed', n0 - C.walls.length, 'gates', g0 - C.gates.length);
  }
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
// No street in town is a dirt road: every street with houses is paralelepípedo (granite setts).
// The dirt mesh triangles of those streets move to the paver mesh, and they get meio-fio + calçada.
// Only rural trails without houses stay dirt.
// ---------------------------------------------------------------------------------------------
function paveDirtStreets(meshArr) {
  const bg = new Grid(30);
  for (const b of city.buildings) { const [x0, z0, x1, z1] = bboxOf(b.p); bg.addBox(b, x0, z0, x1, z1); }
  const housesNear = (r, R) => {
    const seen = new Set();
    for (let i = 0; i < r.p.length; i++) {
      const a = r.p[i], c = r.p[Math.min(i + 1, r.p.length - 1)];
      const L = Math.hypot(c[0] - a[0], c[1] - a[1]);
      for (let t = 0; t <= L; t += 10) { const x = a[0] + (c[0] - a[0]) * t / (L || 1), z = a[1] + (c[1] - a[1]) * t / (L || 1); for (const b of bg.query(x, z, R)) seen.add(b); }
    }
    return seen.size;
  };
  const paved = new Set();
  for (const r of city.roads) {
    if (r.s !== 'dirt') continue;
    const urban = ['residential', 'unclassified', 'service', 'tertiary', 'footway', 'living_street'].includes(r.hw) || housesNear(r, 35) >= 3;
    if (!urban || housesNear(r, 60) === 0) continue;
    r.s = 'paver'; paved.add(r.id);
  }
  // nearest road centreline for every dirt triangle
  const rg = new Grid(25);
  for (const r of city.roads) for (let i = 0; i < r.p.length - 1; i++) { const a = r.p[i], c = r.p[i + 1]; rg.addBox({ r, a, c }, Math.min(a[0], c[0]), Math.min(a[1], c[1]), Math.max(a[0], c[0]), Math.max(a[1], c[1])); }
  const nearestRoadOf = (x, z) => { let best = null, bd = 1e9; for (const s of rg.query(x, z, 12)) { const d = segPointDist(x, z, s.a[0], s.a[1], s.c[0], s.c[1]).d - (s.r.w || 6) / 2; if (d < bd) { bd = d; best = s.r; } } return best; };
  const md = meshArr.m_dirt, ad = meshArr.a_dirt;
  const keepM = [], keepA = [], movM = [], movA = [];
  for (let t = 0; t < md.length / 6; t++) {
    const cx = (md[t * 6] + md[t * 6 + 2] + md[t * 6 + 4]) / 3, cz = (md[t * 6 + 1] + md[t * 6 + 3] + md[t * 6 + 5]) / 3;
    const r = nearestRoadOf(cx, cz);
    // only rural trails stay dirt; junction pieces next to a paved street are paved too
    const to = r && r.s === 'dirt' ? [keepM, keepA] : [movM, movA];
    for (let k = 0; k < 6; k++) to[0].push(md[t * 6 + k]);
    to[1].push(ad ? ad[t] : 0);
  }
  const cat = (a, b) => { const o = new Float32Array(a.length + b.length); o.set(a); o.set(b, a.length); return o; };
  meshArr.m_paver = cat(meshArr.m_paver, movM); meshArr.a_paver = cat(meshArr.a_paver, movA);
  meshArr.m_dirt = new Float32Array(keepM); meshArr.a_dirt = new Float32Array(keepA);
  // meio-fio + calçada along the newly paved streets (not where another street, a house or water is)
  const others = new Grid(25);
  for (const r of city.roads) { if (['path', 'footway', 'steps'].includes(r.hw)) continue; for (let i = 0; i < r.p.length - 1; i++) { const a = r.p[i], c = r.p[i + 1], hw = (r.w || 6) / 2; others.addBox({ r, a, c, hw }, Math.min(a[0], c[0]) - hw, Math.min(a[1], c[1]) - hw, Math.max(a[0], c[0]) + hw, Math.max(a[1], c[1]) + hw); } }
  const inOtherRoad = (x, z, self, pad) => { for (const s of others.query(x, z, 10)) { if (s.r === self) continue; if (segPointDist(x, z, s.a[0], s.a[1], s.c[0], s.c[1]).d < s.hw + pad) return true; } return false; };
  const nearHouse = (x, z, pad) => { for (const b of bg.query(x, z, pad + 1)) { if (pointInPoly(x, z, b.p)) return true; for (let i = 0; i < b.p.length; i++) { const a = b.p[i], c = b.p[(i + 1) % b.p.length]; if (segPointDist(x, z, a[0], a[1], c[0], c[1]).d < pad) return true; } } return false; };
  const cg = corridorGrid([], [], city.creeks || []);
  const inCreek = (x, z) => { for (const s of cg.query(x, z, 6)) if (segPointDist(x, z, s.ax, s.az, s.bx, s.bz).d < s.hw + 0.3) return true; return false; };
  const sw = [];
  let nCurb = 0;
  for (const r of city.roads) {
    if (!paved.has(r.id) || ['footway', 'path', 'service'].includes(r.hw)) continue;
    const hw = (r.w || 6) / 2;
    for (let i = 0; i < r.p.length - 1; i++) {
      const [ax, az] = r.p[i], [bx, bz] = r.p[i + 1];
      const L = Math.hypot(bx - ax, bz - az); if (L < 1) continue;
      const ux = (bx - ax) / L, uz = (bz - az) / L, nx = -uz, nz = ux;
      const n = Math.max(1, Math.round(L / 2.5));
      for (const side of [-1, 1]) {
        for (let k = 0; k < n; k++) {
          const t0 = L * k / n, t1 = L * (k + 1) / n, tm = (t0 + t1) / 2;
          const mx = ax + ux * tm + nx * side * (hw + 0.6), mz = az + uz * tm + nz * side * (hw + 0.6);
          if (mx < M.XMIN + 6 || mx > M.XMAX - 6 || mz < M.ZMIN + 6 || mz > M.ZMAX - 6) continue; // inside the map only
          if (inOtherRoad(mx, mz, r, 1.2) || nearHouse(ax + ux * tm + nx * side * hw, az + uz * tm + nz * side * hw, 0.3) || inCreek(mx, mz)) continue;
          const P = (t, o) => [ax + ux * t + nx * side * o, az + uz * t + nz * side * o];
          const c0 = P(t0, hw), c1 = P(t1, hw);
          C.curbs.push([round(c0[0]), round(c0[1]), round(c1[0]), round(c1[1])]); nCurb++;
          // calçada: up to 1.5 m, narrower where a house front is closer
          let w = 1.5;
          while (w > 0.6 && (nearHouse(...P(t0, hw + w), 0.05) || nearHouse(...P(t1, hw + w), 0.05) || nearHouse(...P(tm, hw + w), 0.05))) w -= 0.3;
          if (w <= 0.6) continue;
          const a0 = P(t0, hw + 0.08), a1 = P(t1, hw + 0.08), b0 = P(t0, hw + w), b1 = P(t1, hw + w);
          sw.push(...a0, ...a1, ...b1, ...a0, ...b1, ...b0);
        }
      }
    }
  }
  meshArr.m_sidewalk = cat(meshArr.m_sidewalk, sw);
  city.curbs = C.curbs.map(c => c.map(v => round(v)));
  log('paved dirt streets', paved.size, 'triangles moved', movA.length, 'kept dirt', keepA.length, 'new curbs', nCurb, 'sidewalk tris', sw.length / 6);
}

// ---------------------------------------------------------------------------------------------
// Rotatória at the start of Rua Triângulo (by the viaduto do Centro): OpenStreetMap has it as a
// triangle of three short streets, but it is a round roundabout. The triangle legs are replaced by
// a one-way ring (anticlockwise, Brazilian rule), the approaches are cut at the ring, and the road
// surface inside the outer circle is rebuilt as an asphalt annulus around a grass island.
// ---------------------------------------------------------------------------------------------
function makeRoundabouts(meshArr) {
  const RBS = [{ tri: [309440549, 309440550, 756409976], ids: [309440550], R: 8.5, w: 7, id: 9100000001 }];
  city.roundabouts = [];
  for (const rb of RBS) {
    // centre = centroid of the triangle's three corner vertices
    const legs = city.roads.filter(r => rb.tri.includes(r.id));
    const conn = legs.find(r => r.id === rb.ids[0]);
    if (!conn) continue;
    const B = conn.p[0], Cc = conn.p[conn.p.length - 1];
    const bal = legs.find(r => r.id === 309440549), A = bal.p[0];
    const cx = (A[0] + B[0] + Cc[0]) / 3, cz = (A[1] + B[1] + Cc[1]) / 3;
    const R = rb.R, Rin = R - rb.w / 2, Rout = R + rb.w / 2;
    const inC = (p, r) => Math.hypot(p[0] - cx, p[1] - cz) < r;
    // ---- roads: drop the third leg, cut every road at the ring centreline, collect attach angles
    city.roads = city.roads.filter(r => !rb.ids.includes(r.id));
    const attach = [];
    const out = [];
    for (const r of city.roads) {
      if (!r.p.some(p => Math.hypot(p[0] - cx, p[1] - cz) < Rout + 2) && !r.p.some((p, i) => i && segPointDist(cx, cz, r.p[i - 1][0], r.p[i - 1][1], p[0], p[1]).d < R)) { out.push(r); continue; }
      if (['footway', 'path', 'steps'].includes(r.hw)) { out.push(r); continue; }
      // split the polyline into the parts outside the circle of radius R
      const pieces = []; let cur = [];
      const hit = (a, b) => { // intersection of segment a-b with the circle, parameter t in (0,1)
        const dx = b[0] - a[0], dz = b[1] - a[1], fx = a[0] - cx, fz = a[1] - cz;
        const A2 = dx * dx + dz * dz, B2 = 2 * (fx * dx + fz * dz), C2 = fx * fx + fz * fz - R * R, D = B2 * B2 - 4 * A2 * C2;
        if (D < 0 || A2 < 1e-9) return [];
        const q = Math.sqrt(D); return [(-B2 - q) / (2 * A2), (-B2 + q) / (2 * A2)].filter(t => t > 0 && t < 1).sort((x, y) => x - y);
      };
      for (let i = 0; i < r.p.length; i++) {
        const p = r.p[i];
        if (i > 0) {
          const a = r.p[i - 1];
          for (const t of hit(a, p)) {
            const q = [a[0] + (p[0] - a[0]) * t, a[1] + (p[1] - a[1]) * t];
            if (cur.length) { cur.push(q); pieces.push(cur); cur = []; attach.push(q); }
            else { cur = [q]; attach.push(q); }
          }
        }
        if (!inC(p, R)) cur.push(p);
      }
      if (cur.length) pieces.push(cur);
      const good = pieces.filter(pc => pc.length >= 2 && pc.reduce((L, q, i) => i ? L + Math.hypot(q[0] - pc[i - 1][0], q[1] - pc[i - 1][1]) : 0, 0) > 1);
      good.forEach((pc, k) => out.push({ ...r, id: k ? r.id * 10 + k : r.id, p: pc.map(q => [round(q[0]), round(q[1])]) }));
    }
    city.roads = out;
    // ---- the ring: anticlockwise seen from above with north up (x east, z south)
    const angs = [];
    for (let k = 0; k < 32; k++) angs.push(k / 32 * Math.PI * 2);
    const att = attach.map(q => Math.atan2(-(q[1] - cz), q[0] - cx)).map(a => (a + Math.PI * 2) % (Math.PI * 2));
    const all = angs.filter(a => att.every(b => Math.abs(Math.atan2(Math.sin(a - b), Math.cos(a - b))) > 0.08)).concat(att).sort((x, y) => x - y);
    const ringP = all.map(a => [round(cx + R * Math.cos(a)), round(cz - R * Math.sin(a))]);
    // attach points must match the ring vertices exactly (the traffic graph joins equal points)
    for (const r of city.roads) for (const k of [0, r.p.length - 1]) {
      const p = r.p[k];
      if (Math.abs(Math.hypot(p[0] - cx, p[1] - cz) - R) < 0.05) { let best = null, bd = 1e9; for (const q of ringP) { const d = Math.hypot(q[0] - p[0], q[1] - p[1]); if (d < bd) { bd = d; best = q; } } r.p[k] = [best[0], best[1]]; }
    }
    ringP.push(ringP[0]);
    city.roads.push({ id: rb.id, hw: 'tertiary', s: 'asphalt', s0: 'asphalt', w: rb.w, n: 'Rotatória da Rua Triângulo', o: true, b: false, ring: true, p: ringP });
    // ---- road surfaces: cut everything inside the outer circle, add the asphalt annulus
    const NK = 64, Rk = Rout / Math.cos(Math.PI / NK); // circumscribed polygon
    const K = []; for (let k = 0; k < NK; k++) { const a = (k + 0.5) / NK * Math.PI * 2; K.push([cx + Rk * Math.cos(a), cz + Rk * Math.sin(a)]); }
    const clip = (poly, ax, az, nx, nz, keepOut) => { // keep side where (p-a)·n >= 0 (keepOut) or <= 0
      const res = [], f = q => ((q[0] - ax) * nx + (q[1] - az) * nz) * (keepOut ? 1 : -1);
      for (let i = 0; i < poly.length; i++) { const a = poly[i], b = poly[(i + 1) % poly.length], fa = f(a), fb = f(b); if (fa >= 0) res.push(a); if ((fa >= 0) !== (fb >= 0)) { const t = fa / (fa - fb); res.push([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]); } }
      return res;
    };
    let nCut = 0;
    for (const kind of ['asphalt', 'paver', 'dirt', 'sidewalk']) {
      const m = meshArr['m_' + kind], an = meshArr['a_' + kind];
      if (!m) continue;
      const nm = [], na = [];
      for (let t = 0; t < m.length / 6; t++) {
        const tri = [[m[t * 6], m[t * 6 + 1]], [m[t * 6 + 2], m[t * 6 + 3]], [m[t * 6 + 4], m[t * 6 + 5]]];
        const near = tri.some(p => Math.hypot(p[0] - cx, p[1] - cz) < Rk + 0.5) || segPointDist(cx, cz, tri[0][0], tri[0][1], tri[1][0], tri[1][1]).d < Rk || segPointDist(cx, cz, tri[1][0], tri[1][1], tri[2][0], tri[2][1]).d < Rk || segPointDist(cx, cz, tri[2][0], tri[2][1], tri[0][0], tri[0][1]).d < Rk;
        if (!near) { for (let k = 0; k < 6; k++) nm.push(m[t * 6 + k]); if (an) na.push(an[t]); continue; }
        nCut++;
        // tri \ K = union over edges i of (tri ∩ outside(edge i) ∩ inside(edges < i))
        for (let i = 0; i < NK; i++) {
          const a = K[i], b = K[(i + 1) % NK];
          const ex = b[0] - a[0], ez = b[1] - a[1], L = Math.hypot(ex, ez), nx = ez / L, nz = -ex / L; // normal; orient outward
          const sgn = ((a[0] - cx) * nx + (a[1] - cz) * nz) > 0 ? 1 : -1;
          let poly = clip(tri, a[0], a[1], nx * sgn, nz * sgn, true);
          for (let j = 0; j < i && poly.length >= 3; j++) {
            const c0 = K[j], c1 = K[(j + 1) % NK], fx = c1[0] - c0[0], fz = c1[1] - c0[1], l2 = Math.hypot(fx, fz), mx = fz / l2, mz = -fx / l2;
            const sg = ((c0[0] - cx) * mx + (c0[1] - cz) * mz) > 0 ? 1 : -1;
            poly = clip(poly, c0[0], c0[1], mx * sg, mz * sg, false);
          }
          if (poly.length < 3) continue;
          for (let k = 1; k < poly.length - 1; k++) {
            const p0 = poly[0], p1 = poly[k], p2 = poly[k + 1];
            if (Math.abs((p1[0] - p0[0]) * (p2[1] - p0[1]) - (p1[1] - p0[1]) * (p2[0] - p0[0])) < 1e-4) continue;
            nm.push(p0[0], p0[1], p1[0], p1[1], p2[0], p2[1]); if (an) na.push(an[t]);
          }
        }
      }
      meshArr['m_' + kind] = new Float32Array(nm); if (an) meshArr['a_' + kind] = new Float32Array(na);
    }
    // asphalt annulus (Rin .. Rout); texture runs along the ring
    const am = Array.from(meshArr.m_asphalt), aa = Array.from(meshArr.a_asphalt);
    for (let k = 0; k < NK; k++) {
      const a0 = (k + 0.5) / NK * Math.PI * 2, a1 = (k + 1.5) / NK * Math.PI * 2;
      const P = (r, a) => [cx + r * Math.cos(a), cz + r * Math.sin(a)];
      const o0 = P(Rk, a0), o1 = P(Rk, a1), i0 = P(Rin, a0), i1 = P(Rin, a1);
      am.push(...o0, ...o1, ...i1, ...o0, ...i1, ...i0);
      const tang = (a0 + a1) / 2 + Math.PI / 2;
      aa.push(tang, tang);
    }
    meshArr.m_asphalt = new Float32Array(am); meshArr.a_asphalt = new Float32Array(aa);
    // curbs, walls, gates, trees and houses inside the outer circle go away
    city.curbs = city.curbs.filter(c => !inC([(c[0] + c[2]) / 2, (c[1] + c[3]) / 2], Rout + 0.3));
    city.walls = city.walls.filter(w => !inC([(w[0] + w[2]) / 2, (w[1] + w[3]) / 2], Rout + 1));
    city.gates = city.gates.filter(w => !inC([(w[0] + w[2]) / 2, (w[1] + w[3]) / 2], Rout + 1));
    city.trees = city.trees.filter(t => !inC(t, Rout + 1));
    city.trees.push([round(cx, 1), round(cz, 1), 4.5, 777, 3]); // a coqueiro in the island
    city.buildings = city.buildings.filter(b => !b.p.some(p => inC(p, Rout + 0.5)));
    city.roundabouts.push({ c: [round(cx), round(cz)], R, rin: Rin, rout: Rout });
    log('rotatória', [round(cx), round(cz)], 'R', R, 'attach', attach.length, 'ring pts', ringP.length, 'surface tris cut', nCut);
  }
}
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
const mbuf = fs.readFileSync(path.join(SRC, 'meshes.f32'));
const meshArr = {};
for (const [k, [off, n]] of Object.entries(C.meshes)) meshArr[k] = new Float32Array(mbuf.buffer.slice(mbuf.byteOffset + off, mbuf.byteOffset + off + n * 4));
paveDirtStreets(meshArr);
makeRoundabouts(meshArr);
fs.writeFileSync(path.join(OUT, 'city.json'), JSON.stringify(city));
const sections = [];
sections.push({ name: 'height', type: 'i16d', w: C.meta.GW, h: C.meta.GH, data: deltaRows(height, C.meta.GW, C.meta.GH) });
sections.push({ name: 'back', type: 'i16d', w: C.meta.BG, h: C.meta.BG, data: deltaRows(back, C.meta.BG, C.meta.BG) });
sections.push({ name: 'watermask', type: 'u8', w: water.maskSize, h: water.maskSize, data: water.mask });
for (const [k, f] of Object.entries(meshArr)) {
  const n = f.length;
  if (!n) continue;
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
