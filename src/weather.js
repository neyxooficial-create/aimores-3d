// Tempo: sol, nublado, chuva e neblina. "Automático" deixa um pouco de neblina no começo da
// manhã sobre o vale do Rio Doce, como costuma acontecer em Aimorés.
import * as THREE from 'three';
import { smoothstep, lerp } from './util.js';

const PRESET = {
  sol: { cover: 0.0, rain: 0, fogNear: 2200, fogFar: 24000, light: 1 },
  nublado: { cover: 0.85, rain: 0, fogNear: 900, fogFar: 9000, light: 0.45 },
  chuva: { cover: 1.0, rain: 1, fogNear: 120, fogFar: 2600, light: 0.32 },
  neblina: { cover: 0.55, rain: 0, fogNear: 15, fogFar: 380, light: 0.55 },
};

export class Weather {
  constructor({ scene, day, renderer, Q }) {
    this.scene = scene; this.day = day; this.mode = 'auto';
    this.cur = { ...PRESET.sol };
    this.wetMats = [];
    // rain streaks: instanced quads wrapped around the camera in the vertex shader
    const N = { low: 1500, medium: 3000, high: 5000, ultra: 7000 }[Q];
    const geo = new THREE.PlaneGeometry(0.018, 0.75);
    const offs = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) { offs[i * 3] = Math.random() * 80; offs[i * 3 + 1] = Math.random() * 40; offs[i * 3 + 2] = Math.random() * 80; }
    const ig = new THREE.InstancedBufferGeometry().copy(geo);
    ig.instanceCount = N;
    ig.setAttribute('off', new THREE.InstancedBufferAttribute(offs, 3));
    this.rainU = { uTime: day.uniforms.uTime, uCam: { value: new THREE.Vector3() }, uAmt: { value: 0 }, uNight: day.uniforms.uNight };
    const mat = new THREE.ShaderMaterial({
      uniforms: this.rainU, transparent: true, depthWrite: false,
      vertexShader: /* glsl */`
        attribute vec3 off; uniform float uTime; uniform vec3 uCam; uniform float uAmt;
        varying float vA;
        void main() {
          float R = 40.0, H = 40.0;
          vec3 w;
          w.x = uCam.x + mod(off.x - uCam.x, 2.0 * R) - R;
          w.z = uCam.z + mod(off.z - uCam.z, 2.0 * R) - R;
          w.y = uCam.y + H * 0.5 - mod(off.y + uTime * 11.0, H);
          // face the camera around the vertical axis, slight wind slant
          vec3 toC = normalize(vec3(uCam.x - w.x, 0.0, uCam.z - w.z));
          vec3 right = vec3(toC.z, 0.0, -toC.x);
          w += right * position.x + vec3(0.06, 1.0, 0.0) * position.y;
          vA = uAmt * step(fract(off.x * 7.13 + off.z * 3.7), uAmt) * smoothstep(R, R * 0.4, length(w.xz - uCam.xz));
          gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0);
        }`,
      fragmentShader: /* glsl */`
        varying float vA; uniform float uNight;
        void main() { if (vA < 0.01) discard; gl_FragColor = vec4(vec3(0.75, 0.8, 0.88) * (1.0 - 0.7 * uNight), 0.35 * vA); }`,
    });
    this.rain = new THREE.Mesh(ig, mat);
    this.rain.frustumCulled = false;
    this.rain.renderOrder = 10;
    this.rain.visible = false;
    scene.add(this.rain);
  }

  /** materials that get glossy when it rains (streets, sidewalks, roofs...) */
  addWet(mats) { for (const m of mats) if (m && m.roughness !== undefined) this.wetMats.push({ m, r: m.roughness, c: m.color ? m.color.clone() : null }); }

  set(mode) { this.mode = mode; }

  target(hours) {
    if (this.mode !== 'auto') return PRESET[this.mode] || PRESET.sol;
    // automatic: early-morning valley mist, clearing by ~8h30
    const mist = smoothstep(4.5, 6.2, hours) * (1 - smoothstep(7.2, 8.6, hours));
    const p = PRESET.sol, n = PRESET.neblina;
    return { cover: lerp(p.cover, 0.3, mist), rain: 0, fogNear: lerp(p.fogNear, 60, mist), fogFar: lerp(p.fogFar, 900, mist), light: lerp(1, 0.8, mist) };
  }

  update(dt, camera, hours, viewDist = 100) {
    const t = this.target(hours), c = this.cur, k = Math.min(1, dt * 0.8);
    for (const key of ['cover', 'rain', 'fogNear', 'fogFar', 'light']) c[key] += (t[key] - c[key]) * k;
    const d = this.day;
    d.skyMat.uniforms.cover.value = c.cover;
    d.sun.intensity = (d.sunBase ?? d.sun.intensity) * c.light;
    d.hemi.intensity = (d.hemiBase ?? d.hemi.intensity) * lerp(1, 0.85, c.cover);
    const f = this.scene.fog;
    // mist hangs low: looking from far above still shows the city through it
    const k2 = this.mode === 'neblina' || this.mode === 'chuva' ? 0.55 : 1.5;
    f.far = Math.max(c.fogFar, viewDist * k2);
    f.near = Math.max(c.fogNear, f.far * (c.fogNear / c.fogFar));
    // fog colour: greyer under clouds / rain, whitish in mist
    if (c.cover > 0.02) f.color.lerp(new THREE.Color(0.62, 0.65, 0.68).multiplyScalar(0.25 + 0.75 * (1 - d.night)), c.cover * 0.6);
    this.rain.visible = c.rain > 0.02;
    this.rainU.uAmt.value = c.rain;
    this.rainU.uCam.value.copy(camera.position);
    for (const w of this.wetMats) { w.m.roughness = lerp(w.r, Math.min(w.r, 0.25), c.rain); if (w.c) w.m.color.copy(w.c).multiplyScalar(lerp(1, 0.72, c.rain)); }
    return c;
  }
}
