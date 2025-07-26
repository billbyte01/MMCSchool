//It could be bettet to use .map method to create an array of drink names and then filter it, but for simplicity (small project), we are using forEach here.
const searchBar = document.querySelector('.search')
const drinkList = document.querySelectorAll('.drink-list ul li')
const noResultsMessage = document.querySelector('.no-results')

searchBar.addEventListener('keyup', (e) => {
	const searchText = e.target.value.toLowerCase()
	let hasMatch = false

	drinkList.forEach((drink) => {
		if (drink.textContent.toLowerCase().includes(searchText)) {
			drink.style.display = 'block'
			hasMatch = true
		} else {
			drink.style.display = 'none'
		}
	})
	noResultsMessage.style.display = hasMatch ? 'none' : 'block'
})

