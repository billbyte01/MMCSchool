const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const removeColorBtn = document.querySelector('.remove-color')
const square = document.querySelector('.color')

function redColor() {
	// square.classList.add('red')
	// square.classList.remove('blue')

    square.classList.toggle('red')
}

function blueColor() {

    square.classList.toggle('blue')
}

function yellowColor() {
	square.classList.remove('blue', 'red')
}

function addAction() {
    square.classList.toggle('action')
}

btn1.addEventListener('click', redColor)
btn2.addEventListener('click', blueColor)
btn3.addEventListener('click', addAction)
removeColorBtn.addEventListener('click', yellowColor)

