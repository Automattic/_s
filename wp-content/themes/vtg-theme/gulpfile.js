/**
 * Define extensions, paths
 */

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	prefix = require('gulp-autoprefixer'),
	minify = require('gulp-minify-css'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	jsHint = require('gulp-jshint'),
	notify = require('gulp-notify'),
	livereload = require('gulp-livereload'),
	imageOptim = require('gulp-imageoptim'),
	bower = require('gulp-bower'),
	path = {
		WATCH_JS: [
			'assets/js/*.js',
			'assets/js/**/*.js'
		],
		WATCH_CSS: [
			'assets/scss/*.scss',
			'assets/scss/**/*.scss'
		],
		JS: 'assets/js/',
		CSS: 'assets/scss/',
		IMG: 'assets/img/',
		FONT: 'assets/fonts/',
		VENDOR: 'assets/vendor/',
		BUILD: 'assets/build',
		DIST: 'assets/dist'
	};


/**
 * Install Tasks
 */

// Install Bower components
gulp.task('install', function() {
	return bower(path.VENDOR)
		.pipe(gulp.dest(path.VENDOR));
});


/**
 * Development Tasks
 */

// Compile Sass files
gulp.task('sass', function() {
	gulp.src([path.CSS + '*.scss', path.CSS + '**/*.scss'])
		.pipe(sass()
			.on('error', notify.onError({
				message: 'Sass failed. Check console for errors'
			}))
			.on('error', sass.logError))
		.pipe(prefix('last 1 version', '> 1%', 'ie >= 9'))
		.pipe(gulp.dest(path.BUILD))
		.pipe(livereload())
		.pipe(notify('Sass successfully compiled'));
});

// Lint JS
gulp.task('lint', function() {
	gulp.src([path.JS + '*.js', path.JS + '**/*.js'])
		.pipe(jsHint())
		.pipe(jsHint.reporter('default'))
			.on('error', notify.onError(function(file) {
				if (!file.jshint.success) {
					return 'JSHint failed. Check console for errors';
				}
			}));
});

// Compile JS
gulp.task('js', ['lint'], function() {
	gulp.src(path.JS)
		.pipe(concat('scripts.js'))
		.pipe(livereload())
		.pipe(gulp.dest(path.BUILD));
});

// Watch
gulp.task('watch', function() {
	gulp.watch(path.WATCH_JS, ['js']);
	gulp.watch(path.WATCH_CSS, ['sass']);
	
	livereload.listen();
});

// Default
gulp.task('default', ['sass', 'js']);


/**
 * Production Tasks
 */

// Concatenate, minify, move style files
gulp.task('buildCss', function() {
	gulp.src([path.BUILD + '/*.css', path.BUILD + '/**/*.css'])
		.pipe(rename({suffix: '.min'}))
    	.pipe(minify())
		.pipe(gulp.dest(path.DIST));
});

// Concatenate, minify, move script files
gulp.task('buildJs', function() {
	gulp.src([path.BUILD + '/*.js', path.BUILD + '/**/*.js'])
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(gulp.dest(path.DIST));
});

// Optimize images
gulp.task('compressImgs', function() {
	return gulp.src([path.IMG + '*.*', path.IMG + '**/*.*'])
		.pipe(imageOptim.optimize())
		.pipe(gulp.dest(path.IMG));
});

// Build
gulp.task('prod', ['buildCss', 'buildJs', 'compressImgs']);
