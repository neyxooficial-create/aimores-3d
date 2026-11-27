// Marcos refeitos a partir das fotos do álbum:
//  - Igreja Matriz Nossa Senhora do Carmo (neogótica, torre central branca e ocre, agulha com
//    pináculos, óculo quadrilobado, portal em arco ogival com colunas, nave com janelas ogivais,
//    telhado cerâmico, adro com mureta de granilite e gradil branco, palmeiras)
//  - Estação Ferroviária de Aimorés (bloco de 2 pavimentos com frontão "AIMORÉS", ala térrea com
//    marquise em mãos-francesas, barrado verde-água, portas verdes, rampas e guarda-corpos,
//    plataforma com faixa amarela, totem da Vale)
//  - Praça João Pinheiro (piso de bloquete, lago sinuoso com borda de azulejo turquesa, ilha
//    florida, pontinhas brancas em arco com balaústres, bancos, postes de globo, pedras,
//    palmeiras, parquinho)
import * as THREE from 'three';
import { GeoBuilder, srgb, rng } from './util.js';
import { makeWaterMaterial } from './water.js';

// ------------------------------------------------------------------ helpers
function cv(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return [c, c.getContext('2d')]; }
function tex(c, repeat = false) { const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping; return t; }
/** Frame helper: local (x right, y up, z forward) -> world. */
function frame(cx, cz, fx, fz, y0) {
  // right-handed with y up (x × y = z), so the faces built by boxL & co. are wound outwards
  const rx = fz, rz = -fx;
  return (x, y, z) => [cx + rx * x + fx * z, y0 + y, cz + rz * x + fz * z];
}
/** textured box in local frame; uv per face scaled by size/texScale (u along face width). */
function boxL(gb, P, x0, x1, y0, y1, z0, z1, col, uvs = null) {
  const v = [P(x0, y0, z0), P(x1, y0, z0), P(x1, y0, z1), P(x0, y0, z1), P(x0, y1, z0), P(x1, y1, z0), P(x1, y1, z1), P(x0, y1, z1)];
  const U = k => (uvs && uvs[k]) || [[0, 0], [1, 0], [1, 1], [0, 1]];
  const f = (a, b, c, d, k) => { const u = U(k); gb.quad(v[a], v[b], v[c], v[d], u[0], u[1], u[2], u[3], col); };
  f(3, 2, 6, 7, 'front'); f(1, 0, 4, 5, 'back'); f(2, 1, 5, 6, 'right'); f(0, 3, 7, 4, 'left'); f(7, 6, 5, 4, 'top');
}

// ================================================================== IGREJA
function churchTextures() {
  const W = '#f6f2e6', O = '#d7a23e', O2 = '#c48d2c', D = '#3a2a1e', G = '#2c3a4c';
  const arch = (g, x, y, w, h, fill) => { g.beginPath(); g.moveTo(x, y + h); g.lineTo(x, y + w * 0.6); g.quadraticCurveTo(x, y, x + w / 2, y - w * 0.15); g.quadraticCurveTo(x + w, y, x + w, y + w * 0.6); g.lineTo(x + w, y + h); g.closePath(); g.fillStyle = fill; g.fill(); };
  // tower front: 256 x 1024 represents 5.6 m x 21 m
  const [c1, t] = cv(256, 1024);
  t.fillStyle = W; t.fillRect(0, 0, 256, 1024);
  t.fillStyle = O; t.fillRect(0, 0, 22, 1024); t.fillRect(234, 0, 22, 1024);                 // corner pilasters
  for (const y of [1024 - 330, 1024 - 640, 1024 - 860, 60]) { t.fillStyle = O; t.fillRect(0, y, 256, 16); t.fillStyle = 'rgba(0,0,0,0.12)'; t.fillRect(0, y + 16, 256, 4); }
  // portal: ochre arched frame, two white columns, dark door
  arch(t, 52, 1024 - 270, 152, 270, O); arch(t, 68, 1024 - 250, 120, 250, W); arch(t, 82, 1024 - 232, 92, 232, D);
  t.fillStyle = '#fff'; t.fillRect(58, 1024 - 190, 14, 190); t.fillRect(184, 1024 - 190, 14, 190);
  t.fillStyle = 'rgba(255,255,255,0.15)'; t.fillRect(126, 1024 - 200, 4, 200);
  // quatrefoil oculus with ochre surround
  const qf = (x, y, r, c) => { t.fillStyle = c; for (const [dx, dy] of [[0, -1], [1, 0], [0, 1], [-1, 0]]) { t.beginPath(); t.arc(x + dx * r * 0.55, y + dy * r * 0.55, r * 0.55, 0, 7); t.fill(); } };
  qf(128, 1024 - 420, 56, O); qf(128, 1024 - 420, 44, G); t.fillStyle = O; t.fillRect(124, 1024 - 360, 8, 26); t.fillRect(112, 1024 - 350, 32, 8);
  // bell opening (ogival) + small window
  arch(t, 98, 1024 - 820, 60, 130, O); arch(t, 106, 1024 - 812, 44, 118, '#1d1a17');
  arch(t, 108, 1024 - 600, 40, 90, O); arch(t, 114, 1024 - 594, 28, 80, G);
  t.fillStyle = O; t.beginPath(); t.arc(128, 1024 - 925, 30, 0, 7); t.fill(); t.fillStyle = '#fbf7ec'; t.beginPath(); t.arc(128, 1024 - 925, 22, 0, 7); t.fill();
  // tower side: same bands, bell opening + narrow window
  const [c2, s] = cv(256, 1024);
  s.drawImage(c1, 0, 0); s.fillStyle = W; s.fillRect(30, 1024 - 330, 196, 320); s.fillRect(40, 1024 - 520, 176, 170);
  s.fillStyle = O; for (const y of [1024 - 330]) s.fillRect(0, y, 256, 16);
  arch(s, 112, 1024 - 280, 32, 120, O); arch(s, 116, 1024 - 276, 24, 112, G);
  // nave side: 1024 x 256 represents 24 m x 9.5 m: buttress pilasters + 6 ogival windows
  const [c3, n] = cv(1024, 256);
  n.fillStyle = W; n.fillRect(0, 0, 1024, 256);
  n.fillStyle = O; n.fillRect(0, 0, 1024, 14); n.fillStyle = 'rgba(0,0,0,0.12)'; n.fillRect(0, 14, 1024, 4);
  n.fillStyle = '#b9b2a2'; n.fillRect(0, 226, 1024, 30);
  for (let k = 0; k < 7; k++) { n.fillStyle = O; n.fillRect(k * 1024 / 6.0 - 10, 14, 20, 212); }
  for (let k = 0; k < 6; k++) { const x = (k + 0.5) * 1024 / 6 - 22; arch(n, x - 6, 60, 56, 140, O); arch(n, x, 66, 44, 134, '#3b4f7a'); n.fillStyle = 'rgba(255,220,140,0.25)'; n.fillRect(x + 20, 80, 4, 118); }
  // nave front gable beside the tower (white with ochre edge)
  const [c4, f] = cv(512, 256);
  f.fillStyle = W; f.fillRect(0, 0, 512, 256); f.fillStyle = O; f.fillRect(0, 0, 18, 256); f.fillRect(494, 0, 18, 256); f.fillRect(0, 238, 512, 18);
  arch(f, 60, 70, 48, 120, O); arch(f, 66, 76, 36, 112, '#3b4f7a'); arch(f, 404, 70, 48, 120, O); arch(f, 410, 76, 36, 112, '#3b4f7a');
  // spire: white with ochre ribs
  const [c5, sp] = cv(128, 512);
  sp.fillStyle = '#f8f5ec'; sp.fillRect(0, 0, 128, 512); sp.fillStyle = O2; sp.fillRect(0, 0, 8, 512); sp.fillRect(120, 0, 8, 512);
  for (let y = 40; y < 512; y += 70) { sp.fillStyle = 'rgba(0,0,0,0.06)'; sp.fillRect(0, y, 128, 3); }
  return { towerFront: tex(c1), towerSide: tex(c2), naveSide: tex(c3), naveFront: tex(c4), spire: tex(c5) };
}

/**
 * Igreja Matriz N. Sra. do Carmo on its real footprint.
 * fr = { C: footprint centre, f: unit vector from the back to the front (towards Rua Santos Dumont),
 *        half: half length of the footprint, roadEdge(x, z): distance to the nearest carriageway edge }
 */
