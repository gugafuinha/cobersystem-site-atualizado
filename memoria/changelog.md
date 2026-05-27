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

---

## 2026-05-27 — Prioridade 1.2: Tracking de Conversão

### Arquivos editados
- `app/orcamento/page.tsx` — adicionados imports de tracking e `useRouter`; `handleSubmit` agora dispara:
  - `trackGoogleAdsConversion('lGDsCLD1opAYEM2d24Mp', 0)` — conversão Google Ads
  - `trackFormSubmit()` — evento Google Analytics
  - `trackMetaLead()` — evento Meta Pixel
  - `router.push('/obrigado')` — redireciona para página de confirmação

### Arquivos criados
- `app/obrigado/page.tsx` — página de confirmação pós-conversão com:
  - `robots: noindex, nofollow` (não indexável — interna de conversão)
  - Canonical próprio
  - Mensagem de confirmação visual + ícone check
  - CTA WhatsApp de fallback (caso a aba não tenha aberto)
  - Lista "o que acontece agora" (3 passos)
  - Design alinhado com padrão `#D4AF37` do site

### Motivação
O formulário de orçamento abria WhatsApp sem disparar nenhum evento de tracking.
Google Ads, GA e Meta Pixel não registravam a conversão, impedindo otimização de campanhas.
