const { app, BrowserWindow, globalShortcut } = require("electron")

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })
    win.loadFile("src/4-键盘快捷键/2-全局快捷键/index.html")
}

app.whenReady().then(() => {
    globalShortcut.register("Alt+Shift+I", () => {
        console.log("Electron loves global shortcuts!");
    })
}).then(() => {
    createWindow()
})