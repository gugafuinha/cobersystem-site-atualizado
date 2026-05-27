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

## 2026-05-27 — P3.1: CTA intermediário nos posts longos

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
