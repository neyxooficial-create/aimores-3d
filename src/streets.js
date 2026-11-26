// Street names: blue street-sign labels near the camera + a search box for streets and places.
import * as THREE from 'three';

const norm = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

export class Streets {
  constructor({ city, T, root, flyTo, places }) {
    this.T = T;
    this.flyTo = flyTo;
    this.places = places;
    this.on = true;
    // one label per stretch of road (long roads get one every ~140 m)
    this.labels = [];
    this.byName = new Map();
    for (const r of city.roads) {
      if (!r.n || r.hw === 'footway' || r.hw === 'path') continue;
      let L = 0;
      const cum = [0];
      for (let i = 1; i < r.p.length; i++) { L += Math.hypot(r.p[i][0] - r.p[i - 1][0], r.p[i][1] - r.p[i - 1][1]); cum.push(L); }
      if (L < 25) continue;
      if (!this.byName.has(r.n)) this.byName.set(r.n, []);
      this.byName.get(r.n).push({ r, L });
      const n = Math.max(1, Math.round(L / 140));
      for (let k = 0; k < n; k++) {
        const s = L * (k + 0.5) / n;
        let i = 1;
        while (i < cum.length - 1 && cum[i] < s) i++;
        const t = (s - cum[i - 1]) / ((cum[i] - cum[i - 1]) || 1);
        const [ax, az] = r.p[i - 1], [bx, bz] = r.p[i];
        const x = ax + (bx - ax) * t, z = az + (bz - az) * t;
        const el = document.createElement('div');
        el.className = 'street';
        el.textContent = r.n;
        el.style.display = 'none';
        root.appendChild(el);
        this.labels.push({ name: r.n, el, pos: new THREE.Vector3(x, T.at(x, z) + 3.2, z) });
      }
    }
    this.v = new THREE.Vector3();
    this.setupSearch();
  }

  setVisible(v) { this.on = v; if (!v) for (const l of this.labels) l.el.style.display = 'none'; }

  update(camera, W, H, low) {
    if (!this.on) return;
    const cam = camera.position;
    const boxes = [];
    const vis = [];
    for (const l of this.labels) {
      const d = cam.distanceTo(l.pos);
      if (d > (low ? 160 : 230)) { l.el.style.display = 'none'; continue; }
      this.v.copy(l.pos).project(camera);
      if (this.v.z > 1 || Math.abs(this.v.x) > 1.05 || Math.abs(this.v.y) > 1.05) { l.el.style.display = 'none'; continue; }
      vis.push({ l, d, x: (this.v.x * 0.5 + 0.5) * W, y: (-this.v.y * 0.5 + 0.5) * H });
    }
    vis.sort((a, b) => a.d - b.d);
    for (const v of vis) {
      const w = 16 + v.l.name.length * 6.4, x0 = v.x - w / 2, y0 = v.y - 12, x1 = v.x + w / 2, y1 = v.y + 12;
      if (boxes.some(b => x0 < b[2] && x1 > b[0] && y0 < b[3] && y1 > b[1])) { v.l.el.style.display = 'none'; continue; }
      boxes.push([x0, y0, x1, y1]);
      v.l.el.style.display = '';
      v.l.el.style.opacity = String(Math.max(0.35, Math.min(1, 1.6 - v.d / 160)));
      v.l.el.style.transform = `translate(${v.x.toFixed(1)}px, ${v.y.toFixed(1)}px) translate(-50%, -50%)`;
    }
  }

  setupSearch() {
    const input = document.getElementById('search'), out = document.getElementById('searchres');
    if (!input) return;
    const go = it => {
      out.classList.remove('show'); input.blur();
      if (it.kind === 'rua') {
        // centre of the longest stretch of that street
        const parts = this.byName.get(it.name).sort((a, b) => b.L - a.L);
        const p = parts[0].r.p, m = p[Math.floor(p.length / 2)];
        this.flyTo(new THREE.Vector3(m[0], this.T.at(m[0], m[1]), m[1]), 140, 0.95);
      } else this.places.select(it.i, true);
    };
    input.oninput = () => {
      const q = norm(input.value.trim());
      if (q.length < 2) { out.classList.remove('show'); return; }
      const res = [];
      for (const name of this.byName.keys()) if (norm(name).includes(q)) res.push({ kind: 'rua', name, label: name, sub: 'Rua' });
      if (this.places) for (const it of this.places.items) if (norm(it.name).includes(q) || norm(it.address || '').includes(q)) res.push({ kind: 'lugar', i: it.i, name: it.name, label: it.name, sub: it.address || '' });
      out.innerHTML = res.slice(0, 12).map((r, k) => `<div class="sr" data-k="${k}"><span>${r.kind === 'rua' ? '🛣' : '📍'}</span><div><b>${r.label.replace(/</g, '&lt;')}</b><small>${(r.sub || '').replace(/</g, '&lt;')}</small></div></div>`).join('') || '<div class="hint" style="padding:6px">Nada encontrado</div>';
      out.classList.add('show');
      out.querySelectorAll('.sr').forEach(el => el.onclick = () => go(res[+el.dataset.k]));
    };
    input.onkeydown = e => { if (e.key === 'Enter') { const f = out.querySelector('.sr'); if (f) f.click(); } if (e.key === 'Escape') { out.classList.remove('show'); input.blur(); } };
  }
}
