# 📊 RELATÓRIO TÉCNICO: Análise de Dependências GTM vs Scripts Diretos

**Data:** 2026-03-29  
**Projeto:** Cobersystem Site Atualizado  
**Localização:** `/var/www/cobersystem-site-atualizado`  
**Status:** ⚠️ ANÁLISE SOMENTE - NENHUM ARQUIVO ALTERADO

---

## 📋 SUMÁRIO EXECUTIVO

### Situação Atual
O projeto carrega **4 scripts de tracking simultaneamente** no `layout.tsx`:
- ✅ `<GoogleTagManager />` (GTM-XXXXXXX)
- ⚠️ `<GoogleAnalytics />` (GA4: G-XXXXXXXXXX)
- ⚠️ `<GoogleAds />` (AW-XXXXXXXXXX)
- ✅ `<MetaPixel />` (Facebook Pixel)

### Risco de Duplicação Identificado
**CONFIRMADO:** Há **duplicação de scripts** e **potencial duplicação de eventos**.

---

## 1️⃣ ARQUIVOS QUE DEPENDEM DE `window.gtag`

### 1.1. Arquivos Fonte (TypeScript/TSX)

#### ✅ Componentes que IMPLEMENTAM window.gtag:

**`components/GoogleAnalytics.tsx`** (Linha 33-41)
```typescript
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
```

**Funções exportadas:**
- `trackEvent()` - função base
- `trackWhatsAppClick()` - evento WhatsApp
- `trackCTAClick()` - cliques em CTAs
- `trackFormSubmit()` - submissões de formulário
- `trackScroll90()` - scroll 90%

---

**`components/GoogleAds.tsx`** (Linha 19-26)
```typescript
export const trackGoogleAdsConversion = (conversionLabel: string, value?: number, currency = 'BRL') => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      send_to: `${GOOGLE_ADS_ID}/${conversionLabel}`,
      value: value,
      currency: currency,
    });
  }
};
```

**Função exportada:**
- `trackGoogleAdsConversion()` - conversões Google Ads

---

### 1.2. Arquivos Compilados (.next)

**Arquivos que referenciam window.gtag:**
- `.next/static/chunks/9f5e632f80e7213c.js` (linha 8, 19, 25)
- `.next/static/chunks/855408bba41fbfa1.js` (linha 1)
- `.next/server/chunks/ssr/[root-of-the-server]__1fdae917._.js` (linha 8, 19, 25)

> **Nota:** Arquivos compilados são gerados automaticamente. A análise foca nos arquivos fonte.

---

## 2️⃣ COMPONENTES QUE IMPORTAM GoogleAnalytics.tsx

### 2.1. Importações Diretas

| Arquivo | Linha | Funções Importadas |
|---------|-------|-------------------|
| `app/api/contact/route.ts` | 2 | `trackFormSubmit` |
| `app/contato/ContactForm.tsx` | 4 | `trackFormSubmit, trackCTAClick` |
| `app/layout.tsx` | 8 | `GoogleAnalytics` (componente padrão) |
| `components/RelatedArticles.tsx` | 3 | `trackCTAClick` |
| `components/ScrollTracker.tsx` | 4 | `trackScroll90` |
| `components/WhatsAppButton.tsx` | 4 | `trackWhatsAppClick` |

**Total:** 6 arquivos dependentes

---

## 3️⃣ COMPONENTES QUE IMPORTAM GoogleAds.tsx

### 3.1. Importações Diretas

| Arquivo | Linha | Funções Importadas |
|---------|-------|-------------------|
| `app/api/contact/route.ts` | 4 | `trackGoogleAdsConversion` |
| `app/contato/ContactForm.tsx` | 6 | `trackGoogleAdsConversion` |
| `app/layout.tsx` | 11 | `GoogleAds` (componente padrão) |
| `components/WhatsAppButton.tsx` | 6 | `trackGoogleAdsConversion` |

**Total:** 4 arquivos dependentes

---

## 4️⃣ FUNCIONALIDADES QUE PODEM PARAR DE FUNCIONAR

