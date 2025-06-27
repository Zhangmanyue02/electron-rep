const path = require("path")
const { app, BrowserWindow, ipcMain, shell } = require("electron")

const createWindow = () => {
    const win = new BrowserWindow({
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        }
    })
    win.loadFile("src/5-深度链接/index.html")
}

if (process.defaultApp) {
    if (process.argv.length >= 2) {
        app.setAsDefaultProtocolClient("electron-fiddle", process.execPath, [path.resolve(process.argv[1])])
    }
} else {
    app.setAsDefaultProtocolClient("electron-fiddle")
}

app.on("ready", () => {
    createWindow()
})

ipcMain.handle("shell:open", () => {
    const pageDirectory = __dirname.replace("app.asar", "app.asar.unpacked")
    const pagePath = path.join("file://", pageDirectory, "index.html")
    shell.openExternal(pagePath)
})