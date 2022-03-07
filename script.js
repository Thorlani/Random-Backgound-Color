let red = Math.floor(Math.random() * 189);
let green = Math.floor(Math.random() * 189);
let blue = Math.floor(Math.random() * 189);
const rgb = document.getElementById("rgb")

let color = `rgb(${red} ${green} ${blue})`

document.body.style.background = color

rgb.innerHTML = color

function reload() {
    let red = Math.floor(Math.random() * 189);
    let green = Math.floor(Math.random() * 189);
    let blue = Math.floor(Math.random() * 189);
    const rgb = document.getElementById("rgb")

    let color = `rgb(${red} ${green} ${blue})`

    document.body.style.background = color

    rgb.innerHTML = color
}
