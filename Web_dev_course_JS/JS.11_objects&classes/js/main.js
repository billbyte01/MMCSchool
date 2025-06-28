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

class User {
	constructor(name, age) {
		this.name = name
		this.age = age

		this.hello = function () {
			console.log(`Hello ${this.name}`)
		}
	}
}

const freshUser = new User('Lisa', 22)
const freshUser2 = new User('Lisa', 25)

console.log(freshUser, freshUser2)
freshUser.hello()

//prototype ------------------------------------------------------------

class User2 {
	constructor(name, age) {
		this.name = name
		this.age = age
	}
	hello() {
		console.log(`Hello ${this.name}`)
	}
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

class Dish {
	constructor(name, price) {
		this.name = name
		this.price = price
	}
	about() {
		console.log(`${this.name} costs ${this.price} zł`)
	}
}


const dish1 = new Dish('bigos', 32)
const dish2 = new Dish('schabowy', 44)
const dish3 = new Dish('pierogi', 34)

button1.addEventListener('click', () => dish1.about())
button2.addEventListener('click', () => dish2.about())
button3.addEventListener('click', () => dish3.about())

//bind ------------------------------------------------------------

function test() {
	console.log(this.name)
}

const car1 = {
	name: 'Audi',
}

test.bind(car1)()

//call & apply ------------------------------------------------------------

const movie = {
	title: 'Avengers',
}

function showMovie(price, cinema) {
	console.log(`Film ${this.title}, price: ${price}, cinema: ${cinema}`)
}

showMovie(30, 'SuperCinema')
showMovie.call(movie, 35, 'SuperKINO2')

const movieData = [35, 'SuperKINO3']
showMovie.apply(movie, movieData)

//classes ------------------------------------------------------------

// function Person(name, age) {
// 	this.name = name
// 	this.age = age
// }

// Person.prototype.sayHi = function () {
// console.log(`Hi! I am ${this.name} and I am ${this.age}`)
// }

class Person {
	constructor(name, age) {
		this.name = name
		this.age = age
	}
	sayHi() {
		console.log(`Hi! I am ${this.name} and I am ${this.age}`)
	}
}

const person1 = new Person('Sofomir', '333')
person1.sayHi

//extends & super ------------------------------------------------------------

class Animal {
	constructor(animalName) {
		this.name = animalName
	}

	sound() {
		console.log(`This animal says 'ding ding'`);
	}
}

class Doggy extends Animal {
	constructor(animalName, animalAge) {
		super(animalName)
		this.age = animalAge
	}
}

class Catty extends Animal {
	constructor(animalName, animalAge) {
		super(animalName)
		this.age = animalAge
	}

	sound() {
		console.log(`This animal says 'miau mioa'`);
	}
}

const doggy = new Doggy('Drops', 55)
const catty = new Catty('Dips', 222)

console.log(doggy);
console.log(catty);
catty.sound()

//Object.assign() ------------------------------------------------------------

const userOne = {
	name: 'Lily',
	age: 11,
}

const userTwo = {
	name: 'Losaba',
	type: 'person',
}

const userInfo = Object.assign({}, userOne, userTwo)
console.log(userInfo);
console.log(userOne);
console.log(userTwo);

//destructurization - objects ------------------------------------------------------------
const lastPerson = {
	name: 'Lili',
	age: 11,
	job: 'DJ',
	car: {
		brand: 'Dodge',
		model: 'Viper',
	}
}

const showInfo = ({job, name, age}) => {
	console.log(`${name} works as ${job} and is ${age}`);
}
showInfo(lastPerson)

const showInfo2 = ({car: {brand, model}}) => {
	console.log(`Her car is ${brand} ${model}`);
}
showInfo2(lastPerson)

const showInfo3 = () => {
	const {car: {brand, model}} = lastPerson
	console.log(`Her car is ${brand} ${model}`);
}
showInfo3()

//destructurization - tables ------------------------------------------------------------

const colors = ['red', 'green', 'blue']

const firstColor = colors[0]
const secondColor = colors[1]

const [first, second] = colors

console.log(firstColor, secondColor);
console.log(first, second);

const [,,abcd] = colors
console.log(abcd);