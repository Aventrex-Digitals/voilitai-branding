import fs from 'node:fs';
import path from 'node:path';

// Hostinger CDN cached HTML that still requests this deleted CSS hash.
// Serve the current stylesheet at that URL until the HTML cache is flushed.
const LEGACY_CSS = ['4af2cbdc658eaa3b.css'];

const cssDir = path.join('.next', 'static', 'css');
if (!fs.existsSync(cssDir)) {
  console.warn('copy-css-fallback: no CSS directory, skipping');
  process.exit(0);
}

const files = fs
  .readdirSync(cssDir)
  .filter((name) => name.endsWith('.css') && !LEGACY_CSS.includes(name));

if (files.length === 0) {
  console.warn('copy-css-fallback: no built CSS found, skipping');
  process.exit(0);
}

const newest = files
  .map((name) => {
    const filePath = path.join(cssDir, name);
    return { name, filePath, mtime: fs.statSync(filePath).mtimeMs };
  })
  .sort((a, b) => b.mtime - a.mtime)[0];

const publicDir = path.join('public');
fs.mkdirSync(publicDir, { recursive: true });
fs.copyFileSync(newest.filePath, path.join(publicDir, 'next-fallback.css'));

for (const name of LEGACY_CSS) {
  fs.copyFileSync(newest.filePath, path.join(cssDir, name));
  console.log(`copy-css-fallback: ${newest.name} -> ${name}`);
}
