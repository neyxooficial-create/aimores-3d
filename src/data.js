// Runtime data loading: city.json + geo.bin.gz (+ textures), with download progress.
import * as THREE from 'three';
import { gunzipSync } from 'fflate';

const BASE = 'data/';
// eslint-disable-next-line no-undef
const VERSION = typeof __DATA_VERSION__ !== 'undefined' ? __DATA_VERSION__ : 'dev';

/** fetch with progress callback (bytes). */
async function fetchBytes(url, onBytes) {
  const res = await fetch(url, { cache: 'force-cache' });
  if (!res.ok) throw new Error(`${url}: HTTP ${res.status}`);
  if (!res.body || !res.body.getReader) {
    const b = new Uint8Array(await res.arrayBuffer());
    onBytes(b.length);
    return b;
  }
  const reader = res.body.getReader();
  const parts = [];
  let n = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    parts.push(value); n += value.length; onBytes(value.length);
  }
  const out = new Uint8Array(n);
  let o = 0;
  for (const p of parts) { out.set(p, o); o += p.length; }
  return out;
}

/** Height grid sampler (same API as the old app: raw(row,col), at(x,z)). */
export class Terrain {
  constructor(meta, heights) {
    Object.assign(this, meta);
    this.a = heights; // Float32Array GW*GH (meters, absolute)
  }
  raw(r, c) {
    r = r < 0 ? 0 : r >= this.GH ? this.GH - 1 : r;
    c = c < 0 ? 0 : c >= this.GW ? this.GW - 1 : c;
    return this.a[r * this.GW + c];
  }
  /** Height at world x,z — triangle interpolation matching the rendered full-res mesh. */
  at(x, z) {
    const fx = (x - this.XMIN) / this.G, fz = (z - this.ZMIN) / this.G;
    const c = Math.floor(fx), r = Math.floor(fz), u = fx - c, v = fz - r;
    const h00 = this.raw(r, c), h01 = this.raw(r, c + 1), h10 = this.raw(r + 1, c), h11 = this.raw(r + 1, c + 1);
    return u + v <= 1 ? h00 + (h01 - h00) * u + (h10 - h00) * v : h11 + (h10 - h11) * (1 - u) + (h01 - h11) * (1 - v);
  }
  normal(x, z, out = new THREE.Vector3()) {
    const e = 2;
    return out.set(this.at(x - e, z) - this.at(x + e, z), 2 * e, this.at(x, z - e) - this.at(x, z + e)).normalize();
  }
  inside(x, z, m = 0) { return x > this.XMIN + m && x < this.XMAX - m && z > this.ZMIN + m && z < this.ZMAX - m; }
}

function undelta(i16, w, h, scale, base) {
  const out = new Float32Array(w * h);
  for (let r = 0; r < h; r++) {
    let v = 0;
    for (let c = 0; c < w; c++) {
      const d = i16[r * w + c];
      v = c === 0 ? d + 32768 : v + d;
      out[r * w + c] = base + v / scale;
    }
  }
  return out;
}

function parseGeo(bytes, meta) {
  const buf = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
  const dv = new DataView(buf);
  const hlen = dv.getUint32(0, true);
  const header = JSON.parse(new TextDecoder().decode(new Uint8Array(buf, 4, hlen)));
  const base = 4 + hlen;
  const out = { meshes: {} };
  for (const s of header) {
    if (s.type === 'i16d') {
      const a = new Int16Array(buf, base + s.off, s.len);
      out[s.name] = s.name === 'height' ? undelta(a, s.w, s.h, 100, meta.HB) : undelta(a, s.w, s.h, 10, meta.HB);
    } else if (s.type === 'q20') {
      const a = new Int16Array(buf, base + s.off, s.len), f = new Float32Array(s.len);
      for (let i = 0; i < s.len; i++) f[i] = a[i] / 20;
      out.meshes[s.name] = f;
    } else if (s.type === 'u8') {
      out[s.name] = new Uint8Array(buf.slice(base + s.off, base + s.off + s.len));
    } else if (s.type === 'ang8') {
      const a = new Uint8Array(buf, base + s.off, s.len), f = new Float32Array(s.len);
      for (let i = 0; i < s.len; i++) f[i] = a[i] / 256 * Math.PI * 2;
      out.meshes[s.name] = f;
    }
  }
  return out;
}

async function loadTexture(url, onBytes) {
  const bytes = await fetchBytes(url, onBytes);
  const blob = new Blob([bytes], { type: 'image/webp' });
  let img;
  if (typeof createImageBitmap === 'function') {
    img = await createImageBitmap(blob, { imageOrientation: 'flipY' });
    const t = new THREE.Texture(img);
    t.flipY = false; // already flipped by createImageBitmap
    t.needsUpdate = true;
    return t;
  }
  img = new Image();
  img.src = URL.createObjectURL(blob);
  await img.decode();
  const t = new THREE.Texture(img);
  t.needsUpdate = true;
  return t;
}

/** Loads everything; `progress(fraction, label)` is called while downloading. */
export async function loadAll(quality, progress) {
  const hi = quality === 'high' || quality === 'ultra';
  const files = [
    ['city.json', 440e3], ['geo.bin.gz', 641e3],
    [hi ? 'ground-4k.webp' : 'ground-2k.webp', hi ? 1042e3 : 467e3],
    [hi ? 'back-2k.webp' : 'back-1k.webp', hi ? 430e3 : 193e3],
  ];
  const total = files.reduce((s, f) => s + f[1], 0);
  let got = 0;
  const onBytes = n => { got += n; progress(Math.min(0.99, got / total)); };
  const v = '?v=' + VERSION;
  const [cityBytes, geoBytes, ground, back] = await Promise.all([
    fetchBytes(BASE + files[0][0] + v, onBytes),
    fetchBytes(BASE + files[1][0] + v, onBytes),
    loadTexture(BASE + files[2][0] + v, onBytes),
    loadTexture(BASE + files[3][0] + v, onBytes),
  ]);
  const city = JSON.parse(new TextDecoder().decode(cityBytes));
  const geo = parseGeo(gunzipSync(geoBytes), city.meta);
  const terrain = new Terrain(city.meta, geo.height);
  return { city, terrain, back: geo.back, meshes: geo.meshes, waterMask: geo.watermask, groundTex: ground, backTex: back };
}
