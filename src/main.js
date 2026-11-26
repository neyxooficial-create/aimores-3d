// Aimorés 3D — entry point. Loads the data, builds the city and runs the render loop.
import * as THREE from 'three';
import { MapControls } from 'three/examples/jsm/controls/MapControls.js';
import { loadAll } from './data.js';
import { buildTerrain, buildBackdrop } from './terrain.js';
import { DayCycle, brasiliaNow } from './sky.js';
import { buildRiver, buildLakes } from './water.js';
import { buildCreeks, creekDetailMask } from './creek.js';
import { legacy as L } from './legacy/legacy.js';
import { nextFrame, segDist } from './util.js';
import { placeLamps, buildLamps, patchTreeNight, patchNightLight } from './lamps.js';
import { buildTrees } from './trees.js';
import { buildRoads, asphaltTexture, settTexture } from './roads.js';
import { Traffic } from './traffic.js';
import { buildRailLite } from './rail.js';
import { buildBuildings } from './buildings.js';
import { Places } from './places.js';
import { Streets } from './streets.js';
import { Trains } from './train.js';
import { Sound } from './audio.js';
import { Explore } from './explore.js';
import { Weather } from './weather.js';
import { buildChurch as buildChurchV6, buildStation as buildStationV6, buildPraca as buildPracaV6, buildPracinha, buildCemetery } from './landmarks.js';
import { buildBumps, bumpField } from './bumps.js';

const params = new URLSearchParams(location.search);
const SHOT = params.has('shot');
const isMobile = /Android|iPhone|iPad|Mobile/i.test(navigator.userAgent) || Math.min(innerWidth, innerHeight) < 700;
const weak = isMobile || (navigator.deviceMemory && navigator.deviceMemory <= 4) || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4);
const defaultQ = isMobile ? 'low' : weak ? 'medium' : 'high';
let Q = params.get('q') || localStorage.getItem('aimores3d_q5') || defaultQ;
if (!['low', 'medium', 'high', 'ultra'].includes(Q)) Q = defaultQ;

const $ = id => document.getElementById(id);
async function say(msg) { $('loadmsg').textContent = msg; await nextFrame(); }

/** Re-wind every downward-facing triangle of a (mostly horizontal) surface so it faces up. */
function faceUp(g) {
  const P = g.attributes.position, names = Object.keys(g.attributes);
  const swap = (i, j) => { for (const n of names) { const a = g.attributes[n]; for (let k = 0; k < a.itemSize; k++) { const t = a.array[i * a.itemSize + k]; a.array[i * a.itemSize + k] = a.array[j * a.itemSize + k]; a.array[j * a.itemSize + k] = t; } } };
  const idx = g.index;
  const nT = idx ? idx.count / 3 : P.count / 3;
  for (let t = 0; t < nT; t++) {
    const a = idx ? idx.getX(t * 3) : t * 3, b = idx ? idx.getX(t * 3 + 1) : t * 3 + 1, c = idx ? idx.getX(t * 3 + 2) : t * 3 + 2;
    const ny = (P.getZ(b) - P.getZ(a)) * (P.getX(c) - P.getX(a)) - (P.getX(b) - P.getX(a)) * (P.getZ(c) - P.getZ(a));
    if (ny >= 0) continue;
    if (idx) { idx.setX(t * 3 + 1, c); idx.setX(t * 3 + 2, b); } else swap(b, c);
  }
  if (g.attributes.normal) { for (let i = 0; i < g.attributes.normal.count; i++) { const n = g.attributes.normal; if (n.getY(i) < 0) n.setXYZ(i, -n.getX(i), -n.getY(i), -n.getZ(i)); } }
  for (const n of names) g.attributes[n].needsUpdate = true;
  if (idx) idx.needsUpdate = true;
}

/** The old road builder expects one Float32 buffer + {name: [byteOffset, count]}. */
function legacyMeshTable(meshes) {
  let total = 0;
  for (const a of Object.values(meshes)) total += a.length;
  const buf = new Float32Array(total), table = {};
  let o = 0;
  for (const [k, a] of Object.entries(meshes)) { buf.set(a, o); table[k] = [o * 4, a.length]; o += a.length; }
  return { buffer: buf.buffer, table };
}

