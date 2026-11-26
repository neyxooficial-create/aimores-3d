// Comércios e serviços reais: pins over each business (Overture Maps places), with a bottom tab
// to switch categories on/off, a searchable list and a details card.
import * as THREE from 'three';

export const GROUPS = {
  saude: { label: 'Saúde', icon: '✚', color: '#ef4444' },
  alimentacao: { label: 'Alimentação', icon: '🍽', color: '#f59e0b' },
  lojas: { label: 'Lojas', icon: '🛍', color: '#a855f7' },
  servicos: { label: 'Serviços', icon: '🛠', color: '#64748b' },
  bancos: { label: 'Bancos', icon: '$', color: '#16a34a' },
  igrejas: { label: 'Igrejas', icon: '✝', color: '#0ea5e9' },
  educacao: { label: 'Escolas', icon: '🎓', color: '#2563eb' },
  publico: { label: 'Público', icon: '🏛', color: '#0f766e' },
  hospedagem: { label: 'Hospedagem', icon: '🛏', color: '#db2777' },
  postos: { label: 'Postos', icon: '⛽', color: '#ea580c' },
};

const KIND_PT = {
  pharmacy: 'Farmácia', pharmacy_and_drug_store: 'Farmácia', dental_clinic: 'Dentista', dentist: 'Dentista',
  diagnostics_imaging_or_lab_service: 'Laboratório / exames', medical_laboratory: 'Laboratório', medical_service: 'Serviço médico',
  behavioral_or_mental_health_clinic: 'Psicologia / saúde mental', surgery: 'Cirurgia', hospital: 'Hospital', doctor: 'Médico',
  restaurant: 'Restaurante', casual_eatery: 'Lanchonete', bar: 'Bar', cafe: 'Café', fast_food_restaurant: 'Fast-food',
  food_service: 'Alimentação', smoothie_juice_bar: 'Sucos / açaí', food_and_beverage_store: 'Mercado / padaria', bakery: 'Padaria',
  supermarket: 'Supermercado', grocery_store: 'Mercearia', butcher_shop: 'Açougue', pizza_restaurant: 'Pizzaria',
  fashion_and_apparel_store: 'Loja de roupas', clothing_store: 'Loja de roupas', shoe_store: 'Calçados',
  hardware_home_and_garden_store: 'Material de construção', hardware_store: 'Material de construção', electronics_store: 'Eletrônicos',
  sporting_goods_store: 'Artigos esportivos', flowers_and_gifts_store: 'Presentes / flores', department_store: 'Loja de departamento',
  shopping: 'Comércio', vehicle_parts_store: 'Autopeças', personal_care_and_beauty_store: 'Cosméticos', furniture_store: 'Móveis',
  personal_or_beauty_service: 'Salão / estética', beauty_salon: 'Salão de beleza', barber: 'Barbearia', hair_salon: 'Cabeleireiro',
  professional_service: 'Serviço profissional', automotive_service: 'Oficina / auto', auto_repair: 'Oficina mecânica',
  home_service: 'Serviços para casa', legal_service: 'Jurídico', attorney_or_law_firm: 'Advocacia', lawyer: 'Advocacia',
  design_service: 'Design', technical_service: 'Assistência técnica', printing_service: 'Gráfica', real_estate_service: 'Imobiliária',
  travel_service: 'Turismo', media_service: 'Mídia', event_or_party_service: 'Festas e eventos', corporate_or_business_office: 'Escritório',
  gym: 'Academia', veterinarian: 'Veterinário', notary: 'Cartório', optometrist: 'Ótica', eyewear_and_optician: 'Ótica', radio_station: 'Rádio', manufacturer: 'Indústria', accountant: 'Contabilidade',
  bank_or_credit_union: 'Banco', bank: 'Banco', financial_service: 'Financeira', atm: 'Caixa eletrônico',
  christian_place_of_worship: 'Igreja', church_cathedral: 'Igreja', religious_organization: 'Organização religiosa',
  specialty_school: 'Curso / escola', place_of_learning: 'Escola', elementary_school: 'Escola', college_university: 'Faculdade',
  education: 'Educação', educational_service: 'Educação', school: 'Escola',
  government_office: 'Órgão público', police_station: 'Polícia', courthouse: 'Fórum', community_and_government: 'Público',
  social_or_community_service: 'Serviço social', museum: 'Museu', historic_site: 'Patrimônio histórico', train_station: 'Estação de trem',
  public_transit_facility_or_service: 'Transporte', park: 'Praça / parque', stadium_arena: 'Estádio', sports_and_recreation: 'Esporte e lazer',
  arts_and_entertainment: 'Cultura e lazer', hotel: 'Hotel / pousada', gas_station: 'Posto de combustível',
};
export const kindPt = k => KIND_PT[k] || (k || '').replace(/_/g, ' ');

