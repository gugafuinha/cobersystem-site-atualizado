# Script para criar URL pública SEM SENHA usando cloudflared
Write-Host "🔗 Criando URL pública SEM SENHA..." -ForegroundColor Cyan
Write-Host ""

# Verificar se o servidor está rodando
Write-Host "Verificando servidor local..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri http://localhost:3000 -TimeoutSec 2 -UseBasicParsing -ErrorAction Stop
    Write-Host "✅ Servidor rodando em http://localhost:3000" -ForegroundColor Green
} catch {
    Write-Host "❌ Servidor não está rodando!" -ForegroundColor Red
    Write-Host "Iniciando servidor..." -ForegroundColor Yellow
    Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD'; npm run dev"
    Write-Host "Aguarde 10 segundos..." -ForegroundColor Yellow
    Start-Sleep -Seconds 10
}

Write-Host ""
Write-Host "🚀 Iniciando cloudflared (SEM SENHA)..." -ForegroundColor Cyan
Write-Host ""
Write-Host "⚠️  IMPORTANTE:" -ForegroundColor Yellow
Write-Host "   A URL será exibida abaixo em alguns segundos." -ForegroundColor White
Write-Host "   COPIE A URL que começar com 'https://'" -ForegroundColor Green
Write-Host "   Esta URL NÃO pede senha!" -ForegroundColor Green
Write-Host ""
Write-Host "=" * 60 -ForegroundColor Cyan
Write-Host ""

# Iniciar cloudflared
cloudflared tunnel --url http://localhost:3000
