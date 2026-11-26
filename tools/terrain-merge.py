"""Improve the terrain with the Copernicus GLO-30 DEM.

Copernicus (TanDEM-X) has much better relief than the SRTM-derived grid we had, but it is a
surface model: tree canopies and roofs show up as "terrain". So we only trust it on open ground
(fields, streets, empty lots) and interpolate the correction underneath woods and houses:

  correction = Copernicus - global_offset - old_height        (on open-ground cells)
  correction  -> filled (Laplace) under trees / buildings, smoothed, clamped to +-8 m
  new_height  = old_height + correction * weight              (weight 0 at rail / viaducts / river)

Input : source/height.u16 (old grid), source/city.json, source/ground.jpg,
        source/copernicus_utm24s_30m.tif (aimores_dem_utm24s_30m.tif from the relief package)
Output: source/height_v6.u16
Usage : python3 tools/terrain-merge.py
"""
import json
import numpy as np
import cv2
from PIL import Image
from pyproj import Transformer

C = json.load(open('source/city.json')); m = C['meta']
GW, GH, G = m['GW'], m['GH'], m['G']
old = np.frombuffer(open('source/height.u16', 'rb').read(), dtype=np.uint16).reshape(GH, GW).astype(np.float64) / 100 + m['HB']

cop = np.array(Image.open('source/copernicus_utm24s_30m.tif'), dtype=np.float32)
E0, N0, S = 276414.54815244395, 7845939.214993973, 30.0  # GeoTIFF tie point (top-left corner), 30 m pixels
cop[cop < -1000] = np.nan

# sample Copernicus at every grid post (bicubic)
xs = m['XMIN'] + np.arange(GW) * G
zs = m['ZMIN'] + np.arange(GH) * G
X, Z = np.meshgrid(xs, zs)
lon = m['LON0'] + X / m['KX']; lat = m['LAT0'] - Z / m['KZ']
E, N = Transformer.from_crs('EPSG:4326', 'EPSG:32724', always_xy=True).transform(lon, lat)
mapx = ((E - E0) / S - 0.5).astype(np.float32); mapy = ((N0 - N) / S - 0.5).astype(np.float32)
copg = cv2.remap(np.nan_to_num(cop, nan=-9999).astype(np.float32), mapx, mapy, cv2.INTER_CUBIC).astype(np.float64)
valid = copg > -100

# --- masks -------------------------------------------------------------------------------------
img = np.asarray(Image.open('source/ground.jpg').convert('RGB').resize((GW, GH), Image.BOX)).astype(np.float64)
r, g, b = img[..., 0], img[..., 1], img[..., 2]
lum = (r + g + b) / 3
trees = (g > r + 4) & (g > b) & (lum < 118)           # dark green canopy (grass is brighter)
bld = np.zeros((GH, GW), np.uint8)
def to_px(p): return [((x - m['XMIN']) / G, (z - m['ZMIN']) / G) for x, z in p]
for bd in C['buildings']:
    cv2.fillPoly(bld, [np.int32(np.round(to_px(bd['p'])))], 1)
bld = cv2.dilate(bld, np.ones((3, 3), np.uint8)) > 0
trees = cv2.dilate(trees.astype(np.uint8), np.ones((3, 3), np.uint8)) > 0
open_ground = valid & ~trees & ~bld

# keep-old weight: rail corridor, viaducts, river
keep = np.zeros((GH, GW), np.uint8)
for rl in C['rail']:
    cv2.polylines(keep, [np.int32(np.round(to_px(rl['pts'])))], False, 1, thickness=5)  # ~20 m wide
for w in (C.get('viaduct2') or {}).get('ways', []):
    cv2.polylines(keep, [np.int32(np.round(to_px(w['pts'])))], False, 1, thickness=6)
for rp in C['viaduct']['ramps']:
    cv2.polylines(keep, [np.int32(np.round(to_px(rp['pts'])))], False, 1, thickness=6)
keep |= (old < m['WL'] + 2.5).astype(np.uint8)
dist = cv2.distanceTransform((1 - keep).astype(np.uint8), cv2.DIST_L2, 5) * G   # metres from kept areas
weight = np.clip((dist - 6) / 24, 0, 1)

# --- correction field ---------------------------------------------------------------------------
diff = copg - old
offset = np.median(diff[open_ground])
corr = np.where(open_ground, diff - offset, np.nan)
print('offset %.2f m, open ground %.0f%%' % (offset, 100 * open_ground.mean()))
known = ~np.isnan(corr)
c = np.where(known, corr, 0.0)
# Laplace fill (multigrid-ish: coarse init from blurred known values, then Jacobi relaxation)
num = cv2.GaussianBlur(np.where(known, c, 0), (0, 0), 12); den = cv2.GaussianBlur(known.astype(np.float64), (0, 0), 12)
c = np.where(known, c, num / np.maximum(den, 1e-6))
for it in range(400):
    avg = cv2.blur(c, (3, 3))
    c = np.where(known, corr, avg)
c = cv2.GaussianBlur(c, (0, 0), 2.0)          # ~8 m smoothing, removes 30 m pixel steps
c = np.clip(c, -8, 8)
new = old + c * weight
print('change: mean %.2f  p05 %.2f  p95 %.2f  max|.| %.2f' % ((new - old).mean(), np.percentile(new - old, 5), np.percentile(new - old, 95), np.abs(new - old).max()))
u16 = np.clip(np.round((new - m['HB']) * 100), 0, 65535).astype(np.uint16)
u16.tofile('source/height_v6.u16')
np.save('/tmp/terrain_change.npy', (new - old).astype(np.float32))
print('wrote source/height_v6.u16')
