# 🌐 CONFIGURAR DNS NO REGISTRO.BR - GUIA COMPLETO

## ⚠️ PROBLEMA: "Pesquisa Recusada"

Este erro geralmente acontece quando:
- Os registros DNS estão incorretos
- O tipo de registro está errado
- Os valores estão com formatação incorreta
- O domínio não está configurado na Vercel primeiro

---

## 📋 PASSO A PASSO COMPLETO

### PASSO 1: Configurar Domínio na Vercel (PRIMEIRO!)

**IMPORTANTE**: Você precisa configurar o domínio na Vercel ANTES de configurar no Registro.br!

1. **Acesse**: https://vercel.com/gustavos-projects-b239976c/cobersystem
2. **Vá em**: **Settings** > **Domains**
3. **Clique em**: **Add Domain**
4. **Digite**: `coberturapolicarbonato.com.br`
5. **Clique em**: **Add**
6. **Aguarde**: A Vercel vai mostrar as instruções de DNS

**O que a Vercel vai mostrar:**
- Tipo de registro (geralmente `CNAME` ou `A`)
- Nome do registro (geralmente `@` ou vazio)
- Valor do registro (ex: `cname.vercel-dns.com` ou um IP)

---

### PASSO 2: Configurar DNS no Registro.br

#### 2.1 Acessar o Registro.br

1. **Acesse**: https://registro.br
2. **Faça login** com seu CPF/CNPJ e senha
3. **Vá em**: **Meus Domínios**
4. **Clique no domínio**: `coberturapolicarbonato.com.br`
5. **Clique em**: **DNS** ou **Zona DNS**

#### 2.2 Adicionar Registro DNS

**IMPORTANTE**: Use os valores EXATOS que a Vercel forneceu!

##### Opção A: Se a Vercel pedir CNAME

1. **Tipo**: Selecione `CNAME`
2. **Nome**: 
   - Se a Vercel pedir `@`, deixe em **BRANCO** ou digite `@`
   - Se a Vercel pedir `www`, digite `www`
3. **Valor**: Cole o valor EXATO da Vercel (ex: `cname.vercel-dns.com`)
4. **TTL**: Deixe padrão (3600)
5. **Clique em**: **Adicionar**

##### Opção B: Se a Vercel pedir A (IP)

1. **Tipo**: Selecione `A`
2. **Nome**: 
   - Se a Vercel pedir `@`, deixe em **BRANCO** ou digite `@`
   - Se a Vercel pedir `www`, digite `www`
3. **Valor**: Cole o IP EXATO da Vercel (ex: `76.76.21.21`)
4. **TTL**: Deixe padrão (3600)
5. **Clique em**: **Adicionar**

---

## 🔧 SOLUÇÃO PARA "PESQUISA RECUSADA"

### Problema 1: Tipo de Registro Errado

**Sintoma**: Erro "pesquisa recusada"

**Solução**:
- Verifique se você está usando o tipo correto (CNAME ou A)
- A Vercel geralmente pede **CNAME** para domínios principais
- Use **A** apenas se a Vercel especificar um IP

### Problema 2: Nome do Registro Incorreto

**Sintoma**: Erro "pesquisa recusada"

**Solução**:
- Para domínio principal (`@`): Deixe o campo **VAZIO** no Registro.br
- Para subdomínio (`www`): Digite `www`
- **NÃO** coloque o domínio completo no nome!

**Exemplos corretos:**
- Domínio principal: Nome = **VAZIO** ou `@`
- Subdomínio www: Nome = `www`
- Subdomínio blog: Nome = `blog`

**Exemplos INCORRETOS:**
- ❌ Nome = `coberturapolicarbonato.com.br` (ERRADO!)
- ❌ Nome = `@.coberturapolicarbonato.com.br` (ERRADO!)

### Problema 3: Valor Incorreto

**Sintoma**: Erro "pesquisa recusada"

**Solução**:
- Copie o valor EXATO da Vercel
- Não adicione `http://` ou `https://`
- Não adicione barras `/` no final
- Para CNAME: geralmente é algo como `cname.vercel-dns.com`
- Para A: deve ser um IP (ex: `76.76.21.21`)

