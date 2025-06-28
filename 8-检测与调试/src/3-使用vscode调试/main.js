const { app, BrowserWindow } = require("electron")

const createWindow = () => {
    const win = new BrowserWindow()
}

app.whenReady().then(() => {
    createWindow()
})