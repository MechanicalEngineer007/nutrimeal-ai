@echo off
title NutriMeal AI Server
cd /d "%~dp0"
echo ========================================================
echo       Starting NutriMeal AI Local Server...
echo ========================================================
echo.
python run_app.py
pause
