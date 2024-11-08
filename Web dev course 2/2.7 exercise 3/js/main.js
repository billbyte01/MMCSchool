const sizeUp = document.querySelector('.size-up')
const sizeDown = document.querySelector('.size-down')
const color = document.querySelector('.color')
const p = document.querySelector('p')

let fontSize = 20

function bigText() {
	p.style.fontSize = fontSize + 'px'
    fontSize += fontSize
}

sizeUp.addEventListener('click', bigText)
