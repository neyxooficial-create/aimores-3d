"""Hydrology pass used to find the town's creek (córrego) on the terrain grid.

Priority-flood sink filling + D8 flow directions + flow accumulation on source/height.u16,
then traces the main stem upstream from where it meets the Rio Doce.  The result was checked
against the satellite image: it follows the riparian vegetation strip (club woods -> Triângulo ->
Campo do Botafogo -> railway -> Centro -> rocky slope -> Rio Doce).

Output: source/creek_raw.json  [[x, z, terrain_h, accumulation_cells], ...] upstream -> mouth
Usage:  python3 tools/creek-trace.py
"""
import heapq, json
import numpy as np

C = json.load(open('source/city.json'))
m = C['meta']; GW, GH, G = m['GW'], m['GH'], m['G']
h = np.frombuffer(open('source/height.u16', 'rb').read(), dtype=np.uint16).reshape(GH, GW).astype(np.float64) / 100 + m['HB']

H = h.copy(); seen = np.zeros_like(H, bool); pq = []
for r in range(GH):
    for c in range(GW):
        if r in (0, GH - 1) or c in (0, GW - 1):
            heapq.heappush(pq, (H[r, c], r, c)); seen[r, c] = True
while pq:
    z, r, c = heapq.heappop(pq)
    for dr in (-1, 0, 1):
        for dc in (-1, 0, 1):
            rr, cc = r + dr, c + dc
            if (dr or dc) and 0 <= rr < GH and 0 <= cc < GW and not seen[rr, cc]:
                seen[rr, cc] = True
                if H[rr, cc] <= z: H[rr, cc] = z + 1e-4
                heapq.heappush(pq, (H[rr, cc], rr, cc))

acc = np.ones((GH, GW)); down = {}
order = sorted(((H[r, c], r, c) for r in range(GH) for c in range(GW)), reverse=True)
for z, r, c in order:
    best, bs = None, 0
    for dr in (-1, 0, 1):
        for dc in (-1, 0, 1):
            rr, cc = r + dr, c + dc
            if (dr or dc) and 0 <= rr < GH and 0 <= cc < GW:
                s = (z - H[rr, cc]) / (G * (1.4142 if dr and dc else 1))
                if s > bs: bs, best = s, (rr, cc)
    if best: acc[best] += acc[r, c]; down[(r, c)] = best

# mouth = strongest channel reaching the northern (river) edge below the town centre
mouth = max(((r, c) for r in range(60) for c in range(GW) if -560 < m['XMIN'] + c * G < -300), key=lambda k: acc[k])
up = {}
for k, v in down.items(): up.setdefault(v, []).append(k)
path, cur = [mouth], mouth
while True:
    nb = max(up.get(cur, []), key=lambda k: acc[k], default=None)
    if nb is None or acc[nb] < 900: break
    path.append(nb); cur = nb
path.reverse()
out = [[m['XMIN'] + c * G, m['ZMIN'] + r * G, round(float(h[r, c]), 2), int(acc[r, c])] for r, c in path]
json.dump(out, open('source/creek_raw.json', 'w'))
print('creek points', len(out))
