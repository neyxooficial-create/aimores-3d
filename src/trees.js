// Trees: species-specific instanced models with distance LOD.
//
// Every tree gets a precomputed matrix/colour; the near set (within NEAR_R of the view target)
// is drawn with detailed leafy crowns, everything else with light-weight blobs. The split is
// rebuilt only when the camera has moved a fair bit, so it costs nothing per frame.
import * as THREE from 'three';
import { GeoBuilder, rng, hash, srgb, makeCanvas } from './util.js';

// species ids from the data pipeline
const SP = { COMUM: 0, MANGUEIRA: 1, OITI: 2, COQUEIRO: 3, IMPERIAL: 4, IPE: 5, FLAMBOYANT: 6, EUCALIPTO: 7, MATA: 8, SECA: 9, ARBUSTO: 10 };

function leafTexture() {
  const S = 256, [c, g] = makeCanvas(S, S);
  g.clearRect(0, 0, S, S);
  const R = rng(77);
  for (let i = 0; i < 950; i++) {
    const x = R() * S, y = R() * S, l = 6 + R() * 9, w = l * (0.38 + R() * 0.2), a = R() * Math.PI * 2;
    const v = 150 + R() * 105;
    g.fillStyle = `rgb(${v * 0.92 | 0},${v | 0},${v * 0.82 | 0})`;
    g.save(); g.translate(x, y); g.rotate(a);
    g.beginPath(); g.ellipse(0, 0, l / 2, w / 2, 0, 0, Math.PI * 2); g.fill();
    g.fillStyle = 'rgba(0,0,0,0.18)'; g.fillRect(-l / 2, -0.4, l, 0.8);
    g.restore();
    // wrap at edges for tiling
    if (x < 12 || y < 12) { g.save(); g.translate(x + (x < 12 ? S : 0), y + (y < 12 ? S : 0)); g.rotate(a); g.fillStyle = `rgb(${v * 0.92 | 0},${v | 0},${v * 0.82 | 0})`; g.beginPath(); g.ellipse(0, 0, l / 2, w / 2, 0, 0, Math.PI * 2); g.fill(); g.restore(); }
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = 4;
  return t;
}
function frondTexture() {
  const W = 128, H = 512, [c, g] = makeCanvas(W, H);
  g.clearRect(0, 0, W, H);
  g.strokeStyle = '#b9c58a'; g.lineWidth = 3; g.beginPath(); g.moveTo(W / 2, 0); g.lineTo(W / 2, H); g.stroke();
  const R = rng(111);
  for (let y = 6; y < H; y += 5) {
    const t = y / H, len = W * 0.48 * Math.sin(Math.PI * Math.min(1, t * 1.15)) + 4;
    for (const s of [-1, 1]) {
      const v = 170 + R() * 70;
      g.strokeStyle = `rgb(${v * 0.85 | 0},${v | 0},${v * 0.6 | 0})`;
      g.lineWidth = 2.2;
      g.beginPath(); g.moveTo(W / 2, y); g.quadraticCurveTo(W / 2 + s * len * 0.6, y + 4, W / 2 + s * len, y + 14 + R() * 6); g.stroke();
    }
  }
  const t = new THREE.CanvasTexture(c);
  t.anisotropy = 4;
  return t;
}

/** Crown made of noisy icospheres. near: detail 1 + spherical uv for the leaf texture. */
function blobCrown(gb, seed, opts) {
  const R = rng(seed);
  const { blobs, spread, flat = 1, detail } = opts;
  const base = new THREE.IcosahedronGeometry(1, detail);
  const pos = base.attributes.position;
  const centres = [[0, 0, 0]];
  for (let i = 1; i < blobs; i++) {
    const a = (i / (blobs - 1)) * Math.PI * 2 + R() * 0.6;
    centres.push([Math.cos(a) * spread * (0.7 + R() * 0.3), (R() - 0.35) * 0.45 * flat, Math.sin(a) * spread * (0.7 + R() * 0.3)]);
  }
  for (const [cx, cy, cz] of centres) {
    const r = (cx === 0 && cz === 0 ? 1 : 0.72 + R() * 0.18);
    const off = R() * 10;
    for (let i = 0; i < pos.count; i += 3) {
      const tri = [];
      for (let k = 0; k < 3; k++) {
        let x = pos.getX(i + k), y = pos.getY(i + k), z = pos.getZ(i + k);
        const n = 1 + 0.14 * Math.sin(x * 5.1 + off) * Math.sin(z * 4.7 + off * 1.3) + 0.09 * Math.sin(y * 6.3 + off);
        tri.push([cx + x * r * n, cy + y * r * n * 0.82 * flat, cz + z * r * n, x, y, z]);
      }
      const cols = tri.map(t => {
        // darker underneath and toward the inside (cheap ambient occlusion)
        const ao = 0.62 + 0.38 * (t[4] * 0.5 + 0.5);
        return [ao, ao, ao];
      });
      const uvs = tri.map(t => [Math.atan2(t[5], t[3]) / Math.PI * 1.5 + cx, t[4] * 1.2 + cz]);
      // smooth sphere normals look much softer than facet normals
      const nrm = tri.map(t => { const l = Math.hypot(t[3], t[4], t[5]) || 1; return [t[3] / l, t[4] / l, t[5] / l]; });
      gb._grow(3);
      for (let k = 0; k < 3; k++) gb.vert([tri[k][0], tri[k][1], tri[k][2]], nrm[k], uvs[k], cols[k], 1);
    }
  }
}

function trunk(gb, h, r0, r1, sides, color, lean = [0, 0], y0 = -0.3) {
  for (let k = 0; k < sides; k++) {
    const a0 = k / sides * Math.PI * 2, a1 = (k + 1) / sides * Math.PI * 2;
    const p = (a, y, r) => [Math.cos(a) * r + lean[0] * y, y, Math.sin(a) * r + lean[1] * y];
    gb.quad(p(a0, y0, r0), p(a1, y0, r0), p(a1, h, r1), p(a0, h, r1), [0, 0], [1, 0], [1, 1], [0, 1], color, null, null, 0);
  }
}

/** Archetype geometries: each is unit-ish sized; instances scale them. */
function makeArchetypes(near, Q) {
  const bark = srgb(98, 80, 62), barkLight = srgb(190, 182, 168), palmBark = srgb(150, 136, 112);
  const A = {};
  const det = near ? 1 : 0;
  const sides = near ? 6 : 3;
  // broadleaf: crown centred at y=0 (radius 1); trunk from -h to crown base
  // trunks are long (6 crown radii) and simply continue below ground: every tree height fits
  const broad = (seed, blobs, spread, flat, trunkH, r0) => {
    trunkH = 6;
    const gb = new GeoBuilder(true, true).enableExtra();
    blobCrown(gb, seed, { blobs: near ? blobs : 1, spread, flat, detail: det });
    // trunk + two limbs reaching into the crown
    const tg = new GeoBuilder(true, true).enableExtra();
    trunk(tg, 0.15, r0, r0 * 0.7, sides, bark, [0, 0], -trunkH);
    if (near) {
      trunk(tg, 0.45, r0 * 0.6, r0 * 0.25, 4, bark, [0.55, 0.1], -0.2);
      trunk(tg, 0.4, r0 * 0.55, r0 * 0.22, 4, bark, [-0.4, -0.35], -0.2);
    }
    return merge(gb, tg);
  };
  A.round = broad(11, 4, 0.55, 0.95, 1.6, 0.11);     // comum, oiti, mata
  A.wide = broad(23, 6, 0.75, 0.7, 1.2, 0.14);       // mangueira, flamboyant (umbrella)
  A.bush = (() => { const gb = new GeoBuilder(true, true).enableExtra(); blobCrown(gb, 5, { blobs: near ? 3 : 1, spread: 0.6, flat: 0.8, detail: det }); return merge(gb); })();
  A.tall = (() => { // eucalyptus: pale tall trunk, narrow airy crown
    const gb = new GeoBuilder(true, true).enableExtra();
    blobCrown(gb, 41, { blobs: near ? 4 : 1, spread: 0.35, flat: 1.6, detail: det });
    const tg = new GeoBuilder(true, true).enableExtra();
    trunk(tg, 0.3, 0.05, 0.03, sides, barkLight, [0, 0], -10);
    return merge(gb, tg);
  })();
  // palms: trunk from 0 to 1 (scaled to height), fronds at the top
  const palm = (curve, crownshaft) => {
    const tg = new GeoBuilder(true, true).enableExtra();
    const segs = near ? 6 : 2;
    for (let s = 0; s < segs; s++) {
      const y0 = s / segs, y1 = (s + 1) / segs;
      const lx0 = curve * y0 * y0, lx1 = curve * y1 * y1;
      for (let k = 0; k < sides; k++) {
        const a0 = k / sides * Math.PI * 2, a1 = (k + 1) / sides * Math.PI * 2, r0 = 0.03 * (1.25 - y0 * 0.4), r1 = 0.03 * (1.25 - y1 * 0.4);
        tg.quad([Math.cos(a0) * r0 + lx0, y0, Math.sin(a0) * r0], [Math.cos(a1) * r0 + lx0, y0, Math.sin(a1) * r0], [Math.cos(a1) * r1 + lx1, y1, Math.sin(a1) * r1], [Math.cos(a0) * r1 + lx1, y1, Math.sin(a0) * r1], [0, 0], [1, 0], [1, 1], [0, 1], palmBark, null, null, 0);
      }
    }
    if (crownshaft) trunk(tg, 1.08, 0.028, 0.022, sides, srgb(110, 140, 70), [curve, 0], 0.95);
    const fg = new GeoBuilder(true, true).enableExtra();
    const nF = near ? 10 : 5, top = [curve, 1.0, 0];
    for (let f = 0; f < nF; f++) {
      const a = f / nF * Math.PI * 2 + (f % 2) * 0.2, droop = 0.25 + (f % 3) * 0.12, L = 0.42;
      const dx = Math.cos(a), dz = Math.sin(a), px = -dz * 0.07, pz = dx * 0.07;
      const mid = [top[0] + dx * L * 0.5, top[1] + 0.08 - droop * 0.2, top[2] + dz * L * 0.5];
      const end = [top[0] + dx * L, top[1] - droop * 0.55, top[2] + dz * L];
      const q = (p, w) => [[p[0] - px * w, p[1], p[2] - pz * w], [p[0] + px * w, p[1], p[2] + pz * w]];
      const [a0, a1] = q(top, 0.4), [b0, b1] = q(mid, 1), [c0, c1] = q(end, 0.3);
      const col = [1, 1, 1];
      fg.quad(a0, a1, b1, b0, [0, 0], [1, 0], [1, 0.5], [0, 0.5], col, null, null, 1);
      fg.quad(b0, b1, c1, c0, [0, 0.5], [1, 0.5], [1, 1], [0, 1], col, null, null, 1);
    }
    return { solid: merge(tg), frond: merge(fg) };
  };
  A.coco = palm(0.12, false);
  A.imperial = palm(0, true);
  return A;
}
function merge(...gbs) {
  const out = new GeoBuilder(true, true).enableExtra();
  for (const gb of gbs) {
    for (let i = 0; i < gb.n; i++) {
      out._grow(1);
      out.vert([gb.pos[i * 3], gb.pos[i * 3 + 1], gb.pos[i * 3 + 2]], [gb.nor[i * 3], gb.nor[i * 3 + 1], gb.nor[i * 3 + 2]],
        [gb.uv[i * 2], gb.uv[i * 2 + 1]], [gb.col[i * 3], gb.col[i * 3 + 1], gb.col[i * 3 + 2]], gb.extra[i]);
    }
  }
  const g = out.geometry();
  g.setAttribute('crown', g.getAttribute('extra'));
  g.deleteAttribute('extra');
  return g;
}

/** Material: vertex colour * (instance colour on crowns only) + gentle wind sway. */
function treeMaterial(opts, time) {
  const m = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.88, ...opts });
  m.onBeforeCompile = sh => {
    sh.uniforms.uTime = time;
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nattribute float crown;\nuniform float uTime;')
      .replace('#include <color_vertex>', `
#if defined( USE_COLOR_ALPHA )
  vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
  vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
  vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
  vColor.xyz *= mix(vec3(1.0), instanceColor.xyz, crown);
#endif`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
#ifdef USE_INSTANCING
  {
    vec3 ip = instanceMatrix[3].xyz;
    float ph = ip.x * 0.37 + ip.z * 0.23;
    float sway = sin(uTime * 1.3 + ph) * 0.5 + sin(uTime * 2.9 + ph * 1.7) * 0.25;
    transformed.x += sway * 0.035 * max(0.0, position.y + 0.6) * crown;
    transformed.z += sway * 0.025 * max(0.0, position.y + 0.6) * crown;
  }
#endif`);
  };
  m.customProgramCacheKey = () => 'tree' + (opts.map ? 'm' : '') + (opts.alphaTest ? 'a' : '');
  return m;
}

