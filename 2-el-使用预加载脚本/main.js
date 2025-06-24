const path = require("path")
const { app, BrowserWindow } = require("electron")

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        }
    })
    win.loadFile("index.html")
}

app.whenReady().then(() => {
    createWindow()
})

// 1.什么是预加载脚本？
/* 预加载脚本（Preload Script）是 Electron 中一种特殊的脚本，
它​​在渲染进程的网页内容加载之前运行​​，但​​在渲染进程的上下文中执行​​。
它的核心作用是​​安全地桥接主进程（Node.js 环境）和渲染进程（浏览器环境）​​，
解决两者隔离带来的【通信】问题。
 */

// 2.怎么使用预加载脚本？
/* 写一段普通的js脚本，在window里加webPreferences属性，读取 */

// 3.怎么理解预加载脚本
/* 与 Chrome 扩展的内容脚本（Content Script）类似，预加载脚本在渲染器加载网页之前注入。
 */

