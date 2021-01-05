# 👷 How build the project

- Use the commands:

```sh
# Build the application to linux
$ electron-packager . app --platform linux --arch x64 --out dist/ --executableName note-app



# Creating the executable in .deb format
$ electron-installer-debian --src dist/app-linux-x64/ --dest dist/installers/ --arch amd64

```
