var gulp         = require('gulp');
var gutil        = require('gulp-util');
var browserSync  = require('browser-sync');
var gulprm       = require('gulp-rm');

gulp.task('server', function() {
    browserSync('dist/*', {
        server: { baseDir: "dist/" },
        options: { reloadDelay: 250 },
        notify: false
    });
});

gulp.task('html', function() {
  return gulp.src('dist/*.html').pipe(browserSync.reload({stream: true})).on('error', gutil.log);
});

gulp.task('clean', function() {
  return gulp.src( 'dist/*', { read: false }).pipe( gulprm() )
});

gulp.task('dist:init', function(){
  return gulp.src('src/*').pipe(gulp.dest('dist'));
});

gulp.task('default', function() {
    gulp.watch('src/*.html', ['dist:init', 'server']);
});

// ToDo: https://www.npmjs.com/package/mkdirp
// mkdirp 'dist/' , in case gulp creators/compilers does not make it for you