export function buildChurch(T, fr) {
  const g = new THREE.Group(); g.name = 'igreja';
  const C = fr.C, F = fr.f;
  const y0 = T.at(C[0], C[1]) - 0.2;
  const P = frame(C[0], C[1], F[0], F[1], y0);
  const tx = churchTextures();
  const mat = (t, opts = {}) => new THREE.MeshStandardMaterial({ map: t, roughness: 0.85, ...opts });
  const ochre = srgb(215, 162, 62), white = srgb(246, 242, 230), roofC = srgb(170, 84, 58);
  // tower front on the front edge of the footprint, nave behind it
  const tw = 2.8, tz1 = fr.half || 14, tz0 = tz1 - 5.6, th = 21;
  const naveL = 20, naveW = 11, naveH = 9.5, zf = tz0 + 1, zb = zf - naveL;
  const side = new GeoBuilder(true, true), front = new GeoBuilder(true, true), plain = new GeoBuilder(true, false), roof = new GeoBuilder(true, true);
  side.quad(P(naveW / 2, 0, zf), P(naveW / 2, 0, zb), P(naveW / 2, naveH, zb), P(naveW / 2, naveH, zf), [0, 0], [1, 0], [1, 1], [0, 1], [1, 1, 1]);
  side.quad(P(-naveW / 2, 0, zb), P(-naveW / 2, 0, zf), P(-naveW / 2, naveH, zf), P(-naveW / 2, naveH, zb), [0, 0], [1, 0], [1, 1], [0, 1], [1, 1, 1]);
  front.quad(P(-naveW / 2, 0, zf), P(naveW / 2, 0, zf), P(naveW / 2, naveH, zf), P(-naveW / 2, naveH, zf), [0, 0], [1, 0], [1, 1], [0, 1], [1, 1, 1]);
  plain.quad(P(naveW / 2, 0, zb), P(-naveW / 2, 0, zb), P(-naveW / 2, naveH, zb), P(naveW / 2, naveH, zb), null, null, null, null, white);
  const rh = 4.0;
  plain.tri(P(-naveW / 2, naveH, zf), P(naveW / 2, naveH, zf), P(0, naveH + rh, zf), null, null, null, white);
  plain.tri(P(naveW / 2, naveH, zb), P(-naveW / 2, naveH, zb), P(0, naveH + rh, zb), null, null, null, white);
  // plinth (the ground slopes: the walls go down into it) + ochre cornice
  boxL(plain, P, -naveW / 2 - 0.1, naveW / 2 + 0.1, -1.5, 0.6, zb - 0.1, zf, srgb(150, 146, 140));
  boxL(plain, P, naveW / 2 - 0.05, naveW / 2 + 0.25, naveH - 0.35, naveH, zb, zf, ochre);
  boxL(plain, P, -naveW / 2 - 0.25, -naveW / 2 + 0.05, naveH - 0.35, naveH, zb, zf, ochre);
  const ov = 0.6, sl = Math.hypot(naveW / 2 + ov, rh);
  roof.quad(P(-naveW / 2 - ov, naveH - 0.3, zb - ov), P(-naveW / 2 - ov, naveH - 0.3, zf), P(0, naveH + rh, zf), P(0, naveH + rh, zb - ov), [0, 0], [naveL, 0], [naveL, sl], [0, sl], roofC);
  roof.quad(P(naveW / 2 + ov, naveH - 0.3, zf), P(naveW / 2 + ov, naveH - 0.3, zb - ov), P(0, naveH + rh, zb - ov), P(0, naveH + rh, zf), [0, 0], [naveL, 0], [naveL, sl], [0, sl], roofC);
  // sacristy / apse behind (lower)
  boxL(plain, P, -4, 4, -1.5, 5, zb - 6, zb, white);
  roof.quad(P(-4.4, 5, zb - 6.4), P(-4.4, 5, zb), P(0, 6.8, zb), P(0, 6.8, zb - 6.4), [0, 0], [6, 0], [6, 4], [0, 4], roofC);
  roof.quad(P(4.4, 5, zb), P(4.4, 5, zb - 6.4), P(0, 6.8, zb - 6.4), P(0, 6.8, zb), [0, 0], [6, 0], [6, 4], [0, 4], roofC);
  plain.tri(P(4, 5, zb - 6), P(-4, 5, zb - 6), P(0, 6.8, zb - 6), null, null, null, white);
  // tower (front-centre, protruding), textured faces
  const tf = new GeoBuilder(true, true), ts = new GeoBuilder(true, true);
  tf.quad(P(-tw, 0, tz1), P(tw, 0, tz1), P(tw, th, tz1), P(-tw, th, tz1), [0, 0], [1, 0], [1, 1], [0, 1], [1, 1, 1]);
  ts.quad(P(tw, 0, tz1), P(tw, 0, tz0), P(tw, th, tz0), P(tw, th, tz1), [0, 0], [1, 0], [1, 1], [0, 1], [1, 1, 1]);
  ts.quad(P(-tw, 0, tz0), P(-tw, 0, tz1), P(-tw, th, tz1), P(-tw, th, tz0), [0, 0], [1, 0], [1, 1], [0, 1], [1, 1, 1]);
  ts.quad(P(tw, naveH + rh, tz0), P(-tw, naveH + rh, tz0), P(-tw, th, tz0), P(tw, th, tz0), [0, 0.6], [1, 0.6], [1, 1], [0, 1], [1, 1, 1]);
  boxL(plain, P, -tw - 0.1, tw + 0.1, -1.5, 0.3, tz0, tz1 + 0.1, srgb(150, 146, 140));
  // cornice cap + 4 pinnacles + spire + cross
  boxL(plain, P, -tw - 0.25, tw + 0.25, th, th + 0.5, tz0 - 0.25, tz1 + 0.25, ochre);
  const spireG = new GeoBuilder(true, true), sh = 12, sb = tw * 0.92, zc = (tz0 + tz1) / 2, top = P(0, th + 0.5 + sh, zc);
  const corners = [[-sb, zc - sb], [sb, zc - sb], [sb, zc + sb], [-sb, zc + sb]];
  for (let k = 0; k < 4; k++) {
    const a = corners[k], b = corners[(k + 1) % 4];
    spireG.tri(P(a[0], th + 0.5, a[1]), P(b[0], th + 0.5, b[1]), top, [0, 0], [1, 0], [0.5, 1], [1, 1, 1]);
  }
  for (const [x, z] of [[-tw, tz0], [tw, tz0], [tw, tz1], [-tw, tz1]]) {
    boxL(plain, P, x - 0.3, x + 0.3, th + 0.5, th + 1.6, z - 0.3, z + 0.3, white);
    const tp = P(x, th + 4.2, z);
    for (let k = 0; k < 4; k++) { const a = [[-.3, -.3], [.3, -.3], [.3, .3], [-.3, .3]][k], b = [[-.3, -.3], [.3, -.3], [.3, .3], [-.3, .3]][(k + 1) % 4]; spireG.tri(P(x + a[0], th + 1.6, z + a[1]), P(x + b[0], th + 1.6, z + b[1]), tp, [0, 0], [1, 0], [0.5, 1], [1, 1, 1]); }
  }
  boxL(plain, P, -0.07, 0.07, th + sh + 0.3, th + sh + 2.2, zc - 0.07, zc + 0.07, white);
  boxL(plain, P, -0.55, 0.55, th + sh + 1.45, th + sh + 1.6, zc - 0.07, zc + 0.07, white);
  // front steps
  boxL(plain, P, -2.6, 2.6, -1.0, 0.25, tz1, tz1 + 1.2, srgb(200, 196, 188));
  boxL(plain, P, -2.6, 2.6, -1.0, 0.12, tz1 + 1.2, tz1 + 2.2, srgb(200, 196, 188));

  // ---------------------------------------------------------------- adro (church yard)
  // front fence just behind the sidewalk of Rua Santos Dumont (found by marching towards the street)
  const ax = naveW / 2 + 5.5;
  const W = (x, z) => P(x, 0, z);
  const frontZ = x => { let z = tz1 + 3; for (; z < tz1 + 70; z += 0.25) { const p = W(x, z); if (fr.roadEdge && fr.roadEdge(p[0], p[2]) < 2.4) break; } return z - 0.3; };
  const zL = frontZ(-ax), zR = frontZ(ax), zBack = zb - 8;
  const yard = [[-ax, zBack], [ax, zBack], [ax, zR], [-ax, zL]];
  const yardW = yard.map(([x, z]) => { const p = W(x, z); return [p[0], p[2]]; });
  // floor: granite paving in front, lawn along the nave; follows the ground
  const floor = new GeoBuilder(true, true);
  const NX = 14, NZ = 24;
  const fz = x => zL + (zR - zL) * (x + ax) / (2 * ax);
  for (let i = 0; i < NX; i++) for (let j = 0; j < NZ; j++) {
    const xa = -ax + 2 * ax * i / NX, xb = -ax + 2 * ax * (i + 1) / NX;
    const q = (x, t) => { const z = zBack + (fz(x) - zBack) * t; const p = W(x, z); return [p[0], T.at(p[0], p[2]) + 0.07, p[2]]; };
    const ta = j / NZ, tb = (j + 1) / NZ;
    const mz = zBack + (fz((xa + xb) / 2) - zBack) * (ta + tb) / 2;
    const paved = mz > tz0 - 1 || Math.abs((xa + xb) / 2) < 2.2;
    const col = paved ? srgb(196, 190, 180) : srgb(84, 128, 60);
    const a = q(xa, ta), b = q(xb, ta), c = q(xb, tb), d = q(xa, tb);
    const ny = (b[2] - a[2]) * (c[0] - a[0]) - (b[0] - a[0]) * (c[2] - a[2]);
    if (ny > 0) floor.quad(a, b, c, d, [a[0] / 2, a[2] / 2], [b[0] / 2, b[2] / 2], [c[0] / 2, c[2] / 2], [d[0] / 2, d[2] / 2], col, [0, 1, 0]);
    else floor.quad(d, c, b, a, [d[0] / 2, d[2] / 2], [c[0] / 2, c[2] / 2], [b[0] / 2, b[2] / 2], [a[0] / 2, a[2] / 2], col, [0, 1, 0]);
  }
  // round garden in the middle of the forecourt (as in the photos), with a curb
  const gz = (tz1 + 2.2 + Math.min(zL, zR)) / 2, gr = Math.min(3.2, (Math.min(zL, zR) - tz1 - 2.2) / 2 - 1.8);
  const garden = new GeoBuilder(true, true);
  if (gr > 1.2) {
    const gc = W(0, gz), N = 36;
    for (let k = 0; k < N; k++) {
      const a0 = k / N * Math.PI * 2, a1 = (k + 1) / N * Math.PI * 2;
      const pt = (r, a) => { const p = W(Math.cos(a) * r, gz + Math.sin(a) * r); return [p[0], T.at(p[0], p[2]), p[2]]; };
      const o0 = pt(gr, a0), o1 = pt(gr, a1), i0 = pt(gr - 0.2, a0), i1 = pt(gr - 0.2, a1);
      const up = (p, h) => [p[0], p[1] + h, p[2]];
      garden.quad(up(o0, 0.05), up(o1, 0.05), up(o1, 0.35), up(o0, 0.35), [0, 0], [1, 0], [1, 1], [0, 1], srgb(215, 212, 204));
      garden.quad(up(o1, 0.05), up(o0, 0.05), up(o0, 0.35), up(o1, 0.35), [0, 0], [1, 0], [1, 1], [0, 1], srgb(215, 212, 204));
      const tcol = srgb(70, 120, 50), c0 = [gc[0], T.at(gc[0], gc[2]) + 0.3, gc[2]];
      const t0 = up(i0, 0.3), t1 = up(i1, 0.3);
      const ny = (t0[2] - c0[2]) * (t1[0] - c0[0]) - (t0[0] - c0[0]) * (t1[2] - c0[2]);
      if (ny > 0) garden.tri(c0, t0, t1, [0, 0], [1, 0], [0, 1], tcol, [0, 1, 0]); else garden.tri(c0, t1, t0, [0, 0], [0, 1], [1, 0], tcol, [0, 1, 0]);
    }
    for (let k = 0; k < 18; k++) { // red / white flowers (azaleias)
      const a = k / 18 * Math.PI * 2, p = W(Math.cos(a) * (gr - 0.8), gz + Math.sin(a) * (gr - 0.8)), y = T.at(p[0], p[2]) + 0.3;
      const col = k % 3 ? srgb(200, 40, 60) : srgb(245, 240, 235), s = 0.35;
      garden.quad([p[0] - s, y + 0.35, p[2] - s], [p[0] - s, y + 0.35, p[2] + s], [p[0] + s, y + 0.35, p[2] + s], [p[0] + s, y + 0.35, p[2] - s], [0, 0], [1, 0], [1, 1], [0, 1], col, [0, 1, 0]);
    }
  }
  // low granite wall + white bar railing (gradil) + gate posts; gap for the gate in the front
  const wallG = new GeoBuilder(true, true), rail = new GeoBuilder(true, true);
  const fenceRun = (x0, z0, x1, z1) => {
    const L = Math.hypot(x1 - x0, z1 - z0), n = Math.max(1, Math.ceil(L / 2));
    for (let k = 0; k < n; k++) {
      const a = W(x0 + (x1 - x0) * k / n, z0 + (z1 - z0) * k / n), b = W(x0 + (x1 - x0) * (k + 1) / n, z0 + (z1 - z0) * (k + 1) / n);
      const ya = T.at(a[0], a[2]), yb = T.at(b[0], b[2]), l = L / n;
      const ex = (b[0] - a[0]) / l * 0.12, ez = (b[2] - a[2]) / l * 0.12, nx = -ez, nz = ex; // half thickness
      // wall body (two faces + top)
      wallG.quad([a[0] + nx, ya - 0.4, a[2] + nz], [b[0] + nx, yb - 0.4, b[2] + nz], [b[0] + nx, yb + 0.7, b[2] + nz], [a[0] + nx, ya + 0.7, a[2] + nz], [0, 0], [l / 2, 0], [l / 2, 0.55], [0, 0.55], srgb(150, 152, 150));
      wallG.quad([b[0] - nx, yb - 0.4, b[2] - nz], [a[0] - nx, ya - 0.4, a[2] - nz], [a[0] - nx, ya + 0.7, a[2] - nz], [b[0] - nx, yb + 0.7, b[2] - nz], [0, 0], [l / 2, 0], [l / 2, 0.55], [0, 0.55], srgb(150, 152, 150));
      wallG.quad([a[0] - nx, ya + 0.7, a[2] - nz], [b[0] - nx, yb + 0.7, b[2] - nz], [b[0] + nx, yb + 0.7, b[2] + nz], [a[0] + nx, ya + 0.7, a[2] + nz], [0, 0], [l / 2, 0], [l / 2, 0.1], [0, 0.1], srgb(170, 172, 170), [0, 1, 0]);
      rail.quad([a[0], ya + 0.7, a[2]], [b[0], yb + 0.7, b[2]], [b[0], yb + 2.1, b[2]], [a[0], ya + 2.1, a[2]], [0, 0], [l / 0.5, 0], [l / 0.5, 1], [0, 1], [1, 1, 1]);
    }
  };
  const gate = 2.6, xg0 = -gate, xg1 = gate;
  fenceRun(-ax, zL, xg0, fz(xg0)); fenceRun(xg1, fz(xg1), ax, zR);
  fenceRun(ax, zR, ax, zBack); fenceRun(-ax, zBack, -ax, zL); fenceRun(ax, zBack, -ax, zBack);
  for (const x of [-ax, xg0, xg1, ax]) { const z = fz(x), p = W(x, z), gy = T.at(p[0], p[2]) - y0; boxL(plain, P, x - 0.25, x + 0.25, gy - 0.3, gy + 2.3, z - 0.25, z + 0.25, white); }
  // ---- materials
  const add = (gb, m, cast = true) => { if (!gb.count) return; const me = new THREE.Mesh(gb.geometry(), m); me.castShadow = cast; me.receiveShadow = true; g.add(me); };
  add(side, mat(tx.naveSide));
  add(front, mat(tx.naveFront));
  add(tf, mat(tx.towerFront));
  add(ts, mat(tx.towerSide));
  add(spireG, mat(tx.spire));
  add(plain, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.85 }));
  const roofTex = (() => { const [c, x] = cv(128, 128); x.fillStyle = '#cfcfcf'; x.fillRect(0, 0, 128, 128); for (let r = 0; r < 8; r++) for (let k = 0; k < 8; k++) { const v = 170 + Math.random() * 70; x.fillStyle = `rgb(${v},${v},${v})`; x.fillRect(k * 16 + 1, r * 16, 14, 14); x.fillStyle = 'rgba(0,0,0,0.3)'; x.fillRect(k * 16, r * 16 + 13, 16, 3); } const t = tex(c, true); return t; })();
  add(roof, new THREE.MeshStandardMaterial({ vertexColors: true, map: roofTex, roughness: 0.8, side: THREE.DoubleSide }));
  const granite = (() => { const [c, x] = cv(64, 64); for (let i = 0; i < 64 * 64; i++) { const v = 150 + Math.random() * 80; x.fillStyle = `rgb(${v},${v},${v})`; x.fillRect(i % 64, Math.floor(i / 64), 1, 1); } x.fillStyle = 'rgba(0,0,0,0.25)'; for (let k = 0; k < 64; k += 16) { x.fillRect(k, 0, 1, 64); x.fillRect(0, k, 64, 1); } return tex(c, true); })();
  add(floor, new THREE.MeshStandardMaterial({ vertexColors: true, map: granite, roughness: 0.9, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -4 }), false);
  add(garden, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9 }), false);
  add(wallG, new THREE.MeshStandardMaterial({ vertexColors: true, map: granite, roughness: 0.9 }));
  const bars = (() => { const [c, x] = cv(64, 64); x.clearRect(0, 0, 64, 64); x.fillStyle = '#f4f4f2'; for (let k = 0; k < 64; k += 16) x.fillRect(k + 6, 0, 4, 64); x.fillRect(0, 0, 64, 5); x.fillRect(0, 59, 64, 5); return tex(c, true); })();
  add(rail, new THREE.MeshStandardMaterial({ map: bars, transparent: true, alphaTest: 0.5, side: THREE.DoubleSide, roughness: 0.5 }), false);
  // imperial palms: both sides of the façade and at the front corners of the yard (photos)
  const palms = [];
  for (const [x, z] of [[-tw - 3.2, tz1 + 1], [tw + 3.2, tz1 + 1], [-ax + 1.6, zL - 2], [ax - 1.6, zR - 2]]) { const p = P(x, 0, z); palms.push([p[0], p[2]]); }
  return { group: g, palms, yard: yardW, center: W(0, (zb + tz1) / 2), front: [F[0], F[1]] };
}


