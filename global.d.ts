interface IELECTRON_API{
  nodeVersion:string
  chromeVersion:string
  electronVersion:string
  /** 设置主窗口标题 */
  setTitle:(title:string)=>void
}
interface Window {
  ELECTRON_API: IELECTRON_API;
}

declare const ELECTRON_API: IELECTRON_API;
