# Changelog Cobersystem

---

## 2026-05-27 — Prioridade 1.1: SEO Técnico Crítico

### Arquivos criados
- `public/robots.txt` — robots explícito com declaração do Sitemap para o Googlebot

### Arquivos editados
- `app/sitemap.ts` — adicionadas 14 novas URLs ao sitemap:
  - `/orcamento` (prioridade 0.9)
  - `/cases-sucesso` (prioridade 0.8)
  - `/galeria` (prioridade 0.75)
  - `/localizacao/sao-paulo` (prioridade 0.85)
  - `/localizacao/zona-leste`, `/zona-sul`, `/zona-norte`, `/zona-oeste` (prioridade 0.8 cada)
  - `/localizacao/guarulhos`, `/campinas`, `/santo-andre`, `/sao-bernardo`, `/sorocaba`, `/abc` (prioridade 0.8 cada)

### Arquivos criados
- `app/orcamento/layout.tsx` — metadata completo para a página `/orcamento`:
  - título, descrição, keywords
  - canonical: `https://www.coberturapolicarbonato.com.br/orcamento`
  - Open Graph (título, descrição, URL, imagem, locale)
  - Twitter Card

### Motivação
Páginas de localização (local SEO) e a página de orçamento (principal conversão) estavam fora do sitemap e sem metadata adequado, impedindo indexação correta pelo Google.

### Próximo passo aprovado
Item 1.2 — Tracking de conversão no formulário `/orcamento` + criação da página `/obrigado`
