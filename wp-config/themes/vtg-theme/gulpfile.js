/**
 * Define extensions
 */
var gulp = require('gulp'),
	jsMinify = require('gulp-uglify'),
	joinFiles = require('gulp-concat'),
	gutil = require('gulp-util'),
	jsHint = require('gulp-jshint'),
	notify = require('gulp-notify'),
	cssMinify = require('gulp-minify-css'),
	livereload = require('gulp-livereload'),
	rename = require('gulp-rename'),
	compass = require('gulp-compass'),
	bower = require('gulp-bower'),
	// map = require('map-stream'),
	sourcemaps = require('gulp-sourcemaps'),
	files = {
		js: [
			'assets/js/*.js',
			'assets/js/**/*.js'
		],
		css: [
			'assets/css/*.css',
			'assets/css/**/*.css'
		],
		scss: [
			'assets/scss/*.scss',
			'assets/scss/**/*.scss'
		],
		img: 'assets/img/**/*',
		// Assumes linting and concatenation already performed
		build: {
			css: [
				'assets/build/*.css',
				'assets/build/**/*.css'
			],
			js: [
				'assets/build/*.js',
				'assets/build/**/*.js'
			]
		},
		// Assumes concatenation and removal of comments has been performed
		dist: {
			css: 'assets/dist/styles.min.css',
			js: 'assets/dist/scripts.min.js'	
		}
	},
	allPathsToWatch = [
		'assets/js/*.js',
		'assets/js/**/*.js',
		'assets/scss/*.scss',
		'assets/scss/**/*.scss',
		'assets/img/**/*'
	],
	paths = {
		css: 'assets/css/',
		scss: 'assets/scss/',
		js: 'assets/js/',
		img: 'assets/img/',
		vendor: 'assets/vendor/',
		build: 'assets/build/',
		dist: 'assets/dist/'
	};

/**
 * Development tasks
 */

// Compile Sass via Compass and refresh styles in browser
gulp.task('compileSass', function() {
	return gulp.src(files.scss)
		.pipe(
			compass({
				css: paths.css,
				sass: paths.scss,
				image: paths.img,
				comments: false,
				sourcemap: true,
				require: ['susy', 'normalize-scss']
			})
			.on('error', notify.onError({
				message: 'Sass failed. Check console for errors'
			}))
		)
		.pipe(gulp.dest(paths.build))
		.pipe(livereload())
		.pipe(notify('Compass successfully compiled'));
});

// Error checking scripts
gulp.task('compileJs', function() {
	return gulp.src(files.js)
		.pipe(jsHint())
		.pipe(jsHint.reporter('default'))
			.on('error', notify.onError(function(file) {
				if (!file.jshint.success) {
					return 'JSHint failed. Check console for errors';
				}
			}))
		.pipe(joinFiles('scripts.js'))
		.pipe(gulp.dest(paths.build))
});

// Install Bower components
gulp.task('runBower', function() {
	return bower(paths.vendor)
		.pipe(gulp.dest(paths.vendor));
});


/**
 * Build tasks
 */

// Process style files
gulp.task('readyStyles', ['compileSass'], function() {
	gulp.src(files.build.css)
		.pipe(cssMinify())
		.pipe(rename(function(path) {
			path.basename += '-min';
		}))
		.pipe(gulp.dest(paths.dist));
});

// Process script files
gulp.task('readyScripts', ['compileJs'], function() {
	gulp.src(files.build.js)
		.pipe(jsMinify())
		.pipe(rename(function(path) {
			path.basename += '-min';
		}))
		.pipe(gulp.dest(paths.dist));
});


/**
 * Run tasks
 */
gulp.task('watch', function() {
	gulp.watch(allPathsToWatch, ['compileSass', 'compileJs']);
	livereload.listen();
});

gulp.task('install', ['runBower']);

gulp.task('build', ['readyStyles', 'readyScripts']);

// Default task
gulp.task('default', ['watch']);


