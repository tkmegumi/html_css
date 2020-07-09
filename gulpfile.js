const gulp = require("gulp");
const sass = require("gulp-sass");
const sassGlob = require("gulp-sass-glob");

gulp.task("default", function() {
  return gulp.watch("./sass/*.scss", function() {
    return (
      gulp
        .src("./style.scss")
        .pipe(sassGlob())
        .pipe(
          sass({
            outputStyle: "expanded"
          })
            .on("error", sass.logError)
        )
        .pipe(sassGlob())
        .pipe(gulp.dest("./"))
    );
  });
});