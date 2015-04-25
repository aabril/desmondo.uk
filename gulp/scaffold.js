var gulp = require('gulp');

module.exports = function () {

    var paths = [
      'src/*',
      'src/**/*',
      'src/**/**/*'
    ];

    return gulp.src(paths).pipe(gulp.dest('dist'));
};
