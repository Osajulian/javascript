const btn = document.getElementById('button')

const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'rebeccapurple', 'violet']

let change = () => {
    let result = document.body.style.background = rainbow[Math.floor(7*Math.random())]
    return result
}

btn.addEventListener('click', change)

