const { app, BrowserWindow } = require("electron")

const createWindow = () => {
    const win = new BrowserWindow()
    // 调试渲染器进程：使用谷歌开发者工具
    win.webContents.openDevTools()
}

app.whenReady().then(() => {
    createWindow()
})