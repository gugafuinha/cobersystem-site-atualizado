#!/usr/bin/env node
/**
 * Mapeia arquivos alterados (git diff) -> URLs do site (Next.js App Router).
 *
 * Entrada:  lista de caminhos, um por linha, via STDIN.
 * Saida:    JSON no STDOUT { commit, message, count, urls, dynamicTemplates, globalChange, globalFiles, dataFiles }
 *
 * Regras:
 *  - app/**\/page.{tsx,jsx,js,mdx} estatico  -> URL concreta
 *  - app/**\/[param]/**\/page.*  (dinamico)  -> template (nao expande; registra parent estatico)
 *  - components/**, lib/**, app/layout.tsx, app/globals.css, next.config.*, package.json -> globalChange
 *  - content/**, *.json de dados             -> dataFiles (nota)
 *  - docs/, memoria/, .github/, public/ etc. -> ignorado para indexacao
 */

import { readFileSync } from 'node:fs';

const BASE = 'https://www.coberturapolicarbonato.com.br';

const PAGE_RE = /^app\/(.*\/)?page\.(tsx|jsx|js|mdx)$/;
const GLOBAL_RE = /^(components\/|lib\/|next\.config\.|package(-lock)?\.json$|app\/layout\.tsx$|app\/globals\.css$|middleware\.(ts|js)$|tailwind\.config\.|postcss\.config\.)/;
const DATA_RE = /^content\//;
const IGNORE_RE = /^(docs\/|memoria\/|\.github\/|public\/|scripts\/|workflows\/|Imagens |\.gitignore$|README|\.env)/;

function fileToRoute(file) {
  // remove "app/" e "/page.ext"
  let route = file.replace(/^app\//, '').replace(/\/?page\.(tsx|jsx|js|mdx)$/, '');
  return route; // '' == home
}

function isDynamic(route) {
  return /\[[^\]]+\]/.test(route);
}

function staticParent(route) {
  // pega o trecho antes do primeiro segmento dinamico
  const parts = route.split('/');
  const out = [];
  for (const p of parts) {
    if (/\[[^\]]+\]/.test(p)) break;
    out.push(p);
  }
  return out.join('/');
}

function main() {
  const raw = readFileSync(0, 'utf8');
  const files = raw.split('\n').map(s => s.trim()).filter(Boolean);

  const commit = process.env.GITHUB_SHA || '';
  const message = process.env.COMMIT_MESSAGE || '';

  const urlsSet = new Set();
  const dynamicTemplates = new Set();
  const globalFiles = [];
  const dataFiles = [];
  let globalChange = false;

  for (const f of files) {
    if (IGNORE_RE.test(f)) continue;

    const m = f.match(PAGE_RE);
    if (m) {
      const route = fileToRoute(f);
      if (route === '' || route === '/') {
        urlsSet.add(BASE + '/');
      } else if (isDynamic(route)) {
        const parent = staticParent(route);
        dynamicTemplates.add(parent ? `${BASE}/${parent}` : `${BASE}/`);
      } else {
        urlsSet.add(`${BASE}/${route}`);
      }
      continue;
    }

    if (GLOBAL_RE.test(f)) {
      globalChange = true;
      globalFiles.push(f);
      continue;
    }

    if (DATA_RE.test(f)) {
      dataFiles.push(f);
      // content/blog-posts.json afeta o blog
      if (/blog/i.test(f)) dynamicTemplates.add(`${BASE}/blog`);
      continue;
    }
    // demais arquivos: ignorados para fins de indexacao
  }

  const urls = [...urlsSet].sort();
  const out = {
    commit,
    message,
    count: urls.length,
    urls,
    dynamicTemplates: [...dynamicTemplates].sort(),
    globalChange,
    globalFiles,
    dataFiles,
  };
  process.stdout.write(JSON.stringify(out));
}

main();
