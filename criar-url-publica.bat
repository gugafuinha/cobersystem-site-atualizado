@echo off
echo.
echo ========================================
echo   Criando URL Publica SEM SENHA
echo ========================================
echo.
echo Verificando servidor local...
timeout /t 2 /nobreak >nul

echo.
echo Iniciando cloudflared...
echo.
echo IMPORTANTE: Copie a URL que aparecer abaixo!
echo Ela comeca com https:// e NAO pede senha!
echo.
echo ========================================
echo.

cloudflared tunnel --url http://localhost:3000

pause
