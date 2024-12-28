document.addEventListener('DOMContentLoaded', function(){
    const navigation = document.querySelector('.navbar')
    const allNavItems = document.querySelectorAll('.nav-link')
    const  navList = document.querySelector('.navbar-collapse')
    function addShadow (){
        if (window.scrollY >= 100){
            navigation.classList.add('shadow-bg')
        } else {
            navigation.classList.remove('shadow-bg')
        }
    }

allNavItems.forEach(item => item.addEventListener('click', () => {
    navList.classList.remove('show')
}))

    window.addEventListener('scroll', addShadow)
})
