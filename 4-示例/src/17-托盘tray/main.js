const { app, BrowserWindow, nativeImage, Tray, Menu } = require("electron")

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadFile("src/17-托盘tray/index.html")
}

let tray
app.whenReady().then(() => {
    const icon = nativeImage.createFromPath("src/17-托盘tray/asset.png")
    // 创建托盘时，传入图标
    tray = new Tray(icon)

    // 右键托盘时的菜单
    const contextMenu = Menu.buildFromTemplate([
        { label: "Item1", type: "radio" },
        { label: "Item2", type: "radio" },
        { label: "Item3", type: "radio", checked: true }, //默认选中
        { label: "Item4", type: "radio" },
    ])
    tray.setContextMenu(contextMenu)

    tray.setToolTip('This is my application') // hover时的toolTip
    createWindow()
})