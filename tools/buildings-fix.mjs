// Conservative clean-up of the building footprints (Microsoft ML / OSM):
//   1. drop slivers and duplicates (two footprints of the same building)
//   2. regularize WITHOUT rotating: square corners in the footprint's own orientation; only a tiny
//      snap (< 6°) to the street; complex shapes are squared only if they stay ≥ 85% the same
//   3. cut off whatever invades the carriageway / railway / creek (the house front ends at the kerb)
//   4. separate the remaining overlaps between neighbours with a straight cut
// Every step is checked against the original footprint so nothing ends up "de lado" or displaced.
import { area, centroid, cleanRing, minAreaRect, extentsAt, diff90, rectPoly, rotate, selfIntersects, segPointDist, Grid, pointInPoly, polysOverlap } from './geom.mjs';

const DEG = Math.PI / 180;

export function bbox(p) { let x0 = 1e9, z0 = 1e9, x1 = -1e9, z1 = -1e9; for (const [x, z] of p) { x0 = Math.min(x0, x); z0 = Math.min(z0, z); x1 = Math.max(x1, x); z1 = Math.max(z1, z); } return [x0, z0, x1, z1]; }

/** area of a∩b, a and |b| estimated on a raster (res metres) */
export function overlapRaster(a, b, res = 0.3) {
  const A = bbox(a), B = bbox(b);
  const x0 = Math.max(A[0], B[0]), z0 = Math.max(A[1], B[1]), x1 = Math.min(A[2], B[2]), z1 = Math.min(A[3], B[3]);
  if (x1 <= x0 || z1 <= z0) return 0;
  let n = 0;
  for (let x = x0 + res / 2; x < x1; x += res) for (let z = z0 + res / 2; z < z1; z += res) if (pointInPoly(x, z, a) && pointInPoly(x, z, b)) n++;
  return n * res * res;
}
export function iou(a, b) { const I = overlapRaster(a, b); return I / (Math.abs(area(a)) + Math.abs(area(b)) - I); }

/** keep the part of polygon p where (x - px, z - pz)·(nx, nz) >= 0 */
export function clipHalf(p, px, pz, nx, nz) {
  const out = [];
  const f = q => (q[0] - px) * nx + (q[1] - pz) * nz;
  for (let i = 0; i < p.length; i++) {
    const a = p[i], b = p[(i + 1) % p.length], fa = f(a), fb = f(b);
    if (fa >= 0) out.push(a);
    if ((fa >= 0) !== (fb >= 0)) { const t = fa / (fa - fb); out.push([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]); }
  }
  return out;
}

function isConvex(p) {
  let s = 0;
  for (let i = 0; i < p.length; i++) {
    const a = p[i], b = p[(i + 1) % p.length], c = p[(i + 2) % p.length];
    const cr = (b[0] - a[0]) * (c[1] - b[1]) - (b[1] - a[1]) * (c[0] - b[0]);
    if (Math.abs(cr) < 1e-6) continue;
    if (!s) s = Math.sign(cr); else if (Math.sign(cr) !== s) return false;
  }
  return true;
}

/** orthogonalize in the frame t (edges become parallel / perpendicular to t) */
function orthogonalize(p, t) {
  const q = rotate(p, -t);
  let edges = [];
  for (let i = 0; i < q.length; i++) {
    const a = q[i], b = q[(i + 1) % q.length];
    const dx = b[0] - a[0], dz = b[1] - a[1], len = Math.hypot(dx, dz);
    const h = Math.abs(dx) >= Math.abs(dz);
    edges.push({ h, c: h ? (a[1] + b[1]) / 2 : (a[0] + b[0]) / 2, len });
  }
  const merge = () => {
    let ch = true;
    while (ch && edges.length > 1) {
      ch = false;
      for (let i = 0; i < edges.length; i++) {
        const e = edges[i], n = edges[(i + 1) % edges.length];
        if (e !== n && e.h === n.h) { const L = e.len + n.len || 1; e.c = (e.c * e.len + n.c * n.len) / L; e.len = L; edges.splice((i + 1) % edges.length, 1); ch = true; break; }
      }
    }
  };
  merge();
  const verts = () => edges.map((e, i) => { const a = edges[(i - 1 + edges.length) % edges.length]; return a.h ? [e.c, a.c] : [a.c, e.c]; });
  for (let g = 0; g < 20 && edges.length > 4; g++) {
    const v = verts();
    let idx = -1, minL = 0.8;
    for (let i = 0; i < edges.length; i++) { const L = Math.hypot(v[(i + 1) % v.length][0] - v[i][0], v[(i + 1) % v.length][1] - v[i][1]); if (L < minL) { minL = L; idx = i; } }
    if (idx < 0) break;
    edges.splice(idx, 1); merge();
  }
  if (edges.length < 4 || edges.length % 2) return null;
  return rotate(verts(), t);
}

