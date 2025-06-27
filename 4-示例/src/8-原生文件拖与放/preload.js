const { contextBridge, ipcRenderer } = require("electron")

contextBridge.exposeInMainWorld("electronAPI", {
    startDrag: (fileName) => ipcRenderer.send("ondragstart", fileName)
})