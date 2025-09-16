// hiding/showing menu on mobile

const burgerLine = document.querySelector('.line')
const navBurger = document.querySelector('.nav-burger')
const navMobile = document.querySelector('nav')

navBurger.addEventListener('click', () => {
	burgerLine.classList.toggle('burger-x')
	navMobile.classList.toggle('nav-hide')
})

// hiding/showing header when scrolling

const headerHide = document.querySelector('header')
let lastScroll = 0

window.addEventListener('scroll', () => {
	const currentScroll = window.scrollY
	if (window.scrollY > 80) {
		headerHide.style.transform = 'translateY(-100%)'
	} else {
		headerHide.style.transform = 'translateY(0)'
	}
	lastScroll = currentScroll
})
