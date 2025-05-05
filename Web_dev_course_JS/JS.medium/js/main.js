const ulList = document.createElement('ul')
const liItem = document.createElement('li')
liItem.textContent = 'hello'
document.body.appendChild(ulList)
ulList.appendChild(liItem)

const btn = document.querySelector('button')
// btn.outerHTML = '<li>123</li>'
// btn.innerHTML = '<li>123</li>'
// btn.innerText = '<li>123</li>'
btn.textContent = '<li>123</li>'