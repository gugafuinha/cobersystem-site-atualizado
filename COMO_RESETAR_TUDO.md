# 🔄 COMO RESETAR TUDO - GUIA COMPLETO

## 🎯 RESETAR SERVIDOR E CLOUDFLARED

### Opção 1: Reset Rápido (Recomendado)

**No terminal onde está rodando `npm run dev`:**
1. Pressione `Ctrl + C` para parar o servidor
2. Execute novamente: `npm run dev`

**No terminal onde está rodando `cloudflared`:**
1. Pressione `Ctrl + C` para parar
2. Execute novamente: `cloudflared tunnel --url http://localhost:3000`

---

### Opção 2: Reset Completo (Se der problema)

#### Passo 1: Parar Tudo

**Abra um novo terminal (PowerShell) e execute:**

```powershell
# Parar todos os processos Node
Get-Process | Where-Object {$_.ProcessName -like "*node*"} | Stop-Process -Force

# Parar processos do cloudflared
Get-Process | Where-Object {$_.ProcessName -like "*cloudflared*"} | Stop-Process -Force

# Verificar se a porta 3000 está livre
netstat -ano | findstr :3000
```

#### Passo 2: Limpar Lock Files

```powershell
cd D:\cobersystem
Remove-Item ".next\dev\lock" -Force -ErrorAction SilentlyContinue
```

#### Passo 3: Reiniciar Tudo

**Terminal 1 - Servidor:**
```powershell
cd D:\cobersystem
npm run dev
```

**Terminal 2 - Cloudflared:**
```powershell
cd D:\cobersystem
cloudflared tunnel --url http://localhost:3000
```

---

## 🚀 RESET RÁPIDO (Script Automático)

Execute este comando:

```powershell
cd D:\cobersystem; Get-Process | Where-Object {$_.ProcessName -like "*node*" -or $_.ProcessName -like "*cloudflared*"} | Stop-Process -Force; Remove-Item ".next\dev\lock" -Force -ErrorAction SilentlyContinue; Write-Host "✅ Reset completo! Agora execute: npm run dev"
```

---

## 📋 CHECKLIST DE RESET

- [ ] Parar servidor (`Ctrl + C` no terminal do `npm run dev`)
- [ ] Parar cloudflared (`Ctrl + C` no terminal do `cloudflared`)
- [ ] Limpar lock file (se necessário)
- [ ] Reiniciar servidor (`npm run dev`)
- [ ] Reiniciar cloudflared (`cloudflared tunnel --url http://localhost:3000`)

---

## ⚡ RESET ULTRA RÁPIDO

Se você só quer reiniciar o servidor:

1. **No terminal do servidor:** `Ctrl + C`
2. **Execute novamente:** `npm run dev`

Pronto! ✅

---

## 🔧 SE DER ERRO

### Erro: "Port 3000 is in use"

Execute:
```powershell
Get-Process | Where-Object {$_.ProcessName -like "*node*"} | Stop-Process -Force
```

### Erro: "Unable to acquire lock"

Execute:
```powershell
cd D:\cobersystem
Remove-Item ".next\dev\lock" -Force
```

### Erro: "cloudflared não encontrado"

Execute:
```powershell
npm install -g cloudflared
```

---

## 📝 RESUMO RÁPIDO

**Reset Rápido:**
- `Ctrl + C` nos terminais
- Execute `npm run dev` novamente
- Execute `cloudflared tunnel --url http://localhost:3000` novamente

**Reset Completo:**
- Pare todos os processos Node
- Limpe o lock file
- Reinicie tudo

---

**Pronto! Agora você sabe como resetar tudo!** 🔄
