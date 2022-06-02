const gulp = require('gulp');
const ts = require('gulp-typescript');
const clean = require('gulp-clean');
const rename = require('gulp-rename');
const webpack = require('gulp-webpack');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

const tsconfig = require('./tsconfig.json');
const webpackConfig = require('./webpack.config.js');


// Converts ts to js
gulp.task('ts', () => {
  return gulp.src('./src/**/*.ts')
    .pipe(ts(tsconfig.compilerOptions))
    .pipe(gulp.dest('./dist/js'));
});

// Creates js bundle from several js files
gulp.task('build', () => {
  return webpack(webpackConfig)
    .pipe(rename('app.js'))
    .pipe(gulp.dest('./dist'))
});

// Converts scss to css
gulp.task('scss', () => {
  return gulp.src('./src/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist'));
});

// Transfers index
gulp.task('index', () => {
  return gulp.src(['./src/index.html'])
    .pipe(gulp.dest('./dist'));
});

// Removes tmp files
gulp.task('clean', () => {
  return gulp.src('./dist/js')
    .pipe(clean());
});


// Watch scss files
gulp.task('watch-scss', () => {
  return gulp.watch('./src/**/*.scss', gulp.series('scss'));
});

// Watch html files
gulp.task('watch-html', () => {
  return gulp.watch('./src/index.html', gulp.series('index'));
});

// Watch ts files
gulp.task('watch-ts', () => {
  return gulp.watch('./src/**/*.ts', gulp.series('ts', 'build', 'clean'));
});

// Run all together
gulp.task('default', gulp.series(
  'ts',
  'scss',
  'index',
  'build',
  'clean',
  gulp.parallel( 'watch-scss', 'watch-html', 'watch-ts'),
  cb => cb()
));