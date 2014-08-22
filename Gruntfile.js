
module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        // sass
        sass: {
            dist: {
                options: {
                    sourcemap: true,
                    style: 'compressed',
                    banner: '/*\n' +
                            'Theme Name: _s2\n' +
                            'Theme URI: https://github.com/S2web/_s2\n' +
                            'Author: S2 Web\n' +
                            'Author URI: http://s2webpress.com\n' +
                            'Description: A starter theme based on <em>underscores</em> by Automattic\n' +
                            'Version: 1.0-wpcom\n' +
                            'License: GNU General Public License v2 or later\n' +
                            'License URI: http://www.gnu.org/licenses/gpl-2.0.html\n' +
                            'Text Domain: _s2\n' +
                            'Tags:\n\n' +
                            'This theme, like WordPress, is licensed under the GPL.\n' +
                            'Use it to make something cool, have fun, and share what you\'ve learned with others.\n\n' +
                             '_s2 is based on Underscores http://underscores.me/, (C) 2012-2014 Automattic, Inc.\n' +
                            ' */\n',
                },
                files: {
                    'style.css': 'sass/style.scss',
                }
            },
            Editor: {
                 options: {
                    sourcemap: true,
                    style: 'expanded',
                    banner: '/*\n' +
                            'Theme Name: _s2\n' +
                            ' */\n',
                },
                files: {
                    'css/editor-style.css': 'sass/editor-style.scss'
                }
            }
        },

        // autoprefixer
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 8', 'ie 9', 'ios 6', 'android 4'],
                map: true
            },
            files: {
                expand: true,
                flatten: true,
                src: 'css/*.css',
                dest: 'css/'
            },
        },
        

        // javascript linting with jshint
        jshint: {
            options: {
                "force": true
            },
            all: [
                'Gruntfile.js',
                '/js/**/*.js'
            ]
        },

        // uglify to concat, minify, and make source maps
        uglify: {
            main: {
                options: {
                    sourceMap: 'js/main.js.map',
                    sourceMappingURL: 'main.js.map',
                    sourceMapPrefix: 2
                },
                files: {
                    'js/main.js': [
                        'bower_components/classList/index.js',
                        'bower_components/astro/dist/js/astro-plus.js',
                        'js/components/skip-link-focus-fix.js',
                        'js/components/init.js',
                    ],
                    'js/html5.js' : [
                        'bower_components/html5shiv/dist/html5shiv.js'
                    ]
                }
            }
        },

        // image optimization
        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 7,
                    progressive: true,
                    interlaced: true
                },
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'img/'
                }]
            }
        },

        // watch for changes and trigger sass, jshint, uglify and livereload
        watch: {
            sass: {
                files: ['sass/**/*.{scss,sass}'],
                tasks: ['sass', 'autoprefixer']
            },
            js: {
                files: '<%= jshint.all %>',
                tasks: ['jshint', 'uglify']
            },
            images: {
                files: ['img/**/*.{png,jpg,gif}'],
                tasks: ['imagemin']
            },
            livereload: {
                options: { livereload: true },
                files: ['style.css', 'js/*.js', 'img/**/*.{png,jpg,jpeg,gif,webp,svg}']
            }
        },

    });

    
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // register task
    grunt.registerTask('default', ['sass', 'autoprefixer', 'jshint', 'uglify', 'imagemin', 'watch']);

};