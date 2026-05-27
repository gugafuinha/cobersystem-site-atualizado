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

---

## 2026-05-27 — Prioridade 1.3: WhatsApp Contextual por Rota

### Arquivos editados
- `components/WhatsAppButton.tsx` — mensagem do botão flutuante agora é dinâmica por rota:
  - Usa `usePathname()` do Next.js para detectar a rota atual
  - Tabela `ROUTE_MESSAGES` com 30 rotas mapeadas (serviços, produtos, blog, localização, conversão)
  - Função `getWhatsAppMessage()` com fallback para mensagem padrão
  - Cobertura: todos os 14 serviços, 5 produtos, 6 posts de blog, localização, /orcamento, /contato, /obrigado, /faq

### Motivação
Mensagem genérica em todas as páginas reduzia taxa de engajamento no WhatsApp.
Usuário que lia sobre piscina chegava com mensagem de "cobertura genérica" — contexto perdido para o vendedor.

---

## 2026-05-27 — Prioridade 1.4: FAQ Schema nos Posts de Blog

### Arquivos editados
- `app/blog/[slug]/page.tsx` — adicionadas 3 peças:
  1. Função `parseFaqSection()` — extrai pares pergunta/resposta do conteúdo textual dos posts (formato `**Pergunta?**\nResposta`)
  2. Lógica de detecção da seção FAQ por título (`frequente` ou `pergunta`)
  3. Injeção do schema `FAQPage` como `<script type="application/ld+json">` no JSX

### Cobertura
- 7 posts com FAQ detectados automaticamente
- 42 perguntas extraídas e convertidas em schema
- Qualquer post futuro com seção "Perguntas Frequentes" ganha o schema automaticamente

### Motivação
Posts de blog não geravam rich snippets de FAQ no Google, perdendo visibilidade e CTR nos resultados de busca.

---

## 2026-05-27 — SAB: Remoção de Endereço Físico (alinhamento GBP)

### Contexto
GBP configurado como SAB (Service Area Business) com endereço oculto. O site exibia o endereço físico visualmente e nos schemas — inconsistência com o GBP e risco de sinalização negativa.

### Arquivos editados
- `components/Footer.tsx` — substituído bloco "Endereço" por "Área de Atendimento: São Paulo (todas as zonas), Grande SP: Guarulhos, ABC, Osasco, Campinas, Sorocaba e região"
- `components/SchemaMarkup.tsx`:
  - Removidos `streetAddress` e `postalCode` das interfaces TypeScript e dos objetos `organizationSchema` e `localBusinessSchema`
  - `areaServed` expandido de 6 para 11 cidades
  - `sameAs` do Organization atualizado com YouTube
- `app/servicos/cobertura-retratil/page.tsx` — removidos `streetAddress` e `postalCode` do service schema
- `app/servicos/cobertura-policarbonato/page.tsx` — idem

### Não alterado
- `components/LocalBusinessSchema.tsx` — já estava correto (cidade-level apenas)

### Resultado
NAP do site alinhado com GBP SAB. Footer agora reforça cobertura geográfica em vez de expor endereço privado.
