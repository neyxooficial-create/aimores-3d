// Córrego: flowing water ribbon, natural banks with stones and grass, concrete canal stretches,
// culvert headwalls where it passes under streets / the railway / Centro, cascade down to the river.
import * as THREE from 'three';
import { GeoBuilder, hash, rng, srgb, makeCanvas, canvasTex } from './util.js';
import { makeWaterMaterial } from './water.js';

function stoneTexture() {
  const [c, g] = makeCanvas(256, 256);
  g.fillStyle = '#6d6151'; g.fillRect(0, 0, 256, 256);
  const R = rng(91);
  for (let i = 0; i < 900; i++) {
    const x = R() * 256, y = R() * 256, r = 2 + R() * 7, s = 70 + R() * 90;
    g.fillStyle = `rgb(${s + 10 | 0},${s | 0},${s - 14 | 0})`;
    g.beginPath(); g.ellipse(x, y, r, r * (0.6 + R() * 0.4), R() * 3, 0, 7); g.fill();
    g.fillStyle = 'rgba(0,0,0,0.25)';
    g.beginPath(); g.ellipse(x + 1, y + 1.5, r, r * 0.5, 0, 0, 3.14); g.fill();
  }
  return canvasTex(c);
}
function concreteTexture() {
  const [c, g] = makeCanvas(256, 256);
  g.fillStyle = '#a9a69e'; g.fillRect(0, 0, 256, 256);
  const R = rng(17);
  for (let i = 0; i < 4000; i++) { const s = 140 + R() * 60; g.fillStyle = `rgba(${s},${s},${s - 4},0.35)`; g.fillRect(R() * 256, R() * 256, 2, 2); }
  g.fillStyle = 'rgba(60,55,45,0.35)';
  for (let x = 0; x < 256; x += 128) g.fillRect(x, 0, 2, 256); // expansion joints
  const grd = g.createLinearGradient(0, 160, 0, 256);
  grd.addColorStop(0, 'rgba(70,80,50,0)'); grd.addColorStop(1, 'rgba(60,70,40,0.55)'); // damp algae at the base
  g.fillStyle = grd; g.fillRect(0, 160, 256, 96);
  return canvasTex(c);
}

/** Add a quad making sure its face looks up (+y), whatever the input winding. */
function quadUp(b, p0, p1, p2, p3, u0, u1, u2, u3, col, cols) {
  const ny = (p1[2] - p0[2]) * (p2[0] - p0[0]) - (p1[0] - p0[0]) * (p2[2] - p0[2]);
  if (ny >= 0) b.quad(p0, p1, p2, p3, u0, u1, u2, u3, col, null, cols);
  else b.quad(p3, p2, p1, p0, u3, u2, u1, u0, col, null, cols ? [cols[3], cols[2], cols[1], cols[0]] : null);
  return ny >= 0;
}

