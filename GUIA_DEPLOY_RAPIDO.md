# 🚀 GUIA RÁPIDO - COLOCAR SITE NO AR

## 📋 OPÇÃO 1: DEPLOY VIA VERCEL CLI (MAIS RÁPIDO - 5 MINUTOS)

### Passo 1: Instalar Vercel CLI
```powershell
npm install -g vercel
```

### Passo 2: Fazer Login na Vercel
```powershell
cd D:\cobersystem
vercel login
```
- Abre o navegador
- Faça login com GitHub ou email

### Passo 3: Deploy!
```powershell
vercel
```
- Pressione Enter para usar configurações padrão
- Aguarde 2-3 minutos
- **Pronto!** Site no ar! 🎉

### Passo 4: Ver o Site
- URL temporária: `cobersystem-xxx.vercel.app`
- Aparece no terminal após deploy

---

## 📋 OPÇÃO 2: DEPLOY VIA INTERFACE WEB (MAIS VISUAL - 10 MINUTOS)

### Passo 1: Preparar GitHub

#### 1.1 Verificar se repositório existe
1. Acesse: https://github.com/gugafuinha/cobersystem
2. Se não existir, crie um novo repositório

#### 1.2 Enviar código para GitHub
```powershell
cd D:\cobersystem
git init
git add .
git commit -m "Site completo Cobersystem - Pronto para deploy"
git branch -M main
git remote add origin https://github.com/gugafuinha/cobersystem.git
git push -u origin main
```

### Passo 2: Deploy no Vercel

#### 2.1 Conectar com GitHub
1. Acesse: https://vercel.com/dashboard
2. Clique em **Add New Project**
3. Clique em **Continue with GitHub**
4. Autorize o Vercel
5. Selecione: **cobersystem**

#### 2.2 Configurar Projeto
- **Project Name**: `cobersystem`
- **Framework**: Next.js (detecta automaticamente)
- Deixe tudo padrão
- Clique em **Deploy**

#### 2.3 Aguardar
- Aguarde 2-3 minutos
- **Pronto!** Site no ar! 🎉

---

## 🌐 CONFIGURAR DOMÍNIO (OPCIONAL - DEPOIS)

### Passo 1: Adicionar Domínio no Vercel
1. No Vercel, vá em **Settings** > **Domains**
2. Clique em **Add Domain**
3. Digite: `coberturapolicarbonato.com.br`
4. Clique em **Add**

### Passo 2: Configurar DNS
1. Vá no seu registrador de domínio
2. Adicione registro DNS conforme instruções do Vercel
3. Aguarde propagação (1-24h)
4. SSL será ativado automaticamente! ✅

---

## ✅ VERIFICAR SE FUNCIONOU

### Checklist:
- [ ] Site acessível na URL do Vercel
- [ ] Todas as páginas carregando
- [ ] Imagens aparecendo
- [ ] Botão WhatsApp funcionando
- [ ] HTTPS ativo (cadeado verde)

---

## 🚨 PROBLEMAS COMUNS

### Erro: "Build Failed"
- Execute: `npm install` localmente primeiro
- Verifique se todas as dependências estão no `package.json`

### Erro: "Module not found"
- Verifique se todos os arquivos foram commitados
- Execute: `git add .` e `git commit` novamente

### Site não carrega
- Aguarde alguns minutos após deploy
- Limpe cache do navegador (Ctrl + F5)

---

## 🎯 RESUMO RÁPIDO (CLI)

1. `npm install -g vercel`
2. `cd D:\cobersystem`
3. `vercel login`
4. `vercel`
5. **Pronto!** 🎉

**Tempo**: 5 minutos  
**Dificuldade**: Fácil  
**Custo**: R$ 0,00 (gratuito)

---

**Última atualização**: 14/11/2024






