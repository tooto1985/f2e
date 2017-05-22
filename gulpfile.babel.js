var gulp = require("gulp");
var gulpsync = require("gulp-sync");
var gulpLoadPlugins = require("gulp-load-plugins");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");
var bom = require("gulp-bom");
var sourcemaps = require("gulp-sourcemaps");
var plumber = require("gulp-plumber");
var debug = require("gulp-debug");
var chokidar = require('chokidar');
gulpsync(gulp);
var $ = gulpLoadPlugins();
var path = ["complete/**/*.es6.js", "exercise/**/*.es6.js"];
function babel(path) {
    return gulp.src(path)
        .pipe(plumber()) // onerror don't stop
        .pipe(sourcemaps.init()) // sourcemap init
        .pipe($.babel()) // ES6 to ES5
        .pipe(uglify()) // minify js
        .pipe(bom()) // utf-8
        .pipe(rename(path => {
            path.basename = path.basename.replace(".es6", "");
        })) // rename .es6.js to .js
        .pipe(sourcemaps.write(".")) // sourcemap write
        .pipe(debug({
            title: 'debug:'
        })) // show filename
        .pipe(gulp.dest(file => {
            return file.base;
        })); //output file
}
gulp.task("babel", () => {
    return babel(path);
});
gulp.task("default", ["babel", "browserSync"]);
var browserSync = require("browser-sync").create();
var reload = browserSync.reload;
gulp.task("browserSync", function () {
    browserSync.init({
        server: {
            baseDir: "./",
            directory: true
        },
        port: 80,
        browser: "chrome"
    });
    chokidar.watch("complete/**/*.es6.js").on("all", function (type, file) {
        babel(file);
    });
    chokidar.watch("exercise/**/*.es6.js").on("all", function (type, file) {
        babel(file);
    });
    gulp.watch("complete/**/*.*").on("change", reload);
    gulp.watch("exercise/**/*.*").on("change", reload);
});