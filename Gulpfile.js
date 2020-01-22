'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

function formatStyles() {
  return gulp.src('themes/flat-blog/css/custom.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('themes/flat-blog/css'));
}

function watch() {
  return gulp.watch('themes/flat-blog/css/custom.scss', formatStyles);
}

exports.default = formatStyles;
exports.formatStyles = formatStyles;
exports.watch = watch;
exports.buildAndWatch = gulp.series(formatStyles, watch);
