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
  const rx = -fz, rz = fx; // right = forward rotated -90°
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

export function buildChurch(T, fr) {
  const g = new THREE.Group(); g.name = 'igreja';
  const C = fr.C, F = fr.f;
  // place the nave so that its front (with the tower) faces the street like the legacy frame
  const y0 = T.at(C[0], C[1]) - 0.2;
  const P = frame(C[0], C[1], F[0], F[1], y0);
  const tx = churchTextures();
  const mats = {};
  const mat = (t, opts = {}) => new THREE.MeshStandardMaterial({ map: t, roughness: 0.85, ...opts });
  const ochre = srgb(215, 162, 62), white = srgb(246, 242, 230), roofC = srgb(170, 84, 58);
  // nave body (textured sides), front/back faces + gable
  const naveL = 24, naveW = 12, naveH = 9.5, zb = -16, zf = zb + naveL;
  const side = new GeoBuilder(true, true), front = new GeoBuilder(true, true), plain = new GeoBuilder(true, false), roof = new GeoBuilder(true, true);
  // sides
  side.quad(P(naveW / 2, 0, zf), P(naveW / 2, 0, zb), P(naveW / 2, naveH, zb), P(naveW / 2, naveH, zf), [0, 0], [1, 0], [1, 1], [0, 1], [1, 1, 1]);
  side.quad(P(-naveW / 2, 0, zb), P(-naveW / 2, 0, zf), P(-naveW / 2, naveH, zf), P(-naveW / 2, naveH, zb), [0, 0], [1, 0], [1, 1], [0, 1], [1, 1, 1]);
  // front wall (both sides of the tower) and back wall + gables
  front.quad(P(-naveW / 2, 0, zf), P(naveW / 2, 0, zf), P(naveW / 2, naveH, zf), P(-naveW / 2, naveH, zf), [0, 0], [1, 0], [1, 1], [0, 1], [1, 1, 1]);
  plain.quad(P(naveW / 2, 0, zb), P(-naveW / 2, 0, zb), P(-naveW / 2, naveH, zb), P(naveW / 2, naveH, zb), null, null, null, null, white);
  const rh = 4.2;
  plain.tri(P(-naveW / 2, naveH, zf), P(naveW / 2, naveH, zf), P(0, naveH + rh, zf), null, null, null, white);
  plain.tri(P(naveW / 2, naveH, zb), P(-naveW / 2, naveH, zb), P(0, naveH + rh, zb), null, null, null, white);
  // ochre cornice along the eaves
  boxL(plain, P, naveW / 2 - 0.05, naveW / 2 + 0.25, naveH - 0.35, naveH, zb, zf, ochre);
  boxL(plain, P, -naveW / 2 - 0.25, -naveW / 2 + 0.05, naveH - 0.35, naveH, zb, zf, ochre);
  // roof (clay tiles)
  const ov = 0.6, sl = Math.hypot(naveW / 2 + ov, rh);
  roof.quad(P(-naveW / 2 - ov, naveH - 0.3, zb - ov), P(-naveW / 2 - ov, naveH - 0.3, zf), P(0, naveH + rh, zf), P(0, naveH + rh, zb - ov), [0, 0], [naveL, 0], [naveL, sl], [0, sl], roofC);
  roof.quad(P(naveW / 2 + ov, naveH - 0.3, zf), P(naveW / 2 + ov, naveH - 0.3, zb - ov), P(0, naveH + rh, zb - ov), P(0, naveH + rh, zf), [0, 0], [naveL, 0], [naveL, sl], [0, sl], roofC);
  // sacristy behind (lower)
  boxL(plain, P, -4, 4, 0, 5, zb - 6, zb, white);
  roof.quad(P(-4.4, 5, zb - 6.4), P(-4.4, 5, zb), P(0, 6.8, zb), P(0, 6.8, zb - 6.4), [0, 0], [6, 0], [6, 4], [0, 4], roofC);
  roof.quad(P(4.4, 5, zb), P(4.4, 5, zb - 6.4), P(0, 6.8, zb - 6.4), P(0, 6.8, zb), [0, 0], [6, 0], [6, 4], [0, 4], roofC);
  // tower (front-centre, protruding), textured faces
  const tw = 2.8, tz0 = zf - 1, tz1 = zf + 4.6, th = 21;
  const tf = new GeoBuilder(true, true), ts = new GeoBuilder(true, true);
  tf.quad(P(-tw, 0, tz1), P(tw, 0, tz1), P(tw, th, tz1), P(-tw, th, tz1), [0, 0], [1, 0], [1, 1], [0, 1], [1, 1, 1]);
  ts.quad(P(tw, 0, tz1), P(tw, 0, tz0), P(tw, th, tz0), P(tw, th, tz1), [0, 0], [1, 0], [1, 1], [0, 1], [1, 1, 1]);
  ts.quad(P(-tw, 0, tz0), P(-tw, 0, tz1), P(-tw, th, tz1), P(-tw, th, tz0), [0, 0], [1, 0], [1, 1], [0, 1], [1, 1, 1]);
  ts.quad(P(tw, naveH + rh, tz0), P(-tw, naveH + rh, tz0), P(-tw, th, tz0), P(tw, th, tz0), [0, 0.6], [1, 0.6], [1, 1], [0, 1], [1, 1, 1]);
  // cornice cap + 4 pinnacles + spire + cross
  boxL(plain, P, -tw - 0.25, tw + 0.25, th, th + 0.5, tz0 - 0.25, tz1 + 0.25, ochre);
  const spireG = new GeoBuilder(true, true), sh = 12, sb = tw * 0.92, top = P(0, th + 0.5 + sh, (tz0 + tz1) / 2), zc = (tz0 + tz1) / 2;
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
  // front steps + columns flanking the portal
  boxL(plain, P, -2.6, 2.6, -0.2, 0.25, tz1, tz1 + 1.2, srgb(200, 196, 188));
  boxL(plain, P, -2.6, 2.6, -0.2, 0.12, tz1 + 1.2, tz1 + 2.2, srgb(200, 196, 188));
  // adro: low granilite wall + white iron fence + gate, around a forecourt in front
  const adro = new GeoBuilder(true, true);
  const az0 = zb - 8, az1 = tz1 + 9, ax = naveW / 2 + 6;
  const fenceL = [[-ax, az1, -1.6, az1], [1.6, az1, ax, az1], [ax, az1, ax, az0], [-ax, az0, -ax, az1]];
  for (const [x0, z0, x1, z1] of fenceL) {
    const L = Math.hypot(x1 - x0, z1 - z0);
    adro.quad(P(x0, -0.3, z0), P(x1, -0.3, z1), P(x1, 0.9, z1), P(x0, 0.9, z0), [0, 0], [L / 2, 0], [L / 2, 0.5], [0, 0.5], srgb(150, 152, 150));
    adro.quad(P(x1, -0.3, z1), P(x0, -0.3, z0), P(x0, 0.9, z0), P(x1, 0.9, z1), [0, 0], [L / 2, 0], [L / 2, 0.5], [0, 0.5], srgb(150, 152, 150));
  }
  const grid = new GeoBuilder(true, true);
  for (const [x0, z0, x1, z1] of fenceL) {
    const L = Math.hypot(x1 - x0, z1 - z0);
    grid.quad(P(x0, 0.9, z0), P(x1, 0.9, z1), P(x1, 2.4, z1), P(x0, 2.4, z0), [0, 0], [L / 0.5, 0], [L / 0.5, 3], [0, 3], [1, 1, 1]);
  }
  // forecourt floor (granite-like)
  plain.quad(P(-ax, 0.1, az0 + 0.1), P(-ax, 0.1, az1), P(ax, 0.1, az1), P(ax, 0.1, az0 + 0.1), null, null, null, null, srgb(176, 172, 164));
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
  const granite = (() => { const [c, x] = cv(64, 64); for (let i = 0; i < 64 * 64; i++) { const v = 120 + Math.random() * 90; x.fillStyle = `rgb(${v},${v},${v})`; x.fillRect(i % 64, Math.floor(i / 64), 1, 1); } return tex(c, true); })();
  add(adro, new THREE.MeshStandardMaterial({ vertexColors: true, map: granite, roughness: 0.9, side: THREE.DoubleSide }));
  const mesh = (() => { const [c, x] = cv(64, 64); x.clearRect(0, 0, 64, 64); x.strokeStyle = '#f4f4f4'; x.lineWidth = 3; x.beginPath(); x.moveTo(0, 0); x.lineTo(64, 64); x.moveTo(64, 0); x.lineTo(0, 64); x.stroke(); x.strokeRect(0, 0, 64, 64); return tex(c, true); })();
  add(grid, new THREE.MeshStandardMaterial({ map: mesh, transparent: true, alphaTest: 0.4, side: THREE.DoubleSide, roughness: 0.5 }), false);
  // palm trees on both sides of the forecourt (imperial palms, as in the photos)
  const palms = [];
  for (const [x, z] of [[-ax + 2, az1 - 2.5], [ax - 2, az1 - 2.5], [-ax + 2, zb + 4], [ax - 2, zb + 4]]) { const p = P(x, 0, z); palms.push([p[0], p[2]]); }
  return { group: g, palms };
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

export function buildStation(city, T, railPts) {
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
  const y0 = T.at(cx, cz) + 0.25;
  const P = frame(cx, cz, fx, fz, y0);
  // local x runs along the track; pick the sign so that x = (ux,uz)
  const sx = (-fz * ux + fx * uz) > 0 ? 1 : -1; // right vector = (-fz, fx)
  const X = x => x * sx;
  const tx = stationTextures();
  const blk = new GeoBuilder(true, true), wing = new GeoBuilder(true, true), ped = new GeoBuilder(true, true), plain = new GeoBuilder(true, false), roofG = new GeoBuilder(true, true);
  const half = L / 2, d = Math.min(9, W * 0.7);
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
  // street-side forecourt paving + teal ramp railings
  boxL(plain, P, xa - 4, wb, -0.6, 0.0, d / 2, d / 2 + 6, srgb(190, 182, 172));
  const rail = srgb(40, 150, 140);
  for (let k = 0; k < 4; k++) {
    const z = d / 2 + 1.2 + k * 1.2;
    boxL(plain, P, xa + 1, xa + 9, 0.95, 1.02, z, z + 0.06, rail);
    for (let x = xa + 1; x <= xa + 9; x += 2) boxL(plain, P, x, x + 0.06, 0, 1.0, z, z + 0.06, rail);
  }
  // totem
  const tot = new GeoBuilder(true, true);
  const tX = xa - 3, tZ = d / 2 + 4;
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
