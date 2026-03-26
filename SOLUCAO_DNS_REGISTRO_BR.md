# 🔧 SOLUÇÃO: "PESQUISA RECUSADA" NO REGISTRO.BR

## ⚠️ PROBLEMA

Você está recebendo erro **"Pesquisa Recusada"** ao tentar configurar o DNS da Vercel no Registro.br.

---

## ✅ SOLUÇÃO PASSO A PASSO

### PASSO 1: Configurar Domínio na Vercel PRIMEIRO (OBRIGATÓRIO!)

**IMPORTANTE**: Você DEVE configurar o domínio na Vercel ANTES de configurar no Registro.br!

1. **Acesse**: https://vercel.com/gustavos-projects-b239976c/cobersystem
2. **Vá em**: **Settings** > **Domains**
3. **Clique em**: **Add Domain**
4. **Digite**: `coberturapolicarbonato.com.br`
5. **Clique em**: **Add**
6. **Aguarde**: A Vercel vai mostrar as instruções de DNS

**O que a Vercel vai mostrar:**
- Tipo de registro (geralmente `CNAME` para domínio principal)
- Nome do registro (geralmente `@`)
- Valor do registro (ex: `cname.vercel-dns.com`)

**⚠️ ANOTE ESSES VALORES!** Você vai precisar deles no Registro.br.

---

### PASSO 2: Configurar DNS no Registro.br

#### 2.1 Acessar o Registro.br

1. **Acesse**: https://registro.br
2. **Faça login** com seu CPF/CNPJ e senha
3. **Vá em**: **Meus Domínios**
4. **Clique no domínio**: `coberturapolicarbonato.com.br`
5. **Clique em**: **DNS** ou **Zona DNS**

#### 2.2 Adicionar Registro CNAME (Método Correto)

**Para domínio principal (`coberturapolicarbonato.com.br`):**

1. **Tipo**: Selecione `CNAME`
2. **Nome**: **DEIXE O CAMPO VAZIO** (ou digite `@`)
   - ⚠️ **NÃO** coloque o domínio completo!
   - ⚠️ **NÃO** coloque `coberturapolicarbonato.com.br`!
   - ✅ Deixe **VAZIO** ou digite apenas `@`
3. **Valor**: Cole o valor EXATO da Vercel
   - Exemplo: `cname.vercel-dns.com`
   - ⚠️ **NÃO** adicione `http://` ou `https://`
   - ⚠️ **NÃO** adicione barras `/` no final
4. **TTL**: Deixe padrão (3600)
5. **Clique em**: **Adicionar** ou **Salvar**

---

## 🚨 ERROS COMUNS QUE CAUSAM "PESQUISA RECUSADA"

### ❌ Erro 1: Nome do Registro Incorreto

**ERRADO:**
- Nome: `coberturapolicarbonato.com.br` ❌
- Nome: `@.coberturapolicarbonato.com.br` ❌

**CORRETO:**
- Nome: **VAZIO** (deixe em branco) ✅
- Nome: `@` ✅

### ❌ Erro 2: Valor com Formatação Errada

**ERRADO:**
- Valor: `https://cname.vercel-dns.com` ❌
- Valor: `cname.vercel-dns.com/` ❌
- Valor: `http://cname.vercel-dns.com` ❌

**CORRETO:**
- Valor: `cname.vercel-dns.com` ✅ (sem http, sem https, sem barra)

### ❌ Erro 3: Tipo de Registro Errado

**ERRADO:**
- Usar `A` quando a Vercel pede `CNAME` ❌
- Usar `CNAME` quando a Vercel pede `A` ❌

**CORRETO:**
- Use o tipo EXATO que a Vercel forneceu ✅

### ❌ Erro 4: Configurar no Registro.br Antes da Vercel

**ERRADO:**
- Configurar DNS no Registro.br primeiro ❌
- Depois tentar adicionar na Vercel ❌

**CORRETO:**
- Adicionar domínio na Vercel PRIMEIRO ✅
- Depois configurar DNS no Registro.br ✅

---

## 📋 EXEMPLO PRÁTICO CORRETO

### Na Vercel (Settings > Domains):
```
Domínio: coberturapolicarbonato.com.br
Tipo: CNAME
Nome: @
Valor: cname.vercel-dns.com
```

### No Registro.br (Zona DNS):
```
Tipo: CNAME
Nome: [DEIXE VAZIO] ou @
Valor: cname.vercel-dns.com
TTL: 3600
```

---

## ✅ CHECKLIST ANTES DE SALVAR

Antes de clicar em "Adicionar" no Registro.br, verifique:

- [ ] Domínio já está configurado na Vercel
- [ ] Tipo de registro está correto (CNAME ou A)
- [ ] Nome está **VAZIO** (ou `@`) para domínio principal
- [ ] Valor foi copiado EXATAMENTE da Vercel
- [ ] Valor NÃO tem `http://` ou `https://`
- [ ] Valor NÃO tem barra `/` no final
- [ ] TTL está configurado (3600 é padrão)

---

## 🔍 VERIFICAR SE ESTÁ CORRETO

### 1. Verificar na Vercel
1. Acesse: https://vercel.com/gustavos-projects-b239976c/cobersystem
2. Vá em: **Settings** > **Domains**
3. Deve aparecer: ✅ **Valid Configuration**
4. Se aparecer erro, veja a mensagem e corrija

### 2. Verificar DNS Online
1. Acesse: https://dnschecker.org
2. Digite: `coberturapolicarbonato.com.br`
3. Selecione: `CNAME`
4. Verifique se aparece o valor da Vercel

### 3. Aguardar Propagação
- **Tempo**: 1-24 horas (geralmente 1-2 horas)
- **Máximo**: 48 horas
- Use https://dnschecker.org para verificar

---

## 🚨 SE AINDA DER ERRO

### Solução 1: Remover e Adicionar Novamente

1. No Registro.br, **remova** o registro DNS antigo
2. Na Vercel, **remova** o domínio
3. Na Vercel, **adicione** o domínio novamente
4. Copie os novos valores
5. No Registro.br, **adicione** o registro novamente

### Solução 2: Verificar se Domínio Está Ativo

1. No Registro.br, verifique se o domínio está **ativo**
2. Verifique se não está **suspenso** ou **bloqueado**
3. Verifique se o pagamento está em dia

### Solução 3: Usar Servidores DNS da Vercel (Alternativa)

Se o método CNAME não funcionar, você pode usar os servidores DNS da Vercel:

1. Na Vercel, vá em **Settings** > **Domains**
2. Clique no domínio
3. Veja a opção **Nameservers** (se disponível)
4. No Registro.br, vá em **Servidores DNS**
5. Altere para os servidores da Vercel

---

## 📞 SUPORTE

### Se ainda não funcionar:

1. **Vercel Support**: https://vercel.com/support
2. **Registro.br Atendimento**: https://registro.br/atendimento
3. **Verifique os logs**: Na Vercel, veja se há mensagens de erro específicas

---

## 🎯 RESUMO RÁPIDO

1. ✅ **PRIMEIRO**: Adicione domínio na Vercel
2. ✅ **SEGUNDO**: Copie os valores EXATOS da Vercel
3. ✅ **TERCEIRO**: No Registro.br:
   - Tipo: CNAME
   - Nome: **VAZIO** (ou `@`)
   - Valor: Cole EXATO da Vercel
4. ✅ **QUARTO**: Aguarde propagação (1-24h)
5. ✅ **QUINTO**: Verifique se está funcionando

---

**Última atualização**: 14/11/2024






