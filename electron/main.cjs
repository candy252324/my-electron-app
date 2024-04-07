const path=require('path')
const { app, BrowserWindow } = require('electron')

const isProd=app.isPackaged  // 是否已打包

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 900,
    webPreferences: {
      nodeIntegration:false,  // 安全考虑，不开启
      preload: path.join(__dirname, 'preload.cjs')
    }
  })
  require('./ipcMain/index.cjs')
  
  const webUrl=isProd?`file://${path.join(__dirname,'../dist/index.html')}`:'http://localhost:5173'
  win.loadURL(webUrl)
  !isProd && win.webContents.openDevTools() 
}

app.whenReady().then(() => {
  createWindow()

// 如果没有窗口打开则打开一个窗口 (macOS)
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})


// 关闭所有窗口时退出应用 (Windows & Linux)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})