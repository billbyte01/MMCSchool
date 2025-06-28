//creating objects ------------------------------------------------------------

const newUser = {
	name: 'Lisa',
	age: 23,
	'fav-color': 'red',
	car: {
		brand: 'Audi',
		model: 'A3',
		color: 'black',
		sound() {
			console.log('brum brum')
		},
	},
}

newUser.car.sound()

newUser.country = 'Poland'
newUser['fav-color'] = 'blue'

console.log(newUser)

const dogName = 'Drops'
const dogAge = 5

const dog = {
	name: dogName,
	age: dogAge,
	dogName: dogName,
	dogAge,
}

console.log(dog)

//for in loop ------------------------------------------------------------

for (const data in newUser) {
	console.log(data + ': ' + newUser[data])
}

//this ------------------------------------------------------------

const user = {
	name: 'Angela',
	showName() {
		console.log(this.name)
	},
}

user.showName()

//constructor ------------------------------------------------------------

function User(name, age) {
	this.name = name
	this.age = age

	this.hello = function () {
		console.log(`Hello ${this.name}`)
	}
}

const freshUser = new User('Lisa', 22)
const freshUser2 = new User('Lisa', 25)

console.log(freshUser, freshUser2)
freshUser.hello()

//prototype ------------------------------------------------------------

function User2(name, age) {
	this.name = name
	this.age = age
}

User2.prototype.hello = function () {
	console.log(`Hello ${this.name}`)
}

const xUser = new User2('Coli', 22)
const xUser2 = new User2('Bob', 25)

console.log(xUser, xUser2)
xUser.hello()

// task1 - calling prototype in addEventListener ------------------------------------------------------------

const button1 = document.querySelector('.btn-1')
const button2 = document.querySelector('.btn-2')
const button3 = document.querySelector('.btn-3')
const p = document.querySelector('p')

function Dish(name, price) {
	this.name = name
	this.price = price
}

Dish.prototype.about = function () {
	console.log(`${this.name} costs ${this.price}zł`)
}

const dish1 = new Dish('bigos', 32)
const dish2 = new Dish('schabowy', 44)
const dish3 = new Dish('pierogi', 34)

button1.addEventListener('click', () => dish1.about())
button2.addEventListener('click', () => dish2.about())
button3.addEventListener('click', () => dish3.about())

//this ------------------------------------------------------------

