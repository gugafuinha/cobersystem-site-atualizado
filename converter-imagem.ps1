# Script para converter e reparar imagens que não abrem no Windows
# Execute: powershell -ExecutionPolicy Bypass -File converter-imagem.ps1

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  CONVERSOR E REPARADOR DE IMAGENS" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Solicitar caminho do arquivo
$caminhoArquivo = Read-Host "Digite o caminho completo do arquivo (ex: D:\cobersystem\site\HRTT8132.JPG)"

# Verificar se o arquivo existe
if (-not (Test-Path $caminhoArquivo)) {
    Write-Host "ERRO: Arquivo não encontrado!" -ForegroundColor Red
    Write-Host "Caminho digitado: $caminhoArquivo" -ForegroundColor Yellow
    Read-Host "Pressione Enter para sair"
    exit
}

Write-Host "Arquivo encontrado: $caminhoArquivo" -ForegroundColor Green
Write-Host ""

# Obter informações do arquivo
$arquivo = Get-Item $caminhoArquivo
$tamanho = $arquivo.Length
$extensao = $arquivo.Extension

Write-Host "Informações do arquivo:" -ForegroundColor Yellow
Write-Host "  Nome: $($arquivo.Name)"
Write-Host "  Tamanho: $([math]::Round($tamanho/1MB, 2)) MB"
Write-Host "  Extensão: $extensao"
Write-Host ""

# Verificar se o arquivo está vazio ou muito pequeno
if ($tamanho -eq 0) {
    Write-Host "ERRO: Arquivo está vazio (0 bytes) - Arquivo corrompido!" -ForegroundColor Red
    Write-Host "Solução: Baixe o arquivo novamente do celular." -ForegroundColor Yellow
    Read-Host "Pressione Enter para sair"
    exit
}

if ($tamanho -lt 1000) {
    Write-Host "AVISO: Arquivo muito pequeno ($tamanho bytes) - Pode estar corrompido!" -ForegroundColor Yellow
}

# Verificar tipo MIME real do arquivo (primeiros bytes)
$bytes = Get-Content $caminhoArquivo -TotalCount 12 -Encoding Byte -ErrorAction SilentlyContinue
$hex = ($bytes | ForEach-Object { $_.ToString("X2") }) -join " "

Write-Host "Assinatura hexadecimal (tipo real do arquivo):" -ForegroundColor Yellow
Write-Host "  $hex"
Write-Host ""

# Identificar tipo de arquivo pela assinatura
$tipoReal = "Desconhecido"
if ($hex -like "FF D8 FF*") {
    $tipoReal = "JPEG válido"
    Write-Host "✓ Arquivo é um JPEG válido!" -ForegroundColor Green
} elseif ($hex -like "89 50 4E 47*") {
    $tipoReal = "PNG"
    Write-Host "✓ Arquivo é um PNG (mas tem extensão .JPG)" -ForegroundColor Yellow
} elseif ($hex -like "52 49 46 46*") {
    $tipoReal = "WEBP ou outro formato RIFF"
    Write-Host "⚠ Arquivo pode ser WEBP ou outro formato" -ForegroundColor Yellow
} elseif ($hex -like "00 00 00*") {
    Write-Host "⚠ Arquivo pode estar corrompido (começa com zeros)" -ForegroundColor Red
} else {
    Write-Host "⚠ Tipo de arquivo não reconhecido ou corrompido" -ForegroundColor Red
    Write-Host "  Tentando converter mesmo assim..." -ForegroundColor Yellow
}

Write-Host ""

# Perguntar onde salvar o arquivo convertido
$pastaDestino = "D:\cobersystem\public\images\projetos"
if (-not (Test-Path $pastaDestino)) {
    New-Item -ItemType Directory -Path $pastaDestino -Force | Out-Null
    Write-Host "Pasta criada: $pastaDestino" -ForegroundColor Green
}

$nomeNovo = Read-Host "Digite o novo nome do arquivo (sem extensão) [Enter para usar: projeto-$(Get-Date -Format 'yyyy-MM-dd')]"
if ([string]::IsNullOrWhiteSpace($nomeNovo)) {
    $nomeNovo = "projeto-$(Get-Date -Format 'yyyy-MM-dd')"
}

$caminhoDestino = Join-Path $pastaDestino "$nomeNovo.jpg"

Write-Host ""
Write-Host "Tentando converter arquivo..." -ForegroundColor Cyan

# Tentar converter usando .NET (System.Drawing)
$sucesso = $false

