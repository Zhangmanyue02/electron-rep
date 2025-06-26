const btn = document.getElementById("btn")
const filePathEL = document.getElementById("filePath")

btn.addEventListener("click", async () => {
    const filePath = await window.electronAPI.openFile()
    console.log(filePath, 6);
    filePathEL.innerText = filePath
})