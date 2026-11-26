// Facade atlas: 8 x 4 tiles of 256 px, each tile = one "bay" of 3 m x 3 m of wall.
// RGB = colour of fixed parts (glass, frames, doors); alpha = where the wall paint shows
// (the building colour is applied there by the shader).
import * as THREE from 'three';
import { rng } from './util.js';

export const TILE = {
  BLANK: 0, WIN_SHUTTER: 1, WIN_SLIDE: 2, WIN_MODERN: 3, WIN_SMALL: 4, DOOR_WOOD: 5, DOOR_METAL: 6, GARAGE: 7,
  SHOP_OPEN: 8, SHOP_CLOSED: 9, SHOP_GLASS: 10, COL_WINDOW: 11, COL_DOOR: 12, COBOGO: 13, METER: 14, WIN_DOUBLE: 15,
  UP_WIN: 16, UP_BALCONY: 17, UP_BLIND: 18, UP_BLANK: 19, UP_AC: 20, UP_GLASS: 21, UP_COL: 22, GATE_LOW: 23,
  BRICK: 24, BLOCK: 25, BLANK2: 26, WIN_GRID: 27, DOOR_GARAGE_WOOD: 28, SHOP_BAR: 29, WIN_ARCH: 30, VENT: 31,
};
export const COLS = 8, ROWS = 4, PX = 256;

