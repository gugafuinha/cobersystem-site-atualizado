@echo off
chcp 65001 >nul
title Conversor de Imagens - Cobersystem
color 0A

echo.
echo ========================================
echo   CONVERSOR DE IMAGENS
echo ========================================
echo.
echo Este script vai converter sua imagem para um formato compatível
echo.

cd /d "%~dp0"

powershell -ExecutionPolicy Bypass -File "%~dp0converter-imagem.ps1"

pause






