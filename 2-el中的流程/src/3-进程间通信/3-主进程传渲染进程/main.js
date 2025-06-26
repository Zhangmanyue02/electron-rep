const { app, BrowserWindow, Menu } = require("electron")
const path = require("path")

const createWindow = () => {
    const win = new BrowserWindow({
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        }
    })

    // 创建菜单
    const menu = Menu.buildFromTemplate([
        {
            label: app.name,
            submenu: [
                {
                    click: () => win.webContents("update-counter", 1),
                    label: "increment"
                },
                {
                    click: () => win.webContents("update-counter", -1),
                    label: "decrement"
                }
            ]
        }
    ])
    Menu.setApplicationMenu(menu)
    win.loadFile("src/3-进程间通信/3-主进程传渲染进程/index.html")
}

app.whenReady().then(() => {
    createWindow()
})