//DATA TYPES & OPERATORS

/*
const xd1 = 123
const xd2 = '321'
console.log(`xd1: ${xd1}`);
console.log(`xd2: ${xd2}`);
console.log(xd1 + '' + xd2)
console.log(`${xd1}${xd2}`) //template string
console.log(`Type of xd1: ${typeof xd1}`)
console.log(`Type of xd2: ${typeof xd2}`)

const quote = 'He said: "whymyeyesya"'
console.log(quote);
console.log(`Phrase lenght: ${quote.length}`);
*/

/*
ZADANIE z JS.2
 Metody do wykorzystania:
 charAt()
 includes()
 replace()* podchwytliwe 🙂 
 slice()
 split()
 toLowerCase()
 toUpperCase()
*/

/*
const text1 = 'powiększ mnie!'
const text11 = text1.toUpperCase()
console.log(text11);
const text2 = 'ZAPISZ MNIE MAŁYMI LITERAMI'
const text21 = text2.toLowerCase()
console.log(text21);
const text3 = '$#%#^ wytnij te dziwne znaki na początku!'
const text31 = text3.slice(6)
console.log(text31);
const text4 = 'sprawdź, czy zawieram słowo "czy"'
const text41 = text4.includes("czy")
console.log(text41);
const text5 = 'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj"'
const text51 = text5.charAt("2")
console.log(text51);
const text6 = 'pies zamień każde słowo pies, na słowo kot pies'
const text61 = text6.replaceAll("pies", "kot")
console.log(text61);
const text7 = 'podziel, ten, string, od, przecinków'
const text71 = text7.split(',')
console.log(text71);

const colors = ['red', 'blue', 'green']
console.log(colors);

function testXD() {
    console.log('LOL');
}
testXD()

const person = {
    name: "Klaudia",
    age: 23,
    favColor: null,
}
console.log(person);
*/

/*
const x = 50
const y = 30
if (x > y) {
    console.log(`${x} > ${y}`);
}
*/

/*
const color = 'blue'
const newColor = 'green'
if (color === newColor) {
    console.log('Colors are the same');
} else {
    console.log('Colors are not the same');
}
*/

//CONDITIONAL INSTRUCTIONS

/*
const x = 50
const y = 50
if (x > y) {
    console.log('x > y');
} else if (x == y) {
    console.log('x = y');
} else {
    console.log('x < y');
}
*/

/*
const promo = '10%'
switch (promo) {
  case "10%":
    console.log(`Today we have ${promo} discount!`);
    break;
  case "20%":
    console.log(`Today we have ${promo} discount!`);
    break;
  case "30%":
    console.log(`Today we have ${promo} discount!`);
    break;
  default:
    console.log(`Sorry, there are no discounts.`);
}
*/

/*
const x = 10
// if (x % 2 === 0) {
//     console.log('Liczba jest parzysta');
// } else {
//     console.log('Liczba nie jest parzysta');
// }
const check = (x % 2 === 0) ? 'Liczba jest parzysta' : 'Liczba jest nieparzysta'
console.log(check);
*/

/*
const x = 30
let test
if (x >= 100) {
    text = 'x > 100'
} else if (x <= 100 && x >= 30) {
    text = 'x ~'
} else {
    text = 'x < 30'
}
console.log(text.toUpperCase());
*/

//LOOPS

/*
const cities = ['town1', 'town2', 'town3', 'town4']
for (let ekis = 0; ekis < cities.length; ekis++) {
    console.log(cities[ekis]);
}

let x = 0
while (x < 10) {
    x = x + 2;
    console.log(x);
}

let x = 20
do {
	x = x - 3
} while (x >= 0)
console.log(x)

const cities = [5, 8, 10, 23, 48, 60]
for (const celement of cities) {
	city = celement / 5
	console.log(city)
}
console.log('----')
for (const celement of cities) {
	city = celement % 2
	if ((city === 0)) {
		console.log(`%cLiczba ${celement} jest parzysta.`, 'background-color: gold; color: black')
	} else {
        console.log(`Liczba ${celement} jest nieparzysta.`)
    }
}

*/

//TABLES

/*
const tableX = [1, 2, 3, 4, 5]
const tableY = [11, 22, 33, 44, 55]
const tableZ = [...tableX, ...tableY]
console.log(tableZ);
*/

