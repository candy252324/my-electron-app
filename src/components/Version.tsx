export default function Version() {
  return (
    <>
      <div className="font-bold mt-8px">版本</div>
      <div>app 版本：{ELECTRON_API.appVersion}</div>
      <div>node 版本：{ELECTRON_API.nodeVersion}</div>
      <div>chrome 版本：{ELECTRON_API.chromeVersion}</div>
      <div>electron 版本：{ELECTRON_API.electronVersion}</div>
    </>
  )
}
