set(SOURCE_FILES
  main.cpp
  # Specify the source files here...
)

add_executable(${SRC_TARGET_NAME} ${PUBLIC_HEADER_FILES} ${SOURCE_FILES})

target_include_directories(${SRC_TARGET_NAME} PRIVATE
  ${CMAKE_CURRENT_SOURCE_DIR}
  # Other include directories can be added here...
)

target_link_libraries(${SRC_TARGET_NAME} PRIVATE
  # Other libraries can be added here...
)

# -------- INSTALLATION --------

# set(PUBLIC_HEADER_FILES 
#   # Specify the public header files here (for libraries)...
# )

# Install the target
install(TARGETS ${SRC_TARGET_NAME}
    RUNTIME DESTINATION bin
)

# Install public headers (for libraries)
# install(FILES ${PUBLIC_HEADER_FILES} DESTINATION include)

# Install other resources (if any)
# install(DIRECTORY res/ DESTINATION bin)