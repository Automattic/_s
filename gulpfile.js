var gulp = require('gulp');

var requireDir = require('require-dir');
requireDir('./_gulp');

gulp.task('dev', ['sass'], function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('dist', ['sass', 'autoprefix'], function () {
  gulp.watch('./sass/**/*.scss', ['sass', 'autoprefix']);
});
