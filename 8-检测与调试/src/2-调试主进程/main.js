const { app, BrowserWindow } = require("electron")

const createWindow = () => {
    const win = new BrowserWindow()
}

console.log("ehlo");

app.whenReady().then(() => {
    createWindow()
})