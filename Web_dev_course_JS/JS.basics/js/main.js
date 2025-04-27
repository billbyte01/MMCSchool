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