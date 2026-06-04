# 🔧 SOLUÇÃO: GitHub CLI Não Reconhecido

## ❌ PROBLEMA:

```
gh : O termo 'gh' não é reconhecido
```

O GitHub CLI foi instalado, mas o PowerShell não está encontrando.

---

## ✅ SOLUÇÕES:

### SOLUÇÃO 1: Fechar e Abrir Novo PowerShell (Mais Fácil)

1. **Feche o PowerShell atual**
2. **Abra um NOVO PowerShell**
3. **Execute:** `gh --version`

O PATH será atualizado automaticamente no novo terminal.

---

### SOLUÇÃO 2: Recarregar PATH no PowerShell Atual

Execute no PowerShell:

```powershell
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
gh --version
```

---

### SOLUÇÃO 3: Usar Caminho Completo

Se as soluções acima não funcionarem, use o caminho completo:

```powershell
& "C:\Program Files\GitHub CLI\gh.exe" --version
& "C:\Program Files\GitHub CLI\gh.exe" auth login
```

---

### SOLUÇÃO 4: Reiniciar o Computador

Se nada funcionar, reinicie o computador para atualizar o PATH do sistema.

---

## 🚀 DEPOIS DE RESOLVER:

### 1. Fazer Login:
```powershell
gh auth login
```

### 2. Criar Repositório:
```powershell
cd D:\cobersystem
gh repo create cobersystem-site --public --source=. --remote=origin --push
```

---

**Tente a Solução 1 primeiro (fechar e abrir novo PowerShell)!** 🚀