// ================================================================== PRACINHA DA MATRIZ
/**
 * Triangular pracinha (canteiro) in front of the Matriz, between Rua Santos Dumont and Rua Olegário
 * Maciel: pedra portuguesa paving with a kerb, a round flower bed and the statue of the saint on a
 * stepped pedestal, facing the church; benches and globe lamps.
 * corners: three road-centreline corners [[x,z]x3]; hw: half carriageway width of each side (i -> i+1)
 */
export function buildPracinha(T, corners, hw, faceTo) {
  const g = new THREE.Group(); g.name = 'pracinha';
  // inner triangle: every side moved inwards by its half width
  let area2 = 0; for (let i = 0; i < 3; i++) { const a = corners[i], b = corners[(i + 1) % 3]; area2 += a[0] * b[1] - b[0] * a[1]; }
  const sgn = area2 > 0 ? 1 : -1;
  const lines = corners.map((a, i) => {
    const b = corners[(i + 1) % 3], L = Math.hypot(b[0] - a[0], b[1] - a[1]), ex = (b[0] - a[0]) / L, ez = (b[1] - a[1]) / L;
    const nx = -ez * sgn, nz = ex * sgn; // inward normal
    return { px: a[0] + nx * hw[i], pz: a[1] + nz * hw[i], ex, ez };
  });
  const tri = [0, 1, 2].map(i => {
    const l0 = lines[(i + 2) % 3], l1 = lines[i];
    const den = l0.ex * l1.ez - l0.ez * l1.ex, t = ((l1.px - l0.px) * l1.ez - (l1.pz - l0.pz) * l1.ex) / den;
    return [l0.px + l0.ex * t, l0.pz + l0.ez * t];
  });
  // incentre (best spot for the monument)
  const la = [0, 1, 2].map(i => Math.hypot(tri[(i + 1) % 3][0] - tri[(i + 2) % 3][0], tri[(i + 1) % 3][1] - tri[(i + 2) % 3][1]));
  const per = la[0] + la[1] + la[2];
  const ic = [(la[0] * tri[0][0] + la[1] * tri[1][0] + la[2] * tri[2][0]) / per, (la[0] * tri[0][1] + la[1] * tri[1][1] + la[2] * tri[2][1]) / per];
  const inr = Math.abs((tri[1][0] - tri[0][0]) * (tri[2][1] - tri[0][1]) - (tri[1][1] - tri[0][1]) * (tri[2][0] - tri[0][0])) / per;
  const yAt = (x, z) => T.at(x, z);
  const pave = new GeoBuilder(true, true), solid = new GeoBuilder(true, false), statue = new GeoBuilder(true, false);
  // paving (subdivided so it follows the ground), 0.2 m above the street
  const N = 12;
  const bary = (u, v) => [tri[0][0] + (tri[1][0] - tri[0][0]) * u + (tri[2][0] - tri[0][0]) * v, tri[0][1] + (tri[1][1] - tri[0][1]) * u + (tri[2][1] - tri[0][1]) * v];
  const V = (u, v) => { const [x, z] = bary(u, v); return [x, yAt(x, z) + 0.2, z]; };
  const upTri = (a, b, c) => { const ny = (b[2] - a[2]) * (c[0] - a[0]) - (b[0] - a[0]) * (c[2] - a[2]); if (ny > 0) pave.tri(a, b, c, [a[0] / 3, a[2] / 3], [b[0] / 3, b[2] / 3], [c[0] / 3, c[2] / 3], [1, 1, 1], [0, 1, 0]); else pave.tri(a, c, b, [a[0] / 3, a[2] / 3], [c[0] / 3, c[2] / 3], [b[0] / 3, b[2] / 3], [1, 1, 1], [0, 1, 0]); };
  for (let i = 0; i < N; i++) for (let j = 0; j < N - i; j++) {
    upTri(V(i / N, j / N), V((i + 1) / N, j / N), V(i / N, (j + 1) / N));
    if (i + j < N - 1) upTri(V((i + 1) / N, j / N), V((i + 1) / N, (j + 1) / N), V(i / N, (j + 1) / N));
  }
  // kerb (meio-fio) around
  const kerbC = srgb(225, 223, 215);
  for (let i = 0; i < 3; i++) {
    const a = tri[i], b = tri[(i + 1) % 3], L = Math.hypot(b[0] - a[0], b[1] - a[1]), n = Math.ceil(L / 2);
    for (let k = 0; k < n; k++) {
      const p = [a[0] + (b[0] - a[0]) * k / n, a[1] + (b[1] - a[1]) * k / n], q = [a[0] + (b[0] - a[0]) * (k + 1) / n, a[1] + (b[1] - a[1]) * (k + 1) / n];
      const yp = yAt(...p), yq = yAt(...q);
      solid.quad([p[0], yp - 0.1, p[1]], [q[0], yq - 0.1, q[1]], [q[0], yq + 0.22, q[1]], [p[0], yp + 0.22, p[1]], null, null, null, null, kerbC);
      solid.quad([q[0], yq - 0.1, q[1]], [p[0], yp - 0.1, p[1]], [p[0], yp + 0.22, p[1]], [q[0], yq + 0.22, q[1]], null, null, null, null, kerbC);
    }
  }
  // round flower bed around the monument
  const bedR = Math.max(1.8, Math.min(3.2, inr - 1.6));
  const y0 = yAt(ic[0], ic[1]) + 0.2;
  const NB = 32;
  for (let k = 0; k < NB; k++) {
    const a0 = k / NB * Math.PI * 2, a1 = (k + 1) / NB * Math.PI * 2;
    const p = (r, a, y) => [ic[0] + Math.cos(a) * r, y, ic[1] + Math.sin(a) * r];
    solid.quad(p(bedR, a1, y0), p(bedR, a0, y0), p(bedR, a0, y0 + 0.4), p(bedR, a1, y0 + 0.4), null, null, null, null, srgb(200, 196, 188));
    solid.quad(p(bedR, a0, y0 + 0.4), p(bedR - 0.25, a0, y0 + 0.4), p(bedR - 0.25, a1, y0 + 0.4), p(bedR, a1, y0 + 0.4), null, null, null, null, srgb(215, 212, 205), [0, 1, 0]);
    const c = [ic[0], y0 + 0.36, ic[1]], t0 = p(bedR - 0.25, a0, y0 + 0.36), t1 = p(bedR - 0.25, a1, y0 + 0.36);
    const ny = (t0[2] - c[2]) * (t1[0] - c[0]) - (t0[0] - c[0]) * (t1[2] - c[2]);
    if (ny > 0) solid.tri(c, t0, t1, null, null, null, srgb(72, 118, 48), [0, 1, 0]); else solid.tri(c, t1, t0, null, null, null, srgb(72, 118, 48), [0, 1, 0]);
  }
  for (let k = 0; k < 20; k++) {
    const a = k / 20 * Math.PI * 2, r = bedR - 0.7, x = ic[0] + Math.cos(a) * r, z = ic[1] + Math.sin(a) * r, s = 0.3;
    const col = k % 2 ? srgb(210, 50, 90) : srgb(250, 210, 60);
    solid.quad([x - s, y0 + 0.7, z - s], [x - s, y0 + 0.7, z + s], [x + s, y0 + 0.7, z + s], [x + s, y0 + 0.7, z - s], null, null, null, null, col, [0, 1, 0]);
    solid.quad([x - s, y0 + 0.36, z + s], [x + s, y0 + 0.36, z + s], [x + s, y0 + 0.7, z + s], [x - s, y0 + 0.7, z + s], null, null, null, null, col.map(v => v * 0.75));
    solid.quad([x + s, y0 + 0.36, z - s], [x - s, y0 + 0.36, z - s], [x - s, y0 + 0.7, z - s], [x + s, y0 + 0.7, z - s], null, null, null, null, col.map(v => v * 0.75));
  }
  // monument: three granite steps, pedestal with cornice, statue of the saint facing the church
  const fx = faceTo[0] - ic[0], fz = faceTo[1] - ic[1], fl = Math.hypot(fx, fz) || 1;
  const P = frame(ic[0], ic[1], fx / fl, fz / fl, y0 + 0.36);
  const gran = srgb(168, 166, 160), marble = srgb(240, 238, 232);
  boxL(solid, P, -1.3, 1.3, 0, 0.3, -1.3, 1.3, gran);
  boxL(solid, P, -1.0, 1.0, 0.3, 0.6, -1.0, 1.0, gran);
  boxL(solid, P, -0.75, 0.75, 0.6, 0.9, -0.75, 0.75, gran);
  boxL(solid, P, -0.5, 0.5, 0.9, 2.5, -0.5, 0.5, marble);
  boxL(solid, P, -0.62, 0.62, 2.5, 2.7, -0.62, 0.62, marble);
  boxL(solid, P, -0.36, 0.36, 1.35, 1.85, 0.5, 0.53, srgb(150, 120, 60)); // bronze plaque
  // statue: robe (lathe), mantle, head, hands, halo
  const lathe = (prof, seg, col, yaw0 = 0) => {
    for (let k = 0; k < seg; k++) {
      const a0 = k / seg * Math.PI * 2 + yaw0, a1 = (k + 1) / seg * Math.PI * 2 + yaw0;
      for (let i = 0; i < prof.length - 1; i++) {
        const [r0, h0] = prof[i], [r1, h1] = prof[i + 1];
        const q = (r, h, a) => P(Math.sin(a) * r, h, Math.cos(a) * r);
        statue.quad(q(r0, h0, a0), q(r0, h0, a1), q(r1, h1, a1), q(r1, h1, a0), null, null, null, null, col);
      }
    }
  };
  const sb = 2.7;
  lathe([[0.42, sb], [0.40, sb + 0.5], [0.33, sb + 1.2], [0.27, sb + 1.6], [0.25, sb + 1.75], [0.12, sb + 1.82]], 14, marble);   // robe
  lathe([[0.30, sb + 1.25], [0.31, sb + 1.55], [0.2, sb + 1.78], [0.1, sb + 1.85]], 14, srgb(230, 228, 222));                    // mantle
  lathe([[0.0, sb + 1.82], [0.11, sb + 1.86], [0.13, sb + 1.98], [0.1, sb + 2.1], [0.0, sb + 2.15]], 10, srgb(236, 226, 212));  // head
  boxL(statue, P, -0.36, -0.22, sb + 1.05, sb + 1.5, 0.08, 0.3, marble); boxL(statue, P, 0.22, 0.36, sb + 1.05, sb + 1.5, 0.08, 0.3, marble); // arms open
  boxL(statue, P, -0.42, -0.3, sb + 0.98, sb + 1.1, 0.22, 0.38, srgb(236, 226, 212)); boxL(statue, P, 0.3, 0.42, sb + 0.98, sb + 1.1, 0.22, 0.38, srgb(236, 226, 212));
  for (let k = 0; k < 16; k++) { // halo
    const a0 = k / 16 * Math.PI * 2, a1 = (k + 1) / 16 * Math.PI * 2, r = 0.22, h = sb + 2.06, zz = -0.1;
    statue.quad(P(Math.cos(a0) * r, h + Math.sin(a0) * r, zz), P(Math.cos(a1) * r, h + Math.sin(a1) * r, zz), P(Math.cos(a1) * (r + 0.05), h + Math.sin(a1) * (r + 0.05), zz), P(Math.cos(a0) * (r + 0.05), h + Math.sin(a0) * (r + 0.05), zz), null, null, null, null, srgb(220, 180, 70));
  }
  // benches along the two long sides + globe lamps at the corners
  const lamps = [];
  for (let i = 0; i < 3; i++) {
    const a = tri[i], b = tri[(i + 1) % 3], L = Math.hypot(b[0] - a[0], b[1] - a[1]);
    if (L < 9) continue;
    const ux = (b[0] - a[0]) / L, uz = (b[1] - a[1]) / L, nx = -uz * sgn, nz = ux * sgn;
    const m = [(a[0] + b[0]) / 2 + nx * 1.4, (a[1] + b[1]) / 2 + nz * 1.4];
    const PB = frame(m[0], m[1], -nx, -nz, yAt(m[0], m[1]) + 0.2);
    boxL(solid, PB, -0.9, 0.9, 0.42, 0.48, -0.25, 0.25, srgb(140, 96, 60));
    boxL(solid, PB, -0.9, 0.9, 0.5, 0.9, 0.22, 0.28, srgb(140, 96, 60));
    for (const x of [-0.75, 0.75]) boxL(solid, PB, x - 0.05, x + 0.05, 0, 0.42, -0.2, 0.2, srgb(60, 60, 62));
  }
  for (const c of tri) {
    const x = c[0] + (ic[0] - c[0]) * 0.22, z = c[1] + (ic[1] - c[1]) * 0.22, y = yAt(x, z) + 0.2;
    boxL(solid, frame(x, z, 1, 0, y), -0.06, 0.06, 0, 3.6, -0.06, 0.06, srgb(40, 42, 44));
    lamps.push([x, y + 3.8, z]);
  }
  const portuguese = (() => { const [c, x] = cv(256, 256); x.fillStyle = '#efece4'; x.fillRect(0, 0, 256, 256); x.fillStyle = '#2b2b2b';
    for (let r = 0; r < 4; r++) { x.beginPath(); for (let t = 0; t <= 256; t += 4) { const y = r * 64 + 32 + Math.sin(t / 256 * Math.PI * 2) * 14; t ? x.lineTo(t, y) : x.moveTo(t, y); } for (let t = 256; t >= 0; t -= 4) { const y = r * 64 + 44 + Math.sin(t / 256 * Math.PI * 2) * 14; x.lineTo(t, y); } x.fill(); }
    for (let i = 0; i < 2600; i++) { x.fillStyle = `rgba(0,0,0,${Math.random() * 0.12})`; x.fillRect(Math.random() * 256, Math.random() * 256, 3, 3); } return tex(c, true); })();
  const add = (gb, m, cast) => { if (!gb.count) return; const me = new THREE.Mesh(gb.geometry(), m); me.castShadow = cast; me.receiveShadow = true; g.add(me); };
  add(pave, new THREE.MeshStandardMaterial({ map: portuguese, roughness: 0.85, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -4 }), false);
  add(solid, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.8 }), true);
  add(statue, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.45, side: THREE.DoubleSide }), true);
  // globe lamps (emissive at night through the shared lamp system is not needed: small own glow)
  const globeM = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfff2d0, emissiveIntensity: 0, roughness: 0.3 });
  for (const [x, y, z] of lamps) { const s = new THREE.Mesh(new THREE.SphereGeometry(0.28, 12, 8), globeM); s.position.set(x, y, z); g.add(s); }
  g.userData.setNight = n => { globeM.emissiveIntensity = n * 1.6; };
  return { group: g, center: ic, tri, statue: [ic[0], y0 + 0.36 + sb + 2.2, ic[1]] };
}


