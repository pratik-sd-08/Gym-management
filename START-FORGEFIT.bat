@echo off
title ForgeFit Gym SaaS
cd /d "%~dp0"
echo Installing/checking ForgeFit dependencies...
call npm install --no-audit --no-fund
if errorlevel 1 (
  echo.
  echo INSTALL FAILED. Keep this window open and send the error to ChatGPT.
  pause
  exit /b 1
)
echo.
echo Starting ForgeFit...
call npm run dev -- --open
pause
