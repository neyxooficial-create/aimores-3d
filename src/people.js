// Pedestres: gente andando nas calçadas onde de fato há movimento (Centro, Rua Pedro Nolasco,
// praça, perto de comércios, escolas e igrejas), quase ninguém em rua residencial vazia, e
// quantidade conforme a hora (manhã, almoço e fim de tarde cheios; madrugada vazia; bares à noite).
import * as THREE from 'three';
import { GeoBuilder, rng, hash, srgb } from './util.js';

const SKIN = [[241, 204, 170], [224, 172, 128], [198, 140, 96], [160, 104, 66], [118, 74, 46], [86, 56, 36]];
const SHIRT = [[240, 240, 240], [30, 30, 32], [200, 40, 40], [30, 80, 160], [240, 200, 40], [60, 140, 80], [230, 120, 160], [120, 120, 125], [250, 140, 40], [90, 60, 140], [20, 120, 140], [190, 170, 140]];
const PANTS = [[40, 60, 100], [30, 30, 34], [70, 70, 75], [180, 160, 120], [60, 90, 140], [120, 30, 40], [230, 230, 228]];

/** Activity level (0..1) of street life by hour. */
export function streetLife(h) {
  const k = [[0, 0.06], [4.5, 0.02], [6, 0.35], [7.5, 0.85], [9, 0.6], [11.5, 0.9], [13, 0.75], [15, 0.6], [17.5, 1.0], [19.5, 0.65], [21.5, 0.3], [23, 0.12], [24, 0.06]];
  for (let i = 0; i < k.length - 1; i++) if (h >= k[i][0] && h <= k[i + 1][0]) return k[i][1] + (k[i + 1][1] - k[i][1]) * (h - k[i][0]) / (k[i + 1][0] - k[i][0]);
  return 0.1;
}

function personGeo() {
  const g = new GeoBuilder(false, false); g.enableExtra();
  // extra = part*10 + slot   part: 0 body, 1 L leg, 2 R leg, 3 L arm, 4 R arm ; slot: 0 skin, 1 shirt, 2 pants, 3 dark (hair/shoes)
  const box = (x0, x1, y0, y1, z0, z1, e) => {
    const v = [[x0, y0, z0], [x1, y0, z0], [x1, y0, z1], [x0, y0, z1], [x0, y1, z0], [x1, y1, z0], [x1, y1, z1], [x0, y1, z1]];
    const f = (a, b, c, d) => g.quad(v[a], v[b], v[c], v[d], null, null, null, null, null, null, null, e);
    f(4, 7, 6, 5); f(0, 1, 2, 3); f(0, 4, 5, 1); f(1, 5, 6, 2); f(2, 6, 7, 3); f(3, 7, 4, 0);
  };
  // legs (pivot at hip y=0.9)
  box(-0.17, -0.03, 0.06, 0.92, -0.07, 0.07, 12); box(0.03, 0.17, 0.06, 0.92, -0.07, 0.07, 22);
  box(-0.17, -0.03, 0, 0.07, -0.09, 0.13, 13); box(0.03, 0.17, 0, 0.07, -0.09, 0.13, 23); // shoes
  // torso + hips
  box(-0.2, 0.2, 0.88, 1.42, -0.11, 0.11, 1);
  box(-0.19, 0.19, 0.84, 0.95, -0.1, 0.1, 2);
  // arms (pivot at shoulder y=1.4)
  box(-0.29, -0.2, 0.86, 1.4, -0.06, 0.06, 31); box(0.2, 0.29, 0.86, 1.4, -0.06, 0.06, 41);
  box(-0.285, -0.205, 0.78, 0.87, -0.05, 0.05, 30); box(0.205, 0.285, 0.78, 0.87, -0.05, 0.05, 40); // hands
  // neck, head, hair
  box(-0.05, 0.05, 1.42, 1.5, -0.05, 0.05, 0);
  box(-0.1, 0.1, 1.5, 1.73, -0.11, 0.1, 0);
  box(-0.105, 0.105, 1.66, 1.76, -0.12, 0.11, 3);
  const geo = g.geometry();
  geo.setAttribute('pp', geo.getAttribute('extra'));
  geo.deleteAttribute('extra');
  return geo;
}

