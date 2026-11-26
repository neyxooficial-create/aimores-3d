// Sound: everything is synthesised with Web Audio (no audio files to download).
//  - ambient beds: daytime birds, night crickets, distant traffic hum, rain
//  - one-shots: train horn (two-tone diesel horn), level-crossing bell, car horn, church bell
// Positional sounds are attenuated by distance to the camera and panned left/right.
export class Sound {
  constructor() {
    this.ctx = null;
    this.on = false;
    this.listener = { x: 0, y: 0, z: 0, yaw: 0 };
  }

  /** Must be called from a user gesture (browser autoplay rules). */
  start() {
    if (this.ctx) { this.ctx.resume(); this.on = true; this.master.gain.setTargetAtTime(0.9, this.ctx.currentTime, 0.2); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = this.ctx = new AC();
    this.master = ctx.createGain(); this.master.gain.value = 0.9;
    const comp = ctx.createDynamicsCompressor();
    this.master.connect(comp); comp.connect(ctx.destination);
    // shared noise buffer
    const n = ctx.sampleRate * 2, buf = ctx.createBuffer(1, n, ctx.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
    this.noise = buf;
    // ambient beds
    this.bed = {};
    this.bed.hum = this._noiseBed(140, 0.6, 'lowpass');      // distant traffic / city
    this.bed.rain = this._noiseBed(2500, 0.4, 'highpass');
    this.bed.river = this._noiseBed(700, 0.8, 'bandpass');
    this._crickets();
    this._birds();
    this.on = true;
  }
  stop() { if (this.ctx) { this.master.gain.setTargetAtTime(0, this.ctx.currentTime, 0.2); } this.on = false; }

  _noiseBed(freq, q, type) {
    const ctx = this.ctx, src = ctx.createBufferSource();
    src.buffer = this.noise; src.loop = true;
    const f = ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
    const g = ctx.createGain(); g.gain.value = 0;
    src.connect(f); f.connect(g); g.connect(this.master); src.start();
    return g;
  }
  _crickets() {
    const ctx = this.ctx;
    const g = ctx.createGain(); g.gain.value = 0; g.connect(this.master);
    // a few chirping oscillators amplitude-modulated in short pulses
    for (let k = 0; k < 3; k++) {
      const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = 4200 + k * 380;
      const am = ctx.createGain(); am.gain.value = 0;
      const lfo = ctx.createOscillator(); lfo.type = 'square'; lfo.frequency.value = 28 + k * 5;
      const lg = ctx.createGain(); lg.gain.value = 0.5;
      const slow = ctx.createOscillator(); slow.type = 'sine'; slow.frequency.value = 0.7 + k * 0.23;
      const sg = ctx.createGain(); sg.gain.value = 0.5;
      lfo.connect(lg); lg.connect(am.gain); slow.connect(sg); sg.connect(am.gain);
      o.connect(am); am.connect(g);
      o.start(); lfo.start(); slow.start();
    }
    this.bed.crickets = g;
  }
  _birds() {
    // random short chirps scheduled from update()
    this.bed.birds = this.ctx.createGain(); this.bed.birds.gain.value = 0; this.bed.birds.connect(this.master);
    this.nextBird = 0;
  }
  _chirp(t) {
    const ctx = this.ctx, o = ctx.createOscillator(), g = ctx.createGain();
    const f0 = 2200 + Math.random() * 2600, n = 2 + Math.floor(Math.random() * 4);
    o.type = 'sine'; g.gain.value = 0;
    for (let i = 0; i < n; i++) {
      const s = t + i * 0.11;
      o.frequency.setValueAtTime(f0, s); o.frequency.exponentialRampToValueAtTime(f0 * (1.3 + Math.random() * 0.5), s + 0.07);
      g.gain.setValueAtTime(0, s); g.gain.linearRampToValueAtTime(0.12, s + 0.01); g.gain.linearRampToValueAtTime(0, s + 0.08);
    }
    o.connect(g); g.connect(this.bed.birds); o.start(t); o.stop(t + n * 0.11 + 0.1);
  }

  /** Per frame: ambience mix from time of day, rain, and where the camera is. */
  update(camera, { night = 0, rain = 0, nearRiver = 0, urban = 1 } = {}) {
    this.listener.x = camera.position.x; this.listener.y = camera.position.y; this.listener.z = camera.position.z;
    const dir = camera.getWorldDirection ? camera.getWorldDirection(this._dir || (this._dir = new camera.position.constructor())) : null;
    if (dir) this.listener.yaw = Math.atan2(dir.x, -dir.z);
    if (!this.ctx || !this.on) return;
    const t = this.ctx.currentTime, k = 0.5;
    const alt = Math.max(0, Math.min(1, (camera.position.y - 90) / 600)); // ambience fades when flying high
    const near = 1 - alt;
    this.bed.hum.gain.setTargetAtTime(0.05 * urban * (1 - 0.6 * night) * near + 0.01, t, k);
    this.bed.rain.gain.setTargetAtTime(0.22 * rain, t, k);
    this.bed.river.gain.setTargetAtTime(0.06 * nearRiver * near, t, k);
    this.bed.crickets.gain.setTargetAtTime(0.012 * night * near, t, k);
    this.bed.birds.gain.setTargetAtTime((1 - night) * (1 - rain) * near * 0.8, t, k);
    if (t > this.nextBird && night < 0.5) { this._chirp(t + 0.05); this.nextBird = t + 0.4 + Math.random() * 2.5; }
  }

  /** gain + pan for a world-space source */
  _spatial(x, y, z, ref = 60) {
    const dx = x - this.listener.x, dy = y - this.listener.y, dz = z - this.listener.z;
    const d = Math.hypot(dx, dy, dz);
    const gain = ref / (ref + d);
    const ang = Math.atan2(dx, -dz) - this.listener.yaw;
    return { gain, pan: Math.max(-1, Math.min(1, Math.sin(ang))), d };
  }
  _out(x, y, z, ref) {
    const ctx = this.ctx, { gain, pan, d } = this._spatial(x, y, z, ref);
    const g = ctx.createGain(); g.gain.value = gain;
    let node = g;
    if (ctx.createStereoPanner) { const p = ctx.createStereoPanner(); p.pan.value = pan; g.connect(p); p.connect(this.master); }
    else g.connect(this.master);
    // distant sounds lose their highs
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = Math.max(600, 12000 - d * 9);
    lp.connect(node);
    return lp;
  }

  /** Diesel two-tone horn (EFVM locomotives), duration in seconds. */
  trainHorn(x, y, z, dur = 1.8) {
    if (!this.ctx || !this.on) return;
    const ctx = this.ctx, t = ctx.currentTime, out = this._out(x, y, z, 220);
    const env = ctx.createGain(); env.gain.value = 0; env.connect(out);
    env.gain.setValueAtTime(0, t); env.gain.linearRampToValueAtTime(0.32, t + 0.12);
    env.gain.setValueAtTime(0.32, t + dur - 0.25); env.gain.linearRampToValueAtTime(0, t + dur);
    for (const f of [277, 349, 415]) {
      const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.value = f;
      o.frequency.setValueAtTime(f * 0.97, t); o.frequency.linearRampToValueAtTime(f, t + 0.15);
      const bp = ctx.createBiquadFilter(); bp.type = 'lowpass'; bp.frequency.value = 1800;
      o.connect(bp); bp.connect(env); o.start(t); o.stop(t + dur + 0.05);
    }
  }
  /** Level crossing bell (ding ding ding) for `dur` seconds. */
  crossingBell(x, y, z, dur = 1) {
    if (!this.ctx || !this.on) return;
    const ctx = this.ctx, t = ctx.currentTime, out = this._out(x, y, z, 40);
    for (let s = 0; s < dur; s += 0.45) {
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.type = 'triangle'; o.frequency.value = 1180; g.gain.value = 0;
      g.gain.setValueAtTime(0.25, t + s); g.gain.exponentialRampToValueAtTime(0.001, t + s + 0.4);
      o.connect(g); g.connect(out); o.start(t + s); o.stop(t + s + 0.42);
    }
  }
  /** Rumble of a passing train (call every ~0.5 s with the train's nearest point). */
  trainRumble(x, y, z, speed) {
    if (!this.ctx || !this.on) return;
    const ctx = this.ctx, t = ctx.currentTime, out = this._out(x, y, z, 50);
    const src = ctx.createBufferSource(); src.buffer = this.noise;
    const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 160 + speed * 8;
    const g = ctx.createGain(); g.gain.value = 0;
    g.gain.linearRampToValueAtTime(0.35, t + 0.15); g.gain.linearRampToValueAtTime(0, t + 0.7);
    src.connect(f); f.connect(g); g.connect(out); src.start(t, Math.random()); src.stop(t + 0.75);
    // wheel clack
    if (Math.random() < 0.6) {
      const c = ctx.createBufferSource(); c.buffer = this.noise;
      const cf = ctx.createBiquadFilter(); cf.type = 'bandpass'; cf.frequency.value = 900; cf.Q.value = 3;
      const cg = ctx.createGain(); cg.gain.value = 0;
      for (const dt of [0.05, 0.16]) { cg.gain.setValueAtTime(0.4, t + dt); cg.gain.exponentialRampToValueAtTime(0.001, t + dt + 0.05); }
      c.connect(cf); cf.connect(cg); cg.connect(out); c.start(t, Math.random()); c.stop(t + 0.3);
    }
  }
  carHorn(x, y, z) {
    if (!this.ctx || !this.on) return;
    const ctx = this.ctx, t = ctx.currentTime, out = this._out(x, y, z, 30);
    const g = ctx.createGain(); g.gain.value = 0; g.connect(out);
    g.gain.linearRampToValueAtTime(0.18, t + 0.02); g.gain.setValueAtTime(0.18, t + 0.35); g.gain.linearRampToValueAtTime(0, t + 0.4);
    for (const f of [415, 523]) { const o = ctx.createOscillator(); o.type = 'square'; o.frequency.value = f; o.connect(g); o.start(t); o.stop(t + 0.42); }
  }
  churchBell(x, y, z, strikes = 1) {
    if (!this.ctx || !this.on) return;
    const ctx = this.ctx, t = ctx.currentTime, out = this._out(x, y, z, 300);
    for (let k = 0; k < strikes; k++) {
      const s = t + k * 2.2;
      for (const [f, a] of [[262, 0.3], [524, 0.12], [631, 0.08], [786, 0.05]]) {
        const o = ctx.createOscillator(), g = ctx.createGain();
        o.type = 'sine'; o.frequency.value = f; g.gain.value = 0;
        g.gain.setValueAtTime(a, s); g.gain.exponentialRampToValueAtTime(0.001, s + 3.5);
        o.connect(g); g.connect(out); o.start(s); o.stop(s + 3.6);
      }
    }
  }
  /** Engine sound for drive mode: returns a controller with set(speed, throttle). */
  engine() {
    if (!this.ctx) return null;
    const ctx = this.ctx;
    const o = ctx.createOscillator(); o.type = 'sawtooth';
    const o2 = ctx.createOscillator(); o2.type = 'square';
    const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 400;
    const g = ctx.createGain(); g.gain.value = 0;
    o.connect(f); o2.connect(f); f.connect(g); g.connect(this.master);
    o.start(); o2.start();
    return {
      set: (speed, throttle) => {
        const t = ctx.currentTime, rpm = 750 + (Math.abs(speed) % 8) * 260 + Math.abs(speed) * 30 + throttle * 600;
        o.frequency.setTargetAtTime(rpm / 30, t, 0.08); o2.frequency.setTargetAtTime(rpm / 60, t, 0.08);
        f.frequency.setTargetAtTime(300 + throttle * 900, t, 0.1);
        g.gain.setTargetAtTime(this.on ? 0.05 + throttle * 0.06 : 0, t, 0.1);
      },
      stop: () => { g.gain.setTargetAtTime(0, ctx.currentTime, 0.1); setTimeout(() => { o.stop(); o2.stop(); }, 500); },
    };
  }
}
