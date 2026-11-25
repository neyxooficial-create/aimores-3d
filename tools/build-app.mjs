// Bundles src/ into app.js (minified) and writes index.html with a cache-busting version.
// Usage: node tools/build-app.mjs [--dev]
import fs from 'node:fs';
import crypto from 'node:crypto';
import { build } from 'esbuild';

const dev = process.argv.includes('--dev');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const version = pkg.version + '-' + Date.now().toString(36);
// data cache-buster = content hash of the runtime data files
const h = crypto.createHash('sha1');
for (const f of fs.readdirSync('data').sort()) h.update(f).update(fs.readFileSync('data/' + f));
const dataVersion = h.digest('hex').slice(0, 10);
const res = await build({
  entryPoints: ['src/main.js'],
  bundle: true,
  format: 'iife',
  target: ['es2020', 'safari14'],
  minify: !dev,
  sourcemap: dev ? 'inline' : false,
  outfile: 'app.js',
  legalComments: 'eof',
  define: { __APP_VERSION__: JSON.stringify(version), __DATA_VERSION__: JSON.stringify(dataVersion) },
  metafile: true,
  logLevel: 'warning',
});
const html = fs.readFileSync('src/index.html', 'utf8')
  .replace('app.js?v=__VERSION__', 'app.js?v=' + version)
  .replaceAll('?v=__VERSION__', '?v=' + dataVersion);
fs.writeFileSync('index.html', html);
const size = fs.statSync('app.js').size;
console.log(`app.js ${(size / 1024).toFixed(0)} KB  (version ${version})`);
if (process.argv.includes('--meta')) {
  const ins = Object.entries(res.metafile.outputs['app.js'].inputs).sort((a, b) => b[1].bytesInOutput - a[1].bytesInOutput).slice(0, 15);
  for (const [k, v] of ins) console.log(String(v.bytesInOutput).padStart(8), k);
}
