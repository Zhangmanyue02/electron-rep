// 预加载js，暴露给渲染器的api
const { contextBridge, ipcRenderer } = require("electron")

contextBridge.exposeInMainWorld("electronAPI", {
    setTitle: (title) => ipcRenderer.send("set-title", title)
})