export function makeFacadeAtlas() {
  const W = COLS * PX, H = ROWS * PX;
  const color = document.createElement('canvas'); color.width = W; color.height = H;
  const mask = document.createElement('canvas'); mask.width = W; mask.height = H;
  const g = color.getContext('2d'), m = mask.getContext('2d');
  const R = rng(4711);
  // base: paint everywhere (white rgb, alpha 1) with plaster grain
  g.fillStyle = '#f2f0ea'; g.fillRect(0, 0, W, H);
  for (let i = 0; i < 60000; i++) { const v = 215 + R() * 40; g.fillStyle = `rgba(${v},${v},${v - 4},0.25)`; g.fillRect(R() * W, R() * H, 1 + R() * 2, 1 + R() * 2); }
  m.fillStyle = '#fff'; m.fillRect(0, 0, W, H);
  const px = 256 / 3; // pixels per metre
  const tile = (i, fn) => {
    const x0 = (i % COLS) * PX, y0 = Math.floor(i / COLS) * PX;
    // helpers in metres, origin = bottom-left of the tile, y up
    const rect = (ctx, x, y, w, h) => ctx.fillRect(x0 + x * px, y0 + PX - (y + h) * px, w * px, h * px);
    const fill = (c, x, y, w, h) => { g.fillStyle = c; rect(g, x, y, w, h); m.fillStyle = '#000'; rect(m, x, y, w, h); };
    const paint = (c, x, y, w, h, a = 1) => { g.fillStyle = c; g.globalAlpha = a; rect(g, x, y, w, h); g.globalAlpha = 1; };
    const glass = (x, y, w, h, tint = '#2b3a46') => {
      fill(tint, x, y, w, h);
      const gr = g.createLinearGradient(x0 + x * px, y0 + PX - (y + h) * px, x0 + (x + w) * px, y0 + PX - y * px);
      gr.addColorStop(0, 'rgba(160,190,210,0.45)'); gr.addColorStop(0.45, 'rgba(40,55,70,0.05)'); gr.addColorStop(1, 'rgba(120,150,170,0.35)');
      g.fillStyle = gr; rect(g, x, y, w, h);
    };
    const sill = (x, y, w) => { paint('#d9d6cf', x - 0.08, y - 0.06, w + 0.16, 0.07); paint('rgba(0,0,0,0.12)', x - 0.04, y - 0.18, w + 0.08, 0.12); };
    const frame = (c, x, y, w, h, t = 0.05) => { fill(c, x - t, y - t, w + 2 * t, t); fill(c, x - t, y + h, w + 2 * t, t); fill(c, x - t, y, t, h); fill(c, x + w, y, t, h); };
    fn({ fill, paint, glass, sill, frame, rect, x0, y0 });
  };
  const bars = (T, x, y, w, h, c = '#2a2a2a', step = 0.12) => { for (let k = x + step / 2; k < x + w; k += step) T.fill(c, k, y, 0.025, h); T.fill(c, x, y + h * 0.5, w, 0.03); };
  // 0 blank, 26 blank (stained), 19/23 upper blank
  tile(TILE.BLANK, () => {});
  tile(TILE.BLANK2, T => { for (let k = 0; k < 6; k++) T.paint('rgba(90,80,70,0.06)', R() * 3, 0, 0.1 + R() * 0.3, 0.6 + R() * 1.5); });
  tile(TILE.UP_BLANK, () => {});
  // 1 window with wooden shutters (veneziana)
  tile(TILE.WIN_SHUTTER, T => {
    const x = 0.85, y = 1.0, w = 1.3, h = 1.2;
    T.frame('#e9e6df', x, y, w, h, 0.08); T.glass(x, y, w, h);
    T.fill('#7a4e2c', x, y, w * 0.48, h); T.fill('#7a4e2c', x + w * 0.52, y, w * 0.48, h);
    for (let k = y + 0.05; k < y + h; k += 0.07) { T.paint('rgba(0,0,0,0.28)', x, k, w * 0.48, 0.02); T.paint('rgba(0,0,0,0.28)', x + w * 0.52, k, w * 0.48, 0.02); }
    T.sill(x, y, w);
  });
  // 2 sliding aluminium window with security bars (grade)
  tile(TILE.WIN_SLIDE, T => {
    const x = 0.75, y = 1.0, w = 1.5, h = 1.15;
    T.frame('#efefef', x, y, w, h, 0.05); T.glass(x, y, w, h); T.fill('#e8e8e8', x + w / 2 - 0.02, y, 0.04, h);
    bars(T, x + 0.04, y + 0.04, w - 0.08, h - 0.08, '#3b3b3b', 0.13); T.sill(x, y, w);
  });
  // 3 modern large window, black frame
  tile(TILE.WIN_MODERN, T => { const x = 0.45, y = 0.85, w = 2.1, h = 1.45; T.frame('#1f1f1f', x, y, w, h, 0.05); T.glass(x, y, w, h, '#1d2a33'); T.fill('#1f1f1f', x + w / 3, y, 0.04, h); T.fill('#1f1f1f', x + 2 * w / 3, y, 0.04, h); });
  // 4 small high window (bathroom basculante)
  tile(TILE.WIN_SMALL, T => { const x = 1.1, y = 1.75, w = 0.8, h = 0.55; T.frame('#ececec', x, y, w, h, 0.04); T.glass(x, y, w, h, '#4a5864'); for (let k = 1; k < 3; k++) T.fill('#dadada', x, y + k * h / 3, w, 0.03); T.sill(x, y, w); });
  // 5 wooden front door + small window
  tile(TILE.DOOR_WOOD, T => {
    T.frame('#e8e4dc', 0.4, 0, 0.9, 2.1, 0.08); T.fill('#6b4223', 0.4, 0, 0.9, 2.1);
    for (const yy of [0.25, 1.15]) T.paint('rgba(0,0,0,0.22)', 0.52, yy, 0.66, 0.75);
    T.fill('#c9a54a', 1.15, 1.0, 0.06, 0.06);
    const x = 1.75, y = 1.0, w = 0.95, h = 1.1; T.frame('#efefef', x, y, w, h); T.glass(x, y, w, h); bars(T, x, y, w, h, '#333', 0.12); T.sill(x, y, w);
  });
  // 6 metal door with glass (porta social) + window
  tile(TILE.DOOR_METAL, T => {
    T.fill('#3d4a55', 0.35, 0, 1.0, 2.15); T.glass(0.45, 1.0, 0.8, 0.95, '#26313a'); bars(T, 0.45, 1.0, 0.8, 0.95, '#3d4a55', 0.1); T.fill('#b9b9b9', 1.2, 1.0, 0.05, 0.05);
    const x = 1.8, y = 1.0, w = 0.9, h = 1.1; T.frame('#efefef', x, y, w, h); T.glass(x, y, w, h); T.sill(x, y, w);
  });
  // 7 garage door (metal, horizontal slats)
  tile(TILE.GARAGE, T => { T.fill('#8d9196', 0.2, 0, 2.6, 2.3); for (let k = 0.1; k < 2.3; k += 0.14) T.paint('rgba(0,0,0,0.25)', 0.2, k, 2.6, 0.025); T.paint('rgba(255,255,255,0.15)', 0.2, 2.15, 2.6, 0.08); });
  // 28 wooden garage gate
  tile(TILE.DOOR_GARAGE_WOOD, T => { T.fill('#5e3b22', 0.2, 0, 2.6, 2.2); for (let k = 0.2; k < 2.8; k += 0.16) T.paint('rgba(0,0,0,0.3)', k, 0, 0.02, 2.2); T.fill('#2b2b2b', 1.47, 0, 0.06, 2.2); });
  // 8 shop with roll-up door open (dark interior with shelves)
  tile(TILE.SHOP_OPEN, T => {
    T.fill('#1c1a18', 0.15, 0, 2.7, 2.6);
    const cols = ['#b5462e', '#2e6fb5', '#e3c24a', '#3a9a52', '#ddd', '#8a4ab5'];
    for (let s = 0; s < 4; s++) for (let k = 0; k < 9; k++) T.paint(cols[Math.floor(R() * cols.length)], 0.3 + k * 0.28, 0.35 + s * 0.5, 0.2, 0.3, 0.75);
    T.fill('#6f7377', 0.15, 2.45, 2.7, 0.18); for (let k = 2.47; k < 2.62; k += 0.04) T.paint('rgba(0,0,0,0.35)', 0.15, k, 2.7, 0.01);
  });
  // 9 shop closed (roll-up steel door)
  tile(TILE.SHOP_CLOSED, T => { T.fill('#9aa0a5', 0.15, 0, 2.7, 2.6); for (let k = 0.05; k < 2.6; k += 0.06) T.paint('rgba(0,0,0,0.22)', 0.15, k, 2.7, 0.015); T.fill('#7d8287', 0.15, 2.45, 2.7, 0.18); });
  // 10 glass storefront
  tile(TILE.SHOP_GLASS, T => { T.fill('#d0d4d8', 0.15, 0, 2.7, 2.6); T.glass(0.22, 0.05, 1.25, 2.4, '#2c3d48'); T.glass(1.53, 0.05, 1.25, 2.4, '#2c3d48'); T.fill('#b0b6bb', 1.47, 0, 0.06, 2.5); });
  // 29 bar / lanchonete: open front with counter
  tile(TILE.SHOP_BAR, T => { T.fill('#24201d', 0.15, 0, 2.7, 2.6); T.fill('#a33a2a', 0.15, 0, 2.7, 0.95); T.fill('#e9e2d0', 0.15, 0.95, 2.7, 0.05); for (let k = 0; k < 6; k++) T.paint('#d9c79a', 0.35 + k * 0.42, 1.5, 0.18, 0.5, 0.6); });
  // 11 colonial tall window with bandeira, 12 colonial double door
  tile(TILE.COL_WINDOW, T => { const x = 0.95, y = 0.9, w = 1.1, h = 1.85; T.frame('#e5dfd2', x, y, w, h, 0.12); T.glass(x, y + 1.35, w, 0.5, '#33414c'); T.fill('#2f5a46', x, y, w * 0.49, 1.33); T.fill('#2f5a46', x + w * 0.51, y, w * 0.49, 1.33); for (let k = y + 0.05; k < y + 1.3; k += 0.08) T.paint('rgba(0,0,0,0.25)', x, k, w, 0.02); T.sill(x, y, w); });
  tile(TILE.COL_DOOR, T => { const x = 0.9, w = 1.2, h = 2.5; T.frame('#e5dfd2', x, 0, w, h, 0.14); T.fill('#3a2716', x, 0, w * 0.49, 2.0); T.fill('#3a2716', x + w * 0.51, 0, w * 0.49, 2.0); T.glass(x, 2.0, w, 0.5, '#33414c'); for (const yy of [0.3, 1.1]) { T.paint('rgba(255,255,255,0.08)', x + 0.1, yy, w * 0.3, 0.6); T.paint('rgba(255,255,255,0.08)', x + w * 0.6, yy, w * 0.3, 0.6); } });
  tile(TILE.UP_COL, T => { const x = 0.95, y = 0.7, w = 1.1, h = 1.9; T.frame('#e5dfd2', x, y, w, h, 0.12); T.glass(x, y, w, h, '#33414c'); T.fill('#e5dfd2', x + w / 2 - 0.03, y, 0.06, h); T.fill('#2d2d2d', x - 0.15, y, w + 0.3, 0.06); for (let k = x - 0.12; k < x + w + 0.12; k += 0.1) T.fill('#2d2d2d', k, y, 0.02, 0.6); T.fill('#2d2d2d', x - 0.15, y + 0.6, w + 0.3, 0.04); });
  // 13 cobogó (vent blocks)
  tile(TILE.COBOGO, T => { for (let i = 0; i < 6; i++) for (let j = 0; j < 6; j++) { T.fill('#d8d4cb', 0.6 + i * 0.3, 0.4 + j * 0.3, 0.28, 0.28); T.fill('#3a3a3a', 0.66 + i * 0.3, 0.46 + j * 0.3, 0.16, 0.16); } });
  // 14 blank with electricity meter box (padrão CEMIG) and house number
  tile(TILE.METER, T => { T.fill('#d9d9d9', 1.2, 0.9, 0.45, 0.6); T.fill('#2d3e4c', 1.27, 1.05, 0.3, 0.32); T.fill('#555', 1.4, 1.5, 0.05, 1.3); T.fill('#1b4f8f', 2.1, 1.75, 0.35, 0.22); T.paint('#fff', 2.16, 1.8, 0.23, 0.12); });
  // 15 two small windows
  tile(TILE.WIN_DOUBLE, T => { for (const x of [0.45, 1.7]) { T.frame('#efefef', x, 1.05, 0.85, 1.0); T.glass(x, 1.05, 0.85, 1.0); bars(T, x, 1.05, 0.85, 1.0, '#333', 0.12); T.sill(x, 1.05, 0.85); } });
  // 27 window with decorative iron grid
  tile(TILE.WIN_GRID, T => { const x = 0.8, y = 1.0, w = 1.4, h = 1.2; T.frame('#efefef', x, y, w, h); T.glass(x, y, w, h); for (let k = 0; k <= 5; k++) { T.fill('#2a2a2a', x + k * w / 5 - 0.012, y, 0.025, h); } for (let k = 0; k <= 4; k++) T.fill('#2a2a2a', x, y + k * h / 4 - 0.012, w, 0.025); T.sill(x, y, w); });
  // 30 arched window (old houses)
  tile(TILE.WIN_ARCH, T => { const x = 1.0, y = 0.95, w = 1.0, h = 1.55; T.frame('#e8e2d6', x, y, w, h, 0.1); T.glass(x, y, w, h, '#2f3c46'); T.fill('#e8e2d6', x + w / 2 - 0.03, y, 0.06, h); T.fill('#e8e2d6', x, y + h * 0.7, w, 0.05); T.sill(x, y, w); });
  // 31 ventilation strip high on wall
  tile(TILE.VENT, T => { for (let k = 0; k < 6; k++) T.fill('#3b3b3b', 0.6 + k * 0.32, 2.3, 0.22, 0.12); });
  // upper floor tiles
  tile(TILE.UP_WIN, T => { const x = 0.7, y = 0.9, w = 1.6, h = 1.2; T.frame('#f0f0f0', x, y, w, h); T.glass(x, y, w, h); T.fill('#e6e6e6', x + w / 2 - 0.02, y, 0.04, h); T.sill(x, y, w); });
  tile(TILE.UP_BALCONY, T => { const x = 0.55, y = 0.0, w = 1.9, h = 2.15; T.frame('#f0f0f0', x, y, w, h); T.glass(x, y, w, h, '#24323c'); T.fill('#e6e6e6', x + w / 2 - 0.02, y, 0.04, h); });
  tile(TILE.UP_BLIND, T => { const x = 0.75, y = 0.9, w = 1.5, h = 1.25; T.frame('#ececec', x, y, w, h); T.glass(x, y, w, h); T.fill('#d9d4c7', x, y + h * 0.45, w, h * 0.55); for (let k = y + h * 0.45; k < y + h; k += 0.05) T.paint('rgba(0,0,0,0.15)', x, k, w, 0.012); T.sill(x, y, w); });
  tile(TILE.UP_AC, T => { const x = 0.6, y = 0.95, w = 1.2, h = 1.1; T.frame('#f0f0f0', x, y, w, h); T.glass(x, y, w, h); T.sill(x, y, w); T.fill('#f2f2f2', 2.05, 1.9, 0.75, 0.45); for (let k = 2.0; k < 2.3; k += 0.05) T.paint('rgba(0,0,0,0.2)', 2.1, k, 0.65, 0.015); });
  tile(TILE.UP_GLASS, T => { T.glass(0.05, 0.05, 2.9, 2.85, '#22303a'); T.fill('#9aa5ad', 0.05, 2.85, 2.9, 0.15); T.fill('#9aa5ad', 1.48, 0.05, 0.04, 2.85); });
  tile(TILE.GATE_LOW, T => { T.fill('#2d2d2d', 0.1, 0, 2.8, 0.05); for (let k = 0.15; k < 2.9; k += 0.12) T.fill('#2d2d2d', k, 0, 0.03, 1.5); });
  // 24 exposed brick, 25 concrete block (unplastered): fixed colour (no paint)
  tile(TILE.BRICK, T => {
    T.fill('#b8673f', 0, 0, 3, 3);
    for (let r = 0; r < 33; r++) for (let c = -1; c < 13; c++) { const v = 0.82 + R() * 0.3; T.paint(`rgb(${Math.min(255, 190 * v) | 0},${105 * v | 0},${66 * v | 0})`, c * 0.24 + (r % 2) * 0.12 + 0.01, r * 0.09 + 0.012, 0.22, 0.075); }
  });
  tile(TILE.BLOCK, T => {
    T.fill('#9d9d98', 0, 0, 3, 3);
    for (let r = 0; r < 15; r++) for (let c = -1; c < 8; c++) { const v = 0.88 + R() * 0.2; T.paint(`rgb(${168 * v | 0},${167 * v | 0},${162 * v | 0})`, c * 0.4 + (r % 2) * 0.2 + 0.01, r * 0.2 + 0.012, 0.38, 0.18); }
  });
  // merge colour + mask into an RGBA texture
  const cd = g.getImageData(0, 0, W, H), md = m.getImageData(0, 0, W, H);
  for (let i = 0; i < W * H; i++) cd.data[i * 4 + 3] = md.data[i * 4];
  // canvas with straight alpha -> upload via DataTexture (avoids premultiplication loss)
  const tex = new THREE.DataTexture(new Uint8Array(cd.data.buffer), W, H, THREE.RGBAFormat);
  tex.flipY = true;
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.generateMipmaps = true; tex.minFilter = THREE.LinearMipmapLinearFilter; tex.magFilter = THREE.LinearFilter;
  tex.anisotropy = 8;
  tex.needsUpdate = true;
  return tex;
}