export function buildCreek(city, T, day, Q) {
  const C = city.creek;
  if (!C) return null;
  const P = C.pts.map(([x, z, ws, w, mode]) => ({ x, z, ws, w, mode }));
  const n = P.length;
  {
    // small natural meanders on the open (natural) stretches only, fading out near culverts/canals
    let s0 = 0;
    const openness = P.map((p, i) => {
      let d = 99;
      for (let k = Math.max(0, i - 8); k < Math.min(n, i + 9); k++) if (P[k].mode !== 0) d = Math.min(d, Math.abs(k - i));
      return Math.min(1, d / 8);
    });
    const off = [];
    for (let i = 0; i < n; i++) {
      if (i) s0 += Math.hypot(P[i].x - P[i - 1].x, P[i].z - P[i - 1].z);
      off.push((Math.sin(s0 / 11.0) * 0.9 + Math.sin(s0 / 4.3 + 1.7) * 0.35) * openness[i] * Math.min(1.2, P[i].w * 0.5));
    }
    for (let i = 1; i < n - 1; i++) {
      const a = P[i - 1], b = P[i + 1];
      let tx = b.x - a.x, tz = b.z - a.z; const L = Math.hypot(tx, tz) || 1;
      P[i].mx = P[i].x - tz / L * off[i]; P[i].mz = P[i].z + tx / L * off[i];
    }
    for (let i = 1; i < n - 1; i++) { P[i].x = P[i].mx; P[i].z = P[i].mz; }
  }
  // tangents / normals and downstream distance
  let s = 0;
  for (let i = 0; i < n; i++) {
    const a = P[Math.max(0, i - 1)], b = P[Math.min(n - 1, i + 1)];
    let tx = b.x - a.x, tz = b.z - a.z; const L = Math.hypot(tx, tz) || 1; tx /= L; tz /= L;
    P[i].tx = tx; P[i].tz = tz; P[i].nx = -tz; P[i].nz = tx;
    if (i) s += Math.hypot(P[i].x - P[i - 1].x, P[i].z - P[i - 1].z);
    P[i].s = s;
  }
  // slope (for cascades)
  for (let i = 0; i < n; i++) {
    const a = P[Math.max(0, i - 2)], b = P[Math.min(n - 1, i + 2)];
    P[i].slope = Math.max(0, (a.ws - b.ws) / Math.max(1, b.s - a.s));
  }

  const group = new THREE.Group();
  group.name = 'corrego';
  const water = new GeoBuilder(false, true);
  water.enableExtra();
  const bank = new GeoBuilder(true, true);
  const bed = new GeoBuilder(true, true);
  const conc = new GeoBuilder(true, true);
  const dark = new GeoBuilder(false, false);
  const stones = [], grass = [], riparian = [];
  const R = rng(1234);
  const mud = srgb(138, 118, 88), soil = srgb(160, 142, 106), grassC = srgb(134, 146, 84), bedC = srgb(128, 116, 92);
  const concC = [1, 1, 1];

  const side = (p, off, y) => [p.x + p.nx * off, y, p.z + p.nz * off];
  let flowV = 0;
  for (let i = 0; i < n - 1; i++) {
    const a = P[i], b = P[i + 1];
    const segL = Math.hypot(b.x - a.x, b.z - a.z);
    const vA = flowV;
    flowV += segL * (1 + Math.min(4, a.slope * 25));
    const vB = flowV;
    if (a.mode === 2 && b.mode === 2) continue;
    const m = a.mode === 2 ? b.mode : a.mode;
    const hwA = a.w / 2, hwB = b.w / 2;
    // water ribbon (slightly above the water level so it never hides under the carved bed)
    const foamA = Math.min(1, a.slope * 18), foamB = Math.min(1, b.slope * 18);
    const up = quadUp(water, side(a, -hwA, a.ws + 0.02), side(b, -hwB, b.ws + 0.02), side(b, hwB, b.ws + 0.02), side(a, hwA, a.ws + 0.02),
      [0, vA], [0, vB], [1, vB], [1, vA], null);
    // vertex order is a,b,c,a,c,d of the (possibly reversed) quad; tag b-side vertices with foamB
    const bSide = up ? [4, 3, 1] : [5, 2, 0];
    for (let k = 0; k < 6; k++) water.extra[water.n - 1 - k] = bSide.includes(k) ? foamB : foamA;
    if (m === 0) {
      // stream bed
      quadUp(bed, side(a, -hwA - 0.2, a.ws - 0.28), side(b, -hwB - 0.2, b.ws - 0.28), side(b, hwB + 0.2, b.ws - 0.28), side(a, hwA + 0.2, a.ws - 0.28),
        [a.x / 2, a.z / 2], [b.x / 2, b.z / 2], [b.x / 2 + 0.3, b.z / 2], [a.x / 2 + 0.3, a.z / 2], bedC);
      // banks: water edge -> 1.2 m -> top, draped on the carved terrain
      for (const sg of [-1, 1]) {
        const jitter = (p, k) => k ? 0.35 * Math.sin(p.s * 0.9 + sg * 2 + k) : 0;
        const offs = [0, 0.5, 1.3, 2.4];
        const ring = (p, hw) => offs.map((o, k) => {
          const d = sg * (hw + 0.1 + o + jitter(p, k));
          const x = p.x + p.nx * d, z = p.z + p.nz * d;
          const t = T.at(x, z);
          const y = k === 0 ? p.ws - 0.06 : k === offs.length - 1 ? t + 0.03 : Math.max(t + 0.05, p.ws + 0.08 * k);
          return [x, y, z];
        });
        const ra = ring(a, hwA), rb = ring(b, hwB);
        const cols = [mud, soil, grassC, null];
        for (let k = 0; k < offs.length - 1; k++) {
          const q = [ra[k], rb[k], rb[k + 1], ra[k + 1]];
          const outer = grassC.map(v => v * 1.0);
          const cq = [cols[k] || outer, cols[k] || outer, cols[k + 1] || outer, cols[k + 1] || outer];
          quadUp(bank, q[0], q[1], q[2], q[3], [q[0][0] / 2, q[0][2] / 2], [q[1][0] / 2, q[1][2] / 2], [q[2][0] / 2, q[2][2] / 2], [q[3][0] / 2, q[3][2] / 2], null, cq);
        }
      }
      // scatter stones in the bed and grass on the banks
      if (R() < 0.9) {
        const o = (R() - 0.5) * a.w * 1.1;
        stones.push([a.x + a.nx * o, a.ws - 0.15 + R() * 0.12, a.z + a.nz * o, 0.12 + R() * 0.28 + a.slope * 2, R()]);
      }
      for (let k = 0; k < 4; k++) {
        const sg = R() < 0.5 ? -1 : 1, o = sg * (hwA + 0.3 + R() * 2.6);
        const x = a.x + a.nx * o, z = a.z + a.nz * o;
        grass.push([x, T.at(x, z), z, 0.5 + R() * 0.7, R()]);
      }
      if (i % 4 === 0 && R() < 0.7) {
        const sg = R() < 0.5 ? -1 : 1, o = sg * (hwA + 3.2 + R() * 5);
        riparian.push([a.x + a.nx * o, a.z + a.nz * o, R() < 0.35 ? 10 : R() < 0.5 ? 1 : 8]);
      }
    } else if (m === 1) {
      // concrete canal: floor + two walls + coping
      const fy = a.ws - 0.3, fyb = b.ws - 0.3;
      const hw2a = hwA + 0.35, hw2b = hwB + 0.35;
      quadUp(conc, side(a, -hw2a, fy), side(b, -hw2b, fyb), side(b, hw2b, fyb), side(a, hw2a, fy), [0, a.s / 2], [0, b.s / 2], [1, b.s / 2], [1, a.s / 2], concC);
      for (const sg of [-1, 1]) {
        const ta = Math.max(T.at(a.x + a.nx * sg * (hw2a + 0.4), a.z + a.nz * sg * (hw2a + 0.4)), a.ws + 0.6) + 0.25;
        const tb = Math.max(T.at(b.x + b.nx * sg * (hw2b + 0.4), b.z + b.nz * sg * (hw2b + 0.4)), b.ws + 0.6) + 0.25;
        const p0 = side(a, sg * hw2a, fy), p1 = side(b, sg * hw2b, fyb), p2 = side(b, sg * hw2b, tb), p3 = side(a, sg * hw2a, ta);
        if (sg > 0) conc.quad(p0, p1, p2, p3, [a.s / 2, 0], [b.s / 2, 0], [b.s / 2, 1], [a.s / 2, 1], concC);
        else conc.quad(p1, p0, p3, p2, [b.s / 2, 0], [a.s / 2, 0], [a.s / 2, 1], [b.s / 2, 1], concC);
        // coping (top of the wall)
        const o0 = sg * hw2a, o1 = sg * (hw2a + 0.3), u0 = sg * hw2b, u1 = sg * (hw2b + 0.3);
        const c0 = side(a, o0, ta), c1 = side(b, u0, tb), c2 = side(b, u1, tb), c3 = side(a, o1, ta);
        quadUp(conc, c0, c1, c2, c3, [0, 0], [1, 0], [1, 0.1], [0, 0.1], concC);
        // outer face down to the ground
        const g0 = side(a, o1, T.at(a.x + a.nx * o1, a.z + a.nz * o1) - 0.2), g1 = side(b, u1, T.at(b.x + b.nx * u1, b.z + b.nz * u1) - 0.2);
        if (sg > 0) conc.quad(c3, c2, g1, g0, [0, 0.2], [1, 0.2], [1, 0], [0, 0], concC);
        else conc.quad(c2, c3, g0, g1, [0, 0.2], [1, 0.2], [1, 0], [0, 0], concC);
      }
    }
  }
  // culvert headwalls at every open<->culvert transition
  for (let i = 0; i < n - 1; i++) {
    const a = P[i], b = P[i + 1];
    if ((a.mode === 2) === (b.mode === 2)) continue;
    const p = a.mode === 2 ? b : a; // the open end
    const dir = a.mode === 2 ? -1 : 1; // +1: culvert is downstream
    const hw = p.w / 2 + 0.6, top = Math.max(T.at(p.x + p.tx * dir * 1.2, p.z + p.tz * dir * 1.2), p.ws + 1.2) + 0.15;
    const cx = p.x + p.tx * dir * 0.6, cz = p.z + p.tz * dir * 0.6;
    const q = (o, y, f = 0) => [cx + p.nx * o + p.tx * dir * f, y, cz + p.nz * o + p.tz * dir * f];
    const W = hw + 1.0, y0 = p.ws - 0.4;
    // front face (facing the open channel), back is buried
    const front = [q(-W, y0), q(W, y0), q(W, top), q(-W, top)];
    if (dir > 0) conc.quad(front[1], front[0], front[3], front[2], [0, 0], [1, 0], [1, 1], [0, 1], concC);
    else conc.quad(front[0], front[1], front[2], front[3], [0, 0], [1, 0], [1, 1], [0, 1], concC);
    quadUp(conc, q(-W, top), q(W, top), q(W, top, 0.5), q(-W, top, 0.5), [0, 0], [1, 0], [1, 0.1], [0, 0.1], concC);
    // dark opening (box culvert mouth)
    const oh = Math.min(1.1, top - p.ws - 0.1), ow = p.w / 2 + 0.25;
    const o = [q(-ow, p.ws - 0.3, -0.02), q(ow, p.ws - 0.3, -0.02), q(ow, p.ws + oh, -0.02), q(-ow, p.ws + oh, -0.02)];
    if (dir > 0) dark.quad(o[1], o[0], o[3], o[2]); else dark.quad(o[0], o[1], o[2], o[3]);
    // wing walls
    for (const sg of [-1, 1]) {
      const w0 = q(sg * W, y0), w1 = q(sg * (W + 0.2), y0, -2.2), w2 = q(sg * (W + 0.2), top - 0.6, -2.2), w3 = q(sg * W, top);
      if (sg * dir > 0) conc.quad(w0, w1, w2, w3, [0, 0], [1, 0], [1, 1], [0, 1], concC);
      else conc.quad(w1, w0, w3, w2, [0, 0], [1, 0], [1, 1], [0, 1], concC);
    }
  }

  const wmat = makeWaterMaterial(day, { flow: true, deep: 0x23352a, shallow: 0x4e5a3e, flowSpeed: 0.45 });
  const wg = water.geometry();
  wg.setAttribute('shore', wg.getAttribute('extra'));
  const wm = new THREE.Mesh(wg, wmat);
  wm.renderOrder = 3;
  group.add(wm);
  const stoneTex = stoneTexture();
  const bm = new THREE.Mesh(bank.geometry(), new THREE.MeshStandardMaterial({ vertexColors: true, map: stoneTex, roughness: 0.95, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -4 }));
  bm.receiveShadow = true;
  group.add(bm);
  const bedM = new THREE.Mesh(bed.geometry(), new THREE.MeshStandardMaterial({ vertexColors: true, map: stoneTex, roughness: 0.8 }));
  bedM.receiveShadow = true;
  group.add(bedM);
  if (conc.count) {
    const cm = new THREE.Mesh(conc.geometry(), new THREE.MeshStandardMaterial({ vertexColors: true, map: concreteTexture(), roughness: 0.9, side: THREE.DoubleSide }));
    cm.castShadow = cm.receiveShadow = true;
    group.add(cm);
  }
  if (dark.count) group.add(new THREE.Mesh(dark.geometry(), new THREE.MeshBasicMaterial({ color: 0x0b0c0b, side: THREE.DoubleSide })));

  // stones (instanced)
  if (stones.length) {
    const geo = new THREE.DodecahedronGeometry(1, 0);
    geo.scale(1, 0.55, 0.8);
    const im = new THREE.InstancedMesh(geo, new THREE.MeshStandardMaterial({ color: 0x8a7f6c, roughness: 0.9, flatShading: true }), stones.length);
    const M = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), v = new THREE.Vector3(), sc = new THREE.Vector3(), col = new THREE.Color();
    stones.forEach(([x, y, z, r, h], k) => {
      e.set((h - 0.5) * 0.6, h * 6.28, (hash(h * 7) - 0.5) * 0.6);
      q.setFromEuler(e); v.set(x, y, z); sc.set(r, r, r);
      M.compose(v, q, sc); im.setMatrixAt(k, M);
      col.setRGB(0.55 + h * 0.3, 0.52 + h * 0.28, 0.46 + h * 0.24); im.setColorAt(k, col);
    });
    im.castShadow = Q !== 'low'; im.receiveShadow = true;
    group.add(im);
  }
  // grass tufts / reeds along the banks (crossed blades)
  if (grass.length && Q !== 'low') {
    const blade = new GeoBuilder(true, false);
    const gc = srgb(110, 130, 62), gt = srgb(160, 166, 92);
    for (let k = 0; k < 7; k++) {
      const a = k / 7 * Math.PI * 2, r = 0.12, lean = 0.25;
      const x0 = Math.cos(a) * r, z0 = Math.sin(a) * r;
      blade.tri([x0 - 0.05, 0, z0], [x0 + 0.05, 0, z0], [x0 * (1 + lean * 4), 1, z0 * (1 + lean * 4)], null, null, null, null, [0, 1, 0], [gc, gc, gt]);
      blade.tri([x0, 0, z0 - 0.05], [x0, 0, z0 + 0.05], [x0 * (1 + lean * 4), 1, z0 * (1 + lean * 4)], null, null, null, null, [0, 1, 0], [gc, gc, gt]);
    }
    const im = new THREE.InstancedMesh(blade.geometry(), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9, side: THREE.DoubleSide }), grass.length);
    const M = new THREE.Matrix4(), q = new THREE.Quaternion(), v = new THREE.Vector3(), sc = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
    grass.forEach(([x, y, z, h, r], k) => { q.setFromAxisAngle(up, r * 6.28); v.set(x, y - 0.05, z); sc.set(h, h * (0.8 + r * 0.6), h); M.compose(v, q, sc); im.setMatrixAt(k, M); });
    im.receiveShadow = true;
    group.add(im);
  }
  group.userData.riparian = riparian;
  group.userData.points = P;
  return group;
}

/** Grid cells (Uint8 GW*GH) that must keep full terrain detail (creek banks). */
export function creekDetailMask(city, T) {
  const mask = new Uint8Array(T.GW * T.GH);
  if (!city.creek) return mask;
  for (const [x, z, , w, mode] of city.creek.pts) {
    if (mode === 2) continue;
    const r0 = Math.round((z - T.ZMIN) / T.G), c0 = Math.round((x - T.XMIN) / T.G);
    const k = Math.ceil((w / 2 + 4) / T.G);
    for (let r = r0 - k; r <= r0 + k; r++) for (let c = c0 - k; c <= c0 + k; c++) {
      if (r >= 0 && c >= 0 && r < T.GH && c < T.GW) mask[r * T.GW + c] = 1;
    }
  }
  return mask;
}
