var gulp = require('gulp');
var browserSync = require('browser-sync');
var requireDir = require('require-dir');
var tasks = requireDir('./gulp');

gulp.task('serve', tasks.serve);
gulp.task('clean', tasks.clean);
gulp.task('scaffold', tasks.scaffold);

gulp.task('default', ['scaffold','serve'], function(){

    var paths = [
        './src/*.html',
        './src/assets/css/*',
        './src/assets/js/*'
    ];

    gulp.watch(paths, ['scaffold', browserSync.reload]);
});

// ToDo: gulp deploy via ssh/sftp to my server, reading the personal info from a config.json file
