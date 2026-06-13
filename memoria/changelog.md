# Changelog Cobersystem

---

## 2026-06-13 — Fase 3: Ciclo Semanal Autônomo (baseline Redis + GitHub Issues)

### Visão geral
Transforma o relatório semanal em ciclo autônomo de 7 dias com baseline, avaliação comparativa e Issues no GitHub.

### SEGUNDA 08h — workflow B29BC2BkRPG8988G (24 nós, +6 novos)
Após `Extrair Análise` → `Enviar WhatsApp` (existente), nova ramificação paralela:
- `OpenClaw Checklist`: 2ª chamada ao OpenClaw gera checklist markdown `- [ ]` em 3 prioridades (🔴 Alta / 🟡 Média / 🟢 Estratégico) para o Cursor implementar durante a semana.
- `Montar Issue` (code): monta tabela de baseline (GSC/GA4/Ads) + checklist.
- `Salvar Baseline (Redis)`: SET `cober:baseline:atual` com métricas da segunda.
- `Ler PAT (Redis)`: GET `cober:github:pat` (PAT guardado fora do git por segurança).
- `Criar GitHub Issue`: POST `/repos/gugafuinha/cobersystem-site-atualizado/issues` com label `plano-semanal`.
- `Salvar Issue Number (Redis)`: SET `cober:issue:atual` com o número da issue criada.

### DOMINGO 20h — workflow novo 1mtMgK2OCnM6KqiS (23 nós)
- Novo arquivo: `workflows/ciclo-domingo-avaliacao.json`
- Coleta idêntica à segunda (GSC + GA4 + Ads, clonou 13 nós).
- `Ler Baseline (Redis)` → `Comparar` (code: calcula Δ vs baseline, trata baseline vazio).
- `OpenClaw Avaliação`: analisa o que funcionou/não funcionou/próximo passo.
- `Extrair Avaliação` → `Enviar WhatsApp` (resumo comparativo) + `Ler PAT (Redis)` → `Ler Issue Number (Redis)` → `Comentar Issue` (posta avaliação na issue da semana) → `Salvar Baseline (Redis)` (atualiza para próxima segunda).

### Fix crítico: bug jsonBody Ads (ambos workflows)
Nós `Ads - *` com `jsonBody` como string estática causavam HTTP 400 no Google Ads API especificamente no `search_term_view`. Correção: `jsonBody` como expressão `={{ JSON.stringify({ query: "..." }) }}` — idêntico ao DATA-API que funcionava. **Aplicado em todos os 6 nós Ads** (3 na segunda + 3 no domingo).

### Infra
- PAT GitHub guardado em Redis (`cober:github:pat`), nunca nos JSONs commitados.
- Issue de teste #2 criada e fechada durante validação.
- Validação ponta a ponta: coleta real + comparação + OpenClaw + comentário real postado (issuecomment-4699246468).

---

## 2026-06-13 — Ads API direta no workflow Relatório Semanal (B29BC2BkRPG8988G)

- **Problema**: `Get row(s) in sheet` buscava dados de Ads de planilha Google (A1:B2), dependência externa e dados desatualizados.
- **Substituído por 3 HTTP Request nodes** chamando `POST https://googleads.googleapis.com/v20/customers/4936596693/googleAds:search`:
  - `Ads - Campanhas` → GAQL performance últimos 30 dias
  - `Ads - Keywords` → Top 30 keywords por custo
  - `Ads - Search Terms` → Top 50 search terms por impressões
- **Fluxo**: `Schedule Trigger` → `Ads - Campanhas` → `Ads - Keywords` → `Ads - Search Terms` → `Formatar Ads`
- **Formatar Ads atualizado**: parseia response real da Ads API + inclui `ads_top_keywords` e `ads_top_searchterms` no relatório
- **Credencial**: Google account 2 (FpcXxMa4amcdVlLJ) com headers `developer-token` + `login-customer-id`
- **Testes confirmados**:
  - `campaign`: 11 campanhas, "Cobersystem - Leads SP" → 8967 impr., R$594.04, CTR 4.39%
  - `keywords`: 30 keywords, top → "cobertura abre e fecha" R$183.53
  - `searchterms`: 30 termos, top → "telhado retratil" 201 impr.
- `workflows/relatorio-semanal-com-openclaw.json` atualizado

---

## 2026-06-13 — Fix: FAQPage duplicada em /servicos/cobertura-vidro

- **Problema**: `page.tsx` injetava dois blocos `FAQPage` JSON-LD — constante `faqSchema` inline + `<FAQSchema faqs={faqs} />`.
- **Correção**: Removido `faqSchema` (48 linhas) e `<StructuredData data={faqSchema} />`. Mantido apenas `<FAQSchema />` que renderiza visualmente e injeta o schema.
- **Commit**: `4d04457` — push e deploy Vercel automático.

---

## 2026-06-12 — Autenticação webhooks n8n (x-cober-key)

- Workflow `JHQJ8sFTF1bHlooU` atualizado: 3 nós `IF` adicionados (um por webhook) validando header `x-cober-key`
- Responde HTTP 401 "Unauthorized" para requests sem chave ou com chave incorreta
- `n8n.ts`: envia `x-cober-key` em todos os requests quando `N8N_WEBHOOK_KEY` está no env
- `mcp.json`: adicionado `N8N_WEBHOOK_KEY`
- `.env` MCP: adicionado `N8N_WEBHOOK_KEY`
- Rebuild e smoke test OK · 401 sem key ✅ · 401 key errada ✅ · 200 key correta ✅
- `workflows/data-api-n8n.json` atualizado (21 nós)

---

## 2026-06-12 — Fase 2: MCP reescrito — ponte n8n elimina OAuth local

### Fase 2 — MCP cobersystem-analytics: bridge n8n
**Arquivos alterados em `/root/cobersystem-mcp/src/`:**
- **`n8n.ts`** (novo): cliente HTTP único para todos os webhooks n8n. Lê `N8N_WEBHOOK_BASE` do env. Timeout 30s. Sem OAuth.
- **`gsc.ts`** reescrito: 3 funções → wrappers de 1 linha sobre `n8nGet('gsc', {...})`
- **`ga4.ts`** reescrito: 4 funções → wrappers sobre `n8nGet('ga4', {...})`
- **`ads.ts`** reescrito: 3 funções → wrappers sobre `n8nGet('ads', {...})`
- **`auth.ts`** / **`gmb.ts`**: mantidos intactos (GMB ainda usa OAuth)
- **`mcp.json`**: adicionado `N8N_WEBHOOK_BASE=https://automacao-n8n.fmjbtn.easypanel.host/webhook/cober`
- Rebuild TypeScript → `dist/` atualizado (gsc.js: 336B, ga4.js: 385B, ads.js: 347B, n8n.js: 802B)
- Smoke test: MCP inicia sem erro com novo env
- **`invalid_grant` eliminado permanentemente** para GSC/GA4/Ads — OAuth nunca mais é chamado por esses módulos

