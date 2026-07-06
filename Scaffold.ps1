param(
    [Parameter(Mandatory=$true, HelpMessage="Enter the name of the template folder on GitHub")]
    [string]$TemplateName
)

New-Item -ItemType Directory -Path .\scaffold-tmp -Force | Out-Null
Push-Location .\scaffold-tmp

Write-Host "Initializing and cloning $TemplateName..." -ForegroundColor Cyan

git init
git remote add origin https://github.com/kalpakavindu/scaffold.git
git sparse-checkout init --cone
git sparse-checkout set $TemplateName
git pull --depth 1 origin main

Write-Host "Moving files to workspace..." -ForegroundColor Cyan

Get-ChildItem -Path ".\$TemplateName" -Force | Move-Item -Destination ..\

Pop-Location
Remove-Item -Path .\scaffold-tmp -Recurse -Force

Write-Host "Scaffolding Complete. Happy coding!" -ForegroundColor Green