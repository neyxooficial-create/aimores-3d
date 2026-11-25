// Terrain (adaptive RTIN mesh draped with the satellite image), the hills around the city,
// and the Rio Doce water surface.
import * as THREE from 'three';
import { RtinTile } from './rtin.js';
import { rng, valueNoise, fbm, normalFromHeight, smoothstep } from './util.js';

const TILE = 128;
const ERR = { low: 0.25, medium: 0.15, high: 0.08, ultra: 0.05 };

/** Tileable detail texture: R = grass, G = soil grain, B = macro variation (all ~0.5 mean). */
export function makeDetailTexture(size = 256) {
  const n1 = valueNoise(64, 7), n2 = valueNoise(16, 9), n3 = valueNoise(128, 11), n4 = valueNoise(8, 13);
  const d = new Uint8Array(size * size * 4);
  const R = rng(5);
  const blades = new Float32Array(size * size);
  // grass blades: short random strokes
  for (let k = 0; k < size * size / 5; k++) {
    let x = R() * size, y = R() * size;
    const ang = -Math.PI / 2 + (R() - 0.5) * 1.2, len = 2 + R() * 5, v = (R() - 0.5) * 0.9;
    for (let s = 0; s < len; s++) {
      const xi = ((Math.round(x) % size) + size) % size, yi = ((Math.round(y) % size) + size) % size;
      blades[yi * size + xi] += v;
      x += Math.cos(ang); y += Math.sin(ang);
    }
  }
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const u = x / size, v = y / size, i = y * size + x;
    const grass = 0.5 + 0.22 * (fbm(n1, u * 64, v * 64, 3) - 0.5) * 2 + 0.16 * Math.tanh(blades[i]) + 0.1 * (n3(u * 128, v * 128) - 0.5);
    const soil = 0.5 + 0.25 * (fbm(n3, u * 128, v * 128, 2) - 0.5) * 2 + 0.12 * (fbm(n2, u * 16, v * 16, 3) - 0.5) * 2;
    const macro = 0.5 + 0.5 * (fbm(n4, u * 8, v * 8, 3) - 0.5) * 2;
    d[i * 4] = Math.max(0, Math.min(255, grass * 255));
    d[i * 4 + 1] = Math.max(0, Math.min(255, soil * 255));
    d[i * 4 + 2] = Math.max(0, Math.min(255, macro * 255));
    d[i * 4 + 3] = 255;
  }
  const t = new THREE.DataTexture(d, size, size, THREE.RGBAFormat);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.minFilter = THREE.LinearMipmapLinearFilter; t.magFilter = THREE.LinearFilter;
  t.generateMipmaps = true; t.anisotropy = 8; t.needsUpdate = true;
  return t;
}

