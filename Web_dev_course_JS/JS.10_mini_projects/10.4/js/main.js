const converter = document.querySelector('#converter')
const result = document.querySelector('.result')
const convBtn = document.querySelector('.conv')
const resetBtn = document.querySelector('.reset')
const changeBtn = document.querySelector('.change')
const one = document.querySelector('.one')
const two = document.querySelector('.two')

let farenheit
let celcius

const swap = () => {
	if (one.textContent === '°C') {
		one.textContent = '°F'
		two.textContent = '°C'
	} else {
		one.textContent = '°C'
		two.textContent = '°F'
	}
}

const conv = () => {
	if (one.textContent === '°C') {
		farenheit = converter.value * 1.8 + 32
		result.textContent = `${converter.value}°C is ${farenheit.toFixed(1)}°F`
	} else {
		celcius = (converter.value - 32) / 1.8
		result.textContent = `${converter.value}°F is ${celcius.toFixed(1)}°C`
	}
}

const reset = () => {
	converter.value = '0'
	result.textContent = ''
}

changeBtn.addEventListener('click', swap)
convBtn.addEventListener('click', conv)
resetBtn.addEventListener('click', reset)