---

## 2026-06-12 — Fase 0 + Fase 1: Agência autônoma — MCP funcional + webhooks n8n

### Fase 0 — MCP cobersystem-analytics reativado
- `mcp.json`: sincronizado `GOOGLE_REFRESH_TOKEN` válido (token do `.env`, que estava funcional) em substituição ao token expirado
- Rebuild do MCP (`npm run build` via tsx/tsc) — OK
- Validado: GSC ✅, GA4 ✅, Ads ✅ — 14 tools funcionando com dados reais
- **Campanha ativa detectada**: "Cobersystem - Leads SP" PAUSADA — alerta para reativar

### Fase 1 — Workflow DATA-API criado no n8n
- **Workflow criado**: "Cobersystem DATA-API (MCP Bridge)" — ID `JHQJ8sFTF1bHlooU`
- **Workflow salvo**: `workflows/data-api-n8n.json`
- 3 webhooks GET ativos em `https://automacao-n8n.fmjbtn.easypanel.host/webhook/`:
  - `/cober/gsc?type=queries|pages|opportunities&days=N&limit=N` — GSC via Google account 2
  - `/cober/ga4?type=overview|acquisition|toppages|realtime&days=N` — GA4 via Google account
  - `/cober/ads?type=campaign|keywords|searchterms&days=N&limit=N` — Ads REST API
- n8n como único detentor de OAuth Google — elimina o `invalid_grant` permanentemente
- Testado e validado: todas as rotas retornando dados reais

---

## 2026-06-11 — Correções de risco de penalidade manual Google (P0)

**`lib/schemas/product-schemas.ts`** — removido `aggregateRating` falso de todas as 9 constantes:
`coberturaRetratilCompacto` (4.9/47), `coberturaRetratilGeral` (4.9/87), `coberturaPolicarbonato` (4.8/124),
`coberturaTermoacustica` (4.9/63), `venezianaPolicarbonato` (4.7/28), `coberturaAreaGourmet` (4.9/156),
`coberturaPiscina` (4.8/93), `coberturaPergolado` (4.9/78), `automacaoInteligente` (5.0/142).
Arquivo reescrito integralmente. Mantidos: offers, brand, image, description, sku, additionalProperty.

**FAQ-fantasma resolvido (FAQPage no schema sem conteúdo visível):**
- `app/servicos/cobertura-retratil/page.tsx` — adicionada seção visual "Perguntas Frequentes" antes do CTA final, mapeando `faqSchema.mainEntity` (5 perguntas)
- `app/servicos/cobertura-policarbonato/page.tsx` — idem (5 perguntas)
- `app/servicos/cobertura-varanda-apartamento/page.tsx` — já renderizava FAQ visualmente (linhas 387–402); sem alteração necessária

---

## 2026-06-11 — Correções críticas de segurança e SEO (4 alertas)

**Criado:**
- `app/revisao/layout.tsx` — `robots: { index: false, follow: false }` para bloquear indexação da página interna

**Modificado:**
- `app/robots.ts` — `/revisao/` adicionado ao `disallow` para todos os user-agents (*, Googlebot, Bingbot)

**Deletado:**
- `public/robots.txt` — conflitava com `app/robots.ts`; arquivo estático sobrescrevia as regras corretas
- `app/servicos/calhas-rufos-perfil-u/page.tsx` — dívida técnica; redirect 301 já existe no `next.config.ts`

**Schema:**
- `app/telhado-retratil-policarbonato-preco/page.tsx` — removido `aggregateRating` falso (4.8/127 reviews sem evidência real = risco de penalidade manual Google)

---

## 2026-06-10 — Infraestrutura SSG: cobertura-pergolado + cobertura-garagem

**Criados:**
- `lib/cobertura-pergolado-cidades.ts` — 4 cidades (barueri, sao-paulo, campinas, santo-andre) + 3 bairros SP (jardins, morumbi, pinheiros) com SEO foco pergolado bioclimático alto padrão
- `lib/cobertura-garagem-cidades.ts` — 4 cidades (guarulhos, sao-paulo, santo-andre, osasco) + 3 bairros SP (tatuape, brooklin, vila-mariana) com SEO foco garagem 2 carros policarbonato
- `app/produtos/cobertura-pergolado/em/[cidade]/page.tsx` — 4 páginas SSG + bairros hub
- `app/produtos/cobertura-pergolado/em/sao-paulo/[bairro]/page.tsx` — 3 páginas SSG bairros SP
- `app/produtos/cobertura-garagem/em/[cidade]/page.tsx` — 4 páginas SSG + bairros hub
- `app/produtos/cobertura-garagem/em/sao-paulo/[bairro]/page.tsx` — 3 páginas SSG bairros SP

**Modificados:**
- `lib/sao-paulo-bairros.ts` — adicionado bairro `jardins`
- `lib/sao-paulo-bairros-conteudo.ts` — adicionado conteúdo para `jardins` (4 linhas de produto)
- `app/sitemap.ts` — 14 novas URLs (4+4 cidades + 3+3 bairros SP)

---

## 2026-06-10 — Semana 2: /produtos/cobertura-piscina/em/[cidade]

**Criados:** lib/cobertura-piscina-cidades.ts, app/produtos/cobertura-piscina/em/[cidade]/page.tsx, app/produtos/cobertura-piscina/em/sao-paulo/[bairro]/page.tsx
**Modificado:** app/sitemap.ts — 7 novas URLs (4 cidades + 3 bairros SP)

---

## 2026-06-10 — Blog: duplicatas resolvidas + 4 posts novos + links /produtos/ + redirect 301

### Deploy (commit `89fdff1`)

#### D1 — Redirect 301 + remoção da duplicata de policarbonato
- `next.config.ts`: redirect permanente `/blog/cobertura-de-policarbonato-precos-tipos-guia` → `/blog/cobertura-policarbonato-preco-tipos`
- `content/blog-posts.json`: entrada duplicata removida
- `app/blog/page.tsx`: card id:7 removido
- `app/sitemap.ts`: URL removida
- `app/blog/[slug]/page.tsx`: POST_INTERNAL_LINKS e POST_WHATSAPP_MESSAGE da duplicata removidos

#### D2/D3 — Arquivos órfãos deletados
- `content/blog-posts-parte2.json` (21.8KB, 2 slugs duplicados, nunca importado)
- `content/blog-posts.json.backup` (70.2KB, versão antiga)

