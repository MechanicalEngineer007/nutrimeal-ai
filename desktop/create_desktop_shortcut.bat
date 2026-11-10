@echo off
title Install NutriMeal AI Desktop Shortcut
cd /d "%~dp0.."

echo Installing NutriMeal AI Desktop Shortcut...

powershell -NoProfile -ExecutionPolicy Bypass -Command ^
    "$sh = New-Object -ComObject WScript.Shell; " ^
    "$scPath = [System.IO.Path]::Combine([Environment]::GetFolderPath('Desktop'), 'NutriMeal AI.lnk'); " ^
    "$sc = $sh.CreateShortcut($scPath); " ^
    "$sc.TargetPath = '%~dp0launch_desktop_app.bat'; " ^
    "$sc.WorkingDirectory = '%~dp0..'; " ^
    "$sc.IconLocation = '%~dp0app_icon.ico,0'; " ^
    "$sc.Description = 'NutriMeal AI - Personalized Nutrition & Daily Meal Planner'; " ^
    "$sc.Save(); " ^
    "Write-Host 'Shortcut successfully created on your Desktop!' -ForegroundColor Green"

echo Done! You can now launch NutriMeal AI directly from your Desktop.
timeout /t 3 >nul
exit
