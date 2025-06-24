console.log("Hello from Electron !");
console.log(process.platform); // 返回本地平台：win、linux、darwin(mac)，还可以针对特定平台运行特定代码。 

const { app, BrowserWindow } = require("electron") //

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })
    win.loadFile("index.html")
}

app.whenReady().then(() => {
    createWindow()

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit()
})