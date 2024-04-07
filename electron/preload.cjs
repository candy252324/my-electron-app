const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('ELECTRON_API', {
  nodeVersion: process.versions.node,
  chromeVersion: process.versions.chrome,
  electronVersion: process.versions.electron,
  setTitle: (title) => ipcRenderer.send('set-title', title),
  openWin: ({ url, config }) => ipcRenderer.send('open-win', { url, config }),
})
