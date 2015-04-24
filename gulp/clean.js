var gulp = require('gulp');
var gulprm = require('gulp-rm');

module.exports = function () {
    return gulp.src( 'dist/*', { read: false }).pipe( gulprm() );
};
