const gulp = require("gulp");
const sass = require("gulp-sass");
const sassGlob = require("gulp-sass-glob");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");

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
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest("./"))
    );
  });
});