try {
    Add-Type -AssemblyName System.Drawing
    
    Write-Host "Tentando método 1: Conversão direta com .NET..." -ForegroundColor Cyan
    
    # Ler a imagem
    $imagem = [System.Drawing.Image]::FromFile($caminhoArquivo)
    
    # Criar bitmap
    $bitmap = New-Object System.Drawing.Bitmap($imagem.Width, $imagem.Height)
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.DrawImage($imagem, 0, 0, $imagem.Width, $imagem.Height)
    
    # Salvar como JPEG
    $encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
    $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 95)
    
    $bitmap.Save($caminhoDestino, $encoder, $encoderParams)
    
    # Limpar recursos
    $graphics.Dispose()
    $bitmap.Dispose()
    $imagem.Dispose()
    
    $sucesso = $true
    
} catch {
    Write-Host "Método 1 falhou: $($_.Exception.Message)" -ForegroundColor Yellow
    Write-Host "Tentando método alternativo..." -ForegroundColor Cyan
    
    # Método alternativo: tentar abrir com Paint e salvar
    try {
        # Verificar se Paint está disponível
        $paintPath = "$env:SystemRoot\System32\mspaint.exe"
        if (Test-Path $paintPath) {
            Write-Host "Tentando método 2: Usar Paint para converter..." -ForegroundColor Cyan
            Write-Host "  (Isso pode abrir o Paint - feche após salvar)" -ForegroundColor Yellow
            
            # Abrir no Paint (método manual)
            Start-Process $paintPath -ArgumentList $caminhoArquivo
            Write-Host ""
            Write-Host "INSTRUÇÕES MANUAIS:" -ForegroundColor Yellow
            Write-Host "  1. No Paint que abriu, clique em Arquivo > Salvar como"
            Write-Host "  2. Escolha formato: JPEG"
            Write-Host "  3. Salve em: $caminhoDestino"
            Write-Host "  4. Feche o Paint"
            Write-Host ""
            Read-Host "Pressione Enter após salvar no Paint"
            
            if (Test-Path $caminhoDestino) {
                $sucesso = $true
            }
        }
    } catch {
        Write-Host "Método 2 também falhou" -ForegroundColor Yellow
    }
}

if ($sucesso) {
    Write-Host ""
    Write-Host "✓✓✓ SUCESSO! Arquivo convertido! ✓✓✓" -ForegroundColor Green
    Write-Host ""
    Write-Host "Arquivo salvo em:" -ForegroundColor Cyan
    Write-Host "  $caminhoDestino" -ForegroundColor White
    Write-Host ""
    Write-Host "Agora você pode:" -ForegroundColor Yellow
    Write-Host "  1. Abrir o arquivo convertido para verificar"
    Write-Host "  2. Usar no site: /images/projetos/$nomeNovo.jpg"
    Write-Host ""
    
    # Perguntar se quer abrir o arquivo
    $abrir = Read-Host "Deseja abrir o arquivo agora? (S/N)"
    if ($abrir -eq "S" -or $abrir -eq "s") {
        Start-Process $caminhoDestino
    }
} else {
    Write-Host ""
    Write-Host "⚠ Não foi possível converter automaticamente" -ForegroundColor Red
    Write-Host ""
    Write-Host "SOLUÇÕES ALTERNATIVAS:" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "1. CONVERTER ONLINE (Mais fácil):" -ForegroundColor Cyan
    Write-Host "   - Acesse: https://convertio.co/pt/jpg-converter/"
    Write-Host "   - Faça upload do arquivo: $caminhoArquivo"
    Write-Host "   - Baixe o arquivo convertido"
    Write-Host "   - Mova para: $caminhoDestino"
    Write-Host ""
    Write-Host "2. TENTAR ABRIR NO NAVEGADOR:" -ForegroundColor Cyan
    Write-Host "   - Arraste o arquivo para o Google Chrome"
    Write-Host "   - Se abrir, tire um print ou salve novamente"
    Write-Host ""
    Write-Host "3. O ARQUIVO PODE ESTAR CORROMPIDO:" -ForegroundColor Cyan
    Write-Host "   - Baixe novamente do celular usando CABO USB"
    Write-Host "   - NÃO use WhatsApp (comprime e pode corromper)"
    Write-Host ""
    
    # Tentar copiar mesmo assim
    try {
        Copy-Item $caminhoArquivo $caminhoDestino -Force
        Write-Host "Arquivo copiado para: $caminhoDestino" -ForegroundColor Green
        Write-Host "Tente abrir este arquivo. Se não funcionar, use as soluções acima." -ForegroundColor Yellow
    } catch {
        Write-Host "Não foi possível copiar o arquivo" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Read-Host "Pressione Enter para sair"