function personMaterial(time) {
  const m = new THREE.MeshStandardMaterial({ roughness: 0.85 });
  m.onBeforeCompile = sh => {
    sh.uniforms.uTime = time;
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', `#include <common>
attribute float pp;
attribute vec3 iShirt; attribute vec3 iPants; attribute vec4 iMisc; // skin rgb, walk speed
attribute float iPhase;
uniform float uTime;
varying vec3 vPCol;`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
  float part = floor(pp / 10.0 + 0.01), slot = pp - part * 10.0;
  vPCol = slot < 0.5 ? iMisc.rgb : slot < 1.5 ? iShirt : slot < 2.5 ? iPants : vec3(0.06, 0.05, 0.045);
  float sw = sin(uTime * 6.5 * iMisc.a + iPhase) * min(1.0, iMisc.a);
  if (part > 0.5) {
    float pivot = part < 2.5 ? 0.9 : 1.4;
    float amp = part < 2.5 ? 0.45 : 0.35;
    float a = sw * amp * (mod(part, 2.0) < 0.5 ? 1.0 : -1.0) * (part < 2.5 ? 1.0 : -1.0);
    float y = transformed.y - pivot, z = transformed.z;
    transformed.y = pivot + y * cos(a) - z * sin(a);
    transformed.z = y * sin(a) + z * cos(a);
  }
  transformed.y += abs(sw) * 0.025;`)
      .replace('#include <color_vertex>', '#include <color_vertex>');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vPCol;')
      .replace('#include <color_fragment>', 'diffuseColor.rgb *= vPCol;');
  };
  m.customProgramCacheKey = () => 'person';
  return m;
}

