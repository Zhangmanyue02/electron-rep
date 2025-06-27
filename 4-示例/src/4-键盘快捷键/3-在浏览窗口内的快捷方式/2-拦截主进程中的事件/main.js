const { app, BrowserWindow } = require("electron")

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    win.loadFile("src/4-键盘快捷键/3-在浏览窗口内的快捷方式/2-拦截主进程中的事件/index.html")
    win.webContents.on("before-input-event", (event, input) => {
        if (input.control && input.key.toLocaleLowerCase() == 'i') {
            console.log("Pressed Control+I");
            event.preventDefault()
        }
    })
}

app.whenReady().then(() => {
    createWindow()
})