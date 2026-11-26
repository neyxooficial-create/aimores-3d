// Shared helpers: hashing, colors, geometry builder, canvas textures.
import * as THREE from 'three';

/** Deterministic hash in [0,1). */
export function hash(x) {
  const t = Math.sin(x * 12.9898 + 78.233) * 43758.5453;
  return t - Math.floor(t);
}

/** xorshift32 PRNG -> () => [0,1). */
export function rng(seed) {
  let t = seed >>> 0 || 1;
  return () => {
    t ^= t << 13; t >>>= 0; t ^= t >> 17; t ^= t << 5; t >>>= 0;
    return t / 4294967296;
  };
}

export const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
export const lerp = (a, b, t) => a + (b - a) * t;
export const smoothstep = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };

const _c = new THREE.Color();
/** sRGB 0..255 -> linear [r,g,b] for vertex colors. */
export function srgb(r, g, b) {
  _c.setRGB(r / 255, g / 255, b / 255, THREE.SRGBColorSpace);
  return [_c.r, _c.g, _c.b];
}
export function hexLin(hex) {
  _c.setHex(hex, THREE.SRGBColorSpace);
  return [_c.r, _c.g, _c.b];
}

/**
 * Non-indexed triangle soup builder with per-vertex position/normal/uv/color.
 * Uses growable typed arrays (much faster than Array.push for big meshes).
 */
export class GeoBuilder {
  constructor(withColor = true, withUv = true) {
    this.n = 0;
    this.cap = 1024;
    this.withColor = withColor;
    this.withUv = withUv;
    this.pos = new Float32Array(this.cap * 3);
    this.nor = new Float32Array(this.cap * 3);
    this.uv = withUv ? new Float32Array(this.cap * 2) : null;
    this.col = withColor ? new Float32Array(this.cap * 3) : null;
    this.extra = null; // optional per-vertex float (e.g. window seed)
  }
  _grow(k) {
    if (this.n + k <= this.cap) return;
    while (this.n + k > this.cap) this.cap *= 2;
    const g = (a, s) => { if (!a) return a; const b = new Float32Array(this.cap * s); b.set(a); return b; };
    this.pos = g(this.pos, 3); this.nor = g(this.nor, 3); this.uv = g(this.uv, 2); this.col = g(this.col, 3);
    this.extra = g(this.extra, 1);
  }
  enableExtra() { if (!this.extra) this.extra = new Float32Array(this.cap); return this; }
  vert(p, nrm, uv, c, e) {
    const i = this.n++;
    this.pos[i * 3] = p[0]; this.pos[i * 3 + 1] = p[1]; this.pos[i * 3 + 2] = p[2];
    this.nor[i * 3] = nrm[0]; this.nor[i * 3 + 1] = nrm[1]; this.nor[i * 3 + 2] = nrm[2];
    if (this.uv) { this.uv[i * 2] = uv ? uv[0] : 0; this.uv[i * 2 + 1] = uv ? uv[1] : 0; }
    if (this.col) { const k = c || WHITE; this.col[i * 3] = k[0]; this.col[i * 3 + 1] = k[1]; this.col[i * 3 + 2] = k[2]; }
    if (this.extra) this.extra[i] = e || 0;
  }
  /** Triangle a,b,c (counter-clockwise seen from outside). Optional per-vertex colors via cols=[ca,cb,cc]. */
  tri(a, b, c, ua, ub, uc, col, nrm, cols, e) {
    this._grow(3);
    const n = nrm || faceNormal(a, b, c);
    this.vert(a, n, ua, cols ? cols[0] : col, e);
    this.vert(b, n, ub, cols ? cols[1] : col, e);
    this.vert(c, n, uc, cols ? cols[2] : col, e);
  }
  /** Quad a,b,c,d (CCW). */
  quad(a, b, c, d, ua, ub, uc, ud, col, nrm, cols, e) {
    const n = nrm || faceNormal(a, b, c);
    this.tri(a, b, c, ua, ub, uc, col, n, cols ? [cols[0], cols[1], cols[2]] : null, e);
    this.tri(a, c, d, ua, uc, ud, col, n, cols ? [cols[0], cols[2], cols[3]] : null, e);
  }
  get count() { return this.n / 3; }
  geometry() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos.slice(0, this.n * 3), 3));
    g.setAttribute('normal', new THREE.BufferAttribute(this.nor.slice(0, this.n * 3), 3));
    if (this.uv) g.setAttribute('uv', new THREE.BufferAttribute(this.uv.slice(0, this.n * 2), 2));
    if (this.col) g.setAttribute('color', new THREE.BufferAttribute(this.col.slice(0, this.n * 3), 3));
    if (this.extra) g.setAttribute('extra', new THREE.BufferAttribute(this.extra.slice(0, this.n), 1));
    g.computeBoundingSphere();
    g.computeBoundingBox();
    return g;
  }
}
const WHITE = [1, 1, 1];