export class Places {
  /** @param places [[name, x, z, group, kind, address, phone, conf], ...] */
  constructor({ places, T, buildings, root, panelBtn, flyTo }) {
    this.T = T;
    this.flyTo = flyTo;
    this.on = false;
    this.cats = Object.fromEntries(Object.keys(GROUPS).map(k => [k, true]));
    this.items = places.map(([name, x, z, group, kind, address, phone, conf], i) => {
      // stand the pin on top of the building that contains the place, if any
      let top = T.at(x, z) + 5;
      for (const b of buildings) {
        const p = b.p;
        if (Math.abs(p[0][0] - x) > 60 || Math.abs(p[0][1] - z) > 60) continue;
        let inside = false;
        for (let a = 0, c = p.length - 1; a < p.length; c = a++) if ((p[a][1] > z) !== (p[c][1] > z) && x < (p[c][0] - p[a][0]) * (z - p[a][1]) / (p[c][1] - p[a][1]) + p[a][0]) inside = !inside;
        if (inside) { top = T.at(x, z) + b.h + (b.r === 'flat' || b.r === 'flatc' ? 1.5 : 3.5); break; }
      }
      const el = document.createElement('div');
      const G = GROUPS[group] || GROUPS.servicos;
      el.className = 'pin';
      el.style.setProperty('--c', G.color);
      el.innerHTML = `<i>${G.icon}</i><span>${escapeHtml(name)}</span>`;
      el.onclick = ev => { ev.stopPropagation(); this.select(i); };
      root.appendChild(el);
      return { i, name, x, z, y: top + 2.5, group, kind, address, phone, conf, el, pos: new THREE.Vector3(x, top + 2.5, z) };
    });
    this.root = root;
    this.card = document.getElementById('placecard');
    this.panel = document.getElementById('placespanel');
    this.v = new THREE.Vector3();
    this.buildPanel();
    panelBtn.onclick = () => this.toggle();
    this.setOn(false);
  }

  toggle() { this.setOn(!this.on); }
  setOn(v) {
    this.on = v;
    this.panel.classList.toggle('show', v);
    document.getElementById('placesbtn').classList.toggle('on', v);
    for (const it of this.items) it.el.style.display = 'none';
    if (!v) this.card.classList.remove('show');
  }

  buildPanel() {
    const counts = {};
    for (const it of this.items) counts[it.group] = (counts[it.group] || 0) + 1;
    const chips = Object.entries(GROUPS).filter(([k]) => counts[k]).map(([k, g]) =>
      `<button class="chip on" data-cat="${k}" style="--c:${g.color}"><i>${g.icon}</i>${g.label} <b>${counts[k]}</b></button>`).join('');
    this.panel.innerHTML = `<div class="ph"><b>🏪 Comércios e serviços</b><span class="hint">${this.items.length} lugares reais · fonte: Overture Maps</span><button class="ic" id="placesclose">✕</button></div>
      <div class="chips">${chips}</div>
      <input id="placesearch" placeholder="Buscar (ex.: farmácia, padaria, dentista…)" autocomplete="off">
      <div class="plist" id="placelist"></div>`;
    this.panel.querySelectorAll('.chip').forEach(b => b.onclick = () => {
      this.cats[b.dataset.cat] = !this.cats[b.dataset.cat];
      b.classList.toggle('on', this.cats[b.dataset.cat]);
      this.renderList();
    });
    document.getElementById('placesclose').onclick = () => this.setOn(false);
    document.getElementById('placesearch').oninput = () => this.renderList();
    this.renderList();
  }

