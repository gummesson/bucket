/* Modules */

var gulp     = require('gulp');
var stylus   = require('gulp-stylus');
var prefixer = require('gulp-autoprefixer');
var minify   = require('gulp-minify-css');
var exec     = require('gulp-exec');

/* Tasks */

gulp.task('css', function() {
  return gulp
    .src('_assets/styl/style.styl')
    .pipe(stylus())
    .pipe(prefixer('last 2 versions'))
    .pipe(minify())
    .pipe(gulp.dest('assets/css/'));
});

gulp.task('img', function() {
  return gulp
    .src('_assets/img/favicon.ico')
    .pipe(gulp.dest('assets/img/'));
});

gulp.task('serve', function() {
  var jekyll = [
    'jekyll serve',
    '--watch',
    '--config _config.yml,_local.yml'
  ].join(' ');
  gulp.src('./').pipe(exec(jekyll));
});

gulp.task('watch', function() {
  gulp.watch('_assets/styl/**/*.styl', ['css']);
});

gulp.task('default', ['css', 'img', 'serve', 'watch']);
