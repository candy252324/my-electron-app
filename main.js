const { app, BrowserWindow } = require('electron')
// const isDev=require('electron-is-dev')
const isDev=true  // cjh todo 环境判断

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 900,
    webPreferences:{
      nodeIntegration:true
    }
  })
  const webUrl=isDev?'http://localhost:3000':"https://www.baidu.com/"
  win.loadURL(webUrl)
  isDev && win.webContents.openDevTools() 
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