// ================================================================== CEMITÉRIO SÃO JOÃO
/**
 * Cemetery: jazigos of varied height and colour in rows along alleys, crosses, a few family chapels,
 * a perimeter wall and trees along the main alleys. Tombs/crosses are instanced (cheap).
 * Returns { group, trees: [[x,z,size,seed,species]] }.
 */
export function buildCemetery(T, poly, roadEdge = () => 1e9) {
  const g = new THREE.Group(); g.name = 'cemiterio';
  const p = poly.slice(); if (p.length > 3 && p[0][0] === p[p.length - 1][0] && p[0][1] === p[p.length - 1][1]) p.pop();
  let ux = 1, uz = 0, best = 0;
  for (let i = 0; i < p.length; i++) { const a = p[i], b = p[(i + 1) % p.length], L = Math.hypot(b[0] - a[0], b[1] - a[1]); if (L > best) { best = L; ux = (b[0] - a[0]) / L; uz = (b[1] - a[1]) / L; } }
  const vx = -uz, vz = ux;
  let u0 = 1e9, u1 = -1e9, v0 = 1e9, v1 = -1e9;
  for (const [x, z] of p) { const u = x * ux + z * uz, v = x * vx + z * vz; u0 = Math.min(u0, u); u1 = Math.max(u1, u); v0 = Math.min(v0, v); v1 = Math.max(v1, v); }
  const W = (u, v) => [u * ux + v * vx, u * uz + v * vz];
  const inside = (x, z) => { let c = false; for (let i = 0, j = p.length - 1; i < p.length; j = i++) if ((p[i][1] > z) !== (p[j][1] > z) && x < (p[j][0] - p[i][0]) * (z - p[i][1]) / (p[j][1] - p[i][1]) + p[i][0]) c = !c; return c; };
  const edgeDist = (x, z) => { let d = 1e9; for (let i = 0; i < p.length; i++) { const a = p[i], b = p[(i + 1) % p.length]; const dx = b[0] - a[0], dz = b[1] - a[1], L2 = dx * dx + dz * dz || 1; let t = ((x - a[0]) * dx + (z - a[1]) * dz) / L2; t = Math.max(0, Math.min(1, t)); d = Math.min(d, Math.hypot(a[0] + dx * t - x, a[1] + dz * t - z)); } return d; };
  const R = rng(5150);
  const uc = (u0 + u1) / 2, vc = (v0 + v1) / 2;
  const alleyU = v => Math.abs(v - vc) < 2.2, alleyV = u => Math.abs(u - uc) < 2.2 || Math.abs(u - (u0 + uc) / 2) < 1.4 || Math.abs(u - (u1 + uc) / 2) < 1.4;
  // ---- ground: sandy soil, cement alleys
  const ground = new GeoBuilder(true, false);
  const NG = 2.5;
  for (let u = u0; u < u1; u += NG) for (let v = v0; v < v1; v += NG) {
    const [mx, mz] = W(u + NG / 2, v + NG / 2);
    if (!inside(mx, mz) || roadEdge(mx, mz) < 1.8) continue;
    const alley = alleyU(v + NG / 2) || alleyV(u + NG / 2);
    const col = alley ? srgb(196, 192, 184) : srgb(176 + R() * 10, 162 + R() * 8, 140);
    const q = (uu, vv) => { const [x, z] = W(uu, vv); return [x, T.at(x, z) + 0.06, z]; };
    const a = q(u, v), b = q(u + NG, v), c = q(u + NG, v + NG), d = q(u, v + NG);
    const ny = (b[2] - a[2]) * (c[0] - a[0]) - (b[0] - a[0]) * (c[2] - a[2]);
    if (ny > 0) ground.quad(a, b, c, d, null, null, null, null, col, [0, 1, 0]); else ground.quad(d, c, b, a, null, null, null, null, col, [0, 1, 0]);
  }
  const gm = new THREE.Mesh(ground.geometry(), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -6 }));
  gm.receiveShadow = true; g.add(gm);
  // ---- tombs (jazigos), crosses, family chapels
  const tombs = [], crosses = [], chapels = [], trees = [];
  const yaw = -Math.atan2(uz, ux);
  for (let u = u0 + 3; u < u1 - 3; u += 1.6) {
    if (alleyV(u)) continue;
    for (let v = v0 + 3; v < v1 - 3; v += 3.3) {
      if (alleyU(v) || alleyU(v + 2.4)) continue;
      const [x, z] = W(u, v + 1.15);
      if (!inside(x, z) || edgeDist(x, z) < 3 || roadEdge(x, z) < 3.2) continue;
      const r = R();
      if (r < 0.06) continue; // empty plot
      if (r > 0.975 && !chapels.some(c => Math.hypot(c[0] - x, c[1] - z) < 12)) { chapels.push([x, z]); continue; }
      const h = 0.45 + Math.pow(R(), 2) * 1.0, w = 1.0 + R() * 0.25, l = 2.1 + R() * 0.3;
      const tone = R();
      const col = tone < 0.55 ? [0.92, 0.92, 0.9] : tone < 0.8 ? [0.78, 0.78, 0.77] : tone < 0.93 ? [0.42, 0.40, 0.40] : [0.75, 0.82, 0.86];
      tombs.push({ x, z, h, w, l, col });
      if (R() < 0.35) crosses.push({ x: x + Math.cos(-yaw) * 0 , z, h, along: l });
    }
  }
  // trees along the main alleys
  for (let u = u0 + 6; u < u1 - 6; u += 14) for (const dv of [-3.2, 3.2]) { const [x, z] = W(u, vc + dv); if (inside(x, z) && edgeDist(x, z) > 3 && roadEdge(x, z) > 3) trees.push([x, z, 3.2 + R() * 1.2, Math.floor(R() * 900), 2]); }
  const M = new THREE.Matrix4(), Q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), yaw), S = new THREE.Vector3(), Pv = new THREE.Vector3(), col = new THREE.Color();
  const box = new THREE.BoxGeometry(1, 1, 1).translate(0, 0.5, 0);
  const tm = new THREE.InstancedMesh(box, new THREE.MeshStandardMaterial({ roughness: 0.6 }), tombs.length);
  tombs.forEach((t, i) => { Pv.set(t.x, T.at(t.x, t.z) - 0.1, t.z); S.set(t.w, t.h + 0.1, t.l); M.compose(Pv, Q, S); tm.setMatrixAt(i, M); tm.setColorAt(i, col.setRGB(...t.col, THREE.SRGBColorSpace)); });
  tm.castShadow = true; tm.receiveShadow = true; g.add(tm);
  // headstones (lápides) at one end of most tombs
  const head = new THREE.InstancedMesh(box, new THREE.MeshStandardMaterial({ color: 0xdedbd4, roughness: 0.5 }), tombs.length);
  let nh = 0;
  const off = new THREE.Vector3();
  tombs.forEach(t => { if (t.h > 1.1) return; off.set(0, 0, -t.l / 2 + 0.12).applyQuaternion(Q); Pv.set(t.x + off.x, T.at(t.x, t.z) + t.h - 0.1, t.z + off.z); S.set(t.w * 0.9, 0.55 + (t.w - 1) * 2, 0.14); M.compose(Pv, Q, S); head.setMatrixAt(nh++, M); });
  head.count = nh; head.castShadow = true; g.add(head);
  // crosses
  const cg = new GeoBuilder(false, false);
  const cb = (x0, x1, y0, y1, z0, z1) => { const v = [[x0, y0, z0], [x1, y0, z0], [x1, y0, z1], [x0, y0, z1], [x0, y1, z0], [x1, y1, z0], [x1, y1, z1], [x0, y1, z1]]; const f = (a, b, c, d) => cg.quad(v[a], v[b], v[c], v[d], null, null, null, null, [1, 1, 1]); f(4, 7, 6, 5); f(0, 1, 5, 4); f(1, 2, 6, 5); f(2, 3, 7, 6); f(3, 0, 4, 7); };
  cb(-0.05, 0.05, 0, 1.0, -0.05, 0.05); cb(-0.3, 0.3, 0.62, 0.72, -0.05, 0.05);
  const crossGeo = cg.geometry();
  const cm = new THREE.InstancedMesh(crossGeo, new THREE.MeshStandardMaterial({ color: 0xf2f0ea, roughness: 0.5 }), crosses.length);
  crosses.forEach((c, i) => { off.set(0, 0, -c.along / 2 + 0.15).applyQuaternion(Q); Pv.set(c.x + off.x, T.at(c.x, c.z) + c.h, c.z + off.z); M.compose(Pv, Q, S.set(1, 1, 1)); cm.setMatrixAt(i, M); });
  cm.castShadow = true; g.add(cm);
  // family chapels (capelinhas) with a small gable roof + the cemetery chapel at the main crossing
  const ch = new GeoBuilder(true, false);
  const chapel = (x, z, w, l, h, colW) => {
    const y0 = T.at(x, z) - 0.2;
    const Pf = frame(x, z, uz, -ux, y0);
    boxL(ch, Pf, -w / 2, w / 2, 0, h, -l / 2, l / 2, colW);
    const r = h + w * 0.35;
    ch.quad(Pf(-w / 2 - 0.15, h, -l / 2 - 0.15), Pf(-w / 2 - 0.15, h, l / 2 + 0.15), Pf(0, r, l / 2 + 0.15), Pf(0, r, -l / 2 - 0.15), null, null, null, null, srgb(150, 70, 50));
    ch.quad(Pf(w / 2 + 0.15, h, l / 2 + 0.15), Pf(w / 2 + 0.15, h, -l / 2 - 0.15), Pf(0, r, -l / 2 - 0.15), Pf(0, r, l / 2 + 0.15), null, null, null, null, srgb(150, 70, 50));
    ch.tri(Pf(-w / 2, h, l / 2), Pf(w / 2, h, l / 2), Pf(0, r, l / 2), null, null, null, colW);
    ch.tri(Pf(w / 2, h, -l / 2), Pf(-w / 2, h, -l / 2), Pf(0, r, -l / 2), null, null, null, colW);
    boxL(ch, Pf, -0.05, 0.05, r, r + 1.0, l / 2 - 0.1, l / 2, srgb(240, 238, 232));
    boxL(ch, Pf, -0.3, 0.3, r + 0.6, r + 0.7, l / 2 - 0.1, l / 2, srgb(240, 238, 232));
    boxL(ch, Pf, -0.45, 0.45, 0, 1.9, l / 2, l / 2 + 0.04, srgb(60, 60, 64));
  };
  for (const [x, z] of chapels) if (roadEdge(x, z) > 4) chapel(x, z, 2.4, 3.0, 2.8, R() < 0.6 ? srgb(238, 236, 230) : srgb(210, 214, 220));
  { const [x, z] = W(uc + 7, vc + 7); if (inside(x, z) && roadEdge(x, z) > 7) chapel(x, z, 6, 9, 4.5, srgb(242, 238, 225)); }
  const chm = new THREE.Mesh(ch.geometry(), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.75, side: THREE.DoubleSide }));
  chm.castShadow = chm.receiveShadow = true; g.add(chm);
  // perimeter wall (white, 2.2 m) with the gate in the middle of the longest side
  const wall = new GeoBuilder(true, false);
  for (let i = 0; i < p.length; i++) {
    const a = p[i], b = p[(i + 1) % p.length], L = Math.hypot(b[0] - a[0], b[1] - a[1]), n = Math.max(1, Math.ceil(L / 4));
    for (let k = 0; k < n; k++) {
      const t0 = k / n, t1 = (k + 1) / n;
      if (L === best && Math.abs((t0 + t1) / 2 - 0.5) * L < 2.5) continue; // gate
      const x0 = a[0] + (b[0] - a[0]) * t0, z0 = a[1] + (b[1] - a[1]) * t0, x1 = a[0] + (b[0] - a[0]) * t1, z1 = a[1] + (b[1] - a[1]) * t1;
      if (roadEdge((x0 + x1) / 2, (z0 + z1) / 2) < 1.5 || roadEdge(x0, z0) < 1 || roadEdge(x1, z1) < 1) continue;
      const y0 = T.at(x0, z0), y1 = T.at(x1, z1);
      wall.quad([x0, y0 - 0.5, z0], [x1, y1 - 0.5, z1], [x1, y1 + 2.2, z1], [x0, y0 + 2.2, z0], null, null, null, null, srgb(232, 230, 224));
      wall.quad([x1, y1 - 0.5, z1], [x0, y0 - 0.5, z0], [x0, y0 + 2.2, z0], [x1, y1 + 2.2, z1], null, null, null, null, srgb(222, 220, 214));
    }
  }
  const wm = new THREE.Mesh(wall.geometry(), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.85 }));
  wm.castShadow = wm.receiveShadow = true; g.add(wm);
  return { group: g, trees, inside };
}

