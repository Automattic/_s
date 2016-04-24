'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
	gulp.src('./sass/style.scss')
		.pipe(sass()
			.on('error', sass.logError))
		.pipe(gulp.dest('./'));
});

gulp.task('sass-sync', function () {
	gulp.src('./sass/style.scss')
		.pipe(sass.sync()
			.on('error', sass.logError))
		.pipe(gulp.dest('./css'));
});
