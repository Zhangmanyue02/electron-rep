
function handleKeyPress(event) {
    document.getElementById("last-keypress").innerText = event.key
    console.log(`You pressed ${event.key}`)
}

window.addEventListener("keypress", handleKeyPress, true)