const { app, BrowserWindow } = require('electron');
const path = require('path');

// function to create the main window of the application
function createMainWindow() {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      nodeIntegration: false, // disable direct loading of Node.js modules in the renderer process
      contextIsolation: true, // enable context isolation to protect the renderer process
      preload: path.join(__dirname, 'preload.js') // load a preload script to securely access Node.js APIs
    }
  });

  // Set the Content-Security-Policy for the main window
  mainWindow.webContents.session.webRequest.onHeadersReceived((details, callback) => {
    callback({
      responseHeaders: {
        ...details.responseHeaders,
        'Content-Security-Policy': ["default-src 'self'; font-src 'self' data: https://fonts.gstatic.com; style-src 'self' 'unsafe-inline'; connect-src 'self' https://pokeapi.co;"]
      }
    });
  });

  // load the index.html file of the Angular application
  mainWindow.loadFile(path.join(__dirname, 'dist/pokeapi-test/browser/index.html'));

  // open developer tools if the application is running in development mode
  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools();
  }
}

// event handler for starting the application
app.on('ready', createMainWindow);

// event handler for closing all windows
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// event handler for activating the application
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createMainWindow();
  }
});
