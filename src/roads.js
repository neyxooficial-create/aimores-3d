// Streets: asphalt, granite setts (paralelepípedo), dirt, sidewalks, curbs, painted lines and
// zebra crossings. Surface polygons come pre-triangulated from the data; materials are procedural.
import * as THREE from 'three';
import { GeoBuilder, rng, hash, srgb, valueNoise, fbm, normalFromHeight, segDist } from './util.js';

const TEX = {}; // cache

/** Writes RGBA + height into canvas-sized buffers and returns {map, normalMap, rough}. */
function finish(W, H, rgb, height, strength, rough = null) {
  const c = document.createElement('canvas');
  c.width = W; c.height = H;
  const g = c.getContext('2d');
  const img = g.createImageData(W, H);
  img.data.set(rgb);
  g.putImageData(img, 0, 0);
  const map = new THREE.CanvasTexture(c);
  map.colorSpace = THREE.SRGBColorSpace;
  map.wrapS = map.wrapT = THREE.RepeatWrapping;
  map.anisotropy = 8;
  const normalMap = normalFromHeight(height, W, H, strength);
  let roughnessMap = null;
  if (rough) {
    const d = new Uint8Array(W * H * 4);
    for (let i = 0; i < W * H; i++) { d[i * 4 + 1] = rough[i]; d[i * 4 + 3] = 255; }
    roughnessMap = new THREE.DataTexture(d, W, H, THREE.RGBAFormat);
    roughnessMap.wrapS = roughnessMap.wrapT = THREE.RepeatWrapping;
    roughnessMap.generateMipmaps = true; roughnessMap.minFilter = THREE.LinearMipmapLinearFilter; roughnessMap.needsUpdate = true;
  }
  return { map, normalMap, roughnessMap };
}

/** Granite setts (paralelepípedos) in rows across the street. Texture covers 2 m x 2 m. */
export function settTexture(S = 1024) {
  if (TEX.sett) return TEX.sett;
  const R = rng(2024), n1 = valueNoise(256, 3), n2 = valueNoise(32, 5);
  const rows = 11, rowH = S / rows, joint = S * 0.008;
  // per row: sett boundaries (wrapping), per sett: tone
  const rowSets = [];
  for (let r = 0; r < rows; r++) {
    const xs = [];
    let x = R() * 60;
    while (x < S + 200) { xs.push(x); x += S * (0.105 + R() * 0.06); }
    const tones = xs.map(() => {
      const t = R();
      // grey granite with some warmer / darker stones
      const base = t < 0.1 ? [146, 134, 122] : t < 0.24 ? [118, 116, 113] : t < 0.36 ? [164, 160, 152] : [140, 138, 134];
      const k = 0.9 + R() * 0.18;
      return [base[0] * k, base[1] * k, base[2] * k, R(), R() * 0.8 - 0.4];
    });
    rowSets.push({ xs, tones, off: (R() - 0.5) * joint * 1.5 });
  }
  const rgb = new Uint8ClampedArray(S * S * 4), hgt = new Float32Array(S * S), rough = new Uint8Array(S * S);
  for (let y = 0; y < S; y++) {
    const r = Math.floor(y / rowH), rs = rowSets[r];
    const fy = y - r * rowH;
    for (let x = 0; x < S; x++) {
      // find sett in this row (xs are increasing; wrap with S)
      const xx = x + 1000; // offset avoids negative modulo
      let k = 0;
      const xs = rs.xs;
      const xm = ((xx - xs[0]) % S + S) % S + xs[0];
      while (k < xs.length - 2 && xs[k + 1] <= xm) k++;
      const x0 = xs[k], x1 = xs[k + 1];
      const dx = Math.min(xm - x0, x1 - xm), dy = Math.min(fy, rowH - fy);
      // hand-laid stones: wobbly joints and slightly rounded corners
      const wob = (n1(x / 34 + r * 7.3, y / 34) - 0.5) * joint * 0.9;
      const corner = Math.max(0, S * 0.012 - Math.hypot(Math.max(0, S * 0.012 - dx), Math.max(0, S * 0.012 - dy)));
      const e = Math.min(dx, dy) - joint / 2 + (rs.tones[k][4] * 2) + wob - (S * 0.012 - corner) * 0.35;
      const i = (y * S + x) * 4;
      const grain = n1(x * 0.5, y * 0.5), sp = hash(x * 13.1 + y * 7.7);
      if (e <= 0) {
        // sand / dirt joint
        const v = 82 + 30 * n2(x / 16, y / 16) + 12 * sp;
        rgb[i] = v * 1.05; rgb[i + 1] = v * 0.95; rgb[i + 2] = v * 0.8; rgb[i + 3] = 255;
        hgt[y * S + x] = -0.6 + 0.1 * grain; rough[y * S + x] = 250;
      } else {
        const t = rs.tones[k];
        const bevel = Math.min(1, e / (S * 0.012));
        const dome = 0.5 + 0.5 * Math.sin(Math.min(1, e / (S * 0.04)) * Math.PI / 2);
        const speck = sp > 0.93 ? 1.25 : sp < 0.05 ? 0.7 : 1;
        const wear = 0.94 + 0.12 * fbm(n2, x / 22 + t[3] * 9, y / 22, 3);
        const shade = (0.72 + 0.28 * bevel) * speck * wear * (0.92 + 0.16 * grain);
        rgb[i] = t[0] * shade; rgb[i + 1] = t[1] * shade; rgb[i + 2] = t[2] * shade; rgb[i + 3] = 255;
        hgt[y * S + x] = dome * 0.9 + 0.1 * grain + t[3] * 0.15;
        rough[y * S + x] = 190 - 60 * bevel * (0.5 + 0.5 * wear - 0.5);
      }
    }
  }
  TEX.sett = finish(S, S, rgb, hgt, 2.2, rough);
  return TEX.sett;
}

