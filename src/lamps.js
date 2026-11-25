// Iluminação pública: street lamps along the roads that switch on at dusk and off at dawn.
//
// Cheap night lighting: every lamp is painted once into a city-wide "light map" texture
// (warm sodium / white LED pools). Ground, road, wall and building materials sample it at night
// (patchNightLight). Lamp heads and halos are instanced; each lamp has its own switch-on time.
import * as THREE from 'three';
import { GeoBuilder, hash, rng, SpatialGrid, segDist } from './util.js';

const SODIUM = new THREE.Color(1.0, 0.62, 0.28);
const LED = new THREE.Color(0.95, 0.95, 1.0);

/** Shared uniforms (driven by the day cycle). */
export const nightLight = {
  uLightMap: { value: null },
  uLightBox: { value: new THREE.Vector4() }, // xmin, zmin, 1/w, 1/d
  uLampLevel: { value: 0 },                   // 0 day .. 1 all lamps on
  uWinLevel: { value: 0 },                    // window lights fade-in at dusk
  uWinFrac: { value: 0.5 },                   // share of windows lit (depends on the hour)
};

/** Share of lit windows through the night. */
function windowFraction(h) {
  const k = [[0, 0.3], [1, 0.18], [3, 0.1], [4.5, 0.16], [5.5, 0.3], [7, 0.2], [17, 0.35], [19, 0.6], [21, 0.62], [23, 0.42], [24, 0.3]];
  for (let i = 0; i < k.length - 1; i++) if (h >= k[i][0] && h <= k[i + 1][0]) return k[i][1] + (k[i + 1][1] - k[i][1]) * (h - k[i][0]) / (k[i + 1][0] - k[i][0]);
  return 0.3;
}

