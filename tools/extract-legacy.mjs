// One-time tool: pulls the hand-made landmark builders (igreja, praça, clube, estação,
// loteamento, campos, passarelas, viadutos, marcadores, rótulos) out of the minified v4
// bundle (app.js, commit be6c9ae) and turns them into an ES module that imports three.js.
// Usage: node tools/extract-legacy.mjs <old-app.js> > src/legacy/legacy.js
import fs from 'node:fs';
import beautify from 'js-beautify';

const src = beautify.js(fs.readFileSync(process.argv[2], 'utf8'), { indent_size: 2 });
const lines = src.split('\n');
const start = lines.findIndex(l => /^  var Os, Ku = Fe\(/.test(l));
const end = lines.findIndex(l => /^  var M1 = lf\(/.test(l));
if (start < 0 || end < 0) throw new Error('markers not found');
const body = lines.slice(start, end).map(l => l.replace(/^  /, '')).join('\n');

// minified identifier -> three.js export (resolved by hand from usage in the bundle)
const T = {
  F: 'Vector3', _t: 'Vector2', ue: 'Matrix4', ze: 'Quaternion', Qt: 'Color', wn: 'Euler', fi: 'Spherical',
  Pt: 'Mesh', Ve: 'InstancedMesh', he: 'Group', Po: 'Line',
  pe: 'BufferGeometry', Jt: 'Float32BufferAttribute', ae: 'BufferAttribute',
  He: 'BoxGeometry', be: 'CylinderGeometry', ci: 'ShapeUtils', Is: 'ExtrudeGeometry', Bo: 'LatheGeometry',
  In: 'SphereGeometry', Ls: 'IcosahedronGeometry', Ai: 'PlaneGeometry', Gi: 'Shape', Ho: 'TubeGeometry',
  yr: 'CatmullRomCurve3', Ps: 'ConeGeometry', Xi: 'TorusGeometry', zo: 'CircleGeometry', ko: 'RingGeometry',
  Tt: 'MeshStandardMaterial', As: 'MeshBasicMaterial', Sr: 'MeshLambertMaterial', fn: 'ShaderMaterial',
  pr: 'MeshDepthMaterial', Vo: 'LineDashedMaterial',
  gr: 'DataTexture', pn: 'CanvasTexture', wr: 'TextureLoader',
  dn: 'Box3', Jn: 'Sphere', Us: 'Raycaster', Yo: 'Clock', Ar: 'MathUtils', Vl: 'UniformsUtils',
  Xt: 'DoubleSide', Ke: 'BackSide', bn: 'RepeatWrapping', Zn: 'ClampToEdgeWrapping',
  kn: 'LinearMipmapLinearFilter', Cn: 'LinearFilter', En: 'RGBAFormat', Ce: 'SRGBColorSpace',
  zl: 'RGBADepthPacking', mn: 'TOUCH',
};
const pre = `// AUTO-GERADO por tools/extract-legacy.mjs a partir do app.js v4 (minificado).
// Contém os construtores feitos à mão dos marcos da cidade. Os nomes curtos são do
// minificador original; as partes novas do projeto ficam em src/*.js.
/* eslint-disable */
import * as THREE from 'three';
const Fe = (i, t) => () => (i && (t = i(i = 0)), t);
const Ne = () => {};
${Object.entries(T).map(([k, v]) => `const ${k} = THREE.${v};`).join('\n')}
`;
const inits = ['Ku', 'ud', 'Md', 'th', 'Ad', '_a', 'nh', 'zd', 'Hd', 'Xd', '$d', 'Jd', 'Kd', 'Qd', 'nf', 'af'];
const post = `
${inits.map(n => n + '();').join(' ')}
export const legacy = {
  Sky: Os, PathSampler: Tn, GeoBuilder: Kt,
  buildChurch: qd, buildPraca: Yd, buildFields: Zd, buildClub: kd, buildStation: tf, buildLote: ef,
  buildFootbridges: Fd, buildViaductVale: Od, buildViaductCentro: Wd, viaductCentroIds: Vd,
  viaductCentroExclusion: xa, viaductCentroHeight: Gd, buildRail: Dd, Train: Nd,
  Labels: ba, Markers: Ta, Traffic: Ma, buildWalls: vd, buildBuildings: _d, buildRoads: xd, buildWater: yd,
  buildTrees: Td, buildTerrain: ld, buildBackdrop: hd, TerrainSampler: ca, decodeB64: la, cloudDome: Bd,
  srgb: bt, hash: qt,
};
`;
process.stdout.write(pre + body + post);
