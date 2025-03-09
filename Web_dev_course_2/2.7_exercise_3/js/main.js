const sizeUp = document.querySelector('.size-up')
const sizeDown = document.querySelector('.size-down')
const color = document.querySelector('.color')
const p = document.querySelector('p')

let fontSize = 20

function bigText() {
	if (fontSize < 60) {
		fontSize = fontSize + 5
		p.style.fontSize = fontSize + 'px'
		console.log(fontSize)
	}
}

function smallText() {
	if (fontSize > 5) {
		fontSize = fontSize - 5
		p.style.fontSize = fontSize + 'px'
		console.log(fontSize)
	}
}

function goldColor() {
	p.style.color = p.style.color === 'gold' ? 'white' : 'gold'
}

sizeUp.addEventListener('click', bigText)
sizeDown.addEventListener('click', smallText)
color.addEventListener('click', goldColor)
