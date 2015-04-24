var browserSync = require('browser-sync');

module.exports = function () {
    browserSync({
      port: 3000,
      notify: false,
      server: {
        baseDir: ['dist']
      }
    });
};
