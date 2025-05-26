const sizeUpButton = document.querySelector('.sizeUp')
const sizeDownButton = document.querySelector('.sizeDown')
const colorButton = document.querySelector('.color')
const textToEdit = document.querySelector('.text p')

let color = 'white'
let fontSize = 36

const sizeUp = () => {
	if (fontSize < 50) {
		fontSize += 2
		textToEdit.style.fontSize = `${fontSize}px`
	}
}

const sizeDown = () => {
	if (fontSize > 22) {
		fontSize -= 2
		textToEdit.style.fontSize = `${fontSize}px`
	}
}

const changeColor = () => {
	if (color === 'white') {
		textToEdit.style.color = 'red'
		color = 'red'
	} else {
		textToEdit.style.color = 'white'
        color = 'white'
	}
}

sizeUpButton.addEventListener('click', sizeUp)
sizeDownButton.addEventListener('click', sizeDown)
colorButton.addEventListener('click', changeColor)
