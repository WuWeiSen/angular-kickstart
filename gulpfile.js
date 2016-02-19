'use strict';

var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();
var wiredep = require('wiredep').stream;
var runSequence = require('run-sequence');
var open = require('open');

var bowerData = require('./bower.json');

var paths = {
    scripts: [`${bowerData.appPath}/scripts/**/*.js`],
    styles: [`${bowerData.appPath}/styles/**/*.scss`],
    views: {
        main: `${bowerData.appPath}/index.html`,
        files: [`${bowerData.appPath}/views/**/*.html`]
    }
};
gulp.task('watch', () => {
    gulp.watch(['./app/**/*.html'],function() {
        gulp.src('./app/**/*.html')
            .pipe(plugins.connect.reload());
    })
    gulp.watch('bower.json', ['bower']);
});

gulp.task('bower', function () {
  gulp.src(paths.views.main)
    .pipe(wiredep({
      optional: `${bowerData.appPath}/bower_components`
    }))
    .pipe(gulp.dest(bowerData.appPath));
});

gulp.task('open:client', ['start:server'], function() {
    open('http://localhost:9500');
});


gulp.task('start:server', function() {
    plugins.connect.server({
        root: [bowerData.appPath],
        livereload: true,
        // Change this to '0.0.0.0' to access the server from outside.
        port: 9500,
    });
});


gulp.task('serve', function(cb) {
    runSequence('open:client', 'watch', cb);
});
