const { app, BrowserWindow, ipcMain } = require("electron")
const path = require("path")

const createWindow = () => {
    const win = new BrowserWindow({
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        }
    })
    win.loadFile("src/3-进程间通信/1-单向-渲染进程传主进程/index.html")
}

function handleSetTitle(event, title) {
    // event.sender 是发送此 IPC 消息的渲染进程的 webContents 对象
    const webContents = event.sender
    // 从 webContents 获取对应的 BrowserWindow 实例
    const win = BrowserWindow.fromWebContents(webContents)
    // 设置窗口的标题为传入的 title 参数
    win.setTitle(title)
}

app.whenReady().then(() => {
    ipcMain.on("set-title", handleSetTitle)
    createWindow()
})