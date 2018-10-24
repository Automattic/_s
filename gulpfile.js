var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require("gulp-sass");
var sourcemaps  = require('gulp-sourcemaps');
var postcss     = require('gulp-postcss');
var autoprefixer     = require('autoprefixer');
var objectFitImages = require('postcss-object-fit-images');
var avoidfoit = require('gulp-avoidfoit');
var rename = require('gulp-rename');
var csso = require('gulp-csso');
var minify = require('gulp-minify');
var imagemin = require('gulp-imagemin');
var request = require('request'); 
var fs = require('fs'); 
var responsive = require('gulp-responsive');
var _ = require('lodash');
var jsonImporter = require('node-sass-json-importer');
var del = require('del');

var config = require('./config.json');

gulp.task('serve', [
    'build', 
    'sass:watch', 
    'js:watch',
    'image:watch'
    ], function() {

    browserSync.init({
        port: 8081,
        ui: {
            port: 8082
        }
    });

   // gulp.watch("js/**/*.js").on('change', browserSync.reload);
});

gulp.task('clean', function () {
  return del([
    'assets/css/images/*',
    'assets/css/*',
    'assets/css/maps/*',
  ]);
});

gulp.task('build', [
    'sass:compile', 
    'js:compress', 
    'js:copy', 
    'image:minify',
    //'js:fonts',     
]);

var imageSetOptions = function( imageResizes, options ){
    
    var imageOptions = [];
    
    for( var size  = 0; size < imageResizes.length; size++  ){
        
        imageOptions.push( 
            _.merge({
                width: imageResizes[size],
                rename: {
                    suffix: '--' + imageResizes[size],
                },
            }, options)
        );
        
        imageOptions.push( 
            _.merge(
                options,
                {
                    width: imageResizes[size],
                    rename: {
                        suffix: '--' + imageResizes[size],
                        extname: '.webp',
                    },
                    format: 'webp'
                }
            )
        );        
    }
    
    return imageOptions;
}

gulp.task('image:minify', function(){
    gulp.src('./style/images/*')
        .pipe(responsive({
          '*.jpg': imageSetOptions( config.main_breakpoints, {
                withoutEnlargement: true,                
          } ),
          '*.png': imageSetOptions( config.main_breakpoints, {
                withoutEnlargement: true,                
                format: 'png'
          } )
        }, {
          // Global configuration for all images
          // The output quality for JPEG, WebP and TIFF output formats
          quality: 70,
          // Use progressive (interlace) scan for JPEG and PNG output
          progressive: true,
          // Zlib compression level of PNG output format
          compressionLevel: 6,
          
          errorOnEnlargement: false,
          // Strip all metadata
          withMetadata: false,
        }))
        .pipe(gulp.dest('assets/css/images'));
});

gulp.task('js:copy', function() {
   gulp.src('./node_modules/fg-loadcss/dist/cssrelpreload.min.js')
   .pipe(gulp.dest('./assets/js'));
});

gulp.task('js:watch', function() {
    gulp.watch("./js/**/*.js", ['js:compress']);
});

gulp.task('image:watch', function() {
    gulp.watch("./style/images/**", ['image:minify']);
});

gulp.task('js:compress', function() {
  gulp.src(['./js/*.js'])
    .pipe(minify( {
        ext:{
            min:'.min.js'
        },
        noSource : true,
        //exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '.min.js']
    }))
    .pipe(gulp.dest('./assets/js'))
});

gulp.task('sass:watch', function() {
    gulp.watch("./style/**/*.scss", ['sass:compile']);
});


/**
 * Compile with gulp-ruby-sass + source maps
 */
gulp.task('sass:compile', function () {

    return gulp.src('./style/*.scss')
        .pipe(sass({
          outputStyle: 'nested',
          importer: [jsonImporter()],
          precision: 10,
          includePaths: ['.'],
          onError: console.error.bind(console, 'Sass error:')
        }))
        .pipe(sourcemaps.init())
        .pipe(postcss([ objectFitImages, autoprefixer() ]))
        .pipe(csso())        
        //for file sourcemaps
        .pipe(sourcemaps.write('./maps', {
            includeContent: false,
            sourceRoot: 'style'
        }))
        .pipe(gulp.dest('./assets/css'))
        .pipe(browserSync.stream({match: './assets/css/**/*.css'}));
        
});

gulp.task('default', ['serve']);