/** Asphalt: dark aggregate, light patches, fine cracks. Texture covers 4 m. */
export function asphaltTexture(S = 512) {
  if (TEX.asphalt) return TEX.asphalt;
  const n1 = valueNoise(128, 31), n2 = valueNoise(16, 33), n3 = valueNoise(64, 35);
  const rgb = new Uint8ClampedArray(S * S * 4), hgt = new Float32Array(S * S);
  for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
    const i = y * S + x, sp = hash(x * 3.13 + y * 17.7);
    const agg = sp > 0.86 ? 1.35 : sp < 0.1 ? 0.7 : 1;
    const patch = fbm(n2, x / 32, y / 32, 3);
    const crack = Math.abs(fbm(n3, x / 20, y / 20, 3) - 0.5) < 0.008 ? 0.75 : 1;
    let v = (124 + 26 * n1(x, y)) * agg * (0.9 + 0.2 * patch) * crack;
    rgb[i * 4] = v; rgb[i * 4 + 1] = v * 0.99; rgb[i * 4 + 2] = v * 0.97; rgb[i * 4 + 3] = 255;
    hgt[i] = 0.35 * n1(x / 2, y / 2) + (agg - 1) * 0.25 - (crack < 1 ? 0.4 : 0);
  }
  TEX.asphalt = finish(S, S, rgb, hgt, 0.7);
  return TEX.asphalt;
}

/** Red laterite dirt with pebbles. Texture covers 6 m. */
function dirtTexture(S = 512) {
  if (TEX.dirt) return TEX.dirt;
  const n1 = valueNoise(64, 41), n2 = valueNoise(16, 43);
  const rgb = new Uint8ClampedArray(S * S * 4), hgt = new Float32Array(S * S);
  for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
    const i = y * S + x, sp = hash(x * 5.1 + y * 9.3), f = fbm(n1, x / 8, y / 8, 4), g = fbm(n2, x / 32, y / 32, 3);
    const peb = sp > 0.97 ? 1.3 : 1;
    rgb[i * 4] = (170 + 40 * g) * (0.85 + 0.25 * f) * peb; rgb[i * 4 + 1] = (118 + 22 * g) * (0.85 + 0.25 * f) * peb; rgb[i * 4 + 2] = (82 + 14 * g) * (0.85 + 0.25 * f) * peb; rgb[i * 4 + 3] = 255;
    hgt[i] = f + (peb - 1) * 2;
  }
  TEX.dirt = finish(S, S, rgb, hgt, 2.5);
  return TEX.dirt;
}