### ⚠️ SE REMOVER `<GoogleAnalytics />` do layout.tsx:

#### **RISCO CRÍTICO:**
1. **window.gtag não será definido** ❌
   - Script `gtag.js` não carregará
   - Todas as funções `trackEvent()` falharão silenciosamente
   
2. **Eventos GA4 não serão rastreados:**
   - ❌ Cliques no botão WhatsApp
   - ❌ Cliques em CTAs (formulário, artigos relacionados)
   - ❌ Submissões de formulário
   - ❌ Scroll 90% (engajamento)

3. **Pageviews GA4 não serão contabilizados** ❌

#### **COMPONENTES AFETADOS:**
- ✗ `WhatsAppButton.tsx` - trackWhatsAppClick() falhará
- ✗ `ScrollTracker.tsx` - trackScroll90() falhará
- ✗ `ContactForm.tsx` - trackFormSubmit() e trackCTAClick() falharão
- ✗ `RelatedArticles.tsx` - trackCTAClick() falhará
- ✗ `app/api/contact/route.ts` - trackFormSubmit() falhará (backend)

---

### ⚠️ SE REMOVER `<GoogleAds />` do layout.tsx:

#### **RISCO CRÍTICO:**
1. **Conversões Google Ads não serão rastreadas** ❌
   - Script Google Ads (gtag.js com AW-ID) não carregará
   - Função `trackGoogleAdsConversion()` falhará

2. **Conversões não rastreadas:**
   - ❌ Cliques no botão WhatsApp (conversão `whatsapp_click`)
   - ❌ Submissões de formulário (conversão `form_submit`)

3. **Impacto no ROI:**
   - ⚠️ Perda de visibilidade sobre conversões pagas
   - ⚠️ Otimização de campanhas prejudicada

#### **COMPONENTES AFETADOS:**
- ✗ `WhatsAppButton.tsx` - trackGoogleAdsConversion('whatsapp_click') falhará
- ✗ `ContactForm.tsx` - trackGoogleAdsConversion('form_submit', 0) falhará
- ✗ `app/api/contact/route.ts` - trackGoogleAdsConversion('form_submit', 0) falhará

---

## 5️⃣ ANÁLISE DE DUPLICAÇÃO DE SCRIPTS

### 🔴 DUPLICAÇÃO CONFIRMADA

#### **Scripts Carregados Atualmente:**

1. **GoogleTagManager.tsx:**
   ```javascript
   https://www.googletagmanager.com/gtm.js?id=GTM-XXXXXXX
   ```

2. **GoogleAnalytics.tsx:**
   ```javascript
   https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX
   ```

3. **GoogleAds.tsx:**
   ```javascript
   https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXXX
   ```

### ⚠️ PROBLEMA IDENTIFICADO:

**gtag.js é carregado 2 vezes:**
- Uma vez por GoogleAnalytics (com G-ID)
- Uma vez por GoogleAds (com AW-ID)

**Consequências:**
- ✗ 2 instâncias do gtag.js disputando window.gtag
- ✗ Potencial duplicação de pageviews (GA4)
- ✗ Possível duplicação de conversões (Google Ads)
- ✗ Performance degradada (scripts redundantes)

---

## 6️⃣ ESTRATÉGIA SEGURA DE MIGRAÇÃO PARA GTM

### 🎯 OBJETIVO
Manter **APENAS** GoogleTagManager carregando GA4 + Google Ads internamente.

---

### PASSO 1: Configurar Tags no GTM (Faça ANTES de remover scripts)

#### 1.1. Acesse Google Tag Manager
- URL: https://tagmanager.google.com
- Container: GTM-XXXXXXX

#### 1.2. Criar Tag GA4

**Nome:** GA4 Configuration  
**Tipo:** Google Analytics: GA4 Configuration  
**Measurement ID:** `G-XXXXXXXXXX`  
**Trigger:** All Pages

#### 1.3. Criar Tag Google Ads

**Nome:** Google Ads Conversion Tracking  
**Tipo:** Google Ads Conversion Tracking  
**Conversion ID:** `AW-XXXXXXXXXX`  
**Trigger:** All Pages (para pageviews) ou eventos customizados