/**
 * @param src      original buildings
 * @param roads    city.roads
 * @param extra    { rail: [...], creeks: [...], skipRoadIds:Set }
 */
export function fixBuildings(src, roads, extra = {}) {
  const st = { in: src.length, sliver: 0, duplicate: 0, rect: 0, ortho: 0, poly: 0, snapped: 0, overlapCut: 0, overlapDrop: 0 };
  // ---------------------------------------------------------------- 1. clean + duplicates
  let L = [];
  for (const b of src) {
    const p = cleanRing(b.p, 0.15, 4);
    if (p.length < 3 || Math.abs(area(p)) < 6) { st.sliver++; continue; }
    L.push({ src: b, orig: p, p, A0: Math.abs(area(p)) });
  }
  const g0 = new Grid(30);
  L.forEach((b, i) => { b.i = i; b.box = bbox(b.p); g0.addBox(b, ...b.box); });
  for (const a of L) {
    if (a.dead) continue;
    for (const b of g0.query((a.box[0] + a.box[2]) / 2, (a.box[1] + a.box[3]) / 2, Math.max(a.box[2] - a.box[0], a.box[3] - a.box[1]) / 2 + 1)) {
      if (b === a || b.dead || b.i < a.i) continue;
      if (b.box[0] > a.box[2] || b.box[2] < a.box[0] || b.box[1] > a.box[3] || b.box[3] < a.box[1]) continue;
      if (!polysOverlap(a.p, b.p)) continue;
      const I = overlapRaster(a.p, b.p);
      const small = a.A0 < b.A0 ? a : b, big = small === a ? b : a;
      if (I > 0.5 * small.A0) {
        // keep the named one (OSM) if any, else the larger
        const drop = small.src.osm && !big.src.osm ? big : small;
        drop.dead = true; st.duplicate++;
      }
    }
  }
  L = L.filter(b => !b.dead);

  const sg = corridorGrid(roads, extra.rail || [], extra.creeks || [], extra.skipRoadIds || new Set());
  const nearestRoadDir = (x, z) => { let best = null; for (const s of sg.query(x, z, 30)) { if (s.k !== 'road') continue; const q = segPointDist(x, z, s.ax, s.az, s.bx, s.bz); const d = q.d - s.hw; if (!best || d < best.d) best = { d, dir: s.dir }; } return best; };

  // ---------------------------------------------------------------- 2. regularize, no rotation
  for (const b of L) {
    const p = b.p, A = Math.abs(area(p));
    const m = minAreaRect(p);
    let t = m.t;
    const [cx, cz] = centroid(p);
    const r = nearestRoadDir(cx, cz);
    if (r && r.d < 15) { const d = diff90(t, r.dir); if (Math.abs(d) < 6 * DEG) { t -= d; st.snapped++; } }
    const rectness = A / m.area;
    let q = null, kind = 'rect';
    if (rectness > 0.85 || p.length <= 4) {
      const e = extentsAt(p, t);
      const k = Math.sqrt(Math.min(1, (m.area / 4) / (e.a * e.b)));
      q = rectPoly(e.cx, e.cz, t, e.a * k, e.b * k);
      st.rect++;
    } else {
      const o = orthogonalize(p, t);
      if (o && !selfIntersects(o)) {
        const oc = cleanRing(o, 0.05, 2);
        const ratio = Math.abs(area(oc)) / A;
        if (ratio > 0.85 && ratio < 1.15 && iou(oc, p) > 0.85) { q = oc; kind = 'ortho'; st.ortho++; }
      }
      if (!q) { q = p; kind = 'poly'; st.poly++; }
    }
    if (area(q) < 0) q = q.slice().reverse();
    b.p = q; b.t = t; b.kind = kind;
  }

  // ---------------------------------------------------------------- 3. cut what invades streets / rail / creeks
  L = cutCorridors(L, sg, st);

  // ---------------------------------------------------------------- 4. overlaps between neighbours
  const g = new Grid(30);
  L.forEach((b, i) => { b.i = i; b.box = bbox(b.p); g.addBox(b, ...b.box); });
  for (const a of L) {
    if (a.dead) continue;
    for (const b of g.query((a.box[0] + a.box[2]) / 2, (a.box[1] + a.box[3]) / 2, Math.max(a.box[2] - a.box[0], a.box[3] - a.box[1]) / 2 + 1)) {
      if (b === a || b.dead || a.dead || b.i < a.i) continue;
      const A = bbox(a.p), Bb = bbox(b.p);
      if (Bb[0] > A[2] || Bb[2] < A[0] || Bb[1] > A[3] || Bb[3] < A[1]) continue;
      if (!polysOverlap(a.p, b.p)) continue;
      const I = overlapRaster(a.p, b.p, 0.12);
      if (I < 0.03) continue;
      const Aa = Math.abs(area(a.p)), Ab = Math.abs(area(b.p));
      const small = Aa < Ab ? a : b, big = small === a ? b : a;
      // cut the small one along the edge of the big one that keeps most of it
      const hull = isConvex(big.p) ? big.p : rectPoly(...(() => { const m = minAreaRect(big.p); return [m.cx, m.cz, m.t, m.a, m.b]; })());
      let best = null;
      for (let i = 0; i < hull.length; i++) {
        const p0 = hull[i], p1 = hull[(i + 1) % hull.length], l = Math.hypot(p1[0] - p0[0], p1[1] - p0[1]);
        if (l < 0.1) continue;
        // outward normal of a CCW polygon in x/z: (dz, -dx)
        const nx = (p1[1] - p0[1]) / l, nz = -(p1[0] - p0[0]) / l;
        const cut = clipHalf(small.p, p0[0] + nx * 0.05, p0[1] + nz * 0.05, nx, nz);
        const Ac = cut.length >= 3 ? Math.abs(area(cut)) : 0;
        if (!best || Ac > best.A) best = { A: Ac, p: cut };
      }
      if (!best || best.A < 0.45 * Math.abs(area(small.p)) || best.A < 10) { small.dead = true; st.overlapDrop++; continue; }
      small.p = cleanRing(best.p, 0.15, 3);
      if (area(small.p) < 0) small.p.reverse();
      if (small.kind !== 'poly' && !(small.kind === 'rect' ? isRectangle(small.p) : isRectilinear(small.p))) small.kind = 'poly';
      st.overlapCut++;
    }
  }
  L = L.filter(b => !b.dead);
  for (const b of L) b.t = minAreaRect(b.p).t;
  st.out = L.length;
  return { list: L, stats: st };
}

