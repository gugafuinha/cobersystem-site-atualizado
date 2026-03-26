# 📤 Como Enviar Arquivo para Servidor

## 🎯 SEU COMANDO:

```bash
scp D:\cobersystem\projeto-cobersystem.zip root@srv1333138:/root/
```

---

## ✅ SOLUÇÃO 1: Instalar OpenSSH (Recomendado)

### Passo 1: Abrir PowerShell como Administrador
1. Pressione `Win + X`
2. Escolha "Windows PowerShell (Admin)" ou "Terminal (Admin)"

### Passo 2: Instalar OpenSSH
```powershell
Add-WindowsCapability -Online -Name OpenSSH.Client~~~~0.0.1.0
```

### Passo 3: Verificar Instalação
```powershell
scp -V
```

### Passo 4: Executar seu Comando
```powershell
scp D:\cobersystem\projeto-cobersystem.zip root@srv1333138:/root/
```

**Você será solicitado a digitar a senha do servidor.**

---

## ✅ SOLUÇÃO 2: Usar Script Automático

Execute:
```powershell
.\enviar-arquivo-servidor.ps1
```

O script vai:
- ✅ Verificar se SCP está instalado
- ✅ Verificar se o arquivo existe
- ✅ Executar o comando automaticamente
- ✅ Mostrar instruções se necessário

---

## ✅ SOLUÇÃO 3: WinSCP (Interface Gráfica - Mais Fácil)

### Passo 1: Baixar WinSCP
- Download: https://winscp.net/eng/download.php
- Instale o programa

### Passo 2: Conectar ao Servidor
1. Abra WinSCP
2. **Host name:** `srv1333138`
3. **User name:** `root`
4. **Password:** (sua senha)
5. Clique em "Login"

### Passo 3: Enviar Arquivo
1. No lado esquerdo, navegue até: `D:\cobersystem`
2. No lado direito, navegue até: `/root/`
3. Arraste `projeto-cobersystem.zip` da esquerda para a direita
4. Aguarde a transferência

**Muito mais fácil!** ✅

---

## ✅ SOLUÇÃO 4: PowerShell Remoting (Alternativa)

Se o SCP não funcionar, você pode usar:

```powershell
# Conectar via SSH e enviar
ssh root@srv1333138 "mkdir -p /root"
# Depois use WinSCP ou FileZilla
```

---

## 🔧 TROUBLESHOOTING

### Erro: "scp não é reconhecido"
**Solução:** Instale OpenSSH (Solução 1 acima)

### Erro: "Permission denied"
**Solução:** 
- Verifique a senha
- Verifique se o usuário tem permissão em `/root/`

### Erro: "Connection refused"
**Solução:**
- Verifique se o servidor está acessível
- Verifique firewall
- Teste: `ping srv1333138`

### Arquivo muito grande (715 MB)
**Solução:**
- Use conexão estável
- Pode demorar alguns minutos
- WinSCP mostra progresso

---

## 📋 RESUMO RÁPIDO

**Opção Mais Fácil:**
1. Baixe WinSCP
2. Conecte ao servidor
3. Arraste o arquivo

**Opção por Linha de Comando:**
1. Instale OpenSSH
2. Execute: `scp D:\cobersystem\projeto-cobersystem.zip root@srv1333138:/root/`
3. Digite a senha quando solicitado

---

## 🚀 EXECUTAR AGORA

**Execute o script:**
```powershell
.\enviar-arquivo-servidor.ps1
```

Ou **use WinSCP** para interface gráfica (mais fácil)!

---

**Escolha a opção que preferir!** ✅
