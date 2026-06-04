# 🔧 SOLUÇÃO: Erro "Could not resolve hostname"

## ❌ PROBLEMA:

```
ssh: Could not resolve hostname srv1333138: Este host não é conhecido.
```

O Windows não conseguiu encontrar o servidor pelo nome `srv1333138`.

---

## ✅ SOLUÇÕES:

### SOLUÇÃO 1: Usar IP ao invés do hostname

Se você souber o IP do servidor, use:

```powershell
scp D:\cobersystem\projeto-cobersystem.zip root@[IP_DO_SERVIDOR]:/root/
```

**Exemplo:**
```powershell
scp D:\cobersystem\projeto-cobersystem.zip root@192.168.1.100:/root/
```

---

### SOLUÇÃO 2: Usar domínio completo

Se o servidor tem um domínio, use:

```powershell
scp D:\cobersystem\projeto-cobersystem.zip root@srv1333138.exemplo.com:/root/
```

---

### SOLUÇÃO 3: Verificar informações do servidor

Você precisa de:
- **IP do servidor** OU
- **Domínio completo** (ex: `srv1333138.hosting.com`)

**Onde encontrar:**
- Painel de controle do seu provedor de hospedagem
- Email de boas-vindas do servidor
- Documentação do servidor

---

### SOLUÇÃO 4: Testar conexão primeiro

Antes de enviar o arquivo, teste a conexão:

```powershell
# Testar com hostname
ping srv1333138

# Ou testar com IP
ping [IP_DO_SERVIDOR]
```

Se o ping funcionar, o SCP também funcionará.

---

## 📋 PRÓXIMOS PASSOS:

1. **Descubra o IP ou domínio completo do servidor**
2. **Use no comando SCP:**

```powershell
# Com IP:
scp D:\cobersystem\projeto-cobersystem.zip root@[IP]:/root/

# Com domínio completo:
scp D:\cobersystem\projeto-cobersystem.zip root@srv1333138.[dominio.com]:/root/
```

---

## 💡 DICA: WinSCP (Mais Fácil)

Se tiver dificuldade, use WinSCP:
1. Baixe: https://winscp.net/eng/download.php
2. Abra WinSCP
3. **Host name:** Use o IP ou domínio completo
4. **User name:** root
5. **Password:** sua senha
6. Conecte e arraste o arquivo

---

**Precisa do IP ou domínio completo do servidor para continuar!**
