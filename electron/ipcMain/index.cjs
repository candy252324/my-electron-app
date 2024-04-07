const { BrowserWindow, ipcMain } = require('electron')

/** 设置窗口标题 */
ipcMain.on('set-title', (event, title) => {
  const webContents = event.sender
  const win = BrowserWindow.fromWebContents(webContents)
  win.setTitle(title)
})

/** 打开新窗口*/
ipcMain.on('open-win', (event, { url, config }) => {
  if (!url) {
    throw Error('缺少 url')
  }
  let win = new BrowserWindow(Object.assign({}, config))
  win.loadURL(url)
})
