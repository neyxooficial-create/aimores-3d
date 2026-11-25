// Light-weight railway (Estrada de Ferro Vitória-Minas): ballast strip with the sleepers painted
// in its texture + two steel rails per track. Replaces the heavy per-sleeper geometry.
import * as THREE from 'three';
import { GeoBuilder, rng, srgb, valueNoise, fbm, normalFromHeight } from './util.js';

function ballastTexture() {
  // u across 3.4 m of ballast, v along one sleeper pitch (0.6 m)
  const W = 256, H = 64;
  const c = document.createElement('canvas');
  c.width = W; c.height = H;
  const g = c.getContext('2d');
  const img = g.createImageData(W, H);
  const n = valueNoise(64, 7), R = rng(3);
  const hf = new Float32Array(W * H);
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const i = y * W + x;
    const u = x / W;
    const stone = fbm(n, x / 3, y / 3, 2), sp = R();
    let r = 120 + 50 * stone, gg = 112 + 46 * stone, b = 100 + 40 * stone;
    if (sp > 0.93) { r *= 0.7; gg *= 0.7; b *= 0.7; }
    let h = stone;
    // concrete sleeper across the middle 2.6 m, 0.24 m wide
    const inSleeper = u > 0.12 && u < 0.88 && Math.abs(y - H / 2) < H * 0.2;
    if (inSleeper) { const k = 168 + 10 * stone; r = k; gg = k * 0.98; b = k * 0.94; h = 1.4; }
    // darker oily band where the rails sit
    if (Math.abs(u - 0.29) < 0.04 || Math.abs(u - 0.71) < 0.04) { r *= 0.62; gg *= 0.58; b *= 0.55; }
    // shoulders taper (lighter, fewer stones) at the edges
    const e = Math.min(u, 1 - u);
    if (e < 0.06) { r = r * 0.9 + 20; gg = gg * 0.9 + 16; b = b * 0.9 + 12; }
    img.data[i * 4] = r; img.data[i * 4 + 1] = gg; img.data[i * 4 + 2] = b; img.data[i * 4 + 3] = 255;
    hf[i] = h;
  }
  g.putImageData(img, 0, 0);
  const map = new THREE.CanvasTexture(c);
  map.colorSpace = THREE.SRGBColorSpace;
  map.wrapS = map.wrapT = THREE.RepeatWrapping;
  map.anisotropy = 8;
  return { map, normalMap: normalFromHeight(hf, W, H, 3) };
}

/** Douglas–Peucker on [x,z] with a height array kept in sync. */
function simplify(pts, hs, tol) {
  const keep = new Uint8Array(pts.length);
  keep[0] = keep[pts.length - 1] = 1;
  const stack = [[0, pts.length - 1]];
  while (stack.length) {
    const [a, b] = stack.pop();
    let best = -1, bd = tol;
    const [ax, az] = pts[a], [bx, bz] = pts[b];
    const dx = bx - ax, dz = bz - az, L = Math.hypot(dx, dz) || 1;
    for (let i = a + 1; i < b; i++) {
      const d = Math.abs((pts[i][0] - ax) * dz - (pts[i][1] - az) * dx) / L + Math.abs(hs[i] - (hs[a] + (hs[b] - hs[a]) * (i - a) / (b - a))) * 2;
      if (d > bd) { bd = d; best = i; }
    }
    if (best > 0) { keep[best] = 1; stack.push([a, best], [best, b]); }
  }
  const P = [], H = [];
  for (let i = 0; i < pts.length; i++) if (keep[i]) { P.push(pts[i]); H.push(hs[i]); }
  return [P, H];
}

