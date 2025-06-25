const { app, BrowserWindow } = require("electron")

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })
    win.loadFile("src/1-创建第一个el程序/index.html")
}

app.whenReady().then(() => {
    createWindow()

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on("window-all-closed", () => {
    // 如果所有窗口关闭，执行回调；如果系统环境不是mac，那么直接退出应用
    if (process.platform !== "darwin") app.quit()
})