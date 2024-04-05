import TheWin from "./components/TheWin"

function App() {
  return (
    <>
     <div className='bg-#fff'>
        <div>
          node 版本：{ELECTRON_API.nodeVersion}
        </div>
        <div>
          chrome 版本：{ELECTRON_API.chromeVersion}
        </div>
        <div>
          electron 版本：{ELECTRON_API.electronVersion}
        </div>

        <div>
          <TheWin/>
        </div>
     </div>
    </>
  )
}

export default App