#### Links /produtos/ adicionados nos 4 posts product-intent (POST_INTERNAL_LINKS)
| Post | Link /produtos/ adicionado |
|---|---|
| cobertura-retratil-guia-completo | `/produtos/cobertura-retratil` |
| cobertura-abre-fecha-vantagens | `/produtos/cobertura-abre-e-fecha` |
| cobertura-policarbonato-preco-tipos | `/produtos/cobertura-policarbonato` |
| automacao-alexa-sensor-chuva | `/produtos/cobertura-retratil` |

#### 4 posts novos em blog-posts.json (12 posts total)
| Slug | Keyword primária | Vol. est. | Funil | CTA → |
|---|---|---|---|---|
| `teto-retratil-automatico-como-funciona-precos` | teto retrátil automático / telhado retrátil | 300–700 + 2–4k | meio→fundo | /servicos/cobertura-retratil-automatizada |
| `fechamento-de-varanda-tipos-precos` | fechamento de varanda | 3–6k | fundo | /servicos/cobertura-varanda-apartamento |
| `pergolado-bioclimatico-o-que-e-vale-a-pena-precos` | pergolado bioclimático | 2–5k | meio→fundo | /servicos/cobertura-pergolado |
| `toldo-retratil-vs-cobertura-retratil-qual-escolher` | toldo retrátil | 8–15k | topo→meio | /servicos/cobertura-retratil |

Cada post tem: 8–10 seções + FAQ + POST_INTERNAL_LINKS + POST_WHATSAPP_MESSAGE + card em /blog + sitemap

---

## 2026-06-10 — SEO: resolver canibalização /servicos vs /produtos + links cruzados hierárquicos

### Deploy (commit `acb187c`)

#### (a) `/servicos/cobertura-retratil` — reposicionado para intenção de serviço
- `title`: "Instalação de Cobertura Retrátil em São Paulo | Projeto e Garantia | Cobersystem"
- `H1`: "Instalação de Cobertura Retrátil em São Paulo"
- `keywords`: trocados head terms de produto por termos de serviço/instalação
- Callout (eixo vertical) → `/produtos/cobertura-retratil` ("Ver catálogo de modelos")

#### (b) `/servicos/cobertura-termoacustica` — reposicionado para aplicação/ambiente
- `title`: "Cobertura Termoacústica para Área Gourmet e Galpão em SP | Cobersystem"
- `H1`: "Cobertura Termoacústica: Proteção Térmica e Acústica para o Seu Espaço"
- `keywords`: aplicação + instalação (removidos head terms de produto)
- **Schema corrigido**: `@type: Product` → `@type: Service` (tipo correto para página de serviço)
- Callout (eixo vertical) → `/produtos/cobertura-termoacustica`

#### (c) `/produtos/cobertura-abre-e-fecha`
- `keywords`: removido "cobertura retrátil automatizada" (dono legítimo: `/servicos/cobertura-retratil-automatizada`)
- Substituído por "cobertura que abre e fecha, cobertura abre e fecha SP"

#### (d) Novos componentes
- `components/produto/ProdutoInstalacaoLink.tsx` — callout dourado em /produtos/[tipo] → /servicos/[tipo] (eixo vertical)
- `components/produto/ProdutoAplicacoes.tsx` — grade de links em /produtos/[tipo] → /servicos/[ambiente] (eixo horizontal)

#### (e) Links cruzados nas 4 páginas /produtos/
| Produto | Eixo vertical | Eixo horizontal (ambientes) |
|---|---|---|
| `cobertura-retratil` | → /servicos/cobertura-retratil | piscina, gourmet, varanda, garagem |
| `cobertura-termoacustica` | → /servicos/cobertura-termoacustica | gourmet, garagem, varanda, corredor |
| `cobertura-policarbonato` | → /servicos/cobertura-policarbonato | garagem, corredor, playground, jardim |
| `cobertura-abre-e-fecha` | → /servicos/cobertura-abre-e-fecha | piscina, gourmet, playground, pergolado |

### Resultado estrutural
- `/produtos/[tipo]` — dono dos head terms ("cobertura retrátil", "cobertura termoacústica")
- `/servicos/[tipo]` — dono dos termos de serviço/instalação SP
- `/servicos/[ambiente]` — dono dos termos de ambiente ("cobertura para piscina SP")
- PageRank flui tipo → serviço e tipo → ambientes; sem sinal dividido

---

## 2026-06-09 — Fix schema JSON-LD em lote: 8 páginas de serviço

### Deploy (commit `7f8c115`)
- Migradas de `SchemaMarkup` (next/script) para `StructuredData` (script ld+json nativo SSR):
  - `/servicos/cobertura-abre-e-fecha`
  - `/servicos/cobertura-jardim-de-inverno`
  - `/servicos/cobertura-termoacustica`
  - `/servicos/cobertura-playground`
  - `/servicos/cobertura-garagem`
  - `/servicos/cobertura-corredor-lateral`
  - `/servicos/cobertura-fixa-policarbonato-compacto`
  - `/servicos/cobertura-pergolado`

---

## 2026-06-09 — Fix schema JSON-LD retrátil automatizada (GSC)

### Deploy (commit `3bd21c2`)

---

## 2026-06-09 — Fix: GoogleAds no layout (window.gtag)

### Deploy (commit `94e533e`)
- `app/layout.tsx`: remontado `<GoogleAds />` para inicializar `window.gtag` (GA4 G-EL6RVFYFSJ + Ads AW-1095370047)
- `GoogleAds.tsx`: `window.gtag` atribuído explicitamente no script de init
- **Duplicidade GTM:** em produção o GTM não renderiza (env ausente/placeholder) — sem risco imediato; se ativar GTM com mesmas IDs GA4/Ads no container, revisar para evitar pageviews duplicados

---

## 2026-06-09 — ETAPA 6+7: conteúdo rico fixa alveolar + projetos personalizados

### Deploy (commit `3930754`)
- `/servicos/cobertura-fixa-policarbonato-alveolar` — `CoberturaFixaAlveolarExpandedSections`: hero completo, 6 etapas, comparativo alveolar/compacto/abre-e-fecha, ServicePriceTable, aplicações com metragem, FAQ 6, CTA WhatsApp hero+footer
- `/servicos/projetos-personalizados` — `ProjetosPersonalizadosExpandedSections`: hero completo, etapas de engenharia, casos de uso, tabela referência, FAQ 6 com `getFaqPriceAnswer`, CTA WhatsApp hero+footer

---

## 2026-06-09 — WhatsApp GA4/Ads + sitemap + fix GSC gourmet/piscina/projetos

