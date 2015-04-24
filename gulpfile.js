var gulp = require('gulp');
var requireDir = require('require-dir');
var tasks = requireDir('./gulp');

// gulp.task('sass', tasks.sass);
gulp.task('serve:dev', tasks.serve.dev);
gulp.task('serve:dist', tasks.serve.dist);

gulp.task('default', ['serve:dist']);

// Splitting up Gulp tasks in separate files
// https://gist.github.com/thomastuts/a4dafc20d49662e4e13a

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// var gulp         = require('gulp');
// var gutil        = require('gulp-util');
// var browserSync  = require('browser-sync');
// var gulprm       = require('gulp-rm');
//
// gulp.task('browserSync', function() {
//     browserSync({
//         server: { baseDir: "dist/" },
//         options: { reloadDelay: 250 },
//         notify: false
//     });
// });
//
// gulp.task('html', function() {
//   return gulp.src('src/*.html').pipe(browserSync.reload({stream: true})).on('error', gutil.log);
// });
//
// gulp.task('clean', function() {
//   return gulp.src( 'dist/*', { read: false }).pipe( gulprm() )
// });
//
// gulp.task('dist:init', function(){
//   return gulp.src('src/*').pipe(gulp.dest('dist'));
// });
//
// gulp.task('default', ['browserSync'], function() {
//     gulp.watch('src/*.html', ['dist:init'], browserSync.reload);
// });

// ToDo: https://www.npmjs.com/package/mkdirp
// mkdirp 'dist/' , in case gulp creators/compilers does not make it for you
