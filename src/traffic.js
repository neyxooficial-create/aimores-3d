// Trânsito: procedural vehicles (hatch, sedan, SUV, pickup, moto, bus, truck), right-hand traffic
// on the street graph with simple car-following, parked cars, head/tail lights at night.
import * as THREE from 'three';
import { GeoBuilder, rng, hash, srgb } from './util.js';

// vertex attribute "part": 0 = fixed colour, 1 = body paint (instance colour), 2 = headlight, 3 = taillight
const GLASS = srgb(28, 34, 40), TYRE = srgb(24, 24, 26), RIM = srgb(150, 152, 155), TRIM = srgb(40, 40, 42), CHROME = srgb(190, 190, 195);
const HEAD = srgb(245, 245, 230), TAIL = srgb(170, 20, 20), PLATE = srgb(230, 230, 225), SEAT = srgb(30, 30, 32);

class VB {
  constructor() { this.g = new GeoBuilder(true, false).enableExtra(); }
  quad(a, b, c, d, col, part = 0) { this.g.quad(a, b, c, d, null, null, null, null, col, null, null, part); }
  /** axis-aligned box: x (forward) y (up) z (left) */
  box(x0, x1, y0, y1, z0, z1, col, part = 0, faces = 'all') {
    const P = (x, y, z) => [x, y, z];
    const f = faces === 'all' ? 'tbfkrl' : faces;
    if (f.includes('t')) this.quad(P(x0, y1, z1), P(x1, y1, z1), P(x1, y1, z0), P(x0, y1, z0), col, part);
    if (f.includes('b')) this.quad(P(x0, y0, z0), P(x1, y0, z0), P(x1, y0, z1), P(x0, y0, z1), col, part);
    if (f.includes('f')) this.quad(P(x1, y0, z0), P(x1, y1, z0), P(x1, y1, z1), P(x1, y0, z1), col, part);
    if (f.includes('k')) this.quad(P(x0, y0, z1), P(x0, y1, z1), P(x0, y1, z0), P(x0, y0, z0), col, part);
    if (f.includes('r')) this.quad(P(x0, y0, z0), P(x0, y1, z0), P(x1, y1, z0), P(x1, y0, z0), col, part);
    if (f.includes('l')) this.quad(P(x1, y0, z1), P(x1, y1, z1), P(x0, y1, z1), P(x0, y0, z1), col, part);
  }
  /** cabin / greenhouse: bottom rectangle (x0..x1, ±zb) at y0, top rectangle (x2..x3, ±zt) at y1 */
  cabin(x0, x1, x2, x3, y0, y1, zb, zt, roofCol, glass = GLASS) {
    const B = [[x0, y0, -zb], [x1, y0, -zb], [x1, y0, zb], [x0, y0, zb]];
    const Tp = [[x2, y1, -zt], [x3, y1, -zt], [x3, y1, zt], [x2, y1, zt]];
    this.quad(Tp[3], Tp[2], Tp[1], Tp[0], roofCol, 1);                     // roof
    this.quad(B[1], Tp[1], Tp[2], B[2], glass);                             // windscreen
    this.quad(B[3], Tp[3], Tp[0], B[0], glass);                             // rear window
    this.quad(B[0], Tp[0], Tp[1], B[1], glass);                             // right side windows
    this.quad(B[2], Tp[2], Tp[3], B[3], glass);                             // left side windows
    // B-pillars (paint strips) so the glass reads as separate windows
    const xm = (x0 + x1) / 2 + 0.05, xt = (x2 + x3) / 2 + 0.05, w = 0.07;
    for (const s of [-1, 1]) {
      const zbs = zb * s * 1.01, zts = zt * s * 1.01;
      if (s < 0) this.quad([xm - w, y0, zbs], [xt - w, y1, zts], [xt + w, y1, zts], [xm + w, y0, zbs], roofCol, 1);
      else this.quad([xm + w, y0, zbs], [xt + w, y1, zts], [xt - w, y1, zts], [xm - w, y0, zbs], roofCol, 1);
    }
  }
  wheel(x, z, r, w, sides = 8) {
    const y = r;
    for (let k = 0; k < sides; k++) {
      const a0 = k / sides * Math.PI * 2, a1 = (k + 1) / sides * Math.PI * 2;
      const p = (a, zz) => [x + Math.cos(a) * r, y + Math.sin(a) * r, zz];
      const zo = z + Math.sign(z) * w / 2, zi = z - Math.sign(z) * w / 2;
      this.quad(p(a0, zi), p(a1, zi), p(a1, zo), p(a0, zo), TYRE);
      // hub cap on the outer face
      const c = [x, y, zo], q0 = [x + Math.cos(a0) * r * 0.6, y + Math.sin(a0) * r * 0.6, zo], q1 = [x + Math.cos(a1) * r * 0.6, y + Math.sin(a1) * r * 0.6, zo];
      if (z > 0) this.g.tri(c, q0, q1, null, null, null, RIM, null, null, 0); else this.g.tri(c, q1, q0, null, null, null, RIM, null, null, 0);
    }
  }
  lights(xf, xr, y0, y1, zIn, zOut) {
    for (const s of [-1, 1]) {
      const a = Math.min(zIn * s, zOut * s), b = Math.max(zIn * s, zOut * s);
      this.box(xf - 0.02, xf + 0.01, y0, y1, a, b, HEAD, 2, 'f');
      this.box(xr - 0.01, xr + 0.02, y0, y1, a, b, TAIL, 3, 'k');
    }
    this.box(xr - 0.012, xr + 0.015, y0 - 0.16, y0 - 0.02, -0.25, 0.25, PLATE, 0, 'k');
  }
  geometry() {
    const g = this.g.geometry();
    g.setAttribute('part', g.getAttribute('extra'));
    g.deleteAttribute('extra');
    return g;
  }
}