async function main() {
  await say('Baixando o mapa…');
  const data = await loadAll(Q, f => { $('bar').firstChild.style.width = (f * 100).toFixed(0) + '%'; });
  const { city, terrain: T } = data;
  $('bar').firstChild.style.width = '100%';

  await say('Preparando o relevo…');
  const renderer = new THREE.WebGLRenderer({ antialias: Q !== 'low', powerPreference: 'high-performance', preserveDrawingBuffer: SHOT });
  const basePR = params.get('pr') ? +params.get('pr') : Math.min(devicePixelRatio, { low: 1, medium: isMobile ? 1.25 : 1.5, high: 2, ultra: 2 }[Q]);
  renderer.setPixelRatio(basePR);
  renderer.setSize(innerWidth, innerHeight);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.shadowMap.enabled = Q !== 'low';
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  $('app').appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(48, innerWidth / innerHeight, 1.5, 40000);
  const controls = new MapControls(camera, renderer.domElement);
  Object.assign(controls, { enableDamping: true, dampingFactor: 0.08, maxPolarAngle: Math.PI * 0.47, minDistance: 8, maxDistance: 7000, screenSpacePanning: false, zoomToCursor: true });

  const day = new DayCycle({ scene, renderer, quality: Q });
  const startHour = params.has('h') ? +params.get('h') : brasiliaNow();
  day.setTime(startHour);

  await say('Montando terreno, rio e serras ao redor…');
  const detailMask = creekDetailMask(city, T);
  const ground = buildTerrain(T, data.groundTex, Q, renderer, detailMask);
  scene.add(ground);
  const backdrop = buildBackdrop(T, data.back, data.backTex, Q);
  scene.add(backdrop);
  const river = buildRiver(data.meshes, T, day);
  if (river) scene.add(river);
  const lakes = buildLakes(city.water, data.waterMask, T, day);
  if (lakes) scene.add(lakes);

  await say('Córrego…');
  const creek = buildCreeks(city, T, day, Q);
  if (creek) scene.add(creek);

  await say('Ruas, calçadas e meio-fio…');
  const viadEx = L.viaductCentroExclusion(city);
  const viadIds = L.viaductCentroIds(city);
  const viadH = L.viaductCentroHeight(city);
  globalThis.__noPark = L.viaductCentroExclusion(city, 25);
  if (viadEx) {
    city.trees = city.trees.filter(t => !viadEx(t[0], t[1]) && !viadEx(t[0] + 3, t[1]) && !viadEx(t[0] - 3, t[1]) && !viadEx(t[0], t[1] + 3) && !viadEx(t[0], t[1] - 3));
    const ex7 = L.viaductCentroExclusion(city, 7);
    const keep = w => !ex7((w[0] + w[2]) / 2, (w[1] + w[3]) / 2) && !ex7(w[0], w[1]) && !ex7(w[2], w[3]);
    city.walls = city.walls.filter(keep); city.gates = city.gates.filter(keep);
  }
  // street surfaces are only removed where the viaduct deck really is above them: the round caps
  // of the exclusion used to cut a hole at the foot of the ramps (ground showing through)
  const roadEx = viadEx && city.viaduct2 && (() => {
    const segs = [];
    for (const w of city.viaduct2.ways) for (let i = 0; i < w.pts.length - 1; i++) segs.push([w.pts[i][0], w.pts[i][1], w.pts[i + 1][0], w.pts[i + 1][1], w.h[i], w.h[i + 1], w.w / 2 + 2.2]);
    return (x, z) => {
      if (!viadEx(x, z)) return false;
      for (const [ax, az, bx, bz, ha, hb, hw] of segs) {
        const dx = bx - ax, dz = bz - az, L2 = dx * dx + dz * dz || 1, t = ((x - ax) * dx + (z - az) * dz) / L2;
        if (t < 0 || t > 1) continue;
        const px = ax + dx * t, pz = az + dz * t;
        if (Math.hypot(x - px, z - pz) > hw) continue;
        if (ha + (hb - ha) * t - T.at(px, pz) > 1.0) return true;
      }
      return false;
    };
  })();
  const roads = buildRoads(city, T, data.meshes, { exclude: roadEx || viadEx, skipIds: viadIds, quality: Q });
  scene.add(roads);
  if (viadEx) for (const r of city.roads) if (viadIds.has(r.id)) r.b = true;

  await say('Igreja, praça e campos…');
  const church = L.buildChurch(city, T, scene);
  // churches, praça and station rebuilt from the photo album; the Matriz stands on its real
  // footprint (the building polygon at R. Olegário Maciel 1), facing Rua Santos Dumont
  scene.remove(church.group);
  const inPoly2 = (x, z, p) => { let c = false; for (let i = 0, j = p.length - 1; i < p.length; j = i++) if ((p[i][1] > z) !== (p[j][1] > z) && x < (p[j][0] - p[i][0]) * (z - p[i][1]) / (p[j][1] - p[i][1]) + p[i][0]) c = !c; return c; };
  const drive = city.roads.filter(r => !['footway', 'path', 'steps', 'pedestrian'].includes(r.hw));
  const roadEdge = (x, z) => { let d = 1e9; for (const r of drive) for (let i = 0; i < r.p.length - 1; i++) { const [ax, az] = r.p[i], [bx, bz] = r.p[i + 1]; if (Math.min(ax, bx) > x + 30 || Math.max(ax, bx) < x - 30 || Math.min(az, bz) > z + 30 || Math.max(az, bz) < z - 30) continue; d = Math.min(d, segDist(x, z, ax, az, bx, bz).d - (r.w || 6) / 2); } return d; };
  const churchB = city.buildings.find(b => inPoly2(-1186, 40, b.p));
  let fr6 = church.frame;
  if (churchB) {
    const p = churchB.p;
    let cx = 0, cz = 0; for (const q of p) { cx += q[0]; cz += q[1]; } cx /= p.length; cz /= p.length;
    let ux = 0, uz = 1, best = 0;
    for (let i = 0; i < p.length; i++) { const a = p[i], b = p[(i + 1) % p.length], L = Math.hypot(b[0] - a[0], b[1] - a[1]); if (L > best) { best = L; ux = (b[0] - a[0]) / L; uz = (b[1] - a[1]) / L; } }
    if (uz > 0) { ux = -ux; uz = -uz; } // the front faces north, towards the street
    let half = 0; for (const q of p) half = Math.max(half, Math.abs((q[0] - cx) * ux + (q[1] - cz) * uz));
    fr6 = { C: [cx, cz], f: [ux, uz], half, roadEdge };
  }
  const church6 = buildChurchV6(T, fr6);
  scene.add(church6.group);
  church.group = church6.group;
  church.center = [church6.center[0], church6.center[2]]; church.front = church6.front;
  const inYard = (x, z) => inPoly2(x, z, church6.yard);
  city.trees = city.trees.filter(t => !inYard(t[0], t[1]));
  city.walls = city.walls.filter(w => !inYard((w[0] + w[2]) / 2, (w[1] + w[3]) / 2));
  city.gates = city.gates.filter(w => !inYard((w[0] + w[2]) / 2, (w[1] + w[3]) / 2));
  // pracinha triangular in front of the Matriz (canteiro between Santos Dumont / Olegário Maciel)
  let pracinha = null;
  {
    const byId = id => city.roads.find(r => r.id === id);
    const r1 = byId(309442908), r2 = byId(309442910), r3 = byId(309444230);
    if (r1 && r2 && r3) {
      const A = r1.p[0], B = r1.p[r1.p.length - 1], Cc = r2.p[r2.p.length - 1];
      pracinha = buildPracinha(T, [A, B, Cc], [(r1.w || 7) / 2 + 0.3, (r2.w || 7) / 2 + 0.3, (r3.w || 8) / 2 + 0.6], [church.center[0], church.center[1]]);
      scene.add(pracinha.group);
      const inTri = (x, z) => inPoly2(x, z, pracinha.tri);
      city.trees = city.trees.filter(t => !(inTri(t[0], t[1]) && Math.hypot(t[0] - pracinha.center[0], t[1] - pracinha.center[1]) < 4.5));
      city.walls = city.walls.filter(w => !inTri((w[0] + w[2]) / 2, (w[1] + w[3]) / 2));
      day.onChange(d => pracinha.group.userData.setNight(THREE.MathUtils.smoothstep(d.night, 0.3, 0.6)));
    }
  }
  const praca = buildPracaV6(city, T, day);
  if (praca) {
    scene.add(praca.group);
    // no trees standing in the lake
    city.trees = city.trees.filter(t => !praca.lake.some(([x, z]) => Math.hypot(t[0] - x, t[1] - z) < 5.5));
    praca.palms = praca.palms.concat(church6.palms);
  }
  L.buildFields(city, T, scene);
  // Cemitério São João: rebuilt (jazigos, cruzes, capelinhas, aleias, muro)
  for (const pc of city.extras.pitches || []) {
    if (pc.k !== 'cemetery') continue;
    const cem = buildCemetery(T, pc.p, roadEdge);
    scene.add(cem.group);
    city.trees = city.trees.filter(t => !cem.inside(t[0], t[1])).concat(cem.trees);
    city.walls = city.walls.filter(w => !cem.inside((w[0] + w[2]) / 2, (w[1] + w[3]) / 2));
    city.buildings = city.buildings.filter(b => { let x = 0, z = 0; for (const q of b.p) { x += q[0]; z += q[1]; } return !cem.inside(x / b.p.length, z / b.p.length); });
  }

  await say('Casas, telhados e muros…');
  const inChurch = b => {
    if (b === churchB) return true;
    let x = 0, z = 0;
    for (const p of b.p) { x += p[0]; z += p[1]; }
    x /= b.p.length; z /= b.p.length;
    return inYard(x, z) || b.p.some(q => inYard(q[0], q[1]) && inYard(x, z));
  };
  const buildings = buildBuildings(city, T, { skip: b => inChurch(b) || /Esta(ç|c)ão Aimor/i.test(b.osm || ''), quality: Q });
  scene.add(buildings);
  console.log('buildings', JSON.stringify(buildings.userData.stats));
  {
    // keep trees and walls off the railway
    const segs = [];
    for (const r of city.rail) for (let i = 0; i < r.pts.length - 1; i++) segs.push([r.pts[i][0], r.pts[i][1], r.pts[i + 1][0], r.pts[i + 1][1]]);
    const nearRail = (x, z) => {
      for (const [ax, az, bx, bz] of segs) {
        if (Math.abs(x - ax) > 80 && Math.abs(x - bx) > 80) continue;
        const dx = bx - ax, dz = bz - az, L2 = dx * dx + dz * dz || 1;
        let t = ((x - ax) * dx + (z - az) * dz) / L2; t = Math.max(0, Math.min(1, t));
        const px = ax + dx * t - x, pz = az + dz * t - z;
        if (px * px + pz * pz < 16) return true;
      }
      return false;
    };
    city.trees = city.trees.filter(t => !nearRail(t[0], t[1]));
    const ok = w => !nearRail((w[0] + w[2]) / 2, (w[1] + w[3]) / 2) && !nearRail(w[0], w[1]) && !nearRail(w[2], w[3]);
    city.walls = city.walls.filter(ok); city.gates = city.gates.filter(ok);
  }
  if (Q === 'low') city.gates = []; // gates + pillars are many small pieces: skip on phones
  L.buildWalls(city, T, scene);

  await say('Ferrovia Vitória-Minas, viadutos e passarelas…');
  const rail = L.buildRail(city, T, scene); // still used for the track paths (train, viaducts)
  if (rail.group) scene.remove(rail.group);
  const railway = buildRailLite(city, T);
  scene.add(railway);
  const sound = new Sound();
  const viaduct = L.buildViaductVale(city, T, scene, rail.paths);
  const viaduct2 = L.buildViaductCentro(city, T, scene, rail.paths);
  L.buildClub(city, T, scene);
  { const st = buildStationV6(city, T, city.rail[0].pts); if (st) scene.add(st); }
  {
    // loteamento streets: paralelepípedo like every other street in town (no dirt)
    const lote = L.buildLote(city, T, scene);
    if (lote) {
      const tx = settTexture(Q === 'low' ? 512 : undefined);
      const map = tx.map.clone(); map.repeat.set(3, 3); map.needsUpdate = true;
      const nmap = tx.normalMap ? tx.normalMap.clone() : null; if (nmap) { nmap.repeat.set(3, 3); nmap.needsUpdate = true; }
      lote.material.map = map; lote.material.normalMap = nmap; lote.material.roughness = 0.85;
      const col = lote.geometry.attributes.color; if (col) { col.array.fill(1); col.needsUpdate = true; }
      lote.material.needsUpdate = true;
    }
  }
  L.buildFootbridges(city, T, scene, city.viaduct.railtop);

  // mata ciliar along the creek
  if (creek && creek.userData.riparian) {
    for (const [x, z, sp] of creek.userData.riparian) city.trees.push([x, z, sp === 10 ? 3 : 5 + Math.random() * 2, Math.floor(x * 7 + z * 13), sp]);
  }
  await say('Árvores…');
  const trees = buildTrees(city, T, day, Q, praca ? praca.palms : []);
  scene.add(trees);

  await say('Trânsito…');
  const vd = city.viaduct;
  const ramps = vd.ramps.map(r => new L.PathSampler(r.pts, r.h));
  const rampH = (x, z) => {
    let best = 1e9, h = null;
    for (const r of ramps) for (let s = 0; s < r.L; s += 3) { const p = r.at(s), d = Math.hypot(p[0] - x, p[2] - z); if (d < best) { best = d; h = p[1]; } }
    return best < 7 ? h : null;
  };
  const roadH = (road, x, z) => {
    if (viadIds.has(road.id)) { const h = viadH(road.id, x, z); if (h !== null) return h + 0.12; }
    if (road.id === 1314627853) return vd.h + 0.05;
    if (road.id === 1314627855 || road.id === 1314627854) { const h = rampH(x, z); if (h !== null) return h + 0.2; }
    return T.at(x, z) + 0.1;
  };
  const traffic = new Traffic(city, T, roadH, day, Q);
  scene.add(traffic.group);
  const trains = new Trains({ city, T, scene, day, sound, Q, legacy: L });
  // pedestrians removed (they cost a lot of frame time for little gain)
  const people = { update() {}, mesh: { visible: false } };
  const weather = new Weather({ scene, day, renderer, Q });
  { const ms = []; for (const g of [roads, buildings]) g.traverse(o => { if (o.isMesh) ms.push(o.material); }); weather.addWet(ms); }
  const wsel = $('weather'); if (wsel) wsel.onchange = () => { weather.set(wsel.value); wake(); };
  if (params.get('tempo')) { weather.set(params.get('tempo')); if (wsel) wsel.value = params.get('tempo'); }
  // quebra-molas
  const bumpH = bumpField(city.bumps || []);
  scene.add(buildBumps(city.bumps || [], T));
  traffic.bumps = city.bumps || []; traffic.bumpH = bumpH;
  // walkable / drivable surface height: terrain + street lift + viaduct decks + quebra-molas.
  // `ref` = current height of the walker/car, so passing under a viaduct does not jump on top.
  const elevRoads = city.roads.filter(r => viadIds.has(r.id) || [1314627853, 1314627854, 1314627855].includes(r.id));
  const groundAt = (x, z, ref = 1e9) => {
    const base = T.at(x, z) + 0.12 + bumpH(x, z);
    let best = base;
    for (const r of elevRoads) {
      for (let i = 0; i < r.p.length - 1; i++) {
        const [ax, az] = r.p[i], [bx, bz] = r.p[i + 1];
        if (Math.min(ax, bx) - 8 > x || Math.max(ax, bx) + 8 < x || Math.min(az, bz) - 8 > z || Math.max(az, bz) + 8 < z) continue;
        const dx = bx - ax, dz = bz - az, L2 = dx * dx + dz * dz || 1;
        let t = ((x - ax) * dx + (z - az) * dz) / L2; t = Math.max(0, Math.min(1, t));
        if (Math.hypot(ax + dx * t - x, az + dz * t - z) > (r.w || 8) / 2 + 0.9) continue;
        const h = roadH(r, x, z);
        if (h > base + 0.3 && h <= ref + 0.7 && h > best) best = h + 0.05;
      }
    }
    return best;
  };
  traffic.blockers = trains.blockers();

  await say('Postes e iluminação pública…');
  // the old viaduct builders used a very dark asphalt: give them the new one
  {
    const nu = asphaltTexture();
    const dark = tex => {
      const img = tex && tex.image;
      if (!img) return false;
      let d = img.data;
      if (!d && img.getContext) d = img.getContext('2d').getImageData(0, 0, img.width, img.height).data;
      if (!d || d.length < 16) return false;
      let s = 0, n = 0;
      for (let i = 0; i < d.length; i += 4 * 97) { s += d[i]; n++; }
      return s / n < 95;
    };
    for (const g of [viaduct.group, viaduct2 && viaduct2.group]) {
      if (!g) continue;
      g.traverse(o => {
        if (!o.isMesh || !o.material || !o.material.map) return;
        const im = o.material.map.image;
        const legacyRoad = im && !im.data && im.width === 512 && o.material.map !== nu.map; // old road canvas
        if (!legacyRoad && !dark(o.material.map)) return;
        o.material.map = nu.map; o.material.normalMap = nu.normalMap; o.material.color.setScalar(1); o.material.needsUpdate = true;
        // deck triangles were wound facing down (double-sided material then lit them from below)
        faceUp(o.geometry);
      });
    }
  }
  const elevatedIds = new Set([...viadIds, 1314627853, 1314627854, 1314627855]);
  const elevated = city.roads.filter(r => elevatedIds.has(r.id)).map(road => ({ road, heightAt: (rd, x, z) => roadH(rd, x, z) }));
  const lampList = placeLamps(city, T, { skipIds: elevatedIds, elevated });
  // the praça has its own globe lamps: add their light (no new poles)
  const plazaLights = (praca && praca.lamps ? praca.lamps : []).map(([x, z]) => ({ x, z, ax: 0, az: 0, led: false }));
  // floodlights on the church façade
  if (church && church.center) {
    const [cx, cz] = church.center, f = church.front || [0, 1];
    for (const k of [-1, 0, 1]) plazaLights.push({ x: cx + f[0] * 16 + f[1] * k * 6, z: cz + f[1] * 16 - f[0] * k * 6, ax: 0, az: 0, led: false });
    plazaLights.push({ x: cx, z: cz, ax: 0, az: 0, led: false });
  }
  const lamps = buildLamps(lampList, T, day, Q, plazaLights);
  scene.add(lamps);
  buildings.traverse(o => {
    if (!o.isMesh) return;
    const m = o.material;
    if (m.customProgramCacheKey && m.customProgramCacheKey() === 'paintmask') patchNightLight(m, 1, true);
  });
  for (const o of scene.children) if (o !== backdrop && o !== day.dome && o !== lakes && o !== river) patchTreeNight(o);

  // ---------------------------------------------------------------------------- labels & views
  const labels = new L.Labels($('labels'));
  labels.scale = SHOT ? 4 : { low: 0.75, medium: 1, high: 1.5, ultra: 2 }[Q];
  for (const [name, nb] of Object.entries(city.neigh)) {
    if (nb.area < 2e4) continue;
    const [x, z] = nb.label;
    labels.add(name === 'Nilton Freire Sampaio' ? 'Residencial Nilton Freire Sampaio' : name, new THREE.Vector3(x, T.at(x, z) + 40, z), 'lbl nb', 3500);
  }
  for (const [name, x, z] of city.extras.poi) {
    const y = name.startsWith('Viaduto') ? vd.h + 12 : T.at(x, z) + (name.startsWith('Igreja') ? 42 : 18);
    labels.add(name.replace('Estadio', 'Estádio'), new THREE.Vector3(x, y, z), 'lbl poi', 2600);
  }
  for (const cr of city.creeks || []) {
    const cp = cr.pts, open = cp.filter(p => p[4] === 0);
    const p = open[Math.floor(open.length * 0.45)] || cp[cp.length >> 1];
    labels.add(cr.name, new THREE.Vector3(p[0], p[2] + 8, p[1]), 'lbl poi', 1500);
  }
  const limits = new THREE.Group();
  limits.name = 'limites';
  const palette = [0xffd166, 0x06d6a0, 0xef476f, 0x118ab2, 0xf78c6b, 0xc77dff, 0x90be6d, 0xf9c74f];
  let pi = 0;
  for (const nb of Object.values(city.neigh)) {
    const color = palette[pi++ % palette.length];
    for (const ring of nb.rings) {
      const pts = [];
      for (let i = 0; i < ring.length - 1; i++) {
        const [x0, z0] = ring[i], [x1, z1] = ring[i + 1], d = Math.hypot(x1 - x0, z1 - z0);
        for (let s = 0; s < d; s += 4) { const x = x0 + (x1 - x0) * s / d, z = z0 + (z1 - z0) * s / d; pts.push(new THREE.Vector3(x, T.at(x, z) + 1.2, z)); }
      }
      if (pts.length < 2) continue;
      pts.push(pts[0].clone());
      const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineDashedMaterial({ color, dashSize: 8, gapSize: 5, transparent: true, opacity: 0.9 }));
      line.computeLineDistances();
      limits.add(line);
    }
  }
  limits.visible = false;
  scene.add(limits);

  const nbLabel = n => (city.neigh[n] ? city.neigh[n].label : [0, 0]);
  const poi = n => { const p = city.extras.poi.find(q => q[0].startsWith(n)); return p ? [p[1], 0, p[2]] : [0, 0, 0]; };
  // most scenic stretch: the natural channel through the Triângulo woods
  // most scenic stretch of the Córrego da Natividade: the wooded corridor east of the Estádio
  const creekPt = (() => { const cr = (city.creeks || [])[0]; if (!cr) return [-560, 0, -200]; const cp = cr.pts; const p = cp.find(q => q[1] < 250 && q[1] > 150 && q[4] === 0) || cp[cp.length >> 1]; return [p[0], 0, p[1]]; })();
  const canalPt = (() => { const cr = (city.creeks || []).find(c => c.name.startsWith('Canal')); if (!cr) return creekPt; const p = cr.pts[Math.floor(cr.pts.length * 0.12)]; return [p[0], 0, p[1]]; })();
  const views = {
    geral: { t: [-120, 0, 120], d: 2300, pol: 0.95, az: -0.35 },
    residencial: { t: [nbLabel('Nilton Freire Sampaio')[0], 0, nbLabel('Nilton Freire Sampaio')[1]], d: 380, pol: 0.85, az: -0.3 },
    triangulo: { t: [nbLabel('Triângulo')[0], 0, nbLabel('Triângulo')[1]], d: 420, pol: 0.9, az: 0.3 },
    sossego: { t: [nbLabel('Sossego')[0], 0, nbLabel('Sossego')[1]], d: 330, pol: 0.85, az: -0.6 },
    hospital: { t: poi('Hospital'), d: 420, pol: 0.9, az: 0.6 },
    igreja: { t: [church.center[0], T.at(church.center[0], church.center[1]), church.center[1]], d: 120, pol: 1.05, az: Math.atan2(church.front[0], church.front[1]) },
    praca: { t: [praca.center[0], T.at(praca.center[0], praca.center[1]), praca.center[1]], d: 95, pol: 0.9, az: 0.5 },
    viaduto: {
      t: [viaduct.center[0], viaduct.center[1] - 3, viaduct.center[2]], d: 120, pol: 1.22,
      az: (() => { const [a, b] = vd.deck, dx = b[0] - a[0], dz = b[1] - a[1], l = Math.hypot(dx, dz), nx = -dz / l, nz = dx / l; return Math.atan2(nx * 0.85 + dx / l * 0.5, nz * 0.85 + dz / l * 0.5); })(),
    },
    viadutocentro: { t: viaduct2 && viaduct2.center ? [viaduct2.center[0], 0, viaduct2.center[2]] : [-930, 0, -70], d: 150, pol: 1.1, az: -0.9 },
    corrego: { t: creekPt, d: 55, pol: 1.1, az: 2.4 },
    canal: { t: canalPt, d: 60, pol: 1.0, az: -2.2 },
    rio: { t: [-120, 0, -860], d: 520, pol: 1.15, az: 2.6 },
  };
  let anim = null;
  function flyTo(target, dist = 200, pol = 1, az = null) {
    const t = target.clone ? target.clone() : new THREE.Vector3(...target);
    if (!t.y) t.y = T.at(t.x, t.z);
    const off = camera.position.clone().sub(controls.target);
    const sph = new THREE.Spherical().setFromVector3(off);
    if (az === null) az = sph.theta;
    const to = new THREE.Vector3().setFromSpherical(new THREE.Spherical(dist, pol, az)).add(t);
    anim = { t0: performance.now(), dur: 1600, fromP: camera.position.clone(), fromT: controls.target.clone(), toP: to, toT: t };
    wake();
  }
  function goView(name, instant) {
    const v = views[name] || views.geral;
    const t = new THREE.Vector3(...v.t);
    if (!v.t[1]) t.y = T.at(t.x, t.z);
    if (instant) {
      controls.target.copy(t);
      camera.position.copy(new THREE.Vector3().setFromSpherical(new THREE.Spherical(v.d, v.pol, v.az)).add(t));
      controls.update();
    } else flyTo(t, v.d, v.pol, v.az);
  }
  goView(params.get('view') || 'geral', true);

  renderer.domElement.addEventListener('dblclick', e => {
    const r = renderer.domElement.getBoundingClientRect();
    const m = new THREE.Vector2((e.clientX - r.left) / r.width * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    const ray = new THREE.Raycaster(); ray.setFromCamera(m, camera);
    const hit = ray.intersectObjects([ground, roads], true)[0];
    if (hit) flyTo(hit.point.clone().add(new THREE.Vector3(0, 1.6, 0)), 25, 1.45);
  });

  const places = new Places({ places: city.places || [], T, buildings: city.buildings, root: $('pins'), panelBtn: $('placesbtn'), flyTo });
  const streets = new Streets({ city, T, root: $('streets'), flyTo, places });
  const explore = new Explore({
    scene, camera, controls, renderer, T, city, groundAt, sound, streets, day,
    dom: { hud: $('hud'), pad: $('tpad'), stick: $('tstick'), look: $('tlook'), bGas: $('bGas'), bBrake: $('bBrake'), bLeft: $('bLeft'), bRight: $('bRight'), bRun: $('bRun'), bHorn: $('bHorn'), bCam: $('bCam'), bExit: $('bExit') },
  });
  $('walkbtn').onclick = () => { if (!sound.on) $('soundbtn').click(); explore.enter('walk'); };
  $('drivebtn').onclick = () => { if (!sound.on) $('soundbtn').click(); explore.enter('drive'); };

  const markers = new L.Markers({
    scene, camera, renderer, controls, labels, H: T, flyTo, panel: $('mkbody'),
    pickTargets: () => [ground, roads, buildings, church.group, viaduct.group],
  });

  // ---------------------------------------------------------------------------- UI
  document.querySelectorAll('[data-view]').forEach(b => { b.onclick = () => goView(b.dataset.view); });
  const toggle = (id, fn) => { const el = $(id); el.onchange = () => { fn(el.checked); wake(); }; fn(el.checked); };
  toggle('t_cars', v => { traffic.group.visible = v; });
  toggle('t_train', v => { trains.group.userData.off = !v; });
  let labelsOn = true, labelsLow = false, labelsX = false;
  toggle('t_labels', v => { labelsOn = v; labels.setGroupVisible('lbl nb', v && !labelsLow); labels.setGroupVisible('lbl poi', v); });
  toggle('t_limits', v => { limits.visible = v; });
  toggle('t_streets', v => streets.setVisible(v));
  toggle('t_trees', v => { trees.visible = v; });
  toggle('t_shadows', v => { day.sun.castShadow = v && Q !== 'low'; });
  toggle('t_lamps', v => { lamps.visible = v; });

  // clock
  const hourEl = $('hour'), hourLbl = $('hourlbl'), playBtn = $('tplay'), speedEl = $('tspeed');
  const fmt = h => `${String(Math.floor(h) % 24).padStart(2, '0')}:${String(Math.floor((h % 1) * 60)).padStart(2, '0')}`;
  let clockRunning = !SHOT && !params.has('h'), clockSpeed = 1;
  const syncClock = () => { hourEl.value = day.hours; hourLbl.textContent = fmt(day.hours); playBtn.textContent = clockRunning ? '⏸' : '▶'; };
  syncClock();
  hourEl.oninput = () => { day.setTime(+hourEl.value); hourLbl.textContent = fmt(day.hours); shadowDirty = true; wake(); };
  playBtn.onclick = () => { clockRunning = !clockRunning; if (clockRunning && clockSpeed === 1) clockSpeed = +speedEl.value; syncClock(); wake(); };
  speedEl.onchange = () => { clockSpeed = +speedEl.value; clockRunning = true; syncClock(); wake(); };
  $('tnow').onclick = () => { day.setTime(brasiliaNow()); clockSpeed = 1; speedEl.value = '1'; clockRunning = true; syncClock(); shadowDirty = true; wake(); };
  speedEl.value = '1';

  const q = $('quality');
  q.value = Q;
  q.onchange = () => { localStorage.setItem('aimores3d_q5', q.value); params.set('q', q.value); location.search = params.toString(); };
  const panel = $('mkpanel');
  panel.classList.add('closed'); // starts collapsed: the map stays clear, open it with ☰
  {
    const top = $('top'), lay = $('layers'), mb = $('menubtn'), ob = $('optbtn');
    const sync = () => { mb.classList.toggle('on', top.classList.contains('open')); ob.classList.toggle('on', lay.classList.contains('open')); };
    mb.onclick = () => { top.classList.toggle('open'); if (top.classList.contains('open') && innerWidth <= 760) lay.classList.remove('open'); sync(); };
    ob.onclick = () => { lay.classList.toggle('open'); if (lay.classList.contains('open') && innerWidth <= 760) top.classList.remove('open'); sync(); };
    top.querySelectorAll('[data-view]').forEach(b => b.addEventListener('click', () => { top.classList.remove('open'); sync(); }));
  }
  $('mkhead').onclick = () => panel.classList.toggle('closed');
  markers.onMode = m => { if (innerWidth <= 760 && m === 'place') { panel.classList.add('closed'); markers.toast('Toque no mapa para colocar o pino'); } };
  let oneFingerRotate = false;
  const tm = $('touchmode');
  const setTouch = () => {
    controls.touches = { ONE: oneFingerRotate ? THREE.TOUCH.ROTATE : THREE.TOUCH.PAN, TWO: THREE.TOUCH.DOLLY_ROTATE };
    tm.textContent = oneFingerRotate ? '🔄 1 dedo: girar' : '✋ 1 dedo: mover';
    tm.classList.toggle('on', oneFingerRotate);
  };
  setTouch();
  tm.onclick = () => { oneFingerRotate = !oneFingerRotate; setTouch(); };
  $('layersbtn').onclick = () => { $('optbtn').click(); };
  if (isMobile) panel.classList.add('closed');
  $('helpbtn').onclick = () => $('help').classList.toggle('show');
  addEventListener('resize', () => { camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix(); renderer.setSize(innerWidth, innerHeight); wake(); });

  // ---------------------------------------------------------------------------- loop
  const clock = new THREE.Clock();
  const bounds = new THREE.Box3(new THREE.Vector3(T.XMIN - 300, -1e4, T.ZMIN - 300), new THREE.Vector3(T.XMAX + 300, 1e4, T.ZMAX + 300));
  let elapsed = 0, shadowDirty = true, lastShadowT = new THREE.Vector3(1e9, 0, 0), lastShadowR = 0, frames = 0, idle = 0;
  let awake = true;
  function wake() { awake = true; idle = 0; }
  controls.addEventListener('change', wake);
  // the shadow map is only re-rendered when the view or the sun changes (moving cars/trains use
  // contact shadows): that pass over the whole city every frame was what made Ultra stutter
  renderer.shadowMap.autoUpdate = false;
  let lastClockUi = 0, lastTrainUi = 0;
  const fmtH = h => `${String(Math.floor(h) % 24).padStart(2, '0')}:${String(Math.round((h % 1) * 60) % 60).padStart(2, '0')}`;
  function updateTrainUi() {
    const el = $('trainnext'); if (!el) return;
    const act = trains.active.filter(s => s.run.type === 'passageiro');
    const up = trains.upcoming(day.hours, 3);
    let html = act.length ? `<b>🚆 ${act[0].dt < 0 ? 'Chegando' : act[0].dt < act[0].run.stop ? 'Na estação' : 'Saindo'}:</b> trem de passageiros → ${act[0].run.dest}` : '';
    if (!html) { const nx = up.find(u => u.type === 'passageiro'); if (nx) html = `🚆 Próximo trem de passageiros: <b>${fmtH(nx.h)}</b> → ${nx.dest}`; }
    const fr = trains.active.filter(s => s.run.type !== 'passageiro');
    if (fr.length) html += `<br>🚂 ${fr.length > 1 ? fr.length + ' trens de carga' : 'Trem de carga'} passando agora`;
    if (trains.crossings.some(c => c.closed)) html += ' · <b style="color:#f87171">cancela fechada</b>';
    el.innerHTML = html;
  }
  $('trainbtn') && ($('trainbtn').onclick = () => { const p = trains.focus(); flyTo(new THREE.Vector3(p[0], p[1], p[2]), 140, 1.0); });
  $('soundbtn') && ($('soundbtn').onclick = () => { if (sound.on) { sound.stop(); $('soundbtn').textContent = '🔇 Som'; $('soundbtn').classList.remove('on'); } else { sound.start(); $('soundbtn').textContent = '🔊 Som'; $('soundbtn').classList.add('on'); } });
  // adaptive resolution: drop pixel ratio when frames are slow
  let pr = basePR, slowT = 0, fastT = 0;
  const fpsEl = $('fps');
  if (params.has('fps')) fpsEl.style.display = 'block';

  function frame() {
    const dt = SHOT ? 0.05 : Math.min(0.05, clock.getDelta());
    elapsed += dt;
    if (anim) {
      const k = Math.min(1, (performance.now() - anim.t0) / anim.dur), e = k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
      camera.position.lerpVectors(anim.fromP, anim.toP, e);
      controls.target.lerpVectors(anim.fromT, anim.toT, e);
      if (k >= 1) anim = null;
    }
    const gy = T.inside(camera.position.x, camera.position.z) ? T.at(camera.position.x, camera.position.z) : backdrop.userData.heightAt(camera.position.x, camera.position.z);
    if (explore.mode) explore.update(dt);
    else {
      controls.update();
      controls.target.clamp(bounds.min, bounds.max);
      if (camera.position.y < gy + 2) camera.position.y = gy + 2;
    }
    if (clockRunning) {
      const h = day.hours + dt * clockSpeed / 3600;
      day.setTime(h);
      if (performance.now() - lastClockUi > 250) { syncClock(); lastClockUi = performance.now(); }
      if (clockSpeed > 1 && frames > 4) shadowDirty = true;
    }
    day.update(dt, camera, controls.target);
    if (trees.visible) trees.userData.update(camera, controls.target);
    if (traffic.group.visible) traffic.tick(dt);
    trains.update(dt, day.hours, clockRunning ? clockSpeed : 1, camera);
    people.update(dt, day.hours, camera);
    { const bl = trains.blockers(); for (let i = 0; i < bl.length; i++) traffic.blockers[i].closed = bl[i].closed; }
    const wx = weather.update(SHOT ? 1 : dt, camera, day.hours, explore.mode ? 30 : camera.position.distanceTo(controls.target));
    sound.update(camera, { night: day.night, urban: 1, rain: wx.rain });
    if (performance.now() - lastTrainUi > 1000) { lastTrainUi = performance.now(); updateTrainUi(); }
    // shadows: refresh lazily on weaker settings
    if (!renderer.shadowMap.autoUpdate) {
      frames++;
      const R = day.shadowRadius || 300;
      const camT = explore.mode ? camera.position : controls.target;
      if (shadowDirty || lastShadowT.distanceTo(camT) > R * 0.1 || Math.abs(lastShadowR - R) > R * 0.12 || frames > 900) {
        renderer.shadowMap.needsUpdate = true; shadowDirty = false; frames = 0;
        lastShadowT.copy(camT); lastShadowR = R;
      }
    }
    markers.tickScale(camera);
    renderer.render(scene, camera);
    // neighbourhood names only from above (they clutter the view at street level)
    const lowCam = !!explore.mode || (camera.position.distanceTo(controls.target) < 140 && camera.position.y - gy < 60);
    if (lowCam !== labelsLow) { labelsLow = lowCam; if (labelsOn) labels.setGroupVisible('lbl nb', !lowCam); }
    const inX = !!explore.mode;
    if (inX !== labelsX) { labelsX = inX; if (labelsOn) labels.setGroupVisible('lbl poi', !inX); }
    labels.update(camera, innerWidth, innerHeight);
    places.update(camera, innerWidth, innerHeight);
    streets.update(camera, innerWidth, innerHeight, lowCam, explore.mode ? 70 : 0);
    // adaptive pixel ratio
    if (!SHOT) {
      if (dt > 0.045) { slowT += dt; fastT = 0; } else if (dt < 0.022) { fastT += dt; slowT = 0; }
      if (slowT > 2 && pr > 0.75) { pr = Math.max(0.75, pr - 0.25); renderer.setPixelRatio(pr); slowT = 0; }
      if (fastT > 6 && pr < basePR) { pr = Math.min(basePR, pr + 0.25); renderer.setPixelRatio(pr); fastT = 0; }
      if (fpsEl.style.display === 'block') fpsEl.textContent = `${(1 / Math.max(dt, 1e-3)).toFixed(0)} fps · pr ${pr} · ${renderer.info.render.calls} calls · ${(renderer.info.render.triangles / 1000).toFixed(0)}k tris`;
    }
  }
  if (!SHOT) renderer.setAnimationLoop(frame);

  $('loading').classList.add('done');
  window.__ready = true;
  window.__app = {
    THREE, scene, camera, controls, renderer, city, T, day, traffic, trains, people, weather, sound, explore, groundAt, church, markers, places, goView, flyTo,
    setTime: h => { day.setTime(h); shadowDirty = true; syncClock(); },
    setCam: (p, t) => { anim = null; controls.target.set(...t); camera.position.set(...p); controls.update(); },
    renderFrame: (n = 1) => { for (let i = 0; i < n; i++) { renderer.shadowMap.needsUpdate = true; frame(); } return true; },
    bench: (n = 30) => { const gl = renderer.getContext(); const px = new Uint8Array(4); frame(); gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, px); const t0 = performance.now(); for (let i = 0; i < n; i++) frame(); gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, px); return (performance.now() - t0) / n; },
    info: () => ({ calls: renderer.info.render.calls, tris: renderer.info.render.triangles, geom: renderer.info.memory.geometries, tex: renderer.info.memory.textures }),
  };
}

main().catch(e => {
  console.error(e);
  $('loadmsg').textContent = 'Erro ao carregar: ' + e.message;
});
