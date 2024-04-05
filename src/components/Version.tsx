export default function Version(){
    return (
    <>
        <div>
         node 版本：{ELECTRON_API.nodeVersion}
        </div>
        <div>
          chrome 版本：{ELECTRON_API.chromeVersion}
        </div>
        <div>
          electron 版本：{ELECTRON_API.electronVersion}
        </div>
    </>

    )

}