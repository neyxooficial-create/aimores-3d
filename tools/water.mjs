// Water bodies in the surroundings (lago da represa, Rio Doce abaixo da barragem): classify the
// satellite backdrop texture into a smooth water mask, find connected water bodies, give each one
// a flat level (median of the coarse DEM inside it) and flatten the DEM under them.
import sharp from 'sharp';

function boxBlur(a, W, H, k) {
  // separable box blur with edge clamp
  const tmp = new Float32Array(W * H), out = new Float32Array(W * H), n = 2 * k + 1;
  for (let y = 0; y < H; y++) {
    let s = 0;
    for (let x = -k; x <= k; x++) s += a[y * W + Math.min(W - 1, Math.max(0, x))];
    for (let x = 0; x < W; x++) {
      tmp[y * W + x] = s / n;
      s += a[y * W + Math.min(W - 1, x + k + 1)] - a[y * W + Math.max(0, x - k)];
    }
  }
  for (let x = 0; x < W; x++) {
    let s = 0;
    for (let y = -k; y <= k; y++) s += tmp[Math.min(H - 1, Math.max(0, y)) * W + x];
    for (let y = 0; y < H; y++) {
      out[y * W + x] = s / n;
      s += tmp[Math.min(H - 1, y + k + 1) * W + x] - tmp[Math.max(0, y - k) * W + x];
    }
  }
  return out;
}

/**
 * @param backtexPath  satellite texture covering [-R, R]^2 (R = 3600 m)
 * @param back         Uint16Array BG*BG coarse DEM (HB + v/10), mutated (flattened under water)
 */
export async function buildWater(backtexPath, back, meta, R = 3600) {
  const N = 1024;
  const { data } = await sharp(backtexPath).resize(N, N).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const lum = new Float32Array(N * N), lum2 = new Float32Array(N * N), col = new Uint8Array(N * N);
  for (let i = 0; i < N * N; i++) {
    const r = data[i * 3], g = data[i * 3 + 1], b = data[i * 3 + 2], l = (r + g + b) / 3;
    lum[i] = l; lum2[i] = l * l;
    col[i] = l < 82 && b > r * 0.92 && g >= r && b > g * 0.72 ? 1 : 0;
  }
  const m1 = boxBlur(lum, N, N, 3), m2 = boxBlur(lum2, N, N, 3);
  const w0 = new Float32Array(N * N);
  for (let i = 0; i < N * N; i++) w0[i] = col[i] && Math.sqrt(Math.max(0, m2[i] - m1[i] * m1[i])) < 9 ? 1 : 0;
  const w1 = boxBlur(w0, N, N, 2);
  const w = new Uint8Array(N * N);
  for (let i = 0; i < N * N; i++) w[i] = w1[i] > 0.5 ? 1 : 0;
  // connected components (4-neighbour), keep the big ones
  const lab = new Int32Array(N * N);
  const comps = [];
  const q = new Int32Array(N * N);
  for (let i = 0; i < N * N; i++) {
    if (!w[i] || lab[i]) continue;
    const id = comps.length + 1;
    let h = 0, t = 0; q[t++] = i; lab[i] = id;
    const cells = [];
    while (h < t) {
      const c = q[h++]; cells.push(c);
      const x = c % N, y = (c / N) | 0;
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const xx = x + dx, yy = y + dy;
        if (xx < 0 || yy < 0 || xx >= N || yy >= N) continue;
        const k = yy * N + xx;
        if (w[k] && !lab[k]) { lab[k] = id; q[t++] = k; }
      }
    }
    comps.push({ id, cells });
  }
  const keep = comps.filter(c => c.cells.length > 900);
  const mask = new Float32Array(N * N);
  for (const c of keep) for (const k of c.cells) mask[k] = 1;
  const soft = boxBlur(mask, N, N, 2);
  const maskU8 = new Uint8Array(N * N);
  for (let i = 0; i < N * N; i++) maskU8[i] = Math.round(Math.min(1, Math.max(0, (soft[i] - 0.25) / 0.5)) * 255);

  // levels from the coarse DEM, then flatten the DEM under each water body
  const { BG, BR, HB } = meta;
  const cell = 2 * BR / (BG - 1);
  const bodies = [];
  for (const c of keep) {
    const hs = [];
    let x0 = 1e9, z0 = 1e9, x1 = -1e9, z1 = -1e9;
    for (const k of c.cells) {
      const px = k % N, py = (k / N) | 0;
      const x = (px + 0.5) / N * 2 * R - R, z = (py + 0.5) / N * 2 * R - R;
      x0 = Math.min(x0, x); z0 = Math.min(z0, z); x1 = Math.max(x1, x); z1 = Math.max(z1, z);
      const gc = Math.round((x + BR) / cell), gr = Math.round((z + BR) / cell);
      hs.push(HB + back[gr * BG + gc] / 10);
    }
    hs.sort((a, b) => a - b);
    const level = hs[Math.floor(hs.length * 0.35)];
    bodies.push({ level: Math.round(level * 10) / 10, box: [Math.round(x0 - 20), Math.round(z0 - 20), Math.round(x1 + 20), Math.round(z1 + 20)], n: c.cells.length, cells: c.cells });
  }
  // flatten DEM cells whose centre is water (down to level - 2 so the flat water plane wins)
  let flat = 0;
  for (let gr = 0; gr < BG; gr++) for (let gc = 0; gc < BG; gc++) {
    const x = -BR + gc * cell, z = -BR + gr * cell;
    if (Math.abs(x) >= R || Math.abs(z) >= R) continue;
    const px = Math.floor((x + R) / (2 * R) * N), py = Math.floor((z + R) / (2 * R) * N);
    const id = lab[py * N + px];
    const body = id && bodies.find(b => b.cells.includes(py * N + px));
    if (!body) continue;
    const target = Math.round((body.level - 2 - HB) * 10);
    if (back[gr * BG + gc] > target) { back[gr * BG + gc] = Math.max(0, target); flat++; }
  }
  for (const b of bodies) delete b.cells;
  return { mask: maskU8, maskSize: N, bodies, flat };
}
