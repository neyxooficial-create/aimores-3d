// Audit every building of data/city.json against the streets, railway, creeks, other buildings and
// its original footprint (source/city.json). Prints a summary and writes a JSON report.
// Usage: node tools/audit-buildings.mjs [report.json]
import fs from 'node:fs';
import { area, centroid, minAreaRect, diff90, segPointDist, pointInPoly, polysOverlap, Grid } from './geom.mjs';

const city = JSON.parse(fs.readFileSync('data/city.json', 'utf8'));
const src = JSON.parse(fs.readFileSync('source/city.json', 'utf8'));
const DEG = 180 / Math.PI;
const viad = new Set([...((city.viaduct2 || {}).ways || []).map(w => w.id), 1314627853, 1314627854, 1314627855]);

// ---- corridors: carriageway (w/2) for every drivable road, rail (3.5 m), creek water
const segs = [];
for (const r of city.roads) {
  if (['footway', 'path', 'steps'].includes(r.hw) || viad.has(r.id)) continue;
  for (let i = 0; i < r.p.length - 1; i++) segs.push({ k: 'road', a: r.p[i], b: r.p[i + 1], hw: (r.w || 6) / 2, id: r.id, name: r.n || r.hw });
}
for (const rl of city.rail) for (let i = 0; i < rl.pts.length - 1; i++) segs.push({ k: 'rail', a: rl.pts[i], b: rl.pts[i + 1], hw: 2.2 });
for (const c of city.creeks || []) for (let i = 0; i < c.pts.length - 1; i++) if (c.pts[i][4] !== 2) segs.push({ k: 'creek', a: c.pts[i], b: c.pts[i + 1], hw: c.pts[i][3] / 2 + 0.5 });
const sg = new Grid(30);
for (const s of segs) sg.addBox(s, Math.min(s.a[0], s.b[0]) - s.hw, Math.min(s.a[1], s.b[1]) - s.hw, Math.max(s.a[0], s.b[0]) + s.hw, Math.max(s.a[1], s.b[1]) + s.hw);

/** max penetration of polygon p into a corridor (sampled along its edges + interior points) */
function penetration(p) {
  const pts = [];
  for (let i = 0; i < p.length; i++) {
    const a = p[i], b = p[(i + 1) % p.length], L = Math.hypot(b[0] - a[0], b[1] - a[1]);
    const n = Math.max(1, Math.ceil(L / 1.0));
    for (let k = 0; k < n; k++) pts.push([a[0] + (b[0] - a[0]) * k / n, a[1] + (b[1] - a[1]) * k / n]);
  }
  const [cx, cz] = centroid(p); pts.push([cx, cz]);
  let worst = { d: 0 };
  for (const [x, z] of pts) {
    for (const s of sg.query(x, z, 8)) {
      const q = segPointDist(x, z, s.a[0], s.a[1], s.b[0], s.b[1]);
      const pen = s.hw - q.d;
      if (pen > worst.d) worst = { d: pen, k: s.k, name: s.name, x, z };
    }
  }
  return worst;
}

// original footprint per building: match by nearest original centroid with similar area
const og = new Grid(30);
src.buildings.forEach((b, i) => { const [x, z] = centroid(b.p); og.addBox({ i, x, z, A: Math.abs(area(b.p)), b }, x, z, x, z); });
function original(b) {
  const [x, z] = centroid(b.p), A = Math.abs(area(b.p));
  let best = null;
  for (const o of og.query(x, z, 12)) { const d = Math.hypot(o.x - x, o.z - z) + Math.abs(Math.log(o.A / A)) * 3; if (!best || d < best.d) best = { ...o, d }; }
  return best;
}

const bg = new Grid(30);
city.buildings.forEach((b, i) => { let x0 = 1e9, z0 = 1e9, x1 = -1e9, z1 = -1e9; for (const [x, z] of b.p) { x0 = Math.min(x0, x); z0 = Math.min(z0, z); x1 = Math.max(x1, x); z1 = Math.max(z1, z); } b._box = [x0, z0, x1, z1]; bg.addBox(i, x0, z0, x1, z1); });

