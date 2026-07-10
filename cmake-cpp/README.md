# CMake + C++ / C Template

CMake based project template for C or C++ projects.

## CMake Presets

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

# Prerequisites

- **Ninja**: The generator used by Windows presets.
  > Install Visual Studio 2022/2026 Build Tools.
- **MSYS2 environments**
  > CMakePresets configured for the installation path `C:\\mingw64\`. If your installation path is not the same, Please update MinGW presets in the `CMakePresets.txt` file accordingly.
- **Make**: The generator used by MinGW presets.
  > Install the following for MinGW environments using the MinGW terminal
  >
  > - `mingw-w64-i686-toolchain`
  > - `mingw-w64-i686-toolchain`
