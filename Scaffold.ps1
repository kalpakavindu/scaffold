$Templates = @(
    "express-mongo-js",
    "react-vite-ts", 
    "empty-cmake-cpp"
)

function Test-DirectoryIsEmpty {
    param([string]$Path)
    if (-not (Test-Path -Path $Path)) {
        return $true
    }
    $items = Get-ChildItem -Path $Path -Force
    return $null -eq $items
}

function Copy-MergeAndRemoveSource {
    param (
        [string]$SourcePath,
        [string]$DestinationPath
    )

    Get-ChildItem -Path $SourcePath -Force | ForEach-Object {
        $destItemPath = Join-Path $DestinationPath $_.Name

        if ($_.PSIsContainer) {
            if (-not (Test-Path -Path $destItemPath)) {
                New-Item -ItemType Directory -Path $destItemPath -Force | Out-Null
            }
            Copy-MergeAndRemoveSource -SourcePath $_.FullName -DestinationPath $destItemPath
        } else {
            Copy-Item -Path $_.FullName -Destination $destItemPath -Force
        }
    }
    Remove-Item -Path $SourcePath -Recurse -Force
}


Clear-Host

if (-not (Test-DirectoryIsEmpty -Path ".")) {
    Write-Host "Warning: Current directory is not empty!" -ForegroundColor Yellow
    Write-Host "Scaffolding here might overwrite existing files, This will not touch any existing files that aren't related to the template."
    $choice = Read-Host "Do you want to continue? (y/N)"
    if ($choice -notmatch "^[yY](es)?$") {
        Write-Host "Aborted by user." -ForegroundColor Red
        exit
    }
    Write-Host ""
}

Write-Host "Select a Project Template"
for ($i = 0; $i -lt $Templates.Count; $i++) {
    $num = $i + 1
    Write-Host "  [$num] " -ForegroundColor Yellow -NoNewline
    Write-Host $Templates[$i]
}

$Selection = $null
while ($null -eq $Selection) {
    $input = Read-Host -Prompt "Choose an option (1-$($Templates.Count))"
    
    # Validate that the input is a valid integer within our range
    if ($input -as [int] -and [int]$input -ge 1 -and [int]$input -le $Templates.Count) {
        $Selection = [int]$input - 1 # Get the correct array index
    } else {
        Write-Host "Invalid selection. Please enter a number between 1 and $($Templates.Count)." -ForegroundColor Red
    }
}

$TemplateName = $Templates[$Selection]

Write-Host "Selected: $TemplateName" -ForegroundColor Green
Write-Host "Creating temporary directory..." -ForegroundColor Cyan
New-Item -ItemType Directory -Path .\scaffold-tmp -Force | Out-Null
Push-Location .\scaffold-tmp

Write-Host "Initializing and cloning $TemplateName..." -ForegroundColor Cyan

git init
git remote add origin https://github.com/kalpakavindu/scaffold.git
git sparse-checkout init --cone
git sparse-checkout set $TemplateName
git pull --depth 1 origin main

Write-Host "Moving files to workspace..." -ForegroundColor Cyan
Copy-MergeAndRemoveSource -SourcePath ".\$TemplateName" -DestinationPath ".."

Pop-Location
Remove-Item -Path .\scaffold-tmp -Recurse -Force

Write-Host "Scaffolding Complete. Happy coding!" -ForegroundColor Green