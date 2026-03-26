# 🌐 CONECTAR DOMÍNIO NA VERCEL - PASSO A PASSO

## ⏱️ Tempo: 10 minutos

### 📋 PRÉ-REQUISITOS

- ✅ Site deployado na Vercel: https://cobersystem-completo.vercel.app
- ✅ Domínio: `coberturapolicarbonato.com.br`
- ✅ Acesso ao painel do registrador (Registro.br, GoDaddy, etc.)

---

## 🚀 PASSO A PASSO

### 📋 PASSO 1: Acessar Vercel Dashboard

1. Acesse: https://vercel.com/dashboard
2. Faça login
3. Clique no projeto: **cobersystem-completo** (ou o nome do seu projeto)

### 📋 PASSO 2: Adicionar Domínio

1. Vá em **"Settings"** (Configurações)
2. Clique em **"Domains"** (Domínios)
3. Clique em **"Add Domain"** (Adicionar Domínio)
4. Digite: `coberturapolicarbonato.com.br`
5. Clique em **"Add"**

### 📋 PASSO 3: Configurar DNS

A Vercel vai mostrar as instruções de DNS. Você verá algo como:

**Opção 1: CNAME (Recomendado)**
```
Tipo: CNAME
Nome: @
Valor: cname.vercel-dns.com
```

**Opção 2: A Record**
```
Tipo: A
Nome: @
Valor: 76.76.21.21
```

### 📋 PASSO 4: Configurar no Registrador

#### Se usar **Registro.br**:

1. Acesse: https://registro.br
2. Faça login
3. Clique em **"Meus domínios"**
4. Clique em `coberturapolicarbonato.com.br`
5. Vá em **"DNS"** ou **"Zona DNS"**
6. Adicione os registros conforme a Vercel indicou:

**Para CNAME:**
- Tipo: `CNAME`
- Nome: `@` (ou deixe vazio)
- Valor: `cname.vercel-dns.com`
- TTL: `3600` (ou padrão)

**Para A Record:**
- Tipo: `A`
- Nome: `@` (ou deixe vazio)
- Valor: `76.76.21.21` (ou o IP fornecido pela Vercel)
- TTL: `3600` (ou padrão)

7. Clique em **"Salvar"**

#### Se usar **GoDaddy, Namecheap, etc.**:

1. Acesse o painel do seu registrador
2. Vá em **"DNS Management"** ou **"Gerenciar DNS"**
3. Adicione os registros conforme a Vercel indicou
4. Salve as alterações

### 📋 PASSO 5: Aguardar Propagação DNS

- ⏱️ **Tempo médio:** 5-30 minutos
- ⏱️ **Máximo:** 24-48 horas (raro)

**Como verificar:**
1. Acesse: https://dnschecker.org
2. Digite: `coberturapolicarbonato.com.br`
3. Verifique se os registros estão propagados

### 📋 PASSO 6: Verificar na Vercel

1. Volte ao painel da Vercel
2. Vá em **"Settings" > "Domains"**
3. Aguarde até aparecer: ✅ **"Valid Configuration"**
4. O SSL será ativado automaticamente!

### 📋 PASSO 7: Testar o Site

1. Acesse: https://coberturapolicarbonato.com.br
2. Verifique:
   - ✅ Site carrega corretamente
   - ✅ Cadeado verde (HTTPS)
   - ✅ Todas as páginas funcionam
   - ✅ Imagens carregam

---

## ✅ PRONTO!

Agora seu site está:
- ✅ Acessível pelo domínio personalizado
- ✅ Com HTTPS/SSL ativo
- ✅ Otimizado para SEO
- ✅ Pronto para receber visitantes!

---

## 🚨 TROUBLESHOOTING

### Problema: "Invalid Configuration"

**Solução:**
- Verifique se os registros DNS estão corretos
- Aguarde mais tempo para propagação
- Verifique se não há registros conflitantes

### Problema: SSL não ativa

**Solução:**
- Aguarde até 24 horas (normal)
- Verifique se os DNS estão corretos
- Entre em contato com suporte Vercel

### Problema: Site não carrega

**Solução:**
- Verifique se o domínio está apontando para a Vercel
- Limpe o cache do navegador
- Teste em modo anônimo

---

## 🎯 PRÓXIMOS PASSOS

1. ✅ Domínio conectado
2. ✅ Google Search Console configurado
3. ⏭️ Adicionar FAQs (opcional)
4. ⏭️ Monitorar performance no Google Search Console

---

**Tempo total:** ~10 minutos
**Dificuldade:** ⭐⭐ Fácil-Médio