### Deploy (commit `117ddba`)
- **WhatsApp tracking unificado:** `WhatsAppLink.tsx` + `trackWhatsAppLead()` dispara GA4 `whatsapp_click`, Google Ads `WHATSAPP_CLICK` e Meta Contact em todas as páginas `/servicos/*`
- **FAQSchema:** trocado `next/script` por `<script>` nativo (FAQ visível no HTML SSR — corrige gourmet e piscina)
- **GSC gourmet:** removido `faqSchemas.coberturaAreaGourmet` legado (preços R$ 12k–35k conflitantes com Product)
- **GSC projetos:** `SchemaMarkup` → `StructuredData`
- **Sitemap:** adicionadas `cobertura-policarbonato`, `cobertura-jardim-de-inverno`, `cobertura-pergolado`
- **Links internos varanda:** `ServiceVejaTambem` + links em abre-e-fecha, retrátil, termoacústica expanded

---

## 2026-06-09 — Fix schema JSON-LD: StructuredData nas 4 páginas GSC

### Deploy (commit `5c716fd`)
- `/servicos/cobertura-fixa-policarbonato-alveolar`, `/cobertura-aluminio`, `/cobertura-piscina`, `/cobertura-area-gourmet`
- Trocado `SchemaMarkup` (next/script) por `StructuredData` (`<script type="application/ld+json">`)
- Removidos schemas legados `productSchemas.coberturaPiscina` (25000) e `coberturaAreaGourmet` (16000)
- Product único com `buildServiceOffer()` + `getServiceSchemaMinPrice()`

---

## 2026-06-09 — Correções pós-auditoria SEO (8 itens)

### Deploy (commit `14f5480`)
- `ServiceVejaTambem` — entrada jardim-de-inverno + `current` corrigido
- `cobertura-abre-e-fecha` — FAQ preço via `formatPricePerM2`, keywords sem overlap retrátil
- `cobertura-retratil-automatizada` — meta description dinâmica, títulos de aplicação com ênfase em automação
- `/servicos` — cards Abre e Fecha e Retrátil com descrições diferenciadas
- `cobertura-termoacustica` — links para fixa alveolar e área gourmet
- `cobertura-jardim-de-inverno` — links para pergolado e varanda apartamento

---

## 2026-06-09 — ETAPA 5: conteúdo rico jardim de inverno

### Deploy (commit `b7ba5e4`)
- `/servicos/cobertura-jardim-de-inverno` — expanded long-form, cenários botânicos únicos, galeria real, ServicePriceTable, FAQ 6, CTA WhatsApp

---

## 2026-06-09 — ETAPA 4: conteúdo rico abre e fecha

### Deploy (commit `7e639d0`)
- `/servicos/cobertura-abre-e-fecha` — expanded long-form, comparativo vs retrátil/automatizada, 6 etapas, aplicações com metragem, ServicePriceTable, FAQ 6, CTA WhatsApp no hero

---

## 2026-06-09 — ETAPA 3: conteúdo rico retrátil automatizada

### Deploy (commit `2c33c47`)
- `/servicos/cobertura-retratil-automatizada` — expanded long-form, comparativo vs retrátil/abre-e-fecha, 6 etapas, ServicePriceTable, FAQ 6, CTA WhatsApp

---

## 2026-06-09 — ETAPA 2: conteúdo rico termoacústica e alumínio

### Deploy (commit `0ed1f84`)
- `/servicos/cobertura-termoacustica` — expanded long-form, comparativo sanduíche vs alveolar, galeria, FAQ 6, preços oficiais
- `/servicos/cobertura-aluminio` — tipos de telha, cores RAL, pintura eletrostática, comparativo vs policarbonato, galeria, FAQ 6

---

## 2026-06-09 — Cards /servicos + fotos retrátil e piscina

### Deploy (commit `fc46683`)
- 3 cards adicionados em `/servicos`: varanda, retrátil, policarbonato
- Hero e card retrátil → `Cobertura Retratil melhorada.png`
- Card piscina → `IMG_6306.jpg` (igual ao hero interno)

---

## 2026-06-09 — Preços oficiais centralizados em lib/pricing.ts

### Arquivos criados
- `lib/pricing.ts` — tabela oficial Cobersystem (R$/m²): Abre e Fecha R$ 800–1.200, Fixa Alveolar R$ 600–900, Fixa Compacto R$ 800–1.200, Retrátil Automatizada R$ 1.200–1.600; helpers `formatPricePerM2`, `getServiceSchemaMinPrice`, `getFaqPriceAnswer`, etc.
- `components/servicos/ServicePriceTable.tsx` — tabela padrão com colunas **Tipo** e **Preço/m²** apenas

### Arquivos editados (17 páginas de serviço)
- Schema JSON-LD (`buildServiceOffer`) usa `getServiceSchemaMinPrice(slug)` com preço mínimo oficial por tipo
- FAQs e textos inline corrigidos para faixas oficiais
- Tabelas simplificadas: removidas colunas extras (Corredor 6m/12m, Varanda 8m²/15m², 1 carro/2 carros)
- `PriceEstimateNote` e `ServiceAutomationSection` importam de `lib/pricing.ts`

### Tabela oficial aplicada
| Tipo | Faixa R$/m² |
|------|-------------|
| Cobertura Abre e Fecha | 800 – 1.200 |
| Cobertura Fixa Alveolar | 600 – 900 |
| Cobertura Fixa Compacto | 800 – 1.200 |
| Cobertura Retrátil Automatizada | 1.200 – 1.600 |

### Deploy (commit `7f8c115`)
- Push para `origin/main` (Vercel)

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

---

## 2026-05-27 — P2.1: Substituição de img nativo por Image do Next.js no blog

### Arquivos editados

**`app/blog/[slug]/page.tsx`:**
- Adicionado `import Image from 'next/image'`
- Hero do post: `<img loading="lazy">` → `<Image fill priority sizes="(max-width: 768px) 100vw, 896px">` — melhora LCP
- Grid de imagens (post policarbonato): 2× `<img>` → `<Image fill>` dentro de container `relative h-64`

**`app/blog/page.tsx`:**
- Adicionado `import Image from 'next/image'`
- Cards da listagem: CSS `style.backgroundImage` removido → `<Image fill loading="lazy" sizes="...">` posicionado absolutamente dentro do `<article>`

### Ganhos esperados
- AVIF/WebP automático em todas as imagens do blog (40-70% de redução de peso)
- Eliminação de CLS nas imagens sem dimensões declaradas
- LCP do post melhorado com `priority` no hero

---

## 2026-05-27 — Risco SEO: Remoção de AggregateRating e Reviews fictícios

### Contexto
GMB real tem 18 avaliações com nota 3.5. O componente `LocalBusinessSchema.tsx` continha dados fictícios incompatíveis com a realidade (`ratingValue: 4.9`, `reviewCount: 127`, 2 reviews com "Cliente Verificado"). Dados falsos em structured data são violação das diretrizes do Google e podem gerar Manual Action.

