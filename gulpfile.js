let gulp = require("gulp");
let webserver = require("gulp-webserver");

gulp.task("serverStatic", () => {
    return gulp.src("./public")
        .pipe(webserver({
            port: 8000,
            open: true,
            livereload: true
        }))
})