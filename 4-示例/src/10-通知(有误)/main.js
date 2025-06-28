const { app, BrowserWindow, Notification } = require("electron")

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadFile("src/10-通知/index.html")
}

const NOTIFICATION_TITLE = 'Basic Notification'
const NOTIFICATION_BODY = 'Notification from the Main process'
function showNotification() {
    new Notification({ title: NOTIFICATION_TITLE, body: NOTIFICATION_BODY }).show()
}


app.whenReady().then(createWindow).then(showNotification)