var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var reload = browserSync.reload;
gulp.task("default", function() {
	browserSync.init({
		proxy:"http://127.0.0.1:3000",
		port:80
	});
	gulp.watch("**/*.*").on("change", reload);
});