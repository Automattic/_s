/* jshint node: true */
'use strict';

var gulp         = require( 'gulp' );
var autoprefixer = require( 'gulp-autoprefixer' );
var csscomb      = require( 'gulp-csscomb' );
var notify       = require( 'gulp-notify' );
var plumber      = require( 'gulp-plumber' );
var sass         = require( 'gulp-sass' );
var sourcemaps   = require( 'gulp-sourcemaps' );

// Compile Sass.
gulp.task( 'styles', function() {

	return gulp.src( 'sass/*.scss' )
		// Error handling: notify on error.
		.pipe( plumber( notify.onError( {
			title: 'Error compiling yumag styles',
			message: 'Styles Error: <%= error.message %> in <%=error.fileName %> (line <%=error.lineNumber %>)',
			sound: 'Pop'
		} ) ) )
		.pipe( sourcemaps.init() )
		// Compile Sass.
		.pipe( sass() )
		// Automated support for old browsers.
		.pipe( autoprefixer( {
			browsers: [
				// Matches core's Autoprefixer settings.
				'Android >= 2.1',
				'Chrome >= 21',
				'Explorer >= 7',
				'Firefox >= 17',
				'Opera >= 12.1',
				'Safari >= 6.0'
			]
		} ) )
		// Enforce the preferred CSS property order and format.
		.pipe( csscomb() )
		// Output with sourcemap.
		.pipe( sourcemaps.write( '.' ) )
		.pipe( gulp.dest( './' ) )
		.pipe( notify( {
			title: 'Compiled yumag styles successfully',
			message: 'Styles compiled',
			sound: false,
			onLast: true
		} ) );
} );

gulp.task( 'default', ['styles'], function() {

	// Watch Sass files.
	gulp.watch( 'sass/**/*', ['styles'] );

} );
