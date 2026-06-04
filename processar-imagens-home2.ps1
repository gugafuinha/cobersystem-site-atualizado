# Script para processar imagens da pasta Imagens HOME2
# Execute: .\processar-imagens-home2.ps1

Write-Host "=== PROCESSANDO IMAGENS DA SEÇÃO DE PRODUTOS ===" -ForegroundColor Cyan
Write-Host ""

$pastaOrigem = "D:\cobersystem\Imagens HOME2"
$pastaDestino = "D:\cobersystem\public\images\projetos"

if (-not (Test-Path $pastaOrigem)) {
    Write-Host "❌ Pasta Imagens HOME2 não encontrada!" -ForegroundColor Red
    Write-Host "   Crie a pasta e coloque as 3 imagens lá." -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ Pasta encontrada: $pastaOrigem" -ForegroundColor Green
Write-Host ""

# Listar arquivos
$arquivos = Get-ChildItem -Path $pastaOrigem -File
Write-Host "Arquivos encontrados:" -ForegroundColor Cyan
$arquivos | ForEach-Object { Write-Host "  - $($_.Name)" }

Write-Host ""

# Identificar e copiar arquivos baseado nos nomes
$arquivosCopiados = @()

foreach ($arquivo in $arquivos) {
    $nomeArquivo = $arquivo.Name.ToLower()
    $novoNome = $null
    
    # Identificar qual produto baseado no nome
    if ($nomeArquivo -like "*compacto*" -or $nomeArquivo -like "*2mm*") {
        $novoNome = "policarbonato-compacto-2mm-produto.jpg"
        Write-Host "📸 Identificado: Policarbonato Compacto 2mm" -ForegroundColor Green
    }
    elseif ($nomeArquivo -like "*alveolar*") {
        $novoNome = "policarbonato-alveolar-produto.jpg"
        Write-Host "📸 Identificado: Policarbonato Alveolar" -ForegroundColor Green
    }
    elseif ($nomeArquivo -like "*automacao*" -or $nomeArquivo -like "*alexa*" -or $nomeArquivo -like "*sensor*") {
        $novoNome = "automacao-inteligente-produto.jpg"
        Write-Host "📸 Identificado: Automação Inteligente" -ForegroundColor Green
    }
    
    if ($novoNome) {
        $destino = Join-Path $pastaDestino $novoNome
        Copy-Item $arquivo.FullName -Destination $destino -Force
        $arquivosCopiados += @{
            Original = $arquivo.Name
            Novo = $novoNome
            Caminho = $destino
        }
        Write-Host "  ✅ Copiado: $novoNome" -ForegroundColor Green
    } else {
        Write-Host "  ⚠️  Não identificado: $($arquivo.Name)" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "=== RESUMO ===" -ForegroundColor Cyan
Write-Host "Arquivos processados: $($arquivosCopiados.Count)" -ForegroundColor Green

if ($arquivosCopiados.Count -gt 0) {
    Write-Host ""
    Write-Host "Próximo passo: Atualizar código da home com os novos caminhos" -ForegroundColor Yellow
}






