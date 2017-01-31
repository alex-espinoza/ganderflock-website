'use strict';

var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var cssnext = require('postcss-cssnext');
var cssnano = require('cssnano');
var browserSync = require('browser-sync').create();

gulp.task('serve', ['sass'], function() {
  browserSync.init({
    port: 8080,
    ui: {
      port: 8081
    },
    server: {
      baseDir: './',
      directory: true
    },
    ghostMode: false,
    notify: false
  });

  gulp.watch('sass/*.sass', ['sass']);
  gulp.watch('html/*.html').on('change', browserSync.reload);
});

gulp.task('sass', function() {
  var processors = [
    cssnext,
    //cssnano
  ];

  return gulp.src('sass/*.sass')
          .pipe(sass().on('error', sass.logError))
          .pipe(postcss(processors))
          .pipe(gulp.dest('./css/'))
          .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