/** Sidewalk: concrete slabs 1 m with joints, a bit weathered. Texture covers 2 m. */
function sidewalkTexture(S = 512) {
  if (TEX.side) return TEX.side;
  const n1 = valueNoise(64, 51), n2 = valueNoise(8, 53);
  const rgb = new Uint8ClampedArray(S * S * 4), hgt = new Float32Array(S * S);
  const cell = S / 2;
  for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
    const i = y * S + x;
    const jx = Math.min(x % cell, cell - x % cell), jy = Math.min(y % cell, cell - y % cell);
    const joint = Math.min(jx, jy) < 2.5;
    const slab = (Math.floor(x / cell) * 3 + Math.floor(y / cell) * 7) % 5;
    let v = (196 + slab * 4 + 14 * n1(x / 2, y / 2)) * (0.9 + 0.15 * fbm(n2, x / 64, y / 64, 3));
    if (hash(x * 7.1 + y * 3.3) > 0.985) v *= 0.8;
    if (joint) v *= 0.62;
    rgb[i * 4] = v; rgb[i * 4 + 1] = v * 0.98; rgb[i * 4 + 2] = v * 0.93; rgb[i * 4 + 3] = 255;
    hgt[i] = joint ? -1 : 0.3 * n1(x / 2, y / 2);
  }
  TEX.side = finish(S, S, rgb, hgt, 1.2);
  return TEX.side;
}

const SPEC = {
  asphalt: { scale: 4, lift: 0.09, offset: -3, rough: 0.82, nscale: 0.5, tex: asphaltTexture },
  paver: { scale: 2, lift: 0.1, offset: -3, rough: 0.8, nscale: 1.4, tex: settTexture },
  dirt: { scale: 6, lift: 0.05, offset: -2, rough: 1, nscale: 0.9, tex: dirtTexture },
  sidewalk: { scale: 2, lift: 0.22, offset: -4, rough: 0.9, nscale: 0.6, tex: sidewalkTexture },
};