// ================================================================== ESTAÇÃO
function stationTextures() {
  const teal = '#3aa39b', grey = '#d9dcdc', white = '#f2f2ee', dgrey = '#8e9496', door = '#2f8f86', glass = '#2a3a44';
  // two-storey block front: 512x512 = 10 m x 10 m
  const [c1, a] = cv(512, 512);
  a.fillStyle = white; a.fillRect(0, 0, 512, 512);
  a.fillStyle = grey; a.fillRect(0, 0, 512, 250);                     // upper floor grey
  a.fillStyle = dgrey; a.fillRect(0, 240, 512, 14); a.fillRect(0, 0, 512, 10);  // cornices
  a.fillStyle = teal; a.fillRect(0, 512 - 70, 512, 70);               // barrado verde-água
  for (const x of [120, 300]) { a.fillStyle = '#fff'; a.fillRect(x - 6, 70, 92, 140); a.fillStyle = door; a.fillRect(x, 76, 80, 128); a.fillStyle = glass; a.fillRect(x + 8, 84, 28, 52); a.fillRect(x + 44, 84, 28, 52); a.fillRect(x + 8, 144, 28, 52); a.fillRect(x + 44, 144, 28, 52); }
  for (const x of [60, 200, 340]) { a.fillStyle = door; a.fillRect(x, 300, 110, 212); a.fillStyle = 'rgba(0,0,0,0.25)'; for (let y = 310; y < 500; y += 16) a.fillRect(x + 4, y, 102, 3); }
  // wing (single storey) 1024x256 = 20 m x 5 m
  const [c2, w] = cv(1024, 256);
  w.fillStyle = '#efe7cf'; w.fillRect(0, 0, 1024, 256);
  w.fillStyle = teal; w.fillRect(0, 256 - 64, 1024, 64);
  for (let k = 0; k < 6; k++) { const x = 40 + k * 165; w.fillStyle = door; w.fillRect(x, 70, 110, 186); w.fillStyle = glass; for (let r = 0; r < 3; r++) for (let q = 0; q < 3; q++) w.fillRect(x + 8 + q * 34, 80 + r * 34, 28, 28); w.fillStyle = 'rgba(0,0,0,0.2)'; w.fillRect(x + 54, 70, 3, 186); }
  // pediment with the name
  const [c3, p] = cv(512, 128);
  p.fillStyle = grey; p.fillRect(0, 0, 512, 128);
  p.fillStyle = dgrey; p.fillRect(0, 110, 512, 18);
  p.fillStyle = '#56606a'; p.font = '800 54px system-ui, Arial'; p.textAlign = 'center'; p.textBaseline = 'middle'; p.fillText('AIMORÉS', 256, 60);
  // Vale totem
  const [c4, v] = cv(128, 512);
  v.fillStyle = '#1f8f86'; v.fillRect(0, 0, 128, 512); v.fillStyle = '#fff'; v.fillRect(10, 10, 108, 80);
  v.fillStyle = '#1f8f86'; v.beginPath(); v.moveTo(30, 30); v.lineTo(64, 72); v.lineTo(98, 30); v.lineTo(84, 30); v.lineTo(64, 56); v.lineTo(44, 30); v.fill();
  v.fillStyle = '#fff'; v.font = '700 15px system-ui, Arial'; v.textAlign = 'center';
  ['ESTAÇÃO DE', 'AIMORÉS', '', 'ESTRADA DE', 'FERRO', 'VITÓRIA A', 'MINAS'].forEach((t, i) => v.fillText(t, 64, 140 + i * 24));
  return { block: tex(c1), wing: tex(c2), ped: tex(c3), totem: tex(c4) };
}

