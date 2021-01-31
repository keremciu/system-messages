'use strict';

var Fiber = require('fibers');
var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('sass');

function sassTask() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({ fiber: Fiber }).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
};

exports.default = sassTask;
exports.watch = function () {
  gulp.watch('./sass/**/*.scss', [sassTask]);
};