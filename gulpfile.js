var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifycss = require('gulp-minify-css'),
    notify = require('gulp-notify');

gulp.task('default', function() {
  return gulp.src('styles/sass/main.scss')
    .pipe(sass({ style: 'expanded', }))
    .pipe(gulp.dest('styles/css'))
    .pipe(minifycss())
    .pipe(notify({ message: 'Styles task complete' }));
});
