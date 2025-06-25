const { contextBridge, ipcRenderer } = require("electron")

// 暴露主进程才能访问的api给到渲染进程
contextBridge.exposeInMainWorld("versions", {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
    // 暴露ping给到渲染进程
    ping: () => ipcRenderer.invoke('ping')
})