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

### Deploy
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

### Deploy
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

### Deploy
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
