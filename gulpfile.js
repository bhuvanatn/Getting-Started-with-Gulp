const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

gulp.task('message', function(){
    return console.log("Gulp is running");
});

gulp.task('copyHtml', function(){
    gulp.src('src/*.html')
         .pipe(gulp.dest('dist'));
});

gulp.task('imageMin', () => 
    gulp.src('src/images/*')
         .pipe(imagemin())
         .pipe(gulp.dest('dist/images'))
);

gulp.task('minify', function(){
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});

gulp.task('sass', function(){
    gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'))
});

gulp.task('scripts', function(){
  gulp.src('src/js/*.js')
  .pipe(concat('main.js'))
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'))
});

gulp.task('default', [ 'message', 'copyHtml', 'imageMin', 'scripts', 'sass']);