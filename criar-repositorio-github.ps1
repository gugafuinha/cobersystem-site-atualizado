# Script para criar repositório no GitHub e fazer push
Write-Host "🚀 Criando repositório no GitHub..." -ForegroundColor Cyan
Write-Host ""

$repoName = "cobersystem-site"
$username = Read-Host "Digite seu usuário do GitHub"

Write-Host ""
Write-Host "📋 Opções:" -ForegroundColor Yellow
Write-Host "1. Criar repositório via interface web (recomendado)" -ForegroundColor White
Write-Host "2. Tentar criar via API (precisa de token)" -ForegroundColor White
Write-Host ""

$opcao = Read-Host "Escolha uma opção (1 ou 2)"

if ($opcao -eq "1") {
    Write-Host ""
    Write-Host "📋 Siga estes passos:" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "1. Acesse: https://github.com/new" -ForegroundColor Yellow
    Write-Host "2. Nome do repositório: $repoName" -ForegroundColor Yellow
    Write-Host "3. NÃO marque 'Add a README file'" -ForegroundColor Yellow
    Write-Host "4. Clique em 'Create repository'" -ForegroundColor Yellow
    Write-Host ""
    
    $continuar = Read-Host "Depois de criar, pressione Enter para continuar..."
    
    Write-Host ""
    Write-Host "🔗 Conectando ao repositório..." -ForegroundColor Yellow
    
    # Verificar se já tem remote
    $remote = git remote get-url origin 2>$null
    if ($remote) {
        Write-Host "⚠️  Remote já existe: $remote" -ForegroundColor Yellow
        $sobrescrever = Read-Host "Deseja sobrescrever? (S/N)"
        if ($sobrescrever -eq "S" -or $sobrescrever -eq "s") {
            git remote remove origin
        } else {
            Write-Host "❌ Operação cancelada" -ForegroundColor Red
            exit
        }
    }
    
    git remote add origin "https://github.com/$username/$repoName.git"
    
    Write-Host ""
    Write-Host "📤 Fazendo push..." -ForegroundColor Yellow
    git push -u origin main
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "✅ Repositório criado e código enviado!" -ForegroundColor Green
        Write-Host ""
        Write-Host "🔗 URL do repositório:" -ForegroundColor Cyan
        Write-Host "https://github.com/$username/$repoName" -ForegroundColor Yellow
        Write-Host ""
        Write-Host "📋 Compartilhe esta URL com o OpenClaw!" -ForegroundColor Green
    } else {
        Write-Host ""
        Write-Host "❌ Erro ao fazer push" -ForegroundColor Red
        Write-Host "Verifique:" -ForegroundColor Yellow
        Write-Host "  - Repositório foi criado no GitHub" -ForegroundColor White
        Write-Host "  - Usuário e senha estão corretos" -ForegroundColor White
        Write-Host "  - Você tem permissão para fazer push" -ForegroundColor White
    }
    
} elseif ($opcao -eq "2") {
    Write-Host ""
    Write-Host "Para criar via API, você precisa de um token do GitHub" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "1. Crie um token em: https://github.com/settings/tokens" -ForegroundColor White
    Write-Host "2. Dê permissão 'repo'" -ForegroundColor White
    Write-Host "3. Cole o token quando solicitado" -ForegroundColor White
    Write-Host ""
    
    $token = Read-Host "Cole seu token do GitHub (ou pressione Enter para cancelar)"
    
    if ($token) {
        Write-Host ""
        Write-Host "🔗 Criando repositório via API..." -ForegroundColor Yellow
        
        $body = @{
            name = $repoName
            description = "Site completo Cobersystem - Coberturas em Policarbonato"
            private = $false
        } | ConvertTo-Json
        
        $headers = @{
            Authorization = "token $token"
            Accept = "application/vnd.github.v3+json"
        }
        
        try {
            $response = Invoke-RestMethod -Uri "https://api.github.com/user/repos" -Method Post -Headers $headers -Body $body -ContentType "application/json"
            
            Write-Host "✅ Repositório criado!" -ForegroundColor Green
            Write-Host "URL: $($response.html_url)" -ForegroundColor Cyan
            
            Write-Host ""
            Write-Host "📤 Fazendo push..." -ForegroundColor Yellow
            
            git remote add origin "https://github.com/$username/$repoName.git"
            git push -u origin main
            
            if ($LASTEXITCODE -eq 0) {
                Write-Host ""
                Write-Host "✅ Código enviado com sucesso!" -ForegroundColor Green
                Write-Host ""
                Write-Host "🔗 URL do repositório:" -ForegroundColor Cyan
                Write-Host $response.html_url -ForegroundColor Yellow
            }
        } catch {
            Write-Host ""
            Write-Host "❌ Erro ao criar repositório: $($_.Exception.Message)" -ForegroundColor Red
        }
    } else {
        Write-Host "❌ Operação cancelada" -ForegroundColor Red
    }
} else {
    Write-Host "❌ Opção inválida" -ForegroundColor Red
}
