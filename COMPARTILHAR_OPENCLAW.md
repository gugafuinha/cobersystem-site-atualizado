# 🔗 Como Mostrar o Site para OpenClaw

## 🎯 SOLUÇÃO RÁPIDA

Para que o OpenClaw possa analisar o site, você precisa de uma **URL pública**. O `http://localhost:3000` não funciona porque só é acessível no seu computador.

---

## ✅ OPÇÃO 1: NGROK (Mais Rápido - 2 minutos)

### Passo 1: Instalar ngrok
**Opção A - Download direto:**
1. Acesse: https://ngrok.com/download
2. Baixe para Windows
3. Extraia o arquivo `ngrok.exe`
4. Coloque em uma pasta (ex: `C:\ngrok\`)

**Opção B - Via Chocolatey (se tiver):**
```powershell
choco install ngrok
```

### Passo 2: Criar URL pública
1. Abra um **novo terminal** (PowerShell)
2. Navegue até a pasta do ngrok (ou adicione ao PATH)
3. Execute:
   ```bash
   ngrok http 3000
   ```

4. Você verá algo assim:
   ```
   Forwarding   https://abc123-def456.ngrok.io -> http://localhost:3000
   ```

5. **Copie a URL:** `https://abc123-def456.ngrok.io`

### Passo 3: Compartilhar com OpenClaw
- Envie a URL do ngrok para o OpenClaw
- Exemplo: "Analise este site: https://abc123-def456.ngrok.io"

⚠️ **Nota:** A URL do ngrok expira após algumas horas. Para uma URL permanente, use a Opção 2.

---

## ✅ OPÇÃO 2: VERCEL (Permanente - 5 minutos)

### Passo 1: Preparar o código
```bash
# Se ainda não tem Git inicializado:
git init
git add .
git commit -m "Site pronto para análise"
```

### Passo 2: Criar repositório no GitHub
1. Acesse: https://github.com/new
2. Nome: `cobersystem`
3. Crie o repositório (pode deixar vazio)

### Passo 3: Enviar código
```bash
git remote add origin https://github.com/SEU_USUARIO/cobersystem.git
git branch -M main
git push -u origin main
```

### Passo 4: Deploy na Vercel
1. Acesse: https://vercel.com
2. Faça login (pode usar GitHub)
3. Clique em "Add New Project"
4. Selecione o repositório `cobersystem`
5. Clique em "Deploy"
6. Aguarde 2-3 minutos

### Passo 5: Obter URL
- Após o deploy, você receberá: `https://cobersystem-xxx.vercel.app`
- Esta URL é **permanente** e pode ser compartilhada!

---

## ✅ OPÇÃO 3: LOCALHOST TUNNEL (Alternativa ao ngrok)

Se não quiser instalar ngrok, pode usar outras ferramentas:

### Cloudflare Tunnel (gratuito)
```bash
# Instalar
npm install -g cloudflared

# Criar túnel
cloudflared tunnel --url http://localhost:3000
```

### LocalTunnel (npm)
```bash
# Instalar
npm install -g localtunnel

# Criar túnel
lt --port 3000
```

---

## 🚀 SOLUÇÃO AUTOMÁTICA (Script)

Execute o script que criei:

```powershell
.\compartilhar-site.ps1
```

Ele vai:
1. Verificar se o servidor está rodando
2. Oferecer opções (ngrok, Vercel, etc.)
3. Ajudar a configurar

---

## 📋 RESUMO RÁPIDO

**Para OpenClaw analisar, você precisa:**

1. ✅ Servidor rodando (já está: http://localhost:3000)
2. ✅ URL pública (escolha uma opção acima)
3. ✅ Compartilhar a URL com OpenClaw

**Recomendação:**
- **Rápido agora:** Use ngrok (2 minutos)
- **Permanente:** Faça deploy na Vercel (5 minutos)

---

## 💡 DICA: Compartilhar Informações do Site

Além da URL, você pode compartilhar:

1. **Resumo do site:** Veja o arquivo `RESUMO_SITE_PARA_ANALISE.md`
2. **Estrutura:** Páginas, componentes, funcionalidades
3. **Objetivo:** O que você quer que seja analisado

**Exemplo de mensagem para OpenClaw:**
```
Analise este site: https://abc123.ngrok.io

É um site Next.js de coberturas em policarbonato.
Quero análise de:
- SEO
- Performance
- UX/UI
- Conversão
```

---

## 🔧 TROUBLESHOOTING

### ngrok não funciona?
- Verifique se o servidor está rodando: http://localhost:3000
- Tente outra porta se 3000 estiver ocupada
- Verifique firewall/antivírus

### Vercel dá erro?
- Verifique se o código está no GitHub
- Confirme que o `package.json` está correto
- Veja os logs de erro na Vercel

### URL não carrega?
- Aguarde alguns segundos (propagação)
- Verifique se o servidor local ainda está rodando
- Tente recarregar a página

---

**Última atualização:** $(Get-Date -Format "dd/MM/yyyy")
