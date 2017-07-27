@echo off
call npm list gulp -g
IF ERRORLEVEL 1 (
    call npm install gulp -g
)
call npm list babel-cli -g
IF ERRORLEVEL 1 (
    call npm install babel-cli -g
)
call npm list typescript -g
IF ERRORLEVEL 1 (
    call npm install typescript -g
)
IF NOT EXIST node_modules (
    call npm install
)
gulp