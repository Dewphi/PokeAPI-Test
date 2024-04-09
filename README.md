# PokeapiTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Electron App

To run the app, use `npm run electron`. This will automatically execute the correct build target and start the electron app once finished.

## Building the Electron App

Run `npm run build:windows` to build an executable file. However if you start the app, it will show an error in the console, telling you that the app is unable to load local files and I was unable to resolve this issue yet. If you want to actually see und use this app, start it from VSCode via `electron .`.

Update: The target `npm run preelectron` contains the updated build command specifically configured for execution with electron.
