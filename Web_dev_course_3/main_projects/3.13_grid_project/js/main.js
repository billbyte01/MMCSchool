const navMobile = document.querySelector('.nav-mobile')
const navMobileElement = document.querySelectorAll('.nav-mobile .nav__link')
const navBtn = document.querySelector('.hamburger')
const footerYear = document.querySelector('.footer__year')

// const handleNav = () => {
navBtn.addEventListener('click', () => {
	navBtn.classList.toggle('is-active')
	navMobile.classList.toggle('nav-mobile--active')
})
// navBtn.addEventListener('click', handleNav)

window.addEventListener('scroll', () => {
	navBtn.classList.remove('is-active');
	navMobile.classList.remove('nav-mobile--active');
  });

//hiding navigation mobile after click
navMobileElement.forEach((nav) => {
	// nav.addEventListener('click', () => {
	const handleNav = () => {
		navBtn.classList.remove('is-active')
		navMobile.classList.remove('nav-mobile--active')
	}
	nav.addEventListener('click', handleNav)
})

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
handleCurrentYear()
