const name = 'Sofomir'
const food = 'Bigos'
const age = 24

console.log(`Hello, I am ${name}, love to eat ${food} and have ${age} years.`);

const favColor = 'red' //we use camelCase + eng language
// const 1favtest = 'red' - we do not add numbers at the beginning
// const fav-test = 'red' - we do not use '-'
// const fav_test = 'red' - it is ok but we use camelCase
// const User = 'red' - reserved for classes
// const USER = 'red' - for most important variables
// reserved names - not for variables: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words

const p = document.createElement('p')
p.textContent = 'A am a new element created in JS.'
document.body.append(p)

//data promitive types - STRING, NUMBER, BOOLEN and NULL/UNDEFINED
const testNull = null
let testUndefined
console.log(testUndefined);
console.log(testNull);
//when there is nothing defined, JS return 'undefined', 'null' is always added by people, but both 'null' and 'undefined' mean the same - nothing

//data non-primitive types - OBJECTS, ARRAYS

document.querySelector('body').addEventListener('click', () => {console.log('Greetings!')})

let score = 15 % 2
if (score % 2 == 0) {
console.log('even');
} else {
console.log('odd');
}

let num1 = 8
num1++
num1++
console.log(num1);

let x = 5
let y = 10
console.log(x *= y);
console.log(x /= y);