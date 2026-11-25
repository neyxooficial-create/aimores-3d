// Water: Rio Doce inside the map, the reservoir lake / river around it, shared water shader
// (sky reflection + sun glint, depth colour, shoreline foam, animated ripples, day/night aware).
import * as THREE from 'three';
import { valueNoise, fbm, normalFromHeight } from './util.js';

let _normalTex = null;
export function waterNormalTexture() {
  if (_normalTex) return _normalTex;
  const N = 256, n1 = valueNoise(32, 71), n2 = valueNoise(8, 73);
  const h = new Float32Array(N * N);
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
    const u = x / N, v = y / N;
    h[y * N + x] = fbm(n1, u * 32, v * 32, 4) * 0.7 + fbm(n2, u * 8, v * 8, 3) * 0.3;
  }
  _normalTex = normalFromHeight(h, N, N, 6);
  return _normalTex;
}

const vert = /* glsl */`
#include <common>
#include <fog_pars_vertex>
attribute float shore;
varying vec3 vW;
varying vec2 vUv;
varying float vShore;
void main() {
  vUv = uv;
  vShore = shore;
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  vec4 mvPosition = viewMatrix * w;
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}`;

const frag = /* glsl */`
#include <common>
#include <fog_pars_fragment>
uniform sampler2D nTex;
uniform sampler2D depthTex;   // city terrain: r = (h - level + 6) / 12
uniform vec4 depthBox;        // xmin, zmin, 1/width, 1/depth
uniform sampler2D maskTex;    // lake mask over [-maskR, maskR]^2
uniform float maskR;
uniform float level, time, uNight, flowSpeed;
uniform vec3 uSunDir, uSunCol, uZenith, uHorizon, deepCol, shallowCol;
varying vec3 vW;
varying vec2 vUv;
varying float vShore;

vec3 skyAt(vec3 r) {
  float h = max(r.y, 0.0);
  vec3 c = mix(uHorizon, uZenith, pow(h, 0.45));
  return c;
}
void main() {
  vec3 V = normalize(cameraPosition - vW);
  float dist = length(cameraPosition - vW);
  vec2 p;
  vec3 n;
#ifdef FLOW
  // creek: ripples stream along the channel (uv.y = metres downstream)
  vec2 q = vec2(vUv.x * 0.9, vUv.y * 0.35 - time * flowSpeed);
  vec3 a = texture2D(nTex, q * 0.5).xyz * 2.0 - 1.0;
  vec3 b = texture2D(nTex, q * 1.3 + vec2(0.37, -time * flowSpeed * 0.6)).xyz * 2.0 - 1.0;
  n = normalize(vec3((a.xy + b.xy) * 0.55, 1.0));
  n = normalize(vec3(n.x, n.z, n.y));
#else
  p = vW.xz;
  vec3 a = texture2D(nTex, p / 23.0 + vec2(time * 0.011, time * 0.006)).xyz * 2.0 - 1.0;
  vec3 b = texture2D(nTex, p / 7.0 + vec2(-time * 0.018, time * 0.013)).xyz * 2.0 - 1.0;
  vec3 c = texture2D(nTex, p / 61.0 + vec2(time * 0.004, -time * 0.003)).xyz * 2.0 - 1.0;
  float fade = 1.0 - smoothstep(150.0, 2500.0, dist);
  n = normalize(vec3((a.xy * 0.6 + b.xy * 0.35 * fade + c.xy * 0.5) * 0.38, 1.0));
  n = normalize(vec3(n.x, n.z, n.y));
#endif
  // water depth -> colour / opacity / foam
  float depth = 3.0;
#ifdef DEPTH
  vec2 duv = (vW.xz - depthBox.xy) * depthBox.zw;
  float th = level - 6.0 + texture2D(depthTex, vec2(duv.x, 1.0 - duv.y)).r * 12.0;
  depth = level - th;
#endif
#ifdef MASK
  float m = texture2D(maskTex, vec2((vW.x + maskR) / (2.0 * maskR), 1.0 - (vW.z + maskR) / (2.0 * maskR))).r;
  if (m < 0.04) discard;
  depth = m * 5.0;
#endif
#ifdef FLOW
  depth = 0.25 + 0.6 * (1.0 - abs(vUv.x * 2.0 - 1.0));
#endif
  float df = smoothstep(0.0, 3.5, depth);
  float day = 1.0 - uNight;
  vec3 body = mix(shallowCol, deepCol, df) * (0.12 + 0.88 * day) + vec3(0.0, 0.004, 0.008) * uNight;
  // sun-lit scattering
  body *= 0.55 + 0.45 * max(dot(vec3(0.0, 1.0, 0.0), uSunDir), 0.0) * day;
  vec3 R = reflect(-V, n);
  float fres = 0.02 + 0.7 * pow(1.0 - max(dot(n, V), 0.0), 5.0);
  vec3 refl = mix(skyAt(R), (uZenith + uHorizon) * 0.5, 0.3);
  float sp = pow(max(dot(R, uSunDir), 0.0), 420.0) * 7.0 + pow(max(dot(R, uSunDir), 0.0), 40.0) * 0.18;
  refl += uSunCol * sp * smoothstep(-0.02, 0.06, uSunDir.y);
  vec3 col = mix(body, refl, fres);
  // foam / bright edge along the shore
  float foamN = texture2D(nTex, vW.xz / 3.0 + time * 0.02).r;
  float foam = (1.0 - smoothstep(0.05, 0.45, depth)) * smoothstep(0.35, 0.7, foamN + 0.25);
#ifdef FLOW
  foam = max(foam, vShore * smoothstep(0.45, 0.75, foamN));
#endif
  col = mix(col, vec3(0.86, 0.88, 0.86) * (0.15 + 0.85 * day), foam * 0.65);
  float alpha = mix(0.55, 0.94, df);
  alpha = max(alpha, foam * 0.8);
#ifdef MASK
  alpha *= smoothstep(0.04, 0.4, m);
#endif
  gl_FragColor = vec4(col, alpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
}`;

