# CMake + C++ / C Template

CMake based project template for C or C++ projects.

## Prerequisites

### VS Code

This template is made to be used in [VSCode](https://code.visualstudio.com/Download) so you should use these extensions to get the best out of this template.

- **C/C++ Extension** - [`ms-vscode.cpptools`](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools)
- **C/C++ DevTools** - [`ms-vscode.cpp-devtools`](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpp-devtools)
- **CMake Tools** - [`ms-vscode.cmake-tools`](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cmake-tools)

> Sadly these wont be available in VS Codium 🥲

### Visual Studio 2022/2026

Visual Studio Build Tools are needed to get the `MSVC` compiler and other required tools. Install these workloads using [Visual Studio Installer](https://visualstudio.microsoft.com/downloads/).

- Desktop development with C++
- Game development with C++ (Optional)

### MSYS2 environments

You must need [MSYS2](https://www.msys2.org/) installed in your system to use MinGW presets.
<br>
The presets are configured using the MSYS2 installation path as `C:\\msys64`. If your installation is in somewhere else, please update paths in `CMakePresets.json`.
<br>
You must install these packages in MinGW environments to get the required compilers, debuggers and build tools.

- `mingw-w64-i686-toolchain`
- `mingw-w64-i686-toolchain`

## CMake Configuration Presets

### Debug Presets

- **Windows x64 Debug (MSVC):** `x64-win-debug`
- **Windows x86 Debug (MSVC):** `x86-win-debug`
- **MinGW x64 Debug (GCC):** `x64-mingw-debug`
- **MinGW x86 Debug (GCC):** `x86-mingw-debug`

### Release Presets

- **Windows x64 Release (MSVC):** `x64-win-release`
- **Windows x86 Release (MSVC):** `x86-win-release`
- **MinGW x64 Release (GCC):** `x64-mingw-release`
- **MinGW x86 Release (GCC):** `x86-mingw-release`

## Debugger Configurations

> Please select the configuration preset before starting the debugger. These configurations include cmake commands to automatically select the environment and debuggers for corresponding architectures from the configuration presets.

### Windows Launch

Launch the target in `cppvsdbg` type debugger. Works with,

- Windows x64 Debug (MSVC)
- Windows x64 Release (MSVC)
- Windows x86 Debug (MSVC)
- Windows x86 Release (MSVC)

### MinGW Launch

Launch the target in `cppdbg` type debugger with `gdb`. Works with,

- MinGW x64 Debug (GCC)
- MinGW x86 Debug (GCC)
- MinGW x64 Release (GCC)
- MinGW x86 Release (GCC)
