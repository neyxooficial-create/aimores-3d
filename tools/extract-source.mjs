// One-time extraction of the v4 data bundle (d1..d7.js + data.js) into raw files in source/.
// Usage: node tools/extract-source.mjs <dir-with-d1..d7.js>
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const dir = process.argv[2] || '.';
const ctx = { window: {}, JSON };
vm.createContext(ctx);
for (const f of ['d1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'data']) {
  vm.runInContext(fs.readFileSync(path.join(dir, f + '.js'), 'utf8'), ctx);
}
const A = ctx.window.AIMORES;
const out = 'source';
fs.mkdirSync(out, { recursive: true });
const b64 = s => Buffer.from(s, 'base64');
fs.writeFileSync(path.join(out, 'ground.jpg'), b64(A.ground.split(',')[1]));
fs.writeFileSync(path.join(out, 'backtex.jpg'), b64(A.backtex.split(',')[1]));
fs.writeFileSync(path.join(out, 'height.u16'), b64(A.height));
fs.writeFileSync(path.join(out, 'back.u16'), b64(A.back));
fs.writeFileSync(path.join(out, 'meshes.f32'), b64(A.meshes));
fs.writeFileSync(path.join(out, 'city.json'), JSON.stringify(A.city));
console.log('ok', Object.keys(A.city));
