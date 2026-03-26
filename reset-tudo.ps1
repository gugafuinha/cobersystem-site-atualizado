# Script para resetar tudo (servidor e cloudflared)
Write-Host "🔄 Resetando tudo..." -ForegroundColor Cyan
Write-Host ""

# Parar processos Node
Write-Host "Parando processos Node..." -ForegroundColor Yellow
Get-Process | Where-Object {$_.ProcessName -like "*node*"} | Stop-Process -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 2

# Parar processos cloudflared
Write-Host "Parando processos cloudflared..." -ForegroundColor Yellow
Get-Process | Where-Object {$_.ProcessName -like "*cloudflared*"} | Stop-Process -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 2

# Limpar lock file
Write-Host "Limpando lock file..." -ForegroundColor Yellow
cd D:\cobersystem
Remove-Item ".next\dev\lock" -Force -ErrorAction SilentlyContinue

# Verificar porta 3000
Write-Host "Verificando porta 3000..." -ForegroundColor Yellow
$port3000 = netstat -ano | findstr :3000
if ($port3000) {
    Write-Host "⚠️  Porta 3000 ainda em uso" -ForegroundColor Yellow
} else {
    Write-Host "✅ Porta 3000 livre" -ForegroundColor Green
}

Write-Host ""
Write-Host "✅ Reset completo!" -ForegroundColor Green
Write-Host ""
Write-Host "Agora execute:" -ForegroundColor Cyan
Write-Host "  1. npm run dev (em um terminal)" -ForegroundColor Yellow
Write-Host "  2. cloudflared tunnel --url http://localhost:3000 (em outro terminal)" -ForegroundColor Yellow
Write-Host ""
