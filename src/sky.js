// Sky dome, sun & moon positions for Aimorés, lighting through the day and night, stars, clouds.
import * as THREE from 'three';
import { clamp, smoothstep, lerp } from './util.js';

const LAT = -19.495, LON = -41.0531, TZ_MERIDIAN = -45; // BRT = UTC-3
const D2R = Math.PI / 180;

/** Sun elevation/azimuth (radians) for a clock time in Aimorés (BRT) on day-of-year N. */
export function solarPosition(hours, N) {
  const B = 2 * Math.PI * (N - 81) / 365;
  const eot = 9.87 * Math.sin(2 * B) - 7.53 * Math.cos(B) - 1.5 * Math.sin(B);
  const decl = 23.45 * D2R * Math.sin(2 * Math.PI * (284 + N) / 365);
  const lst = hours + (4 * (LON - TZ_MERIDIAN) + eot) / 60;
  const H = 15 * D2R * (lst - 12);
  const phi = LAT * D2R;
  const el = Math.asin(Math.sin(phi) * Math.sin(decl) + Math.cos(phi) * Math.cos(decl) * Math.cos(H));
  const az = Math.atan2(-Math.sin(H), Math.tan(decl) * Math.cos(phi) - Math.sin(phi) * Math.cos(H));
  return { el, az, decl, H };
}
/** World direction (x = east, y = up, z = south). */
export function dirFrom(el, az, out = new THREE.Vector3()) {
  return out.set(Math.cos(el) * Math.sin(az), Math.sin(el), -Math.cos(el) * Math.cos(az));
}
export function dayOfYear(d = new Date()) {
  return Math.floor((Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) - Date.UTC(d.getFullYear(), 0, 0)) / 864e5);
}
/** Current clock time in Brasília (decimal hours). */
export function brasiliaNow() {
  const d = new Date();
  const utc = d.getUTCHours() + d.getUTCMinutes() / 60 + d.getUTCSeconds() / 3600;
  return (utc - 3 + 24) % 24;
}
/** Moon phase 0..1 (0 = new, 0.5 = full). */
export function moonPhase(d = new Date()) {
  const ref = Date.UTC(2000, 0, 6, 18, 14);
  return (((d.getTime() - ref) / 864e5 / 29.530588) % 1 + 1) % 1;
}

const skyVert = /* glsl */`
varying vec3 vDir;
void main() {
  vDir = normalize((modelMatrix * vec4(position, 0.0)).xyz);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;
const skyFrag = /* glsl */`
uniform vec3 zenith, horizon, sunDir, moonDir, sunCol, cloudCol, glowCol;
uniform float night, time, clouds, moonPhase, sunVis;
varying vec3 vDir;
float h31(vec3 p){ return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
float h21(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3. - 2. * f);
  return mix(mix(h21(i), h21(i + vec2(1, 0)), f.x), mix(h21(i + vec2(0, 1)), h21(i + vec2(1, 1)), f.x), f.y); }
