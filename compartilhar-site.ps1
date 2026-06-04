# Script para compartilhar o site localmente usando ngrok
# Requer: ngrok instalado

Write-Host "🔗 Compartilhando site para análise..." -ForegroundColor Cyan
Write-Host ""

# Verificar se o servidor está rodando
Write-Host "Verificando se o servidor está rodando em http://localhost:3000..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri http://localhost:3000 -TimeoutSec 2 -UseBasicParsing -ErrorAction Stop
    Write-Host "✅ Servidor está rodando!" -ForegroundColor Green
} catch {
    Write-Host "❌ Servidor não está rodando!" -ForegroundColor Red
    Write-Host "Iniciando servidor..." -ForegroundColor Yellow
    Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD'; npm run dev"
    Start-Sleep -Seconds 5
    Write-Host "Aguarde alguns segundos para o servidor iniciar..." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "📋 OPÇÕES PARA COMPARTILHAR:" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. URL LOCAL (apenas no seu computador):" -ForegroundColor White
Write-Host "   http://localhost:3000" -ForegroundColor Green
Write-Host ""
Write-Host "2. NGROK (URL pública temporária):" -ForegroundColor White
Write-Host "   Execute: ngrok http 3000" -ForegroundColor Yellow
Write-Host "   Depois copie a URL gerada (ex: https://xxx.ngrok.io)" -ForegroundColor Yellow
Write-Host ""
Write-Host "3. VERCEL (URL pública permanente - RECOMENDADO):" -ForegroundColor White
Write-Host "   - Faça commit do código no GitHub" -ForegroundColor Yellow
Write-Host "   - Acesse: https://vercel.com" -ForegroundColor Yellow
Write-Host "   - Faça deploy do projeto" -ForegroundColor Yellow
Write-Host "   - Copie a URL gerada" -ForegroundColor Yellow
Write-Host ""

# Verificar se ngrok está instalado
$ngrokInstalled = Get-Command ngrok -ErrorAction SilentlyContinue
if ($ngrokInstalled) {
    Write-Host "✅ ngrok está instalado!" -ForegroundColor Green
    Write-Host ""
    $useNgrok = Read-Host "Deseja iniciar o ngrok agora? (S/N)"
    if ($useNgrok -eq "S" -or $useNgrok -eq "s") {
        Write-Host ""
        Write-Host "🚀 Iniciando ngrok..." -ForegroundColor Cyan
        Write-Host "A URL pública será exibida em alguns segundos..." -ForegroundColor Yellow
        Write-Host ""
        ngrok http 3000
    }
} else {
    Write-Host "⚠️  ngrok não está instalado." -ForegroundColor Yellow
    Write-Host "Para instalar:" -ForegroundColor White
    Write-Host "  1. Download: https://ngrok.com/download" -ForegroundColor Yellow
    Write-Host "  2. Ou via chocolatey: choco install ngrok" -ForegroundColor Yellow
    Write-Host ""
}

Write-Host ""
Write-Host "📄 Documentos criados:" -ForegroundColor Cyan
Write-Host "  - COMO_COMPARTILHAR_SITE_ANALISE.md" -ForegroundColor White
Write-Host "  - RESUMO_SITE_PARA_ANALISE.md" -ForegroundColor White
Write-Host ""
