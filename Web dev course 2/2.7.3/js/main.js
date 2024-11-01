const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('.btn2')
const removeColorBtn = document.querySelector('.remove-color')
const square = document.querySelector('.color')

function redColor() {
	square.classList.add('red')
	square.classList.remove('blue')
}

function blueColor() {
	square.classList.add('blue')
	square.classList.remove('red')
}

function yellowColor() {
	square.classList.remove('blue', 'red')
}

btn1.addEventListener('click', redColor)
btn2.addEventListener('click', blueColor)
removeColorBtn.addEventListener('click', yellowColor)
