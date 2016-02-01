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
	imagemin = require('gulp-imagemin'),
	browserify = require('gulp-browserify'),
	isDevMode = true,
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
 * Development Tasks
 */

// Compile Sass files
gulp.task('sass', function() {
	gulp.src(path.WATCH_CSS)
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
	gulp.src(path.WATCH_JS)
		.pipe(jsHint())
		.pipe(jsHint.reporter('default'))
			.on('error', notify.onError(function(file) {
				if (!file.jshint.success) {
					return 'JSHint failed. Check console for errors';
				}
			}));
});

// Minify, move script files
gulp.task('browserifyJs', ['lint'], function() {
	gulp.src(path.JS + 'entry.js')
		.pipe(browserify({
			insertGlobals: true,
			debug: isDevMode
		}))
		.pipe(rename('scripts.js'))
		.pipe(gulp.dest(path.BUILD));
});

// Compile JS
gulp.task('js', ['lint'], function() {
	gulp.src(['!assets/js/entry.js'].concat(path.WATCH_JS))
		.pipe(gulp.dest(path.BUILD));
});

// Watch
gulp.task('watch', function() {
	gulp.watch(path.WATCH_JS, ['js', 'browserifyJs']);
	gulp.watch(path.WATCH_CSS, ['sass']);

	livereload.listen();
});

// Default
gulp.task('default', ['sass', 'js', 'browserifyJs']);


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

// Minify, move script files
gulp.task('buildBrowserifyJs', ['lint'], function() {
	gulp.src(path.JS + 'entry.js')
		.pipe(browserify({
			insertGlobals: true,
			debug: !isDevMode
		}))
		.pipe(rename('scripts.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest(path.DIST));
});

gulp.task('buildJs', ['lint', 'buildBrowserifyJs'], function() {
	gulp.src(['!assets/js/entry.js'].concat(path.WATCH_JS))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(gulp.dest(path.DIST));
});

// Optimize images
gulp.task('compressImgs', function() {
	return gulp.src([path.IMG + '*.*', path.IMG + '**/*.*'])
        .pipe(imagemin({ progressive: true }))
        .pipe(gulp.dest(path.IMG));
});

// Build
gulp.task('stage', ['buildCss', 'buildJs']);
gulp.task('prod', ['buildCss', 'buildJs', 'compressImgs']);