/** grid of corridor segments (carriageway half-width + 0.25 m, rail 2.4 m, creek water + bank) */
export function corridorGrid(roads, rail, creeks, skip = new Set()) {
  const segs = [];
  const add = (k, ax, az, bx, bz, hw, extra = {}) => { const len = Math.hypot(bx - ax, bz - az); if (len < 0.3) return; segs.push({ k, ax, az, bx, bz, len, ux: (bx - ax) / len, uz: (bz - az) / len, hw, dir: Math.atan2(bz - az, bx - ax), ...extra }); };
  for (const r of roads) {
    if (['footway', 'path', 'steps', 'pedestrian'].includes(r.hw) || skip.has(r.id)) continue;
    for (let i = 0; i < r.p.length - 1; i++) add('road', r.p[i][0], r.p[i][1], r.p[i + 1][0], r.p[i + 1][1], (r.w || 6) / 2 + 0.25, { name: r.n });
  }
  for (const rl of rail) for (let i = 0; i < rl.pts.length - 1; i++) add('rail', rl.pts[i][0], rl.pts[i][1], rl.pts[i + 1][0], rl.pts[i + 1][1], 2.4);
  for (const c of creeks) for (let i = 0; i < c.pts.length - 1; i++) {
    if (c.pts[i][4] === 2) continue; // culvert under a street: nothing to cut
    add('creek', c.pts[i][0], c.pts[i][1], c.pts[i + 1][0], c.pts[i + 1][1], c.pts[i][3] / 2 + (c.pts[i][4] === 1 ? 0.8 : 0.4));
  }
  const sg = new Grid(30);
  for (const s of segs) sg.addBox(s, Math.min(s.ax, s.bx) - s.hw, Math.min(s.az, s.bz) - s.hw, Math.max(s.ax, s.bx) + s.hw, Math.max(s.az, s.bz) + s.hw);
  return sg;
}

