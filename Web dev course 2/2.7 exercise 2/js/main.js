const showClass = document.querySelector('.item1')
const buttonChange = document.querySelector('.arrow')
const rotateArrow = document.querySelector('.fas')
function showChange() {
	showClass.classList.toggle('show')
	rotateArrow.classList.toggle('fasRotate')
	if (showClass.classList.contains('show')) {
		console.log('OK')
	} else {
		console.log('NOT OK')
	}
}
buttonChange.addEventListener('click', showChange)
