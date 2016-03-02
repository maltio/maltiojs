var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

var PATH = {
  SRC:'./src',
  BUILD:'./build'
}

gulp.task('sass', function(){
  return gulp.src(PATH.SRC+'/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(PATH.SRC+'/css'))
    .pipe(gulp.dest(PATH.BUILD+'/css'));
});

gulp.task('copyjs', function(){
  return gulp.src(PATH.SRC+'/**/*.js')
      .pipe(uglify())
      .pipe(gulp.dest(PATH.BUILD));
});

gulp.task('html', function(){
  return gulp.src(PATH.SRC+'/**/*.html')
      .pipe(gulp.dest(PATH.BUILD));
});

gulp.task('watch', function () {
  gulp.watch(PATH.SRC+'/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['html','sass','watch','copyjs']);
