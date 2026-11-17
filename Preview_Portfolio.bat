@echo off
title Abubakar Ahmad - Portfolio Preview
cd /d "%~dp0"
echo ===================================================================
echo       Opening Abubakar Ahmad's Personal Portfolio Website
echo ===================================================================
echo.
start "" "%~dp0\index.html"
echo Website opened in your default browser!
timeout /t 3 >nul