/**
 * Cut every part of a building that lies inside a corridor (straight cut along the corridor edge,
 * keeping the side of the building's centroid). Buildings left with < 55% of their area are dropped.
 * items: { p, A0, kind } (kind: rect | ortho | poly). Returns the surviving items.
 */
export function cutCorridors(list, sg, st) {
  for (const b of list) {
    for (let pass = 0; pass < 4; pass++) {
      const [x0, z0, x1, z1] = bbox(b.p);
      let changed = false;
      for (const s of sg.query((x0 + x1) / 2, (z0 + z1) / 2, Math.max(x1 - x0, z1 - z0) / 2 + 8)) {
        let worst = 0;
        for (let i = 0; i < b.p.length; i++) {
          const a = b.p[i], c = b.p[(i + 1) % b.p.length];
          const n = Math.max(1, Math.ceil(Math.hypot(c[0] - a[0], c[1] - a[1]) / 0.7));
          for (let k = 0; k < n; k++) {
            const x = a[0] + (c[0] - a[0]) * k / n, z = a[1] + (c[1] - a[1]) * k / n;
            const along = (x - s.ax) * s.ux + (z - s.az) * s.uz;
            if (along < -0.3 || along > s.len + 0.3) continue;
            worst = Math.max(worst, s.hw - segPointDist(x, z, s.ax, s.az, s.bx, s.bz).d);
          }
        }
        if (worst <= 0.05) continue;
        const [cx, cz] = centroid(b.p);
        const nx = -s.uz, nz = s.ux, side = Math.sign((cx - s.ax) * nx + (cz - s.az) * nz) || 1;
        const cut = clipHalf(b.p, s.ax + nx * side * s.hw, s.az + nz * side * s.hw, nx * side, nz * side);
        const Ac = cut.length >= 3 ? Math.abs(area(cut)) : 0;
        if (Ac < 0.55 * b.A0 || Ac < 12) { b.dead = true; st[s.k + 'Drop'] = (st[s.k + 'Drop'] || 0) + 1; break; }
        b.p = cleanRing(cut, 0.15, 3);
        if (area(b.p) < 0) b.p.reverse();
        if (b.kind === 'rect' && !isRectangle(b.p)) b.kind = isRectilinear(b.p) ? 'ortho' : 'poly';
        else if (b.kind === 'ortho' && !isRectilinear(b.p)) b.kind = 'poly';
        st[s.k + 'Cut'] = (st[s.k + 'Cut'] || 0) + 1;
        changed = true;
      }
      if (b.dead || !changed) break;
    }
  }
  return list.filter(b => !b.dead);
}

export function isRectilinear(p, tolDeg = 4) {
  for (let i = 0; i < p.length; i++) {
    const a = p[(i - 1 + p.length) % p.length], b = p[i], c = p[(i + 1) % p.length];
    const ux = b[0] - a[0], uz = b[1] - a[1], vx = c[0] - b[0], vz = c[1] - b[1];
    const cos = Math.abs(ux * vx + uz * vz) / (Math.hypot(ux, uz) * Math.hypot(vx, vz) || 1);
    if (cos > Math.sin(tolDeg * DEG)) return false;
  }
  return true;
}
export function isRectangle(p) { return p.length === 4 && isRectilinear(p); }