/** Inject light-map lighting into a MeshStandardMaterial (idempotent). */
export function patchNightLight(mat, strength = 1, windows = false) {
  if (!mat || mat.userData.nightPatched || !(mat.isMeshStandardMaterial || mat.isMeshLambertMaterial)) return;
  mat.userData.nightPatched = true;
  const prev = mat.onBeforeCompile;
  mat.onBeforeCompile = (sh, r) => {
    if (prev) prev(sh, r);
    sh.uniforms.uLightMap = nightLight.uLightMap;
    sh.uniforms.uLightBox = nightLight.uLightBox;
    sh.uniforms.uLampLevel = nightLight.uLampLevel;
    sh.uniforms.uWinLevel = nightLight.uWinLevel;
    sh.uniforms.uWinFrac = nightLight.uWinFrac;
    if (!sh.vertexShader.includes('varying vec3 vNlW;')) {
      sh.vertexShader = sh.vertexShader
        .replace('#include <common>', '#include <common>\nvarying vec3 vNlW;')
        .replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\n{ vec4 nlw = vec4(transformed, 1.0);\n#ifdef USE_INSTANCING\n nlw = instanceMatrix * nlw;\n#endif\n vNlW = (modelMatrix * nlw).xyz; }');
    }
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vNlW;\nuniform sampler2D uLightMap;\nuniform vec4 uLightBox;\nuniform float uLampLevel, uWinLevel, uWinFrac;')
      .replace('#include <emissivemap_fragment>', windows ? `#include <emissivemap_fragment>
#ifdef USE_MAP
  if (uWinLevel > 0.001) {
    // window glass = unpainted, dark, bluish texels of the facade atlas
    float lum = dot(sampledDiffuseColor.rgb, vec3(0.3, 0.59, 0.11));
    float glass = (1.0 - sampledDiffuseColor.a) * (1.0 - smoothstep(0.22, 0.42, lum)) * step(sampledDiffuseColor.r, sampledDiffuseColor.b + 0.04);
    vec3 cell = floor(vec3(vNlW.x / 1.8, vNlW.y / 2.9, vNlW.z / 1.8));
    float hs = fract(sin(dot(cell, vec3(12.9898, 78.233, 37.719))) * 43758.5453);
    float lit = step(hs, uWinFrac);
    vec3 wc = mix(vec3(1.0, 0.68, 0.36), vec3(0.75, 0.85, 1.0), step(0.8, fract(hs * 7.13)));
    totalEmissiveRadiance += glass * lit * wc * uWinLevel * (1.2 + 0.8 * fract(hs * 3.7));
  }
#endif` : '#include <emissivemap_fragment>')
      .replace('#include <lights_fragment_end>', `#include <lights_fragment_end>
  if (uLampLevel > 0.001) {
    vec2 luv = (vNlW.xz - uLightBox.xy) * uLightBox.zw;
    if (luv.x > 0.0 && luv.x < 1.0 && luv.y > 0.0 && luv.y < 1.0) {
      vec3 ll = texture2D(uLightMap, vec2(luv.x, 1.0 - luv.y)).rgb;
      ll = ll * ll * ${(2.6 * strength).toFixed(2)};
      reflectedLight.directDiffuse += diffuseColor.rgb * ll * uLampLevel;
    }
  }`);
  };
  // keep programs of differently-patched materials apart (default key = onBeforeCompile source)
  const custom = mat.customProgramCacheKey !== THREE.Material.prototype.customProgramCacheKey;
  const baseKey = custom ? mat.customProgramCacheKey() : (prev ? prev.toString() : '');
  mat.customProgramCacheKey = () => baseKey + '|night' + strength + (windows ? 'w' : '');
  mat.needsUpdate = true;
}
export function patchTreeNight(root, strength = 1) {
  root.traverse(o => {
    if (!o.isMesh) return;
    const ms = Array.isArray(o.material) ? o.material : [o.material];
    for (const m of ms) patchNightLight(m, strength);
  });
}

/** Choose lamp positions along the street network. */
export function placeLamps(city, T, opts = {}) {
  const skip = opts.skipIds || new Set();
  const elevated = opts.elevated || [];
  const bGrid = new SpatialGrid(30);
  for (const b of city.buildings) {
    let x0 = 1e9, z0 = 1e9, x1 = -1e9, z1 = -1e9;
    for (const [x, z] of b.p) { x0 = Math.min(x0, x); z0 = Math.min(z0, z); x1 = Math.max(x1, x); z1 = Math.max(z1, z); }
    bGrid.add(b, x0, z0, x1, z1);
  }
  const inBuilding = (x, z, pad = 0.6) => {
    for (const b of bGrid.query(x, z, 3)) {
      let inside = false;
      const p = b.p;
      for (let i = 0, j = p.length - 1; i < p.length; j = i++) {
        if ((p[i][1] > z) !== (p[j][1] > z) && x < (p[j][0] - p[i][0]) * (z - p[i][1]) / (p[j][1] - p[i][1]) + p[i][0]) inside = !inside;
      }
      if (inside) return true;
      for (let i = 0; i < p.length; i++) {
        const a = p[i], c = p[(i + 1) % p.length];
        if (segDist(x, z, a[0], a[1], c[0], c[1]).d < pad) return true;
      }
    }
    return false;
  };
  // road centerlines (to keep poles off other carriageways)
  const rGrid = new SpatialGrid(30);
  const drivable = city.roads.filter(r => !['footway', 'path', 'steps', 'cycleway'].includes(r.hw));
  for (const r of drivable) for (let i = 0; i < r.p.length - 1; i++) {
    const [ax, az] = r.p[i], [bx, bz] = r.p[i + 1];
    rGrid.add({ ax, az, bx, bz, hw: (r.w || 6) / 2 }, Math.min(ax, bx), Math.min(az, bz), Math.max(ax, bx), Math.max(az, bz));
  }
  const onRoad = (x, z) => {
    for (const s of rGrid.query(x, z, 8)) if (segDist(x, z, s.ax, s.az, s.bx, s.bz).d < s.hw + 0.25) return true;
    return false;
  };
  const near = new SpatialGrid(20);
  const tooClose = (x, z, d) => { for (const q of near.query(x, z, d)) if (Math.hypot(q.x - x, q.z - z) < d) return true; return false; };
  const creek = city.creek ? city.creek.pts : [];
  const inCreek = (x, z) => creek.some(p => p[4] !== 2 && Math.abs(p[0] - x) < 6 && Math.abs(p[1] - z) < 6 && Math.hypot(p[0] - x, p[1] - z) < p[3] / 2 + 1.5);
  const lamps = [];
  const R = rng(4242);
  for (const r of drivable) {
    if (skip.has(r.id) || r.b) continue;
    if (r.s === 'dirt' && r.hw !== 'tertiary') continue;
    if (r.hw === 'track' || r.hw === 'service' && (r.w || 4) < 5) continue;
    const main = ['trunk', 'trunk_link', 'primary', 'secondary', 'tertiary'].includes(r.hw);
    const spacing = r.hw === 'trunk' ? 32 : main ? 30 : 34;
    const both = r.hw === 'trunk' || (main && (r.w || 6) >= 9);
    const led = main || r.s === 'asphalt' && hash(r.id % 9973) < 0.35;
    let carry = spacing * (0.3 + 0.5 * hash(r.id % 7919)), sideFlip = hash(r.id % 4993) < 0.5 ? 1 : -1;
    for (let i = 0; i < r.p.length - 1; i++) {
      const [ax, az] = r.p[i], [bx, bz] = r.p[i + 1];
      const L = Math.hypot(bx - ax, bz - az);
      if (L < 0.5) continue;
      const ux = (bx - ax) / L, uz = (bz - az) / L, nx = -uz, nz = ux;
      let s = carry;
      while (s < L) {
        const x0 = ax + ux * s, z0 = az + uz * s;
        const sides = both ? [1, -1] : [sideFlip];
        for (const sd of sides) {
          const off = (r.w || 6) / 2 + 0.7;
          const x = x0 + nx * off * sd, z = z0 + nz * off * sd;
          if (!T.inside(x, z, 4) || onRoad(x, z) || inBuilding(x, z) || inCreek(x, z) || tooClose(x, z, 14)) continue;
          const lamp = { x, z, y: T.at(x, z), ax: -nx * sd, az: -nz * sd, led, h: main ? 9 : 7.5, th: -3.2 + R() * 3.4, i: lamps.length };
          lamps.push(lamp);
          near.add(lamp, x, z);
        }
        if (!both) sideFlip = -sideFlip;
        s += spacing;
      }
      carry = s - L;
    }
  }
  // lamps on bridges / viaduct decks: heights from the caller's road profile
  for (const { road, heightAt, spacing = 28 } of elevated) {
    let s = 6, side = 1, acc = 0;
    for (let i = 0; i < road.p.length - 1; i++) {
      const [ax, az] = road.p[i], [bx, bz] = road.p[i + 1];
      const L = Math.hypot(bx - ax, bz - az);
      if (L < 0.3) continue;
      const ux = (bx - ax) / L, uz = (bz - az) / L, nx = -uz, nz = ux;
      while (s - acc < L) {
        const t = s - acc, off = (road.w || 8) / 2 + 0.25;
        const x0 = ax + ux * t, z0 = az + uz * t;
        const x = x0 + nx * off * side, z = z0 + nz * off * side;
        const y = heightAt(road, x0, z0);
        if (y !== null && !tooClose(x, z, 14)) {
          const lamp = { x, z, y: y + 0.6, ax: -nx * side, az: -nz * side, led: true, h: 9, th: -3.2 + R() * 3.4, i: lamps.length };
          lamps.push(lamp); near.add(lamp, x, z);
        }
        side = -side; s += spacing;
      }
      acc += L;
    }
  }
  return lamps;
}

/** Light map canvas: additive warm/white pools, drawn once. */
function buildLightMap(lamps, T, size) {
  const W = size, H = Math.round(size * (T.ZMAX - T.ZMIN) / (T.XMAX - T.XMIN));
  const c = document.createElement('canvas');
  c.width = W; c.height = H;
  const g = c.getContext('2d');
  g.fillStyle = '#000'; g.fillRect(0, 0, W, H);
  g.globalCompositeOperation = 'lighter';
  const sx = W / (T.XMAX - T.XMIN), sz = H / (T.ZMAX - T.ZMIN);
  for (const l of lamps) {
    // pool centred a bit over the street (the arm leans over the carriageway)
    const cx = (l.x + l.ax * 2.2 - T.XMIN) * sx, cz = (l.z + l.az * 2.2 - T.ZMIN) * sz;
    const rad = (l.led ? 17 : 14) * sx;
    const col = l.led ? LED : SODIUM;
    const gr = g.createRadialGradient(cx, cz, 0, cx, cz, rad);
    const k = l.led ? 0.62 : 0.68;
    const cs = (a) => `rgba(${Math.round(col.r * 255)},${Math.round(col.g * 255)},${Math.round(col.b * 255)},${a})`;
    gr.addColorStop(0, cs(k)); gr.addColorStop(0.35, cs(k * 0.55)); gr.addColorStop(0.7, cs(k * 0.16)); gr.addColorStop(1, cs(0));
    g.fillStyle = gr;
    g.beginPath(); g.arc(cx, cz, rad, 0, Math.PI * 2); g.fill();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.NoColorSpace;
  t.minFilter = THREE.LinearFilter; t.magFilter = THREE.LinearFilter; t.generateMipmaps = false;
  return t;
}

function glowTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d');
  const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.08, 'rgba(255,255,255,0.7)');
  gr.addColorStop(0.22, 'rgba(255,255,255,0.16)'); gr.addColorStop(0.5, 'rgba(255,255,255,0.04)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
  const t = new THREE.CanvasTexture(c);
  return t;
}

export function buildLamps(lamps, T, day, Q, extra = []) {
  const group = new THREE.Group();
  group.name = 'postes';
  const n = lamps.length;
  // light map
  nightLight.uLightMap.value = buildLightMap(lamps.concat(extra), T, Q === 'low' ? 1024 : 2048);
  nightLight.uLightBox.value.set(T.XMIN, T.ZMIN, 1 / (T.XMAX - T.XMIN), 1 / (T.ZMAX - T.ZMIN));

  // pole (+ curved arm) geometry in local space: pole on +y, arm toward +x
  const pole = new GeoBuilder(false, false);
  const seg = 6;
  const ring = (y, r) => Array.from({ length: seg }, (_, k) => [Math.cos(k / seg * Math.PI * 2) * r, y, Math.sin(k / seg * Math.PI * 2) * r]);
  const tube = (r0, r1) => {
    for (let k = 0; k < seg; k++) {
      const a0 = r0[k], a1 = r0[(k + 1) % seg], b0 = r1[k], b1 = r1[(k + 1) % seg];
      pole.quad(a0, a1, b1, b0);
    }
  };
  const base = ring(0, 0.16), mid = ring(0.6, 0.12), top = ring(1, 0.07);
  tube(base, mid); tube(mid, top);
  const poleGeo = pole.geometry();
  // arm: unit-height pole is scaled to lamp height, arm added separately to keep proportions
  const arm = new GeoBuilder(false, false);
  const pts = [];
  for (let k = 0; k <= 6; k++) { const t = k / 6; pts.push([1.6 * t, 0.45 * Math.sin(t * Math.PI / 2), 0]); }
  for (let k = 0; k < pts.length - 1; k++) {
    const a = pts[k], b = pts[k + 1], r = 0.05;
    arm.quad([a[0], a[1] - r, -r], [b[0], b[1] - r, -r], [b[0], b[1] + r, -r], [a[0], a[1] + r, -r]);
    arm.quad([b[0], b[1] - r, r], [a[0], a[1] - r, r], [a[0], a[1] + r, r], [b[0], b[1] + r, r]);
    arm.quad([a[0], a[1] + r, -r], [b[0], b[1] + r, -r], [b[0], b[1] + r, r], [a[0], a[1] + r, r]);
    arm.quad([b[0], b[1] - r, -r], [a[0], a[1] - r, -r], [a[0], a[1] - r, r], [b[0], b[1] - r, r]);
  }
  const armGeo = arm.geometry();
  const metal = new THREE.MeshStandardMaterial({ color: 0x8d9297, roughness: 0.55, metalness: 0.4 });
  const poles = new THREE.InstancedMesh(poleGeo, metal, n);
  const arms = new THREE.InstancedMesh(armGeo, metal, n);
  // luminaire head (cobra head): flattened box, emissive face underneath
  const headGeo = new THREE.BoxGeometry(0.75, 0.16, 0.34);
  headGeo.translate(0.25, 0, 0);
  const lampOn = new Float32Array(n), lampCol = new Float32Array(n * 3);
  const headMat = new THREE.MeshStandardMaterial({ color: 0x6b7075, roughness: 0.5, metalness: 0.3 });
  headMat.onBeforeCompile = sh => {
    sh.uniforms.uElev = elevU;
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nattribute float lampTh;\nattribute vec3 lampCol;\nvarying vec3 vLamp;\nvarying float vDown;\nuniform float uElev;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvDown = step(position.y, -0.05);\nfloat on = 1.0 - smoothstep(lampTh - 0.25, lampTh + 0.25, uElev);\nvLamp = lampCol * on;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vLamp;\nvarying float vDown;')
      .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\ntotalEmissiveRadiance += vLamp * (0.6 + 5.0 * vDown);');
  };
  headMat.customProgramCacheKey = () => 'lamphead';
  headMat.userData.nightPatched = true;
  const elevU = { value: 30 };
  const heads = new THREE.InstancedMesh(headGeo, headMat, n);
  // halos: camera-facing quads, additive
  const glowGeo = new THREE.PlaneGeometry(1, 1);
  const glowMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false,
    uniforms: { map: { value: glowTexture() }, uElev: elevU, uNight: day.uniforms.uNight },
    vertexShader: /* glsl */`
      attribute float lampTh; attribute vec3 lampCol; attribute float lampSize;
      uniform float uElev; varying vec2 vUv; varying vec3 vCol;
      void main() {
        vUv = uv;
        float on = 1.0 - smoothstep(lampTh - 0.25, lampTh + 0.25, uElev);
        vCol = lampCol * on;
        vec4 c = modelViewMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
        float d = -c.z;
        float s = max(lampSize, d * 0.006) * on;
        c.xy += position.xy * s;
        gl_Position = projectionMatrix * c;
      }`,
    fragmentShader: /* glsl */`
      uniform sampler2D map; uniform float uNight; varying vec2 vUv; varying vec3 vCol;
      void main() { float a = texture2D(map, vUv).r; gl_FragColor = vec4(vCol * a * (0.25 + 0.55 * uNight), a); }`,
  });
  const glows = new THREE.InstancedMesh(glowGeo, glowMat, n);
  glows.frustumCulled = false;
  const th = new Float32Array(n), size = new Float32Array(n);
  const M = new THREE.Matrix4(), q = new THREE.Quaternion(), v = new THREE.Vector3(), s = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
  lamps.forEach((l, i) => {
    const yaw = Math.atan2(-l.az, l.ax); // arm points along (ax, az)
    q.setFromAxisAngle(up, yaw);
    v.set(l.x, l.y, l.z); s.set(1, l.h, 1);
    M.compose(v, q, s); poles.setMatrixAt(i, M);
    s.set(1, 1, 1); v.set(l.x, l.y + l.h, l.z);
    M.compose(v, q, s); arms.setMatrixAt(i, M);
    const hx = l.x + l.ax * 1.6, hz = l.z + l.az * 1.6;
    v.set(hx, l.y + l.h + 0.42, hz);
    M.compose(v, q, s); heads.setMatrixAt(i, M);
    v.set(hx + l.ax * 0.25, l.y + l.h + 0.2, hz + l.az * 0.25);
    M.compose(v, q, s); glows.setMatrixAt(i, M);
    const c = l.led ? LED : SODIUM;
    lampCol[i * 3] = c.r; lampCol[i * 3 + 1] = c.g; lampCol[i * 3 + 2] = c.b;
    th[i] = l.th; size[i] = l.led ? 1.6 : 1.8;
  });
  heads.geometry.setAttribute('lampTh', new THREE.InstancedBufferAttribute(th, 1));
  heads.geometry.setAttribute('lampCol', new THREE.InstancedBufferAttribute(lampCol, 3));
  glowGeo.setAttribute('lampTh', new THREE.InstancedBufferAttribute(th, 1));
  glowGeo.setAttribute('lampCol', new THREE.InstancedBufferAttribute(lampCol, 3));
  glowGeo.setAttribute('lampSize', new THREE.InstancedBufferAttribute(size, 1));
  poles.castShadow = arms.castShadow = Q === 'high' || Q === 'ultra';
  poles.receiveShadow = true;
  for (const m of [poles, arms, heads]) { m.computeBoundingSphere(); group.add(m); }
  glows.renderOrder = 5;
  group.add(glows);
  void lampOn;
  // keep in sync with the sun
  const sync = d => {
    elevU.value = d.elev;
    nightLight.uLampLevel.value = 1 - THREE.MathUtils.smoothstep(d.elev, -2.8, 0.2);
    nightLight.uWinLevel.value = 1 - THREE.MathUtils.smoothstep(d.elev, -5, 3);
    nightLight.uWinFrac.value = windowFraction(d.hours);
    glows.visible = d.elev < 1;
  };
  day.onChange(sync);
  sync(day);
  group.userData.count = n;
  return group;
}
