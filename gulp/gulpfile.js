var gulp = require('gulp');
var gp_concat = require('gulp-concat');
var gp_rename = require('gulp-rename');
var gp_uglify = require('gulp-uglify');

gulp.task('js-bundle', function(){
  return gulp.src(['js/*.js'])
    .pipe(gp_concat('concat.js'))
    .pipe(gp_rename('aplicacao.min.js'))
    .pipe(gp_uglify())
    .pipe(gulp.dest('js/bundle/'))
});

gulp.task('default', function() {
  gulp.watch('js/*.js', gulp.series('js-bundle'));
});