var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var reload = browserSync.reload;
gulp.task("default", function() {
    browserSync.init({
        server: {
            baseDir: "./",
        },
        port:80
    });
    gulp.watch("complete/**/*.*").on("change", reload);
    gulp.watch("exercise/**/*.*").on("change", reload);
});