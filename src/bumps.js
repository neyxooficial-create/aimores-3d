// Quebra-molas (lombada física, padrão CONTRAN tipo A: 3,70 m de comprimento, 10 cm de altura),
// pintados com faixas amarelas e pretas, com placa "Lombada" antes de cada um.
import * as THREE from 'three';
import { GeoBuilder } from './util.js';

const LEN = 3.7, HGT = 0.1, RAMP = 1.5;

/** Height added by bumps at x,z (used by walk/drive modes and by traffic). */
export function bumpField(bumps) {
  return (x, z) => {
    for (const [bx, bz, ux, uz, hw] of bumps) {
      const dx = x - bx, dz = z - bz;
      if (dx * dx + dz * dz > 25) continue;
      const along = dx * ux + dz * uz, across = Math.abs(-dx * uz + dz * ux);
      if (across > hw || Math.abs(along) > LEN / 2) continue;
      const a = Math.abs(along), plateau = LEN / 2 - RAMP;
      const k = a <= plateau ? 1 : 1 - (a - plateau) / RAMP;
      return HGT * k * k * (3 - 2 * k);
    }
    return 0;
  };
}

export function buildBumps(bumps, T, roadLift = 0.1) {
  const g = new THREE.Group();
  g.name = 'quebra-molas';
  if (!bumps.length) return g;
  const gb = new GeoBuilder(false, true);
  const N = 10;
  for (const [bx, bz, ux, uz, hw] of bumps) {
    const vx = -uz, vz = ux;
    // profile along the road, extruded across its width
    const prof = [];
    for (let i = 0; i <= N; i++) {
      const along = -LEN / 2 + LEN * i / N, a = Math.abs(along), plateau = LEN / 2 - RAMP;
      const k = a <= plateau ? 1 : 1 - (a - plateau) / RAMP;
      prof.push([along, HGT * k * k * (3 - 2 * k)]);
    }
    const steps = Math.max(2, Math.ceil(hw * 2 / 1.5));
    for (let j = 0; j < steps; j++) {
      const c0 = -hw + 2 * hw * j / steps, c1 = -hw + 2 * hw * (j + 1) / steps;
      for (let i = 0; i < N; i++) {
        const [a0, h0] = prof[i], [a1, h1] = prof[i + 1];
        const P = (al, cr, h) => { const x = bx + ux * al + vx * cr, z = bz + uz * al + vz * cr; return [x, T.at(x, z) + roadLift + 0.035 + h, z]; };
        const p00 = P(a0, c0, h0), p10 = P(a1, c0, h1), p11 = P(a1, c1, h1), p01 = P(a0, c1, h0);
        // uv.u = across (stripes), uv.v = along
        const ny = (p10[2] - p00[2]) * (p01[0] - p00[0]) - (p10[0] - p00[0]) * (p01[2] - p00[2]);
        const uv = (cr, al) => [(cr + hw) / 0.6, al / LEN + 0.5];
        if (ny >= 0) gb.quad(p00, p10, p11, p01, uv(c0, a0), uv(c0, a1), uv(c1, a1), uv(c1, a0));
        else gb.quad(p01, p11, p10, p00, uv(c1, a0), uv(c1, a1), uv(c0, a1), uv(c0, a0));
      }
    }
  }
  const cv = document.createElement('canvas'); cv.width = 128; cv.height = 128;
  const x = cv.getContext('2d');
  x.fillStyle = '#2b2b2b'; x.fillRect(0, 0, 128, 128);
  x.fillStyle = '#e8b21c';
  // diagonal yellow stripes, slightly worn
  x.save(); x.beginPath(); x.rect(0, 0, 128, 128); x.clip();
  for (let k = -128; k < 256; k += 64) { x.beginPath(); x.moveTo(k, 0); x.lineTo(k + 32, 0); x.lineTo(k + 32 + 128, 128); x.lineTo(k + 128, 128); x.fill(); }
  x.restore();
  for (let i = 0; i < 400; i++) { x.fillStyle = `rgba(60,60,60,${Math.random() * 0.35})`; x.fillRect(Math.random() * 128, Math.random() * 128, 2 + Math.random() * 6, 2); }
  const tex = new THREE.CanvasTexture(cv); tex.wrapS = tex.wrapT = THREE.RepeatWrapping; tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 8;
  const m = new THREE.Mesh(gb.geometry(), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.75, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -8 }));
  m.receiveShadow = true;
  g.add(m);
  // warning signs "LOMBADA" (yellow diamond) on the right of each approach, 25 m before
  const sc = document.createElement('canvas'); sc.width = sc.height = 128;
  const s = sc.getContext('2d');
  s.translate(64, 64); s.rotate(Math.PI / 4); s.fillStyle = '#111'; s.fillRect(-44, -44, 88, 88); s.fillStyle = '#f2c200'; s.fillRect(-40, -40, 80, 80); s.rotate(-Math.PI / 4);
  s.fillStyle = '#111'; s.beginPath(); s.moveTo(-26, 12); s.quadraticCurveTo(0, -20, 26, 12); s.lineTo(26, 16); s.lineTo(-26, 16); s.fill();
  const stex = new THREE.CanvasTexture(sc); stex.colorSpace = THREE.SRGBColorSpace;
  const signMat = new THREE.MeshStandardMaterial({ map: stex, transparent: true, alphaTest: 0.5, side: THREE.DoubleSide });
  const poleMat = new THREE.MeshStandardMaterial({ color: 0x8e9296, metalness: 0.5, roughness: 0.4 });
  const poleGeo = new THREE.CylinderGeometry(0.035, 0.035, 2.4, 6); poleGeo.translate(0, 1.2, 0);
  const plate = new THREE.PlaneGeometry(0.75, 0.75);
  const n = bumps.length * 2;
  const poles = new THREE.InstancedMesh(poleGeo, poleMat, n), plates = new THREE.InstancedMesh(plate, signMat, n);
  const M = new THREE.Matrix4(), q = new THREE.Quaternion(), v = new THREE.Vector3(), one = new THREE.Vector3(1, 1, 1), up = new THREE.Vector3(0, 1, 0);
  let k = 0;
  for (const [bx, bz, ux, uz, hw] of bumps) {
    for (const d of [-1, 1]) {
      const vx = -uz, vz = ux;
      const px = bx + ux * 22 * d + vx * (hw + 0.9) * -d, pz = bz + uz * 22 * d + vz * (hw + 0.9) * -d;
      const y = T.at(px, pz);
      M.makeTranslation(px, y, pz); poles.setMatrixAt(k, M);
      q.setFromAxisAngle(up, Math.atan2(ux * d, uz * d)); v.set(px, y + 2.1, pz); M.compose(v, q, one); plates.setMatrixAt(k, M);
      k++;
    }
  }
  g.add(poles, plates);
  return g;
}
