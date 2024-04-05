import { Button } from 'antd';


export default function TheWin(){
    function openTheWin(){
      ELECTRON_API.setTitle('任意标题'+Math.random())
        // const win=new remote.BrowserWindow({width:800,height:600})
        // win.loadURL('http://baidu.com')
    }
    return (
        <>
            <Button type='primary' onClick={openTheWin}>打开新窗口</Button>
        </>
    )
}