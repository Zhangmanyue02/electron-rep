const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
    onUpdateCounter: (callback) => ipcRenderer.on("update-counter", (_event, value) => callback(value))
})