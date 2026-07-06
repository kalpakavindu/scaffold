param(
    [Parameter(Mandatory=$true)]
    [string]$TemplateName
)

mkdir .\scaffold-tmp
cd .\scaffold-tmp

Write-Host "Initializing and cloning $TemplateName..."

git init
git remote add origin https://github.com/kalpakavindu/scaffold.git
git sparse-checkout init --cone
git sparse-checkout set $TemplateName
git pull --depth 1 origin main

Write-Host "Moving files to workspace..."

Move-Item -Path $TemplateName\* -Destination ..\

cd ..\

Remove-Item -Path .\scaffold-tmp -Recurse -Force

Write-Host "Scaffolding Complete. Happy coding!"