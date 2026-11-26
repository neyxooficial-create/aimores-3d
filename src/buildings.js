// Houses and shops with varied, street-aware facades.
//
// Every building gets: a plinth that follows the slope, walls split into 3 m "bays" textured from
// the facade atlas (doors / windows / garages / shop fronts chosen per wall), a style
// (simples / padrão / moderna com platibanda / antiga do Centro / comércio), its own paint colour
// and barrado, and a roof that matches the satellite (telha / fibrocimento / metálico / laje).
// Extras: varandas with columns, sacadas, caixas d'água, toldos, real shop signs, solar panels.
import * as THREE from 'three';
import { GeoBuilder, hash, srgb, SpatialGrid, segDist } from './util.js';
import { makeFacadeAtlas, tileUV, TILE, tileRoofTexture, fiberRoofTexture, metalRoofTexture, slabTexture, makeSignAtlas } from './facades.js';

const PAINT = [
  [[244, 242, 236], 14], [[236, 230, 214], 10], [[239, 224, 185], 9], [[243, 220, 142], 6], [[224, 179, 90], 3], [[240, 195, 160], 5],
  [[233, 164, 135], 4], [[200, 113, 79], 2], [[188, 214, 230], 5], [[143, 188, 217], 3], [[191, 224, 199], 4], [[143, 191, 143], 2],
  [[203, 181, 217], 2], [[238, 183, 196], 2], [[201, 201, 196], 6], [[142, 144, 144], 2], [[216, 195, 160], 5], [[63, 127, 191], 1],
  [[240, 160, 64], 1], [[207, 224, 138], 2], [[250, 248, 245], 6],
];
const BARRADO = [[120, 120, 116], [96, 110, 128], [150, 90, 70], [80, 110, 90], [170, 150, 120], [60, 60, 62], [190, 120, 60]];
const pick = (list, r) => { let t = r * list.reduce((s, x) => s + x[1], 0); for (const [c, w] of list) { t -= w; if (t <= 0) return c; } return list[0][0]; };

function polyArea(p) { let a = 0; for (let i = 0; i < p.length; i++) { const q = p[(i + 1) % p.length]; a += p[i][0] * q[1] - q[0] * p[i][1]; } return a / 2; }

/** dominant edge direction of a footprint (length-weighted, modulo 90°) */
function frameAngle(P) {
  let sx = 0, sy = 0;
  for (let i = 0; i < P.length; i++) {
    const a = P[i], b = P[(i + 1) % P.length];
    const dx = b[0] - a[0], dz = b[1] - a[1], L = Math.hypot(dx, dz);
    const ang = Math.atan2(dz, dx) * 4;
    sx += Math.cos(ang) * L; sy += Math.sin(ang) * L;
  }
  return Math.atan2(sy, sx) / 4;
}
/**
 * Classify a footprint for the roof: 'rect' (4 square corners), 'rects' (rectilinear L/T/U,
 * decomposed into rectangles), 'convex' (e.g. a rectangle with a corner cut by the street) or 'other'.
 */
function footprintShape(P, t) {
  const c = Math.cos(t), s = Math.sin(t);
  const Q = P.map(([x, z]) => [x * c + z * s, -x * s + z * c]);
  let rectil = true;
  for (let i = 0; i < Q.length; i++) {
    const a = Q[i], b = Q[(i + 1) % Q.length];
    const dx = Math.abs(b[0] - a[0]), dz = Math.abs(b[1] - a[1]);
    if (Math.min(dx, dz) > Math.max(dx, dz) * 0.06 && Math.min(dx, dz) > 0.12) { rectil = false; break; }
  }
  const toWorld = (u0, u1, v0, v1) => { const cu = (u0 + u1) / 2, cv = (v0 + v1) / 2; return { cx: cu * c - cv * s, cz: cu * s + cv * c, a: (u1 - u0) / 2, b: (v1 - v0) / 2 }; };
  if (rectil) {
    const us = [...new Set(Q.map(q => Math.round(q[0] * 20) / 20))].sort((x, y) => x - y);
    const vs = [...new Set(Q.map(q => Math.round(q[1] * 20) / 20))].sort((x, y) => x - y);
    const merge = arr => arr.filter((v, i) => i === 0 || v - arr[i - 1] > 0.3);
    const U = merge(us), V = merge(vs);
    if (U.length === 2 && V.length === 2) return { kind: 'rect', rects: [toWorld(U[0], U[1], V[0], V[1])] };
    if (U.length <= 12 && V.length <= 12) {
      const inside = (u, v) => { let ins = false; for (let i = 0, j = Q.length - 1; i < Q.length; j = i++) if ((Q[i][1] > v) !== (Q[j][1] > v) && u < (Q[j][0] - Q[i][0]) * (v - Q[i][1]) / (Q[j][1] - Q[i][1]) + Q[i][0]) ins = !ins; return ins; };
      const nu = U.length - 1, nv = V.length - 1;
      const decompose = uFirst => {
        const cell = []; for (let i = 0; i < nu; i++) { cell.push([]); for (let j = 0; j < nv; j++) cell[i].push(inside((U[i] + U[i + 1]) / 2, (V[j] + V[j + 1]) / 2)); }
        const used = cell.map(r => r.map(() => false));
        const out = [];
        for (let i = 0; i < nu; i++) for (let j = 0; j < nv; j++) {
          if (!cell[i][j] || used[i][j]) continue;
          let i1 = i, j1 = j;
          if (uFirst) {
            while (i1 + 1 < nu && cell[i1 + 1][j] && !used[i1 + 1][j]) i1++;
            let ok = true; while (ok && j1 + 1 < nv) { for (let k = i; k <= i1; k++) if (!cell[k][j1 + 1] || used[k][j1 + 1]) ok = false; if (ok) j1++; }
          } else {
            while (j1 + 1 < nv && cell[i][j1 + 1] && !used[i][j1 + 1]) j1++;
            let ok = true; while (ok && i1 + 1 < nu) { for (let k = j; k <= j1; k++) if (!cell[i1 + 1][k] || used[i1 + 1][k]) ok = false; if (ok) i1++; }
          }
          for (let a = i; a <= i1; a++) for (let b = j; b <= j1; b++) used[a][b] = true;
          out.push(toWorld(U[i], U[i1 + 1], V[j], V[j1 + 1]));
        }
        return out;
      };
      const d1 = decompose(true), d2 = decompose(false);
      const best = d1.length <= d2.length ? d1 : d2;
      // tiny wings (< 1.2 m) make silly roofs: fall back to a flat roof then
      if (best.length && best.length <= 6 && best.every(r => Math.min(r.a, r.b) > 0.6)) return { kind: best.length === 1 ? 'rect' : 'rects', rects: best };
    }
    return { kind: 'other' };
  }
  // convex?
  let sg = 0;
  for (let i = 0; i < P.length; i++) {
    const a = P[i], b = P[(i + 1) % P.length], d = P[(i + 2) % P.length];
    const cr = (b[0] - a[0]) * (d[1] - b[1]) - (b[1] - a[1]) * (d[0] - b[0]);
    if (Math.abs(cr) < 1e-4) continue;
    if (!sg) sg = Math.sign(cr); else if (Math.sign(cr) !== sg) return { kind: 'other' };
  }
  return { kind: 'convex' };
}
/** offset a polygon (positive area = CCW in x/z) outwards by d (inwards for d < 0) */
function offsetPoly(P, d) {
  const n = P.length, lines = [];
  for (let i = 0; i < n; i++) {
    const a = P[i], b = P[(i + 1) % n], L = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
    const ex = (b[0] - a[0]) / L, ez = (b[1] - a[1]) / L, nx = ez, nz = -ex; // outward normal
    lines.push({ px: a[0] + nx * d, pz: a[1] + nz * d, ex, ez });
  }
  const out = [];
  for (let i = 0; i < n; i++) {
    const l0 = lines[(i - 1 + n) % n], l1 = lines[i];
    const den = l0.ex * l1.ez - l0.ez * l1.ex;
    if (Math.abs(den) < 1e-6) { out.push([l1.px, l1.pz]); continue; }
    const tt = ((l1.px - l0.px) * l1.ez - (l1.pz - l0.pz) * l1.ex) / den;
    out.push([l0.px + l0.ex * tt, l0.pz + l0.ez * tt]);
  }
  // reject if any edge flipped direction (offset too large)
  for (let i = 0; i < n; i++) {
    const a = out[i], b = out[(i + 1) % n], c = P[i], e = P[(i + 1) % n];
    if ((b[0] - a[0]) * (e[0] - c[0]) + (b[1] - a[1]) * (e[1] - c[1]) <= 0) return null;
  }
  return out;
}
/** largest inset (≤ dMax) of a convex polygon that stays valid; returns { p, d } */
function insetConvex(P, dMax) {
  let d = dMax * 0.95;
  for (let k = 0; k < 10; k++, d *= 0.8) {
    const q = offsetPoly(P, -d);
    if (q) return { p: q, d };
  }
  return null;
}

