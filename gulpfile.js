var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task(
  'compile',
  [
    'compile-es6',
    'compile-html'
  ]
);

gulp.task(
  'compile-es6',
  function() {
    gulp.src('src/**/*.js')
      .pipe(babel())
      .pipe(gulp.dest('app'));
  }
);

gulp.task(
  'compile-html',
  function() {
    gulp.src('src/**/*.html')
      .pipe(gulp.dest('app'));
  }
);

gulp.task(
  'watch',
  function() {
    gulp.watch('src/**/*', ['compile']);
  }
);
