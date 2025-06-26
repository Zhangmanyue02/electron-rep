const { app, BrowserWindow, ipcMain, dialog } = require("electron")
const path = require("path")

const createWindow = () => {
    const win = new BrowserWindow({
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        }
    })
    win.loadFile("src/3-进程间通信/2-双向-渲染进程传主进程/index.html")
}

async function handleOpenFile() {
    const { canceled, filePaths } = await dialog.showOpenDialog({})
    console.log(canceled, filePaths);
    if (!canceled) return filePaths[0]
}

app.whenReady().then(() => {
    ipcMain.handle("dialog:openFile", handleOpenFile)
    createWindow()
})