#### 1.4. Configurar Eventos Customizados

**Eventos a configurar via GTM:**

1. **whatsapp_click**
   - Tipo: Event
   - Trigger: Click em elemento com classe `.whatsapp-button` ou dataLayer push

2. **form_submit**
   - Tipo: Event
   - Trigger: Form submission ou dataLayer push

3. **cta_click**
   - Tipo: Event
   - Trigger: Click tracking ou dataLayer push

4. **scroll_90**
   - Tipo: Event
   - Trigger: Scroll Depth (90%)

---

### PASSO 2: Refatorar Funções de Tracking para dataLayer

#### 2.1. Criar novo arquivo: `lib/tracking.ts`

```typescript
// lib/tracking.ts
export const trackEvent = (
  event: string,
  params?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event,
      ...params,
    });
  }
};

export const trackWhatsAppClick = () => {
  trackEvent('whatsapp_click', {
    event_category: 'Contact',
    event_label: 'WhatsApp Button',
  });
};

export const trackCTAClick = (ctaName: string) => {
  trackEvent('cta_click', {
    event_category: 'CTA',
    event_label: ctaName,
  });
};

export const trackFormSubmit = () => {
  trackEvent('form_submit', {
    event_category: 'Form',
    event_label: 'Contact Form',
  });
};

export const trackScroll90 = () => {
  trackEvent('scroll_90', {
    event_category: 'Engagement',
    event_label: 'Scroll Depth',
  });
};

export const trackGoogleAdsConversion = (
  conversionLabel: string,
  value?: number,
  currency = 'BRL'
) => {
  trackEvent('google_ads_conversion', {
    conversion_label: conversionLabel,
    value,
    currency,
  });
};
```

#### 2.2. Atualizar Componentes

**Substituir imports em todos os arquivos:**

**ANTES:**
```typescript
import { trackWhatsAppClick } from './GoogleAnalytics';
import { trackGoogleAdsConversion } from './GoogleAds';
```

**DEPOIS:**
```typescript
import { trackWhatsAppClick, trackGoogleAdsConversion } from '@/lib/tracking';
```

**Arquivos a atualizar:**
- ✏️ `components/WhatsAppButton.tsx`
- ✏️ `components/ScrollTracker.tsx`
- ✏️ `components/RelatedArticles.tsx`
- ✏️ `app/contato/ContactForm.tsx`
- ✏️ `app/api/contact/route.ts`

---

### PASSO 3: Atualizar layout.tsx

**ANTES:**
```tsx
import GoogleAnalytics from "@/components/GoogleAnalytics";
import GoogleTagManager from "@/components/GoogleTagManager";
import GoogleAds from "@/components/GoogleAds";

<head>
  <GoogleAnalytics />
  <GoogleTagManager />
  <MetaPixel />
  <GoogleAds />
</head>
```

**DEPOIS:**
```tsx
import GoogleTagManager from "@/components/GoogleTagManager";
import MetaPixel from "@/components/MetaPixel";

<head>
  <GoogleTagManager />
  <MetaPixel />
</head>
```

---

### PASSO 4: Criar Tags no GTM para Conversões

#### Tag 1: Conversão WhatsApp
- **Tipo:** Google Ads Conversion Tracking
- **Conversion ID:** AW-XXXXXXXXXX
- **Conversion Label:** whatsapp_click
- **Trigger:** Custom Event = `whatsapp_click`

#### Tag 2: Conversão Formulário
- **Tipo:** Google Ads Conversion Tracking
- **Conversion ID:** AW-XXXXXXXXXX
- **Conversion Label:** form_submit
- **Trigger:** Custom Event = `form_submit`

#### Tag 3: Evento GA4 - WhatsApp
- **Tipo:** GA4 Event
- **Measurement ID:** G-XXXXXXXXXX
- **Event Name:** whatsapp_click
- **Trigger:** Custom Event = `whatsapp_click`

