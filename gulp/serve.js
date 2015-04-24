var browserSync = require('browser-sync');

module.exports = {
  dev: function () {
    browserSync({
      port: 3000,
      notify: false,
      server: {
        baseDir: ['src', './']
      }
    });
  },
  dist: function () {
    browserSync({
      port: 3000,
      notify: false,
      server: {
        baseDir: ['dist', './']
      }
    });
  }
};