export function faceNormal(a, b, c) {
  const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2];
  const vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
  let x = uy * vz - uz * vy, y = uz * vx - ux * vz, z = ux * vy - uy * vx;
  const l = Math.hypot(x, y, z) || 1;
  return [x / l, y / l, z / l];
}

/** Polygon signed area (x/z). Positive = counter-clockwise in x→z. */
export function polyArea(p) {
  let a = 0;
  for (let i = 0; i < p.length; i++) {
    const q = p[(i + 1) % p.length];
    a += p[i][0] * q[1] - q[0] * p[i][1];
  }
  return a / 2;
}

/** Minimum-area oriented rectangle: {cx,cz,ux,uz,a,b} with a>=b (half sizes). */
export function orientedRect(p) {
  let best = null;
  for (let i = 0; i < p.length; i++) {
    const n = p[i], s = p[(i + 1) % p.length];
    let ux = s[0] - n[0], uz = s[1] - n[1];
    const L = Math.hypot(ux, uz);
    if (L < 0.01) continue;
    ux /= L; uz /= L;
    const vx = -uz, vz = ux;
    let u0 = 1e9, u1 = -1e9, v0 = 1e9, v1 = -1e9;
    for (const [x, z] of p) {
      const u = x * ux + z * uz, v = x * vx + z * vz;
      if (u < u0) u0 = u; if (u > u1) u1 = u; if (v < v0) v0 = v; if (v > v1) v1 = v;
    }
    const ar = (u1 - u0) * (v1 - v0);
    if (!best || ar < best.area) {
      const cu = (u0 + u1) / 2, cv = (v0 + v1) / 2;
      best = { area: ar, cx: cu * ux + cv * vx, cz: cu * uz + cv * vz, ux, uz, a: (u1 - u0) / 2, b: (v1 - v0) / 2 };
    }
  }
  if (best.a < best.b) {
    const t = best.a; best.a = best.b; best.b = t;
    const ux = best.ux; best.ux = -best.uz; best.uz = ux;
  }
  return best;
}

export function makeCanvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return [c, c.getContext('2d')];
}

/** CanvasTexture with repeat wrapping + mipmaps. */
export function canvasTex(canvas, { srgb: isColor = true, repeat = true, aniso = 8 } = {}) {
  const t = new THREE.CanvasTexture(canvas);
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = aniso;
  if (isColor) t.colorSpace = THREE.SRGBColorSpace;
  t.minFilter = THREE.LinearMipmapLinearFilter;
  t.generateMipmaps = true;
  return t;
}

/** Normal map texture (DataTexture) from a height field (Float32 w*h, tiled). */
export function normalFromHeight(hf, w, h, strength = 2) {
  const d = new Uint8Array(w * h * 4);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const l = hf[y * w + (x - 1 + w) % w], r = hf[y * w + (x + 1) % w];
    const u = hf[((y - 1 + h) % h) * w + x], dn = hf[((y + 1) % h) * w + x];
    let nx = (l - r) * strength, ny = (dn - u) * strength, nz = 1;
    const L = Math.hypot(nx, ny, nz); nx /= L; ny /= L; nz /= L;
    const i = (y * w + x) * 4;
    d[i] = (nx * 0.5 + 0.5) * 255; d[i + 1] = (ny * 0.5 + 0.5) * 255; d[i + 2] = (nz * 0.5 + 0.5) * 255; d[i + 3] = 255;
  }
  const t = new THREE.DataTexture(d, w, h, THREE.RGBAFormat);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.generateMipmaps = true;
  t.minFilter = THREE.LinearMipmapLinearFilter;
  t.magFilter = THREE.LinearFilter;
  t.anisotropy = 8;
  t.needsUpdate = true;
  return t;
}

