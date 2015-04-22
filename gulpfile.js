var gulp         = require('gulp');
var gutil        = require('gulp-util');
var browserSync  = require('browser-sync');
var gulprm = require( 'gulp-rm' )

gulp.task('browserSync', function() {
    browserSync({
        server: { baseDir: "dist/" },
        options: { reloadDelay: 250 },
        notify: false
    });
});

gulp.task('html', function() {
  return gulp.src('src/*.html').pipe(browserSync.reload({stream: true})).on('error', gutil.log);
});

gulp.task('clean', function() {
  return gulp.src( 'dist', { read: false }).pipe( gulprm() )
});

gulp.task('default', ['browserSync'], function() {
    gulp.watch('src/*.html', ['html']);
});

// ToDo: https://www.npmjs.com/package/mkdirp 
// mkdirp 'dist/' , in case gulp creators/compilers does not make it for you
