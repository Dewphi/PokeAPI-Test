// preload.js

const { contextBridge, ipcRenderer } = require('electron');

// Expose select Node.js APIs to the renderer process
contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: ipcRenderer
});
