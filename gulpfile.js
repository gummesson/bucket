/* Modules */

var gulp   = require('gulp');
var stylus = require('gulp-stylus');
var prefix = require('gulp-autoprefixer');
var pixrem = require('gulp-pixrem');
var minify = require('gulp-minify-css');
var exec   = require('gulp-exec');

/* Tasks */

gulp.task('css', function() {
  return gulp
    .src('_assets/styl/style.styl')
    .pipe(stylus())
    .pipe(prefix())
    .pipe(pixrem())
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
    '--config',
    '_config.yml,_local.yml'
  ].join(' ');
  gulp.src('./').pipe(exec(jekyll));
});

gulp.task('watch', function() {
  gulp.watch('_assets/styl/**/*.styl', ['css']);
});

gulp.task('default', [
  'css',
  'img',
  'serve',
  'watch'
]);
