const colors = ['red 🔴', 'green 🟢', 'blue 🔵']
console.log(colors.length)
colors.push('gold 🪙')
console.log(colors)

for (let i = 0; i < colors.length; i++) {
	console.log(colors[i])
}


function addNumbers(x, y) {
	console.log(x + y)
    function substractNumbers(x, y) {
        console.log(x - y)
        function multiplyNumbers(x, y) {
            console.log(x * y)
            function divideNumbers(x, y) {
                console.log(x / y)
            }
            divideNumbers(x, y)
        }
        multiplyNumbers(x, y)
    }
    substractNumbers(x, y)
}
addNumbers(5, 6)
