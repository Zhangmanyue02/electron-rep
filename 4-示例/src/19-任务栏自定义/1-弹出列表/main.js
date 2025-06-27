const { app, BrowserWindow } = require("electron")

const createWindow = () => {
    const win = new BrowserWindow()
}

// 1.设置JumpList
app.setUserTasks([
    {
        program: process.execPath,
        arguments: "--new-window",
        iconPath: process.execPath,
        iconIndex: 0,
        title: "New Window", //任务标题
        description: "Create a new window" //hover时的tooltip
    }
])

app.whenReady().then(() => {
    createWindow()
})