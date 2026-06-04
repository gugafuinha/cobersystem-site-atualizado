# Script para compactar o projeto excluindo node_modules e .next
Write-Host "Compactando projeto Cobersystem..." -ForegroundColor Cyan
Write-Host ""

$projetoPath = "D:\cobersystem"
$outputFile = "D:\cobersystem\projeto-cobersystem.zip"

# Remover arquivo anterior se existir
if (Test-Path $outputFile) {
    Remove-Item $outputFile -Force
    Write-Host "Arquivo anterior removido" -ForegroundColor Yellow
}

Write-Host "Excluindo: node_modules, .next, .git" -ForegroundColor Yellow
Write-Host ""

# Criar lista de arquivos para excluir
$excludeDirs = @("node_modules", ".next", ".git")
$excludeFiles = @("*.tar.gz", "*.zip")

Write-Host "Buscando arquivos..." -ForegroundColor Yellow

# Obter todos os arquivos exceto os excluídos
$files = Get-ChildItem -Path $projetoPath -Recurse -File | 
    Where-Object { 
        $exclude = $false
        $fullPath = $_.FullName
        
        # Verificar se está em pasta excluída
        foreach ($dir in $excludeDirs) {
            if ($fullPath -like "*\$dir\*") {
                $exclude = $true
                break
            }
        }
        
        # Verificar extensão excluída
        if (-not $exclude) {
            foreach ($pattern in $excludeFiles) {
                if ($_.Name -like $pattern) {
                    $exclude = $true
                    break
                }
            }
        }
        
        -not $exclude
    }

$fileCount = $files.Count
Write-Host "Encontrados $fileCount arquivos para compactar" -ForegroundColor Green
Write-Host ""

Write-Host "Criando arquivo compactado..." -ForegroundColor Yellow
Write-Host "Arquivo: $outputFile" -ForegroundColor Gray
Write-Host ""

# Usar Compress-Archive (mais simples)
$tempFolder = "$env:TEMP\cobersystem-compress"
if (Test-Path $tempFolder) {
    Remove-Item $tempFolder -Recurse -Force
}
New-Item -ItemType Directory -Path $tempFolder -Force | Out-Null

$count = 0
foreach ($file in $files) {
    $count++
    $relativePath = $file.FullName.Replace($projetoPath + "\", "")
    $destPath = Join-Path $tempFolder $relativePath
    $destDir = Split-Path $destPath -Parent
    
    if (-not (Test-Path $destDir)) {
        New-Item -ItemType Directory -Path $destDir -Force | Out-Null
    }
    
    Copy-Item $file.FullName -Destination $destPath -Force | Out-Null
    
    if ($count % 100 -eq 0) {
        Write-Host "Processando... $count/$fileCount" -ForegroundColor Gray
    }
}

Write-Host "Compactando..." -ForegroundColor Yellow
Compress-Archive -Path "$tempFolder\*" -DestinationPath $outputFile -Force

# Limpar pasta temporária
Remove-Item $tempFolder -Recurse -Force

Write-Host ""
if (Test-Path $outputFile) {
    $size = (Get-Item $outputFile).Length / 1MB
    Write-Host "Arquivo criado com sucesso!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Arquivo: $outputFile" -ForegroundColor Cyan
    Write-Host "Tamanho: $([math]::Round($size, 2)) MB" -ForegroundColor Cyan
    Write-Host "Arquivos: $fileCount" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Pronto para enviar ao OpenClaw!" -ForegroundColor Green
} else {
    Write-Host "Erro ao criar arquivo" -ForegroundColor Red
}
