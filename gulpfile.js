var gulp = require('gulp');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');
var pug = require('gulp-pug');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var gcmq = require('gulp-group-css-media-queries');
var rename = require('gulp-rename');
var reload = browserSync.reload;

// pug
gulp.task('pug', function() {
  return gulp
    .src('src/pug/*.pug')
    .pipe(
      pug({
        pretty: true
      })
    )
    .on('error', console.log)
    .pipe(gulp.dest('dist'));
});

// scss
gulp.task('scss', function() {
  return gulp
    .src('src/scss/turbo.scss')
    .pipe(
      sass({
        outputStyle: 'expanded'
      }).on('error', sass.logError)
    )
    .pipe(
      autoprefixer({
        browsers: ['> 1%']
      })
    )
    .pipe(gcmq())
    .pipe(gulp.dest('dist'));
});

// cleancss
gulp.task('cleancss', function() {
  return gulp
    .src('dist/turbo.css')
    .pipe(cleanCSS())
    .pipe(
      rename({
        suffix: '.min'
      })
    )
    .pipe(gulp.dest('dist'));
});

// style
gulp.task('style', function() {
  runSequence('scss', 'cleancss');
});

// build
gulp.task('build', ['pug', 'style']);

// default (watch)
gulp.task('default', ['build'], function() {
  browserSync({
    notify: false,
    port: 9000,
    logLevel: 'silent',
    server: {
      baseDir: ['dist']
    }
  });

  gulp.watch(['dist/*.html', 'dist/*.css']).on('change', reload);
  gulp.watch(['src/pug/**/*.pug', 'src/scss/**/*.scss'], ['build']);
});