function carGeo(kind) {
  const v = new VB();
  if (kind === 'hatch' || kind === 'sedan' || kind === 'suv') {
    const L = kind === 'hatch' ? 1.95 : 2.2, W = kind === 'suv' ? 0.92 : 0.86, yb = kind === 'suv' ? 0.36 : 0.27, yt = kind === 'suv' ? 1.02 : 0.86;
    v.box(-L, L, yb, yt, -W, W, [1, 1, 1], 1, 'tfkrl');
    v.box(-L - 0.04, -L + 0.25, yb - 0.05, yb + 0.22, -W - 0.01, W + 0.01, TRIM, 0, 'tkrl'); // rear bumper
    v.box(L - 0.25, L + 0.04, yb - 0.05, yb + 0.22, -W - 0.01, W + 0.01, TRIM, 0, 'tfrl');   // front bumper
    const cabTop = kind === 'suv' ? 1.72 : 1.42;
    if (kind === 'hatch') v.cabin(-L + 0.12, 0.85, -L + 0.3, 0.1, yt, cabTop, W - 0.04, W - 0.16, [1, 1, 1]);
    else if (kind === 'sedan') v.cabin(-1.25, 0.95, -0.95, 0.2, yt, cabTop, W - 0.04, W - 0.16, [1, 1, 1]);
    else v.cabin(-L + 0.1, 0.85, -L + 0.2, 0.3, yt, cabTop, W - 0.02, W - 0.1, [1, 1, 1]);
    v.lights(L + 0.01, -L - 0.01, yt - 0.24, yt - 0.1, W - 0.08, W - 0.36);
    const wr = kind === 'suv' ? 0.36 : 0.31, wx = L - 0.65;
    for (const x of [wx, -wx]) for (const z of [W - 0.08, -W + 0.08]) v.wheel(x, z, wr, 0.22);
  } else if (kind === 'pickup') {
    const L = 2.25, W = 0.88;
    v.box(0.1, L, 0.32, 0.95, -W, W, [1, 1, 1], 1, 'tfrl');
    v.cabin(-0.35, 1.0, -0.25, 0.35, 0.95, 1.62, W - 0.04, W - 0.14, [1, 1, 1]);
    v.box(-0.35, 0.1, 0.32, 0.95, -W, W, [1, 1, 1], 1, 'rl');
    // open bed
    v.box(-L, -0.35, 0.32, 0.55, -W, W, [1, 1, 1], 1, 'tkrl');
    v.box(-L, -0.35, 0.55, 1.0, W - 0.06, W, [1, 1, 1], 1, 'tkrl');
    v.box(-L, -0.35, 0.55, 1.0, -W, -W + 0.06, [1, 1, 1], 1, 'tkrl');
    v.box(-L, -L + 0.06, 0.55, 1.0, -W, W, [1, 1, 1], 1, 'tkfrl');
    v.lights(L + 0.01, -L - 0.01, 0.7, 0.84, W - 0.08, W - 0.36);
    for (const x of [1.4, -1.45]) for (const z of [W - 0.08, -W + 0.08]) v.wheel(x, z, 0.36, 0.24);
  } else if (kind === 'moto') {
    v.wheel(0.68, 0.06, 0.3, 0.1, 8); v.wheel(-0.68, 0.06, 0.3, 0.1, 8);
    v.box(-0.55, 0.6, 0.42, 0.72, -0.13, 0.13, [1, 1, 1], 1);           // tank / body
    v.box(-0.75, -0.1, 0.72, 0.8, -0.14, 0.14, SEAT);                   // seat
    v.box(0.55, 0.62, 0.7, 1.02, -0.36, 0.36, TRIM);                    // handlebar
    v.box(0.62, 0.7, 0.8, 0.92, -0.08, 0.08, HEAD, 2, 'f');             // headlight
    v.box(-0.8, -0.74, 0.74, 0.8, -0.06, 0.06, TAIL, 3, 'k');
    // rider: legs, torso, helmet
    v.box(-0.35, 0.15, 0.62, 0.95, -0.2, 0.2, srgb(40, 50, 80));
    v.box(-0.32, 0.05, 0.95, 1.45, -0.2, 0.2, srgb(90, 92, 98));
    v.box(-0.24, 0.06, 1.48, 1.74, -0.13, 0.13, [1, 1, 1], 1);           // helmet takes the paint colour
  } else if (kind === 'bus') {
    const L = 6.0, W = 1.25;
    v.box(-L, L, 0.45, 3.1, -W, W, [1, 1, 1], 1, 'tfkrl');
    // window band
    for (const s of [-1, 1]) v.box(-L + 0.6, L - 0.3, 1.55, 2.6, s * W - 0.02, s * W + 0.02, GLASS, 0, s > 0 ? 'l' : 'r');
    v.box(L, L + 0.02, 1.3, 2.75, -W + 0.1, W - 0.1, GLASS, 0, 'f');
    v.box(L - 0.1, L + 0.03, 2.8, 3.0, -W + 0.2, W - 0.2, srgb(240, 160, 30), 2, 'f'); // destination sign
    v.lights(L + 0.01, -L - 0.01, 0.75, 0.95, W - 0.1, W - 0.4);
    for (const x of [L - 1.4, -L + 2.0]) for (const z of [W - 0.1, -W + 0.1]) v.wheel(x, z, 0.5, 0.3, 10);
  } else if (kind === 'truck') {
    const W = 1.2;
    v.box(2.2, 3.9, 0.55, 2.6, -W, W, [1, 1, 1], 1, 'tfkrl');                // cab
    v.box(3.88, 3.92, 1.5, 2.4, -W + 0.1, W - 0.1, GLASS, 0, 'f');
    v.box(-3.9, 2.05, 0.9, 3.4, -W - 0.05, W + 0.05, srgb(214, 210, 200), 0);  // cargo box
    v.box(-3.9, 3.9, 0.55, 0.9, -W + 0.2, W - 0.2, TRIM);
    v.lights(3.91, -3.91, 0.8, 1.0, W - 0.1, W - 0.4);
    for (const x of [3.0, -1.8, -3.0]) for (const z of [W - 0.15, -W + 0.15]) v.wheel(x, z, 0.52, 0.34, 10);
  }
  return v.geometry();
}

