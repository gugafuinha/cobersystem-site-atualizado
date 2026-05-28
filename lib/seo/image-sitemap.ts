import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://www.coberturapolicarbonato.com.br';
const IMAGE_EXTS = /\.(jpg|jpeg|png|webp|avif)$/i;

/**
 * Retorna URLs absolutas de todas as imagens dentro de um subdiretório de /public.
 * @param relDir  Caminho relativo à pasta /public  (ex: "images/produtos/cobertura-retratil")
 */
export function getImageUrls(relDir: string): string[] {
  const absDir = path.join(process.cwd(), 'public', relDir);
  try {
    return walk(absDir, relDir);
  } catch {
    return [];
  }
}

function walk(absDir: string, relBase: string): string[] {
  const entries = fs.readdirSync(absDir, { withFileTypes: true });
  const urls: string[] = [];
  for (const entry of entries) {
    const absChild = path.join(absDir, entry.name);
    const relChild = `${relBase}/${entry.name}`;
    if (entry.isDirectory()) {
      urls.push(...walk(absChild, relChild));
    } else if (IMAGE_EXTS.test(entry.name)) {
      // Normaliza separadores de sistema para URL
      const urlPath = relChild.replace(/\\/g, '/');
      urls.push(`${BASE_URL}/${urlPath}`);
    }
  }
  return urls;
}
