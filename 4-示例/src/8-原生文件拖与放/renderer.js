document.getElementById('drag1').ondragstart = (event) => {
    event.preventDefault()
    window.electronAPI.startDrag('drag-and-drop-1.md')
}

document.getElementById('drag2').ondragstart = (event) => {
    event.preventDefault()
    window.electronAPI.startDrag('drag-and-drop-2.md')
}