float fbm(vec2 p){ float a = .5, s = 0.; for (int i = 0; i < 5; i++) { s += a * vn(p); p = p * 2.03 + vec2(17.1, 9.3); a *= .5; } return s; }
void main() {
  vec3 d = normalize(vDir);
  float h = max(d.y, 0.0);
  vec3 col = mix(horizon, zenith, pow(h, 0.45));
  // haze band just above the horizon
  col = mix(col, horizon * 1.06, exp(-h * 24.0) * 0.55);
  // sunrise / sunset glow around the sun azimuth
  float sd = max(dot(d, sunDir), 0.0);
  float glow = pow(max(dot(normalize(vec3(d.x, 0.0, d.z)), normalize(vec3(sunDir.x, 0.0, sunDir.z))), 0.0), 3.0);
  col += glowCol * glow * exp(-h * 5.0);
  col += sunCol * (pow(sd, 6.0) * 0.18 + pow(sd, 90.0) * 0.6) * sunVis;
  col += sunCol * smoothstep(0.99955, 0.99975, sd) * 18.0 * sunVis;
  // stars
  if (night > 0.01 && d.y > 0.0) {
    vec3 s = d * 260.0;
    vec3 cell = floor(s);
    float r = h31(cell);
    vec3 off = vec3(h31(cell + 1.7), h31(cell + 5.3), h31(cell + 9.1)) * 0.6 + 0.2;
    float tw = 0.65 + 0.35 * sin(time * 2.3 + r * 40.0);
    float star = step(0.985, r) * tw * smoothstep(0.0, 0.25, d.y) * (0.4 + 0.6 * fract(r * 91.0));
    star *= smoothstep(0.22, 0.0, length(fract(s) - off));
    col += vec3(0.9, 0.95, 1.0) * star * night * 1.6;
    // faint milky way band
    float band = exp(-pow(dot(d, normalize(vec3(0.35, 0.25, 0.9))), 2.0) * 18.0);
    col += vec3(0.05, 0.06, 0.09) * band * fbm(d.xz * 9.0) * night;
  }
  // moon
  float md = dot(d, moonDir);
  if (md > 0.9985) {
    vec3 mu = normalize(cross(moonDir, vec3(0.0, 1.0, 0.0)));
    vec3 mv = cross(mu, moonDir);
    vec2 q = vec2(dot(d - moonDir, mu), dot(d - moonDir, mv)) / 0.0105;
    float disk = smoothstep(1.0, 0.92, length(q));
    float ph = cos(moonPhase * 6.2832);
    float lit = smoothstep(-0.08, 0.08, (q.x - ph * sqrt(max(0.0, 1.0 - q.y * q.y))) * sign(0.5 - moonPhase));
    float mare = 0.82 + 0.18 * fbm(q * 3.0 + 4.0);
    col = mix(col, vec3(0.95, 0.93, 0.86) * mare * (0.15 + 0.85 * lit) * (0.35 + 0.65 * night), disk * smoothstep(-0.02, 0.05, moonDir.y));
  }
  col += vec3(0.6, 0.65, 0.75) * pow(max(md, 0.0), 60.0) * 0.08 * night;
  // clouds
  if (clouds > 0.5 && d.y > 0.005) {
    vec2 uv = d.xz / (d.y + 0.12) * 1.4 + vec2(time * 0.004, time * 0.0015);
    float n = fbm(uv + vec2(3.0, 1.0));
    float c = smoothstep(0.55, 0.8, n) * smoothstep(0.005, 0.14, d.y);
    float sh = fbm(uv * 1.04 + sunDir.xz * 0.06 + vec2(3.0, 1.0));
    vec3 cc = mix(cloudCol, cloudCol * 0.62, smoothstep(0.55, 0.85, sh));
    cc += glowCol * 0.6 * glow * (1.0 - h);
    col = mix(col, cc, c * 0.88);
  }
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;

export class DayCycle {
  constructor({ scene, renderer, quality }) {
    this.scene = scene;
    this.renderer = renderer;
    this.Q = quality;
    this.N = dayOfYear();
    this.phase = moonPhase();
    this.hours = 12;
    this.sunDir = new THREE.Vector3();
    this.moonDir = new THREE.Vector3();
    this.lightDir = new THREE.Vector3();
    this.night = 0;
    this.listeners = [];
    // shared uniforms other materials can read (lamps, windows, water…)
    this.uniforms = {
      uNight: { value: 0 }, uTime: { value: 0 }, uSunDir: { value: this.sunDir }, uSunCol: { value: new THREE.Color() },
      uZenith: { value: new THREE.Color() }, uHorizon: { value: new THREE.Color() }, uLampsOn: { value: 0 },
    };
    const skyMat = new THREE.ShaderMaterial({
      vertexShader: skyVert, fragmentShader: skyFrag, side: THREE.BackSide, depthWrite: false, fog: false,
      uniforms: {
        zenith: this.uniforms.uZenith, horizon: this.uniforms.uHorizon, sunDir: { value: this.sunDir }, moonDir: { value: this.moonDir },
        sunCol: this.uniforms.uSunCol, cloudCol: { value: new THREE.Color() }, glowCol: { value: new THREE.Color() },
        night: this.uniforms.uNight, time: this.uniforms.uTime, clouds: { value: quality === 'low' ? 0 : 1 },
        moonPhase: { value: this.phase }, sunVis: { value: 1 },
      },
    });
    this.skyMat = skyMat;
    this.dome = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 16), skyMat);
    this.dome.scale.setScalar(30000);
    this.dome.frustumCulled = false;
    this.dome.renderOrder = -10;
    this.dome.name = 'ceu';
    scene.add(this.dome);

    this.sun = new THREE.DirectionalLight(0xffffff, 2.5);
    this.sun.castShadow = quality !== 'low';
    const sm = { low: 1024, medium: 2048, high: 4096, ultra: 4096 }[quality];
    this.sun.shadow.mapSize.set(sm, sm);
    this.sun.shadow.bias = -0.0004;
    this.sun.shadow.normalBias = 0.6;
    scene.add(this.sun, this.sun.target);
    this.hemi = new THREE.HemisphereLight(0xcfe3ff, 0x6b5a40, 0.9);
    scene.add(this.hemi);
    scene.fog = new THREE.Fog(0xc9d6e2, 2200, 24000);

    // environment map from a small sky-only scene (reflections on cars, glass, water)
    this.useEnv = quality !== 'low';
    if (this.useEnv) {
      this.pmrem = new THREE.PMREMGenerator(renderer);
      this.envScene = new THREE.Scene();
      const envDome = new THREE.Mesh(new THREE.SphereGeometry(1, 24, 12), skyMat);
      envDome.scale.setScalar(100);
      this.envScene.add(envDome);
      this.envRT = null;
      this.envHours = -99;
    }
  }

  onChange(fn) { this.listeners.push(fn); }

  setTime(hours) {
    this.hours = ((hours % 24) + 24) % 24;
    const { el, az, decl, H } = solarPosition(this.hours, this.N);
    dirFrom(el, az, this.sunDir);
    // moon: lags the sun by phase * 24 h; similar declination band
    const mh = H - this.phase * 2 * Math.PI, phi = LAT * D2R, md = -decl * 0.9;
    const mel = Math.asin(Math.sin(phi) * Math.sin(md) + Math.cos(phi) * Math.cos(md) * Math.cos(mh));
    const maz = Math.atan2(-Math.sin(mh), Math.tan(md) * Math.cos(phi) - Math.sin(phi) * Math.cos(mh));
    dirFrom(mel, maz, this.moonDir);
    this.elev = el / D2R;
    this.moonElev = mel / D2R;
    const e = this.elev;
    const day = smoothstep(-6, 8, e);          // 0 night .. 1 day
    const golden = smoothstep(-4, 3, e) * (1 - smoothstep(4, 22, e)); // sunrise/sunset
    this.night = 1 - smoothstep(-9, 1, e);
    const U = this.uniforms;
    U.uNight.value = this.night;
    U.uLampsOn.value = e < -1.5 ? 1 : 0;

    // sky colours
    const zDay = new THREE.Color(0.16, 0.38, 0.78), hDay = new THREE.Color(0.66, 0.78, 0.92);
    const zSet = new THREE.Color(0.13, 0.2, 0.42), hSet = new THREE.Color(0.96, 0.6, 0.38);
    const zNight = new THREE.Color(0.004, 0.007, 0.02), hNight = new THREE.Color(0.018, 0.026, 0.05);
    const zen = zNight.clone().lerp(zDay, day).lerp(zSet, golden * 0.55);
    const hor = hNight.clone().lerp(hDay, day).lerp(hSet, golden * 0.75);
    U.uZenith.value.copy(zen);
    U.uHorizon.value.copy(hor);
    const sunCol = new THREE.Color(1, lerp(0.55, 0.95, smoothstep(0, 30, e)), lerp(0.3, 0.88, smoothstep(0, 35, e)));
    U.uSunCol.value.copy(sunCol);
    this.skyMat.uniforms.sunVis.value = smoothstep(-2, 1, e);
    this.skyMat.uniforms.glowCol.value.setRGB(1.0, 0.45, 0.2).multiplyScalar(golden * 0.55);
    this.skyMat.uniforms.cloudCol.value.setRGB(0.96, 0.96, 1.0).multiplyScalar(0.06 + 0.94 * day).lerp(new THREE.Color(1, 0.7, 0.55), golden * 0.5);

    // lights: sun by day, moon by night
    const moonUp = smoothstep(-2, 8, this.moonElev);
    const moonLight = 0.25 * moonUp * (0.3 + 0.7 * Math.sin(this.phase * Math.PI));
    if (e > -2) {
      this.lightDir.copy(this.sunDir);
      this.sun.color.copy(sunCol);
      this.sun.intensity = 2.6 * smoothstep(-2, 12, e) * (0.55 + 0.45 * smoothstep(5, 40, e));
    } else {
      this.lightDir.copy(this.moonElev > 2 ? this.moonDir : new THREE.Vector3(0.3, 0.8, 0.2).normalize());
      this.sun.color.setRGB(0.6, 0.7, 1.0);
      this.sun.intensity = Math.max(0.04, moonLight);
    }
    this.hemi.color.copy(zen).lerp(new THREE.Color(0.8, 0.88, 1), 0.45 * day).lerp(new THREE.Color(0.25, 0.32, 0.55), this.night * 0.6);
    this.hemi.groundColor.setRGB(0.42, 0.36, 0.26).multiplyScalar(0.25 + 0.75 * day);
    this.hemi.intensity = lerp(0.25, 1.1, day);
    this.scene.fog.color.copy(hor);
    this.renderer.toneMappingExposure = lerp(1.1, 0.68, day);
    if (this.useEnv && Math.abs(this.hours - this.envHours) > 0.15 && Math.abs(this.hours - this.envHours) < 23.85) this._updateEnv();
    for (const f of this.listeners) f(this);
  }

  _updateEnv() {
    this.envHours = this.hours;
    if (this.envRT) this.envRT.dispose();
    this.envRT = this.pmrem.fromScene(this.envScene, 0, 1, 1000);
    this.scene.environment = this.envRT.texture;
    this.scene.environmentIntensity = lerp(0.15, 1.0, smoothstep(-6, 10, this.elev));
  }

  /** Per-frame: keep the dome on the camera and fit the shadow frustum around the view target. */
  update(dt, camera, target) {
    this.uniforms.uTime.value += dt;
    this.dome.position.copy(camera.position);
    const dist = camera.position.distanceTo(target);
    const R = clamp(dist * 1.25, 120, 1600);
    const sc = this.sun.shadow.camera;
    if (sc.right !== R) {
      sc.left = -R; sc.right = R; sc.top = R; sc.bottom = -R; sc.near = 1; sc.far = 6000;
      sc.updateProjectionMatrix();
    }
    this.sun.target.position.copy(target);
    this.sun.position.copy(target).addScaledVector(this.lightDir, 3000);
    this.shadowRadius = R;
  }
}