export function buildRailLite(city, T) {
  const group = new THREE.Group();
  group.name = 'ferrovia';
  const ballast = new GeoBuilder(false, true);
  const steel = new GeoBuilder(false, false);
  const tex = ballastTexture();
  for (const r of city.rail) {
    const [P, H] = simplify(r.pts, r.h, 0.04);
    let v = 0;
    for (let i = 0; i < P.length - 1; i++) {
      const [ax, az] = P[i], [bx, bz] = P[i + 1];
      const L = Math.hypot(bx - ax, bz - az);
      if (L < 0.05) continue;
      // miter-ish normals using neighbours for smooth curves
      const nrm = k => {
        const p0 = P[Math.max(0, k - 1)], p1 = P[Math.min(P.length - 1, k + 1)];
        const dx = p1[0] - p0[0], dz = p1[1] - p0[1], l = Math.hypot(dx, dz) || 1;
        return [-dz / l, dx / l];
      };
      const na = nrm(i), nb = nrm(i + 1);
      const ya = H[i], yb = H[i + 1];
      const hw = 1.7, v0 = v / 0.6, v1 = (v + L) / 0.6;
      const A = (s, y) => [ax + na[0] * s, y, az + na[1] * s], B = (s, y) => [bx + nb[0] * s, y, bz + nb[1] * s];
      // top of ballast + sloped shoulders down to the ground
      const top = (p, q, r2, s) => {
        const ny = (q[2] - p[2]) * (r2[0] - p[0]) - (q[0] - p[0]) * (r2[2] - p[2]);
        return ny;
      };
      const quadUp = (b, p, q, r2, s, uv) => {
        if (top(p, q, r2, s) >= 0) b.quad(p, q, r2, s, uv[0], uv[1], uv[2], uv[3]);
        else b.quad(s, r2, q, p, uv[3], uv[2], uv[1], uv[0]);
      };
      // ballast top just under the rail foot, but never below the ground surface
      const gy = (p, s) => T.at(p[0] + (p === P[i] ? na : nb)[0] * s, p[1] + (p === P[i] ? na : nb)[1] * s) + 0.06;
      const ta = (s) => Math.max(ya - 0.11, gy(P[i], s)), tb = (s) => Math.max(yb - 0.11, gy(P[i + 1], s));
      quadUp(ballast, A(-hw, ta(-hw)), B(-hw, tb(-hw)), B(hw, tb(hw)), A(hw, ta(hw)), [[0.06, v0], [0.06, v1], [0.94, v1], [0.94, v0]]);
      const ga = T.at(ax, az) - 0.3, gb = T.at(bx, bz) - 0.3;
      quadUp(ballast, A(-hw - 1.0, Math.min(ga, ya - 0.6)), B(-hw - 1.0, Math.min(gb, yb - 0.6)), B(-hw, tb(-hw)), A(-hw, ta(-hw)), [[0, v0], [0, v1], [0.06, v1], [0.06, v0]]);
      quadUp(ballast, A(hw, ta(hw)), B(hw, tb(hw)), B(hw + 1.0, Math.min(gb, yb - 0.6)), A(hw + 1.0, Math.min(ga, ya - 0.6)), [[0.94, v0], [0.94, v1], [1, v1], [1, v0]]);
      // rails (gauge 1.0 m — the EFVM is metre gauge)
      for (const s of [-0.5, 0.5]) {
        const w = 0.035, h0 = -0.1, h1 = 0.02;
        steel.quad(A(s - w, ya + h1), B(s - w, yb + h1), B(s + w, yb + h1), A(s + w, ya + h1));
        steel.quad(A(s - w, ya + h0), B(s - w, yb + h0), B(s - w, yb + h1), A(s - w, ya + h1));
        steel.quad(A(s + w, ya + h1), B(s + w, yb + h1), B(s + w, yb + h0), A(s + w, ya + h0));
      }
      v += L;
    }
  }
  const bm = new THREE.Mesh(ballast.geometry(), new THREE.MeshStandardMaterial({ map: tex.map, normalMap: tex.normalMap, roughness: 0.95, polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -6 }));
  bm.receiveShadow = true;
  const sm = new THREE.Mesh(steel.geometry(), new THREE.MeshStandardMaterial({ color: 0x8a8a8c, roughness: 0.35, metalness: 0.85, side: THREE.DoubleSide }));
  sm.receiveShadow = true;
  group.add(bm, sm);
  void srgb;
  return group;
}
