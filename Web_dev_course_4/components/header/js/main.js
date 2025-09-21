// hiding/showing menu on mobile

const burgerLine = document.querySelector('.line')
const navBurger = document.querySelector('.nav-burger')
const navMobile = document.querySelector('nav')

navBurger.addEventListener('click', () => {
	burgerLine.classList.toggle('burger-x')
	navMobile.classList.toggle('nav-show')
})

// hiding/showing header when scrolling

const headerHide = document.querySelector('header')
let lastScroll = 0
window.addEventListener('scroll', () => {
	console.log(window.scrollY)
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
