const { app, BrowserWindow } = require("electron")
const { default: installExtension, REDUX_DEVTOOLS } = require("electron-devtools-installer")

const createWindow = () => {
    const win = new BrowserWindow()
}

app.whenReady().then(() => {
    installExtension(REDUX_DEVTOOLS).then((ext) => console.log(`Added Extension:  ${ext.name}`))
}).then(() => {
    createWindow()
})