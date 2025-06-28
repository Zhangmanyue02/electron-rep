const fs = require("fs")
const { app, BrowserWindow, Menu } = require("electron")
const path = require("path")

const createWindow = () => {
    const win = new BrowserWindow()

}
const fileName = "recently-used.md"
fs.writeFile(fileName, "hello woshi", () => {
    app.addRecentDocument(path.join(__dirname, fileName))
})

const template = [
    {
        label: app.name,
        "submenu": [
            {
                "label": "Open Recent",
                "role": "recentdocuments",
                "submenu": [
                    {
                        "label": "Clear Recent",
                        "role": "clearrecentdocuments"
                    }
                ]
            }
        ]
    }
]

const menu = Menu.buildFromTemplate(template)


app.whenReady().then(() => {
    Menu.setApplicationMenu(menu)
}).then(() => {
    createWindow()
})