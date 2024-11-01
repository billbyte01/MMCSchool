const table = [1, 1, 2, 3, 5, 8]

for (let i = 0; i < table.length; i++) {
	console.log(table[i])
}

function parameters(x, y, z) {
	console.log(x * y * z)
}
parameters(table[1], table[3], table[5])

if (table.length > 5) {
	console.log('true')
} else {
	console.log('false')
}

console.log(`Table with numbers has ${table.length} elements.`)
