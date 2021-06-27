@echo off
set /p msg="Enter git commit message: "
@echo on

@REM cd example
@REM call yarn unlink "@reactiff/ui-core"
@REM cd..
@REM call yarn unlink

git add .
git commit -m "%msg%"
git push

call npm version patch
call npm publish

yarn deploy

echo
echo Done!