/** uv rectangle of a tile (with a 2 px inset against bleeding). */
export function tileUV(i) {
  const c = i % COLS, r = Math.floor(i / COLS), e = 2 / (COLS * PX), f = 2 / (ROWS * PX);
  // flipY: row 0 is at the top of the canvas -> v near 1
  return { u0: c / COLS + e, u1: (c + 1) / COLS - e, v0: 1 - (r + 1) / ROWS + f, v1: 1 - r / ROWS - f };
}

// ------------------------------------------------------------------- roof & sign textures
function canvasTexture(c, repeat = true) {
  const t = new THREE.CanvasTexture(c);
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  return t;
}
/** Clay tiles (telha colonial), 1 texture unit = 1 m; greyscale-ish so the roof colour tints it. */
export function tileRoofTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 256;
  const g = c.getContext('2d'), R = rng(99);
  g.fillStyle = '#d9d9d9'; g.fillRect(0, 0, 256, 256);
  const cw = 256 / 6, rh = 256 / 6;
  for (let r = 0; r < 6; r++) for (let k = 0; k < 6; k++) {
    const x = k * cw, y = r * rh, v = 0.82 + R() * 0.3;
    const gr = g.createLinearGradient(x, 0, x + cw, 0);
    gr.addColorStop(0, `rgb(${150 * v | 0},${150 * v | 0},${150 * v | 0})`); gr.addColorStop(0.5, `rgb(${250 * v | 0},${250 * v | 0},${250 * v | 0})`); gr.addColorStop(1, `rgb(${140 * v | 0},${140 * v | 0},${140 * v | 0})`);
    g.fillStyle = gr; g.fillRect(x + 1, y, cw - 2, rh);
    g.fillStyle = 'rgba(0,0,0,0.35)'; g.fillRect(x, y + rh - 5, cw, 5);
    if (R() < 0.08) { g.fillStyle = 'rgba(40,40,30,0.25)'; g.fillRect(x, y, cw, rh); } // moss / dirt
  }
  return canvasTexture(c);
}
export function fiberRoofTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d');
  for (let x = 0; x < 128; x++) { const v = 190 + 45 * Math.sin(x / 128 * Math.PI * 2 * 6); g.fillStyle = `rgb(${v},${v},${v - 2})`; g.fillRect(x, 0, 1, 128); }
  const R = rng(7); for (let i = 0; i < 300; i++) { g.fillStyle = `rgba(60,60,50,${R() * 0.1})`; g.fillRect(R() * 128, R() * 128, 6 + R() * 20, 4 + R() * 12); }
  g.fillStyle = 'rgba(0,0,0,0.18)'; g.fillRect(0, 0, 128, 2);
  return canvasTexture(c);
}
export function metalRoofTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d');
  for (let x = 0; x < 128; x++) { const t = (x % 32) / 32; const v = t < 0.15 ? 250 : t < 0.3 ? 205 : 228; g.fillStyle = `rgb(${v},${v},${v + 2})`; g.fillRect(x, 0, 1, 128); }
  return canvasTexture(c);
}
export function slabTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d'), R = rng(3);
  g.fillStyle = '#c9c6bf'; g.fillRect(0, 0, 128, 128);
  for (let i = 0; i < 700; i++) { const v = 150 + R() * 70; g.fillStyle = `rgba(${v},${v},${v - 6},0.4)`; g.fillRect(R() * 128, R() * 128, 2 + R() * 6, 2 + R() * 6); }
  for (let i = 0; i < 8; i++) { g.fillStyle = 'rgba(70,65,55,0.12)'; g.fillRect(R() * 128, R() * 128, 20 + R() * 40, 10 + R() * 30); }
  return canvasTexture(c);
}

