// Small 2D geometry toolkit shared by the data pipeline (x/z plane, meters).

export const TAU = Math.PI * 2;

export function area(p) {
  let a = 0;
  for (let i = 0; i < p.length; i++) {
    const q = p[(i + 1) % p.length];
    a += p[i][0] * q[1] - q[0] * p[i][1];
  }
  return a / 2;
}

export function centroid(p) {
  let a = 0, cx = 0, cz = 0;
  for (let i = 0; i < p.length; i++) {
    const [x0, z0] = p[i], [x1, z1] = p[(i + 1) % p.length];
    const f = x0 * z1 - x1 * z0;
    a += f; cx += (x0 + x1) * f; cz += (z0 + z1) * f;
  }
  if (Math.abs(a) < 1e-9) {
    let sx = 0, sz = 0;
    for (const [x, z] of p) { sx += x; sz += z; }
    return [sx / p.length, sz / p.length];
  }
  return [cx / (3 * a), cz / (3 * a)];
}

/** Remove duplicate / closing / collinear vertices and make the ring counter-clockwise (positive area). */
export function cleanRing(p, minEdge = 0.15, collinearDeg = 7) {
  let r = p.slice();
  if (r.length > 1 && dist(r[0], r[r.length - 1]) < 1e-6) r.pop();
  let changed = true;
  while (changed && r.length > 3) {
    changed = false;
    for (let i = 0; i < r.length && r.length > 3; i++) {
      const a = r[(i - 1 + r.length) % r.length], b = r[i], c = r[(i + 1) % r.length];
      if (dist(a, b) < minEdge) { r.splice(i, 1); changed = true; break; }
      const ux = b[0] - a[0], uz = b[1] - a[1], vx = c[0] - b[0], vz = c[1] - b[1];
      const lu = Math.hypot(ux, uz), lv = Math.hypot(vx, vz);
      const s = (ux * vz - uz * vx) / (lu * lv), d = (ux * vx + uz * vz) / (lu * lv);
      if (Math.abs(Math.atan2(s, d)) < collinearDeg * Math.PI / 180) { r.splice(i, 1); changed = true; break; }
    }
  }
  if (area(r) < 0) r.reverse();
  return r;
}

export const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);

export function convexHull(pts) {
  const p = pts.slice().sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const cross = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
  const lo = [], hi = [];
  for (const q of p) { while (lo.length >= 2 && cross(lo[lo.length - 2], lo[lo.length - 1], q) <= 0) lo.pop(); lo.push(q); }
  for (let i = p.length - 1; i >= 0; i--) { const q = p[i]; while (hi.length >= 2 && cross(hi[hi.length - 2], hi[hi.length - 1], q) <= 0) hi.pop(); hi.push(q); }
  hi.pop(); lo.pop();
  return lo.concat(hi);
}

/** Extents of a point set in a frame rotated by angle t: returns {cx,cz,a,b} (a along t, b across). */
export function extentsAt(p, t) {
  const ux = Math.cos(t), uz = Math.sin(t), vx = -uz, vz = ux;
  let u0 = 1e9, u1 = -1e9, v0 = 1e9, v1 = -1e9;
  for (const [x, z] of p) {
    const u = x * ux + z * uz, v = x * vx + z * vz;
    if (u < u0) u0 = u; if (u > u1) u1 = u; if (v < v0) v0 = v; if (v > v1) v1 = v;
  }
  const cu = (u0 + u1) / 2, cv = (v0 + v1) / 2;
  return { cx: cu * ux + cv * vx, cz: cu * uz + cv * vz, a: (u1 - u0) / 2, b: (v1 - v0) / 2, t };
}

/** Minimum-area enclosing rectangle via rotating calipers on the hull edges. */
export function minAreaRect(p) {
  const h = convexHull(p);
  let best = null;
  for (let i = 0; i < h.length; i++) {
    const a = h[i], b = h[(i + 1) % h.length];
    const t = Math.atan2(b[1] - a[1], b[0] - a[0]);
    const e = extentsAt(h, t);
    const ar = e.a * e.b;
    if (!best || ar < best.area) best = { ...e, area: ar * 4 };
  }
  return best;
}

