const infomation = document.getElementById("info")
infomation.innerText = `本应用正在使用 Chrome(v${window.versions.chrome()}),Node.js(v${versions.node()}))`

const func = async () => {
    const response = await window.versions.ping()
    console.log(response) // 打印 'pong'
}

func()