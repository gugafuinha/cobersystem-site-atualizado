/**
 * Otimiza JPEGs em public/images/cases-antes-depois/
 * — mesmo nome e extensão; sobrescreve in-place.
 * Uso: node scripts/optimize-cases-antes-depois.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIR = path.join(__dirname, '..', 'public', 'images', 'cases-antes-depois');

const MAX_WIDTH = 1920;
const JPEG_QUALITY = 82;

async function main() {
  const files = fs
    .readdirSync(DIR)
    .filter((f) => f.toLowerCase().endsWith('.jpg'));

  const report = [];
  let totalBefore = 0;
  let totalAfter = 0;

  for (const name of files) {
    const full = path.join(DIR, name);
    const before = fs.statSync(full).size;
    totalBefore += before;

    const buf = await fs.promises.readFile(full);
    const img = sharp(buf).rotate();

    const meta = await img.metadata();
    let pipeline = img;

    if (meta.width && meta.width > MAX_WIDTH) {
      pipeline = pipeline.resize({
        width: MAX_WIDTH,
        height: MAX_WIDTH,
        fit: 'inside',
        withoutEnlargement: true,
      });
    }

    const out = await pipeline
      .jpeg({
        quality: JPEG_QUALITY,
        mozjpeg: true,
        progressive: true,
      })
      .toBuffer();

    await fs.promises.writeFile(full, out);
    const after = out.length;
    totalAfter += after;

    report.push({
      name,
      before,
      after,
      savings: before - after,
      pct: before ? Math.round((1 - after / before) * 1000) / 10 : 0,
    });
  }

  return { report, totalBefore, totalAfter };
}

main()
  .then(({ report, totalBefore, totalAfter }) => {
    console.log(JSON.stringify({ report, totalBefore, totalAfter }, null, 2));
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