export function buildTrees(city, T, day, Q, palms = []) {
  const group = new THREE.Group();
  group.name = 'arvores';
  const month = new Date().getMonth(); // 0..11
  const ipeBloom = month >= 6 && month <= 8;          // jul–set: ipê-amarelo
  const flamBloom = month >= 9 || month <= 0;          // out–jan: flamboyant vermelho
  const fountains = (city.extras.fountains || []);
  const list = [];
  for (const t of city.trees) {
    const [x, z, size, seed, sp] = t;
    if (fountains.some(f => Math.hypot(f[0] - x, f[1] - z) < 7.5)) continue;
    list.push({ x, z, size, seed, sp: sp ?? 0 });
  }
  for (const [x, z] of palms) list.push({ x, z, size: 5, seed: Math.round(x * 13 + z * 7), sp: SP.IMPERIAL });

  // per tree: archetype + transform + colour
  const GREENS = [[0.30, 0.46, 0.17], [0.34, 0.5, 0.19], [0.26, 0.4, 0.15], [0.38, 0.52, 0.22], [0.31, 0.49, 0.24], [0.42, 0.52, 0.24], [0.24, 0.38, 0.17]];
  const items = { round: [], wide: [], bush: [], tall: [], coco: [], imperial: [] };
  const col = new THREE.Color(), M = new THREE.Matrix4(), q = new THREE.Quaternion(), v = new THREE.Vector3(), s = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
  list.forEach((t, i) => {
    const h0 = hash(t.seed * 0.71 + i * 0.013), h1 = hash(t.seed * 1.37 + 3.1), h2 = hash(i * 7.77 + t.seed * 0.11);
    const y = T.at(t.x, t.z);
    let arch = 'round', cr = Math.max(1.4, t.size * 0.55) * (0.85 + 0.3 * h0), trunkH = 2 + h1 * 1.5, flatten = 1;
    let g = GREENS[Math.floor(h1 * GREENS.length) % GREENS.length];
    switch (t.sp) {
      case SP.MANGUEIRA: arch = 'wide'; cr *= 1.25; trunkH = 1.6 + h1; g = [0.16, 0.3, 0.1]; break;
      case SP.OITI: cr = Math.min(cr, 2.6) * 1.05; trunkH = 2.0; g = [0.22, 0.42, 0.13]; break;
      case SP.IPE: g = ipeBloom ? [0.95, 0.78, 0.12] : [0.36, 0.5, 0.2]; trunkH += 1; break;
      case SP.FLAMBOYANT: arch = 'wide'; cr *= 1.15; flatten = 0.75; g = flamBloom ? (h2 < 0.75 ? [0.86, 0.2, 0.08] : [0.9, 0.42, 0.1]) : [0.3, 0.48, 0.18]; break;
      case SP.EUCALIPTO: arch = 'tall'; cr = 1.6 + h0; trunkH = 9 + h1 * 7; g = [0.42, 0.5, 0.36]; break;
      case SP.MATA: cr *= 1.1; trunkH = 3 + h1 * 4; break;
      case SP.SECA: cr *= 0.8; g = [0.5, 0.46, 0.3]; break;
      case SP.ARBUSTO: arch = 'bush'; cr = 0.8 + t.size * 0.18; trunkH = 0; g = [0.28, 0.42, 0.16]; break;
      case SP.COQUEIRO: arch = 'coco'; break;
      case SP.IMPERIAL: arch = 'imperial'; break;
    }
    const bright = 0.85 + 0.3 * h2;
    col.setRGB(g[0] * bright, g[1] * bright, g[2] * bright);
    q.setFromAxisAngle(up, h2 * Math.PI * 2);
    if (arch === 'coco' || arch === 'imperial') {
      const H = arch === 'coco' ? 7 + h1 * 6 : 14 + h1 * 6;
      v.set(t.x, y - 0.2, t.z); s.set(H * (arch === 'coco' ? 1 : 0.85), H, H * (arch === 'coco' ? 1 : 0.85));
      col.setRGB(0.55 + 0.15 * h0, 0.68, 0.36);
    } else {
      v.set(t.x, y + trunkH + cr * 0.75 * flatten, t.z);
      s.set(cr, cr * flatten, cr);
      if (arch === 'round' || arch === 'wide' || arch === 'tall') {
        // trunk length is in crown-radius units in the geometry: rescale via y
        s.y = cr * flatten;
      }
    }
    M.compose(v, q, s);
    items[arch].push({ x: t.x, z: t.z, m: M.toArray(), c: [col.r, col.g, col.b], th: trunkH, cr });
  });

  const time = day.uniforms.uTime;
  const leaf = Q === 'low' ? null : leafTexture();
  const frond = frondTexture();
  const nearA = makeArchetypes(true, Q), farA = makeArchetypes(false, Q);
  const crownMatNear = treeMaterial(leaf ? { map: leaf, alphaTest: 0.45, side: THREE.DoubleSide } : {}, time);
  const crownMatFar = treeMaterial({}, time);
  const frondMat = treeMaterial({ map: frond, alphaTest: 0.4, side: THREE.DoubleSide }, time);
  const depthLeaf = leaf ? new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking, map: leaf, alphaTest: 0.45 }) : null;
  const depthFrond = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking, map: frond, alphaTest: 0.4 });

  const meshes = [];
  const addPair = (key, geoNear, geoFar, matNear, matFar, depthNear) => {
    const arr = items[key];
    if (!arr.length) return;
    const mk = (geo, mat, depth, cast) => {
      const im = new THREE.InstancedMesh(geo, mat, arr.length);
      im.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(arr.length * 3), 3);
      im.count = 0;
      im.castShadow = cast; im.receiveShadow = true;
      if (depth) im.customDepthMaterial = depth;
      im.frustumCulled = false;
      group.add(im);
      return im;
    };
    meshes.push({ arr, near: mk(geoNear, matNear, depthNear, Q !== 'low'), far: mk(geoFar, matFar, null, Q === 'high' || Q === 'ultra') });
  };
  addPair('round', nearA.round, farA.round, crownMatNear, crownMatFar, depthLeaf);
  addPair('wide', nearA.wide, farA.wide, crownMatNear, crownMatFar, depthLeaf);
  addPair('bush', nearA.bush, farA.bush, crownMatNear, crownMatFar, depthLeaf);
  addPair('tall', nearA.tall, farA.tall, crownMatNear, crownMatFar, depthLeaf);
  addPair('coco', nearA.coco.solid, farA.coco.solid, crownMatFar, crownMatFar, null);
  addPair('coco', nearA.coco.frond, farA.coco.frond, frondMat, frondMat, depthFrond);
  addPair('imperial', nearA.imperial.solid, farA.imperial.solid, crownMatFar, crownMatFar, null);
  addPair('imperial', nearA.imperial.frond, farA.imperial.frond, frondMat, frondMat, depthFrond);

  const NEAR_R = { low: 120, medium: 180, high: 280, ultra: 380 }[Q];
  const last = new THREE.Vector3(1e9, 0, 0);
  function rebuild(cx, cz) {
    const r2 = NEAR_R * NEAR_R;
    for (const { arr, near, far } of meshes) {
      const nm = near.instanceMatrix.array, fm = far.instanceMatrix.array, nc = near.instanceColor.array, fc = far.instanceColor.array;
      let n = 0, f = 0;
      for (const it of arr) {
        const dx = it.x - cx, dz = it.z - cz;
        if (dx * dx + dz * dz < r2) { nm.set(it.m, n * 16); nc.set(it.c, n * 3); n++; }
        else { fm.set(it.m, f * 16); fc.set(it.c, f * 3); f++; }
      }
      near.count = n; far.count = f;
      near.instanceMatrix.needsUpdate = far.instanceMatrix.needsUpdate = true;
      near.instanceColor.needsUpdate = far.instanceColor.needsUpdate = true;
    }
  }
  group.userData.update = (camera, target) => {
    // centre the detailed ring between the camera and what it looks at
    const cx = (camera.position.x + target.x * 2) / 3, cz = (camera.position.z + target.z * 2) / 3;
    const dist = camera.position.distanceTo(target);
    if (dist > 2600) { // very far: everything coarse
      if (last.x !== -1e9) { rebuild(1e9, 1e9); last.set(-1e9, 0, 0); }
      return;
    }
    if (Math.hypot(cx - last.x, cz - last.z) > NEAR_R * 0.15) { rebuild(cx, cz); last.set(cx, 0, cz); }
  };
  rebuild(0, 0);
  group.userData.count = list.length;
  return group;
}
