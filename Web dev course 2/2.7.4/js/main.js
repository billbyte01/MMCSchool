const showClass = document.querySelector('.item1')
const buttonChange = document.querySelector('.arrow')
function showChange (){
    showClass.classList.toggle('show')
}
buttonChange.addEventListener('click', showChange)
