const path = require("path")
const fs = require("fs")
const https = require("https")

const { app, BrowserWindow, ipcMain } = require("electron")

const createWindow = () => {
    const win = new BrowserWindow({
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        }
    })
    win.loadFile("src/8-原生文件拖与放/index.html")
}

const iconName = path.join(__dirname, 'iconForDragAndDrop.png')
const icon = fs.createWriteStream(iconName)

fs.writeFileSync(path.join(__dirname, 'drag-and-drop-1.md'), '# First file to test drag and drop')
fs.writeFileSync(path.join(__dirname, 'drag-and-drop-2.md'), '# Second file to test drag and drop')

https.get('https://img.icons8.com/ios/452/drag-and-drop.png', (response) => {
    response.pipe(icon)
})

ipcMain.on('ondragstart', (event, filePath) => {
    event.sender.startDrag({
        file: path.join(__dirname, filePath),
        icon: iconName
    })
})
app.on("ready", () => {
    createWindow()
})