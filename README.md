# Scaffold

Starter templates for all my projects.

## Overview

* `/react-vite-ts` - React+Vite template with TypeScript for frontend web projects.
* `/express-mongo-js` - Express+Mongoose template with JavaScript for server side API projects.
* `/empty-cmake-cpp` - CMake template with builtin presets for VisualStudio and MinGW toolchains for C++ and C projects.

## Scaffold Script

Open powershell, create a new folder for your project and go into the new directory.
```powershell
mkdir my-new-project
cd my-new-project
```

Then run this command to initialize `Scaffold` script.

```powershell
& ([scriptBlock]::Create((irm https://raw.githubusercontent.com/kalpakavindu/scaffold/refs/heads/main/Scaffold.ps1)))
```

The script will ask for you to select available template.
```txt
Select a Project Template
  [1] express-mongo-js
  [2] react-vite-ts
  [3] empty-cmake-cpp
Choose an option (1-3):
```

### Merge and Overwrite behavior

If the project folder already have files or folders, The script will warn you. If accept the warning run over a folder with already existing files, The following will happen:

- If the file is related to the template, it will be overwrite by the template file.
- If the file is not related to the template, the file **will not** edit or delete by the script. It will stay as it is.

This is useful when you have other directories with files that aren't related to the template but are related to your project.

> Bash script is on it's way, Hang tight ✌️