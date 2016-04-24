'use strict';

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
 
gulp.task('autoprefix', function () {
	return gulp.src('./style.css')
		.pipe(autoprefixer({
			browsers: ['last 5 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('./'));
});
