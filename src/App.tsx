function App() {
  return (
    <>
     <div className='bg-#fff'>
        <div>
          node 版本：{window.versions.node()}
        </div>
        <div>
          chrome 版本：{window.versions.chrome()}
        </div>
        <div>
          electron 版本：{window.versions.electron()}
        </div>
     </div>
    </>
  )
}

export default App
