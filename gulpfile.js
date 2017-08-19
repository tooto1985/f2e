var browserSync = require("browser-sync").create();
var bom = require("gulp-bom");
var chokidar = require("chokidar");
var debug = require("gulp-debug");
var gulp = require("gulp");
var gulpLoadPlugins = require("gulp-load-plugins");
var gulpsync = require("gulp-sync");
var plumber = require("gulp-plumber");
var proxy = require("proxy-middleware");
var rename = require("gulp-rename");
var sourcemaps = require("gulp-sourcemaps");
var uglify = require("gulp-uglify");
var sass = require("gulp-sass");
var imagemin = require("gulp-imagemin");
var cache = require("gulp-cache");
var gulpif = require("gulp-if");
var server = require("gulp-express");
var yargs = require("yargs").argv;
var find = require("find");
var crypto = require("crypto");
var path = require("path");
var fs = require("fs");
var url = require("url");
var reload = browserSync.reload;
var $ = gulpLoadPlugins();
var folders = (folders => {
    var names = fs.readdirSync(".");
    for (var i = 0; i < names.length; i++) {
        var name = names[i];
        var state = fs.statSync("./" + name);
        if (state.isDirectory() && name != "node_modules" && !name.startsWith(".")) {
            folders.push(name);
        }
    }
    return folders;
})([]);
var isDebug = yargs.isDebug == "true";
gulpsync(gulp);
function babel(path) {
    return gulp.src(path)
        .pipe(plumber()) // onerror do not stop
        .pipe(gulpif(!isDebug, sourcemaps.init())) // sourcemap init
        .pipe($.babel()) // ES6 to ES5
        .pipe(gulpif(!isDebug, uglify())) // minify js
        .pipe(bom()) // utf-8
        .pipe(rename(path => {
            path.basename = path.basename.replace(".es6", "");
        })) // rename .es6.js to .js
        .pipe(gulpif(!isDebug, sourcemaps.write("."))) // sourcemap write
        .pipe(debug({
            title: "es6:"
        })) // show filename
        .pipe(gulp.dest(file => {
            return file.base;
        })); //output file
}
gulp.task("babel", () => {
    return babel(folders.map(a => a + "/**/*.es6.js"));
});
function scss(path) {
    return gulp.src(path)
        .pipe(gulpif(!isDebug, sourcemaps.init())) // sourcemap init
        .pipe(sass.sync({
            includePaths: ["./"], // @import modules
            outputStyle: !isDebug ? "compressed" : "expanded",  // minify css
            errLogToConsole: true
        }).on("error", sass.logError))
        .pipe(gulpif(!isDebug, sourcemaps.write("./")))  // sourcemap write
        .pipe(rename(path => {
            path.basename = path.basename.replace(".cscc", ".css");
        })) // rename .cscc to .css
        .pipe(debug({
            title: "scss:"
        })) // show filename
        .pipe(gulp.dest(file => {
            return file.base;
        })); //output file
}
gulp.task("sass", () => {
    return scss(folders.map(a => a + "/**/*.scss"));
});
function image(path) {
    return gulp.src(path)
        .pipe(cache(imagemin({
            optimizationLevel: 5, //類型：Number 預設：3 取值範圍：0-7（優化等級）
            progressive: true, //類型：Boolean 預設：false 無損壓縮jpg圖片
            interlaced: true, //類型：Boolean 預設：false 隔行掃描gif進行渲染
            multipass: true //類型：Boolean 預設：false 多次優化svg直到完全優化
        })))
        .pipe(gulp.dest(file => {
            return file.base;
        })); //output file
}
gulp.task("image", () => {
    return image(folders.map(a => a + "/**/*.{png,jpg,gif,ico}"));
});
function defaultPage(defaultPage) {
    defaultPage = defaultPage || "index.html";
    return function (req, res, next) {
        if (req.url.lastIndexOf("/") !== req.url.length - 1 && !(req.url.split("/").pop().indexOf(".") > -1)) {
            res.writeHead(301, {
                location: req.url + "/"
            });
            res.end();
        } else if (req.url.lastIndexOf("/") === req.url.length - 1) {
            fs.exists("." + req.url + defaultPage, function (exists) {
                if (exists) {
                    var data = fs.readFileSync("." + req.url + defaultPage);
                    var hash = crypto.createHash('sha1').update(data).digest('base64');
                    if (req.headers['if-none-match'] == hash) {
                        res.writeHead(304);
                        res.end();
                        return;
                    }
                    res.writeHead(200, {
                        "content-type": "text/html",
                        "Etag": hash
                    });
                    res.write(data);
                    res.end();
                } else {
                    next();
                }
            })
        } else {
            next();
        }
    }
}
gulp.task("browserSync", () => {
    var proxyOptions = url.parse("http://localhost:3000/api");
    proxyOptions.route = "/api";
    browserSync.init({
        server: {
            baseDir: "./",
            directory: true,
            middleware: [proxy(proxyOptions), defaultPage("index.html")]
        },
        port: 8080
    });
});
gulp.task("watching", () => {
    folders.forEach(a => {
        chokidar.watch(a + "/**/*.es6.js").on("error", () => { }).on("all", (type, file) => {
            babel(file);
        });
        chokidar.watch(a + "/**/*.scss").on("error", () => { }).on("all", (type, file) => {
            scss(file);
            if (path.basename(file).startsWith("_")) {
                find.file(/^[^\_]*\.scss$/, path.join(__dirname, a), function (files) {
                    files.forEach(function (file) {
                        setTimeout(function () {
                            scss("./" + path.relative(path.join(__dirname), file));
                        }, 100);
                    });
                });
            }
        });
        gulp.watch(a + "/**/*.*").on("error", () => { }).on("change", reload);
    });
});
gulp.task("api", function () {
    if (fs.existsSync("./api/app.js")) {
        server.run(["app.js"], {
            cwd: "./api/"
        }, false);
    }
});

gulp.task("default", ["babel", "sass", "api", "browserSync", "watching"]);
gulp.task("noserver", ["babel", "sass", "watching"]);