### Arquivo editado
- `components/LocalBusinessSchema.tsx` — removidos completamente os campos `aggregateRating` e `review` do schema `LocalBusiness`

### Decisão estratégica
- P2.6 (AggregateRating nas páginas de serviço) **pausado** até o GMB atingir ≥ 4.0 estrelas
- Quando atingir 4.0+, implementar com dados reais do GBP
- Meta: ~8–10 novas avaliações 5 estrelas para sair de 3.5 → 4.0 (base de 18 reviews)

---

## 2026-05-27 — P2.5: Links internos nos posts de blog

### Arquivo editado
- `app/blog/[slug]/page.tsx` — adicionados:
  1. Constante `POST_INTERNAL_LINKS` — mapa de 8 slugs × 3 links cada (24 links internos totais)
  2. Bloco JSX "Serviços relacionados" — inserido entre Conclusão e Tags, com borda dourada `#D4AF37`

### Cobertura de links por post
- `cobertura-retratil-guia-completo` → retratil, automatizada, area-gourmet
- `cobertura-abre-fecha-vantagens` → abre-e-fecha, piscina, retratil
- `cobertura-policarbonato-preco-tipos` → alveolar, compacto, garagem
- `cobertura-retratil-churrasqueira` → area-gourmet, retratil, abre-e-fecha
- `automacao-alexa-sensor-chuva` → automatizada, retratil, abre-e-fecha
- `pergolado-vs-cobertura-retratil` → retratil, projetos-personalizados, area-gourmet
- `cobertura-de-policarbonato-precos-tipos-guia` → alveolar, compacto, retratil
- `cobertura-para-piscina-tipos-precos-guia` → piscina, automatizada, retratil

### Objetivo
Distribuir PageRank interno para as páginas de serviço mais comerciais, melhorando ranking das páginas de conversão.

---

## 2026-05-28 — P4.4: Sitemap enriquecido com imagens (217 imagens indexadas)

### Arquivos criados/editados
- `lib/seo/image-sitemap.ts` — **criado**: helper `getImageUrls(relDir)` que varre recursivamente `/public/{relDir}` e retorna array de URLs absolutas
- `app/sitemap.ts` — **editado**:
  - Import de `getImageUrls`
  - `IMG` object pré-carrega 7 pastas de imagens em build time
  - `requiredPages`: home com 15 imagens de destaque, blog com 9, cases-sucesso com 40, galeria com 13 projetos + 20 retrátil
  - `mainProductPages`: cada produto com seu banco completo de imagens (retratil: 105, policarbonato: 34, termoacustica: 11, veneziana: 5)
  - `blogArticles`: cada post com sua imagem de capa individual via `blogImageMap`

### Mapeamento pasta → URL
| Pasta | URL | Imagens |
|---|---|---|
| produtos/cobertura-retratil | /produtos/cobertura-retratil | 105 |
| produtos/cobertura-policarbonato | /produtos/cobertura-policarbonato | 34 |
| produtos/cobertura-termoacustica | /produtos/cobertura-termoacustica | 11 |
| produtos/veneziana | /produtos/veneziana-policarbonato | 5 |
| cases-antes-depois | /cases-sucesso | 40 |
| projetos | /galeria | 13 |
| blog | /blog + posts individuais | 9 |

### Impacto esperado
- Google Image Search indexará imagens de produto (alta conversão visual)
- Posts de blog com imagem de capa no Image Search
- ~217 imagens declaradas no sitemap.xml

---

## 2026-05-28 — SEO: WebSite schema com publisher referenciando Organization

### Arquivos editados
- `components/SchemaMarkup.tsx`:
  - Adicionada interface `WebSiteSchema`
  - Adicionado tipo `'website'` no union de `SchemaMarkupProps`
  - Adicionado `@id` em `organizationSchema` (`...#organization`) para servir de referência ao publisher
  - Exportado `websiteSchema` com `name`, `alternateName`, `url`, `description`, `inLanguage: pt-BR`, e `publisher: { @id }` apontando para a Organization
- `app/layout.tsx`:
  - Importado `websiteSchema`
  - Injetado terceiro `<SchemaMarkup type="website" data={websiteSchema} />` no body

### Decisão técnica
- **Sem `SearchAction`**: o site não tem rota de busca interna funcional, e o Google depreciou o Sitelinks Search Box em out/2024. Declarar capacidade inexistente seria contraproducente.
- **Com referência cruzada via `@id`**: estabelece grafo de entidades (Organization ← publisher ← WebSite) reconhecido por Knowledge Graph e LLMs.

### Impacto
- Reforço da entidade "site" no Knowledge Graph
- Melhor entendimento semântico para LLMs (ChatGPT, Perplexity, Gemini)
- Base para futuras extensões de schema (BreadcrumbList global, Article references)

---

## 2026-05-28 — P3.3b: Landing page /lp/area-gourmet para Google Ads

### Arquivos criados
- `app/lp/area-gourmet/layout.tsx` — metadata + `robots: noindex`
- `app/lp/area-gourmet/page.tsx` — LP completa (client component, force-static)
  - LP Header: logo + telefone clicável, sem navegação
  - Hero: "Chove Lá Fora, Festa Aqui Dentro" + 2 CTAs above the fold
  - Trust bar: 500+ projetos / 10+ anos / Grande SP
  - Problema vs Solução (churrasqueira, calor, fumaça, móveis)
  - 3 diferenciais: visita 48h / projeto 3D / 2 anos garantia
  - Como funciona: 3 passos
  - FAQ: 3 perguntas específicas (preço, churrasqueira, prazo)
  - CTA final: WhatsApp + /orcamento
  - LP Footer minimal
  - Service Schema + FAQPage Schema
  - Tracking: `trackGoogleAdsConversion` em todos os CTAs, `trackCTAClick` por botão

### URL para Google Ads
https://www.coberturapolicarbonato.com.br/lp/area-gourmet

---

## 2026-05-28 — HOTFIX: schema LocalBusiness unificado + trackPhoneClick como conversão Google Ads

### Arquivos alterados
- `components/LocalBusinessSchema.tsx` — **deletado** (dead code, nunca importado em nenhuma página; eliminado risco de duplicação futura e inconsistência de dados)
- `components/SchemaMarkup.tsx` — horário de sábado corrigido de `08:00–12:00` para `08:00–17:00` (horário real confirmado)
- `components/GoogleAnalytics.tsx`:
  - Import de `trackGoogleAdsConversion` adicionado
  - `trackPhoneClick` agora dispara `trackGoogleAdsConversion('lGDsCLD1opAYEM2d24Mp', 0)` além do evento GA4
  - Cobertura automática: Footer + LP cobertura retrátil (3 pontos) + qualquer uso futuro