/** Tileable value noise sampler of period `n` cells. */
export function valueNoise(n, seed) {
  const r = rng(seed), v = new Float32Array(n * n);
  for (let i = 0; i < n * n; i++) v[i] = r();
  return (x, y) => {
    x = ((x % n) + n) % n; y = ((y % n) + n) % n;
    const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
    const x1 = (xi + 1) % n, y1 = (yi + 1) % n;
    const sx = xf * xf * (3 - 2 * xf), sy = yf * yf * (3 - 2 * yf);
    const a = v[yi * n + xi], b = v[yi * n + x1], c = v[y1 * n + xi], d = v[y1 * n + x1];
    return (a * (1 - sx) + b * sx) * (1 - sy) + (c * (1 - sx) + d * sx) * sy;
  };
}
export function fbm(noise, x, y, oct = 4) {
  let s = 0, a = 0.5, f = 1, t = 0;
  for (let i = 0; i < oct; i++) { s += a * noise(x * f, y * f); t += a; a *= 0.5; f *= 2; }
  return s / t;
}

/** Distance from point to segment, with projection info. */
export function segDist(x, z, ax, az, bx, bz) {
  const dx = bx - ax, dz = bz - az, L2 = dx * dx + dz * dz || 1;
  let t = ((x - ax) * dx + (z - az) * dz) / L2;
  t = clamp(t, 0, 1);
  const px = ax + dx * t, pz = az + dz * t;
  return { d: Math.hypot(x - px, z - pz), t, px, pz };
}

/** Uniform grid spatial hash. */
export class SpatialGrid {
  constructor(cell = 40) { this.cell = cell; this.m = new Map(); }
  _k(i, j) { return i * 73856093 ^ j * 19349663; }
  add(item, x0, z0, x1 = x0, z1 = z0) {
    const c = this.cell;
    for (let i = Math.floor(x0 / c); i <= Math.floor(x1 / c); i++)
      for (let j = Math.floor(z0 / c); j <= Math.floor(z1 / c); j++) {
        const k = this._k(i, j);
        let a = this.m.get(k);
        if (!a) this.m.set(k, a = []);
        a.push(item);
      }
  }
  query(x, z, r, out = new Set()) {
    const c = this.cell;
    for (let i = Math.floor((x - r) / c); i <= Math.floor((x + r) / c); i++)
      for (let j = Math.floor((z - r) / c); j <= Math.floor((z + r) / c); j++) {
        const a = this.m.get(this._k(i, j));
        if (a) for (const it of a) out.add(it);
      }
    return out;
  }
}

/** Yield to the browser so the loading message can paint. */
export const nextFrame = () => new Promise(r => requestAnimationFrame(() => setTimeout(r, 0)));

// ------------------------------------------------------------------ contact shadows
let BLOB_TEX = null;
function blobTexture() {
  if (BLOB_TEX) return BLOB_TEX;
  const S = 64, c = document.createElement('canvas'); c.width = c.height = S;
  const g = c.getContext('2d'), img = g.createImageData(S, S);
  for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
    // soft rounded rectangle: 1 in the middle, fading to 0 at the border
    const u = Math.abs(x + 0.5 - S / 2) / (S / 2), v = Math.abs(y + 0.5 - S / 2) / (S / 2);
    const d = Math.pow(Math.pow(u, 4) + Math.pow(v, 4), 0.25);
    const a = Math.max(0, Math.min(1, (1 - d) / 0.45));
    const i = (y * S + x) * 4; img.data[i] = img.data[i + 1] = img.data[i + 2] = 255; img.data[i + 3] = Math.round(a * a * 255);
  }
  g.putImageData(img, 0, 0);
  BLOB_TEX = new THREE.CanvasTexture(c);
  return BLOB_TEX;
}
/**
 * Cheap soft shadow under moving instances (cars, wagons) that do not cast real shadows
 * (shadow maps are only refreshed when the view changes, so moving casters would leave ghosts).
 * Returns an InstancedMesh sized from the geometry's footprint; feed it the same matrices.
 */
export function contactShadows(geo, n, opacity = 0.55, pad = 1.18) {
  geo.computeBoundingBox();
  const b = geo.boundingBox;
  const pg = new THREE.PlaneGeometry((b.max.x - b.min.x) * pad, (b.max.z - b.min.z) * pad).rotateX(-Math.PI / 2)
    .translate((b.min.x + b.max.x) / 2, b.min.y + 0.05, (b.min.z + b.max.z) / 2);
  const m = new THREE.InstancedMesh(pg, new THREE.MeshBasicMaterial({ color: 0x000000, alphaMap: blobTexture(), transparent: true, opacity, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -8 }), n);
  m.count = 0; m.frustumCulled = false; m.renderOrder = 2;
  m.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  return m;
}
