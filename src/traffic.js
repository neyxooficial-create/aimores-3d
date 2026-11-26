// Trânsito: procedural vehicles (hatch, sedan, SUV, pickup, moto, bus, truck), right-hand traffic
// on the street graph with simple car-following, parked cars, head/tail lights at night.
import * as THREE from 'three';
import { GeoBuilder, rng, hash, srgb, contactShadows } from './util.js';

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

export function carGeo(kind) {
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
    for (const s of [-1, 1]) v.box(-L + 0.1, L - 0.1, 0.95, 1.25, s * W - 0.025, s * W + 0.025, srgb(250, 200, 40), 0, s > 0 ? 'l' : 'r'); // livery stripe
    v.box(-2.0, 1.0, 3.1, 3.35, -0.8, 0.8, srgb(210, 210, 210));                                                                       // roof A/C
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
    // Every road is split into edges at each junction vertex (also where a street meets another one
    // in the middle of its polyline), so cars can turn everywhere. Dead ends are pruned from the
    // moving-car network: cars never have to turn around on the spot (that made them "blink").
    const ok = r => !['footway', 'path', 'track', 'steps', 'cycleway', 'pedestrian'].includes(r.hw) && r.p.length > 1 && !(r.s === 'dirt' && r.hw === 'service')
      && r.p.every(([x, z]) => T.inside(x, z, 3));
    const key = p => Math.round(p[0] * 2) + ',' + Math.round(p[1] * 2);
    const src = city.roads.filter(ok);
    const use = new Map();
    for (const r of src) { const seen = new Set(); for (const p of r.p) { const k = key(p); if (!seen.has(k)) { seen.add(k); use.set(k, (use.get(k) || 0) + 1); } } }
    const mkEdge = (r, p) => {
      const len = [];
      let tot = 0;
      for (let i = 0; i < p.length - 1; i++) { const l = Math.hypot(p[i + 1][0] - p[i][0], p[i + 1][1] - p[i][1]); len.push(l); tot += l; }
      const speed = r.hw === 'trunk' ? 14 : r.hw === 'tertiary' || r.hw === 'trunk_link' ? 10 : r.ring ? 6 : r.s === 'paver' ? 7.5 : 8.5;
      const cum = [0]; for (const l of len) cum.push(cum[cum.length - 1] + l);
      return { r, p, len, cum, tot, speed, oneway: !!r.o, w: r.w || 6, cars: [] };
    };
    this.roads = [];
    for (const r of src) {
      let st = 0;
      for (let i = 1; i < r.p.length; i++) {
        if (i === r.p.length - 1 || use.get(key(r.p[i])) > 1) {
          const e = mkEdge(r, r.p.slice(st, i + 1));
          if (e.tot > 0.5) this.roads.push(e);
          st = i;
        }
      }
    }
    this.key = key;
    const buildNodes = live => {
      const nodes = new Map();
      this.roads.forEach((rd, i) => {
        if (live && !live[i]) return;
        for (const [end, k] of [[0, key(rd.p[0])], [1, key(rd.p[rd.p.length - 1])]]) {
          let a = nodes.get(k); if (!a) nodes.set(k, a = []);
          a.push({ i, end });
        }
      });
      return nodes;
    };
    // prune dead ends (iteratively) for the moving traffic
    const live = this.roads.map(() => true);
    for (let it = 0; it < 50; it++) {
      const nodes = buildNodes(live);
      let changed = false;
      this.roads.forEach((rd, i) => {
        if (!live[i]) return;
        const out = endK => (nodes.get(endK) || []).filter(o => o.i !== i && !(this.roads[o.i].oneway && o.end === 1)).length;
        const a = key(rd.p[0]), b = key(rd.p[rd.p.length - 1]);
        const dead = rd.oneway ? out(b) === 0 : (out(a) === 0 || out(b) === 0);
        if (dead) { live[i] = false; changed = true; }
      });
      if (!changed) break;
    }
    this.live = live;
    this.nodes = buildNodes(live);
    // ------------------------------------------------------------ vehicles
    this.uniforms = { uLights: { value: 0 } };
    const mat = vehicleMaterial(this.uniforms);
    this.kinds = ['hatch', 'sedan', 'suv', 'pickup', 'moto', 'bus', 'truck'];
    const nMove = { low: 20, medium: 40, high: 60, ultra: 80 }[Q];
    const nPark = { low: 40, medium: 90, high: 150, ultra: 200 }[Q];
    const pick = () => { const t = R(); return t < 0.3 ? 'hatch' : t < 0.48 ? 'sedan' : t < 0.6 ? 'suv' : t < 0.72 ? 'pickup' : 'moto'; };
    // moving cars
    this.cars = [];
    const trunkRoads = this.roads.filter((x, i) => live[i] && x.r.hw === 'trunk');
    const mainRoads = this.roads.filter((x, i) => live[i] && ['trunk', 'tertiary'].includes(x.r.hw));
    const weights = this.roads.map((x, i) => live[i] ? x.tot * (x.r.hw === 'trunk' ? 3 : x.r.hw === 'tertiary' ? 2 : x.r.s === 'dirt' ? 0.3 : 1) : 0);
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
      c.next = this._pick(c);
    }
    // parked cars: along the kerb of residential / paved streets
    this.parked = [];
    const parkable = this.roads.filter(x => ['residential', 'tertiary', 'unclassified'].includes(x.r.hw) && x.r.s !== 'dirt' && x.w >= 6 && !x.r.b && !x.r.ring && x.tot > 24);
    const noPark = globalThis.__noPark;
    let guard = 0;
    while (this.parked.length < nPark && guard++ < nPark * 20 && parkable.length) {
      const rd = parkable[Math.floor(R() * parkable.length)];
      const s = 10 + R() * Math.max(0, rd.tot - 20);
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
        im.castShadow = false; im.receiveShadow = true;
        im.frustumCulled = false;
        im.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
        const blob = contactShadows(geo, counts[kind], kind === 'moto' ? 0.4 : 0.6);
        this.inst[kind] = { im, n: 0, blob };
        this.group.add(im); this.group.add(blob);
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

  /** choose where a car goes at the end of its current edge */
  _pick(c) {
    const rd = this.roads[c.ri];
    const endP = c.dir > 0 ? rd.p[rd.p.length - 1] : rd.p[0];
    let opts = (this.nodes.get(this.key(endP)) || []).filter(o => o.i !== c.ri && !(this.roads[o.i].oneway && o.end === 1));
    if (!opts.length) return null;
    if (c.kind === 'truck' || c.kind === 'bus') {
      const main = opts.filter(o => ['trunk', 'trunk_link', 'tertiary'].includes(this.roads[o.i].r.hw));
      if (main.length) opts = main;
    }
    // avoid sharp U-like turns when there is another way
    const hx = c.dir > 0 ? endP[0] - rd.p[rd.p.length - 2][0] : endP[0] - rd.p[1][0];
    const hz = c.dir > 0 ? endP[1] - rd.p[rd.p.length - 2][1] : endP[1] - rd.p[1][1];
    const ang = o => { const nr = this.roads[o.i]; const q = o.end === 0 ? nr.p[1] : nr.p[nr.p.length - 2]; const dx = q[0] - endP[0], dz = q[1] - endP[1]; return (hx * dx + hz * dz) / (Math.hypot(hx, hz) * Math.hypot(dx, dz) || 1); };
    const good = opts.filter(o => ang(o) > -0.6);
    if (good.length) opts = good;
    const o = opts[Math.floor(this.R() * opts.length)];
    return { ri: o.i, dir: o.end === 0 ? 1 : -1 };
  }

  _lane(c, rd) { return c.kind === 'moto' ? Math.min(2.2, rd.w / 4 + 0.4) : rd.oneway ? (rd.r.ring ? 0.6 : 0) : Math.min(1.9, rd.w / 4); }

  /** like at(), but bends of the polyline are rounded (quadratic Bézier) so the lane never jumps */
  atSmooth(rd, s, off) {
    s = Math.max(0, Math.min(rd.tot - 1e-3, s));
    const n = rd.p.length, cum = rd.cum, len = rd.len;
    let i = 0;
    while (i < len.length - 1 && s > cum[i + 1]) i++;
    for (const k of [i, i + 1]) {
      if (k <= 0 || k >= n - 1) continue;
      const rc = Math.min(5, len[k - 1] * 0.45, len[k] * 0.45);
      if (rc < 0.2 || Math.abs(s - cum[k]) >= rc) continue;
      const a = this.at(rd, cum[k] - rc, off), b = this.at(rd, cum[k] + rc, off);
      const j0 = this.at(rd, cum[k] - 1e-4, off), j1 = this.at(rd, cum[k] + 1e-4, off);
      const P1x = (j0.x + j1.x) / 2, P1z = (j0.z + j1.z) / 2;
      const u = (s - (cum[k] - rc)) / (2 * rc), A = (1 - u) * (1 - u), M = 2 * u * (1 - u), C = u * u;
      const tx = 2 * (1 - u) * (P1x - a.x) + 2 * u * (b.x - P1x), tz = 2 * (1 - u) * (P1z - a.z) + 2 * u * (b.z - P1z), tl = Math.hypot(tx, tz) || 1;
      return { x: A * a.x + M * P1x + C * b.x, z: A * a.z + M * P1z + C * b.z, dx: tx / tl, dz: tz / tl };
    }
    return this.at(rd, s, off);
  }

  /** point at distance s from the start of travel on edge ri in direction dir, on the car's lane */
  _pt(c, ri, dir, s) {
    const rd = this.roads[ri];
    const p = this.atSmooth(rd, dir > 0 ? s : rd.tot - s, this._lane(c, rd) * dir);
    return [p.x, p.z];
  }

  _next(c) {
    const rd = this.roads[c.ri];
    const k = rd.cars.indexOf(c); if (k >= 0) rd.cars.splice(k, 1);
    if (!c.next) { c.next = { ri: c.ri, dir: -c.dir }; }
    c.prev = { ri: c.ri, dir: c.dir, rt: this._rt(c.ri, c.next.ri) };
    c.ri = c.next.ri; c.dir = c.next.dir;
    this.roads[c.ri].cars.push(c);
    c.next = this._pick(c);
  }

  _rt(a, b) { return Math.max(0.5, Math.min(6, this.roads[a].tot / 2.2, this.roads[b].tot / 2.2)); }

  tick(dt) {
    if (!this.group.visible) return;
    const { M, q, v, one, up } = this;
    let b = 0;
    const bez = (P0, P1, P2, u) => {
      const a = (1 - u) * (1 - u), m = 2 * u * (1 - u), cc = u * u;
      return [a * P0[0] + m * P1[0] + cc * P2[0], a * P0[1] + m * P1[1] + cc * P2[1],
        2 * (1 - u) * (P1[0] - P0[0]) + 2 * u * (P2[0] - P1[0]), 2 * (1 - u) * (P1[1] - P0[1]) + 2 * u * (P2[1] - P1[1])];
    };
    for (const c of this.cars) {
      const rd = this.roads[c.ri];
      // car following on the same edge, and into the next one
      let gap = 1e9;
      for (const o of rd.cars) {
        if (o === c || o.dir !== c.dir) continue;
        const d = o.s - c.s;
        if (d > 0 && d < gap) gap = d - (o.len + c.len) / 2;
      }
      const remaining = rd.tot - c.s;
      if (gap > 1e8 && c.next && remaining < 25) {
        for (const o of this.roads[c.next.ri].cars) if (o !== c && o.dir === c.next.dir) gap = Math.min(gap, remaining + o.s - (o.len + c.len) / 2);
      }
      let target = rd.speed * c.vmax;
      if (c.next && remaining < 16) {
        // slow down for the turn: sharper turn -> slower
        const nr = this.roads[c.next.ri];
        const e0 = c.dir > 0 ? rd.p[rd.p.length - 1] : rd.p[0], e1 = c.dir > 0 ? rd.p[rd.p.length - 2] : rd.p[1];
        const n1 = c.next.dir > 0 ? nr.p[1] : nr.p[nr.p.length - 2];
        const ax = e0[0] - e1[0], az = e0[1] - e1[1], bx = n1[0] - e0[0], bz = n1[1] - e0[1];
        const cos = (ax * bx + az * bz) / (Math.hypot(ax, az) * Math.hypot(bx, bz) || 1);
        if (cos < 0.9) target = Math.min(target, 3.2 + remaining * 0.35 + Math.max(0, cos) * 3);
      }
      if (gap < 18) target = Math.min(target, Math.max(0, (gap - 2.5) * 0.9));
      // slow down for quebra-molas
      if (this.bumps) {
        const hx = Math.cos(c.yaw), hz = -Math.sin(c.yaw);
        for (const bb of this.bumps) {
          const dx = bb[0] - c.pos.x, dz = bb[1] - c.pos.z;
          if (dx * dx + dz * dz > 1600) continue;
          const along = dx * hx + dz * hz, lat = Math.abs(dx * hz - dz * hx);
          if (along > -2 && along < 35 && lat < bb[4] + 1) target = Math.min(target, 2.2 + Math.max(0, along) * 0.3);
        }
      }
      // stop at closed level crossings / red lights
      if (this.blockers) {
        const hx = Math.cos(c.yaw), hz = -Math.sin(c.yaw);
        for (const bl of this.blockers) {
          if (!bl.closed) continue;
          const dx = bl.x - c.pos.x, dz = bl.z - c.pos.z;
          if (dx * dx + dz * dz > 3600) continue;
          const along = dx * hx + dz * hz, lat = Math.abs(dx * hz - dz * hx);
          if (along > 5 && along < 60 && lat < 7) target = Math.min(target, Math.max(0, (along - 12.5 - c.len / 2) * 0.8));
        }
      }
      c.v += Math.max(-6 * dt, Math.min(2.2 * dt, target - c.v));
      c.v = Math.max(0, c.v);
      c.s += c.v * dt;
      for (let g = 0; g < 4 && c.s >= this.roads[c.ri].tot; g++) { c.s -= this.roads[c.ri].tot; this._next(c); }
      const r2 = this.roads[c.ri];
      // position: straight along the edge, a smooth curve (quadratic Bézier) through every junction
      let x, z, hx, hz;
      const tot = r2.tot;
      const rtN = c.next ? this._rt(c.ri, c.next.ri) : 0;
      if (c.next && tot - c.s < rtN) {
        const P0 = this._pt(c, c.ri, c.dir, tot - rtN), J0 = this._pt(c, c.ri, c.dir, tot), J1 = this._pt(c, c.next.ri, c.next.dir, 0), P2 = this._pt(c, c.next.ri, c.next.dir, rtN);
        const r = bez(P0, [(J0[0] + J1[0]) / 2, (J0[1] + J1[1]) / 2], P2, (c.s - (tot - rtN)) / (2 * rtN));
        [x, z, hx, hz] = r;
      } else if (c.prev && c.s < c.prev.rt && this.roads[c.prev.ri]) {
        const pr = this.roads[c.prev.ri], rt = c.prev.rt;
        const P0 = this._pt(c, c.prev.ri, c.prev.dir, pr.tot - rt), J0 = this._pt(c, c.prev.ri, c.prev.dir, pr.tot), J1 = this._pt(c, c.ri, c.dir, 0), P2 = this._pt(c, c.ri, c.dir, rt);
        const r = bez(P0, [(J0[0] + J1[0]) / 2, (J0[1] + J1[1]) / 2], P2, 0.5 + c.s / (2 * rt));
        [x, z, hx, hz] = r;
      } else {
        const p = this.atSmooth(r2, c.dir > 0 ? c.s : tot - c.s, this._lane(c, r2) * c.dir);
        x = p.x; z = p.z; hx = p.dx * c.dir; hz = p.dz * c.dir;
      }
      if (hx * hx + hz * hz > 1e-8) {
        const yawT = Math.atan2(-hz, hx);
        let dy = yawT - c.yaw; dy = Math.atan2(Math.sin(dy), Math.cos(dy));
        c.yaw += dt > 0 ? dy * Math.min(1, dt * 12) : dy;
      }
      const y = this.roadH(r2.r, x, z) + (this.bumpH ? this.bumpH(x, z) : 0);
      c.pos.set(x, y, z);
      q.setFromAxisAngle(up, c.yaw);
      M.compose(c.pos, q, one);
      const I = this.inst[c.kind];
      I.im.setMatrixAt(c.slot, M);
      I.blob.setMatrixAt(c.slot, M);
      if (this.beams.visible) this.beams.setMatrixAt(b++, M);
    }
    for (const k in this.inst) { const I = this.inst[k]; I.im.count = I.blob.count = I.n; I.im.instanceMatrix.needsUpdate = true; I.blob.instanceMatrix.needsUpdate = true; }
    this.beams.count = b;
    this.beams.instanceMatrix.needsUpdate = true;
  }
}