export function buildRoads(city, T, meshes, opts = {}) {
  const group = new THREE.Group();
  group.name = 'ruas';
  const ex = opts.exclude;
  const Q = opts.quality || 'high';
  for (const kind of ['asphalt', 'paver', 'dirt', 'sidewalk']) {
    let tri = meshes['m_' + kind];
    if (!tri || !tri.length) continue;
    let ang = meshes['a_' + kind] || null;
    if (ex) {
      const keep = [], keepA = [];
      for (let t = 0; t < tri.length / 6; t++) {
        const cx = (tri[t * 6] + tri[t * 6 + 2] + tri[t * 6 + 4]) / 3, cz = (tri[t * 6 + 1] + tri[t * 6 + 3] + tri[t * 6 + 5]) / 3;
        if (ex(cx, cz)) continue;
        for (let k = 0; k < 6; k++) keep.push(tri[t * 6 + k]);
        if (ang) keepA.push(ang[t]);
      }
      tri = new Float32Array(keep); if (ang) ang = new Float32Array(keepA);
    }
    const sp = SPEC[kind];
    const nv = tri.length / 2;
    const pos = new Float32Array(nv * 3), uv = new Float32Array(nv * 2);
    for (let i = 0; i < nv; i++) {
      const x = tri[i * 2], z = tri[i * 2 + 1];
      pos[i * 3] = x; pos[i * 3 + 1] = T.at(x, z) + sp.lift; pos[i * 3 + 2] = z;
      if (ang) {
        const a = ang[Math.floor(i / 3)], c = Math.cos(a), s = Math.sin(a);
        uv[i * 2] = (-x * s + z * c) / sp.scale; uv[i * 2 + 1] = (x * c + z * s) / sp.scale;
      } else { uv[i * 2] = x / sp.scale; uv[i * 2 + 1] = z / sp.scale; }
    }
    // make sure every triangle faces up
    for (let t = 0; t < nv / 3; t++) {
      const a = t * 3, b = a + 1, c = a + 2;
      const cr = (pos[b * 3] - pos[a * 3]) * (pos[c * 3 + 2] - pos[a * 3 + 2]) - (pos[b * 3 + 2] - pos[a * 3 + 2]) * (pos[c * 3] - pos[a * 3]);
      if (cr > 0) { // normal.y = -cr: flip by swapping b and c
        for (let k = 0; k < 3; k++) { const tmp = pos[b * 3 + k]; pos[b * 3 + k] = pos[c * 3 + k]; pos[c * 3 + k] = tmp; }
        for (let k = 0; k < 2; k++) { const tmp = uv[b * 2 + k]; uv[b * 2 + k] = uv[c * 2 + k]; uv[c * 2 + k] = tmp; }
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    g.computeVertexNormals();
    const tx = sp.tex(kind === 'paver' && Q === 'low' ? 512 : undefined);
    const m = new THREE.MeshStandardMaterial({
      map: tx.map, normalMap: Q === 'low' ? null : tx.normalMap, normalScale: new THREE.Vector2(sp.nscale, sp.nscale),
      roughness: sp.rough, roughnessMap: tx.roughnessMap || null,
      polygonOffset: true, polygonOffsetFactor: sp.offset, polygonOffsetUnits: sp.offset * 2,
    });
    if (kind === 'asphalt' || kind === 'paver') {
      // large-scale variation so the tiling never shows (stains, patches, tyre polish)
      m.onBeforeCompile = sh => {
        sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec2 vRW;').replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvRW = (modelMatrix * vec4(transformed, 1.0)).xz;');
        sh.fragmentShader = sh.fragmentShader.replace('#include <common>', `#include <common>
varying vec2 vRW;
float rh(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float rn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(rh(i), rh(i + vec2(1, 0)), f.x), mix(rh(i + vec2(0, 1)), rh(i + vec2(1, 1)), f.x), f.y); }`)
          .replace('#include <map_fragment>', `#include <map_fragment>
  {
    float big = rn(vRW / 37.0) * 0.6 + rn(vRW / 9.0) * 0.4;
    diffuseColor.rgb *= ${kind === 'asphalt' ? '0.86 + 0.26 * big' : '0.9 + 0.2 * big'};
    ${kind === 'asphalt' ? 'diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.13, 0.125, 0.12), smoothstep(0.72, 0.9, rn(vRW / 5.0)) * 0.35);' : 'diffuseColor.rgb *= mix(vec3(1.0), vec3(1.04, 1.0, 0.92), smoothstep(0.5, 0.9, rn(vRW / 13.0)));'}
  }`);
      };
      m.customProgramCacheKey = () => 'road-' + kind;
    }
    const mesh = new THREE.Mesh(g, m);
    mesh.name = 'rua_' + kind;
    mesh.receiveShadow = true;
    group.add(mesh);
  }

  // ---------------------------------------------------------------- curbs (meio-fio)
  const curb = new GeoBuilder(true, true);
  const cWhite = srgb(222, 220, 212), cGrey = srgb(186, 184, 178), cYellow = srgb(224, 196, 80);
  for (const [x1, z1, x2, z2] of city.curbs) {
    const L = Math.hypot(x2 - x1, z2 - z1);
    if (L < 0.05 || (ex && ex((x1 + x2) / 2, (z1 + z2) / 2))) continue;
    const nx = -(z2 - z1) / L * 0.075, nz = (x2 - x1) / L * 0.075;
    const h1 = T.at(x1, z1), h2 = T.at(x2, z2);
    const r = hash(x1 * 0.37 + z1 * 0.11);
    const top = r < 0.55 ? cWhite : r < 0.88 ? cGrey : cYellow;
    const side = top.map(v => v * 0.8);
    curb.quad([x1 - nx, h1 + 0.03, z1 - nz], [x2 - nx, h2 + 0.03, z2 - nz], [x2 - nx, h2 + 0.24, z2 - nz], [x1 - nx, h1 + 0.24, z1 - nz], [0, 0], [L, 0], [L, 0.2], [0, 0.2], side);
    curb.quad([x2 + nx, h2 + 0.03, z2 + nz], [x1 + nx, h1 + 0.03, z1 + nz], [x1 + nx, h1 + 0.24, z1 + nz], [x2 + nx, h2 + 0.24, z2 + nz], [0, 0], [L, 0], [L, 0.2], [0, 0.2], side);
    const a = [x1 - nx, h1 + 0.24, z1 - nz], b = [x2 - nx, h2 + 0.24, z2 - nz], c = [x2 + nx, h2 + 0.24, z2 + nz], d = [x1 + nx, h1 + 0.24, z1 + nz];
    const ny = (b[2] - a[2]) * (c[0] - a[0]) - (b[0] - a[0]) * (c[2] - a[2]);
    if (ny >= 0) curb.quad(a, b, c, d, [0, 0], [L, 0], [L, 0.15], [0, 0.15], top, [0, 1, 0]);
    else curb.quad(d, c, b, a, [0, 0.15], [L, 0.15], [L, 0], [0, 0], top, [0, 1, 0]);
  }
  if (curb.count) {
    const cm = new THREE.Mesh(curb.geometry(), new THREE.MeshStandardMaterial({ vertexColors: true, map: sidewalkTexture().map, roughness: 0.85, side: THREE.DoubleSide }));
    cm.receiveShadow = true;
    cm.name = 'meio-fio';
    group.add(cm);
  }


  // ---------------------------------------------------------------- rotatórias: grass island with a
  // painted kerb (black/yellow) and a small flower bed with a palm-like shrub in the middle
  for (const rb of city.roundabouts || []) {
    const [cx, cz] = rb.c, gb = new GeoBuilder(true, true), N = 48;
    const yAt = (x, z) => T.at(x, z);
    const ring = (r, a) => [cx + r * Math.cos(a), cz + r * Math.sin(a)];
    for (let k = 0; k < N; k++) {
      const a0 = k / N * Math.PI * 2, a1 = (k + 1) / N * Math.PI * 2;
      const o0 = ring(rb.rin, a0), o1 = ring(rb.rin, a1), i0 = ring(rb.rin - 0.18, a0), i1 = ring(rb.rin - 0.18, a1);
      const col = (k >> 1) % 2 ? srgb(235, 190, 40) : srgb(30, 30, 30);
      const y0 = yAt(...o0), y1 = yAt(...o1);
      // outer face of the kerb (outward normal), top, then grass
      gb.quad([o1[0], y1 - 0.05, o1[1]], [o0[0], y0 - 0.05, o0[1]], [o0[0], y0 + 0.28, o0[1]], [o1[0], y1 + 0.28, o1[1]], [0, 0], [1, 0], [1, 1], [0, 1], col);
      gb.quad([o0[0], y0 + 0.28, o0[1]], [i0[0], y0 + 0.28, i0[1]], [i1[0], y1 + 0.28, i1[1]], [o1[0], y1 + 0.28, o1[1]], [0, 0], [1, 0], [1, 1], [0, 1], srgb(220, 218, 210), [0, 1, 0]);
      const g = srgb(78, 128, 52), gc = [cx, yAt(cx, cz) + 0.3, cz];
      const t0 = [i0[0], y0 + 0.26, i0[1]], t1 = [i1[0], y1 + 0.26, i1[1]];
      const ny = (t0[2] - gc[2]) * (t1[0] - gc[0]) - (t0[0] - gc[0]) * (t1[2] - gc[2]);
      if (ny > 0) gb.tri(gc, t0, t1, [0, 0], [1, 0], [0, 1], g, [0, 1, 0]); else gb.tri(gc, t1, t0, [0, 0], [0, 1], [1, 0], g, [0, 1, 0]);
    }
    // flower bed ring (red/yellow) at 2.2 m
    for (let k = 0; k < 28; k++) {
      const a = k / 28 * Math.PI * 2, [x, z] = ring(2.2, a), y = yAt(x, z) + 0.3;
      const col = k % 2 ? srgb(200, 40, 50) : srgb(240, 200, 40), s = 0.32;
      gb.quad([x - s, y + 0.25, z - s], [x - s, y + 0.25, z + s], [x + s, y + 0.25, z + s], [x + s, y + 0.25, z - s], [0, 0], [1, 0], [1, 1], [0, 1], col, [0, 1, 0]);
      gb.quad([x - s, y, z + s], [x + s, y, z + s], [x + s, y + 0.25, z + s], [x - s, y + 0.25, z + s], [0, 0], [1, 0], [1, 1], [0, 1], col.map(v => v * 0.7));
      gb.quad([x + s, y, z - s], [x - s, y, z - s], [x - s, y + 0.25, z - s], [x + s, y + 0.25, z - s], [0, 0], [1, 0], [1, 1], [0, 1], col.map(v => v * 0.7));
    }
    const m = new THREE.Mesh(gb.geometry(), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9 }));
    m.receiveShadow = true; m.name = 'rotatoria';
    group.add(m);
  }

  // ---------------------------------------------------------------- painted lines
  const skip = opts.skipIds || new Set();
  const lines = new GeoBuilder(true, true);
  const yellow = srgb(236, 186, 40), white = srgb(236, 236, 230);
  // uv.x = 0..1 across the stripe, uv.y = metres along; extra = dash mode (0 solid, 1 dashed)
  lines.enableExtra();
  // painted lines stop where they would cross another street's carriageway (junctions)
  const segG = new Map(), gk = (x, z) => Math.floor(x / 20) + ',' + Math.floor(z / 20);
  for (const r of city.roads) {
    if (['footway', 'path', 'steps', 'pedestrian'].includes(r.hw) || r.b) continue;
    for (let i = 0; i < r.p.length - 1; i++) {
      const [ax, az] = r.p[i], [bx, bz] = r.p[i + 1], hw = (r.w || 6) / 2;
      for (let gx = Math.floor((Math.min(ax, bx) - hw) / 20); gx <= Math.floor((Math.max(ax, bx) + hw) / 20); gx++)
        for (let gz = Math.floor((Math.min(az, bz) - hw) / 20); gz <= Math.floor((Math.max(az, bz) + hw) / 20); gz++) {
          const k = gx + ',' + gz; let a = segG.get(k); if (!a) segG.set(k, a = []); a.push([r, ax, az, bx, bz, hw]);
        }
    }
  }
  const inOther = (x, z, self) => { for (const [r, ax, az, bx, bz, hw] of segG.get(gk(x, z)) || []) if (r !== self && segDist(x, z, ax, az, bx, bz).d < hw - 0.3) return true; return false; };
  let curRoad = null;
  const stripe = (pts, off, w, col, dashed, lift = 0.135) => {
    let s = 0;
    for (let i = 0; i < pts.length - 1; i++) {
      const [ax, az] = pts[i], [bx, bz] = pts[i + 1];
      const L = Math.hypot(bx - ax, bz - az);
      if (L < 0.1) continue;
      const ux = (bx - ax) / L, uz = (bz - az) / L, nx = -uz, nz = ux;
      const steps = Math.max(1, Math.ceil(L / 3));
      for (let k = 0; k < steps; k++) {
        const t0 = k / steps, t1 = (k + 1) / steps;
        const x0 = ax + (bx - ax) * t0 + nx * off, z0 = az + (bz - az) * t0 + nz * off;
        const x1 = ax + (bx - ax) * t1 + nx * off, z1 = az + (bz - az) * t1 + nz * off;
        if ((city.roundabouts || []).some(rb => Math.hypot((x0 + x1) / 2 - rb.c[0], (z0 + z1) / 2 - rb.c[1]) < rb.rout + 1)) continue;
        if (curRoad && (inOther(x0, z0, curRoad) || inOther(x1, z1, curRoad))) continue;
        const y0 = T.at(x0, z0) + lift, y1 = T.at(x1, z1) + lift;
        const s0 = s + L * t0, s1 = s + L * t1;
        lines.quad([x0 + nx * w, y0, z0 + nz * w], [x1 + nx * w, y1, z1 + nz * w], [x1 - nx * w, y1, z1 - nz * w], [x0 - nx * w, y0, z0 - nz * w],
          [0, s0], [0, s1], [1, s1], [1, s0], col, [0, 1, 0], null, dashed ? 1 : 0);
      }
      s += L;
    }
  };
  for (const r of city.roads) {
    curRoad = r;
    if (r.s !== 'asphalt' || r.b || skip.has(r.id) || r.id === 1314627854 || r.id === 1314627855 || r.id === 1314627853) continue;
    if (!['trunk', 'tertiary', 'trunk_link', 'primary', 'secondary'].includes(r.hw) || (r.w || 0) < 7) continue;
    if (r.hw === 'trunk') {
      stripe(r.p, -0.12, 0.06, yellow, false); stripe(r.p, 0.12, 0.06, yellow, false);
      const e = (r.w || 8) / 2 - 0.4;
      stripe(r.p, e, 0.07, white, false); stripe(r.p, -e, 0.07, white, false);
    } else if (!r.o) stripe(r.p, 0, 0.065, r.hw === 'tertiary' ? yellow : white, true);
  }
  // zebra crossings near junctions of paved streets in the centre and by the praça
  const zebra = new GeoBuilder(true, true);
  {
    const ends = new Map();
    const key = p => Math.round(p[0] / 2) + ',' + Math.round(p[1] / 2);
    for (const r of city.roads) {
      if (r.hw === 'footway' || r.hw === 'path' || r.s === 'dirt') continue;
      for (const p of [r.p[0], r.p[r.p.length - 1]]) { const k = key(p); ends.set(k, (ends.get(k) || 0) + 1); }
      for (let i = 1; i < r.p.length - 1; i++) { const k = key(r.p[i]); if (ends.has(k)) ends.set(k, ends.get(k) + 1); }
    }
    const centro = city.neigh['Centro'] ? city.neigh['Centro'].rings[0] : null;
    const inPoly = (x, z, p) => { let c = false; for (let i = 0, j = p.length - 1; i < p.length; j = i++) if ((p[i][1] > z) !== (p[j][1] > z) && x < (p[j][0] - p[i][0]) * (z - p[i][1]) / (p[j][1] - p[i][1]) + p[i][0]) c = !c; return c; };
    let nZ = 0;
    for (const r of city.roads) {
      if (r.s !== 'asphalt' && r.s !== 'paver') continue;
      if (r.b || skip.has(r.id) || !['tertiary', 'residential', 'secondary', 'primary'].includes(r.hw)) continue;
      for (const [iEnd, iNext] of [[0, 1], [r.p.length - 1, r.p.length - 2]]) {
        const p = r.p[iEnd], q = r.p[iNext];
        if ((ends.get(key(p)) || 0) < 3) continue;
        if (!centro || !inPoly(p[0], p[1], centro)) continue;
        if (hash(r.id * 0.13 + iEnd) > 0.7) continue;
        const L = Math.hypot(q[0] - p[0], q[1] - p[1]);
        if (L < 12) continue;
        const ux = (q[0] - p[0]) / L, uz = (q[1] - p[1]) / L, nx = -uz, nz = ux;
        const d0 = 5.5, hw = (r.w || 7) / 2 - 0.3;
        const lift = r.s === 'paver' ? 0.145 : 0.135;
        for (let o = -hw + 0.25; o < hw - 0.2; o += 0.9) {
          const cx = p[0] + ux * d0 + nx * o, cz = p[1] + uz * d0 + nz * o;
          const a = [cx - ux * 1.5 - nx * 0.25, 0, cz - uz * 1.5 - nz * 0.25], b = [cx + ux * 1.5 - nx * 0.25, 0, cz + uz * 1.5 - nz * 0.25];
          const c = [cx + ux * 1.5 + nx * 0.25, 0, cz + uz * 1.5 + nz * 0.25], d = [cx - ux * 1.5 + nx * 0.25, 0, cz - uz * 1.5 + nz * 0.25];
          for (const v of [a, b, c, d]) v[1] = T.at(v[0], v[2]) + lift;
          const ny = (b[2] - a[2]) * (c[0] - a[0]) - (b[0] - a[0]) * (c[2] - a[2]);
          if (ny >= 0) zebra.quad(a, b, c, d, [0, 0], [0, 3], [1, 3], [1, 0], white, [0, 1, 0]);
          else zebra.quad(d, c, b, a, [1, 0], [1, 3], [0, 3], [0, 0], white, [0, 1, 0]);
        }
        nZ++;
      }
    }
    group.userData.zebras = nZ;
  }
  const paint = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.6, polygonOffset: true, polygonOffsetFactor: -6, polygonOffsetUnits: -12 });
  paint.onBeforeCompile = sh => {
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nattribute float extra;\nvarying float vDash;\nvarying vec2 vLuv;\nvarying vec2 vPW;')
      .replace('#include <uv_vertex>', '#include <uv_vertex>\nvDash = extra; vLuv = uv; vPW = (modelMatrix * vec4(position, 1.0)).xz;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', `#include <common>
varying float vDash; varying vec2 vLuv; varying vec2 vPW;
float ph(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }`)
      .replace('#include <clipping_planes_fragment>', `#include <clipping_planes_fragment>
  if (vDash > 0.5 && mod(vLuv.y, 8.0) > 3.5) discard;
  // worn paint
  if (ph(floor(vPW * 9.0)) > 0.86) discard;`);
  };
  paint.customProgramCacheKey = () => 'roadpaint';
  if (lines.count) {
    const g = lines.geometry();
    const lm = new THREE.Mesh(g, paint);
    lm.receiveShadow = true; lm.name = 'faixas';
    group.add(lm);
  }
  if (zebra.count) {
    const zg = zebra.geometry();
    zg.setAttribute('extra', new THREE.BufferAttribute(new Float32Array(zg.attributes.position.count), 1));
    const zm = new THREE.Mesh(zg, paint);
    zm.receiveShadow = true; zm.name = 'faixas-pedestre';
    group.add(zm);
  }
  return group;
}