### Problema 4: Domínio Não Configurado na Vercel

**Sintoma**: Erro "pesquisa recusada"

**Solução**:
- Configure o domínio na Vercel PRIMEIRO
- A Vercel precisa gerar os registros DNS antes
- Só depois configure no Registro.br

---

## 📋 CONFIGURAÇÃO CORRETA (EXEMPLO)

### Na Vercel:
- Domínio: `coberturapolicarbonato.com.br`
- Tipo: `CNAME`
- Nome: `@`
- Valor: `cname.vercel-dns.com`

### No Registro.br:
- **Tipo**: `CNAME`
- **Nome**: **DEIXE VAZIO** (ou `@`)
- **Valor**: `cname.vercel-dns.com`
- **TTL**: `3600` (padrão)

---

## ✅ CHECKLIST DE VERIFICAÇÃO

Antes de salvar no Registro.br, verifique:

- [ ] Domínio configurado na Vercel primeiro
- [ ] Tipo de registro correto (CNAME ou A)
- [ ] Nome do registro correto (vazio para `@`, ou `www` para subdomínio)
- [ ] Valor copiado EXATAMENTE da Vercel
- [ ] Sem `http://` ou `https://` no valor
- [ ] Sem barras `/` no final do valor
- [ ] TTL configurado (3600 é padrão)

---

## 🚨 ERROS COMUNS E SOLUÇÕES

### Erro: "Pesquisa Recusada"

**Causas possíveis:**
1. Tipo de registro errado
2. Nome do registro incorreto
3. Valor com formatação errada
4. Domínio não configurado na Vercel

**Solução:**
1. Verifique os valores na Vercel novamente
2. Certifique-se de que o nome está correto (vazio para `@`)
3. Certifique-se de que o valor está exato
4. Aguarde alguns minutos e tente novamente

### Erro: "Registro já existe"

**Solução:**
- Remova o registro antigo primeiro
- Depois adicione o novo

### Erro: "Domínio não encontrado na Vercel"

**Solução:**
- Configure o domínio na Vercel primeiro
- Aguarde a Vercel gerar os registros DNS
- Depois configure no Registro.br

---

## ⏱️ PROPAGAÇÃO DNS

Após configurar corretamente:

- **Tempo de propagação**: 1-24 horas
- **Geralmente**: 1-2 horas
- **Máximo**: 48 horas

**Como verificar:**
- Use: https://dnschecker.org
- Digite seu domínio
- Verifique se os registros estão propagados

---

## 🔍 VERIFICAR SE ESTÁ FUNCIONANDO

### 1. Verificar na Vercel
- Acesse: https://vercel.com/gustavos-projects-b239976c/cobersystem
- Vá em: **Settings** > **Domains**
- Deve aparecer: ✅ **Valid Configuration**

### 2. Verificar DNS
- Use: https://dnschecker.org
- Digite: `coberturapolicarbonato.com.br`
- Verifique se os registros estão corretos

### 3. Testar o Site
- Acesse: `https://coberturapolicarbonato.com.br`
- Deve carregar o site
- Deve ter HTTPS (cadeado verde)

---

## 📞 SUPORTE

### Se ainda não funcionar:

1. **Verifique os logs na Vercel**
   - Vá em: **Settings** > **Domains**
   - Veja se há erros

2. **Verifique no Registro.br**
   - Confirme que os registros estão salvos
   - Verifique se não há registros conflitantes

3. **Aguarde propagação**
   - DNS pode levar até 24h para propagar
   - Use https://dnschecker.org para verificar

4. **Contate suporte**
   - Vercel: https://vercel.com/support
   - Registro.br: https://registro.br/atendimento

---

## 🎯 RESUMO RÁPIDO

1. ✅ Configure domínio na Vercel PRIMEIRO
2. ✅ Copie os valores EXATOS da Vercel
3. ✅ No Registro.br:
   - Tipo: CNAME (ou A se Vercel pedir)
   - Nome: VAZIO para `@` (ou `www` para subdomínio)
   - Valor: Cole EXATO da Vercel
4. ✅ Aguarde propagação (1-24h)
5. ✅ Verifique se está funcionando

---

**Última atualização**: 14/11/2024






