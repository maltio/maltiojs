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
    .pipe(gulp.dest(PATH.BUILD+'/css'));
});

gulp.task('js', function(){
  return gulp.src(PATH.SRC+'**/*.js')
      .pipe(uglify())
      .pipe(gulp.dest(PATH.BUILD));
});

gulp.task('watch', function () {
  gulp.watch(PATH.SRC+'/sass/*.scss', ['sass']);
});

gulp.task('default', ['sass']);
