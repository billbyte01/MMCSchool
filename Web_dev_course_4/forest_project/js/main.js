// hiding/showing menu on mobile

const burgerLine = document.querySelector('.line')
const navMobile = document.querySelector('nav')
const navBurger = document.querySelector('.nav-burger')
const logoButton = document.querySelector('.logo a')
const navElements = document.querySelector('nav ul')

navBurger.addEventListener('click', () => {
	burgerLine.classList.toggle('burger-x')
	navMobile.classList.toggle('nav-show')
})

const closeMenu = () => {
	if (navMobile.classList.contains('nav-show')) {
		burgerLine.classList.remove('burger-x')
		navMobile.classList.remove('nav-show')
	}
}

;[navElements, logoButton].forEach((element) => {
	element.addEventListener('click', closeMenu)
})

// hiding/showing header when scrolling

const headerHide = document.querySelector('header')
let lastScroll = 0
window.addEventListener('scroll', () => {
	const currentScrollY = window.scrollY
	if (currentScrollY > lastScroll) {
		if (!navMobile.classList.contains('nav-show')) headerHide.classList.add('hide')
	} else {
		headerHide.classList.remove('hide')
	}
	lastScroll = currentScrollY
})
