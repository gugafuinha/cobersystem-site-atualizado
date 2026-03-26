# Script para enviar arquivo para servidor via SCP
Write-Host "📤 Enviando arquivo para servidor..." -ForegroundColor Cyan
Write-Host ""

$arquivo = "D:\cobersystem\projeto-cobersystem.zip"
$servidor = "root@srv1333138"
$destino = "/root/"

# Verificar se arquivo existe
if (-not (Test-Path $arquivo)) {
    Write-Host "❌ Arquivo não encontrado: $arquivo" -ForegroundColor Red
    exit 1
}

$tamanho = (Get-Item $arquivo).Length / 1MB
Write-Host "📄 Arquivo: $arquivo" -ForegroundColor White
Write-Host "📊 Tamanho: $([math]::Round($tamanho, 2)) MB" -ForegroundColor White
Write-Host "🖥️  Servidor: $servidor" -ForegroundColor White
Write-Host "📁 Destino: $destino" -ForegroundColor White
Write-Host ""

# Verificar se scp está disponível
$scpAvailable = Get-Command scp -ErrorAction SilentlyContinue

if (-not $scpAvailable) {
    Write-Host "❌ SCP não encontrado no sistema" -ForegroundColor Red
    Write-Host ""
    Write-Host "📋 OPÇÕES:" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "1. INSTALAR OPENSSH (Recomendado):" -ForegroundColor Cyan
    Write-Host "   - Abra PowerShell como Administrador" -ForegroundColor White
    Write-Host "   - Execute: Add-WindowsCapability -Online -Name OpenSSH.Client~~~~0.0.1.0" -ForegroundColor Yellow
    Write-Host "   - Reinicie o PowerShell" -ForegroundColor White
    Write-Host ""
    Write-Host "2. USAR WINSCP (Interface Gráfica):" -ForegroundColor Cyan
    Write-Host "   - Download: https://winscp.net/eng/download.php" -ForegroundColor Yellow
    Write-Host "   - Abra WinSCP" -ForegroundColor White
    Write-Host "   - Conecte ao servidor" -ForegroundColor White
    Write-Host "   - Arraste o arquivo para /root/" -ForegroundColor White
    Write-Host ""
    Write-Host "3. USAR POWERSHELL REMOTING:" -ForegroundColor Cyan
    Write-Host "   - Veja script alternativo abaixo" -ForegroundColor White
    Write-Host ""
    exit 1
}

Write-Host "✅ SCP encontrado!" -ForegroundColor Green
Write-Host ""
Write-Host "🚀 Iniciando transferência..." -ForegroundColor Yellow
Write-Host "⚠️  Você será solicitado a digitar a senha do servidor" -ForegroundColor Yellow
Write-Host ""

# Executar SCP
$comando = "scp `"$arquivo`" ${servidor}:${destino}"
Write-Host "Comando: $comando" -ForegroundColor Gray
Write-Host ""

Invoke-Expression $comando

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Arquivo enviado com sucesso!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📋 Verificar no servidor:" -ForegroundColor Cyan
    Write-Host "   ssh $servidor" -ForegroundColor Yellow
    Write-Host "   ls -lh $destino" -ForegroundColor Yellow
} else {
    Write-Host ""
    Write-Host "❌ Erro ao enviar arquivo" -ForegroundColor Red
    Write-Host "Verifique:" -ForegroundColor Yellow
    Write-Host "  - Senha está correta" -ForegroundColor White
    Write-Host "  - Servidor está acessível" -ForegroundColor White
    Write-Host "  - Permissões no servidor" -ForegroundColor White
}
