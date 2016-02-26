'use strict';

var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();
var wiredep = require('wiredep').stream;
var runSequence = require('run-sequence');
var open = require('open');
var args = require('get-gulp-args')();
var proxy = require('proxy-middleware');

var bowerData = require('./bower.json');
var buildEnv = args.env || args.buildEnv || 'dev';

var paths = {
    scripts: [`${bowerData.appPath}/scripts/**/*.js`],
    styles: [`${bowerData.appPath}/styles/**/*.scss`],
    views: {
        main: `${bowerData.appPath}/index.html`,
        files: [`${bowerData.appPath}/views/**/*.html`]
    }
};

var Logger = {
    green: (text) => {
        plugins.util.log(plugins.util.colors.green(text));
    },
    red: (text) => {
        plugins.util.log(plugins.util.colors.red(text));
    }
};

gulp.task('env', function(){
    Logger.green(`=== Build env.js with env '${buildEnv}'`);
    return gulp
            .src(`./config/${buildEnv}.js`)
            .pipe(plugins.rename('./env.js'))
            .pipe(gulp.dest('app/scripts'))
})

gulp.task('watch', function() {
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
        middleware: function(connect, opts) {
            var middlewares = [];
            var url = require('url');
            var proxy = require('proxy-middleware');
            var msPort = args.msPort || 3000;

            var mockServerProxy = function() {
                var proxyUrl = `http://127.0.0.1:${ args.msgPort || 3000 }`
                var proxyOptions = url.parse(proxyUrl);
                Logger.green(`Mock Server：${proxyUrl}`);
                proxyOptions.route = '/mockapi';
                return proxy(proxyOptions);
            };

            middlewares.push(mockServerProxy());

            return middlewares;
        }
    });
});

gulp.task('serve', function(cb) {
    runSequence('open:client', 'watch', cb);
});
