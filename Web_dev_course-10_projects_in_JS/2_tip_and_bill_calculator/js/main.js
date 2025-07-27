const billPrice = document.querySelector('#price')
const peopleNumber = document.querySelector('#people')
const tipAmount = document.querySelector('#tip')
const totalCost = document.querySelector('.cost')
const errorInfo = document.querySelector('.error')
const costInfo = document.querySelector('.cost-info')
const calculateButton = document.querySelector('.count')

calculateButton.addEventListener('click', () => {
	const billField = parseFloat(billPrice.value)
	const peopleField = parseInt(peopleNumber.value)
	const tipField = parseFloat(tipAmount.value)

	if (billField == '' || peopleField == '' || tipField == 0) {
		totalCost.textContent = ''
		costInfo.style.display = 'none'
		errorInfo.textContent = 'Please enter valid values.'
	} else {
		errorInfo.textContent = ''
		const total = (billField + (billField * tipField)) / peopleField
		costInfo.style.display = 'block'
		totalCost.textContent = ` ${total.toFixed(2)} `
	}
})
