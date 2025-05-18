// JS8 - DOWNLOADING ELEMENTS / ADDING ELEMENTS / append, outerHTML/innerHTML/innerText/textContent, remove/add/toggle, querySelector, addEventLsitener, bubbling & capturing, stopPropagation

/*
const ulList = document.createElement('ul')
const liItem = document.createElement('li')
liItem.textContent = 'hello'
document.body.appendChild(ulList)
ulList.append(liItem)

const btn = document.querySelector('button')
// btn.outerHTML = '<li>123</li>'
// btn.innerHTML = '<li>123</li>'
// btn.innerText = '<li>123</li>'
btn.textContent = '<li>123</li>'

// document.body.removeChild(btn)
// btn.remove()

const testClick = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.classList);
    console.log(e.target.offsetTop);
}
btn.addEventListener('click', testClick)
*/

/*
const addBtn = document.querySelector('.add')
const removeBtn = document.querySelector('.remove')
const toggleBtn = document.querySelector('.toggle')
const text = document.querySelector('p')

const addClass = () => {
    text.classList.add('test')
}

const removeClass = () => {
    text.classList.remove('test')
}

const toggleClass = () => {
    text.classList.toggle('test')
}

toggleBtn.addEventListener('click', toggleClass)
addBtn.addEventListener('click', addClass)
removeBtn.addEventListener('click', removeClass)
*/

//JS8 - TASK1
/*
const ulList = document.createElement('ul')
document.body.appendChild(ulList)

for (let i = 0; i < 10; i++) {
	const liItem = document.createElement('li')
	liItem.textContent = i + 1
	ulList.append(liItem)
}
console.log(ulList)
// const lastElement = ulList.lastElementChild
const lastElement = ulList.querySelector('li:last-child')
lastElement.textContent = 'I am the last element.'

lastElement.style.color = 'white'
lastElement.style.backgroundColor = 'royalblue'
lastElement.style.padding = '20px 40px'
lastElement.style.fontSize = '48px'
*/

//JS8 - TASK2
/*
const square = document.querySelector('.square')
const p1 = document.querySelector('.p1')
const p2 = document.querySelector('.p2')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')

const helloLog = () => {
    console.log('hello');
}

const redColor = () => {
    square.style.backgroundColor = "red"
}
const blueColor = () => {
    square.style.backgroundColor = "blue"
}

const pSwitch = () => {
    p1.classList.toggle('show')
    p2.classList.toggle('show')
}

btn1.addEventListener('dblclick', helloLog)
btn2.addEventListener('click', pSwitch);
square.addEventListener('mouseenter', redColor)
square.addEventListener('mouseleave', blueColor)
*/

//JS 9 -> OTHER
/*
-> setTimeout/setInterval
-> alert, confimr, prompt
-> console.log/warn/error
-> Math object
-> adding atributes
-> data atributes
-> previousElementSibling/nextElementSibling/parentElement
-> closest!
-> console logs: log/error/warn/table
*/

// JS9 - TASK1
/*
//'use strict'
const imgEl = document.querySelector('img')
imgEl.setAttribute('src', 'https://cdn.pixabay.com/photo/2016/09/24/03/20/man-1690965_1280.jpg')
imgEl.setAttribute('alt', 'smiling man')

//setTimeout(() => {
setInterval(() => {
	console.log('anything')
}, "2000")
*/

// JS9 - TASK2
/*
const liItems = document.querySelectorAll('li')
for (let i = 0; i < liItems.length; i++) {
	liItems[i].textContent = `${i + 1}`
	// liItems[i].setAttribute('data-id', `${i + 1}`)
    liItems[i].dataset.id = `${i + 1}`
}
liItems.forEach((li) => console.log(li.outerHTML))
const third = document.querySelector('li[data-id="3"]')
console.log(third)
// const liItems3parent = third.parentElement.parentElement
const liItems3parent = third.closest('div')
console.log(liItems3parent)
*/
