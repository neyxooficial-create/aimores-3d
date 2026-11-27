// Córrego: turns the raw hydrology trace (source/creek_raw.json) into a smooth stream with
// a monotone water profile, decides where it is an open natural channel, a concrete canal or a
// culvert (galeria) under roads/rail/houses, and carves its valley into the height grid.
import { segPointDist, pointInPoly, Grid } from './geom.mjs';

const lerp = (a, b, t) => a + (b - a) * t;
const smooth01 = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

function chaikin(p, iters) {
  for (let k = 0; k < iters; k++) {
    const q = [p[0]];
    for (let i = 0; i < p.length - 1; i++) {
      const a = p[i], b = p[i + 1];
      q.push(a.map((v, j) => 0.75 * v + 0.25 * b[j]), a.map((v, j) => 0.25 * v + 0.75 * b[j]));
    }
    q.push(p[p.length - 1]);
    p = q;
  }
  return p;
}

function resample(p, step) {
  const out = [p[0]];
  let carry = 0;
  for (let i = 0; i < p.length - 1; i++) {
    const a = p[i], b = p[i + 1];
    const L = Math.hypot(b[0] - a[0], b[1] - a[1]);
    let s = step - carry;
    while (s <= L) {
      const t = s / L;
      out.push(a.map((v, j) => lerp(v, b[j], t)));
      s += step;
    }
    carry = L - (s - step);
  }
  const last = p[p.length - 1];
  if (Math.hypot(last[0] - out[out.length - 1][0], last[1] - out[out.length - 1][1]) > step * 0.3) out.push(last);
  return out;
}

/**
 * @param raw     [[x,z,h,acc]] upstream->mouth   (acc only sets the relative width)
 * @param ctx     { meta, height(Uint16 grid, mutated), roads, rail, buildings, at(x,z) }
 * @param opts    { name, wMin, wMax, toRiver (extend into the river), smooth (chaikin passes),
 *                  displace (move off parallel streets), joinLevel (water level at the mouth),
 *                  culvert(x, z) -> true where the stream runs in a galeria (forced) }
 */