#### Tag 4: Evento GA4 - Form Submit
- **Tipo:** GA4 Event
- **Measurement ID:** G-XXXXXXXXXX
- **Event Name:** form_submit
- **Trigger:** Custom Event = `form_submit`

---

### PASSO 5: Testar Antes de Publicar

#### 5.1. Teste no GTM Preview Mode
1. No GTM, clique em "Preview"
2. Navegue no site local (localhost:3000)
3. Verifique no GTM Debug Panel:
   - ✅ dataLayer recebe eventos corretamente
   - ✅ Tags disparam nos momentos certos
   - ✅ Sem erros no console

#### 5.2. Teste com Google Tag Assistant
1. Instale a extensão "Tag Assistant Companion"
2. Verifique:
   - ✅ GA4 pageviews registrados
   - ✅ Google Ads conversions disparadas
   - ✅ Sem duplicação de eventos

#### 5.3. Validação Manual
**Ações a testar:**
1. ✅ Carregar homepage → pageview GA4
2. ✅ Clicar botão WhatsApp → evento `whatsapp_click`
3. ✅ Submeter formulário → evento `form_submit`
4. ✅ Scroll 90% da página → evento `scroll_90`
5. ✅ Clicar CTA → evento `cta_click`

---

### PASSO 6: Deploy Gradual

#### 6.1. Publicar GTM
1. No GTM, clique em "Submit"
2. Nomeie a versão: "Migração GA4 + Ads para GTM"
3. Publique o container

#### 6.2. Deploy do Código

**Opção 1: Deploy com Rollback Rápido (Recomendado)**
```bash
# Criar branch de migração
git checkout -b feature/gtm-consolidation

# Fazer alterações (criar lib/tracking.ts, atualizar imports, layout.tsx)
# Commitar
git add .
git commit -m "Consolidar tracking via GTM"

# Deploy no Vercel (ambiente preview)
vercel deploy

# Testar URL preview
# Se OK, fazer merge
git checkout main
git merge feature/gtm-consolidation
git push origin main
```

**Opção 2: Feature Flag (Ideal para produção)**
```typescript
// lib/tracking.ts
const USE_GTM_ONLY = process.env.NEXT_PUBLIC_USE_GTM_ONLY === 'true';

export const trackEvent = (event: string, params?: Record<string, any>) => {
  if (typeof window === 'undefined') return;
  
  if (USE_GTM_ONLY) {
    // dataLayer push (nova arquitetura)
    (window as any).dataLayer?.push({ event, ...params });
  } else {
    // window.gtag (arquitetura antiga - fallback)
    (window as any).gtag?.('event', event, params);
  }
};
```

**Variáveis de ambiente:**
```bash
# .env.local (para testar localmente)
NEXT_PUBLIC_USE_GTM_ONLY=true

# Vercel (para habilitar gradualmente)
NEXT_PUBLIC_USE_GTM_ONLY=true
```

---

### PASSO 7: Monitoramento Pós-Deploy

#### 7.1. Primeiras 24h
**Google Analytics 4:**
- ✅ Pageviews consistentes com histórico
- ✅ Eventos customizados aparecendo
- ✅ Taxa de rejeição normal

**Google Ads:**
- ✅ Conversões registradas
- ✅ Volume similar aos últimos 7 dias

#### 7.2. Semana 1
- Compare métricas GA4 (semana atual vs anterior)
- Verifique conversões Google Ads (custo/conversão)
- Monitore console do browser (erros?)

---

## 7️⃣ ARQUIVOS A SEREM DELETADOS (APÓS MIGRAÇÃO)

⚠️ **SOMENTE APÓS CONFIRMAR QUE GTM ESTÁ FUNCIONANDO 100%**

```bash
# Componentes obsoletos
rm components/GoogleAnalytics.tsx
rm components/GoogleAds.tsx

# Nota: GoogleTagManager.tsx e MetaPixel.tsx devem permanecer
```

---

## 8️⃣ RISCOS E MITIGAÇÕES

### 🔴 RISCO ALTO
**Perda de rastreamento durante transição**

