import { Button } from 'antd';

export default function TheWin(){
    // function openTheWin(){
    //     ELECTRON_API.openWin({
    //         url:'http://baidu.com',
    //         config:{
    //             width: 600,
    //             height: 400,
    //         },
    //     })
    // }
    return (
        <>
            {/* https://www.electronjs.org/zh/docs/latest/tutorial/ipc */}
            <div className='font-bold mt-8px'>进程间通信示例</div>
            <div>
                模式 1：渲染器进程向主进程发消息（单向）
                <Button type='primary' size='small' onClick={()=>ELECTRON_API.setTitle('标题'+Math.random())}>设置窗口标题</Button>
            </div>
            <div>
                模式 2：渲染器进程向主进程发消息, 主进程回应（双向）
            </div>
            <div>
                模式 3：主进程向渲染器进程发消息（单向）
            </div>
            <div>
                模式 4：渲染器进程 A 给 渲染器进程 B 发消息（单向）
            </div>
        </>
    )
}