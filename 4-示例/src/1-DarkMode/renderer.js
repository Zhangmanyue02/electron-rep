const toggleEl = document.getElementById("toggle-dark-mode")
const resetEl = document.getElementById("reset-to-system")

toggleEl.addEventListener("click", async () => {
    // 调用预加载脚本暴露的api
    const isDarkMode = await window.darkMode.toggle()
    console.log(isDarkMode, "renderer.js");
    document.getElementById("theme-source").innerHTML = isDarkMode ? "Dark" : "Light"
})
resetEl.addEventListener("click", () => {
    // 调用预加载脚本暴露的api
    window.darkMode.system()
    document.getElementById("theme-source").innerHTML = "System"
})