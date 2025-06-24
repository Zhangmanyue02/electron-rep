// 一段普通又特殊的脚本，他是加载渲染器渲染页面前，
const { contextBridge } = require("electron")

contextBridge.exposeInMainWorld("versions", {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
})