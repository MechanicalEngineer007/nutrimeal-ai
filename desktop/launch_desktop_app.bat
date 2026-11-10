@echo off
title NutriMeal AI Desktop App
cd /d "%~dp0.."

set "INDEX_PATH=%cd%\index.html"
set "APP_URL=file:///%INDEX_PATH:\=/%"

:: Check for Microsoft Edge App Mode
where msedge >nul 2>nul
if %errorlevel%==0 (
    start msedge --app="%APP_URL%" --window-size=1280,850
    exit
)

:: Check for Google Chrome App Mode
where chrome >nul 2>nul
if %errorlevel%==0 (
    start chrome --app="%APP_URL%" --window-size=1280,850
    exit
)

:: Fallback to default browser
start "" "%INDEX_PATH%"
exit
