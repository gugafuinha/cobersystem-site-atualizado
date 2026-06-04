# 🔍 CONFIGURAR GOOGLE SEARCH CONSOLE - PASSO A PASSO

## ⏱️ Tempo: 5 minutos

### 📋 PASSO 1: Acessar Google Search Console

1. Acesse: https://search.google.com/search-console
2. Faça login com sua conta Google
3. Clique em **"Adicionar propriedade"**

### 📋 PASSO 2: Adicionar Propriedade

1. Escolha: **"Prefixo do domínio"** (recomendado)
2. Digite: `coberturapolicarbonato.com.br`
3. Clique em **"Continuar"**

### 📋 PASSO 3: Verificar Propriedade

1. Escolha o método: **"Tag HTML"**
2. Você verá um código como: `content="abc123xyz456"`
3. **COPIE APENAS O CÓDIGO** (sem as aspas)

**Exemplo:**
```
<meta name="google-site-verification" content="abc123xyz456" />
```
→ Copie apenas: `abc123xyz456`

### 📋 PASSO 4: Adicionar no Código

1. Abra o arquivo: `app/layout.tsx`
2. Encontre a linha 68:
```typescript
<meta name="google-site-verification" content="SUBSTITUIR_PELO_CODIGO_DE_VERIFICACAO" />
```
3. Substitua `SUBSTITUIR_PELO_CODIGO_DE_VERIFICACAO` pelo código copiado
4. Salve o arquivo

### 📋 PASSO 5: Fazer Commit e Push

```bash
cd D:\cobersystem
git add app/layout.tsx
git commit -m "Adicionar código de verificação Google Search Console"
git push origin main
```

### 📋 PASSO 6: Verificar no Google Search Console

1. Volte ao Google Search Console
2. Clique em **"Verificar"**
3. ✅ **Sucesso!** Propriedade verificada!

### 📋 PASSO 7: Enviar Sitemap

1. No Google Search Console, vá em **"Sitemaps"** (menu lateral)
2. Digite: `sitemap.xml`
3. Clique em **"Enviar"**
4. ✅ Sitemap enviado com sucesso!

---

## ✅ PRONTO!

Agora o Google vai:
- ✅ Rastrear seu site
- ✅ Indexar todas as páginas
- ✅ Mostrar seu site nos resultados de busca
- ✅ Enviar relatórios de performance

---

## 🎯 PRÓXIMOS PASSOS

1. ✅ Google Search Console configurado
2. ⏭️ Conectar domínio na Vercel
3. ⏭️ Adicionar FAQs (opcional)

---

**Tempo total:** ~5 minutos
**Dificuldade:** ⭐ Fácil
