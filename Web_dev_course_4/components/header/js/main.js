// hiding/showing menu on mobile

const burgerLine = document.querySelector('.line')
const navMobile = document.querySelector('nav')
const navBurger = document.querySelector('.nav-burger')
const logoButton = document.querySelector('.logo a')
const navElements = document.querySelector('nav ul')
const mobileNavHideElements = [navBurger, logoButton, navElements]

mobileNavHideElements.forEach((element) => {
	element.addEventListener('click', () => {
		burgerLine.classList.toggle('burger-x')
		navMobile.classList.toggle('nav-show')
	})
})

// hiding/showing header when scrolling

const headerHide = document.querySelector('header')
let lastScroll = 0
window.addEventListener('scroll', () => {
	const currentScrollY = window.scrollY
	if (currentScrollY > lastScroll) {
		headerHide.classList.add('hide')
		if (navMobile.classList.contains('nav-show')) {
			navMobile.classList.remove('nav-show')
			burgerLine.classList.remove('burger-x')
		}
	} else {
		headerHide.classList.remove('hide')
	}
	lastScroll = currentScrollY
})