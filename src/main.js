// Aimorés 3D — entry point. Loads the data, builds the city and runs the render loop.
import * as THREE from 'three';
import { MapControls } from 'three/examples/jsm/controls/MapControls.js';
import { loadAll } from './data.js';
import { buildTerrain, buildBackdrop } from './terrain.js';
import { DayCycle, brasiliaNow } from './sky.js';
import { buildRiver, buildLakes } from './water.js';
import { buildCreek, creekDetailMask } from './creek.js';
import { legacy as L } from './legacy/legacy.js';
import { nextFrame } from './util.js';

const params = new URLSearchParams(location.search);
const SHOT = params.has('shot');
const isMobile = /Android|iPhone|iPad|Mobile/i.test(navigator.userAgent) || Math.min(innerWidth, innerHeight) < 700;
const weak = isMobile || (navigator.deviceMemory && navigator.deviceMemory <= 4) || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4);
const defaultQ = isMobile ? 'low' : weak ? 'medium' : 'high';
let Q = params.get('q') || localStorage.getItem('aimores3d_q5') || defaultQ;
if (!['low', 'medium', 'high', 'ultra'].includes(Q)) Q = defaultQ;

const $ = id => document.getElementById(id);
async function say(msg) { $('loadmsg').textContent = msg; await nextFrame(); }

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
  const creek = buildCreek(city, T, day, Q);
  if (creek) scene.add(creek);

  await say('Ruas, calçadas e meio-fio…');
  const lm = legacyMeshTable(data.meshes);
  city.meshes = lm.table;
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
  const roads = L.buildRoads(city, T, lm.buffer, scene, { exclude: viadEx, skipIds: viadIds });
  if (viadEx) for (const r of city.roads) if (viadIds.has(r.id)) r.b = true;

  await say('Igreja, praça e campos…');
  const church = L.buildChurch(city, T, scene);
  const praca = L.buildPraca(city, T, scene);
  L.buildFields(city, T, scene);

  await say('Casas, telhados e muros…');
  const fr = church.frame;
  const inChurch = b => {
    let x = 0, z = 0;
    for (const p of b.p) { x += p[0]; z += p[1]; }
    x /= b.p.length; z /= b.p.length;
    const dx = x - fr.C[0], dz = z - fr.C[1], f = dx * fr.f[0] + dz * fr.f[1], r = dx * fr.r[0] + dz * fr.r[1];
    return Math.abs(r) < fr.fx + 2 && f > fr.fz0 - 2 && f < fr.fz1 + 2;
  };
  const buildings = L.buildBuildings(city, T, scene, inChurch, Q);
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
  L.buildWalls(city, T, scene);

  await say('Ferrovia Vitória-Minas, viadutos e passarelas…');
  const rail = L.buildRail(city, T, scene);
  const train = L.Train(rail.paths, scene);
  const viaduct = L.buildViaductVale(city, T, scene, rail.paths);
  const viaduct2 = L.buildViaductCentro(city, T, scene, rail.paths);
  L.buildClub(city, T, scene);
  L.buildStation(city, T, scene);
  L.buildLote(city, T, scene);
  L.buildFootbridges(city, T, scene, city.viaduct.railtop);

  await say('Árvores…');
  const trees = L.buildTrees(city, T, scene, Q, praca ? praca.palms : []);

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
  const traffic = new L.Traffic(city, T, scene, roadH, { low: 35, medium: 90, high: 170, ultra: 220 }[Q], { low: 0, medium: 0.04 }[Q] || 0.11, Q);

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
  if (city.creek) {
    const cp = city.creek.pts, k = cp.findIndex(p => p[1] < 120 && p[4] === 0);
    const p = cp[k > 0 ? k : cp.length >> 1];
    labels.add('Córrego', new THREE.Vector3(p[0], p[2] + 8, p[1]), 'lbl poi', 1500);
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
  const creekPt = (() => { if (!city.creek) return [-560, 0, -200]; const cp = city.creek.pts; const p = cp.find(q => q[1] < -150 && q[4] === 0) || cp[cp.length >> 1]; return [p[0], 0, p[1]]; })();
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
    corrego: { t: creekPt, d: 70, pol: 1.05, az: 0.8 },
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

  const markers = new L.Markers({
    scene, camera, renderer, controls, labels, H: T, flyTo, panel: $('mkbody'),
    pickTargets: () => [ground, roads, buildings, church.group, viaduct.group],
  });

  // ---------------------------------------------------------------------------- UI
  document.querySelectorAll('[data-view]').forEach(b => { b.onclick = () => goView(b.dataset.view); });
  const toggle = (id, fn) => { const el = $(id); el.onchange = () => { fn(el.checked); wake(); }; fn(el.checked); };
  toggle('t_cars', v => { traffic.mesh.visible = v; if (traffic.parked) traffic.parked.visible = v; });
  toggle('t_train', v => { train.group.userData.off = !v; });
  toggle('t_labels', v => { labels.setGroupVisible('lbl nb', v); labels.setGroupVisible('lbl poi', v); });
  toggle('t_limits', v => { limits.visible = v; });
  toggle('t_trees', v => { trees.visible = v; });
  toggle('t_shadows', v => { day.sun.castShadow = v && Q !== 'low'; });

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
  $('layersbtn').onclick = () => { $('layers').classList.toggle('open'); $('layersbtn').classList.toggle('on'); };
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
  if (Q === 'medium' || Q === 'low') renderer.shadowMap.autoUpdate = false;
  let lastClockUi = 0;
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
    controls.update();
    controls.target.clamp(bounds.min, bounds.max);
    const gy = T.inside(camera.position.x, camera.position.z) ? T.at(camera.position.x, camera.position.z) : backdrop.userData.heightAt(camera.position.x, camera.position.z);
    if (camera.position.y < gy + 2) camera.position.y = gy + 2;
    if (clockRunning) {
      const h = day.hours + dt * clockSpeed / 3600;
      day.setTime(h);
      if (performance.now() - lastClockUi > 250) { syncClock(); lastClockUi = performance.now(); }
      if (clockSpeed > 1) shadowDirty = true;
    }
    day.update(dt, camera, controls.target);
    if (traffic.mesh.visible) traffic.tick(dt);
    if (train.group.userData.off) train.group.visible = false; else train.tick(dt);
    // shadows: refresh lazily on weaker settings
    if (!renderer.shadowMap.autoUpdate) {
      frames++;
      const R = day.shadowRadius || 300;
      if (shadowDirty || lastShadowT.distanceTo(controls.target) > R * 0.04 || Math.abs(lastShadowR - R) > R * 0.05 || frames > 20) {
        renderer.shadowMap.needsUpdate = true; shadowDirty = false; frames = 0;
        lastShadowT.copy(controls.target); lastShadowR = R;
      }
    }
    markers.tickScale(camera);
    renderer.render(scene, camera);
    labels.update(camera, innerWidth, innerHeight);
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
    THREE, scene, camera, controls, renderer, city, T, day, traffic, markers, goView, flyTo,
    setTime: h => { day.setTime(h); shadowDirty = true; syncClock(); },
    setCam: (p, t) => { anim = null; controls.target.set(...t); camera.position.set(...p); controls.update(); },
    renderFrame: (n = 1) => { for (let i = 0; i < n; i++) { renderer.shadowMap.needsUpdate = true; frame(); } return true; },
    info: () => ({ calls: renderer.info.render.calls, tris: renderer.info.render.triangles, geom: renderer.info.memory.geometries, tex: renderer.info.memory.textures }),
  };
}

main().catch(e => {
  console.error(e);
  $('loadmsg').textContent = 'Erro ao carregar: ' + e.message;
});
