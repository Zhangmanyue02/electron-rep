// 暴露给渲染进程
const { contextBridge, ipcRenderer } = require("electron")

contextBridge.exposeInMainWorld("darkMode", {
    toggle: () => ipcRenderer.invoke("dark-mode:toggle"),
    system: () => ipcRenderer.invoke("dark-mode:system")
})