  matches(it) {
    if (!this.cats[it.group]) return false;
    const q = (document.getElementById('placesearch') || {}).value;
    if (!q) return true;
    const n = norm(q);
    return norm(it.name).includes(n) || norm(kindPt(it.kind)).includes(n) || norm(it.address || '').includes(n);
  }

  renderList() {
    const list = this.items.filter(it => this.matches(it)).sort((a, b) => a.name.localeCompare(b.name, 'pt'));
    const el = document.getElementById('placelist');
    el.innerHTML = list.slice(0, 250).map(it => {
      const G = GROUPS[it.group];
      return `<div class="prow" data-i="${it.i}"><i style="--c:${G.color}">${G.icon}</i><div><b>${escapeHtml(it.name)}</b><small>${escapeHtml(kindPt(it.kind))}${it.address ? ' · ' + escapeHtml(it.address) : ''}</small></div></div>`;
    }).join('') || '<div class="hint">Nada encontrado.</div>';
    el.querySelectorAll('.prow').forEach(r => r.onclick = () => this.select(+r.dataset.i, true));
  }

  select(i, fly = false) {
    const it = this.items[i];
    const G = GROUPS[it.group];
    this.card.innerHTML = `<button class="ic" onclick="this.parentNode.classList.remove('show')">✕</button>
      <div class="pc-k" style="--c:${G.color}">${G.icon} ${escapeHtml(kindPt(it.kind))}</div>
      <h4>${escapeHtml(it.name)}</h4>
      ${it.address ? `<div>📍 ${escapeHtml(it.address)}</div>` : ''}
      ${it.phone ? `<div>📞 ${escapeHtml(it.phone)}</div>` : ''}
      <div class="hint">Localização aproximada (Overture Maps). Confiança ${Math.round(it.conf * 100)}%.</div>
      <button id="pcgo">Ir até lá</button>`;
    this.card.classList.add('show');
    document.getElementById('pcgo').onclick = () => this.flyTo(new THREE.Vector3(it.x, it.y - 2.5, it.z), 70, 1.0);
    for (const o of this.items) o.el.classList.toggle('sel', o === it);
    if (fly) this.flyTo(new THREE.Vector3(it.x, it.y - 2.5, it.z), 90, 0.95);
  }

  update(camera, W, H) {
    if (!this.on) return;
    const cam = camera.position;
    const vis = [];
    for (const it of this.items) {
      if (!this.matches(it)) { it.el.style.display = 'none'; continue; }
      const d = cam.distanceTo(it.pos);
      if (d > 2200) { it.el.style.display = 'none'; continue; }
      this.v.copy(it.pos).project(camera);
      if (this.v.z > 1 || this.v.x < -1.1 || this.v.x > 1.1 || this.v.y < -1.1 || this.v.y > 1.1) { it.el.style.display = 'none'; continue; }
      vis.push({ it, d, x: (this.v.x * 0.5 + 0.5) * W, y: (-this.v.y * 0.5 + 0.5) * H });
    }
    // nearest first; a name only if its box is free, else just the icon; icons never stack
    vis.sort((a, b) => a.d - b.d);
    const boxes = [];
    const free = (x0, y0, x1, y1) => !boxes.some(b => x0 < b[2] && x1 > b[0] && y0 < b[3] && y1 > b[1]);
    for (const v of vis) {
      const { it } = v;
      const sel = it.el.classList.contains('sel');
      const wName = 30 + it.name.length * 6.6;
      let mode = 'none';
      if ((v.d < 260 || sel) && free(v.x - wName / 2, v.y - 30, v.x + wName / 2, v.y)) mode = 'name';
      else if (free(v.x - 12, v.y - 30, v.x + 12, v.y) || sel) mode = 'icon';
      if (mode === 'none') { it.el.style.display = 'none'; continue; }
      if (mode === 'name') boxes.push([v.x - wName / 2, v.y - 30, v.x + wName / 2, v.y]); else boxes.push([v.x - 12, v.y - 30, v.x + 12, v.y]);
      it.el.style.display = '';
      it.el.style.transform = `translate(${v.x.toFixed(1)}px, ${v.y.toFixed(1)}px) translate(-50%, -100%)`;
      it.el.classList.toggle('far', mode === 'icon');
      it.el.style.zIndex = String(10000 - Math.round(v.d));
    }
  }
}

const norm = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
function escapeHtml(s) { return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
