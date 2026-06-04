# Script completo para criar repositório no GitHub
Write-Host "🚀 Criando repositório no GitHub..." -ForegroundColor Cyan
Write-Host ""

# Atualizar PATH
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

# Verificar se gh está disponível
$gh = Get-Command gh -ErrorAction SilentlyContinue
if (-not $gh) {
    Write-Host "❌ GitHub CLI não encontrado no PATH" -ForegroundColor Red
    Write-Host "Tentando usar caminho completo..." -ForegroundColor Yellow
    
    $ghPath = "C:\Program Files\GitHub CLI\gh.exe"
    if (Test-Path $ghPath) {
        $gh = $ghPath
        Write-Host "✅ GitHub CLI encontrado!" -ForegroundColor Green
    } else {
        Write-Host "❌ GitHub CLI não encontrado" -ForegroundColor Red
        Write-Host ""
        Write-Host "📋 SOLUÇÃO:" -ForegroundColor Yellow
        Write-Host "  1. Feche este PowerShell" -ForegroundColor White
        Write-Host "  2. Abra um NOVO PowerShell" -ForegroundColor White
        Write-Host "  3. Execute: gh --version" -ForegroundColor White
        exit 1
    }
}

Write-Host "✅ GitHub CLI encontrado!" -ForegroundColor Green
Write-Host ""

# Verificar se está logado
Write-Host "🔍 Verificando login..." -ForegroundColor Yellow
$authStatus = & $gh auth status 2>&1

if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️  Você precisa fazer login primeiro!" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "📋 Execute:" -ForegroundColor Cyan
    Write-Host "  gh auth login" -ForegroundColor White
    Write-Host ""
    Write-Host "Siga as instruções na tela para fazer login." -ForegroundColor Gray
    Write-Host ""
    
    $fazerLogin = Read-Host "Deseja fazer login agora? (S/N)"
    if ($fazerLogin -eq "S" -or $fazerLogin -eq "s") {
        Write-Host ""
        Write-Host "🚀 Iniciando login..." -ForegroundColor Cyan
        & $gh auth login
    } else {
        Write-Host "❌ Login necessário para continuar" -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "✅ Você já está logado!" -ForegroundColor Green
}

Write-Host ""
Write-Host "📤 Criando repositório e fazendo push..." -ForegroundColor Yellow
Write-Host ""

# Criar repositório e fazer push
cd D:\cobersystem

& $gh repo create cobersystem-site --public --source=. --remote=origin --push

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Repositório criado e código enviado com sucesso!" -ForegroundColor Green
    Write-Host ""
    Write-Host "🔗 URL do repositório:" -ForegroundColor Cyan
    Write-Host "https://github.com/gugafuinha/cobersystem-site" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "📋 Compartilhe esta URL com o OpenClaw!" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "❌ Erro ao criar repositório" -ForegroundColor Red
    Write-Host ""
    Write-Host "Verifique:" -ForegroundColor Yellow
    Write-Host "  - Você está logado (gh auth login)" -ForegroundColor White
    Write-Host "  - Você tem permissão para criar repositórios" -ForegroundColor White
    Write-Host "  - O repositório não existe ainda" -ForegroundColor White
}