/** Atlas of shop signs with the real business names. Returns {texture, uv(i)}. */
export function makeSignAtlas(names) {
  const per = 4, rows = Math.max(1, Math.ceil(names.length / per));
  const W = 2048, RH = 96, H = Math.min(4096, 2 ** Math.ceil(Math.log2(rows * RH)));
  const c = document.createElement('canvas'); c.width = W; c.height = H;
  const g = c.getContext('2d');
  const palettes = [['#c62828', '#fff'], ['#1565c0', '#fff'], ['#f9a825', '#1a1a1a'], ['#2e7d32', '#fff'], ['#ffffff', '#c62828'], ['#ffffff', '#1565c0'], ['#212121', '#ffd54f'], ['#6a1b9a', '#fff'], ['#ef6c00', '#fff'], ['#00838f', '#fff']];
  const uvs = [];
  names.forEach((name, i) => {
    const col = i % per, row = Math.floor(i / per);
    const x = col * (W / per), y = row * RH, w = W / per, h = RH;
    const [bg, fg] = palettes[(name.length * 7 + i) % palettes.length];
    g.fillStyle = bg; g.fillRect(x + 2, y + 2, w - 4, h - 4);
    g.strokeStyle = 'rgba(0,0,0,0.3)'; g.lineWidth = 3; g.strokeRect(x + 3, y + 3, w - 6, h - 6);
    g.fillStyle = fg; g.textAlign = 'center'; g.textBaseline = 'middle';
    let size = 54;
    const text = name.toUpperCase();
    g.font = `800 ${size}px system-ui, Arial, sans-serif`;
    while (g.measureText(text).width > w - 24 && size > 18) { size -= 2; g.font = `800 ${size}px system-ui, Arial, sans-serif`; }
    g.fillText(text, x + w / 2, y + h / 2 + 2);
    uvs.push({ u0: x / W, u1: (x + w) / W, v0: 1 - (y + h) / H, v1: 1 - y / H, aspect: w / h });
  });
  const t = canvasTexture(c, false);
  return { texture: t, uv: i => uvs[i] };
}
