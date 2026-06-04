# Script para fazer deploy na Vercel
# Execute este script no PowerShell: .\fazer-deploy.ps1

Write-Host "🚀 DEPLOY NA VERCEL - COBERSYSTEM" -ForegroundColor Green
Write-Host ""

# Verificar se está no diretório correto
if (-not (Test-Path "package.json")) {
    Write-Host "❌ Erro: Execute este script na pasta do projeto (D:\cobersystem)" -ForegroundColor Red
    exit 1
}

# Verificar se Vercel CLI está instalado
try {
    $vercelVersion = vercel --version 2>&1
    Write-Host "✅ Vercel CLI encontrado: $vercelVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Erro: Vercel CLI não encontrado" -ForegroundColor Red
    Write-Host "Instale com: npm install -g vercel" -ForegroundColor Yellow
    exit 1
}

Write-Host ""
Write-Host "📋 PASSO 1: Verificando login na Vercel..." -ForegroundColor Cyan

# Verificar se está logado
try {
    vercel whoami 2>&1 | Out-Null
    $loggedIn = $true
    Write-Host "✅ Você já está logado na Vercel!" -ForegroundColor Green
} catch {
    $loggedIn = $false
    Write-Host "⚠️  Você não está logado na Vercel" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "🔐 Fazendo login..." -ForegroundColor Cyan
    Write-Host "   (Isso vai abrir o navegador para você fazer login)" -ForegroundColor Gray
    Write-Host ""
    
    # Fazer login
    vercel login
}

Write-Host ""
Write-Host "📋 PASSO 2: Fazendo build local..." -ForegroundColor Cyan

# Fazer build local para verificar se está tudo OK
try {
    npm run build 2>&1 | Out-Null
    Write-Host "✅ Build local: SUCESSO!" -ForegroundColor Green
} catch {
    Write-Host "❌ Erro no build local. Verifique os erros acima." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "📋 PASSO 3: Fazendo deploy na Vercel..." -ForegroundColor Cyan
Write-Host "   (Isso pode levar 2-3 minutos)" -ForegroundColor Gray
Write-Host ""

# Fazer deploy
vercel --prod

Write-Host ""
Write-Host "✅ Deploy concluído!" -ForegroundColor Green
Write-Host "🎉 Seu site está no ar!" -ForegroundColor Green
Write-Host ""
Write-Host "Acesse: https://vercel.com/gustavos-projects-b239976c/cobersystem" -ForegroundColor Cyan
Write-Host ""






