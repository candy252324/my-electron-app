import { Button, message } from 'antd'

export default function TheWin() {
  async function checkUpdate() {
    const msg = await window.ELECTRON_API.checkUpdate()
    message.success(msg)
  }
  return (
    <>
      {/* https://www.electronjs.org/zh/docs/latest/tutorial/ipc */}
      <div className="font-bold mt-16px">进程间通信示例</div>
      <div className="mb-12px">
        模式 1：渲染器进程向主进程发消息（单向）
        <div>
          ipcRenderer.send ={'>'} ipcMain.on
          <Button
            type="primary"
            size="small"
            onClick={() => ELECTRON_API.setTitle('标题' + Math.random())}
          >
            设置窗口标题
          </Button>
        </div>
      </div>
      <div className="mb-12px">
        模式 2：渲染器进程向主进程发消息, 主进程回应（双向）
        <div>
          ipcRenderer.invoke {'<'}={'>'} ipcMain.handle
          <Button type="primary" size="small" onClick={checkUpdate}>
            版本更新检查
          </Button>
        </div>
      </div>
      <div className="mb-12px">
        模式 3：主进程向渲染器进程发消息（单向）
        <div>win.webContents.send('xxx', xxx)</div>
      </div>
    </>
  )
}
