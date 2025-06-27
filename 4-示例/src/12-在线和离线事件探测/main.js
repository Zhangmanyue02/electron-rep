const { app, BrowserWindow } = require("electron")

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadFile("src/12-在线和离线事件探测/index.html")

}
app.whenReady().then(() => {
    createWindow()
})