# External Libraries

Create a directory for a external library. If there's no `CMakeLists.txt` file specified in the project, write a `CMakeLists.txt` file for it.

Add the directory of the external library in the `CMakeLists.txt` file in the `libs/` directory.

## Copyright

Make sure specify the copying information for each external library in a `COPYING.md` file. You can use the below template replacing the blocks closed in `[]` with the library information.

```markdown
# Third-Party Code Attribution

This directory contains source code copied from an external project.

## Source Information

- **Project Name:** [Name of the Project]
- **Original Repository:** [URL to the GitHub/GitLab or the original source]
- **Version/Commit:** [Version number or specific Git commit hash used]
- **Original Authors:** [Name of the developer or organization]

## License Terms

The copied source code is used under the terms of the [Name of License, e.g., MIT License].

A copy of the original license text is provided below:

---

[Copy of the ORIGINAL text in the LICENSE.md file provided with the source code of the external library]
```

## Example Setup

For example, if you adding the `GLFW` library to your project,

- First create a folder called `glfw` and add the downloaded source files there.
- If no `CMakeLists.txt` file present in the source files, create new one for build the `glfw` library.
- Add `COPYING.txt` file using the above template and fill the information.
- Add the below code to the `libs/CMakeLists.txt` file.

```cmake
add_subdirectory(glfw)
```
