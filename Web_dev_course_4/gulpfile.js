const { series, parallel } = require('gulp')

function saas(done) {
	console.log('SAAS compiling')
	done()
}

function html(done) {
	console.log('HTML minifying')
	done()
}

function liveServer(done) {
	console.log('Live Server running')
	done()
}

const mainFunctions = parallel(saas, html)
exports.default = series(mainFunctions, liveServer)
