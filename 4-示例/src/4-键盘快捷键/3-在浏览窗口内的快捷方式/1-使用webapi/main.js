const { app, BrowserWindow } = require("electron")

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    win.loadFile("src/4-键盘快捷键/3-在浏览窗口内的快捷方式/1-使用webapi/index.html")
}

app.whenReady().then(() => {
    createWindow()
})