module.exports = function ( grunt ) {
    'use strict';

    /**
     * @todo run tasks concurrently
     * https://github.com/sindresorhus/grunt-concurrent
     */

    // Load all grunt tasks matching the 'grunt-*' pattern
    require( 'load-grunt-tasks' )( grunt );

    // Project configuration
    grunt.initConfig({

        pkg: grunt.file.readJSON( 'package.json' ),

        compass: {
            dev: {
                options: {
                    config: 'config.rb',
                    sourcemap: true
                }
            }
        },

        concat : {
            scripts : {
                files : {
                    'js/min/plugins.min.js': [
                        'js/plugins.js',
                        'js/plugins/jquery.magnific-popup.js',
                        'js/plugins/jquery.cycle2.js',
                        'js/plugins/jquery.cycle2.swipe.js'
                    ]
                }
            }
        },

        uglify: {
            options: {
                sourceMap: true,
                preserveComments: 'some'
            },
            main: {
                files: {
                    'js/min/main.min.js': [ 'js/main.js' ]
                }
            },
            plugins: {
                files: {
                    'js/min/plugins.min.js': [ 'js/min/plugins.min.js' ]
                }
            }
        },

        /**
         * @todo
         * 1. Use grunt-newer (already installed) to run
         * imagemin when files are changed/added
         *
         * 2. Add as concurrent task
         *
         * Note - optimization stats only show when dest is
         * different than src
         */
        imagemin: {
            images: {
                options: {
                    optimizationLevel: 3, // default
                    progressive: true
                },
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'img/'
                }]
            }
        },

        watch: {
            css: {
                files: 'css/sass/**/*.{scss,sass}',
                tasks: [ 'compass', 'notify:css' ]
            },
            scriptsMain: {
                files: [
                    'js/main.js'
                ],
                tasks: [ 'uglify:main', 'notify:scriptsMain' ]
            },
            scriptsPlugins: {
                files: [
                    'js/plugins.js',
                    'js/plugins/**/*.js'
                ],
                tasks: [ 'concat', 'uglify:plugins', 'notify:scriptsPlugins' ]
            },
            livereload: {
                options: {
                    livereload: true
                },
                files: [
                    'css/*.css',
                    'js/min/plugins.min.js',
                    'js/min/main.min.js',
                    '**/*.php'
                ],
                tasks: [ 'notify:livereload' ]
            }
        },

        notify: {
            all: {
                options: {
                    title: 'Compiled Successfully',
                    message: 'Compass, Concat, Uglify, and Imagemin were processed.'
                }
            },
            css: {
                options: {
                    title: 'CSS Successfully Compiled',
                    message: 'Compass processed.'
                }
            },
            scriptsMain: {
                options: {
                    title: 'JS Successfully Compiled',
                    message: 'Uglify was processed.'
                }
            },
            scriptsPlugins: {
                options: {
                    title: 'JS Successfully Compiled',
                    message: 'Uglify was processed.'
                }
            },
            images: {
                options: {
                    title: 'Images Optimized',
                    message: 'Imagemin was processed.'
                }
            },
            livereload: {
                options: {
                    title: 'Browser Updated',
                    message: 'Livereload completed.'
                }
            }
        }

    });

    // Default tasks
    grunt.registerTask( 'default', [ 'compass', 'concat', 'uglify', 'imagemin', 'notify:all' ] );
    grunt.registerTask( 'images', [ 'imagemin', 'notify:images' ] );

};