/*
const numbers = [0, 0, 1, 1, 2, 2, 2]
const colors = ['red', 'green', 'blue', true, 123]
const cars = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', '🤷‍♂️', '👀']
const numbers2 = numbers.slice(0,2)
const numbers3 = numbers.slice(-3)
console.log(numbers2)
console.log(numbers3)
randomStuff = colors.splice(-2)
console.log(colors)
console.log(randomStuff)
newCars = cars.splice(2,4,'test')
console.log(cars)
console.log(newCars)
*/

/*
const letters = ['c', 'd']
letters.unshift('a', 'b')
letters.push('e', 'f')
console.log(letters)
console.log(letters.includes('c'))
*/

/*
const numbers = [1, 2, 3]
const food = ['A', 'B', 'C']
const foodandnumbers = numbers.concat(food)
console.log(foodandnumbers)
const foodandnumbers2 = [...food, ...numbers]
console.log(foodandnumbers2)
*/

/*
const numbers = [1, 5, 13, 26, 48]
const numbers2 = numbers.map((x) => x * 5)
console.log(numbers);
console.log(numbers2);
for (let i = 0; i < numbers2.length; i++){
    if(numbers2[i] % 2 === 0){
        console.log(`even number: ${numbers2[i]}`);
    } else {
        console.log(`odd number ${numbers2[i]}`);
    }
}
*/

/*
const colors = ['blue']
colors.unshift('red')
colors.push('green')
for (const color of colors) {
	console.log(`My favorite color is %c${color}`, 'text-transform:uppercase')
}
for (const color of colors) {
	console.log(color.charAt(0).toUpperCase() + color.slice(1))
}
*/

/*
const cars = 'Audi,Mercedes,BMW,Nissan,Dodge'
const carsTable = cars.split(',')
console.log(carsTable);
if(carsTable.length > 3){
    console.log('It is OK');
} else {
    console.log('Itr is NOT OK');
}
if (carsTable.includes('Audi')){
    carsTable.push('Volvo')
} else {
    carsTable.pop(-1)
}
console.log(carsTable);
*/

//FUNCTIONS

/*
const test = function (parameter1, parameter2) {
    console.log(`Hello, my name is ${parameter1} and I am ${parameter2} years old.`);
}
test('Argument',12)
*/

//ANONYMUS FUNCTION => we should not use it
/*
const heading = document.querySelector('h1')
heading.addEventListener('click', function(){
    console.log("You clicked me!");
})
*/

//ARROW FUNCTIONS
/*
const arrowFunction = (test) => {
	console.log(test)
}
arrowFunction('test')

const toDoList = (shopping, housework) => console.log(`I need to do %c${shopping} %cand %c${housework}`, 'color:green', 'color:white', 'color: red')
toDoList('shopping', 'clean my car')

const days = ['MON', 'TUES', 'WED']
const daysLog = days.forEach((day) => console.log(day))
*/

//DEFAULT PARAMETERS in FUNCTIONS
/*
const hello = (name = 'dear user') => {
    console.log(`Hello ${name}`);
}
hello()
*/

//REST
/*
const numbers = (x, y, ...z) => {
	console.log(x, y, z)
}
numbers(12, 23, 433, 23, 35, 33)
*/

//function task1
/*
const add = (param1, param2) => {
	score = param1 + param2
	score % 2 === 0 ? even(score) : odd(score)
}
const even = (finalNumber) => {
	console.log(`Number ${finalNumber} is even`)
}
const odd = (finalNumber) => {
	console.log(`Number ${finalNumber} is odd`)
}
*/

//function task2
/*
let celcius
let temp
const fahrenheit = (param1) => {
    celcius = param1
    temp = celcius * 1.8 + 32
    console.log(`${celcius}°C = ${temp}°F`);
}
fahrenheit(10)
*/

//function task3
/*
const num = 10
const numbers = []
for(let i = 0; i < num; i++){
    numbers.push(i)
}
const checkNumbers = (param1) => {
    if(param1 % 3 === 0 && param1 !== 0){
        console.log(`${param1} divides 3`);
    } else {
        console.log(`${param1} not divides 3 or is 0`);
    }
}
numbers.forEach(checkNumbers)
*/