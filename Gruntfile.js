'use strict';
module.exports = function(grunt) {

    // load all grunt tasks matching the `grunt-*` pattern
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        // watch for changes and trigger sass, jshint, uglify and livereload
        watch: {
            sass: {
                files: ['sass/**/*.{scss,sass}'],
                tasks: ['sass', 'autoprefixer', 'cssmin']
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

        // sass
        sass: {
            dist: {
                options: {
                    sourcemap: true,
                    style: 'expanded',
                },
                files: {
                    'css/style.css': 'css/style.scss',
                    'css/editor-style.css': 'css/editor-style.scss'
                }
            }
        },

        // autoprefixer
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 9', 'ios 6', 'android 4'],
                map: true
            },
            files: {
                expand: true,
                flatten: true,
                src: 'css/*.css',
                dest: 'css/'
            },
        },

        // css minify
        cssmin: {
            options: {
                keepSpecialComments: 1
            },
            add_banner: {
                options: {
                    banner: '/* My minified css file */'
                },
                files: {
                    'css/style.min.css': ['css/**/*.min.css']
                }
            },
            minify: {
                expand: true,
                cwd: 'css/',
                src: ['*.css', '!*.min.css'],
                ext: '.min.css'
            }
        },

        // Concatenation
        concat: {
            options: {
            separator: ';',
        },
        dist: {
            src: ['js/customizer.js', 'js/navigation.js', 'js/skip-link-focus-fix.js'],
                dest: 'js/scripts.js',
            },
        },


        // javascript linting with jshint
        jshint: {
            options: {
                jshintrc: '.jshintrc',
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
                    'js/main.min.js': [
                        'js/plugins/navigation.js',
                        'js/plugins/skip-link-focus-fix.js',
                        'js/main.js',
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

    // register task
    grunt.registerTask('default', ['sass', 'autoprefixer', 'cssmin', 'uglify', 'imagemin', 'watch']);

};