const report = [];
const cnt = {};
const flag = (i, kind, info) => { report.push({ i, kind, ...info }); cnt[kind] = (cnt[kind] || 0) + 1; };
city.buildings.forEach((b, i) => {
  const A = Math.abs(area(b.p));
  const [cx, cz] = centroid(b.p);
  const pen = penetration(b.p);
  if (pen.d > 0.4) flag(i, pen.k === 'road' ? 'na_rua' : pen.k === 'rail' ? 'na_ferrovia' : 'no_corrego', { d: +pen.d.toFixed(2), rua: pen.name, x: +cx.toFixed(1), z: +cz.toFixed(1), A: +A.toFixed(0) });
  const o = original(b);
  if (o) {
    const mo = minAreaRect(o.b.p), mn = minAreaRect(b.p);
    const rect = Math.abs(area(o.b.p)) / mo.area;
    const rot = Math.abs(diff90(mo.t, mn.t)) * DEG;
    if (rot > 10 && rect > 0.75) flag(i, 'girada', { graus: +rot.toFixed(0), x: +cx.toFixed(1), z: +cz.toFixed(1), A: +A.toFixed(0) });
    const mv = Math.hypot(cx - o.x, cz - o.z);
    if (mv > 2.5) flag(i, 'deslocada', { m: +mv.toFixed(1), x: +cx.toFixed(1), z: +cz.toFixed(1) });
    if (A < 0.6 * o.A) flag(i, 'encolhida', { de: +o.A.toFixed(0), para: +A.toFixed(0), x: +cx.toFixed(1), z: +cz.toFixed(1) });
  } else flag(i, 'sem_original', { x: +cx.toFixed(1), z: +cz.toFixed(1) });
  // overlaps with other buildings
  const [x0, z0, x1, z1] = b._box;
  for (const j of bg.query((x0 + x1) / 2, (z0 + z1) / 2, Math.max(x1 - x0, z1 - z0) / 2 + 1)) {
    if (j <= i) continue;
    const c = city.buildings[j];
    if (c._box[0] > x1 || c._box[2] < x0 || c._box[1] > z1 || c._box[3] < z0) continue;
    if (polysOverlap(b.p, c.p)) {
      // overlap depth: count vertices of one inside the other
      const inside = b.p.filter(([x, z]) => pointInPoly(x, z, c.p)).length + c.p.filter(([x, z]) => pointInPoly(x, z, b.p)).length;
      if (inside > 0) flag(i, 'sobreposta', { com: j, x: +cx.toFixed(1), z: +cz.toFixed(1) });
    }
  }
  // non-rectangular footprints get a bounding-box roof in the renderer unless they have a parapet
  if (b.p.length > 4) {
    const m = minAreaRect(b.p);
    if (A / m.area < 0.85) flag(i, 'forma_L', { lados: b.p.length, fill: +(A / m.area).toFixed(2), x: +cx.toFixed(1), z: +cz.toFixed(1), A: +A.toFixed(0), rm: b.rm, r: b.r });
  }
  // walls crossing the building
});
// walls through buildings / in streets
let wallsIn = 0, wallsRoad = 0;
for (const w of city.walls) {
  const mx = (w[0] + w[2]) / 2, mz = (w[1] + w[3]) / 2;
  for (const j of bg.query(mx, mz, 1)) if (pointInPoly(mx, mz, city.buildings[j].p)) { wallsIn++; break; }
  for (const s of sg.query(mx, mz, 8)) { if (s.k !== 'road') continue; if (segPointDist(mx, mz, s.a[0], s.a[1], s.b[0], s.b[1]).d < s.hw - 0.2) { wallsRoad++; break; } }
}
console.log('buildings', city.buildings.length, cnt, 'walls inside buildings', wallsIn, 'walls on carriageway', wallsRoad);
// per neighbourhood
const byNb = {};
for (const r of report) { const nb = city.buildings[r.i].nb || '?'; byNb[nb] = byNb[nb] || {}; byNb[nb][r.kind] = (byNb[nb][r.kind] || 0) + 1; }
console.log(byNb);
fs.writeFileSync(process.argv[2] || '/tmp/audit.json', JSON.stringify(report));
