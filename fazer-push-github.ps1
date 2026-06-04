# Script simples para fazer push no GitHub
Write-Host "🚀 Preparando push para GitHub..." -ForegroundColor Cyan
Write-Host ""

$repoName = "cobersystem-site"
$username = "gugafuinha"

Write-Host "📋 Instruções:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Primeiro, crie o repositório no GitHub:" -ForegroundColor White
Write-Host "   Acesse: https://github.com/new" -ForegroundColor Cyan
Write-Host "   Nome: $repoName" -ForegroundColor Cyan
Write-Host "   NÃO marque 'Add a README file'" -ForegroundColor Cyan
Write-Host "   Clique em 'Create repository'" -ForegroundColor Cyan
Write-Host ""

$continuar = Read-Host "Depois de criar o repositório, pressione Enter para continuar..."

Write-Host ""
Write-Host "🔗 Conectando ao repositório..." -ForegroundColor Yellow

# Verificar se já tem remote
$remote = git remote get-url origin 2>$null
if ($remote) {
    Write-Host "⚠️  Remote já existe: $remote" -ForegroundColor Yellow
    git remote remove origin
    Write-Host "✅ Remote antigo removido" -ForegroundColor Green
}

git remote add origin "https://github.com/$username/$repoName.git"

Write-Host ""
Write-Host "📤 Fazendo push..." -ForegroundColor Yellow
Write-Host ""

git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Código enviado com sucesso!" -ForegroundColor Green
    Write-Host ""
    Write-Host "🔗 URL do repositório:" -ForegroundColor Cyan
    Write-Host "https://github.com/$username/$repoName" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "📋 Compartilhe esta URL com o OpenClaw!" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "❌ Erro ao fazer push" -ForegroundColor Red
    Write-Host ""
    Write-Host "Verifique:" -ForegroundColor Yellow
    Write-Host "  - Repositório foi criado no GitHub" -ForegroundColor White
    Write-Host "  - Você está logado no GitHub" -ForegroundColor White
    Write-Host "  - Você tem permissão para fazer push" -ForegroundColor White
    Write-Host ""
    Write-Host "Se der erro de autenticação, você pode:" -ForegroundColor Yellow
    Write-Host "  1. Usar GitHub Desktop" -ForegroundColor White
    Write-Host "  2. Ou criar um Personal Access Token" -ForegroundColor White
}