export function buildCreek(raw, ctx, opts = {}) {
  const { meta, roads, rail, buildings } = ctx;
  const WL = meta.WL;
  const wMin = opts.wMin ?? 1.1, wMax = opts.wMax ?? 4.0;
  let pts = raw.slice();
  if (opts.toRiver) {
    // stop shortly after reaching the river, then run 10 m into it
    let end = pts.findIndex((p, i) => i > 20 && p[2] && p[2] <= WL + 0.35);
    if (end < 0) end = pts.length - 1;
    pts = pts.slice(0, end + 1);
    const last = pts[pts.length - 1], prev = pts[Math.max(0, pts.length - 4)];
    const dx = last[0] - prev[0], dz = last[1] - prev[1], L = Math.hypot(dx, dz) || 1;
    pts.push([last[0] + dx / L * 10, last[1] + dz / L * 10, WL - 1, last[3]]);
  }
  // keep only the part inside the map (plus a small margin)
  pts = pts.filter(p => p[0] > meta.XMIN + 6 && p[0] < meta.XMAX - 6 && p[1] > meta.ZMIN + 6 && p[1] < meta.ZMAX - 6);

  // smooth the D8 staircase, keep accumulation for width
  let P = chaikin(pts.map(p => [p[0], p[1], Math.log(Math.max(p[3], 200))]), opts.smooth ?? 4);
  P = resample(P, 2.0);

  // --- classify each sample: 0 open (natural), 1 concrete canal, 2 culvert (hidden) -------------
  const g = new Grid(30);
  for (const r of roads) {
    if (r.hw === 'footway' || r.hw === 'path') continue;
    for (let i = 0; i < r.p.length - 1; i++) {
      const [ax, az] = r.p[i], [bx, bz] = r.p[i + 1];
      g.addBox({ k: 'road', ax, az, bx, bz, hw: (r.w || 6) / 2, id: r.id }, Math.min(ax, bx), Math.min(az, bz), Math.max(ax, bx), Math.max(az, bz));
    }
  }
  for (const r of rail) {
    for (let i = 0; i < r.pts.length - 1; i++) {
      const [ax, az] = r.pts[i], [bx, bz] = r.pts[i + 1];
      g.addBox({ k: 'rail', ax, az, bx, bz, hw: 3.5 }, Math.min(ax, bx), Math.min(az, bz), Math.max(ax, bx), Math.max(az, bz));
    }
  }
  for (const b of buildings) {
    let x0 = 1e9, z0 = 1e9, x1 = -1e9, z1 = -1e9;
    for (const [x, z] of b.p) { x0 = Math.min(x0, x); z0 = Math.min(z0, z); x1 = Math.max(x1, x); z1 = Math.max(z1, z); }
    g.addBox({ k: 'bld', b }, x0, z0, x1, z1);
  }
  const accMax = Math.exp(P[P.length - 1][2]);

  // Where the valley line runs *along* a street (streets sit in the valley bottom), move the
  // creek to the side of the street — like a "beira-córrego" street with the canal beside it.
  const bldNear = (x, z, r) => {
    let d = 1e9;
    for (const it of g.query(x, z, r)) {
      if (it.k !== 'bld') continue;
      if (pointInPoly(x, z, it.b.p)) return 0;
      for (let i = 0; i < it.b.p.length; i++) {
        const a = it.b.p[i], c = it.b.p[(i + 1) % it.b.p.length];
        d = Math.min(d, segPointDist(x, z, a[0], a[1], c[0], c[1]).d);
      }
    }
    return d;
  };
  for (let iter = 0; iter < (opts.displace === false ? 0 : 4); iter++) {
    const Q = P.map(p => p.slice());
    for (let i = 1; i < P.length - 1; i++) {
      const [x, z, la] = P[i];
      const w = wMin + (wMax - wMin) * Math.sqrt(Math.min(1, Math.exp(la) / accMax));
      let tx = P[i + 1][0] - P[i - 1][0], tz = P[i + 1][1] - P[i - 1][1];
      const tl = Math.hypot(tx, tz) || 1; tx /= tl; tz /= tl;
      let best = null;
      for (const it of g.query(x, z, 14)) {
        if (it.k !== 'road') continue;
        const q = segPointDist(x, z, it.ax, it.az, it.bx, it.bz);
        const need = it.hw + w / 2 + 2.2;
        if (q.d >= need) continue;
        const rx = it.bx - it.ax, rz = it.bz - it.az, rl = Math.hypot(rx, rz) || 1;
        if (Math.abs((rx * tx + rz * tz) / rl) < 0.8) continue; // crossing, not running alongside
        if (!best || q.d < best.q.d) best = { it, q, need, rx: rx / rl, rz: rz / rl };
      }
      if (!best) continue;
      const { it, q, need, rx, rz } = best;
      const nx = -rz, nz = rx;
      const side0 = Math.sign((x - q.px) * nx + (z - q.pz) * nz) || 1;
      const cand = [side0, -side0].map(sd => {
        const px = q.px + nx * sd * need, pz = q.pz + nz * sd * need;
        return { px, pz, score: bldNear(px, pz, 10) + (sd === side0 ? 1.5 : 0) };
      }).sort((a, b) => b.score - a.score);
      Q[i][0] = cand[0].px; Q[i][1] = cand[0].pz;
    }
    // relax: 3-tap smoothing so the displaced run flows naturally
    for (let i = 1; i < Q.length - 1; i++) {
      P[i][0] = (Q[i - 1][0] + 2 * Q[i][0] + Q[i + 1][0]) / 4;
      P[i][1] = (Q[i - 1][1] + 2 * Q[i][1] + Q[i + 1][1]) / 4;
    }
  }
  P = resample(P, 2.0);

  const S = P.map(([x, z, la]) => {
    const acc = Math.exp(la);
    const w = wMin + (wMax - wMin) * Math.sqrt(Math.min(1, acc / accMax)); // water width (m)
    let roadD = 1e9, railD = 1e9, bldD = 1e9, crossing = null;
    for (const it of g.query(x, z, 16)) {
      if (it.k === 'bld') {
        if (pointInPoly(x, z, it.b.p)) { bldD = 0; continue; }
        for (let i = 0; i < it.b.p.length; i++) {
          const a = it.b.p[i], c = it.b.p[(i + 1) % it.b.p.length];
          bldD = Math.min(bldD, segPointDist(x, z, a[0], a[1], c[0], c[1]).d);
        }
      } else {
        const d = segPointDist(x, z, it.ax, it.az, it.bx, it.bz).d - it.hw;
        if (it.k === 'road' && d < roadD) { roadD = d; crossing = it; }
        if (it.k === 'rail') railD = Math.min(railD, d);
      }
    }
    return { x, z, acc, w, roadD, railD, bldD, crossing };
  });
  for (const s of S) {
    const half = s.w / 2 + 1.2;
    if (opts.culvert && opts.culvert(s.x, s.z)) s.mode = 2;
    else if (s.roadD < half || s.railD < half + 1.5 || s.bldD < half) s.mode = 2;
    else if (s.bldD < 9 || s.roadD < 4) s.mode = 1;
    else s.mode = 0;
  }
  // widen culverts by one sample each side, and collapse tiny open/canal gaps (< 10 m)
  for (let pass = 0; pass < 2; pass++) {
    const m = S.map(s => s.mode);
    for (let i = 1; i < S.length - 1; i++) if (m[i] !== 2 && (m[i - 1] === 2 || m[i + 1] === 2)) S[i].mode = 2;
  }
  const runs = [];
  for (let i = 0; i < S.length;) {
    let j = i; while (j < S.length && S[j].mode === S[i].mode) j++;
    runs.push([i, j, S[i].mode]); i = j;
  }
  for (const [i, j, mode] of runs) if (mode !== 2 && j - i < 5 && i > 0 && j < S.length) for (let k = i; k < j; k++) S[k].mode = 2;
  // canal stretches shorter than 12 m blend into the neighbouring natural channel
  for (const [i, j, mode] of runs) if (mode === 1 && j - i < 6) for (let k = i; k < j; k++) S[k].mode = 0;

  // --- water surface profile: never rises downstream --------------------------------------------
  const at = ctx.at;
  let ws = 1e9;
  for (const s of S) {
    // ground = min of the centre and the immediate sides (the DEM is coarse)
    const t0 = at(s.x, s.z);
    const depth = s.mode === 1 ? 1.35 : 0.75 + 0.5 * Math.sqrt(s.acc / accMax);
    ws = Math.min(ws, t0 - depth);
    s.ws = ws;
  }
  // light smoothing that keeps it monotone
  for (let it = 0; it < 6; it++) {
    for (let i = 1; i < S.length - 1; i++) S[i].ws = Math.min(S[i - 1].ws, (S[i - 1].ws + 2 * S[i].ws + S[i + 1].ws) / 4);
  }
  for (const s of S) s.ws = Math.max(s.ws, WL - 0.05, opts.joinLevel ?? -1e9);

  // --- carve the valley into the height grid ----------------------------------------------------
  const { GW, GH, G, XMIN, ZMIN, HB } = meta;
  const H = ctx.height;
  const segs = [];
  for (let i = 0; i < S.length - 1; i++) segs.push([S[i], S[i + 1]]);
  const sg = new Grid(20);
  segs.forEach(sgm => sg.addBox(sgm, Math.min(sgm[0].x, sgm[1].x), Math.min(sgm[0].z, sgm[1].z), Math.max(sgm[0].x, sgm[1].x), Math.max(sgm[0].z, sgm[1].z)));
  let carved = 0;
  for (let r = 0; r < GH; r++) {
    for (let c = 0; c < GW; c++) {
      const x = XMIN + c * G, z = ZMIN + r * G;
      let best = null;
      for (const [a, b] of sg.query(x, z, 14)) {
        const q = segPointDist(x, z, a.x, a.z, b.x, b.z);
        if (!best || q.d < best.d) best = { d: q.d, a, b, t: q.t };
      }
      if (!best) continue;
      const { a, b, t, d } = best;
      const mode = t < 0.5 ? a.mode : b.mode;
      if (mode === 2) continue;
      // keep road/rail/building ground intact around culverts
      const near = t < 0.5 ? a : b;
      if (near.roadD < 3 || near.railD < 4) continue;
      const w = lerp(a.w, b.w, t), wsv = lerp(a.ws, b.ws, t);
      const bank = mode === 1 ? 1.2 : 4.5;
      const inner = w / 2 + (mode === 1 ? 0.6 : 0.4);
      const outer = inner + bank + 3;
      if (d > outer) continue;
      const cur = HB + H[r * GW + c] / 100;
      const floor = wsv - (mode === 1 ? 0.25 : 0.35);
      const target = lerp(floor, cur, smooth01(inner - 1, outer, d));
      if (target < cur) { H[r * GW + c] = Math.max(0, Math.round((target - HB) * 100)); carved++; }
    }
  }

  const out = S.map(s => [Math.round(s.x * 100) / 100, Math.round(s.z * 100) / 100, Math.round(s.ws * 100) / 100, Math.round(s.w * 100) / 100, s.mode]);
  const stats = { samples: S.length, open: S.filter(s => s.mode === 0).length, canal: S.filter(s => s.mode === 1).length, culvert: S.filter(s => s.mode === 2).length, carved, fall: (S[0].ws - S[S.length - 1].ws).toFixed(1) };
  return { creek: { name: opts.name || 'Córrego', pts: out, mouth: [S[S.length - 1].x, S[S.length - 1].z] }, stats };
}
