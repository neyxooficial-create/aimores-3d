// Modos "Passeio a pé" e "Dirigir": primeira pessoa / carro, com colisão com casas e muros,
// relevo, viadutos, quebra-molas, faróis à noite, buzina, som de motor e passos, HUD com
// velocímetro, rua atual e horário. Teclado + mouse no computador, botões na tela no celular.
import * as THREE from 'three';
import { SpatialGrid, segDist } from './util.js';
import { carGeo } from './traffic.js';

const EYE = 1.65, RADIUS = 0.35;
const CAR = { len: 4.1, wid: 1.75, wheelBase: 2.5, maxSpeed: 22, maxRev: 5, accel: 3.2, brake: 8, drag: 0.35, steerMax: 0.55 };

export class Explore {
  constructor({ scene, camera, controls, renderer, T, city, groundAt, sound, streets, day, dom }) {
    Object.assign(this, { scene, camera, controls, renderer, T, city, groundAt, sound, streets, day, dom });
    this.mode = null;
    this.keys = new Set();
    this.yaw = 0; this.pitch = 0;
    this.pos = new THREE.Vector3();
    this.vel = new THREE.Vector3();
    this.bob = 0; this.stepAcc = 0;
    // ---------------------------------------------------- collision: buildings + walls
    this.grid = new SpatialGrid(20);
    for (const b of city.buildings) {
      const p = b.p;
      for (let i = 0; i < p.length; i++) {
        const a = p[i], c = p[(i + 1) % p.length];
        this.grid.add({ ax: a[0], az: a[1], bx: c[0], bz: c[1], poly: p }, Math.min(a[0], c[0]), Math.min(a[1], c[1]), Math.max(a[0], c[0]), Math.max(a[1], c[1]));
      }
    }
    for (const w of city.walls) this.grid.add({ ax: w[0], az: w[1], bx: w[2], bz: w[3], wall: true }, Math.min(w[0], w[2]), Math.min(w[1], w[3]), Math.max(w[0], w[2]), Math.max(w[1], w[3]));
    // ---------------------------------------------------- player car
    this.car = null;
    this.headlight = null;
    this._bindInput();
  }