export function buildBuildings(city, T, opts = {}) {
  const Q = opts.quality || 'high';
  const skip = opts.skip || (() => false);
  const places = city.places || [];
  // ---------------------------------------------------------------- road index (front detection)
  const rg = new SpatialGrid(30);
  for (const r of city.roads) {
    if (r.hw === 'footway' || r.hw === 'path') continue;
    for (let i = 0; i < r.p.length - 1; i++) {
      const [ax, az] = r.p[i], [bx, bz] = r.p[i + 1];
      rg.add({ ax, az, bx, bz, hw: (r.w || 6) / 2, main: ['trunk', 'tertiary', 'primary', 'secondary', 'trunk_link'].includes(r.hw) }, Math.min(ax, bx), Math.min(az, bz), Math.max(ax, bx), Math.max(az, bz));
    }
  }
  const roadDist = (x, z, rad = 30) => {
    let best = { d: 1e9, main: false };
    for (const s of rg.query(x, z, rad)) { const d = segDist(x, z, s.ax, s.az, s.bx, s.bz).d - s.hw; if (d < best.d) best = { d, main: s.main }; }
    return best;
  };
  // places inside buildings -> real shop signs
  const signNames = [], signOf = new Map();
  for (const pl of places) {
    const [name, x, z, group] = pl;
    if (['igrejas', 'publico', 'educacao'].includes(group)) continue;
    for (let bi = 0; bi < city.buildings.length; bi++) {
      const p = city.buildings[bi].p;
      if (Math.abs(p[0][0] - x) > 50 || Math.abs(p[0][1] - z) > 50) continue;
      let inside = false;
      for (let a = 0, c = p.length - 1; a < p.length; c = a++) if ((p[a][1] > z) !== (p[c][1] > z) && x < (p[c][0] - p[a][0]) * (z - p[a][1]) / (p[c][1] - p[a][1]) + p[a][0]) inside = !inside;
      if (inside && !signOf.has(bi)) { signOf.set(bi, signNames.length); signNames.push(name.length > 30 ? name.slice(0, 29) + '…' : name); break; }
    }
  }
  const signs = signNames.length ? makeSignAtlas(signNames) : null;

  const fac = new GeoBuilder(true, true);     // facade bays (atlas)
  const trim = new GeoBuilder(true, false);   // plinths, columns, slabs, fascia, tanks, awnings...
  const roofs = { ceramic: new GeoBuilder(true, true), fiber: new GeoBuilder(true, true), metal: new GeoBuilder(true, true), slab: new GeoBuilder(true, true) };
  const sign = new GeoBuilder(false, true);
  const solar = new GeoBuilder(false, true);
  const glassB = new GeoBuilder(true, false);
  const WHITE = srgb(236, 234, 228), CONC = srgb(178, 174, 166), DARK = srgb(55, 55, 58);

  const quadFace = (b, a, bb, c, d, ua, ub, uc, ud, col, cols) => b.quad(a, bb, c, d, ua, ub, uc, ud, col, null, cols);
  // vertical wall quad from (x0,z0)-(x1,z1), y from ya to yb, outward = right of the edge direction for CCW polygons
  const wallQ = (b, x0, z0, x1, z1, ya0, yb0, ya1, yb1, uv, col) => {
    // CCW polygon (positive area in x/z) -> outward normal = (dz, -dx); faces must be wound to face it
    quadFace(b, [x0, ya0, z0], [x0, yb0, z0], [x1, yb1, z1], [x1, ya1, z1], uv ? [uv.u1, uv.v0] : null, uv ? [uv.u1, uv.v1] : null, uv ? [uv.u0, uv.v1] : null, uv ? [uv.u0, uv.v0] : null, col);
  };
  const boxT = (cx, cy, cz, sx, sy, sz, yaw, col, b = trim) => {
    const c = Math.cos(yaw), s = Math.sin(yaw);
    const P = (u, y, v) => [cx + u * c - v * s, cy + y, cz + u * s + v * c];
    const hx = sx / 2, hz = sz / 2;
    const v = [P(-hx, 0, -hz), P(hx, 0, -hz), P(hx, 0, hz), P(-hx, 0, hz), P(-hx, sy, -hz), P(hx, sy, -hz), P(hx, sy, hz), P(-hx, sy, hz)];
    const f = (a, bb, cc, d) => b.quad(v[a], v[bb], v[cc], v[d], null, null, null, null, col);
    f(4, 7, 6, 5); f(0, 1, 5, 4); f(1, 2, 6, 5); f(2, 3, 7, 6); f(3, 0, 4, 7);
  };
  const cyl = (cx, cy, cz, r, h, col, seg = 8, b = trim) => {
    for (let k = 0; k < seg; k++) {
      const a0 = k / seg * Math.PI * 2, a1 = (k + 1) / seg * Math.PI * 2;
      const p = (a, y) => [cx + Math.cos(a) * r, cy + y, cz + Math.sin(a) * r];
      b.quad(p(a0, 0), p(a1, 0), p(a1, h), p(a0, h), null, null, null, null, col);
      b.tri([cx, cy + h + r * 0.25, cz], p(a1, h), p(a0, h), null, null, null, col);
    }
  };

  let nB = 0;
  const stats = { shop: 0, moderna: 0, antiga: 0, simples: 0, padrao: 0, varanda: 0, sacada: 0, garagem: 0, caixa: 0, solar: 0 };
  for (let bi = 0; bi < city.buildings.length; bi++) {
    const B = city.buildings[bi];
    if (skip(B)) continue;
    let P = B.p.slice();
    if (polyArea(P) < 0) P.reverse();
    const n = P.length, A = Math.abs(polyArea(P));
    if (A < 8) continue;
    nB++;
    const h0 = hash(bi * 1.37 + 0.11), h1 = hash(bi * 2.71 + 0.33), h2 = hash(bi * 5.13 + 0.57), h3 = hash(bi * 7.77 + 0.79), h4 = hash(bi * 11.3 + 0.21);
    let tMin = 1e9, tMax = -1e9;
    for (const [x, z] of P) { const t = T.at(x, z); tMin = Math.min(tMin, t); tMax = Math.max(tMax, t); }
    const floorY = tMax + 0.15, base = tMin - 0.35;
    const floors = Math.max(1, B.f || 1);
    const fh = Math.max(2.75, Math.min(3.5, (B.h || 3) / floors + (floors > 1 ? 0.1 : 0)));
    const eave = floorY + fh * floors;
    // ---------------------------------------------------------------- front edge
    let front = 0, frontD = 1e9, frontMain = false;
    for (let i = 0; i < n; i++) {
      const [x0, z0] = P[i], [x1, z1] = P[(i + 1) % n];
      const L = Math.hypot(x1 - x0, z1 - z0); if (L < 2) continue;
      const nx = (z1 - z0) / L, nz = -(x1 - x0) / L;
      const mx = (x0 + x1) / 2, mz = (z0 + z1) / 2;
      const rd = roadDist(mx + nx * 2, mz + nz * 2, 35);
      const d = rd.d - (L > 5 ? 1.5 : 0);
      if (d < frontD) { frontD = d; front = i; frontMain = rd.main; }
    }
    const setback = Math.max(0, frontD + 2);
    // ---------------------------------------------------------------- style
    const nb = B.nb || '';
    const centro = B.cen || nb === 'Centro' || nb === 'Matriz';
    const hasSign = signOf.has(bi);
    const big = A > 260;
    let style;
    if (hasSign || (centro && (frontMain || h0 < 0.45) && setback < 3)) style = 'shop';
    else if (/Esta/i.test(B.osm || '')) style = 'antiga';
    else if (centro && h1 < 0.22) style = 'antiga';
    else if (h1 < (centro ? 0.38 : 0.2) || big) style = 'moderna';
    else if (['Sossego', 'Vila Tiago', 'Industrial', 'Triângulo', 'Barra Preta', 'Vila Fonseca'].includes(nb) && h1 < 0.52) style = 'simples';
    else style = 'padrao';
    if (B.rm === 'metal' && A > 350) style = 'galpao';
    stats[style === 'shop' ? 'shop' : style === 'galpao' ? 'padrao' : style]++;
    const unplastered = style === 'simples' && h2 < 0.45;
    const paint = srgb(...pick(PAINT, h3));
    const paint2 = srgb(...pick(PAINT, hash(bi * 3.3)));       // second colour for some fronts / shops
    const barr = srgb(...BARRADO[Math.floor(h4 * BARRADO.length)]);
    const hasBarrado = style !== 'antiga' && h4 < 0.62;
    const parapet = style === 'moderna' || style === 'shop' || style === 'galpao' || B.r === 'flat' || B.r === 'flatc';
    const parH = style === 'shop' ? 1.1 + h2 * 0.8 : style === 'moderna' ? 0.8 + h2 * 0.6 : 0.45;
    const winRes = style === 'antiga' ? [TILE.COL_WINDOW, TILE.WIN_ARCH] : style === 'moderna' ? [TILE.WIN_MODERN, TILE.WIN_SLIDE] : style === 'simples' ? [TILE.WIN_SHUTTER, TILE.WIN_GRID, TILE.WIN_SLIDE] : [TILE.WIN_SLIDE, TILE.WIN_SHUTTER, TILE.WIN_GRID, TILE.WIN_DOUBLE];
    const mainWin = winRes[Math.floor(h2 * winRes.length)];
    const doorT = style === 'antiga' ? TILE.COL_DOOR : h0 < 0.5 ? TILE.DOOR_WOOD : TILE.DOOR_METAL;
    const shopT = [TILE.SHOP_OPEN, TILE.SHOP_OPEN, TILE.SHOP_GLASS, TILE.SHOP_CLOSED, TILE.SHOP_BAR];
    const upFront = style === 'moderna' ? TILE.UP_GLASS : style === 'antiga' ? TILE.UP_COL : style === 'shop' && h2 < 0.35 ? TILE.UP_GLASS : TILE.UP_WIN;
    const sacada = floors >= 2 && style !== 'galpao' && h3 < 0.5;
    const frontL = Math.hypot(P[(front + 1) % n][0] - P[front][0], P[(front + 1) % n][1] - P[front][1]);
    const garage = (style === 'padrao' || style === 'moderna') && frontL >= 7 && setback > 2.5 && h4 > 0.45;
    const varanda = (style === 'padrao' || style === 'simples') && frontL >= 6 && setback > 3.2 && h0 > 0.55;
    if (garage) stats.garagem++; if (varanda) stats.varanda++; if (sacada) stats.sacada++;

    // ---------------------------------------------------------------- walls
    const doorBayRef = { done: false };
    for (let i = 0; i < n; i++) {
      const [x0, z0] = P[i], [x1, z1] = P[(i + 1) % n];
      const L = Math.hypot(x1 - x0, z1 - z0);
      if (L < 0.05) continue;
      const nx = (z1 - z0) / L, nz = -(x1 - x0) / L;
      const isFront = i === front;
      // side walls: is the edge roughly parallel to the front?
      const fx0 = P[front], fx1 = P[(front + 1) % n];
      const fdx = (fx1[0] - fx0[0]), fdz = (fx1[1] - fx0[1]), fl = Math.hypot(fdx, fdz) || 1;
      const par = Math.abs((x1 - x0) * fdx + (z1 - z0) * fdz) / (L * fl);
      const isBack = !isFront && par > 0.7;
      // plinth (follows the slope)
      const g0 = T.at(x0, z0), g1 = T.at(x1, z1);
      if (floorY - Math.min(g0, g1) > 0.05) wallQ(trim, x0, z0, x1, z1, Math.min(g0, base + 0.3) - 0.3, floorY, Math.min(g1, base + 0.3) - 0.3, floorY, null, hasBarrado ? barr : CONC);
      const nb2 = Math.max(1, Math.round(L / 3.0));
      const bw = L / nb2;
      // which bay gets the door / garage on the front
      const doorBay = nb2 === 1 ? 0 : Math.min(nb2 - 1, Math.floor(h1 * nb2));
      const garageBay = garage ? (doorBay === 0 ? nb2 - 1 : 0) : -1;
      for (let f = 0; f < floors; f++) {
        const ya = floorY + f * fh, yb = f === floors - 1 ? eave : floorY + (f + 1) * fh;
        for (let k = 0; k < nb2; k++) {
          const ax = x0 + (x1 - x0) * k / nb2, az = z0 + (z1 - z0) * k / nb2, bx = x0 + (x1 - x0) * (k + 1) / nb2, bz = z0 + (z1 - z0) * (k + 1) / nb2;
          const r = hash(bi * 13.1 + i * 3.7 + k * 1.3 + f * 7.9);
          let t;
          if (f === 0) {
            if (isFront) {
              if (style === 'shop') t = (floors > 1 && k === nb2 - 1 && nb2 > 2) ? TILE.DOOR_METAL : shopT[Math.floor(r * shopT.length)];
              else if (style === 'galpao') t = k === doorBay ? TILE.SHOP_CLOSED : TILE.VENT;
              else if (k === garageBay) t = h2 < 0.6 ? TILE.GARAGE : TILE.DOOR_GARAGE_WOOD;
              else if (k === doorBay) t = nb2 === 1 && bw > 2.6 ? TILE.DOOR_WOOD : doorT;
              else if (r < 0.12 && nb2 > 2) t = TILE.METER;
              else t = mainWin;
            } else if (isBack) t = style === 'galpao' ? TILE.VENT : r < 0.45 ? TILE.WIN_SMALL : r < 0.8 ? TILE.WIN_SLIDE : TILE.BLANK;
            else t = style === 'galpao' ? (r < 0.5 ? TILE.VENT : TILE.BLANK2) : r < 0.55 ? TILE.BLANK : r < 0.72 ? TILE.WIN_SMALL : r < 0.85 ? TILE.BLANK2 : style === 'antiga' ? TILE.COL_WINDOW : TILE.WIN_SLIDE;
            if (unplastered && !isFront) t = h3 < 0.5 ? TILE.BRICK : TILE.BLOCK;
          } else {
            if (isFront) t = sacada && f === 1 ? TILE.UP_BALCONY : (r < 0.15 ? TILE.UP_AC : upFront);
            else if (isBack) t = r < 0.6 ? TILE.UP_WIN : r < 0.8 ? TILE.UP_BLIND : TILE.UP_BLANK;
            else t = r < 0.6 ? TILE.UP_BLANK : r < 0.8 ? TILE.UP_WIN : TILE.UP_AC;
            if (unplastered && !isFront) t = TILE.BLOCK;
          }
          const col = style === 'shop' && f === 0 && isFront ? paint2 : paint;
          wallQ(fac, ax, az, bx, bz, ya, yb, ya, yb, tileUV(t), col);
          // barrado (painted base band) on plain / window bays of the ground floor
          if (Q !== 'low' && f === 0 && hasBarrado && ![TILE.DOOR_WOOD, TILE.DOOR_METAL, TILE.GARAGE, TILE.DOOR_GARAGE_WOOD, TILE.SHOP_OPEN, TILE.SHOP_CLOSED, TILE.SHOP_GLASS, TILE.SHOP_BAR, TILE.COL_DOOR, TILE.BRICK, TILE.BLOCK].includes(t)) {
            const o = 0.012;
            wallQ(trim, ax + nx * o, az + nz * o, bx + nx * o, bz + nz * o, ya, ya + 0.55, ya, ya + 0.55, null, barr);
          }
          // sacada: slab + railing in front of balcony doors
          if (t === TILE.UP_BALCONY) {
            const d = 1.0, sx = (ax + bx) / 2 + nx * d / 2, sz = (az + bz) / 2 + nz * d / 2, yaw = Math.atan2(bz - az, bx - ax);
            boxT(sx, ya - 0.12, sz, bw * 0.95, 0.12, d, yaw, WHITE);
            const rail = h1 < 0.5 || Q === 'low';
            const ex = (ax + bx) / 2 + nx * d, ez = (az + bz) / 2 + nz * d;
            if (rail) wallQ(glassB, ex - (bx - ax) / 2 * 0.95, ez - (bz - az) / 2 * 0.95, ex + (bx - ax) / 2 * 0.95, ez + (bz - az) / 2 * 0.95, ya, ya + 1.05, ya, ya + 1.05, null, srgb(70, 95, 105));
            else for (let s = 0; s <= 8; s++) { const t2 = s / 8 - 0.5; boxT(ex + (bx - ax) * t2 * 0.95, ya, ez + (bz - az) * t2 * 0.95, 0.04, 1.0, 0.04, yaw, DARK); }
            boxT(ex, ya + 1.0, ez, bw * 0.95, 0.06, 0.08, yaw, rail ? srgb(200, 200, 200) : DARK);
          }
        }
      }
      // platibanda (parapet) above the eave
      if (parapet) {
        const ph = isFront ? parH : Math.min(parH, 0.6);
        wallQ(fac, x0, z0, x1, z1, eave, eave + ph, eave, eave + ph, tileUV(TILE.BLANK), style === 'shop' ? paint2 : paint);
        // coping on top + inner face
        const o = 0.15;
        wallQ(trim, x1 - nx * o, z1 - nz * o, x0 - nx * o, z0 - nz * o, eave + 0.1, eave + ph, eave + 0.1, eave + ph, null, CONC);
        trim.quad([x0, eave + ph + 0.04, z0], [x0 - nx * o, eave + ph + 0.04, z0 - nz * o], [x1 - nx * o, eave + ph + 0.04, z1 - nz * o], [x1, eave + ph + 0.04, z1], null, null, null, null, WHITE, [0, 1, 0]);
      }
      // toldo (awning) and sign on shop fronts
      if (isFront && style === 'shop') {
        const yaw = Math.atan2(z1 - z0, x1 - x0);
        const sIdx = signOf.get(bi);
        if (signs && sIdx !== undefined) {
          const uv = signs.uv(sIdx);
          const w = Math.min(L * 0.85, 1.0 * uv.aspect * 0.9), hgt = w / uv.aspect;
          const cx = (x0 + x1) / 2 + nx * 0.08, cz = (z0 + z1) / 2 + nz * 0.08, ux = (x1 - x0) / L, uz = (z1 - z0) / L;
          const y0 = floorY + fh - 0.05 - hgt * 0.15;
          sign.quad([cx - ux * w / 2, y0, cz - uz * w / 2], [cx - ux * w / 2, y0 + hgt, cz - uz * w / 2], [cx + ux * w / 2, y0 + hgt, cz + uz * w / 2], [cx + ux * w / 2, y0, cz + uz * w / 2],
            [uv.u1, uv.v0], [uv.u1, uv.v1], [uv.u0, uv.v1], [uv.u0, uv.v0], null, [nx, 0, nz]);
        }
        if (h2 > 0.45) {
          const cols = [srgb(200, 40, 40), srgb(30, 90, 170), srgb(40, 130, 60), srgb(230, 170, 30), srgb(120, 60, 140)];
          const ca = cols[Math.floor(h4 * cols.length)], cb = srgb(240, 240, 235);
          const d = 1.3, ya = floorY + 2.75, yb = floorY + 2.2, nS = Math.max(2, Math.round(L / 0.6));
          for (let s = 0; s < nS; s++) {
            const ta = s / nS, tb = (s + 1) / nS;
            const pa = [x0 + (x1 - x0) * ta, z0 + (z1 - z0) * ta], pb = [x0 + (x1 - x0) * tb, z0 + (z1 - z0) * tb];
            trim.quad([pa[0], ya, pa[1]], [pa[0] + nx * d, yb, pa[1] + nz * d], [pb[0] + nx * d, yb, pb[1] + nz * d], [pb[0], ya, pb[1]], null, null, null, null, s % 2 ? ca : cb);
          }
          void yaw;
        }
      }
    }
    // ---------------------------------------------------------------- varanda (porch with columns)
    if (varanda) {
      const [x0, z0] = P[front], [x1, z1] = P[(front + 1) % n];
      const L = frontL, ux = (x1 - x0) / L, uz = (z1 - z0) / L, nx = uz, nz = -ux;
      const d = Math.min(2.6, setback - 1.2), w0 = L * (h1 < 0.5 ? 0.05 : 0.35), w1 = L * (h1 < 0.5 ? 0.6 : 0.95);
      const ax = x0 + ux * w0, az = z0 + uz * w0, bx = x0 + ux * w1, bz = z0 + uz * w1;
      const py = floorY + fh - 0.25;
      // floor slab (cerâmica)
      const fy = floorY;
      trim.quad([ax, fy, az], [ax + nx * d, fy, az + nz * d], [bx + nx * d, fy, bz + nz * d], [bx, fy, bz], null, null, null, null, srgb(170, 90, 70), [0, 1, 0]);
      wallQ(trim, bx + nx * d, bz + nz * d, ax + nx * d, az + nz * d, T.at(ax + nx * d, az + nz * d) - 0.2, fy, T.at(bx + nx * d, bz + nz * d) - 0.2, fy, null, hasBarrado ? barr : CONC);
      // columns
      const nc = Math.max(2, Math.round((w1 - w0) / 2.8) + 1);
      for (let c = 0; c < nc; c++) {
        const t = c / (nc - 1);
        boxT(ax + (bx - ax) * t + nx * (d - 0.15), fy, az + (bz - az) * t + nz * (d - 0.15), 0.18, py - fy, 0.18, Math.atan2(uz, ux), WHITE);
      }
      // roof: tile shed or laje
      if (h2 < 0.6 && B.rm === 'ceramic') {
        const rb = roofs.ceramic, col = srgb(...B.rc);
        const y0r = eave - 0.1, y1r = py;
        rb.quad([bx, y0r, bz], [bx + nx * (d + 0.4), y1r - 0.1, bz + nz * (d + 0.4)], [ax + nx * (d + 0.4), y1r - 0.1, az + nz * (d + 0.4)], [ax, y0r, az], [0, 0], [0, d], [L, d], [L, 0], col);
      } else boxT((ax + bx) / 2 + nx * d / 2, py, (az + bz) / 2 + nz * d / 2, (w1 - w0) + 0.2, 0.14, d + 0.25, Math.atan2(uz, ux), WHITE);
    }
    // ---------------------------------------------------------------- roof
    // frame from the footprint itself (dominant edge direction), so the roof always matches the walls
    const t = frameAngle(P);
    let ux = Math.cos(t), uz = Math.sin(t);
    let u0 = 1e9, u1 = -1e9, v0 = 1e9, v1 = -1e9;
    for (const [x, z] of P) { const u = x * ux + z * uz, v = -x * uz + z * ux; u0 = Math.min(u0, u); u1 = Math.max(u1, u); v0 = Math.min(v0, v); v1 = Math.max(v1, v); }
    let a = (u1 - u0) / 2, b = (v1 - v0) / 2;
    const cu = (u0 + u1) / 2, cv = (v0 + v1) / 2;
    const cx = cu * ux - cv * uz, cz = cu * uz + cv * ux;
    let vx = -uz, vz = ux;
    if (a < b) { [a, b] = [b, a]; [ux, uz, vx, vz] = [vx, vz, -ux, -uz]; }
    const R = (u, v, y) => [cx + ux * u + vx * v, y, cz + uz * u + vz * v];
    const rm = B.rm === 'metal' ? 'metal' : B.rm === 'fiber' ? 'fiber' : B.rm === 'slab' ? 'slab' : 'ceramic';
    const rc = srgb(...B.rc);
    const roofCol = rm === 'ceramic' ? rc : rm === 'slab' ? srgb(190, 186, 178) : rc.map(v => Math.min(1, v * 1.05));
    const rb = roofs[rm];
    const shape = footprintShape(P, t);
    const pitch = rm === 'ceramic' ? 0.33 + h2 * 0.08 : rm === 'fiber' ? 0.16 : 0.1;
    const ov = rm === 'ceramic' ? 0.55 : 0.35;
    const tu = rm === 'ceramic' ? 1.1 : 1.0;
    let roofTopY = eave;
    const flatRoof = parapet || rm === 'slab' || shape.kind === 'other';
    const flatPoly = (y, col, b0 = rb) => {
      const tris = THREE.ShapeUtils.triangulateShape(P.map(([x, z]) => new THREE.Vector2(x, z)), []);
      for (const [i0, i1, i2] of tris) {
        const p0 = P[i0], p1 = P[i1], p2 = P[i2];
        const A2 = (p1[0] - p0[0]) * (p2[1] - p0[1]) - (p1[1] - p0[1]) * (p2[0] - p0[0]);
        const [q1, q2] = A2 > 0 ? [p2, p1] : [p1, p2];
        b0.tri([p0[0], y, p0[1]], [q1[0], y, q1[1]], [q2[0], y, q2[1]], [p0[0] / 2, p0[1] / 2], [q1[0] / 2, q1[1] / 2], [q2[0] / 2, q2[1] / 2], col, [0, 1, 0]);
      }
    };
    // one rectangle (centre, axis, half sizes) with a hip / gable / shed roof, eaves overhanging
    const rectRoof = (rcx, rcz, rux, ruz, ra, rbb, kind, walls) => {
      const rvx = -ruz, rvz = rux;
      const Rr = (u, v, y) => [rcx + rux * u + rvx * v, y, rcz + ruz * u + rvz * v];
      const A_ = ra + ov, B_ = rbb + ov;
      const ridge = eave + B_ * pitch;
      const sl = Math.hypot(B_, ridge - eave);
      if (kind === 'shed') {
        const y0s = eave + 2 * B_ * pitch, y1s = eave;
        rb.quad(Rr(-A_, B_, y1s), Rr(A_, B_, y1s), Rr(A_, -B_, y0s), Rr(-A_, -B_, y0s), [0, 0], [2 * A_ / tu, 0], [2 * A_ / tu, 2 * B_ / tu], [0, 2 * B_ / tu], roofCol);
        if (walls) {
          const bu = tileUV(TILE.BLANK), b0 = [bu.u0, bu.v0], b1 = [bu.u1, bu.v0], b2 = [bu.u0, bu.v1];
          fac.tri(Rr(-ra, -rbb, eave), Rr(-ra, rbb, eave), Rr(-ra, -rbb, eave + 2 * rbb * pitch), b0, b1, b2, paint);
          fac.tri(Rr(ra, rbb, eave), Rr(ra, -rbb, eave), Rr(ra, -rbb, eave + 2 * rbb * pitch), b0, b1, b2, paint);
        }
        return eave + 2 * B_ * pitch;
      }
      if (kind === 'gable') {
        rb.quad(Rr(-A_, -B_, eave), Rr(A_, -B_, eave), Rr(A_, 0, ridge), Rr(-A_, 0, ridge), [0, 0], [2 * A_ / tu, 0], [2 * A_ / tu, sl / tu], [0, sl / tu], roofCol);
        rb.quad(Rr(A_, B_, eave), Rr(-A_, B_, eave), Rr(-A_, 0, ridge), Rr(A_, 0, ridge), [0, 0], [2 * A_ / tu, 0], [2 * A_ / tu, sl / tu], [0, sl / tu], roofCol);
        if (walls) {
          const gy = eave + rbb * pitch;
          const bu = tileUV(TILE.BLANK), b0 = [bu.u0, bu.v0], b1 = [bu.u1, bu.v0], b2 = [(bu.u0 + bu.u1) / 2, bu.v1];
          fac.tri(Rr(-ra, -rbb, eave), Rr(-ra, rbb, eave), Rr(-ra, 0, gy), b0, b1, b2, paint);
          fac.tri(Rr(ra, rbb, eave), Rr(ra, -rbb, eave), Rr(ra, 0, gy), b0, b1, b2, paint);
        }
        if (rm === 'ceramic' && Q !== 'low') boxT(rcx, ridge - 0.06, rcz, 2 * A_, 0.14, 0.32, Math.atan2(ruz, rux), roofCol.map(v => v * 0.8), trim);
        return ridge;
      }
      const r = Math.max(0, A_ - B_);
      rb.quad(Rr(-A_, -B_, eave), Rr(A_, -B_, eave), Rr(r, 0, ridge), Rr(-r, 0, ridge), [0, 0], [2 * A_ / tu, 0], [(A_ + r) / tu, sl / tu], [(A_ - r) / tu, sl / tu], roofCol);
      rb.quad(Rr(A_, B_, eave), Rr(-A_, B_, eave), Rr(-r, 0, ridge), Rr(r, 0, ridge), [0, 0], [2 * A_ / tu, 0], [(A_ + r) / tu, sl / tu], [(A_ - r) / tu, sl / tu], roofCol);
      rb.tri(Rr(-A_, B_, eave), Rr(-A_, -B_, eave), Rr(-r, 0, ridge), [0, 0], [2 * B_ / tu, 0], [B_ / tu, sl / tu], roofCol);
      rb.tri(Rr(A_, -B_, eave), Rr(A_, B_, eave), Rr(r, 0, ridge), [0, 0], [2 * B_ / tu, 0], [B_ / tu, sl / tu], roofCol);
      if (rm === 'ceramic' && r > 0.2 && Q !== 'low') boxT(rcx, ridge - 0.06, rcz, 2 * r, 0.14, 0.3, Math.atan2(ruz, rux), roofCol.map(v => v * 0.8), trim);
      return ridge;
    };
    const soffit = (outer, inner) => {
      if (Q === 'low') return;
      const soff = rm === 'ceramic' ? srgb(120, 80, 55) : srgb(200, 200, 196);
      for (let k = 0; k < outer.length; k++) {
        const k1 = (k + 1) % outer.length;
        trim.quad(outer[k], inner[k], inner[k1], outer[k1], null, null, null, null, soff, [0, -1, 0]);
        if (rm === 'ceramic' && h4 < 0.5) { const p = outer[k], q = outer[k1]; trim.quad([p[0], eave - 0.2, p[2]], [q[0], eave - 0.2, q[2]], [q[0], eave + 0.02, q[2]], [p[0], eave + 0.02, p[2]], null, null, null, null, WHITE); }
      }
    };
    if (flatRoof) {
      // flat / hidden roof behind the parapet: the actual polygon at eave + 0.25
      const y = eave + 0.25;
      if (style === 'galpao' && shape.kind === 'rect') {
        // galpão: low two-slope metal roof showing above the platibanda
        const gr = shape.rects[0];
        const ga = gr.a, gb = gr.b, gux = gr.a >= gr.b ? ux : vx, guz = gr.a >= gr.b ? uz : vz;
        const A2 = Math.max(ga, gb), B2 = Math.min(ga, gb);
        const gvx = -guz, gvz = gux;
        const G = (u, v, yy) => [gr.cx + gux * u + gvx * v, yy, gr.cz + guz * u + gvz * v];
        const rid = y + B2 * 0.09;
        const sl = Math.hypot(B2, rid - y);
        rb.quad(G(-A2, -B2, y), G(A2, -B2, y), G(A2, 0, rid), G(-A2, 0, rid), [0, 0], [2 * A2 / tu, 0], [2 * A2 / tu, sl / tu], [0, sl / tu], roofCol);
        rb.quad(G(A2, B2, y), G(-A2, B2, y), G(-A2, 0, rid), G(A2, 0, rid), [0, 0], [2 * A2 / tu, 0], [2 * A2 / tu, sl / tu], [0, sl / tu], roofCol);
        // gable infill above the parapet at the two short ends
        const bu = tileUV(TILE.BLANK), q0 = [bu.u0, bu.v0], q1 = [bu.u1, bu.v0], q2 = [(bu.u0 + bu.u1) / 2, bu.v1];
        fac.tri(G(-A2, -B2, y), G(-A2, B2, y), G(-A2, 0, rid), q0, q1, q2, paint);
        fac.tri(G(A2, B2, y), G(A2, -B2, y), G(A2, 0, rid), q0, q1, q2, paint);
        roofTopY = rid;
      } else {
        flatPoly(y, roofCol);
        roofTopY = y;
      }
      if (!parapet) for (let i = 0; i < n; i++) { // low laje edge
        const [x0, z0] = P[i], [x1, z1] = P[(i + 1) % n];
        wallQ(trim, x0, z0, x1, z1, eave, y + 0.15, eave, y + 0.15, null, paint.map(v => v * 0.95));
      }
    } else if (shape.kind === 'rect') {
      const kind = B.r === 'shed' ? 'shed' : (B.r === 'gable' || (rm === 'ceramic' && h0 < 0.3) || rm !== 'ceramic') ? 'gable' : 'hip';
      roofTopY = rectRoof(cx, cz, ux, uz, a, b, kind, true);
      soffit([R(-a - ov, -b - ov, eave - 0.02), R(a + ov, -b - ov, eave - 0.02), R(a + ov, b + ov, eave - 0.02), R(-a - ov, b + ov, eave - 0.02)],
        [R(-a, -b, eave - 0.02), R(a, -b, eave - 0.02), R(a, b, eave - 0.02), R(-a, b, eave - 0.02)]);
    } else if (shape.kind === 'rects') {
      // L / T / U shaped house: one hip roof per wing (the wings meet like real cross-hipped roofs)
      for (const q of shape.rects) {
        const along = q.a >= q.b;
        const qux = along ? Math.cos(t) : -Math.sin(t), quz = along ? Math.sin(t) : Math.cos(t);
        roofTopY = Math.max(roofTopY, rectRoof(q.cx, q.cz, qux, quz, Math.max(q.a, q.b), Math.min(q.a, q.b), 'hip', false));
      }
    } else {
      // convex non-rectangular footprint (a corner cut by the street): hipped roof up to an inset ring
      const outer = offsetPoly(P, ov), inner = insetConvex(P, Math.min(a, b));
      if (!outer || !inner) { flatPoly(eave + 0.25, roofCol); roofTopY = eave + 0.25; }
      else {
        const rise = inner.d * pitch;
        const yi = eave + rise;
        for (let i = 0; i < n; i++) {
          const j = (i + 1) % n;
          const o0 = [outer[i][0], eave, outer[i][1]], o1 = [outer[j][0], eave, outer[j][1]];
          const i0 = [inner.p[i][0], yi, inner.p[i][1]], i1 = [inner.p[j][0], yi, inner.p[j][1]];
          const L = Math.hypot(o1[0] - o0[0], o1[2] - o0[2]), sl = Math.hypot(inner.d + ov, rise);
          rb.quad(o1, o0, i0, i1, [L / tu, 0], [0, 0], [0, sl / tu], [L / tu, sl / tu], roofCol);
        }
        for (let i = 1; i < n - 1; i++) {
          const p0 = inner.p[0], p1 = inner.p[i], p2 = inner.p[i + 1];
          rb.tri([p0[0], yi, p0[1]], [p2[0], yi, p2[1]], [p1[0], yi, p1[1]], [p0[0] / 2, p0[1] / 2], [p2[0] / 2, p2[1] / 2], [p1[0] / 2, p1[1] / 2], roofCol, [0, 1, 0]);
        }
        soffit(outer.map(([x, z]) => [x, eave - 0.02, z]), P.map(([x, z]) => [x, eave - 0.02, z]));
        roofTopY = yi;
      }
    }
    // ---------------------------------------------------------------- caixa d'água, dish, solar
    // caixa d'água: usually visible on lajes; on tiled roofs most are hidden under the roof
    if (style !== 'galpao' && (flatRoof ? h3 > 0.45 : h3 > 0.88)) {
      stats.caixa++;
      const tx = cx + ux * a * 0.35 * (h4 - 0.5) * 2, tz = cz + uz * a * 0.35 * (h4 - 0.5) * 2;
      const onRoof = flatRoof;
      const ty = onRoof ? roofTopY : roofTopY - 0.45;
      cyl(tx, ty, tz, 0.62, 0.85, h2 < 0.75 ? srgb(40, 95, 170) : srgb(200, 200, 205), Q === 'low' ? 6 : 10);
    }
    if (B.sol && B.sol > 0.05 && rm !== 'slab') {
      stats.solar++;
      // panels on the slope that faces north (-z): best for the southern hemisphere
      const yaw = Math.atan2(uz, ux);
      const sgn = (vz > 0 ? -1 : 1);
      const pw = Math.min(2 * a - 1, 4), pd = Math.min(b * 0.8, 2.2);
      const pc = R(0, sgn * b * 0.45, 0);
      const y = parapet ? roofTopY + 0.15 : eave + (b * 0.55) * (rm === 'ceramic' ? 0.35 : 0.15);
      const c = [[-pw / 2, -pd / 2], [pw / 2, -pd / 2], [pw / 2, pd / 2], [-pw / 2, pd / 2]].map(([du, dv]) => [pc[0] + ux * du + vx * dv, y + 0.08, pc[2] + uz * du + vz * dv]);
      solar.quad(c[0], c[3], c[2], c[1], [0, 0], [0, pd], [pw, pd], [pw, 0], null, [0, 1, 0]);
      void yaw;
    }
    if (Q !== 'low' && h4 > 0.9 && style !== 'antiga') { // parabolic dish
      const dx = cx - ux * a * 0.4, dz = cz - uz * a * 0.4;
      cyl(dx, roofTopY - 0.2, dz, 0.04, 0.6, DARK, 4);
      const c0 = [dx, roofTopY + 0.6, dz];
      for (let k = 0; k < 10; k++) { const a0 = k / 10 * 6.283, a1 = (k + 1) / 10 * 6.283; trim.tri(c0, [dx + Math.cos(a1) * 0.45, roofTopY + 0.6 + Math.sin(a1) * 0.45, dz + 0.15], [dx + Math.cos(a0) * 0.45, roofTopY + 0.6 + Math.sin(a0) * 0.45, dz + 0.15], null, null, null, srgb(215, 215, 215)); }
    }
  }

  // ---------------------------------------------------------------- materials & meshes
  const group = new THREE.Group();
  group.name = 'buildings';
  const atlas = makeFacadeAtlas();
  const facMat = new THREE.MeshStandardMaterial({ vertexColors: true, map: atlas, roughness: 0.88 });
  facMat.onBeforeCompile = sh => {
    sh.fragmentShader = sh.fragmentShader.replace('#include <color_fragment>', `
#if defined( USE_COLOR ) && defined( USE_MAP )
  diffuseColor.rgb *= mix( vec3(1.0), vColor.rgb, sampledDiffuseColor.a );
#elif defined( USE_COLOR )
  diffuseColor.rgb *= vColor.rgb;
#endif
  diffuseColor.a = 1.0;`);
  };
  facMat.customProgramCacheKey = () => 'paintmask';
  const add = (gb, mat, cast = true) => {
    if (!gb.count) return null;
    const m = new THREE.Mesh(gb.geometry(), mat);
    m.castShadow = cast; m.receiveShadow = true;
    group.add(m);
    return m;
  };
  add(fac, facMat);
  add(trim, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.85, side: THREE.DoubleSide }));
  add(roofs.ceramic, new THREE.MeshStandardMaterial({ vertexColors: true, map: tileRoofTexture(), roughness: 0.8, side: THREE.DoubleSide }));
  add(roofs.fiber, new THREE.MeshStandardMaterial({ vertexColors: true, map: fiberRoofTexture(), roughness: 0.9, side: THREE.DoubleSide }));
  add(roofs.metal, new THREE.MeshStandardMaterial({ vertexColors: true, map: metalRoofTexture(), roughness: 0.38, metalness: 0.55, side: THREE.DoubleSide }));
  add(roofs.slab, new THREE.MeshStandardMaterial({ vertexColors: true, map: slabTexture(), roughness: 0.95, side: THREE.DoubleSide }));
  add(glassB, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.1, metalness: 0.2, transparent: true, opacity: 0.55, side: THREE.DoubleSide }), false);
  if (signs) {
    const sm = new THREE.MeshStandardMaterial({ map: signs.texture, roughness: 0.6, emissive: 0xffffff, emissiveMap: signs.texture, emissiveIntensity: 0 });
    const m = add(sign, sm, false);
    if (m) m.userData.sign = sm;
  }
  if (solar.count) {
    const c = document.createElement('canvas'); c.width = c.height = 64;
    const g = c.getContext('2d'); g.fillStyle = '#152238'; g.fillRect(0, 0, 64, 64); g.strokeStyle = '#8d9aa8'; g.lineWidth = 2;
    for (let k = 0; k <= 64; k += 16) { g.beginPath(); g.moveTo(k, 0); g.lineTo(k, 64); g.stroke(); g.beginPath(); g.moveTo(0, k); g.lineTo(64, k); g.stroke(); }
    const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace;
    add(solar, new THREE.MeshStandardMaterial({ map: t, roughness: 0.25, metalness: 0.4 }), false);
  }
  group.userData.stats = { buildings: nB, signs: signNames.length, ...stats };
  return group;
}
