const { app, BrowserWindow, Menu, MenuItem } = require("electron")

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })
    win.loadFile("src/4-键盘快捷键/1-本地快捷键/index.html")
}

// 1.创建菜单实例
const menu = new Menu()
// 2.追加菜单项
menu.append(new MenuItem({
    label: "Electron",
    submenu: [
        {
            role: "help",
            accelerator: process.platform === "darwin" ? "Alt+Cmd+I" : "Alt+Shift+I",
            click: () => console.log("Electron rocks!")
        }
    ]
}))
// 3.应用菜单实例
Menu.setApplicationMenu(menu)

app.whenReady().then(() => {
    createWindow()
})