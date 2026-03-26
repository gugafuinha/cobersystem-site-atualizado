# Script para instalar GitHub CLI no Windows
Write-Host "🚀 Instalando GitHub CLI..." -ForegroundColor Cyan
Write-Host ""

# Verificar se já está instalado
$ghInstalled = Get-Command gh -ErrorAction SilentlyContinue
if ($ghInstalled) {
    Write-Host "✅ GitHub CLI já está instalado!" -ForegroundColor Green
    gh --version
    exit 0
}

Write-Host "📋 Verificando métodos de instalação..." -ForegroundColor Yellow
Write-Host ""

# Tentar via Winget
$winget = Get-Command winget -ErrorAction SilentlyContinue
if ($winget) {
    Write-Host "✅ Winget encontrado! Instalando via Winget..." -ForegroundColor Green
    Write-Host ""
    winget install --id GitHub.cli --accept-package-agreements --accept-source-agreements
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "✅ GitHub CLI instalado com sucesso!" -ForegroundColor Green
        Write-Host ""
        Write-Host "📋 Próximo passo: Fazer login" -ForegroundColor Yellow
        Write-Host "   Execute: gh auth login" -ForegroundColor White
        exit 0
    }
}

# Tentar via Chocolatey
$choco = Get-Command choco -ErrorAction SilentlyContinue
if ($choco) {
    Write-Host "✅ Chocolatey encontrado! Instalando via Chocolatey..." -ForegroundColor Green
    Write-Host ""
    choco install gh -y
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "✅ GitHub CLI instalado com sucesso!" -ForegroundColor Green
        Write-Host ""
        Write-Host "📋 Próximo passo: Fazer login" -ForegroundColor Yellow
        Write-Host "   Execute: gh auth login" -ForegroundColor White
        exit 0
    }
}

# Se não conseguiu instalar automaticamente
Write-Host ""
Write-Host "❌ Não foi possível instalar automaticamente" -ForegroundColor Red
Write-Host ""
Write-Host "📋 OPÇÕES MANUAIS:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. INSTALAR WINGET (se não tiver):" -ForegroundColor Cyan
Write-Host "   - Windows 10/11 já vem com Winget" -ForegroundColor White
Write-Host "   - Ou baixe: https://aka.ms/getwinget" -ForegroundColor White
Write-Host ""
Write-Host "2. DOWNLOAD MANUAL:" -ForegroundColor Cyan
Write-Host "   - Acesse: https://github.com/cli/cli/releases/latest" -ForegroundColor White
Write-Host "   - Baixe: gh_X.X.X_windows_amd64.msi" -ForegroundColor White
Write-Host "   - Execute o instalador" -ForegroundColor White
Write-Host ""
Write-Host "3. USAR POWERSHELL COMO ADMINISTRADOR:" -ForegroundColor Cyan
Write-Host "   - Pressione Win + X" -ForegroundColor White
Write-Host "   - Escolha 'Terminal (Admin)'" -ForegroundColor White
Write-Host "   - Execute: winget install --id GitHub.cli" -ForegroundColor White
