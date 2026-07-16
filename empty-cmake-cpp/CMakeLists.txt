cmake_minimum_required(VERSION 3.20)

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# Change these variables as your need.
set(PROJECT_NAME CMakeTemplate)
set(PROJECT_DESCRIPTION "CMake Template")
set(SRC_TARGET_NAME Application)


project(${PROJECT_NAME} VERSION 1.0.0
  DESCRIPTION "${PROJECT_DESCRIPTION}"
  LANGUAGES CXX
)

add_subdirectory(src)
add_subdirectory(libs)