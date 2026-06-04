# 🚀 INSTRUÇÕES RÁPIDAS - URL Pública SEM SENHA

## ✅ SOLUÇÃO: Cloudflare Tunnel (NÃO pede senha!)

### Passo 1: Execute este comando no terminal

```bash
cloudflared tunnel --url http://localhost:3000
```

### Passo 2: Aguarde alguns segundos

Você verá algo assim:
```
+--------------------------------------------------------------------------------------------+
|  Your quick Tunnel has been created! Visit it at (it may take some time to be reachable): |
|  https://abc123-def456.trycloudflare.com                                                   |
+--------------------------------------------------------------------------------------------+
```

### Passo 3: Copie a URL

**Copie a URL que começa com `https://`** (ex: `https://abc123-def456.trycloudflare.com`)

**Esta URL NÃO pede senha!** ✅

---

## 🎯 OU USE O ARQUIVO BATCH (Mais Fácil)

**Dê duplo clique em:**
```
criar-url-publica.bat
```

Isso vai executar tudo automaticamente!

---

## 📋 COMPARTILHAR COM OPENCLAW

Envie esta mensagem:

```
Analise este site: https://abc123-def456.trycloudflare.com

É um site Next.js de coberturas em policarbonato retrátil.
Por favor, analise:
- SEO e otimizações
- Performance
- UX/UI
- Estrutura do código
- Sugestões de melhorias
```

**Substitua pela URL que você copiou!**

---

## ⚠️ IMPORTANTE

- **Mantenha o terminal aberto** enquanto o OpenClaw estiver analisando
- Se fechar o terminal, a URL para de funcionar
- Para uma URL permanente, faça deploy na Vercel

---

## 🔄 SE A URL EXPIRAR

Execute novamente:
```bash
cloudflared tunnel --url http://localhost:3000
```

Uma nova URL será gerada.

---

**Pronto! Agora é só executar o comando e copiar a URL!** 🚀
