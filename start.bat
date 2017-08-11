@echo off
call gulp --version
IF NOT %ERRORLEVEL% == 0 (
    call npm install gulp -g
)
call babel --version
IF NOT %ERRORLEVEL% == 0 (
    call npm install babel-cli -g
)
call tsc --version
IF NOT %ERRORLEVEL% == 0 (
    call npm install typescript -g
)
IF NOT EXIST node_modules (
    call npm install
)
gulp