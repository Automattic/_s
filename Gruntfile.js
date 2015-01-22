module.exports = function ( grunt ) {
    'use strict';

    // Load all grunt tasks matching the 'grunt-*' pattern
    require( 'load-grunt-tasks' )( grunt );

    // Time how long tasks take.
    require('time-grunt')(grunt);

    // Get this party started
    grunt.initConfig({

        pkg: grunt.file.readJSON( 'package.json' ),

        // Global variables
        config: {
            src: 'assets/src',
            dist: 'assets/dist',
            devUrl: 'starter.dev'
        },

        // Libsass
        sass: {
            minified: {
                options: {
                    sourceMap: true,
                    outputStyle: 'compressed', // expanded, nested, compressed
                },
                files: {
                    '<%= config.dist %>/css/main.min.css': '<%= config.src %>/sass/main.scss',
                    '<%= config.dist %>/css/no-mq.min.css': '<%= config.src %>/sass/no-mq.scss'
                }
            },
            expanded: {
                options: {
                    outputStyle: 'expanded'
                },
                files: {
                    '<%= config.dist %>/css/main.css': '<%= config.src %>/sass/main.scss',
                    '<%= config.dist %>/css/no-mq.css': '<%= config.src %>/sass/no-mq.scss'
                }
            }
        },

        // Clean CSS Output
        csscomb: {
            dist: {
                options: {
                    config: '<%= config.src %>/sass/csscomb.json'
                },
                files: {
                    '<%= config.dist %>/css/main.css': ['<%= config.dist %>/css/main.css'],
                    '<%= config.dist %>/css/no-mq.css': ['<%= config.dist %>/css/no-mq.css']
                }
            }
        },

        // Concatenate JS Files
        concat: {
            main: {
                files: {
                    '<%= config.dist %>/js/main.js': '<%= config.src %>/js/main.js'
                }
            },
            plugins: {
                files: {
                    '<%= config.dist %>/js/plugins.js': [
                        '<%= config.src %>/js/plugins/boilerplate.js',
                        '<%= config.src %>/js/plugins/jquery.magnific-popup.js',
                        '<%= config.src %>/js/plugins/jquery.cycle2.js',
                        '<%= config.src %>/js/plugins/jquery.cycle2.swipe.js'
                    ]
                }
            }
        },

        // Minify JS
        uglify: {
            options: {
                sourceMap: true,
                preserveComments: 'some'
            },
            main: {
                files: {
                    '<%= config.dist %>/js/main.min.js': [ '<%= config.src %>/js/main.js' ]
                }
            },
            plugins: {
                files: {
                    '<%= config.dist %>/js/plugins.min.js': [ '<%= config.src %>/js/plugins.js' ]
                }
            }
        },

        // Optimize Media
        imagemin: {
            images: {
                options: {
                    optimizationLevel: 3, // default
                    progressive: true // default
                },
                files: [{
                    expand: true,
                    cwd: '<%= config.src %>/img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: '<%= config.dist %>/img/'
                }]
            }
        },

        // Copy Files/Folders
        copy: {
            js: {
                expand: true,
                cwd: '<%= config.src %>/js/plugins/',
                src: 'modernizr-2.8.3.min.js',
                dest: '<%= config.dist %>/js/plugins/',
            }
        },

        // Growl Notifications
        notify: {
            livereload: {
                options: {
                    title: 'Browser Updated',
                    message: 'Livereload completed.'
                }
            }
        },

        browserSync: {
            bsFiles: {
                src: [
                    '<%= config.dist %>/css/*.css',
                    '<%= config.dist %>/js/**/*.js',
                    '<%= config.dist %>/img/',
                    '**/*.php'
                ],
            },
            options: {
                // notify: false,
                // open: false,
                watchTask: true,
                proxy: '<%= config.devUrl %>'
            }
        },

        // Run Tasks When Files Are Modified
        watch: {
            css: {
                files: '<%= config.src %>/sass/**/*.{scss,sass}',
                tasks: [ 'sass:minified' ],
                // tasks: [ 'sass', 'csscomb' ] // slower, but will process all CSS files
            },
            jsMain: {
                files: [
                    '<%= config.src %>/js/main.js'
                ],
                tasks: [ 'uglify:main' ]
            },
            jsPlugins: {
                files: [
                    '<%= config.src %>/js/plugins.js',
                    '<%= config.src %>/js/plugins/**/*.js'
                ],
                tasks: [ 'concat', 'uglify:plugins', 'newer:copy:js' ]
            },
            images: {
                files: [
                    '<%= config.src %>/img/**/*.{png,jpg,gif}'
                ],
                tasks: [ 'newer:imagemin' ]
            },
            // This can be used in place of BrowserSync
            // livereload: {
            //     options: {
            //         livereload: true,
            //         spawn: false
            //     },
            //     files: [
            //         '<%= config.dist %>/css/*.css',
            //         '<%= config.dist %>/js/**/*.js',
            //         '<%= config.dist %>/img/',
            //         // '**/*.php'
            //     ],
            //     tasks: [ 'notify:livereload' ]
            // }
        },

    });

    // Default
    grunt.registerTask( 'default', [
        'sass',
        'csscomb',
        'concat',
        'uglify',
        'newer:copy:js',
        'newer:imagemin',
        'browserSync',
        'watch', // add after 'browserSync'. Not needed for Livereload
    ]);

    // Build
    // Run all tasks, including sass:expanded
    grunt.registerTask( 'build', [
        'sass',
        'csscomb',
        'concat',
        'uglify',
        'newer:copy:js',
        'newer:imagemin',
    ]);


    // Images
    grunt.registerTask( 'media', ['newer:imagemin'] );

};