export function buildStation(city, T, railPts, roadEdge = null) {
  const st = city.extras.station;
  if (!st) return null;
  const g = new THREE.Group(); g.name = 'estacao';
  const s = st.slice(0, 4);
  // long axis along the tracks
  const e1 = [s[1][0] - s[0][0], s[1][1] - s[0][1]], e2 = [s[2][0] - s[1][0], s[2][1] - s[1][1]];
  const l1 = Math.hypot(...e1), l2 = Math.hypot(...e2);
  const [ax, L, W] = l2 > l1 ? [e2, l2, l1] : [e1, l1, l2];
  const ux = ax[0] / L, uz = ax[1] / L;
  const cx = (s[0][0] + s[1][0] + s[2][0] + s[3][0]) / 4, cz = (s[0][1] + s[1][1] + s[2][1] + s[3][1]) / 4;
  // forward (z) of our frame = away from the tracks (towards Rua Pedro Nolasco)
  let fx = -uz, fz = ux;
  if (railPts) {
    let bd = 1e9, bp = null;
    for (const q of railPts) { const d = Math.hypot(q[0] - cx, q[1] - cz); if (d < bd) { bd = d; bp = q; } }
    if (bp && (bp[0] - cx) * fx + (bp[1] - cz) * fz > 0) { fx = -fx; fz = -fz; }
  }
  // local x runs along the track; pick the sign so that x = (ux,uz)
  const sx = (fz * ux - fx * uz) > 0 ? 1 : -1; // right vector = (fz, -fx)
  const X = x => x * sx;
  const half = L / 2, d = Math.min(9, W * 0.7);
  // street-side clearance: the viaduct ramp (rampa leste) passes right in front of the station.
  // clear(x) = how far forward (local z) we can build at local x before reaching a carriageway
  // (+1.3 m for the viaduct barrier / kerb). The whole station slides towards the tracks if needed.
  const worldAt = (x, z) => [cx + fz * x + fx * z, cz - fx * x + fz * z];
  const clear = x => {
    if (!roadEdge) return 99;
    for (let z = 0; z < 20; z += 0.25) { const [wx, wz] = worldAt(x, z); if (roadEdge(wx, wz) < 1.3) return z; }
    return 20;
  };
  let shift = 0;
  for (let x = -half; x <= half; x += 2) shift = Math.min(shift, clear(X(x)) - d / 2 - 0.4);
  shift = Math.max(shift, -3);
  g.userData.shift = shift;
  const cx0 = cx, cz0 = cz;
  const ccx = cx0 + fx * shift, ccz = cz0 + fz * shift;
  const y0 = T.at(ccx, ccz) + 0.25;
  const P = frame(ccx, ccz, fx, fz, y0);
  const clearS = x => clear(x) - shift; // clearance in the shifted frame
  const tx = stationTextures();
  const blk = new GeoBuilder(true, true), wing = new GeoBuilder(true, true), ped = new GeoBuilder(true, true), plain = new GeoBuilder(true, false), roofG = new GeoBuilder(true, true);
  // two-storey block at the west end (x from -half to -half+10)
  const bx0 = X(-half), bx1 = X(-half + 10);
  const xa = Math.min(bx0, bx1), xb = Math.max(bx0, bx1);
  const fq = (b, a1, a2, h0, h1, z, u0 = 0, u1 = 1, v0 = 0, v1 = 1) => b.quad(P(a1, h0, z), P(a2, h0, z), P(a2, h1, z), P(a1, h1, z), [u0, v0], [u1, v0], [u1, v1], [u0, v1], [1, 1, 1]);
  fq(blk, xa, xb, 0, 10, d / 2);  // street face
  blk.quad(P(xb, 0, -d / 2), P(xa, 0, -d / 2), P(xa, 10, -d / 2), P(xb, 10, -d / 2), [0, 0], [1, 0], [1, 1], [0, 1], [1, 1, 1]);
  blk.quad(P(xa, 0, -d / 2), P(xa, 0, d / 2), P(xa, 10, d / 2), P(xa, 10, -d / 2), [0.1, 0], [0.9, 0], [0.9, 1], [0.1, 1], [1, 1, 1]);
  blk.quad(P(xb, 0, d / 2), P(xb, 0, -d / 2), P(xb, 10, -d / 2), P(xb, 10, d / 2), [0.1, 0], [0.9, 0], [0.9, 1], [0.1, 1], [1, 1, 1]);
  // pediment (curved top with the name) on both long faces
  for (const z of [d / 2 + 0.02, -d / 2 - 0.02]) {
    const sgn = z > 0 ? 1 : -1;
    const n = 10, pts = [];
    for (let k = 0; k <= n; k++) { const t = k / n; pts.push([xa + (xb - xa) * t, 10 + 1.6 * Math.pow(Math.sin(Math.PI * t), 0.6)]); }
    for (let k = 0; k < n; k++) {
      const [x0, h0] = pts[k], [x1, h1] = pts[k + 1];
      const u0 = k / n, u1 = (k + 1) / n;
      if (sgn > 0) ped.quad(P(x0, 10, z), P(x1, 10, z), P(x1, h1, z), P(x0, h0, z), [u0, 0], [u1, 0], [u1, (h1 - 10) / 1.6], [u0, (h0 - 10) / 1.6], [1, 1, 1]);
      else ped.quad(P(x1, 10, z), P(x0, 10, z), P(x0, h0, z), P(x1, h1, z), [1 - u1, 0], [1 - u0, 0], [1 - u0, (h0 - 10) / 1.6], [1 - u1, (h1 - 10) / 1.6], [1, 1, 1]);
    }
  }
  // block roof (flat with parapet)
  plain.quad(P(xa, 10.05, d / 2), P(xb, 10.05, d / 2), P(xb, 10.05, -d / 2), P(xa, 10.05, -d / 2), null, null, null, null, srgb(150, 150, 146), [0, 1, 0]);
  // single-storey wing
  const wx0 = X(-half + 10), wx1 = X(half);
  const wa = Math.min(wx0, wx1), wb = Math.max(wx0, wx1);
  const wl = (wb - wa) / 20;
  fq(wing, wa, wb, 0, 5, d / 2 - 0.5, 0, wl);
  wing.quad(P(wb, 0, -d / 2 + 0.5), P(wa, 0, -d / 2 + 0.5), P(wa, 5, -d / 2 + 0.5), P(wb, 5, -d / 2 + 0.5), [0, 0], [wl, 0], [wl, 1], [0, 1], [1, 1, 1]);
  const endX = sx > 0 ? wb : wa;
  plain.quad(P(endX, 0, -d / 2 + 0.5), P(endX, 0, d / 2 - 0.5), P(endX, 5, d / 2 - 0.5), P(endX, 5, -d / 2 + 0.5), null, null, null, null, srgb(239, 231, 207));
  // wing roof: fibre-cement, two slopes, long overhangs (marquise) on both sides with brackets
  const ovS = 2.6, ovP = 4.2, rr = 6.6, roofCol = srgb(196, 198, 196);
  roofG.quad(P(wa, 4.6, d / 2 - 0.5 + ovS), P(wb, 4.6, d / 2 - 0.5 + ovS), P(wb, rr, 0), P(wa, rr, 0), [0, 0], [(wb - wa) / 1.2, 0], [(wb - wa) / 1.2, 4], [0, 4], roofCol);
  roofG.quad(P(wb, 4.6, -d / 2 + 0.5 - ovP), P(wa, 4.6, -d / 2 + 0.5 - ovP), P(wa, rr, 0), P(wb, rr, 0), [0, 0], [(wb - wa) / 1.2, 0], [(wb - wa) / 1.2, 5], [0, 5], roofCol);
  // brackets (mãos-francesas) + platform columns
  for (let x = wa + 1.5; x < wb; x += 3.2) {
    boxL(plain, P, x - 0.06, x + 0.06, 3.4, 4.6, d / 2 - 0.5, d / 2 + 1.6, srgb(40, 40, 42));
    boxL(plain, P, x - 0.1, x + 0.1, 0, 4.6, -d / 2 + 0.5 - ovP + 0.4, -d / 2 + 0.5 - ovP + 0.6, srgb(60, 64, 66));
  }
  // platform (track side) with yellow safety line
  const pz0 = -d / 2 - 5.2, pz1 = -d / 2 + 0.5;
  boxL(plain, P, Math.min(xa, wa) - 6, Math.max(xb, wb) + 6, -1.0, 0.0, pz0, pz1, srgb(176, 172, 166));
  boxL(plain, P, Math.min(xa, wa) - 6, Math.max(xb, wb) + 6, 0.0, 0.02, pz0 + 0.2, pz0 + 0.6, srgb(236, 196, 40));
  // street-side forecourt paving (only up to the street / viaduct) + teal ramp railings + totem
  let bestX = null, bestC = -1;
  for (let x = Math.min(xa, wa) - 4; x < Math.max(xb, wb); x += 2) {
    const c = Math.min(clearS(x), clearS(x + 2), d / 2 + 6);
    if (c > d / 2 + 0.3) boxL(plain, P, x, x + 2, -0.6, 0.0, d / 2, c, srgb(190, 182, 172));
    if (c > bestC + 0.01 && x > Math.min(xa, wa) - 4 && x + 10 < Math.max(xb, wb)) { bestC = c; bestX = x; }
  }
  const rail = srgb(40, 150, 140);
  let rx0 = xa + 1;
  if (Math.min(clearS(rx0), clearS(rx0 + 8)) < d / 2 + 5.4 && bestX !== null) rx0 = bestX;
  if (Math.min(clearS(rx0), clearS(rx0 + 8)) >= d / 2 + 5.4) {
    for (let k = 0; k < 4; k++) {
      const z = d / 2 + 1.2 + k * 1.2;
      boxL(plain, P, rx0, rx0 + 8, 0.95, 1.02, z, z + 0.06, rail);
      for (let x = rx0; x <= rx0 + 8; x += 2) boxL(plain, P, x, x + 0.06, 0, 1.0, z, z + 0.06, rail);
    }
  }
  // totem
  const tot = new GeoBuilder(true, true);
  let tX = xa - 3, tZ = d / 2 + 4;
  if (clearS(tX) < tZ + 1) { tX = bestX !== null ? bestX + 1 : tX; tZ = Math.max(d / 2 + 1, Math.min(tZ, clearS(tX) - 1)); }
  tot.quad(P(tX - 0.5, 0, tZ), P(tX + 0.5, 0, tZ), P(tX + 0.5, 4, tZ), P(tX - 0.5, 4, tZ), [0, 0], [1, 0], [1, 1], [0, 1], [1, 1, 1]);
  tot.quad(P(tX + 0.5, 0, tZ - 0.25), P(tX - 0.5, 0, tZ - 0.25), P(tX - 0.5, 4, tZ - 0.25), P(tX + 0.5, 4, tZ - 0.25), [0, 0], [1, 0], [1, 1], [0, 1], [1, 1, 1]);
  boxL(plain, P, tX - 0.5, tX + 0.5, 0, 4, tZ - 0.25, tZ, srgb(31, 143, 134));
  // ---- meshes
  const add = (gb, m, cast = true) => { if (!gb.count) return; const me = new THREE.Mesh(gb.geometry(), m); me.castShadow = cast; me.receiveShadow = true; g.add(me); };
  add(blk, new THREE.MeshStandardMaterial({ map: tx.block, roughness: 0.85 }));
  const wtex = tx.wing; wtex.wrapS = THREE.RepeatWrapping;
  add(wing, new THREE.MeshStandardMaterial({ map: wtex, roughness: 0.85 }));
  add(ped, new THREE.MeshStandardMaterial({ map: tx.ped, roughness: 0.85, side: THREE.DoubleSide }));
  add(tot, new THREE.MeshStandardMaterial({ map: tx.totem, roughness: 0.5 }));
  add(plain, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.8 }));
  const fib = (() => { const [c, x] = cv(64, 64); for (let i = 0; i < 64; i++) { const v = 190 + 45 * Math.sin(i / 64 * Math.PI * 2 * 4); x.fillStyle = `rgb(${v},${v},${v})`; x.fillRect(i, 0, 1, 64); } return tex(c, true); })();
  add(roofG, new THREE.MeshStandardMaterial({ vertexColors: true, map: fib, roughness: 0.9, side: THREE.DoubleSide }));
  g.userData.footprint = [P(Math.min(xa, wa) - 6, 0, pz0), P(Math.max(xb, wb) + 6, 0, d / 2 + 6)];
  return g;
}

