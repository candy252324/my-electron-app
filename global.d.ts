interface IELECTRON_API {
  appVersion: string
  nodeVersion: string
  chromeVersion: string
  electronVersion: string
  /** 设置窗口标题 */
  setTitle: (title: string) => void
  /** 打开新窗口 */
  openWin: (params: { url: string; config: BrowserWindowConstructorOptions }) => void
  /** 检查版本更新 */
  checkUpdate: () => string
}
interface Window {
  ELECTRON_API: IELECTRON_API
}

declare const ELECTRON_API: IELECTRON_API
