const { src, dest, series, parallel, watch, symlink }     = require('gulp');
const sass              = require("gulp-sass");
const sourcemaps        = require('gulp-sourcemaps');
const postcss           = require('gulp-postcss');
const autoprefixer      = require('autoprefixer');
const objectFitImages   = require('postcss-object-fit-images');
const csso              = require('gulp-csso');
const minify            = require('gulp-minify');
const responsive        = require('gulp-responsive');
const _                 = require('lodash');
const jsonImporter      = require('node-sass-json-importer');
const del               = require('del');
const path              = require('path');
const readlineSync      = require('readline-sync');
const replace           = require('gulp-replace');
const rename            = require("gulp-rename");

var config = require('./config.json');

function clean(){
    return del([
        'dist/css/images/*',
        'dist/css/*',
        'dist/css/maps/*',
    ]);
}

exports.clean = clean

// Copy JS files from libraries
function jsCopy(){
    return src('./node_modules/fg-loadcss/dist/cssrelpreload.min.js')
        .pipe(dest('./dist/js'));
}
    
exports.jsCopy = jsCopy

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

function imageMinify (){
    
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
    return src(['./style/images/**/*', '!./style/images/**/*.svg'])
        .pipe(responsive( resizeConfig(), globalConfig ))
        .pipe(dest('dist/css/images'));
}

function imageMinifyWebP (){
    
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
    return src(['./style/images/**/*', '!./style/images/**/*.svg'])
        .pipe(responsive( resizeConfig( { format: 'webp', rename: { extname: '.webp' } } ), globalConfig))
        .pipe(dest('dist/css/images'));        
}

exports.imageMinify = imageMinify;

function jsWatch() {
    return watch("./js/**/*.js", jsCompress );
}

exports.jsWatch = jsWatch;

function imageWatch() {
    watch("./style/images/**/*", imageMinify);
}

exports.imageWatch = imageWatch;

function jsCompress() {
  return src(['./js/*.js'])
            .pipe(
                minify( {
                    ext:{
                        min:'.min.js'
                    },
                    noSource : true,
                    //exclude: ['tasks'],
                    ignoreFiles: ['.combo.js', '.min.js']
                })
            )
            .pipe(dest('./dist/js'))
}

exports.jsCompress = jsCompress;

function sassWatch() {
    watch("./style/**/*.scss", sassCompile);
    watch("./config.json", sassCompile);
}

exports.sassWatch = sassWatch;


/**
 * Compile with gulp-ruby-sass + source maps
 */
function sassCompile() {

    return src('./style/*.scss')
        .pipe(sourcemaps.init())
        .pipe(
            sass({
                outputStyle: 'nested',
                importer: [jsonImporter()],
                precision: 10,
                includePaths: ['.'],
                onError: console.error.bind(console, 'Sass error:')
            })
        )
        .pipe(postcss([ objectFitImages, autoprefixer() ]))
        .pipe(csso())        
        //for file sourcemaps
        .pipe(sourcemaps.write('./maps', {
            includeContent: false,
            sourceRoot: '/' + path.dirname(__filename).split(path.sep).slice(-3).join( '/' ) + '/style'
        }))
        .pipe(dest('./dist/css'));
}

exports.sassCompile = sassCompile;

function replaceMarkers(){

     return src(['./**/*.php', '!./vendor/**/*.php'])
        .pipe(replace("'_svbk'" , "'" + config.theme_handle + "'"))
        .pipe(replace( '_svbk_' , config.theme_handle + '_'))
        .pipe(replace( ' _svbk' , ' ' + config.theme_handle ))
        .pipe(replace( '_svbk-' , config.theme_handle + '-' ))
        .pipe(replace( '_svbk'  , config.theme_handle ))
        .pipe(dest('./'));
}

exports.replaceMarkers = replaceMarkers;

function replaceNames(){

     return src(['./style.css', './rtl.css'])
        .pipe(replace( 'Text Domain: _svbk', 'Text Domain: ' + config.theme_handle ))
        .pipe(replace( 'Theme Name: _svbk' , 'Theme Name: ' + config.theme_name ))
        .pipe(dest('./'));
}

function replaceConfigs(){
    return src(['./composer.json', './package.json' ])
        .pipe(replace( '_svbk'  , config.theme_handle ))
        .pipe(replace( 'Silverback Starter' , 'Silverback ' + config.theme_name ))
        .pipe(dest('./'));
}

function renameLanguages(){
    return src(['./languages/_svbk.*'])
        .pipe(rename(function (path) {
            path.basename = path.basename.replace('_svbk', config.theme_handle);
        }))
        .pipe(dest("./languages/test"));
}

exports.renameLanguages = renameLanguages;

function cgbCompatJS(){
    return src([ './dist/blocks.build.js' ])
        .pipe(symlink('./dist/js/'));
}

function cgbCompatSrc(){
    return src([ './blocks' ])
        .pipe(symlink('./tmp'));
}

exports.cgbCompatJS = cgbCompatJS;
exports.cgbCompatSrc = cgbCompatSrc;

const build = parallel(sassCompile, jsCompress, jsCopy, imageMinify, imageMinifyWebP );

exports.build = build;
exports.install = parallel(replaceConfigs, replaceNames, replaceMarkers, renameLanguages, series(build, cgbCompatJS) );

exports.serve = parallel(sassWatch, jsWatch, imageWatch );