export function buildTerrain(T, groundTex, Q, renderer, detailMask = null) {
  const { GW, GH, G, XMIN, XMAX, ZMIN, ZMAX } = T;
  const rtin = new RtinTile(TILE + 1);
  const maxErr = ERR[Q] ?? 0.2;
  const pos = [], uv = [], nor = [], idx = [];
  const heights = new Float32Array((TILE + 1) * (TILE + 1));
  const force = detailMask ? new Uint8Array((TILE + 1) * (TILE + 1)) : null;
  const n = new THREE.Vector3();
  const pushVert = (x, y, z) => {
    pos.push(x, y, z);
    uv.push((x - XMIN) / (XMAX - XMIN), 1 - (z - ZMIN) / (ZMAX - ZMIN));
    T.normal(x, z, n); nor.push(n.x, n.y, n.z);
    return pos.length / 3 - 1;
  };
  for (let ty = 0; ty * TILE < GH - 1; ty++) {
    for (let tx = 0; tx * TILE < GW - 1; tx++) {
      for (let y = 0; y <= TILE; y++) for (let x = 0; x <= TILE; x++) {
        heights[y * (TILE + 1) + x] = T.raw(ty * TILE + y, tx * TILE + x);
        if (force) {
          const r = ty * TILE + y, c = tx * TILE + x;
          force[y * (TILE + 1) + x] = r < GH && c < GW ? detailMask[r * GW + c] : 0;
        }
      }
      const { vertices, triangles } = rtin.mesh(rtin.errors(heights, force), maxErr);
      const base = pos.length / 3;
      const nv = vertices.length / 2;
      const local = new Int32Array(nv);
      for (let i = 0; i < nv; i++) {
        const vx = vertices[i * 2], vy = vertices[i * 2 + 1];
        const c = Math.min(GW - 1, tx * TILE + vx), r = Math.min(GH - 1, ty * TILE + vy);
        local[i] = pushVert(XMIN + c * G, T.raw(r, c), ZMIN + r * G);
      }
      for (let i = 0; i < triangles.length; i += 3) {
        const a = local[triangles[i]], b = local[triangles[i + 1]], c = local[triangles[i + 2]];
        // skip slivers squashed onto the map border
        const ax = pos[a * 3], az = pos[a * 3 + 2], bx = pos[b * 3], bz = pos[b * 3 + 2], cx = pos[c * 3], cz = pos[c * 3 + 2];
        const cr = (bx - ax) * (cz - az) - (bz - az) * (cx - ax);
        if (Math.abs(cr) < 1e-3) continue;
        // front face must look up (+y): in x/z that means clockwise when z points "down"
        if (cr < 0) idx.push(a, b, c); else idx.push(a, c, b);
      }
      // skirts hide hairline cracks between tiles with different simplification
      const edges = [[], [], [], []];
      for (let i = 0; i < nv; i++) {
        const vx = vertices[i * 2], vy = vertices[i * 2 + 1];
        if (vy === 0) edges[0].push([vx, local[i]]);
        if (vy === TILE) edges[1].push([vx, local[i]]);
        if (vx === 0) edges[2].push([vy, local[i]]);
        if (vx === TILE) edges[3].push([vy, local[i]]);
      }
      for (const e of edges) {
        e.sort((p, q) => p[0] - q[0]);
        for (let k = 0; k < e.length - 1; k++) {
          const i0 = e[k][1], i1 = e[k + 1][1];
          const d0 = pushVert(pos[i0 * 3], pos[i0 * 3 + 1] - 2.5, pos[i0 * 3 + 2]);
          const d1 = pushVert(pos[i1 * 3], pos[i1 * 3 + 1] - 2.5, pos[i1 * 3 + 2]);
          idx.push(i0, d0, i1, i1, d0, d1, i0, i1, d0, i1, d1, d0); // both windings
        }
      }
      void base;
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  geo.setIndex(pos.length / 3 > 65535 ? new THREE.Uint32BufferAttribute(idx, 1) : new THREE.Uint16BufferAttribute(idx, 1));
  geo.computeBoundingSphere();

  groundTex.colorSpace = THREE.SRGBColorSpace;
  groundTex.anisotropy = renderer.capabilities.getMaxAnisotropy();
  groundTex.wrapS = groundTex.wrapT = THREE.ClampToEdgeWrapping;
  groundTex.needsUpdate = true;
  const detail = makeDetailTexture();
  const mat = new THREE.MeshStandardMaterial({ map: groundTex, roughness: 0.96, metalness: 0 });
  if (Q !== 'low') {
    const nrm = normalFromHeightTex(detail);
    mat.normalMap = nrm; mat.normalScale = new THREE.Vector2(0.6, 0.6);
  }
  mat.onBeforeCompile = sh => {
    sh.uniforms.gDetail = { value: detail };
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWPos;')
      .replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWPos;\nuniform sampler2D gDetail;')
      .replace('#include <normal_fragment_maps>', `
#ifdef USE_NORMALMAP_TANGENTSPACE
  {
    vec3 mapN = texture2D( normalMap, vWPos.xz / 3.0 ).xyz * 2.0 - 1.0;
    mapN.xy *= normalScale;
    float nf = 1.0 - smoothstep( 60.0, 260.0, length( vWPos - cameraPosition ) );
    mapN.xy *= nf;
    // world-aligned tangent frame for a mostly-flat ground mesh
    vec3 T = normalize( cross( vec3(0.0,0.0,1.0), normal ) );
    vec3 B = normalize( cross( normal, T ) );
    normal = normalize( mat3( T, B, normal ) * mapN );
  }
#endif`)
      .replace('#include <map_fragment>', `#include <map_fragment>
  {
    vec3 base = diffuseColor.rgb;
    float veg = smoothstep(0.004, 0.035, base.g - max(base.r, base.b) * 0.93);
    float dist = length(vWPos - cameraPosition);
    vec4 d1 = texture2D(gDetail, vWPos.xz / 3.5);
    vec4 d2 = texture2D(gDetail, vWPos.xz / 13.0 + 0.37);
    vec4 d3 = texture2D(gDetail, vWPos.xz / 90.0 + 0.11);
    float gr = (d1.r * 0.65 + d2.r * 0.35) * 2.0;
    float dr = (d1.g * 0.65 + d2.g * 0.35) * 2.0;
    float det = mix(dr, gr, veg);
    float fade = 1.0 - smoothstep(120.0, 1100.0, dist);
    diffuseColor.rgb = base * mix(1.0, det, 0.22 + 0.55 * fade);
    float near = 1.0 - smoothstep(10.0, 100.0, dist);
    vec4 d0 = texture2D(gDetail, vWPos.xz / 1.1 + 0.71);
    float fine = mix(d0.g * 2.0, d0.r * 2.0, veg);
    diffuseColor.rgb *= mix(1.0, fine, 0.5 * near);
    float lb = dot(base, vec3(0.3, 0.59, 0.11));
    vec3 grassTint = vec3(0.34, 0.44, 0.19) * (0.8 + 0.4 * d2.r);
    diffuseColor.rgb = mix(diffuseColor.rgb, grassTint * (lb / 0.40) * fine, veg * near * 0.35);
    diffuseColor.rgb *= mix(1.0, d3.b * 2.0, 0.18);
    float hp = d2.g * 2.0 - 1.0;
    diffuseColor.rgb *= mix(vec3(1.0 + 0.06 * hp, 1.0 - 0.02 * hp, 1.0 - 0.06 * hp), vec3(1.0 + 0.10 * hp, 1.0 + 0.04 * hp, 1.0 - 0.12 * hp), veg);
  }`);
  };
  mat.customProgramCacheKey = () => 'terrain-v5';
  const mesh = new THREE.Mesh(geo, mat);
  mesh.name = 'terreno';
  mesh.receiveShadow = true;
  mesh.userData.detail = detail;
  return mesh;
}

function normalFromHeightTex(detail) {
  const { data, width, height } = detail.image;
  const hf = new Float32Array(width * height);
  for (let i = 0; i < width * height; i++) hf[i] = (data[i * 4] * 0.5 + data[i * 4 + 1] * 0.5) / 255;
  return normalFromHeight(hf, width, height, 3.5);
}

/** Surrounding hills (backdrop) — textured near ring + vertex coloured far mountains. */
export function buildBackdrop(T, back, backTex, Q) {
  const { BG, BR } = T;
  const cell = 2 * BR / (BG - 1);
  const bAt = (r, c) => back[Math.max(0, Math.min(BG - 1, r)) * BG + Math.max(0, Math.min(BG - 1, c))];
  const bSample = (x, z) => {
    const fx = (x + BR) / cell, fz = (z + BR) / cell;
    const c = Math.floor(fx), r = Math.floor(fz), u = fx - c, v = fz - r;
    return (bAt(r, c) * (1 - u) + bAt(r, c + 1) * u) * (1 - v) + (bAt(r + 1, c) * (1 - u) + bAt(r + 1, c + 1) * u) * v;
  };
  // blend city terrain edge -> coarse DEM over 700 m
  const H = (x, z) => {
    const cx = Math.max(T.XMIN, Math.min(T.XMAX, x)), cz = Math.max(T.ZMIN, Math.min(T.ZMAX, z));
    const d = Math.hypot(x - cx, z - cz);
    if (d < 0.5) return T.at(cx, cz) - 6;
    const s = smoothstep(0, 700, d);
    return (T.at(cx, cz) - 0.6) * (1 - s) + bSample(x, z) * s;
  };
  const g = new THREE.Group();
  g.name = 'serras';
  const R = 3600, N = Q === 'low' ? 73 : Q === 'medium' ? 97 : 145;
  const pos = new Float32Array(N * N * 3), uv = new Float32Array(N * N * 2);
  for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) {
    const x = -R + i * 2 * R / (N - 1), z = -R + j * 2 * R / (N - 1), k = j * N + i;
    pos[k * 3] = x; pos[k * 3 + 1] = H(x, z); pos[k * 3 + 2] = z;
    uv[k * 2] = (x + R) / (2 * R); uv[k * 2 + 1] = 1 - (z + R) / (2 * R);
  }
  const idx = [];
  for (let j = 0; j < N - 1; j++) for (let i = 0; i < N - 1; i++) {
    const a = j * N + i;
    // skip quads fully inside the detailed city terrain (they are hidden anyway)
    const x0 = -R + i * 2 * R / (N - 1), z0 = -R + j * 2 * R / (N - 1), s = 2 * R / (N - 1);
    if (x0 > T.XMIN + 1 && x0 + s < T.XMAX - 1 && z0 > T.ZMIN + 1 && z0 + s < T.ZMAX - 1) continue;
    idx.push(a, a + N, a + 1, a + 1, a + N, a + N + 1);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  backTex.colorSpace = THREE.SRGBColorSpace;
  backTex.anisotropy = 8;
  backTex.needsUpdate = true;
  const near = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ map: backTex, roughness: 1 }));
  near.receiveShadow = true;
  g.add(near);

  // far mountains (outside the textured ring)
  const step = Q === 'low' ? 4 : 2;
  const fp = [], fc = [], fi = [];
  const col = new THREE.Color(), rock = new THREE.Color(0.36, 0.33, 0.28);
  const M = Math.floor((BG - 1) / step) + 1;
  for (let j = 0; j < M; j++) for (let i = 0; i < M; i++) {
    const r = j * step, c = i * step;
    const x = -BR + c * cell, z = -BR + r * cell;
    let h = bAt(r, c);
    if (Math.abs(x) < R - 60 && Math.abs(z) < R - 60) h -= 80;
    fp.push(x, h, z);
  }
  for (let j = 0; j < M - 1; j++) for (let i = 0; i < M - 1; i++) {
    const a = j * M + i;
    fi.push(a, a + M, a + 1, a + 1, a + M, a + M + 1);
  }
  const fg = new THREE.BufferGeometry();
  fg.setAttribute('position', new THREE.Float32BufferAttribute(fp, 3));
  fg.setIndex(fi);
  fg.computeVertexNormals();
  const nrm = fg.attributes.normal;
  const R2 = rng(3);
  for (let k = 0; k < nrm.count; k++) {
    const slope = 1 - nrm.getY(k), t = Math.min(1, Math.max(0, (slope - 0.25) * 3)), j = R2() * 0.04;
    col.setRGB(0.2 + j, 0.27 + j, 0.13).lerp(rock, t * 0.8);
    fc.push(col.r, col.g, col.b);
  }
  fg.setAttribute('color', new THREE.Float32BufferAttribute(fc, 3));
  g.add(new THREE.Mesh(fg, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1 })));
  g.userData.heightAt = H;
  return g;
}
