let todoInput
let errorInfo
let addBtn
let ulList
let newTodo

const main = () => {
	prepareDOMElements()
    prepareDOMEvents()
}
const prepareDOMElements = () => {
    todoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.todolist ul')
}
const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addNewTodo)
}

const addNewTodo = () => {
    if (todoInput.value !== '') {
        newTodo = document.createElement('li')
        newTodo.textContent = todoInput.value
        ulList.append(newTodo)
        todoInput.value = ''
        errorInfo.textContent = ''
    } else {
        errorInfo.textContent = 'Add a text!'
    }
}

const createToolsArea = () => {
    let newDiv = document.createElement('div')
    newDiv.classList.add('tools')
    let newButton1 = document.createElement('button')
    newButton1.classList.add('complete')
    newButton1.innerHTML = '<i class"fas fa-check"></i>'
    let newButton2 = document.createElement('button')
    newButton2.classList.add('edit')
    newButton2.textContent = 'EDIT'
    let newButton3 = document.createElement('button')
    newButton3.classList.add('delete')
    newButton3.innerHTML = '<i class"fas fa-times"></i>'
    newDiv.append(newButton1)
    newDiv.append(newButton2)
    newDiv.append(newButton3)
    console.log(newDiv);
}
createToolsArea()

document.addEventListener('DOMContentLoaded', main)