const DIMS = { hatch: 3.9, sedan: 4.4, suv: 4.4, pickup: 4.5, moto: 2.0, bus: 12, truck: 7.8 };
const PAINT = [[[240, 240, 238], 34], [[178, 180, 184], 22], [[24, 24, 26], 14], [[96, 98, 102], 12], [[150, 24, 22], 7], [[22, 52, 110], 4], [[200, 190, 170], 3], [[40, 80, 50], 2], [[230, 170, 30], 2]];
function paint(r) {
  let t = r * 100;
  for (const [c, w] of PAINT) { if (t < w) return c; t -= w; }
  return PAINT[0][0];
}

function vehicleMaterial(uniforms) {
  const m = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.42, metalness: 0.35, side: THREE.DoubleSide });
  m.onBeforeCompile = sh => {
    sh.uniforms.uLights = uniforms.uLights;
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nattribute float part;\nvarying float vPart;')
      .replace('#include <color_vertex>', `
  vColor = vec3(1.0);
#ifdef USE_COLOR
  vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
  if (part > 0.5 && part < 1.5) vColor *= instanceColor;
#endif
  vPart = part;`);
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying float vPart;\nuniform float uLights;')
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
  if (vPart > 1.5) {
    float head = step(vPart, 2.5);
    totalEmissiveRadiance += mix(vec3(1.6, 0.05, 0.03) * 0.8, vec3(2.4, 2.3, 2.0), head) * uLights;
  }`);
  };
  m.customProgramCacheKey = () => 'vehicle';
  return m;
}

export class Traffic {
  constructor(city, T, roadH, day, Q) {
    this.T = T; this.roadH = roadH; this.day = day;
    this.group = new THREE.Group();
    this.group.name = 'transito';
    this.mesh = this.group; // legacy name used by the UI toggle
    const R = this.R = rng(9001);
    // ------------------------------------------------------------ graph
    const ok = r => !['footway', 'path', 'track', 'steps', 'cycleway', 'pedestrian'].includes(r.hw) && r.p.length > 1 && !(r.s === 'dirt' && r.hw === 'service');
    this.roads = city.roads.filter(ok).map(r => {
      const len = [];
      let tot = 0;
      for (let i = 0; i < r.p.length - 1; i++) { const l = Math.hypot(r.p[i + 1][0] - r.p[i][0], r.p[i + 1][1] - r.p[i][1]); len.push(l); tot += l; }
      const speed = r.hw === 'trunk' ? 15 : r.hw === 'tertiary' || r.hw === 'trunk_link' ? 11 : r.s === 'dirt' ? 6 : r.s === 'paver' ? 7.5 : 9;
      return { r, p: r.p, len, tot, speed, oneway: !!r.o, w: r.w || 6, cars: [] };
    }).filter(x => x.tot > 3);
    const key = p => Math.round(p[0] * 2) + ',' + Math.round(p[1] * 2);
    this.nodes = new Map();
    this.roads.forEach((rd, i) => {
      for (const [end, k] of [[0, key(rd.p[0])], [1, key(rd.p[rd.p.length - 1])]]) {
        let a = this.nodes.get(k); if (!a) this.nodes.set(k, a = []);
        a.push({ i, end });
      }
    });
    this.key = key;
    // ------------------------------------------------------------ vehicles
    this.uniforms = { uLights: { value: 0 } };
    const mat = vehicleMaterial(this.uniforms);
    this.kinds = ['hatch', 'sedan', 'suv', 'pickup', 'moto', 'bus', 'truck'];
    const nMove = { low: 45, medium: 100, high: 170, ultra: 240 }[Q];
    const nPark = { low: 60, medium: 160, high: 320, ultra: 480 }[Q];
    const pick = () => { const t = R(); return t < 0.3 ? 'hatch' : t < 0.48 ? 'sedan' : t < 0.6 ? 'suv' : t < 0.72 ? 'pickup' : 'moto'; };
    // moving cars
    this.cars = [];
    const trunkRoads = this.roads.filter(x => x.r.hw === 'trunk');
    const mainRoads = this.roads.filter(x => ['trunk', 'tertiary'].includes(x.r.hw));
    const weights = this.roads.map(x => x.tot * (x.r.hw === 'trunk' ? 3 : x.r.hw === 'tertiary' ? 2 : x.r.s === 'dirt' ? 0.3 : 1));
    const wsum = weights.reduce((a, b) => a + b, 0);
    const randRoad = () => { let t = R() * wsum; for (let i = 0; i < weights.length; i++) { t -= weights[i]; if (t <= 0) return i; } return 0; };
    for (let k = 0; k < nMove; k++) {
      let kind = pick(), ri = randRoad();
      if (k < 3 && mainRoads.length) { kind = 'bus'; ri = this.roads.indexOf(mainRoads[Math.floor(R() * mainRoads.length)]); }
      else if (k < 8 && trunkRoads.length) { kind = 'truck'; ri = this.roads.indexOf(trunkRoads[Math.floor(R() * trunkRoads.length)]); }
      const rd = this.roads[ri];
      const dir = rd.oneway ? 1 : (R() < 0.5 ? 1 : -1);
      const c = { kind, ri, dir, s: R() * rd.tot, v: rd.speed * (0.7 + R() * 0.3), vmax: 0.8 + R() * 0.35, yaw: 0, pos: new THREE.Vector3(), len: DIMS[kind] };
      const col = kind === 'bus' ? ([[230, 230, 228], [32, 92, 160], [220, 120, 30]][k % 3]) : kind === 'truck' ? [[240, 240, 238], [200, 40, 30], [30, 70, 150]][k % 3] : paint(R());
      c.color = new THREE.Color().setRGB(...srgb(...col));
      rd.cars.push(c);
      this.cars.push(c);
    }
    // parked cars: along the kerb of residential / paved streets
    this.parked = [];
    const parkable = this.roads.filter(x => ['residential', 'tertiary', 'unclassified'].includes(x.r.hw) && x.r.s !== 'dirt' && x.w >= 6 && !x.r.b);
    const noPark = globalThis.__noPark;
    let guard = 0;
    while (this.parked.length < nPark && guard++ < nPark * 20 && parkable.length) {
      const rd = parkable[Math.floor(R() * parkable.length)];
      const s = 8 + R() * Math.max(0, rd.tot - 16);
      const side = R() < 0.5 ? 1 : -1;
      const at = this.at(rd, s, side * (rd.w / 2 - 1.05));
      if (noPark && noPark(at.x, at.z)) continue;
      if (this.parked.some(p => Math.hypot(p.x - at.x, p.z - at.z) < 6)) continue;
      const kind = R() < 0.12 ? 'moto' : pick() === 'moto' ? 'hatch' : pick();
      this.parked.push({ kind, x: at.x, z: at.z, yaw: Math.atan2(-at.dz * side, at.dx * side) + (R() - 0.5) * 0.04, color: new THREE.Color().setRGB(...srgb(...paint(R()))) });
    }
    // instanced meshes per kind
    this.inst = {};
    this.instP = {};
    const counts = {}, countsP = {};
    for (const c of this.cars) counts[c.kind] = (counts[c.kind] || 0) + 1;
    for (const c of this.parked) countsP[c.kind] = (countsP[c.kind] || 0) + 1;
    const M = new THREE.Matrix4(), q = new THREE.Quaternion(), v = new THREE.Vector3(), one = new THREE.Vector3(1, 1, 1), up = new THREE.Vector3(0, 1, 0);
    for (const kind of this.kinds) {
      const geo = (counts[kind] || countsP[kind]) ? carGeo(kind) : null;
      if (!geo) continue;
      if (counts[kind]) {
        const im = new THREE.InstancedMesh(geo, mat, counts[kind]);
        im.castShadow = Q !== 'low'; im.receiveShadow = true;
        im.frustumCulled = false;
        im.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
        this.inst[kind] = { im, n: 0 };
        this.group.add(im);
      }
      if (countsP[kind]) {
        const im = new THREE.InstancedMesh(geo, mat, countsP[kind]);
        im.castShadow = Q === 'high' || Q === 'ultra'; im.receiveShadow = true;
        let n = 0;
        for (const p of this.parked) {
          if (p.kind !== kind) continue;
          q.setFromAxisAngle(up, p.yaw); v.set(p.x, T.at(p.x, p.z) + 0.1, p.z);
          M.compose(v, q, one); im.setMatrixAt(n, M); im.setColorAt(n, p.color); n++;
        }
        im.computeBoundingSphere();
        this.group.add(im);
      }
    }
    for (const c of this.cars) {
      const I = this.inst[c.kind];
      c.slot = I.n++;
      I.im.setColorAt(c.slot, c.color);
    }
    // head-light beams on the road (additive decals in front of each moving car)
    const beamGeo = new THREE.PlaneGeometry(9, 4.2).rotateX(-Math.PI / 2).translate(6.8, 0.25, 0);
    const beamTex = (() => {
      const c = document.createElement('canvas'); c.width = 128; c.height = 64;
      const g = c.getContext('2d');
      const gr = g.createRadialGradient(10, 32, 2, 30, 32, 110);
      gr.addColorStop(0, 'rgba(255,240,200,0.9)'); gr.addColorStop(0.5, 'rgba(255,230,180,0.25)'); gr.addColorStop(1, 'rgba(255,230,180,0)');
      g.fillStyle = gr; g.fillRect(0, 0, 128, 64);
      return new THREE.CanvasTexture(c);
    })();
    this.beams = new THREE.InstancedMesh(beamGeo, new THREE.MeshBasicMaterial({ map: beamTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0.5, polygonOffset: true, polygonOffsetFactor: -8, polygonOffsetUnits: -16 }), this.cars.length);
    this.beams.frustumCulled = false;
    this.beams.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.beams.renderOrder = 4;
    this.group.add(this.beams);
    this.M = M; this.q = q; this.v = v; this.one = one; this.up = up;
    const sync = d => { this.uniforms.uLights.value = THREE.MathUtils.smoothstep(d.night, 0.25, 0.6); this.beams.visible = d.night > 0.4; };
    day.onChange(sync); sync(day);
    this.tick(0);
  }

  /** Point at distance s along road rd with lateral offset (positive = right of travel when dir=+1). */
  at(rd, s, off) {
    s = Math.max(0, Math.min(rd.tot - 1e-3, s));
    let i = 0;
    while (i < rd.len.length - 1 && s > rd.len[i]) { s -= rd.len[i]; i++; }
    const [ax, az] = rd.p[i], [bx, bz] = rd.p[i + 1];
    const L = rd.len[i] || 1, dx = (bx - ax) / L, dz = (bz - az) / L, t = Math.min(1, s / L);
    // right of travel direction (x forward, z south): right = (-dz, dx)
    return { x: ax + (bx - ax) * t - dz * off, z: az + (bz - az) * t + dx * off, dx, dz };
  }

  _next(c) {
    const rd = this.roads[c.ri];
    const endP = c.dir > 0 ? rd.p[rd.p.length - 1] : rd.p[0];
    const opts = (this.nodes.get(this.key(endP)) || []).filter(o => o.i !== c.ri && !(this.roads[o.i].oneway && o.end === 1));
    if (!opts.length) { if (!rd.oneway) { c.dir = -c.dir; c.s = rd.tot - c.s; } else { c.s = 0; } return; }
    const o = opts[Math.floor(this.R() * opts.length)];
    const nr = this.roads[o.i];
    const k = rd.cars.indexOf(c); if (k >= 0) rd.cars.splice(k, 1);
    nr.cars.push(c);
    c.ri = o.i; c.dir = o.end === 0 ? 1 : -1;
    c.s = 0;
    if (c.kind === 'truck' && nr.r.hw !== 'trunk' && nr.r.hw !== 'trunk_link') { c.dir = -c.dir; }
  }

  tick(dt) {
    if (!this.group.visible) return;
    const { M, q, v, one, up } = this;
    let b = 0;
    for (const c of this.cars) {
      const rd = this.roads[c.ri];
      // car following on the same road and direction
      let gap = 1e9;
      for (const o of rd.cars) {
        if (o === c || o.dir !== c.dir) continue;
        const d = o.s - c.s;
        if (d > 0 && d < gap) gap = d - (o.len + c.len) / 2;
      }
      const remaining = rd.tot - c.s;
      let target = rd.speed * c.vmax;
      if (remaining < 14) target = Math.min(target, 4 + remaining * 0.45); // slow down before junctions
      if (gap < 18) target = Math.min(target, Math.max(0, (gap - 2.5) * 0.9));
      c.v += Math.max(-6 * dt, Math.min(2.2 * dt, target - c.v));
      c.v = Math.max(0, c.v);
      c.s += c.v * dt;
      if (c.s >= rd.tot) { c.s -= rd.tot; this._next(c); }
      const r2 = this.roads[c.ri];
      const lane = c.kind === 'moto' ? Math.min(2.2, r2.w / 4 + 0.4) : r2.oneway ? 0 : Math.min(1.9, r2.w / 4);
      const sAlong = c.dir > 0 ? c.s : r2.tot - c.s;
      const p = this.at(r2, sAlong, lane * c.dir);
      const yawT = Math.atan2(-p.dz * c.dir, p.dx * c.dir);
      let dy = yawT - c.yaw; dy = Math.atan2(Math.sin(dy), Math.cos(dy));
      c.yaw += dt > 0 ? dy * Math.min(1, dt * 8) : dy;
      const y = this.roadH(r2.r, p.x, p.z);
      c.pos.set(p.x, y, p.z);
      q.setFromAxisAngle(up, c.yaw);
      M.compose(c.pos, q, one);
      const I = this.inst[c.kind];
      I.im.setMatrixAt(c.slot, M);
      if (this.beams.visible) this.beams.setMatrixAt(b++, M);
    }
    for (const k in this.inst) { const I = this.inst[k]; I.im.count = I.n; I.im.instanceMatrix.needsUpdate = true; }
    this.beams.count = b;
    this.beams.instanceMatrix.needsUpdate = true;
  }
}