// ================================================================== PRAÇA JOÃO PINHEIRO
export function buildPraca(city, T, day) {
  const poly = (city.extras.park || []).slice();
  if (poly.length < 3) return null;
  if (poly[0][0] === poly[poly.length - 1][0] && poly[0][1] === poly[poly.length - 1][1]) poly.pop();
  const g = new THREE.Group(); g.name = 'praca';
  let cx = 0, cz = 0; for (const [x, z] of poly) { cx += x; cz += z; } cx /= poly.length; cz /= poly.length;
  // long axis
  let best = 0, ux = 1, uz = 0;
  for (let i = 0; i < poly.length; i++) { const a = poly[i], b = poly[(i + 1) % poly.length], L = Math.hypot(b[0] - a[0], b[1] - a[1]); if (L > best) { best = L; ux = (b[0] - a[0]) / L; uz = (b[1] - a[1]) / L; } }
  const vx = -uz, vz = ux;
  let u0 = 1e9, u1 = -1e9, v0 = 1e9, v1 = -1e9;
  for (const [x, z] of poly) { const u = (x - cx) * ux + (z - cz) * uz, v = (x - cx) * vx + (z - cz) * vz; u0 = Math.min(u0, u); u1 = Math.max(u1, u); v0 = Math.min(v0, v); v1 = Math.max(v1, v); }
  let yMax = -1e9; for (const [x, z] of poly) yMax = Math.max(yMax, T.at(x, z));
  const Y = yMax + 0.25;
  const W = (u, v) => [cx + ux * u + vx * v, cz + uz * u + vz * v];
  const Pt = (u, y, v) => { const [x, z] = W(u, v); return [x, Y + y, z]; };
  const R = rng(777);
  // ---- floor: bloquete (red/grey interlocking pavers)
  const floor = new GeoBuilder(true, true);
  const shape = new THREE.Shape(poly.map(([x, z]) => new THREE.Vector2(x, z)));
  const tris = THREE.ShapeUtils.triangulateShape(shape.getPoints(), []);
  for (const [a, b, c] of tris) {
    const A = poly[a], B = poly[b], C2 = poly[c];
    const cr = (B[0] - A[0]) * (C2[1] - A[1]) - (B[1] - A[1]) * (C2[0] - A[0]);
    const [p1, p2] = cr > 0 ? [C2, B] : [B, C2];
    floor.tri([A[0], Y, A[1]], [p1[0], Y, p1[1]], [p2[0], Y, p2[1]], [A[0] / 2, A[1] / 2], [p1[0] / 2, p1[1] / 2], [p2[0] / 2, p2[1] / 2], [1, 1, 1], [0, 1, 0]);
  }
  // kerb around the praça
  for (let i = 0; i < poly.length; i++) {
    const a = poly[i], b = poly[(i + 1) % poly.length];
    floor.quad([b[0], T.at(b[0], b[1]) - 0.1, b[1]], [a[0], T.at(a[0], a[1]) - 0.1, a[1]], [a[0], Y, a[1]], [b[0], Y, b[1]], [0, 0], [1, 0], [1, 0.1], [0, 0.1], srgb(200, 196, 188));
  }
  const paver = (() => {
    const [c, x] = cv(256, 256);
    x.fillStyle = '#7a6a60'; x.fillRect(0, 0, 256, 256);
    for (let r = 0; r < 16; r++) for (let k = 0; k < 8; k++) {
      const red = (r + k) % 3 === 0, v = 0.85 + R() * 0.25;
      x.fillStyle = red ? `rgb(${170 * v | 0},${88 * v | 0},${70 * v | 0})` : `rgb(${168 * v | 0},${164 * v | 0},${158 * v | 0})`;
      const off = r % 2 ? 16 : 0;
      x.fillRect(k * 32 + off + 1, r * 16 + 1, 30, 14);
      if (off) x.fillRect(-16 + 1, r * 16 + 1, 14, 14);
    }
    return tex(c, true);
  })();
  const fm = new THREE.Mesh(floor.geometry(), new THREE.MeshStandardMaterial({ vertexColors: true, map: paver, roughness: 0.85 }));
  fm.receiveShadow = true; g.add(fm);
  // ---- winding lake: centreline S-curve along the long axis, width varies; island in the middle
  const lake = [];
  const N = 40, umin = u0 + 7, umax = u1 - 10;
  for (let k = 0; k <= N; k++) {
    const t = k / N, u = umin + (umax - umin) * t;
    const v = (v0 + v1) / 2 + Math.sin(t * Math.PI * 1.6 + 0.4) * (v1 - v0) * 0.18;
    const w = 2.2 + 1.8 * Math.sin(t * Math.PI) + 1.6 * Math.exp(-Math.pow((t - 0.5) / 0.12, 2));
    lake.push({ u, v, w });
  }
  const border = new GeoBuilder(true, true), lawn = new GeoBuilder(true, false), island = new GeoBuilder(true, false);
  const tile = srgb(72, 196, 206), lip = srgb(236, 240, 238);
  const water = new GeoBuilder(false, true);
  const shore = new Float32Array(0);
  for (let k = 0; k < N; k++) {
    const a = lake[k], b = lake[k + 1];
    const du = b.u - a.u, dv = b.v - a.v, l = Math.hypot(du, dv), nu = -dv / l, nv = du / l;
    const sideP = (p, s, off, y) => Pt(p.u + nu * s * (p.w + off), y, p.v + nv * s * (p.w + off));
    // water surface
    const q = [sideP(a, -1, 0, 0.16), sideP(b, -1, 0, 0.16), sideP(b, 1, 0, 0.16), sideP(a, 1, 0, 0.16)];
    const ny = (q[1][2] - q[0][2]) * (q[2][0] - q[0][0]) - (q[1][0] - q[0][0]) * (q[2][2] - q[0][2]);
    if (ny >= 0) water.quad(q[0], q[1], q[2], q[3], [0, k], [0, k + 1], [1, k + 1], [1, k]); else water.quad(q[3], q[2], q[1], q[0], [1, k], [1, k + 1], [0, k + 1], [0, k]);
    // tiled border walls (inside face turquoise tiles) + white lip
    for (const s of [-1, 1]) {
      const i0 = sideP(a, s, 0, -0.6), i1 = sideP(b, s, 0, -0.6), t0 = sideP(a, s, 0, 0.35), t1 = sideP(b, s, 0, 0.35);
      const o0 = sideP(a, s, 0.3, 0.35), o1 = sideP(b, s, 0.3, 0.35), g0 = sideP(a, s, 0.3, 0), g1 = sideP(b, s, 0.3, 0);
      border.quad(i0, i1, t1, t0, [0, 0], [l / 0.5, 0], [l / 0.5, 2], [0, 2], tile);
      border.quad(i1, i0, t0, t1, [0, 0], [l / 0.5, 0], [l / 0.5, 2], [0, 2], tile);
      border.quad(t0, t1, o1, o0, [0, 0], [1, 0], [1, 0.1], [0, 0.1], lip);
      border.quad(t1, t0, o0, o1, [0, 0], [1, 0], [1, 0.1], [0, 0.1], lip);
      border.quad(o0, o1, g1, g0, [0, 0], [l / 0.5, 0], [l / 0.5, 1], [0, 1], tile);
      border.quad(o1, o0, g0, g1, [0, 0], [l / 0.5, 0], [l / 0.5, 1], [0, 1], tile);
    }
  }
  void shore;
  // island with flowers in the widest part
  const mid = lake[Math.round(N / 2)];
  const iR = Math.max(1, mid.w - 1.0);
  const flowers = [];
  for (let k = 0; k < 16; k++) {
    const a0 = k / 16 * Math.PI * 2, a1 = (k + 1) / 16 * Math.PI * 2;
    const p0 = Pt(mid.u + Math.cos(a0) * iR * 1.6, 0.25, mid.v + Math.sin(a0) * iR);
    const p1 = Pt(mid.u + Math.cos(a1) * iR * 1.6, 0.25, mid.v + Math.sin(a1) * iR);
    const c = Pt(mid.u, 0.45, mid.v);
    island.tri(c, p1, p0, null, null, null, srgb(70, 120, 50));
    const b0 = Pt(mid.u + Math.cos(a0) * iR * 1.6, -0.3, mid.v + Math.sin(a0) * iR), b1 = Pt(mid.u + Math.cos(a1) * iR * 1.6, -0.3, mid.v + Math.sin(a1) * iR);
    island.quad(b1, b0, p0, p1, null, null, null, null, lip);
  }
  for (let k = 0; k < 60; k++) { const a = R() * 6.28, r = Math.sqrt(R()) * 0.85; flowers.push(Pt(mid.u + Math.cos(a) * iR * 1.6 * r, 0.42, mid.v + Math.sin(a) * iR * r)); }
  // lawns / flower beds on both sides of the lake
  const beds = [[0.18, 1], [0.38, -1], [0.62, 1], [0.82, -1]];
  for (const [t, s] of beds) {
    const p = lake[Math.round(t * N)];
    const bu = p.u, bv = p.v + s * (p.w + 3.2);
    const ru = 4.5, rv = 2.2;
    for (let k = 0; k < 14; k++) {
      const a0 = k / 14 * Math.PI * 2, a1 = (k + 1) / 14 * Math.PI * 2;
      lawn.tri(Pt(bu, 0.12, bv), Pt(bu + Math.cos(a1) * ru, 0.1, bv + Math.sin(a1) * rv), Pt(bu + Math.cos(a0) * ru, 0.1, bv + Math.sin(a0) * rv), null, null, null, srgb(88, 140, 60));
      lawn.quad(Pt(bu + Math.cos(a1) * ru, 0.0, bv + Math.sin(a1) * rv), Pt(bu + Math.cos(a0) * ru, 0.0, bv + Math.sin(a0) * rv), Pt(bu + Math.cos(a0) * ru, 0.18, bv + Math.sin(a0) * rv), Pt(bu + Math.cos(a1) * ru, 0.18, bv + Math.sin(a1) * rv), null, null, null, null, srgb(210, 206, 196));
    }
    for (let k = 0; k < 18; k++) { const a = R() * 6.28, r = Math.sqrt(R()) * 0.85; flowers.push(Pt(bu + Math.cos(a) * ru * r, 0.2, bv + Math.sin(a) * rv * r)); }
  }
  const add = (gb, m, cast = false) => { if (!gb.count) return null; const me = new THREE.Mesh(gb.geometry(), m); me.castShadow = cast; me.receiveShadow = true; g.add(me); return me; };
  const tileTex = (() => { const [c, x] = cv(64, 64); x.fillStyle = '#ffffff'; x.fillRect(0, 0, 64, 64); x.fillStyle = 'rgba(0,40,60,0.35)'; x.fillRect(0, 0, 64, 2); x.fillRect(0, 0, 2, 64); x.fillRect(31, 0, 2, 64); x.fillRect(0, 31, 64, 2); return tex(c, true); })();
  add(border, new THREE.MeshStandardMaterial({ vertexColors: true, map: tileTex, roughness: 0.3, side: THREE.DoubleSide }));
  add(lawn, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95 }));
  add(island, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95 }));
  const wm = makeWaterMaterial(day, { deep: 0x1aa0a8, shallow: 0x5fd2d6 });
  const wmesh = add(water, wm);
  if (wmesh) { wmesh.geometry.setAttribute('shore', new THREE.BufferAttribute(new Float32Array(wmesh.geometry.attributes.position.count), 1)); wmesh.renderOrder = 3; }
  // flowers (instanced small coloured blobs)
  const fl = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.11, 0), new THREE.MeshStandardMaterial({ roughness: 0.8 }), flowers.length);
  const M = new THREE.Matrix4(), col = new THREE.Color(), cols = [0xe53935, 0xfdd835, 0xff7043, 0xffffff, 0xd81b60, 0x8e24aa];
  flowers.forEach((p, i) => { M.makeTranslation(p[0], p[1], p[2]); fl.setMatrixAt(i, M); col.setHex(cols[i % cols.length]); fl.setColorAt(i, col); });
  g.add(fl);
  // ---- arched white bridges with balustrades across the lake (2)
  const bridge = new GeoBuilder(true, false), white = srgb(244, 242, 236);
  for (const t of [0.3, 0.72]) {
    const p = lake[Math.round(t * N)], q = lake[Math.round(t * N) + 1];
    const du = q.u - p.u, dv = q.v - p.v, l = Math.hypot(du, dv), nu = -dv / l, nv = du / l; // across the lake
    const span = p.w + 1.6, half = 0.9, segs = 10;
    const deck = k => { const s = -span + 2 * span * k / segs; const h = 0.9 * Math.cos(s / span * Math.PI / 2); return { u: p.u + nu * s, v: p.v + nv * s, h }; };
    for (let k = 0; k < segs; k++) {
      const a = deck(k), b = deck(k + 1);
      const A = (d, y) => Pt(a.u + (du / l) * d, a.h + y, a.v + (dv / l) * d), Bf = (d, y) => Pt(b.u + (du / l) * d, b.h + y, b.v + (dv / l) * d);
      bridge.quad(A(-half, 0.1), A(half, 0.1), Bf(half, 0.1), Bf(-half, 0.1), null, null, null, null, white);
      bridge.quad(A(half, -0.2), A(-half, -0.2), Bf(-half, -0.2), Bf(half, -0.2), null, null, null, null, white);
      for (const s of [-1, 1]) {
        // handrail + balusters
        const r0 = A(s * half, 0.95), r1 = Bf(s * half, 0.95);
        bridge.quad(A(s * half, 0.85), Bf(s * half, 0.85), [r1[0], r1[1] + 0.12, r1[2]], [r0[0], r0[1] + 0.12, r0[2]], null, null, null, null, white);
        bridge.quad(Bf(s * half, 0.85), A(s * half, 0.85), [r0[0], r0[1] + 0.12, r0[2]], [r1[0], r1[1] + 0.12, r1[2]], null, null, null, null, white);
        const bb = A(s * half, 0.1);
        for (const [dx, dz] of [[0.06, 0], [-0.06, 0], [0, 0.06], [0, -0.06]]) void dx, void dz;
        bridge.quad([bb[0] - 0.05, bb[1], bb[2]], [bb[0] + 0.05, bb[1], bb[2]], [bb[0] + 0.05, bb[1] + 0.8, bb[2]], [bb[0] - 0.05, bb[1] + 0.8, bb[2]], null, null, null, null, white);
        bridge.quad([bb[0], bb[1], bb[2] - 0.05], [bb[0], bb[1], bb[2] + 0.05], [bb[0], bb[1] + 0.8, bb[2] + 0.05], [bb[0], bb[1] + 0.8, bb[2] - 0.05], null, null, null, null, white);
      }
      // arch face (blue band as in the photo)
      for (const s of [-1, 1]) bridge.quad(A(s * half, -0.2), Bf(s * half, -0.2), Bf(s * half, 0.1), A(s * half, 0.1), null, null, null, null, srgb(60, 130, 200));
    }
  }
  const bm = add(bridge, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.6, side: THREE.DoubleSide }), true);
  void bm;
  // ---- benches, globe lamps, boulders, small playground
  const parts = new GeoBuilder(true, false);
  const wood = srgb(120, 80, 48), iron = srgb(40, 42, 44);
  const bench = (u, v, yaw) => {
    const c = Math.cos(yaw), s = Math.sin(yaw);
    const L = (x, y, z) => Pt(u + x * c - z * s, y, v + x * s + z * c);
    const box = (x0, x1, y0, y1, z0, z1, cl) => { const P2 = (x, y, z) => L(x, y, z); boxL(parts, (x, y, z) => P2(x, y, z), x0, x1, y0, y1, z0, z1, cl); };
    for (let k = 0; k < 3; k++) box(-0.9, 0.9, 0.42, 0.46, -0.22 + k * 0.15, -0.1 + k * 0.15, wood);
    for (let k = 0; k < 2; k++) box(-0.9, 0.9, 0.55 + k * 0.15, 0.62 + k * 0.15, 0.25, 0.29, wood);
    for (const x of [-0.8, 0.8]) { box(x - 0.03, x + 0.03, 0, 0.44, -0.2, 0.2, iron); box(x - 0.03, x + 0.03, 0.44, 0.82, 0.24, 0.3, iron); }
  };
  const lamps = [];
  for (let k = 0; k < 10; k++) {
    const t = (k + 0.5) / 10, p = lake[Math.round(t * N)];
    const s = k % 2 ? 1 : -1, off = p.w + 1.6;
    bench(p.u, p.v + s * off, s > 0 ? Math.PI : 0);
    if (k % 2 === 0) lamps.push([p.u + 1.4, p.v - s * (p.w + 1.2)]);
  }
  for (const [u, v] of [[u0 + 4, v0 + 3], [u0 + 4, v1 - 3], [u1 - 4, v0 + 3], [u1 - 4, v1 - 3], [(u0 + u1) / 2, v0 + 2], [(u0 + u1) / 2, v1 - 2]]) lamps.push([u, v]);
  const lampWorld = [];
  for (const [u, v] of lamps) {
    boxL(parts, Pt, u - 0.06, u + 0.06, 0, 3.6, v - 0.06, v + 0.06, iron);
    lampWorld.push(W(u, v));
  }
  const globes = new THREE.InstancedMesh(new THREE.SphereGeometry(0.28, 12, 8), new THREE.MeshStandardMaterial({ color: 0xf4f1e6, emissive: 0xfff2cc, emissiveIntensity: 0, roughness: 0.3 }), lamps.length);
  lamps.forEach(([u, v], i) => { const p = Pt(u, 3.8, v); M.makeTranslation(p[0], p[1], p[2]); globes.setMatrixAt(i, M); });
  g.add(globes);
  g.userData.globes = globes;
  // boulders
  const rock = new THREE.InstancedMesh(new THREE.DodecahedronGeometry(0.7, 0), new THREE.MeshStandardMaterial({ color: 0x5f5a54, roughness: 0.9, flatShading: true }), 6);
  for (let k = 0; k < 6; k++) { const p = lake[Math.round((0.1 + k * 0.15) * N)]; const q = Pt(p.u + 0.5, 0.25, p.v + (k % 2 ? 1 : -1) * (p.w + 0.9)); M.compose(new THREE.Vector3(...q), new THREE.Quaternion().setFromEuler(new THREE.Euler(R(), R() * 6, R())), new THREE.Vector3(1 + R() * 0.5, 0.7 + R() * 0.4, 1 + R() * 0.3)); rock.setMatrixAt(k, M); }
  rock.castShadow = true; g.add(rock);
  // playground at the east end: slide + swing frame
  const pu = u1 - 5, pv = (v0 + v1) / 2;
  boxL(parts, Pt, pu - 0.6, pu + 0.6, 0, 1.6, pv - 0.6, pv + 0.6, srgb(230, 60, 50));
  boxL(parts, Pt, pu - 0.4, pu + 0.4, 1.6, 1.7, pv - 0.4, pv + 0.4, srgb(250, 210, 40));
  const sl = new GeoBuilder(true, false);
  sl.quad(Pt(pu - 0.35, 1.6, pv + 0.6), Pt(pu + 0.35, 1.6, pv + 0.6), Pt(pu + 0.35, 0.1, pv + 3.0), Pt(pu - 0.35, 0.1, pv + 3.0), null, null, null, null, srgb(40, 120, 220));
  add(sl, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.4, side: THREE.DoubleSide }), true);
  for (const x of [-1.6, 1.6]) boxL(parts, Pt, pu - 2.2 + x * 0.0 - 0.05, pu - 2.2 + 0.05, 0, 2.2, pv + x - 0.05, pv + x + 0.05, srgb(250, 200, 40));
  boxL(parts, Pt, pu - 2.25, pu - 2.15, 2.15, 2.25, pv - 1.6, pv + 1.6, srgb(250, 200, 40));
  add(parts, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.7 }), true);
  // night: globes glow
  const sync = d => { globes.material.emissiveIntensity = d.night > 0.4 ? 2.2 : 0; };
  day.onChange(sync); sync(day);
  // palms along the long sides (as in the photos)
  const palms = [];
  for (const t of [0.08, 0.45, 0.9]) for (const s of [-1, 1]) { const p = lake[Math.round(t * N)]; palms.push(W(p.u, p.v + s * (p.w + 4.5))); }
  return { group: g, center: W((u0 + u1) / 2, (v0 + v1) / 2), palms, lamps: lampWorld, lake: lake.map(p => W(p.u, p.v)) };
}
