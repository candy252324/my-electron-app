const {  BrowserWindow ,ipcMain } = require('electron')

/** 设置主窗口标题 */
ipcMain.on('set-title', (event, title) => {
    const webContents = event.sender
    const win = BrowserWindow.fromWebContents(webContents)
    win.setTitle(title)
})