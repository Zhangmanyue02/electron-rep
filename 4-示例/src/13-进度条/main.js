const { app, BrowserWindow } = require("electron")

let progressInterval

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadFile("src/13-进度条/index.html")





    // win.setProgressBar(2) //当参数大于1，处于不确定状态
    // win.setProgressBar(-1) //参数为负数，删除进度条
    // win.setProgressBar(.65) //正常进度值：参数0-1

    const INCREMENT = 0.02
    const INTERVAL_DELAY = 100 //ms

    let c = 0

    progressInterval = setInterval(() => {
        win.setProgressBar(c)

        if (c < 1) {
            c += INCREMENT
        } else {
            c = (-INCREMENT * 5) // reset to a bit less than 0 to show reset state
        }

    }, INTERVAL_DELAY)

}


app.whenReady().then(() => {
    createWindow()
})