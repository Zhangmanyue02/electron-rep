const path = require("path")

const { app, BrowserWindow, ipcMain, nativeTheme } = require("electron")

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        }
    })
    win.loadFile("src/1-DarkMode/index.html")

}

ipcMain.handle("dark-mode:toggle", () => {
    console.log(nativeTheme.shouldUseDarkColors, 18);
    if (nativeTheme.shouldUseDarkColors) {
        nativeTheme.themeSource = 'light'
    } else {
        nativeTheme.themeSource = 'dark'
    }
    console.log(nativeTheme.shouldUseDarkColors, 24);
    return nativeTheme.shouldUseDarkColors
})
ipcMain.handle("dark-mode:system", () => {
    nativeTheme.themeSource = 'system'
})

app.whenReady().then(() => {

    createWindow()
})