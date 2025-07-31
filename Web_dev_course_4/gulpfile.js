const gulp = require('gulp')

//we do not use it anymore:
// gulp.task('test', function (done) {
//     console.log('test');
//     done()
// })

//we should use this:
function test2(cb) {
    console.log('test2');
    cb()
}

exports.test2 = test2