export class People {
  constructor({ city, T, scene, day, Q }) {
    this.T = T; this.day = day;
    const R = this.R = rng(31337);
    const N = { low: 70, medium: 170, high: 300, ultra: 420 }[Q];
    // ------------------------------------------------ attraction points (where people go)
    const attract = [];
    for (const p of city.places || []) {
      const w = { alimentacao: 3, lojas: 3, saude: 2, bancos: 4, servicos: 1.5, igrejas: 1.5, educacao: 4, publico: 2.5, hospedagem: 1 }[p[3]] || 1;
      attract.push([p[1], p[2], w, p[3], p[4]]);
    }
    const plaza = city.extras.park || [];
    let px = 0, pz = 0; for (const [x, z] of plaza) { px += x; pz += z; } if (plaza.length) { px /= plaza.length; pz /= plaza.length; attract.push([px, pz, 25, 'praca']); }
    const st = city.extras.poi.find(p => /Esta/.test(p[0])); if (st) attract.push([st[1], st[2], 6, 'estacao']);
    // ------------------------------------------------ sidewalk lanes, weighted by nearby attraction
    this.lanes = [];
    for (const r of city.roads) {
      if (['footway', 'path', 'track', 'service'].includes(r.hw) || r.b || r.hw === 'trunk' || r.hw === 'trunk_link') continue;
      if (r.p.length < 2) continue;
      const pts = r.p;
      let L = 0; const cum = [0];
      for (let i = 1; i < pts.length; i++) { L += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); cum.push(L); }
      if (L < 15) continue;
      // attraction along the road
      let a = 0;
      for (const [x, z, w] of attract) {
        let dmin = 1e9;
        for (let i = 0; i < pts.length - 1; i++) {
          const dx = pts[i + 1][0] - pts[i][0], dz = pts[i + 1][1] - pts[i][1], l2 = dx * dx + dz * dz || 1;
          let t = ((x - pts[i][0]) * dx + (z - pts[i][1]) * dz) / l2; t = Math.max(0, Math.min(1, t));
          dmin = Math.min(dmin, Math.hypot(pts[i][0] + dx * t - x, pts[i][1] + dz * t - z));
        }
        if (dmin < 80) a += w * (1 - dmin / 80);
      }
      const centro = r.n && /Pedro Nolasco|Américo|Americo|Raul Soares|Getúlio|Bias Fortes|Antônio Polastri/.test(r.n);
      const base = (r.s === 'dirt' ? 0.05 : 0.25) + (centro ? 2 : 0) + (r.hw === 'tertiary' ? 0.4 : 0);
      const wgt = L * (base + a * 0.35);
      for (const side of [-1, 1]) this.lanes.push({ pts, cum, L, off: side * ((r.w || 6) / 2 + 1.0), w: wgt / 2 });
    }
    const wsum = this.lanes.reduce((s, l) => s + l.w, 0);
    const pickLane = () => { let t = R() * wsum; for (const l of this.lanes) { t -= l.w; if (t <= 0) return l; } return this.lanes[0]; };
    // ------------------------------------------------ people
    this.people = [];
    const bars = attract.filter(a => a[3] === 'alimentacao' && /bar|restaurant|eatery/.test(a[4] || ''));
    for (let i = 0; i < N; i++) {
      const kind = i < N * 0.78 ? 'walk' : i < N * 0.9 ? 'plaza' : 'stand';
      const p = { kind, rank: R(), phase: R() * 6.28, speed: 1.05 + R() * 0.45, x: 0, z: 0, yaw: 0, wait: 0 };
      if (kind === 'walk') { p.lane = pickLane(); p.s = R() * p.lane.L; p.dir = R() < 0.5 ? 1 : -1; }
      else if (kind === 'plaza') { p.target = null; this._plazaPoint(p, plaza); p.x = p.tx; p.z = p.tz; }
      else {
        // standing chatting near shops (day) or bars (evening)
        const night = R() < 0.4 && bars.length;
        const src = night ? bars : attract.filter(a => ['lojas', 'alimentacao', 'bancos', 'saude', 'estacao'].includes(a[3]));
        const a = src.length ? src[Math.floor(R() * src.length)] : [0, 0];
        p.x = a[0] + (R() - 0.5) * 4; p.z = a[1] + (R() - 0.5) * 4; p.yaw = R() * 6.28; p.speed = 0; p.evening = !!night;
      }
      p.plaza = plaza;
      this.people.push(p);
    }
    // ------------------------------------------------ instanced mesh
    const geo = personGeo();
    const n = this.people.length;
    const shirt = new Float32Array(n * 3), pants = new Float32Array(n * 3), misc = new Float32Array(n * 4), phase = new Float32Array(n);
    this.people.forEach((p, i) => {
      const s = srgb(...SHIRT[Math.floor(R() * SHIRT.length)]), pa = srgb(...PANTS[Math.floor(R() * PANTS.length)]), sk = srgb(...SKIN[Math.floor(R() * SKIN.length)]);
      shirt.set(s, i * 3); pants.set(pa, i * 3); misc.set([...sk, p.kind === 'stand' ? 0 : p.speed / 1.25], i * 4); phase[i] = p.phase;
      p.scale = 0.92 + R() * 0.16;
    });
    geo.setAttribute('iShirt', new THREE.InstancedBufferAttribute(shirt, 3));
    geo.setAttribute('iPants', new THREE.InstancedBufferAttribute(pants, 3));
    this.misc = new THREE.InstancedBufferAttribute(misc, 4);
    geo.setAttribute('iMisc', this.misc);
    geo.setAttribute('iPhase', new THREE.InstancedBufferAttribute(phase, 1));
    this.mesh = new THREE.InstancedMesh(geo, personMaterial(day.uniforms.uTime), n);
    this.mesh.name = 'pessoas';
    this.mesh.castShadow = Q !== 'low'; this.mesh.receiveShadow = true;
    this.mesh.frustumCulled = false;
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    scene.add(this.mesh);
    this.M = new THREE.Matrix4(); this.q = new THREE.Quaternion(); this.v = new THREE.Vector3(); this.s = new THREE.Vector3(); this.up = new THREE.Vector3(0, 1, 0);
  }

  _plazaPoint(p, poly) {
    if (!poly.length) { p.tx = p.x; p.tz = p.z; return; }
    let x0 = 1e9, z0 = 1e9, x1 = -1e9, z1 = -1e9;
    for (const [x, z] of poly) { x0 = Math.min(x0, x); z0 = Math.min(z0, z); x1 = Math.max(x1, x); z1 = Math.max(z1, z); }
    for (let k = 0; k < 30; k++) {
      const x = x0 + this.R() * (x1 - x0), z = z0 + this.R() * (z1 - z0);
      let c = false; for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) if ((poly[i][1] > z) !== (poly[j][1] > z) && x < (poly[j][0] - poly[i][0]) * (z - poly[i][1]) / (poly[j][1] - poly[i][1]) + poly[i][0]) c = !c;
      if (c) { p.tx = x; p.tz = z; return; }
    }
    p.tx = (x0 + x1) / 2; p.tz = (z0 + z1) / 2;
  }

  _lanePos(l, s, out) {
    const pts = l.pts, cum = l.cum;
    let i = 1; while (i < cum.length - 1 && cum[i] < s) i++;
    const t = (s - cum[i - 1]) / ((cum[i] - cum[i - 1]) || 1);
    const [ax, az] = pts[i - 1], [bx, bz] = pts[i];
    const L = Math.hypot(bx - ax, bz - az) || 1, ux = (bx - ax) / L, uz = (bz - az) / L;
    out.x = ax + (bx - ax) * t - uz * l.off; out.z = az + (bz - az) * t + ux * l.off; out.ux = ux; out.uz = uz;
    return out;
  }

  update(dt, hours, camera) {
    if (!this.mesh.visible) return;
    const life = streetLife(hours);
    const { M, q, v, s, up } = this;
    const tmp = {};
    const evening = hours > 18 && hours < 23.5;
    const zero = this.zero || (this.zero = new THREE.Matrix4().makeScale(0, 0, 0));
    for (let k = 0; k < this.people.length; k++) {
      const p = this.people[k];
      let active;
      if (p.kind === 'stand') active = p.evening ? evening && p.rank < 0.9 : p.rank < life * 0.9 && hours > 7 && hours < 19;
      else active = p.rank < life;
      if (!active) { this.mesh.setMatrixAt(k, zero); continue; }
      if (p.kind === 'walk') {
        if (p.wait > 0) p.wait -= dt;
        else {
          p.s += p.dir * p.speed * dt;
          if (p.s < 0 || p.s > p.lane.L) { p.dir = -p.dir; p.s = Math.max(0, Math.min(p.lane.L, p.s)); p.wait = hash(p.phase * 9 + p.s) * 4; }
        }
        this._lanePos(p.lane, p.s, tmp);
        p.x = tmp.x; p.z = tmp.z;
        p.yaw = Math.atan2(tmp.ux * p.dir, tmp.uz * p.dir);
      } else if (p.kind === 'plaza') {
        const dx = p.tx - p.x, dz = p.tz - p.z, d = Math.hypot(dx, dz);
        if (p.wait > 0) p.wait -= dt;
        else if (d < 0.5) { p.wait = 2 + hash(p.phase + p.x) * 12; this._plazaPoint(p, p.plaza); }
        else { const st = Math.min(d, p.speed * 0.8 * dt); p.x += dx / d * st; p.z += dz / d * st; p.yaw = Math.atan2(dx, dz); }
      }
      q.setFromAxisAngle(up, p.yaw);
      v.set(p.x, this.T.at(p.x, p.z) + (p.kind === 'walk' ? 0.22 : 0.15), p.z);
      s.setScalar(p.scale);
      M.compose(v, q, s);
      this.mesh.setMatrixAt(k, M);
      // walking animation only while moving
      const moving = p.kind !== 'stand' && !(p.wait > 0);
      this.misc.array[k * 4 + 3] = moving ? p.speed / 1.25 : 0;
    }
    this.mesh.instanceMatrix.needsUpdate = true;
    this.misc.needsUpdate = true;
  }
}