  // ======================================================================== enter / exit
  enter(mode) {
    if (this.mode) this.exit(true);
    this.mode = mode;
    this.controls.enabled = false;
    // start where the user is looking: the orbit target, moved to the nearest free spot on a street
    const t = this.controls.target;
    const start = this._nearestStreet(t.x, t.z, mode === 'walk');
    this.pos.set(start.x, 0, start.z);
    this.pos.y = this.groundAt(start.x, start.z);
    this.yaw = start.yaw;
    this.pitch = mode === 'walk' ? -0.05 : 0;
    this.speed = 0; this.steer = 0; this.vy = 0;
    if (mode === 'drive') this._makeCar();
    this.dom.hud.classList.add('show');
    this.dom.hud.dataset.mode = mode;
    document.body.classList.add('exploring');
    document.body.dataset.xmode = mode;
    this.camDist = 6.5; this.camView = 0;
    if (this.sound && this.sound.ctx && mode === 'drive') this.engine = this.sound.engine();
    this._updateHud(true);
  }
  exit(silent) {
    if (!this.mode) return;
    if (this.car) { this.scene.remove(this.car); this.car = null; }
    if (this.engine) { this.engine.stop(); this.engine = null; }
    this.mode = null;
    this.controls.enabled = true;
    // hand the camera back to the map controls a bit above
    const p = this.camera.position.clone();
    const dir = new THREE.Vector3(Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    this.controls.target.set(p.x + dir.x * 25, this.T.at(p.x + dir.x * 25, p.z + dir.z * 25), p.z + dir.z * 25);
    this.camera.position.set(p.x - dir.x * 30, p.y + 25, p.z - dir.z * 30);
    this.controls.update();
    this.dom.hud.classList.remove('show');
    document.body.classList.remove('exploring');
    if (document.pointerLockElement) document.exitPointerLock();
    if (!silent && this.onExit) this.onExit();
  }

  _nearestStreet(x, z, sidewalk) {
    let best = null;
    for (const r of this.city.roads) {
      if (['footway', 'path'].includes(r.hw) || r.b) continue;
      for (let i = 0; i < r.p.length - 1; i++) {
        const q = segDist(x, z, r.p[i][0], r.p[i][1], r.p[i + 1][0], r.p[i + 1][1]);
        if (!best || q.d < best.d) {
          const dx = r.p[i + 1][0] - r.p[i][0], dz = r.p[i + 1][1] - r.p[i][1], l = Math.hypot(dx, dz) || 1;
          best = { d: q.d, x: q.px, z: q.pz, ux: dx / l, uz: dz / l, w: r.w || 7 };
        }
      }
    }
    if (!best) return { x, z, yaw: 0 };
    // walking: on the right-hand sidewalk; driving: right lane
    const off = sidewalk ? best.w / 2 + 1.1 : Math.min(1.8, best.w / 4);
    const nx = -best.uz, nz = best.ux;
    const px = best.x - nx * off, pz = best.z - nz * off;
    return { x: px, z: pz, yaw: Math.atan2(best.ux, -best.uz) };
  }

  _makeCar() {
    const geo = carGeo('hatch');
    const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.35, metalness: 0.45, side: THREE.DoubleSide });
    mat.onBeforeCompile = sh => {
      sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nattribute float part;\nvarying float vPart;')
        .replace('#include <color_vertex>', '#include <color_vertex>\n vPart = part;\n#ifdef USE_COLOR\n if (part > 0.5 && part < 1.5) vColor.rgb *= vec3(0.62, 0.05, 0.06);\n#endif');
      sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying float vPart;\nuniform float uLights;')
        .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\n if (vPart > 1.5) totalEmissiveRadiance += mix(vec3(1.5,0.05,0.03), vec3(2.6,2.5,2.2), step(vPart, 2.5)) * uLights;');
      sh.uniforms.uLights = this.lightsU;
    };
    mat.customProgramCacheKey = () => 'playercar';
    this.lightsU = { value: 0 };
    this.car = new THREE.Group();
    const body = new THREE.Mesh(geo, mat);
    body.castShadow = true;
    // the vehicle geometry points +x; our car's forward is -z (yaw 0 = north)
    body.rotation.y = Math.PI / 2;
    this.car.add(body);
    this.body = body;
    // headlights (one spot light, shadows off for speed)
    const hl = new THREE.SpotLight(0xfff2d8, 0, 60, 0.5, 0.45, 1.2);
    hl.position.set(0, 0.8, -2.0);
    const tgt = new THREE.Object3D(); tgt.position.set(0, 0, -20);
    this.car.add(hl, tgt); hl.target = tgt;
    this.headlight = hl;
    this.scene.add(this.car);
  }

  // ======================================================================== input
  _bindInput() {
    const down = e => {
      if (!this.mode) return;
      if (e.target && /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
      this.keys.add(e.code);
      if (e.code === 'Escape') this.exit();
      if (e.code === 'KeyH' && this.mode === 'drive' && this.sound) this.sound.carHorn(this.pos.x, this.pos.y + 1, this.pos.z);
      if (e.code === 'KeyC' && this.mode === 'drive') this.camView = (this.camView + 1) % 3;
      if (e.code === 'KeyL' && this.mode === 'drive') this.lightsForced = !this.lightsForced;
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) e.preventDefault();
    };
    addEventListener('keydown', down);
    addEventListener('keyup', e => this.keys.delete(e.code));
    addEventListener('blur', () => this.keys.clear());
    // mouse look: drag (or pointer lock after a click in walk mode)
    const el = this.renderer.domElement;
    let dragging = false, lx = 0, ly = 0;
    el.addEventListener('pointerdown', e => {
      if (!this.mode) return;
      if (e.pointerType === 'touch') return; // touch handled by the on-screen pad
      dragging = true; lx = e.clientX; ly = e.clientY;
      if (this.mode === 'walk' && el.requestPointerLock && !document.pointerLockElement) el.requestPointerLock();
    });
    addEventListener('pointerup', () => { dragging = false; });
    addEventListener('pointermove', e => {
      if (!this.mode) return;
      let dx = 0, dy = 0;
      if (document.pointerLockElement === el) { dx = e.movementX; dy = e.movementY; }
      else if (dragging) { dx = e.clientX - lx; dy = e.clientY - ly; lx = e.clientX; ly = e.clientY; }
      else return;
      this.yaw += dx * 0.0032; this.pitch = Math.max(-1.3, Math.min(1.2, this.pitch - dy * 0.0028));
      if (this.mode === 'drive') this.lookYaw = Math.max(-2.5, Math.min(2.5, (this.lookYaw || 0) + dx * 0.004));
    });
    el.addEventListener('wheel', e => { if (this.mode === 'drive') { this.camDist = Math.max(3.5, Math.min(18, this.camDist * (e.deltaY > 0 ? 1.1 : 0.9))); e.preventDefault(); } }, { passive: false });
    // touch: on-screen joystick (left) + look area (right)
    this.touch = { mx: 0, my: 0 };
    const pad = this.dom.pad, stick = this.dom.stick;
    if (pad) {
      let id = null, cx = 0, cy = 0;
      pad.addEventListener('pointerdown', e => { id = e.pointerId; const r = pad.getBoundingClientRect(); cx = r.left + r.width / 2; cy = r.top + r.height / 2; pad.setPointerCapture(id); move(e); });
      const move = e => {
        if (e.pointerId !== id) return;
        const dx = e.clientX - cx, dy = e.clientY - cy, l = Math.min(50, Math.hypot(dx, dy)), a = Math.atan2(dy, dx);
        this.touch.mx = Math.cos(a) * l / 50; this.touch.my = Math.sin(a) * l / 50;
        stick.style.transform = `translate(${Math.cos(a) * l}px, ${Math.sin(a) * l}px)`;
      };
      pad.addEventListener('pointermove', move);
      const end = e => { if (e.pointerId !== id) return; id = null; this.touch.mx = this.touch.my = 0; stick.style.transform = ''; };
      pad.addEventListener('pointerup', end); pad.addEventListener('pointercancel', end);
    }
    const look = this.dom.look;
    if (look) {
      let id = null, lx2 = 0, ly2 = 0;
      look.addEventListener('pointerdown', e => { id = e.pointerId; lx2 = e.clientX; ly2 = e.clientY; look.setPointerCapture(id); });
      look.addEventListener('pointermove', e => {
        if (e.pointerId !== id) return;
        const dx = e.clientX - lx2, dy = e.clientY - ly2; lx2 = e.clientX; ly2 = e.clientY;
        this.yaw += dx * 0.006; this.pitch = Math.max(-1.3, Math.min(1.2, this.pitch - dy * 0.005));
        if (this.mode === 'drive') this.lookYaw = Math.max(-2.5, Math.min(2.5, (this.lookYaw || 0) + dx * 0.006));
      });
      const end = e => { if (e.pointerId === id) id = null; };
      look.addEventListener('pointerup', end); look.addEventListener('pointercancel', end);
    }
    for (const [btn, code] of [['bGas', 'ArrowUp'], ['bBrake', 'ArrowDown'], ['bLeft', 'ArrowLeft'], ['bRight', 'ArrowRight'], ['bRun', 'ShiftLeft']]) {
      const b = this.dom[btn]; if (!b) continue;
      b.addEventListener('pointerdown', e => { e.preventDefault(); this.keys.add(code); b.setPointerCapture(e.pointerId); });
      const up = () => this.keys.delete(code);
      b.addEventListener('pointerup', up); b.addEventListener('pointercancel', up);
    }
    if (this.dom.bHorn) this.dom.bHorn.onclick = () => this.sound && this.sound.carHorn(this.pos.x, this.pos.y + 1, this.pos.z);
    if (this.dom.bCam) this.dom.bCam.onclick = () => { this.camView = (this.camView + 1) % 3; };
    if (this.dom.bExit) this.dom.bExit.onclick = () => this.exit();
  }

  // ======================================================================== collision
  /** push a circle (x,z,r) out of buildings and walls; returns corrected [x,z,hit] */
  _collide(x, z, r) {
    let hit = false;
    for (let it = 0; it < 3; it++) {
      let moved = false;
      for (const s of this.grid.query(x, z, r + 1)) {
        const q = segDist(x, z, s.ax, s.az, s.bx, s.bz);
        const lim = r + (s.wall ? 0.12 : 0.02);
        if (q.d < lim) {
          const nx = (x - q.px) / (q.d || 1), nz = (z - q.pz) / (q.d || 1);
          x = q.px + nx * lim; z = q.pz + nz * lim; moved = hit = true;
        }
      }
      if (!moved) break;
    }
    // fully inside a building (spawned or tunnelled): push out through the nearest edge
    for (const s of this.grid.query(x, z, 0.5)) {
      if (!s.poly) continue;
      if (inPoly(x, z, s.poly)) {
        let best = null;
        for (let i = 0; i < s.poly.length; i++) { const a = s.poly[i], c = s.poly[(i + 1) % s.poly.length]; const q = segDist(x, z, a[0], a[1], c[0], c[1]); if (!best || q.d < best.d) best = q; }
        const dx = best.px - x, dz = best.pz - z, l = Math.hypot(dx, dz) || 1;
        x = best.px + dx / l * (r + 0.05); z = best.pz + dz / l * (r + 0.05); hit = true;
        break;
      }
    }
    return [x, z, hit];
  }

  // ======================================================================== update
  update(dt) {
    if (!this.mode) return;
    const k = this.keys, tch = this.touch;
    if (this.mode === 'walk') {
      const run = k.has('ShiftLeft') || k.has('ShiftRight');
      const sp = run ? 5.2 : 1.6; // m/s
      let f = (k.has('KeyW') || k.has('ArrowUp') ? 1 : 0) - (k.has('KeyS') || k.has('ArrowDown') ? 1 : 0) - tch.my;
      let s = (k.has('KeyD') ? 1 : 0) - (k.has('KeyA') ? 1 : 0) + tch.mx;
      if (k.has('ArrowLeft')) this.yaw -= 1.8 * dt; if (k.has('ArrowRight')) this.yaw += 1.8 * dt;
      const l = Math.hypot(f, s); if (l > 1) { f /= l; s /= l; }
      const fx = Math.sin(this.yaw), fz = -Math.cos(this.yaw), rx = Math.cos(this.yaw), rz = Math.sin(this.yaw);
      const tvx = (fx * f + rx * s) * sp, tvz = (fz * f + rz * s) * sp;
      this.vel.x += (tvx - this.vel.x) * Math.min(1, dt * 8); this.vel.z += (tvz - this.vel.z) * Math.min(1, dt * 8);
      let nx = this.pos.x + this.vel.x * dt, nz = this.pos.z + this.vel.z * dt;
      // steps: can't climb more than 0.5 m at once (kerbs ok, walls of the viaduct not)
      const g0 = this.groundAt(this.pos.x, this.pos.z, this.pos.y), g1 = this.groundAt(nx, nz, this.pos.y);
      if (g1 - g0 > 0.6) { nx = this.pos.x; nz = this.pos.z; }
      [nx, nz] = this._collide(nx, nz, RADIUS);
      if (!this.T.inside(nx, nz, 3)) { nx = this.pos.x; nz = this.pos.z; }
      this.pos.x = nx; this.pos.z = nz;
      const g = this.groundAt(nx, nz, this.pos.y);
      this.pos.y += (g - this.pos.y) * Math.min(1, dt * 12);
      const moving = Math.hypot(this.vel.x, this.vel.z);
      this.bob += moving * dt * (run ? 1.7 : 2.4);
      const bobY = Math.sin(this.bob * Math.PI) * (run ? 0.06 : 0.035) * Math.min(1, moving / 1.2);
      this.camera.position.set(this.pos.x, this.pos.y + EYE + bobY, this.pos.z);
      this.camera.rotation.set(this.pitch, -this.yaw, 0, 'YXZ');
      this.stepAcc += moving * dt;
      if (this.stepAcc > (run ? 1.6 : 0.75) && this.sound && this.sound.on) { this.stepAcc = 0; this._footstep(); }
    } else {
      // ------------------------------------------------ drive
      const gas = (k.has('KeyW') || k.has('ArrowUp') ? 1 : 0) + Math.max(0, -tch.my);
      const brk = (k.has('KeyS') || k.has('ArrowDown') ? 1 : 0) + Math.max(0, tch.my);
      const hand = k.has('Space');
      const steerIn = (k.has('KeyD') || k.has('ArrowRight') ? 1 : 0) - (k.has('KeyA') || k.has('ArrowLeft') ? 1 : 0) + tch.mx;
      // steering eases in and is reduced at speed
      const maxSt = CAR.steerMax * (1 - Math.min(0.6, Math.abs(this.speed) / 40));
      this.steer += (steerIn * maxSt - this.steer) * Math.min(1, dt * 5);
      if (gas > 0) this.speed += CAR.accel * gas * dt * (this.speed < 0 ? 3 : 1);
      if (brk > 0) this.speed -= (this.speed > 0.3 ? CAR.brake : CAR.accel * 0.6) * brk * dt;
      if (hand) this.speed -= Math.sign(this.speed) * Math.min(Math.abs(this.speed), CAR.brake * 1.3 * dt);
      this.speed -= this.speed * CAR.drag * dt * 0.3 + Math.sign(this.speed) * Math.min(Math.abs(this.speed), 0.25 * dt);
      // slope: going uphill slows down
      const fx = Math.sin(this.yaw), fz = -Math.cos(this.yaw);
      const ry = this.pos.y, gF = this.groundAt(this.pos.x + fx * 1.5, this.pos.z + fz * 1.5, ry), gB = this.groundAt(this.pos.x - fx * 1.5, this.pos.z - fz * 1.5, ry);
      this.speed -= (gF - gB) / 3 * 9.8 * 0.35 * dt;
      this.speed = Math.max(-CAR.maxRev, Math.min(CAR.maxSpeed, this.speed));
      // bicycle model
      this.yaw += this.speed / CAR.wheelBase * Math.tan(this.steer) * dt;
      let nx = this.pos.x + fx * this.speed * dt, nz = this.pos.z + fz * this.speed * dt;
      const [cx, cz, hit] = this._collide(nx, nz, 1.05);
      // also probe the nose and the tail
      const [hx, hz, hit2] = this._collide(nx + fx * 1.4, nz + fz * 1.4, 0.9);
      const [tx, tz, hit3] = this._collide(nx - fx * 1.4, nz - fz * 1.4, 0.9);
      if (hit || hit2 || hit3) {
        nx = cx + (hx - (nx + fx * 1.4)) + (tx - (nx - fx * 1.4)); nz = cz + (hz - (nz + fz * 1.4)) + (tz - (nz - fz * 1.4));
        if (Math.abs(this.speed) > 4 && this.sound) this._thud();
        this.speed *= -0.25;
      }
      if (!this.T.inside(nx, nz, 4)) { nx = this.pos.x; nz = this.pos.z; this.speed = 0; }
      this.pos.x = nx; this.pos.z = nz;
      // body follows the 4 wheels (pitch / roll, quebra-molas bump)
      const rx = Math.cos(this.yaw), rz = Math.sin(this.yaw), hb = CAR.wheelBase / 2, ht = 0.75;
      const yFL = this.groundAt(nx + fx * hb - rx * ht, nz + fz * hb - rz * ht, ry), yFR = this.groundAt(nx + fx * hb + rx * ht, nz + fz * hb + rz * ht, ry);
      const yRL = this.groundAt(nx - fx * hb - rx * ht, nz - fz * hb - rz * ht, ry), yRR = this.groundAt(nx - fx * hb + rx * ht, nz - fz * hb + rz * ht, ry);
      const yc = (yFL + yFR + yRL + yRR) / 4;
      // suspension: spring-damper on the body height
      this.vy += ((yc - this.pos.y) * 140 - this.vy * 14) * dt;
      this.pos.y += this.vy * dt;
      if (this.pos.y < yc - 0.08) { this.pos.y = yc - 0.08; this.vy = Math.max(0, this.vy); }
      const pitch = Math.atan2((yFL + yFR) / 2 - (yRL + yRR) / 2, CAR.wheelBase);
      const roll = Math.atan2((yFR + yRR) / 2 - (yFL + yRL) / 2, 1.5) - this.steer * this.speed * 0.004;
      this.car.position.set(nx, this.pos.y + 0.02, nz);
      this.car.rotation.set(0, 0, 0);
      this.car.rotateY(-this.yaw); this.car.rotateX(pitch); this.car.rotateZ(-roll);
      // lights
      const night = this.day.night > 0.35 || this.lightsForced;
      this.lightsU.value = night ? 1 : 0;
      this.headlight.intensity = night ? 40 : 0;
      // camera
      this.lookYaw = (this.lookYaw || 0) * (1 - Math.min(1, dt * 1.5));
      if (this.camView === 1) { // cockpit
        const p = new THREE.Vector3(-0.35, 1.25, 0.15).applyQuaternion(this.car.quaternion).add(this.car.position);
        this.camera.position.copy(p);
        this.camera.rotation.set(this.pitch * 0.5 + pitch, -this.yaw - this.lookYaw, roll * 0.5, 'YXZ');
      } else {
        const d = this.camView === 2 ? 14 : this.camDist, hgt = this.camView === 2 ? 6 : 2.3;
        const yaw = this.yaw + this.lookYaw;
        const want = new THREE.Vector3(nx - Math.sin(yaw) * d, this.pos.y + hgt, nz + Math.cos(yaw) * d);
        const gy = this.groundAt(want.x, want.z) + 0.8;
        if (want.y < gy) want.y = gy;
        if (!this._camInit) { this.camera.position.copy(want); this._camInit = true; }
        this.camera.position.lerp(want, Math.min(1, dt * 6));
        this.camera.lookAt(nx + fx * 3, this.pos.y + 1.2, nz + fz * 3);
      }
      if (this.engine) this.engine.set(this.speed, Math.min(1, gas));
    }
    // keep the orbit target near us (trees LOD, shadows follow it)
    const fx = Math.sin(this.yaw), fz = -Math.cos(this.yaw);
    this.controls.target.set(this.pos.x + fx * 15, this.pos.y, this.pos.z + fz * 15);
    this._updateHud();
  }

  _footstep() {
    const s = this.sound, ctx = s.ctx; if (!ctx) return;
    const t = ctx.currentTime, src = ctx.createBufferSource(); src.buffer = s.noise;
    const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 500 + Math.random() * 300; f.Q.value = 1.2;
    const g = ctx.createGain(); g.gain.value = 0; g.gain.linearRampToValueAtTime(0.12, t + 0.01); g.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
    src.connect(f); f.connect(g); g.connect(s.master); src.start(t, Math.random()); src.stop(t + 0.15);
  }
  _thud() {
    const s = this.sound, ctx = s.ctx; if (!ctx || !s.on) return;
    const t = ctx.currentTime, o = ctx.createOscillator(), g = ctx.createGain();
    o.type = 'sine'; o.frequency.setValueAtTime(90, t); o.frequency.exponentialRampToValueAtTime(40, t + 0.25);
    g.gain.setValueAtTime(0.5, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
    o.connect(g); g.connect(s.master); o.start(t); o.stop(t + 0.32);
  }

  _updateHud(force) {
    const now = performance.now();
    if (!force && now - (this._hudT || 0) < 200) return;
    this._hudT = now;
    const h = this.dom.hud;
    const street = this.streets ? this.streets.nameAt(this.pos.x, this.pos.z) : '';
    const hh = this.day.hours, clock = `${String(Math.floor(hh) % 24).padStart(2, '0')}:${String(Math.floor((hh % 1) * 60)).padStart(2, '0')}`;
    const kmh = Math.round(Math.abs(this.mode === 'drive' ? this.speed : Math.hypot(this.vel.x, this.vel.z)) * 3.6);
    h.querySelector('.hs').textContent = this.mode === 'drive' ? kmh : kmh;
    h.querySelector('.hu').textContent = 'km/h';
    h.querySelector('.hn').textContent = street || '—';
    h.querySelector('.hc').textContent = clock;
  }
}

function inPoly(x, z, p) {
  let c = false;
  for (let i = 0, j = p.length - 1; i < p.length; j = i++) if ((p[i][1] > z) !== (p[j][1] > z) && x < (p[j][0] - p[i][0]) * (z - p[i][1]) / (p[j][1] - p[i][1]) + p[i][0]) c = !c;
  return c;
}
