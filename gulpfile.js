var gulp          = require('gulp'),
    sass          = require('gulp-sass'),
    cleanCSS      = require('gulp-clean-css'),
    autoprefixer  = require('gulp-autoprefixer'),
    rename        = require('gulp-rename'),
    inject        = require('gulp-inject'),
    uglify        = require('gulp-uglify'),
    concat        = require('gulp-concat'),
    plumber       = require('gulp-plumber'),
    babel         = require('gulp-babel'),
    clean         = require('gulp-clean'),
    sourcemaps    = require('gulp-sourcemaps'),
    htmlmin       = require('gulp-html-minifier');

var src           = './src/',
    dist          = './dist/';

// #######################################
// BUILD AND MOVE HTML
gulp.task('templates', function(){
  gulp.src(dist + '*.html', { force: true })
    .pipe(clean());
  gulp.src(src + 'templates/*.html')
    .pipe(gulp.dest(dist));
});

// #######################################
// MOVE JSON FILE
gulp.task('json', function(){
  gulp.src(src + 'json/*.json')
    .pipe(gulp.dest(dist + 'json'));
});

// #######################################
// MINIFY IMAGES
gulp.task('images', function() {
  gulp.src(src + 'assets/images/*')
    .pipe(gulp.dest(dist + 'assets/images'));
  gulp.src(src + 'assets/images/sideImages/*')
    .pipe(gulp.dest(dist + 'assets/images/sideImages'));
});

// #######################################
// BUILD AND MINIFY CSS FROM SASS
gulp.task('scss', function(){
  gulp.src(src + 'scss/*.scss')
    .pipe(sourcemaps.init())
      .pipe(plumber())
      .pipe(sass())
      .pipe(autoprefixer())
      .pipe(rename({ basename: 'style' }))
      .pipe(cleanCSS())
      .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dist + 'css'));
});

// #######################################
// BUILD AND MINIFY JS
gulp.task('js', function(){
  gulp.src(src + 'js/*.js')
    .pipe(sourcemaps.init())
      .pipe(plumber())
      .pipe(concat('main.js'))
      .pipe(babel({
        presets: ['es2015'] }))
      .pipe(uglify())
      .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dist + 'js'));
});


// #######################################
// DEFAULT
// #######################################
gulp.task('default', ['templates', 'scss', 'images', 'json', 'js']);