### Impacto
- Zero duplicação de LocalBusiness no Knowledge Graph
- Horário de sábado correto e consistente em todos os schemas
- Cliques em telefone agora contam como conversão no Google Ads (sem alterar chamadores individuais)

---

## 2026-05-27 — P3.3: Landing page /lp/cobertura-retratil para Google Ads

### Arquivos criados/editados
- `app/lp/cobertura-retratil/page.tsx` — **criado** (client component)
  - LP Header: logo + telefone clicável, sem navegação
  - Hero: H1 forte + subheadline + 2 CTAs above the fold (WhatsApp + telefone)
  - Trust bar: 500+ projetos / 10+ anos / Grande SP
  - Problema vs Solução: dois cards contrastando sem x com cobertura
  - 3 diferenciais: visita técnica 48h / projeto 3D incluso / 2 anos garantia
  - Como funciona: 3 passos numerados
  - FAQ visual + FAQPage schema (3 perguntas)
  - CTA final: WhatsApp + link /orcamento
  - LP Footer minimal: logo + telefone + Google Maps + copyright
  - Service Schema + FAQPage Schema (JSON-LD)
  - Tracking: `trackGoogleAdsConversion` em todos os CTAs, `trackCTAClick` por botão
- `app/lp/cobertura-retratil/layout.tsx` — **criado** para metadata (robots: noindex)
- `components/Header.tsx` — adicionado `'use client'` + `usePathname`, retorna null em /lp/*
- `components/Footer.tsx` — adicionado `usePathname`, retorna null em /lp/*

### Decisões técnicas
- robots: noindex (LP de Ads não compete com /servicos/cobertura-retratil no SEO)
- Prova social: apenas dados reais (500+ projetos, 10+ anos) — sem notas ou depoimentos falsos
- WhatsApp flutuante global permanece ativo na LP (é conversão, não distração)

---

## 2026-05-27 — BUGFIX: 3 bugs + 2 inconsistências corrigidos (auditoria pós-deploy)

### Arquivos editados
- `app/blog/[slug]/page.tsx`:
  - **Bug 1**: CTA final do blog `href="/contato"` → `href="/orcamento"` (tracking recuperado)
  - **Inconsistência 1**: WhatsApp no CTA final agora usa `POST_WHATSAPP_MESSAGE[artigo.slug]` contextual em vez de URL genérica
- `components/Footer.tsx`:
  - **Bug 2**: Link "Cases" `href="/cases"` → `href="/cases-sucesso"` (404 eliminado)
  - **Bug 3**: Botão "Solicitar Orçamento" `href="/contato"` → `href="/orcamento"` (funil corrigido)
  - **Bônus**: Copyright `© 2024` → `© 2024–2026`
- `components/WhatsAppButton.tsx`:
  - **Inconsistência 2**: Adicionada rota `/servicos/cobertura-varanda-apartamento` com mensagem contextual

### Impacto
- Funil de conversão completo: menu → /orcamento → tracking → /obrigado agora é consistente em todas as entradas (menu, footer, CTA blog)
- Zero 404s no footer
- WhatsApp contextual em todos os 9 posts do blog e na nova página de varanda

---

## 2026-05-27 — P3.2: Nova página /servicos/cobertura-varanda-apartamento

### Arquivos criados/editados
- `app/servicos/cobertura-varanda-apartamento/page.tsx` — **criado**
  - Metadata completa (título, descrição, canonical, Open Graph, Twitter Card)
  - Service Schema (JSON-LD)
  - FAQPage Schema com 5 perguntas (rich snippet)
  - Hero com 4 stats
  - Seção de benefícios (6 cards)
  - Comparativo retrátil vs fixa com preços
  - Seção "Aprovação no Condomínio" (diferencial exclusivo, 4 passos)
  - Tabela de preços 2026 (4 modelos × 3 tamanhos)
  - FAQ visual (reaproveitando dados do schema)
  - Seção "Veja também" com 3 links internos
  - CTA final com WhatsApp + link /orcamento
- `app/sitemap.ts` — adicionado `cobertura-varanda-apartamento` em `mainServicePages` e `cobertura-area-gourmet-tipos-precos-guia` em `blogArticles`
- `components/Header.tsx` — adicionado "Varanda de Apartamento" no dropdown Serviços

### Palavras-chave alvo
cobertura para varanda de apartamento, cobertura varanda apartamento SP/preço/retrátil, fechamento varanda policarbonato, cobertura varanda condomínio

---

## 2026-05-27 — P2.2: Novo post — Cobertura para Área Gourmet

### Arquivos editados
- `content/blog-posts.json`: novo entry `cobertura-area-gourmet-tipos-precos-guia`
  - 12 seções + FAQ (rich snippet) + conclusão
  - Palavras-chave: cobertura para área gourmet, preço, retrátil, policarbonato, varanda gourmet
- `app/blog/page.tsx`: novo item `id: 9` no array `artigos`
- `app/blog/[slug]/page.tsx`:
  - `POST_INTERNAL_LINKS`: 3 links internos (área gourmet, retrátil, abre e fecha)
  - `POST_WHATSAPP_MESSAGE`: mensagem contextual para o novo post

### Estrutura do post
12 seções cobrindo: benefícios, tipos (retrátil, fixa, vidro, pergolado), tabela de preços 2026, comparativo retrátil vs fixa, integração com decoração, ventilação, manutenção e FAQ.

### CTA intermediário
Inserido automaticamente após a 3ª seção (herda lógica do P3.1 já implementado).

---

## 2026-05-27 — P3.6b: Dica de fotos via WhatsApp no formulário /orcamento

### Arquivo editado
- `app/orcamento/page.tsx`: adicionado parágrafo abaixo do botão de envio:
  - "Tem fotos do espaço? Envie pelo WhatsApp após o contato — é mais rápido e prático."

### Impacto
- Usuário não abandona o formulário por falta de upload
- Fluxo principal de conversão (com tracking) permanece intacto
- Zero fricção adicionada ao formulário

---

## 2026-05-27 — P3.6: Botão "Orçamento" do menu redirecionado para /orcamento

### Arquivo editado
- `components/Header.tsx`:
  - Desktop (linha 94): `href="/contato"` → `href="/orcamento"`
  - Mobile (linha 140): `href="/contato"` → `href="/orcamento"`

### Impacto
- Todo clique no botão "Orçamento" do menu agora aciona a página com tracking completo (Google Ads + GA4 + Meta Pixel)
- Após envio do formulário, usuário é redirecionado para `/obrigado` (URL de conversão limpa)
- Sem mudança visual — apenas o destino foi corrigido

---

## 2026-05-27 — P2.7: URL direta do GBP nos schemas LocalBusiness e Organization

### Arquivos editados
- `components/SchemaMarkup.tsx`:
  - `organizationSchema.sameAs` — adicionado `https://share.google/Mqi0TYJoGCN7QGDo6`
  - `localBusinessSchema.hasMap` — substituído link de busca genérica pela URL direta do GBP
  - `localBusinessSchema.sameAs` — adicionado campo com 3 URLs (Instagram, YouTube, GBP)
  - Interface `LocalBusinessSchema` — adicionado campo opcional `sameAs?: string[]`
- `components/LocalBusinessSchema.tsx`:
  - `sameAs` — adicionado `https://share.google/Mqi0TYJoGCN7QGDo6`
  - `hasMap` — adicionado com URL direta do GBP

### Impacto esperado
- Google confirma que o site e o GBP são a mesma entidade (Knowledge Graph)
- Melhora no sinal de autoridade local para Map Pack
- Elimina ambiguidade da busca genérica anterior (`/search/cobersystem+sao+paulo`)

---

## 2026-06-09 — Fotos, heroes e cards de serviços + Playground

### Imagens adicionadas (`public/images/projetos/`)
- `Cobertura Alumínio Espaço Kids.png`
- `Cobertura em Policarbonato.png`
- `Cobertura Termoacustica.png`
- `Cobertura Playground.png`

### Páginas de serviço — heroes atualizados (layout padrão piscina)
- `/servicos/cobertura-varanda-apartamento` — hero `IMG_4754.jpg`
- `/servicos/cobertura-garagem` — hero `IMG_3609.jpg`
- `/servicos/cobertura-aluminio` — hero `IMG_6324.jpg`
- `/servicos/cobertura-policarbonato` — hero `Cobertura em Policarbonato.png`
- `/servicos/cobertura-termoacustica` — hero `Cobertura Termoacustica.png`

### `/servicos/calhas-rufos-perfil-u` — conteúdo reescrito
- Card e página convertidos para **Cobertura para Playground**
- Novo componente `CoberturaPlaygroundExpandedSections.tsx`
- Foco SEO: cobertura para playground, abre e fecha, retrátil, escolas, condomínios

### Listagem `/servicos` — cards atualizados
- Piscina → `Cobertura em Policarbonato.png` (página interna intacta)
- Fixa compacto → `IMG_1762.jpg`
- Termoacústica, Alumínio, Playground — novas fotos
- **Novos cards:** Jardim de Inverno (`jardim-de-inverno-02.png`) e Pergolado (`pergolado-01.png`)

### Deploy (commit `7f8c115`)
- Build validado localmente; push para `origin/main` (Vercel)

---

## 2026-06-09 — Migração Playground + expansão páginas fracas

### URGENTE — URL Playground
- Nova página `/servicos/cobertura-playground` (canonical, metadata, 5 FAQs, CTA WhatsApp, ServiceVejaTambem)
- Redirect 301 em `next.config.ts` e `permanentRedirect` em `/servicos/calhas-rufos-perfil-u`
- Card em `/servicos` atualizado para slug `cobertura-playground`
- `sitemap.ts` e `breadcrumb-names.ts` atualizados
- Removido `calhas-rufos-perfil-u/CoberturaPlaygroundExpandedSections.tsx` (duplicata)

### Expansão de conteúdo
- `/servicos/cobertura-corredor-lateral` — ~1.200 palavras: aplicações, comparativo fixa/retrátil, tabela preços, galeria, 5 FAQs, WhatsApp, ServiceVejaTambem
- `/servicos/cobertura-garagem` — ~1.400 palavras: comparativo, tabela 1/2 carros, granizo, galeria, 5 FAQs, WhatsApp, ServiceVejaTambem

### Padrões transversais
- CTA WhatsApp + 5 FAQs em: fixa compacto, alumínio, projetos personalizados
- ServiceVejaTambem adicionado em: garagem, corredor-lateral, alumínio, projetos-personalizados, playground
- `ServiceVejaTambem.tsx` — novas entradas para os slugs acima

### Deploy (commit `7f8c115`)
- Build validado; push para `origin/main` (Vercel)

---

## 2026-06-09 — Fotos cards e heroes: abre-e-fecha, alveolar, retrátil automatizada

### Imagens adicionadas (`public/images/projetos/`)
- `Cobertura Abre e Fecha.png`
- `Cobertura Fixa Policarbonato Alveolar.png`

### `/servicos/cobertura-abre-e-fecha`
- Hero e card na listagem → `Cobertura Abre e Fecha.png`
- Metadata OG/Twitter/schema atualizados

### `/servicos/cobertura-fixa-policarbonato-alveolar`
- Hero e card na listagem → `Cobertura Fixa Policarbonato Alveolar.png`

### Listagem `/servicos`
- Card Cobertura Retrátil Automatizada → `IMG_4754.jpg` com `object-position: 50% 30%`

### Deploy (commit `7f8c115`)
- Push para `origin/main` (Vercel)

---

## 2026-06-09 — Foto hero e card: cobertura garagem

### Imagem adicionada (`public/images/projetos/`)
- `Cobertura Garagem.png`

### `/servicos/cobertura-garagem`
- Hero e card na listagem → `Cobertura Garagem.png`
- Metadata OG/Twitter/schema atualizados

### Deploy (commit `7f8c115`)
- Push para `origin/main` (Vercel)

---

## 2026-06-09 — Correção schema Product/Offer em páginas de serviço (GSC)

### Problema
Google Search Console reportava ausência de `price`, `shippingDetails` e `hasMerchantReturnPolicy` nos schemas de produto das páginas de serviço.

### Solução
- `lib/schemas/product-schemas.ts` — exportados `merchantReturnPolicy`, `shippingDetails` e helper `buildServiceOffer(url, price)`
- 17 páginas de serviço atualizadas com `price`, `priceValidUntil`, `hasMerchantReturnPolicy` e `shippingDetails` padronizados

### Deploy (commit `7f8c115`)
- Push para `origin/main` (Vercel)

---

## 2026-06-09 — Preços schema R$ 800 + nota estimada + automação em 17 serviços

### Schema JSON-LD — preço mínimo corrigido para R$ 800
- `/servicos/cobertura-garagem` (era R$ 150)
- `/servicos/cobertura-aluminio` (era R$ 200)
- `/servicos/cobertura-area-gourmet` (era R$ 250)
- `/servicos/cobertura-piscina` (era R$ 300)

### Componentes reutilizáveis
- `components/servicos/PriceEstimateNote.tsx` — nota de valores estimados
- `components/servicos/ServiceAutomationSection.tsx` — Controle Remoto R$ 2.500 / Alexa R$ 3.000 / Sensor R$ 4.000

### Aplicado nas 17 páginas de serviço
- Nota abaixo de tabelas de preço (ou seção equivalente)
- Seção Mecanismos de Automação com "Valor por comando" em vermelho

### Deploy (commit `7f8c115`)
- Push para `origin/main` (Vercel)

---

### Arquivo editado
- `app/blog/[slug]/page.tsx` — adicionados:
  1. `import { Fragment } from 'react'`
  2. `POST_WHATSAPP_MESSAGE` — mapa de mensagens WhatsApp contextuais por slug (8 posts)
  3. CTA intermediário renderizado após a 3ª seção (`idx === 2`) em todos os posts
     - Fundo gradiente escuro (`from-gray-800 to-gray-900`)
     - Botão dourado → `/orcamento`
     - Botão verde → WhatsApp com mensagem contextual pré-preenchida por post
     - Texto: "Quer saber o preço para o seu projeto? Resposta em até 24h."

### Cobertura
- Todos os 8 posts têm ≥ 8 seções — CTA aparece em todos após a 3ª seção
- Mensagem WhatsApp específica por post (mesmo padrão do WhatsAppButton.tsx)

---

## 2026-06-10 — Semana 1: Expansão Geolocal (Interlinking + Bairros Premium SP)

### Objetivo
Melhorar transferência de autoridade entre páginas hub `/localizacao/` e páginas transacionais `/produtos/em/[cidade]`, e substituir bairros de baixo fit por bairros premium no segmento de alto padrão.

### Arquivos alterados

#### `lib/sao-paulo-bairros.ts`
- Removidos: `santana`, `tucuruvi` (baixo fit com ICP alto padrão/área externa)
- Adicionados: `morumbi`, `pinheiros`, `moema` (casas, piscinas, condomínios premium)
- Total de bairros: mantido em 7 (era 6, passa a 7 — net +1 bairro = +4 páginas por produto = +16 páginas no sitemap)

#### `lib/sao-paulo-bairros-conteudo.ts`
- Removidos blocos de conteúdo SEO: `santana`, `tucuruvi`
- Adicionados blocos completos (4 linhas de produto × 3 parágrafos cada) para: `morumbi`, `pinheiros`, `moema`

#### `app/localizacao/*/page.tsx` — 11 arquivos
Adicionada seção "Produtos em [cidade]" com 4 cards linkando para `/produtos/[produto]/em/[cidade]`:
- `sao-paulo` → `/em/sao-paulo`
- `zona-leste`, `zona-sul`, `zona-norte`, `zona-oeste` → `/em/sao-paulo` (zonas são sub-regiões da capital)
- `guarulhos` → `/em/guarulhos`
- `campinas` → `/em/campinas`
- `santo-andre` → `/em/santo-andre`
- `sao-bernardo` → `/em/sao-bernardo-do-campo`
- `sorocaba` → `/produtos/[produto]` (sem página de cidade específica ainda)
- `abc` → combinação santo-andre + sao-bernardo-do-campo

### Impacto esperado
- 11 páginas hub agora passam link juice para 32 páginas transacionais (cobertura × cidade)
- Substituição de bairros: gera +12 páginas novas no sitemap automaticamente (3 bairros × 4 produtos)
  - Novas URLs: `/produtos/{4 produtos}/em/sao-paulo/{morumbi,pinheiros,moema}`
  - Removidas: `/produtos/{4 produtos}/em/sao-paulo/{santana,tucuruvi}` (8 páginas descontinuadas)
  - Net: +4 páginas no sitemap com melhor fit de ICP

### Próxima ação planejada (Semana 2)
Após confirmar indexação: expandir `/produtos/cobertura-piscina/em/[cidade]` com foco em Barueri/Alphaville, Morumbi, Moema, Campinas.

## P5 — Expansão de conteúdo nas 5 páginas prioritárias (Jun 11, 2026)

### Commit: 0befb5d

**Objetivo:** Rankear na primeira página do Google para keywords principais.

**Arquivos alterados (7):**
- `app/produtos/cobertura-policarbonato/page.tsx` — tabela de preços por espessura/tipo, comparativo alveolar×compacto, FAQ visível 8 perguntas
- `app/servicos/cobertura-fixa-policarbonato-compacto/page.tsx` — prova social, seção "Onde usar" (6 ambientes), processo instalação em 4 etapas
- `app/servicos/cobertura-pergolado/page.tsx` — OG image corrigida, comparativo bioclimático×retrátil×fixo, FAQ reescrito para bioclimático SP
- `app/servicos/cobertura-piscina/page.tsx` — FAQ 4→5 perguntas, prova social + 3 cases reais (Morumbi, Alphaville, Jardins)
- `app/page.tsx` — geo SP em H2, social proof numérico, tabela de preços, FAQ 5 perguntas + FAQPage JSON-LD, LocalBusiness JSON-LD, WhatsApp no CTA
- `lib/schemas/faq-schemas.ts` — coberturaPolicarbonato: 5→8 perguntas
- `lib/schemas/product-schemas.ts` — coberturaPolicarbonato offers: preço 450→pricing.ts (600+800), 2 Offers separadas

**Keywords alvo:**
1. "cobertura policarbonato preço" → /produtos/cobertura-policarbonato
2. "cobertura fixa policarbonato compacto SP" → /servicos/cobertura-fixa-policarbonato-compacto
3. "pergolado bioclimático SP" → /servicos/cobertura-pergolado
4. "cobertura para piscina SP" → /servicos/cobertura-piscina
5. "cobertura retrátil São Paulo" → / (home)

## P6 — Gaps de keyword e estruturas finais (Jun 11, 2026)

### Commit: 8e86661

**9 arquivos alterados, 1.422 inserções**

**Novos arquivos criados:**
- `app/servicos/toldo-retratil/page.tsx` — keyword "toldo retrátil SP" (8-15k/mês)
- `app/servicos/cobertura-vidro/page.tsx` — keyword "cobertura de vidro" (3-6k/mês)
- `app/localizacao/alphaville/page.tsx` — hub bairro premium Alphaville/Barueri
- `app/localizacao/jardins/page.tsx` — hub bairro premium Jardins SP
- `app/localizacao/tatuape/page.tsx` — hub bairro premium Tatuapé SP

**Arquivos alterados:**
- `components/ServiceVejaTambem.tsx` — +2 links (toldo-retratil, cobertura-vidro)
- `components/SchemaMarkup.tsx` — localBusinessSchema: +geo lat/lng SP, +email
- `app/sitemap.ts` — +5 URLs novas (priority 0.80)

**Schema GlobalLocalBusiness:** geo (-23.5505, -46.6333) + email adicionados. Organization/LocalBusiness/WebSite já existiam — sem duplicação.