/**
 * @param day   DayCycle (shared uniforms)
 * @param opts  { level, depthTex, depthBox, maskTex, maskR, flow, deep, shallow }
 */
export function makeWaterMaterial(day, opts = {}) {
  const defines = {};
  if (opts.depthTex) defines.DEPTH = 1;
  if (opts.maskTex) defines.MASK = 1;
  if (opts.flow) defines.FLOW = 1;
  const m = new THREE.ShaderMaterial({
    vertexShader: vert, fragmentShader: frag, defines, transparent: true, depthWrite: false, fog: true,
    uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.fog, {
      nTex: { value: waterNormalTexture() },
      depthTex: { value: opts.depthTex || null }, depthBox: { value: opts.depthBox || new THREE.Vector4() },
      maskTex: { value: opts.maskTex || null }, maskR: { value: opts.maskR || 3600 },
      level: { value: opts.level || 0 }, flowSpeed: { value: opts.flowSpeed || 0.5 },
      deepCol: { value: new THREE.Color(opts.deep ?? 0x1d3a34) }, shallowCol: { value: new THREE.Color(opts.shallow ?? 0x4f6a52) },
    }]),
  });
  // shared (live) uniforms
  m.uniforms.time = day.uniforms.uTime;
  m.uniforms.uNight = day.uniforms.uNight;
  m.uniforms.uSunDir = day.uniforms.uSunDir;
  m.uniforms.uSunCol = day.uniforms.uSunCol;
  m.uniforms.uZenith = day.uniforms.uZenith;
  m.uniforms.uHorizon = day.uniforms.uHorizon;
  return m;
}

/** RGBA8 texture of terrain height relative to a water level (for depth effects). */
export function makeDepthTexture(T, level) {
  const { GW, GH } = T;
  const d = new Uint8Array(GW * GH * 4);
  for (let i = 0; i < GW * GH; i++) {
    const v = Math.max(0, Math.min(1, (T.a[i] - level + 6) / 12));
    d[i * 4] = Math.round(v * 255); d[i * 4 + 3] = 255;
  }
  // flip rows so v=0 is the bottom (z max)
  const f = new Uint8Array(d.length);
  for (let r = 0; r < GH; r++) f.set(d.subarray(r * GW * 4, (r + 1) * GW * 4), (GH - 1 - r) * GW * 4);
  const t = new THREE.DataTexture(f, GW, GH, THREE.RGBAFormat);
  t.magFilter = THREE.LinearFilter; t.minFilter = THREE.LinearFilter;
  t.needsUpdate = true;
  return t;
}

/** Rio Doce inside the map (pre-triangulated polygon at the water level). */
export function buildRiver(meshes, T, day) {
  const tri = meshes.m_water;
  if (!tri) return null;
  const n = tri.length / 2;
  const pos = new Float32Array(n * 3), uv = new Float32Array(n * 2), shore = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    pos[i * 3] = tri[i * 2]; pos[i * 3 + 1] = T.WL; pos[i * 3 + 2] = tri[i * 2 + 1];
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  g.setAttribute('shore', new THREE.BufferAttribute(shore, 1));
  g.computeBoundingSphere();
  const depthTex = makeDepthTexture(T, T.WL);
  const mat = makeWaterMaterial(day, {
    level: T.WL, depthTex,
    depthBox: new THREE.Vector4(T.XMIN, T.ZMIN, 1 / (T.XMAX - T.XMIN), 1 / (T.ZMAX - T.ZMIN)),
    deep: 0x2a3f30, shallow: 0x5d6a4a,
  });
  const mesh = new THREE.Mesh(g, mat);
  mesh.name = 'rio';
  mesh.renderOrder = 2;
  return mesh;
}

/** Lake / river bodies in the surroundings: flat planes clipped by the satellite water mask. */
export function buildLakes(water, maskBytes, T, day) {
  if (!water || !maskBytes) return null;
  const N = water.maskSize;
  const f = new Uint8Array(N * N * 4);
  for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) {
    const v = maskBytes[r * N + c], k = ((N - 1 - r) * N + c) * 4;
    f[k] = v; f[k + 3] = 255;
  }
  const tex = new THREE.DataTexture(f, N, N, THREE.RGBAFormat);
  tex.magFilter = THREE.LinearFilter; tex.minFilter = THREE.LinearFilter; tex.needsUpdate = true;
  const g = new THREE.Group();
  g.name = 'lago';
  for (const b of water.bodies) {
    const [x0, z0, x1, z1] = b.box;
    // keep the plane outside the detailed map (the river inside uses its own mesh)
    const geo = new THREE.PlaneGeometry(x1 - x0, z1 - z0, 1, 1).rotateX(-Math.PI / 2);
    geo.setAttribute('shore', new THREE.BufferAttribute(new Float32Array(4), 1));
    const mat = makeWaterMaterial(day, { maskTex: tex, maskR: water.R, deep: 0x1f3a35, shallow: 0x46604c });
    const m = new THREE.Mesh(geo, mat);
    m.position.set((x0 + x1) / 2, b.level, (z0 + z1) / 2);
    m.renderOrder = 2;
    g.add(m);
  }
  return g;
}
