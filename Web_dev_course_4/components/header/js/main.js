const burgerLine = document.querySelector('.line')
const navBurger = document.querySelector('.nav-burger')
const navMobile = document.querySelector('nav')

navBurger.addEventListener('click', () => {
	burgerLine.classList.toggle('burger-x')
    navMobile.classList.toggle('nav-hide')
})