/** Wrap an angle difference into [-PI/4, PI/4) — rectangles are symmetric under 90° turns. */
export function diff90(a, b) {
  let d = (a - b) % (Math.PI / 2);
  if (d < -Math.PI / 4) d += Math.PI / 2;
  if (d >= Math.PI / 4) d -= Math.PI / 2;
  return d;
}

export function rectPoly(cx, cz, t, a, b) {
  const ux = Math.cos(t), uz = Math.sin(t), vx = -uz, vz = ux;
  return [[-a, -b], [a, -b], [a, b], [-a, b]].map(([u, v]) => [cx + ux * u + vx * v, cz + uz * u + vz * v]);
}

export function rotate(p, t, ox = 0, oz = 0) {
  const c = Math.cos(t), s = Math.sin(t);
  return p.map(([x, z]) => [ox + (x - ox) * c - (z - oz) * s, oz + (x - ox) * s + (z - oz) * c]);
}

export function pointInPoly(x, z, p) {
  let inside = false;
  for (let i = 0, j = p.length - 1; i < p.length; j = i++) {
    const [xi, zi] = p[i], [xj, zj] = p[j];
    if ((zi > z) !== (zj > z) && x < (xj - xi) * (z - zi) / (zj - zi) + xi) inside = !inside;
  }
  return inside;
}

export function segPointDist(x, z, ax, az, bx, bz) {
  const dx = bx - ax, dz = bz - az, L2 = dx * dx + dz * dz || 1;
  let t = ((x - ax) * dx + (z - az) * dz) / L2;
  t = Math.max(0, Math.min(1, t));
  const px = ax + dx * t, pz = az + dz * t;
  return { d: Math.hypot(x - px, z - pz), t, px, pz };
}

/** Do two simple polygons properly intersect (edge crossing or containment)? */
export function polysOverlap(a, b) {
  for (let i = 0; i < a.length; i++) {
    const a0 = a[i], a1 = a[(i + 1) % a.length];
    for (let j = 0; j < b.length; j++) {
      if (segsCross(a0, a1, b[j], b[(j + 1) % b.length])) return true;
    }
  }
  return pointInPoly(a[0][0], a[0][1], b) || pointInPoly(b[0][0], b[0][1], a);
}

function segsCross(p, q, r, s) {
  const o = (a, b, c) => Math.sign((b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]));
  return o(p, q, r) * o(p, q, s) < 0 && o(r, s, p) * o(r, s, q) < 0;
}

export function selfIntersects(p) {
  const n = p.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 2; j < n; j++) {
      if (i === 0 && j === n - 1) continue;
      if (segsCross(p[i], p[(i + 1) % n], p[j], p[(j + 1) % n])) return true;
    }
  }
  return false;
}

/** Simple uniform-grid spatial hash for segments/points. */
export class Grid {
  constructor(cell = 40) { this.cell = cell; this.m = new Map(); }
  key(i, j) { return i * 100003 + j; }
  addBox(item, x0, z0, x1, z1) {
    const c = this.cell;
    for (let i = Math.floor(x0 / c); i <= Math.floor(x1 / c); i++)
      for (let j = Math.floor(z0 / c); j <= Math.floor(z1 / c); j++) {
        const k = this.key(i, j);
        let a = this.m.get(k); if (!a) this.m.set(k, a = []);
        a.push(item);
      }
  }
  query(x, z, r) {
    const c = this.cell, out = new Set();
    for (let i = Math.floor((x - r) / c); i <= Math.floor((x + r) / c); i++)
      for (let j = Math.floor((z - r) / c); j <= Math.floor((z + r) / c); j++) {
        const a = this.m.get(this.key(i, j));
        if (a) for (const it of a) out.add(it);
      }
    return out;
  }
}

export const round = (v, d = 2) => { const k = 10 ** d; return Math.round(v * k) / k; };
