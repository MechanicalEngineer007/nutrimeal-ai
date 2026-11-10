@echo off
title NutriMeal AI Launcher
cd /d "%~dp0"
echo Starting NutriMeal AI Desktop Application...
if exist "%~dp0desktop\launch_desktop_app.bat" (
    call "%~dp0desktop\launch_desktop_app.bat"
) else (
    start "" "%~dp0index.html"
)
exit
