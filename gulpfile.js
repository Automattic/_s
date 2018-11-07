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
const path = require('path');

var config = require('./config.json');

gulp.task('serve', [
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
    'dist/css/images/*',
    'dist/css/*',
    'dist/css/maps/*',
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
    
    for(let sizeName in imageResizes){
        
        imageOptions.push( 
            _.merge(
                {
                    width: imageResizes[sizeName],
                    rename: function (filepath) {
                        filepath.dirname += path.sep + imageResizes[sizeName];
                        
                        if ( options.extname ) {
                            filepath.extname = '.' + options.extname;
                        }
    
                        return filepath;
                    }
                },
                options
            )
        );
    
    }
    
    return imageOptions;
}

var resizeConfig = function( options = {} ){
    
    var breakpoints = config.main_breakpoints;
    breakpoints.page_max_width = config.page_max_width;    
    
    return {
      'backgrounds/*.jpg': imageSetOptions( breakpoints, options ),
      'backgrounds/*.png': imageSetOptions( breakpoints, options ),
      '**/*.jpg':  [ options ],
      '**/*.png':  [ options ],         
    }
}

gulp.task('image:minify', function(){
    
    var globalConfig = {
      // The output quality for JPEG, WebP and TIFF output formats
      quality: 70,
      // Use progressive (interlace) scan for JPEG and PNG output
      progressive: true,
      // Zlib compression level of PNG output format
      compressionLevel: 6,
      errorOnUnusedConfig: false,
      errorOnEnlargement: false,
      withoutEnlargement: true, 
      withMetadata: false,
    };

    // Normal conversion
    gulp.src('./style/images/**/*')
        .pipe(responsive( resizeConfig(), globalConfig ))
        .pipe(gulp.dest('dist/css/images'));
    
    // WEBP conversion
    gulp.src('./style/images/**/*')
        .pipe(responsive( resizeConfig( { format: 'webp', rename: { extname: '.webp' } } ), globalConfig))
        .pipe(gulp.dest('dist/css/images'));        
        
});

gulp.task('js:copy', function() {
   gulp.src('./node_modules/fg-loadcss/dist/cssrelpreload.min.js')
   .pipe(gulp.dest('./dist/js'));
});

gulp.task('js:watch', function() {
    gulp.watch("./js/**/*.js", ['js:compress']);
});

gulp.task('image:watch', function() {
    gulp.watch("./style/images/**/*", ['image:minify']);
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
    .pipe(gulp.dest('./dist/js'))
});

gulp.task('sass:watch', function() {
    gulp.watch("./style/**/*.scss", ['sass:compile']);
    gulp.watch("./config.json", ['sass:compile']);
});

/**
 * Compile with gulp-ruby-sass + source maps
 */
gulp.task('sass:compile', function () {

    return gulp.src('./style/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
          outputStyle: 'nested',
          importer: [jsonImporter()],
          precision: 10,
          includePaths: ['.'],
          onError: console.error.bind(console, 'Sass error:')
        }))
        .pipe(postcss([ objectFitImages, autoprefixer() ]))
        .pipe(csso())        
        //for file sourcemaps
        .pipe(sourcemaps.write('./maps', {
            includeContent: false,
            sourceRoot: '/' + path.dirname(__filename).split(path.sep).slice(-3).join( '/' ) + '/style'
        }))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream({match: './dist/css/**/*.css'}));
        
});

gulp.task('default', ['serve']);
