set(SOURCE_FILES
  main.cpp
  main.hpp
)

add_executable(${SRC_TARGET_NAME} ${SOURCE_FILES})

target_include_directories(${SRC_TARGET_NAME} PRIVATE
  ${CMAKE_CURRENT_SOURCE_DIR}
  # Other include directories can be added here...
)

target_link_libraries(${SRC_TARGET_NAME} PRIVATE
  logger
)

# Install the target
install(TARGETS ${SRC_TARGET_NAME}
    RUNTIME DESTINATION bin
)

# Install public headers (for libraries)
install(FILES main.hpp DESTINATION include)

# Install other resources (if any)
# install(DIRECTORY res/ DESTINATION bin)