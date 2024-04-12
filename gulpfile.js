const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function style() {
  return gulp
    .src("./src/style/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest("./dist/css"));
}

exports.default = style;
exports.watch = function () {
  gulp.watch("./src/style/*.scss", gulp.parallel(style));
};
