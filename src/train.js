// Trens da Estrada de Ferro Vitória a Minas (EFVM) com horário, passagens de nível com cancelas,
// sinal sonoro e buzina. Posições são calculadas a partir do relógio (sem estado), então voltar
// ou adiantar a hora mostra exatamente onde cada trem estaria.
//
// Horários (horário de Brasília) do trem de passageiros em Aimorés:
//   - sentido Belo Horizonte (oeste):  10h29  (tabela Vale/Casa Capixaba, out/2026)
//   - sentido Cariacica/Vitória (leste): ~16h59 (estimado: tabela antiga 16h54; partida de BH 7h)
//   - trem noturno de férias (dez, jan, jul): 21h23 sentido BH e 4h31 sentido Cariacica
// Trens de carga (minério carregado para o porto, vazios de volta, carga geral) não têm horário
// público; são gerados de forma determinística para cada dia (~1 a cada 45 min).
import * as THREE from 'three';
import { GeoBuilder, srgb, rng, segDist, contactShadows } from './util.js';
import { dayOfYear } from './sky.js';

class Track {
  constructor(pts, h) {
    this.p = pts; this.h = h;
    this.c = new Float64Array(pts.length);
    for (let i = 1; i < pts.length; i++) this.c[i] = this.c[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
    this.L = this.c[pts.length - 1];
  }
  at(s, out) {
    s = Math.max(0, Math.min(this.L - 1e-3, s));
    let lo = 0, hi = this.c.length - 1;
    while (hi - lo > 1) { const m = (lo + hi) >> 1; if (this.c[m] <= s) lo = m; else hi = m; }
    const t = (s - this.c[lo]) / ((this.c[hi] - this.c[lo]) || 1);
    const a = this.p[lo], b = this.p[hi];
    out[0] = a[0] + (b[0] - a[0]) * t; out[1] = this.h[lo] + (this.h[hi] - this.h[lo]) * t; out[2] = a[1] + (b[1] - a[1]) * t;
    return out;
  }
  project(x, z) {
    let best = 1e9, bs = 0;
    for (let i = 0; i < this.p.length - 1; i++) {
      const q = segDist(x, z, this.p[i][0], this.p[i][1], this.p[i + 1][0], this.p[i + 1][1]);
      if (q.d < best) { best = q.d; bs = this.c[i] + (this.c[i + 1] - this.c[i]) * q.t; }
    }
    return { s: bs, d: best };
  }
}

// ---------------------------------------------------------------- rolling stock geometry
function passengerCarGeo() {
  const g = new GeoBuilder(true, false);
  const steel = srgb(196, 200, 204), glass = srgb(32, 40, 48), green = srgb(0, 122, 84), yellow = srgb(236, 178, 34), dark = srgb(40, 42, 44), roof = srgb(160, 164, 168);
  const L = 11.6, W = 1.45;
  const box = (x0, x1, y0, y1, z0, z1, c) => {
    const P = (x, y, z) => [x, y, z];
    g.quad(P(x0, y1, z1), P(x1, y1, z1), P(x1, y1, z0), P(x0, y1, z0), null, null, null, null, c);
    g.quad(P(x1, y0, z0), P(x1, y1, z0), P(x1, y1, z1), P(x1, y0, z1), null, null, null, null, c);
    g.quad(P(x0, y0, z1), P(x0, y1, z1), P(x0, y1, z0), P(x0, y0, z0), null, null, null, null, c);
    g.quad(P(x0, y0, z0), P(x0, y1, z0), P(x1, y1, z0), P(x1, y0, z0), null, null, null, null, c);
    g.quad(P(x1, y0, z1), P(x1, y1, z1), P(x0, y1, z1), P(x0, y0, z1), null, null, null, null, c);
  };
  box(-L, L, 1.05, 3.85, -W, W, steel);
  // rounded roof
  const segs = 6;
  for (let k = 0; k < segs; k++) {
    const a0 = Math.PI * k / segs, a1 = Math.PI * (k + 1) / segs;
    const z0 = Math.cos(a0) * W, y0 = 3.85 + Math.sin(a0) * 0.45, z1 = Math.cos(a1) * W, y1 = 3.85 + Math.sin(a1) * 0.45;
    g.quad([-L, y0, z0], [-L, y1, z1], [L, y1, z1], [L, y0, z0], null, null, null, null, roof);
  }
  for (const s of [-1, 1]) {
    const z = s * (W + 0.01), face = s > 0 ? 'l' : 'r';
    // window band + stripes
    const band = (y0, y1, c, x0 = -L + 0.4, x1 = L - 0.4) => s > 0
      ? g.quad([x1, y0, z], [x1, y1, z], [x0, y1, z], [x0, y0, z], null, null, null, null, c)
      : g.quad([x0, y0, z], [x0, y1, z], [x1, y1, z], [x1, y0, z], null, null, null, null, c);
    band(1.5, 1.65, yellow); band(1.65, 1.82, green);
    for (let x = -L + 2.6; x < L - 2.4; x += 1.75) band(2.35, 3.3, glass, x, x + 1.35);
    for (const dx of [-L + 0.9, L - 1.9]) band(1.15, 3.55, srgb(150, 154, 158), dx, dx + 1.0); // doors
    void face;
  }
  // bogies + gangway
  for (const x of [-L + 2.4, L - 2.4]) box(x - 1.3, x + 1.3, 0.35, 1.05, -1.1, 1.1, dark);
  box(-L - 0.35, -L, 1.3, 3.6, -0.8, 0.8, dark); box(L, L + 0.35, 1.3, 3.6, -0.8, 0.8, dark);
  const geo = g.geometry();
  return geo;
}
function oreLoadGeo() {
  const g = new GeoBuilder(true, false), c = srgb(92, 66, 58);
  const L = 4.6, W = 1.3, y = 3.05, top = 3.75;
  g.quad([-L, y, W], [L, y, W], [L * 0.7, top, 0.3], [-L * 0.7, top, 0.3], null, null, null, null, c);
  g.quad([L, y, -W], [-L, y, -W], [-L * 0.7, top, -0.3], [L * 0.7, top, -0.3], null, null, null, null, c);
  g.quad([-L * 0.7, top, 0.3], [L * 0.7, top, 0.3], [L * 0.7, top, -0.3], [-L * 0.7, top, -0.3], null, null, null, null, c);
  g.tri([L, y, W], [L, y, -W], [L * 0.7, top, 0], null, null, null, c);
  g.tri([-L, y, -W], [-L, y, W], [-L * 0.7, top, 0], null, null, null, c);
  return g.geometry();
}

// ---------------------------------------------------------------- schedule
const CONSIST = {
  passageiro: { locos: 1, cars: 14, carLen: 24.0, v: 13.5, label: 'Trem de passageiros' },
  minerio: { locos: 3, cars: 150, carLen: 10.5, v: 11, label: 'Trem de minério (carregado)' },
  vazio: { locos: 2, cars: 150, carLen: 10.5, v: 13, label: 'Trem de minério (vazio)' },
  carga: { locos: 2, cars: 60, carLen: 10.5, v: 12, label: 'Trem de carga geral' },
};
const LOCO_LEN = 22;

function buildSchedule(doy) {
  const runs = [];
  const month = new Date(new Date().getFullYear(), 0, doy).getMonth();
  runs.push({ type: 'passageiro', dir: -1, h: 10 + 29 / 60, stop: 150, dest: 'Belo Horizonte' });
  runs.push({ type: 'passageiro', dir: 1, h: 16 + 59 / 60, stop: 150, dest: 'Cariacica (Vitória)' });
  if (month === 11 || month === 0 || month === 6) {
    runs.push({ type: 'passageiro', dir: -1, h: 21 + 23 / 60, stop: 120, dest: 'Belo Horizonte (noturno)' });
    runs.push({ type: 'passageiro', dir: 1, h: 4 + 31 / 60, stop: 120, dest: 'Cariacica (noturno)' });
  }
  const R = rng(doy * 7919 + 17);
  const add = (type, dir, every, dest) => {
    let h = R() * every;
    while (h < 24) {
      // keep freight away from the passenger trains on the same track (±12 min)
      if (!runs.some(r => r.type === 'passageiro' && r.dir === dir && Math.abs(r.h - h) < 0.2)) runs.push({ type, dir, h, stop: 0, dest });
      h += every * (0.7 + R() * 0.6);
    }
  };
  add('minerio', 1, 1.6, 'Porto de Tubarão');
  add('vazio', -1, 1.6, 'Itabira / minas');
  add('carga', 1, 5.5, 'Vitória');
  add('carga', -1, 5.5, 'Belo Horizonte');
  runs.sort((a, b) => a.h - b.h);
  return runs;
}

export class Trains {
  constructor({ city, T, scene, day, sound, roads, Q, legacy }) {
    this.T = T; this.day = day; this.sound = sound; this.Q = Q;
    const main = city.rail.map(r => new Track(r.pts, r.h)).sort((a, b) => b.L - a.L).slice(0, 2);
    // track 0 eastbound (s increasing = east), track 1 westbound
    this.tracks = main;
    this.group = new THREE.Group();
    this.group.name = 'trens';
    scene.add(this.group);
    // the passenger train stops with its middle at the station building
    const st = (city.extras.poi.find(p => /Esta/.test(p[0])) || ['', -820, -117]);
    this.stationS = main.map(t => t.project(st[1], st[2]).s);
    // part of each track that is inside the map
    this.inMap = main.map(t => { let a = 1e9, b = -1e9; for (let i = 0; i < t.p.length; i++) if (T.inside(t.p[i][0], t.p[i][1], 0)) { a = Math.min(a, t.c[i]); b = Math.max(b, t.c[i]); } return [a, b]; });
    // ------------------------------------------------ instanced rolling stock
    const maxCars = Q === 'low' ? 90 : 150;
    if (Q === 'low') for (const k of ['minerio', 'vazio']) CONSIST[k].cars = 90;
    const locoMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.55, metalness: 0.25 });
    const wagMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.75, metalness: 0.2 });
    const paxMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.35, metalness: 0.55 });
    paxMat.onBeforeCompile = sh => {
      sh.uniforms.uLights = this.lightsU;
      sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nuniform float uLights;')
        .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\n  float gl = step(dot(vColor.rgb, vec3(1.0)), 0.12);\n  totalEmissiveRadiance += vec3(1.0, 0.9, 0.7) * gl * uLights * 1.6;');
    };
    paxMat.customProgramCacheKey = () => 'paxcar';
    this.lightsU = { value: 0 };
    // moving: no shadow-map casting (the shadow map is refreshed lazily), a soft contact shadow instead
    const mk = (geo, mat, n, blob = true) => { const m = new THREE.InstancedMesh(geo, mat, n); m.count = 0; m.frustumCulled = false; m.castShadow = false; m.receiveShadow = true; m.instanceMatrix.setUsage(THREE.DynamicDrawUsage); this.group.add(m); if (blob) { m.userData.blob = contactShadows(geo, n, 0.5, 1.05); this.group.add(m.userData.blob); } return m; };
    this.locos = mk(legacy.locoGeo(), locoMat, 8);
    this.wagons = mk(legacy.wagonGeo(), wagMat, maxCars * 2);
    this.loads = mk(oreLoadGeo(), wagMat, maxCars * 2, false);
    this.pax = mk(passengerCarGeo(), paxMat, 40);
    // ------------------------------------------------ schedule
    this.doy = dayOfYear();
    this.runs = buildSchedule(this.doy);
    this.prevHead = new Map();
    // ------------------------------------------------ level crossings
    this.crossings = this._findCrossings(city, roads);
    this._buildCrossings();
    this.tmp = [0, 0, 0]; this.tmp2 = [0, 0, 0]; this.tmp3 = [0, 0, 0];
    this.M = new THREE.Matrix4(); this.q = new THREE.Quaternion(); this.v = new THREE.Vector3(); this.one = new THREE.Vector3(1, 1, 1); this.up = new THREE.Vector3(0, 1, 0);
    this.active = [];
    this.lastRumble = 0;
  }

  trainLength(run) { const c = CONSIST[run.type]; return c.locos * LOCO_LEN + c.cars * c.carLen; }

  /** displacement (m, along travel) of the head relative to its reference point, dt seconds after the reference time */
  _disp(run, dt) {
    const v = CONSIST[run.type].v;
    if (!run.stop) return v * dt;
    const Db = 160, tb = 2 * Db / v, dw = run.stop;
    if (dt < -tb) return -Db + v * (dt + tb);
    if (dt < 0) return -v * dt * dt / (2 * tb);
    if (dt < dw) return 0;
    const t2 = dt - dw;
    if (t2 < tb) return v * t2 * t2 / (2 * tb);
    return Db + v * (t2 - tb);
  }

  /** current state of every run near the map, for clock hour h */
  _states(h) {
    const out = [];
    for (const run of this.runs) {
      let dt = (h - run.h) * 3600;
      if (dt > 43200) dt -= 86400; if (dt < -43200) dt += 86400;
      if (dt < -1500 || dt > 2400) continue;
      const k = run.dir > 0 ? 0 : 1, tr = this.tracks[k], len = this.trainLength(run);
      // reference: head position when the train's middle is at the station
      const ref = this.stationS[k] + run.dir * len / 2;
      const head = ref + run.dir * this._disp(run, dt);
      const tail = head - run.dir * len;
      const [a, b] = this.inMap[k];
      if (Math.max(head, tail) < a - 50 || Math.min(head, tail) > b + 50) continue;
      out.push({ run, k, tr, head, tail, len, dt, moving: Math.abs(this._disp(run, dt + 1) - this._disp(run, dt)) > 0.05 });
    }
    return out;
  }

  _findCrossings(city, roads) {
    const res = [];
    const skip = new Set([...((city.viaduct2 || {}).ways || []).map(w => w.id), 1314627853, 1314627854, 1314627855]);
    const inter = (a, b, c, d) => {
      const r = (b[0] - a[0]) * (d[1] - c[1]) - (b[1] - a[1]) * (d[0] - c[0]);
      if (Math.abs(r) < 1e-9) return null;
      const t = ((c[0] - a[0]) * (d[1] - c[1]) - (c[1] - a[1]) * (d[0] - c[0])) / r, u = ((c[0] - a[0]) * (b[1] - a[1]) - (c[1] - a[1]) * (b[0] - a[0])) / r;
      return t >= 0 && t <= 1 && u >= 0 && u <= 1 ? [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t] : null;
    };
    for (const r of city.roads) {
      if (skip.has(r.id) || r.b || ['footway', 'path', 'steps'].includes(r.hw)) continue;
      for (let i = 0; i < r.p.length - 1; i++) {
        for (const tr of this.tracks) {
          for (let k = 0; k < tr.p.length - 1; k++) {
            const x = inter(r.p[i], r.p[i + 1], tr.p[k], tr.p[k + 1]);
            if (!x) continue;
            if (!this.T.inside(x[0], x[1], 5)) continue;
            // road must be at rail level (not a bridge over it)
            if (Math.abs(this.T.at(x[0], x[1]) - tr.h[k]) > 2.5) continue;
            const dx = r.p[i + 1][0] - r.p[i][0], dz = r.p[i + 1][1] - r.p[i][1], l = Math.hypot(dx, dz);
            let c = res.find(q => Math.hypot(q.x - x[0], q.z - x[1]) < 18);
            if (!c) { c = { x: x[0], z: x[1], ux: dx / l, uz: dz / l, w: r.w || 7, name: r.n || '', roadIds: new Set(), closed: false, arm: 1, n: 0 }; res.push(c); }
            c.roadIds.add(r.id);
            c.x = (c.x * c.n + x[0]) / (c.n + 1); c.z = (c.z * c.n + x[1]) / (c.n + 1); c.n++;
          }
        }
      }
    }
    for (const c of res) c.trackS = this.tracks.map(t => t.project(c.x, c.z).s);
    return res;
  }

  _buildCrossings() {
    const T = this.T;
    for (const c of this.crossings) {
      const g = new THREE.Group();
      g.name = 'passagem_de_nivel';
      // the two tracks run roughly perpendicular to the road: place one gate on each side
      const nx = -c.uz, nz = c.ux; // across the road
      // distance from crossing centre to the gates along the road (outside both tracks)
      const off = 9;
      c.gates = [];
      for (const side of [-1, 1]) {
        const gx = c.x + c.ux * off * side, gz = c.z + c.uz * off * side;
        // gate post on the right-hand side of traffic approaching the tracks
        const px = gx + nx * (c.w / 2 + 0.8) * -side, pz = gz + nz * (c.w / 2 + 0.8) * -side;
        const y = T.at(px, pz);
        const post = new THREE.Mesh(new THREE.BoxGeometry(0.35, 1.3, 0.35), new THREE.MeshStandardMaterial({ color: 0xf2f2f2, roughness: 0.6 }));
        post.position.set(px, y + 0.65, pz); post.castShadow = true;
        g.add(post);
        // boom: red/white striped, pivots at the post
        const len = c.w / 2 + 0.6;
        const boomTex = (() => {
          const cv = document.createElement('canvas'); cv.width = 128; cv.height = 8;
          const x2 = cv.getContext('2d');
          for (let k = 0; k < 8; k++) { x2.fillStyle = k % 2 ? '#ffffff' : '#d32222'; x2.fillRect(k * 16, 0, 16, 8); }
          const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; return t;
        })();
        const boomGeo = new THREE.BoxGeometry(len, 0.12, 0.12); boomGeo.translate(len / 2, 0, 0);
        const boom = new THREE.Mesh(boomGeo, new THREE.MeshStandardMaterial({ map: boomTex, roughness: 0.5 }));
        const pivot = new THREE.Group();
        pivot.position.set(px, y + 1.15, pz);
        // boom points across the road (towards the lane it closes)
        pivot.rotation.y = Math.atan2(-(nz * side), nx * side);
        const hinge = new THREE.Group(); hinge.add(boom); pivot.add(hinge);
        g.add(pivot);
        // signal mast with two red lamps and the St Andrew's cross
        const mx = px + c.ux * side * 0.9, mz = pz + c.uz * side * 0.9;
        const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 3.6, 8), new THREE.MeshStandardMaterial({ color: 0x9a9da1, metalness: 0.5, roughness: 0.4 }));
        mast.position.set(mx, y + 1.8, mz); g.add(mast);
        const crossTex = (() => {
          const cv = document.createElement('canvas'); cv.width = 128; cv.height = 128;
          const x2 = cv.getContext('2d'); x2.clearRect(0, 0, 128, 128);
          x2.save(); x2.translate(64, 64);
          for (const a of [Math.PI / 4, -Math.PI / 4]) { x2.save(); x2.rotate(a); x2.fillStyle = '#c62828'; x2.fillRect(-62, -12, 124, 24); x2.fillStyle = '#fff'; x2.fillRect(-58, -8, 116, 16); x2.restore(); }
          x2.restore();
          const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; return t;
        })();
        const cross = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 1.4), new THREE.MeshStandardMaterial({ map: crossTex, transparent: true, alphaTest: 0.3, side: THREE.DoubleSide }));
        cross.position.set(mx, y + 3.3, mz); cross.rotation.y = Math.atan2(c.ux * side, c.uz * side) + Math.PI;
        g.add(cross);
        const lamps = [];
        for (const k of [-1, 1]) {
          const lm = new THREE.Mesh(new THREE.CircleGeometry(0.16, 12), new THREE.MeshStandardMaterial({ color: 0x400000, emissive: 0xff1a00, emissiveIntensity: 0 }));
          lm.position.set(mx + nx * 0.32 * k - c.ux * side * 0.06, y + 2.45, mz + nz * 0.32 * k - c.uz * side * 0.06);
          lm.rotation.y = Math.atan2(-c.ux * side, -c.uz * side);
          const back = new THREE.Mesh(new THREE.CircleGeometry(0.3, 12), new THREE.MeshStandardMaterial({ color: 0x111111 }));
          back.position.copy(lm.position).add(new THREE.Vector3(c.ux * side * 0.02, 0, c.uz * side * 0.02)); back.rotation.y = lm.rotation.y;
          g.add(back, lm); lamps.push(lm);
        }
        // white stop line on the road
        const sl = new THREE.Mesh(new THREE.PlaneGeometry(c.w * 0.5, 0.4), new THREE.MeshBasicMaterial({ color: 0xf2f2f2, polygonOffset: true, polygonOffsetFactor: -8, polygonOffsetUnits: -16 }));
        const lx = c.x + c.ux * (off + 1.5) * side + nx * (c.w / 4) * -side, lz = c.z + c.uz * (off + 1.5) * side + nz * (c.w / 4) * -side;
        sl.position.set(lx, T.at(lx, lz) + 0.16, lz); sl.rotation.x = -Math.PI / 2; sl.rotation.z = Math.atan2(nz, nx);
        g.add(sl);
        c.gates.push({ hinge, lamps, side, stop: [c.x + c.ux * (off + 2.5) * side, c.z + c.uz * (off + 2.5) * side] });
      }
      // timber crossing deck between the rails (rubber/concrete panels)
      for (const tr of this.tracks) {
        const pr = tr.project(c.x, c.z); const p = tr.at(pr.s, [0, 0, 0]);
        const deck = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.08, c.w + 1), new THREE.MeshStandardMaterial({ color: 0x55504a, roughness: 0.9 }));
        deck.position.set(p[0], p[1] + 0.02, p[2]); deck.rotation.y = -Math.atan2(c.uz, c.ux) + Math.PI / 2 - Math.PI / 2;
        deck.rotation.y = Math.atan2(-c.uz, c.ux) + Math.PI / 2;
        g.add(deck);
      }
      this.group.add(g);
    }
  }

  /** Is the crossing occupied/announced by this train state? */
  _blocks(c, st) {
    const s = c.trackS[st.k], d = st.run.dir;
    // closes 25 s before the head arrives, opens when the tail is 15 m past
    const pre = CONSIST[st.run.type].v * 25 + 40;
    return d > 0 ? (st.head > s - pre && st.tail < s + 15) : (st.head < s + pre && st.tail > s - 15);
  }

  update(dtReal, h, clockSpeed, camera) {
    const st = this.active = this._states(h);
    const off = this.group.userData.off;
    const { M, q, v, one, up } = this;
    let nl = 0, nw = 0, nL = 0, np = 0;
    const p = this.tmp, a = this.tmp2, b = this.tmp3;
    const place = (tr, s, len, dir, yOff = 0.62) => {
      tr.at(s - dir * len * 0.4, a); tr.at(s + dir * len * 0.4, b); tr.at(s, p);
      const yaw = Math.atan2(b[2] - a[2], b[0] - a[0]);
      q.setFromAxisAngle(up, -yaw); v.set(p[0], p[1] + yOff, p[2]);
      M.compose(v, q, one);
    };
    const nearCam = { d: 1e9, x: 0, y: 0, z: 0, v: 0 };
    for (const s of st) {
      const c = CONSIST[s.run.type], dir = s.run.dir;
      let x = s.head;
      const [ia, ib] = this.inMap[s.k];
      const vis = sv => sv > ia - 60 && sv < ib + 60;
      for (let i = 0; i < c.locos; i++) {
        const sc = x - dir * LOCO_LEN / 2;
        if (vis(sc) && nl < this.locos.instanceMatrix.count) { place(s.tr, sc, LOCO_LEN, dir); this.locos.setMatrixAt(nl++, M); }
        x -= dir * LOCO_LEN;
      }
      for (let i = 0; i < c.cars; i++) {
        const sc = x - dir * c.carLen / 2;
        if (vis(sc)) {
          place(s.tr, sc, c.carLen, dir);
          if (s.run.type === 'passageiro') { if (np < 40) this.pax.setMatrixAt(np++, M); }
          else if (nw < this.wagons.instanceMatrix.count) {
            this.wagons.setMatrixAt(nw++, M);
            if (s.run.type === 'minerio' && nL < this.loads.instanceMatrix.count) this.loads.setMatrixAt(nL++, M);
          }
        }
        x -= dir * c.carLen;
      }
      // nearest point to the camera (sound)
      if (camera) {
        const sp = s.tr.project ? null : null; void sp;
        const mid = (s.head + s.tail) / 2; s.tr.at(Math.max(Math.min(s.head, s.tail), Math.min(Math.max(s.head, s.tail), mid)), p);
        const d = Math.hypot(p[0] - camera.position.x, p[2] - camera.position.z);
        if (d < nearCam.d) Object.assign(nearCam, { d, x: p[0], y: p[1], z: p[2], v: s.moving ? c.v : 0 });
      }
      // horn: approaching the station / a level crossing (only at real-ish clock speeds)
      const key = s.run.type + s.run.h.toFixed(3) + s.run.dir;
      const prev = this.prevHead.get(key);
      this.prevHead.set(key, s.head);
      if (prev !== undefined && clockSpeed <= 60 && this.sound) {
        const marks = this.crossings.map(cr => cr.trackS[s.k] - dir * 220);
        if (s.run.stop) marks.push(this.stationS[s.k] - dir * 450);
        for (const m of marks) if ((prev - m) * (s.head - m) < 0) { s.tr.at(s.head, p); this.sound.trainHorn(p[0], p[1] + 4, p[2], s.run.type === 'passageiro' ? 1.4 : 2.2); }
        // departure horn
        if (s.run.stop && s.dt > s.run.stop - 1 && s.dt < s.run.stop + 0.2 * clockSpeed) { s.tr.at(s.head, p); if (!this._dep || this._dep !== key) { this._dep = key; this.sound.trainHorn(p[0], p[1] + 4, p[2], 1.0); } }
      }
    }
    for (const [m, n] of [[this.locos, nl], [this.wagons, nw], [this.loads, nL], [this.pax, np]]) {
      m.count = off ? 0 : n; m.instanceMatrix.needsUpdate = true;
      const bl = m.userData.blob;
      if (bl) { bl.count = m.count; for (let i = 0; i < m.count; i++) { m.getMatrixAt(i, this.M); bl.setMatrixAt(i, this.M); } bl.instanceMatrix.needsUpdate = true; }
    }
    this.lightsU.value = this.day.night > 0.3 ? 1 : 0;
    // ---- level crossings
    for (const c of this.crossings) {
      const closed = !off && st.some(s => this._blocks(c, s));
      if (closed !== c.closed) { c.closed = closed; c.since = 0; }
      c.since = (c.since || 0) + dtReal * Math.min(clockSpeed, 30);
      // arm: 1 = up, 0 = down; ~7 s to move
      const target = closed && c.since > 4 ? 0 : 1;
      c.arm += Math.sign(target - c.arm) * Math.min(Math.abs(target - c.arm), dtReal * Math.min(clockSpeed, 20) / 7);
      for (const g of c.gates) {
        g.hinge.rotation.z = c.arm * Math.PI / 2 * 0.98;
        const blink = closed && Math.floor(performance.now() / 500) % 2;
        g.lamps[0].material.emissiveIntensity = closed ? (blink ? 3 : 0.05) : 0;
        g.lamps[1].material.emissiveIntensity = closed ? (blink ? 0.05 : 3) : 0;
      }
      if (closed && this.sound && clockSpeed <= 60) {
        c.bellT = (c.bellT || 0) - dtReal;
        if (c.bellT <= 0) { this.sound.crossingBell(c.x, this.T.at(c.x, c.z) + 2, c.z, 1.0); c.bellT = 1.0; }
      }
    }
    // rumble
    if (this.sound && nearCam.d < 260 && nearCam.v > 0 && clockSpeed <= 60) {
      this.lastRumble -= dtReal;
      if (this.lastRumble <= 0) { this.sound.trainRumble(nearCam.x, nearCam.y, nearCam.z, nearCam.v); this.lastRumble = 0.45; }
    }
  }

  /** Crossing blockers for the traffic module. */
  blockers() { return this.crossings.map(c => ({ x: c.x, z: c.z, closed: c.closed || c.arm < 0.95, gates: c.gates })); }

  /** Next trains for the UI (from hour h). */
  upcoming(h, n = 4) {
    const list = this.runs.map(r => { let d = r.h - h; if (d < -0.05) d += 24; return { r, d }; }).sort((a, b) => a.d - b.d).slice(0, n);
    return list.map(({ r, d }) => ({ label: CONSIST[r.type].label, dest: r.dest, h: r.h, inMin: Math.round(d * 60), type: r.type }));
  }
  /** Where to look: the nearest active train, or the station. */
  focus() {
    const s = this.active.find(a => a.run.type === 'passageiro') || this.active[0];
    const p = [0, 0, 0];
    if (s) {
      // middle of the visible part of the train
      const [ia, ib] = this.inMap[s.k];
      const lo = Math.max(Math.min(s.head, s.tail), ia), hi = Math.min(Math.max(s.head, s.tail), ib);
      s.tr.at(lo < hi ? (lo + hi) / 2 : (s.head + s.tail) / 2, p); return p;
    }
    this.tracks[1].at(this.stationS[1], p);
    return p;
  }
}
