# 🚀 INSTALAR GITHUB CLI NO WINDOWS - GUIA COMPLETO

## 🎯 OBJETIVO

Instalar GitHub CLI (`gh`) para criar repositório e fazer push automaticamente.

---

## ✅ OPÇÃO 1: Via Winget (Mais Fácil - Windows 10/11)

### Passo 1: Abrir PowerShell como Administrador
1. Pressione `Win + X`
2. Escolha "Windows PowerShell (Admin)" ou "Terminal (Admin)"

### Passo 2: Instalar GitHub CLI
```powershell
winget install --id GitHub.cli
```

### Passo 3: Verificar Instalação
```powershell
gh --version
```

### Passo 4: Fazer Login
```powershell
gh auth login
```

Siga as instruções na tela para fazer login.

---

## ✅ OPÇÃO 2: Via Chocolatey (Se Tiver Instalado)

### Passo 1: Abrir PowerShell como Administrador

### Passo 2: Instalar
```powershell
choco install gh
```

### Passo 3: Verificar e Fazer Login
```powershell
gh --version
gh auth login
```

---

## ✅ OPÇÃO 3: Download Manual

### Passo 1: Baixar Instalador
1. Acesse: https://github.com/cli/cli/releases/latest
2. Baixe: `gh_X.X.X_windows_amd64.msi`
3. Execute o instalador

### Passo 2: Verificar
```powershell
gh --version
```

### Passo 3: Fazer Login
```powershell
gh auth login
```

---

## 🚀 DEPOIS DE INSTALAR - CRIAR REPOSITÓRIO

### Comando Automático:

```powershell
cd D:\cobersystem
gh repo create cobersystem-site --public --source=. --remote=origin --push
```

**Isso vai:**
- ✅ Criar repositório no GitHub
- ✅ Conectar ao remote
- ✅ Fazer push do código
- ✅ Tudo automático!

---

## 📋 PROCESSO COMPLETO

### 1. Instalar GitHub CLI
```powershell
winget install --id GitHub.cli
```

### 2. Fazer Login
```powershell
gh auth login
```
- Escolha: GitHub.com
- Escolha: HTTPS
- Escolha: Login with a web browser
- Siga as instruções

### 3. Criar Repositório e Fazer Push
```powershell
cd D:\cobersystem
gh repo create cobersystem-site --public --source=. --remote=origin --push
```

---

## ✅ VERIFICAÇÃO

Após executar, verifique:

```powershell
gh repo view gugafuinha/cobersystem-site
```

Deve mostrar informações do repositório!

---

## 🔗 RESULTADO

Repositório criado em:
```
https://github.com/gugafuinha/cobersystem-site
```

---

**Siga os passos acima para instalar e usar!** 🚀
