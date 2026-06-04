# Script para criar URL pública do site para compartilhar com OpenClaw
# Tenta usar localtunnel (npm) ou ngrok

Write-Host "🔗 Criando URL pública para compartilhar com OpenClaw..." -ForegroundColor Cyan
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
    Write-Host "Aguarde 10 segundos para o servidor iniciar..." -ForegroundColor Yellow
    Start-Sleep -Seconds 10
}

Write-Host ""

# Tentar usar localtunnel (via npm)
Write-Host "Tentando usar localtunnel (npm)..." -ForegroundColor Yellow

# Verificar se localtunnel está instalado
$ltInstalled = Get-Command lt -ErrorAction SilentlyContinue
if (-not $ltInstalled) {
    Write-Host "Instalando localtunnel..." -ForegroundColor Yellow
    npm install -g localtunnel
}

if ($LASTEXITCODE -eq 0 -or $ltInstalled) {
    Write-Host ""
    Write-Host "🚀 Iniciando localtunnel..." -ForegroundColor Cyan
    Write-Host "A URL pública será exibida em alguns segundos..." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "⚠️  IMPORTANTE: Copie a URL que aparecer abaixo!" -ForegroundColor Red
    Write-Host "Exemplo: https://abc123.loca.lt" -ForegroundColor Green
    Write-Host ""
    Write-Host "Pressione Ctrl+C para parar o túnel quando terminar." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "=" * 60 -ForegroundColor Cyan
    Write-Host ""
    
    # Iniciar localtunnel
    lt --port 3000
} else {
    Write-Host "❌ Não foi possível instalar localtunnel" -ForegroundColor Red
    Write-Host ""
    Write-Host "📋 ALTERNATIVAS:" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "1. INSTALAR NGROK:" -ForegroundColor White
    Write-Host "   - Download: https://ngrok.com/download" -ForegroundColor Yellow
    Write-Host "   - Extraia e execute: ngrok http 3000" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "2. DEPLOY NA VERCEL (permanente):" -ForegroundColor White
    Write-Host "   - Veja: COMPARTILHAR_OPENCLAW.md" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "3. USAR CLOUDFLARE TUNNEL:" -ForegroundColor White
    Write-Host "   npm install -g cloudflared" -ForegroundColor Yellow
    Write-Host "   cloudflared tunnel --url http://localhost:3000" -ForegroundColor Yellow
}