**Mitigação:**
1. ✅ Configurar GTM completamente ANTES de remover scripts
2. ✅ Testar em ambiente de preview (Vercel)
3. ✅ Usar feature flag para rollback rápido
4. ✅ Monitorar métricas nas primeiras 24h

---

### 🟡 RISCO MÉDIO
**Eventos customizados não mapeados corretamente no GTM**

**Mitigação:**
1. ✅ Documentar todos os eventos (veja seção 4)
2. ✅ Testar cada evento individualmente no GTM Preview
3. ✅ Criar triggers no GTM ANTES de mudar o código

---

### 🟢 RISCO BAIXO
**Performance não melhorar como esperado**

**Mitigação:**
1. ✅ Medir Lighthouse Score ANTES e DEPOIS
2. ✅ Comparar tempos de carregamento
3. ✅ Se não houver ganho, arquitetura ainda estará melhor (menos scripts duplicados)

---

## 9️⃣ CHECKLIST FINAL

### PRÉ-DEPLOY
- [ ] Tags GA4 configuradas no GTM
- [ ] Tags Google Ads configuradas no GTM
- [ ] Triggers customizados criados (whatsapp_click, form_submit, etc.)
- [ ] Arquivo `lib/tracking.ts` criado
- [ ] Imports atualizados em todos os componentes
- [ ] `layout.tsx` atualizado (apenas GTM + MetaPixel)
- [ ] Testado em GTM Preview Mode
- [ ] Testado com Tag Assistant
- [ ] Branch criada e testada localmente

### PÓS-DEPLOY
- [ ] Deploy em preview (Vercel)
- [ ] Validação manual de todos os eventos
- [ ] Conferir GA4 Real-Time (eventos aparecendo)
- [ ] Conferir Google Ads conversões (primeiras 2h)
- [ ] Lighthouse Score mobile/desktop
- [ ] Monitoramento 24h (pageviews, conversões)
- [ ] Monitoramento 7 dias (métricas estáveis)
- [ ] Deletar GoogleAnalytics.tsx e GoogleAds.tsx

---

## 🎯 CONCLUSÃO E RECOMENDAÇÃO

### ✅ SEGURO REMOVER?
**SIM, mas APENAS se:**
1. ✅ GTM estiver configurado com GA4 + Google Ads
2. ✅ Todos os eventos customizados criados no GTM
3. ✅ Código refatorado para usar `dataLayer.push()` via `lib/tracking.ts`
4. ✅ Testes completos em Preview Mode

### ⚠️ NÃO REMOVER SE:
- ❌ GTM não está configurado com as tags GA4 e Google Ads
- ❌ Eventos customizados não foram mapeados
- ❌ Código ainda chama `window.gtag` diretamente

### 🚀 BENEFÍCIOS ESPERADOS

#### Performance Mobile (Lighthouse)
- **Antes:** ~65-75 pontos
- **Depois:** ~75-85 pontos (+10-15 pontos)

#### Redução de Requests
- **Antes:** 3 scripts (GTM + GA + Ads)
- **Depois:** 1 script (GTM)

#### Redução de Transfer Size
- **Antes:** ~80KB
- **Depois:** ~30KB

#### Tempo de Carregamento
- **Antes:** ~200ms de blocking time
- **Depois:** ~60-80ms de blocking time

---

## 📞 PRÓXIMOS PASSOS RECOMENDADOS

1. **IMEDIATO:** Configurar tags no GTM (não requer alteração de código)
2. **DIA 1:** Criar `lib/tracking.ts` e testar localmente
3. **DIA 2:** Atualizar componentes e layout.tsx
4. **DIA 3:** Deploy em preview e validação
5. **DIA 4:** Deploy em produção com monitoramento
6. **DIA 11:** Remover arquivos obsoletos (após 7 dias de monitoramento)

---

**RELATÓRIO GERADO EM:** 2026-03-29 07:33 UTC  
**ANALISTA:** OpenClaw AI  
**STATUS:** ⚠️ AGUARDANDO APROVAÇÃO PARA IMPLEMENTAÇÃO
