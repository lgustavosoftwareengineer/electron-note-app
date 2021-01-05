# 👷 How build the project

- At first install the packages:

```sh

'''ELECTRON-PACKAGER (TO LINUX OR WIN)'''
# For use in npm scripts (recommended)
npm install electron-packager --save-dev

# For use from the CLI
npm install electron-packager -g


'''ELECTRON-INSTALLER-DEBIAN (TO CREATE A .DEB FILE)'''
# For use from command-line:
$ npm install -g electron-installer-debian

# For use in npm scripts or programmatically:
$ npm install --save-dev electron-installer-debian

```

- To build use the commands:

```sh
# Build the application to linux
$ electron-packager . app --platform linux --arch x64 --out linux/ --executableName note-app



# Creating the executable in .deb format
$ electron-installer-debian --src linux/app-linux-x64/ --dest linux/installers/ --arch amd64


# Build the application to windows (You need have installed the wine64 if you are trying to build in a linux machine)
$ electron-packager . app --platform win32 --arch x64 --out win --executableName note-app

```

# 👨‍💻 Sources

- [Electron-packager (https://github.com/electron/electron-packager)](https://github.com/electron/electron-packager)

- [Electron-installer-debian (https://github.com/electron-userland/electron-installer-debian)](https://github.com/electron-userland/electron-installer-debian)
