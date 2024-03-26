const { app, BrowserWindow } = require('electron');
const path = require('path');

// function to create the main window of the application
function createMainWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true // allows using node.js APIs in the renderer process
    }
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
