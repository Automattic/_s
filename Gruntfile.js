module.exports = function(grunt) {

	// load all grunt tasks in package.json matching the `grunt-*` pattern
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		githooks: {
			all: {
				'pre-commit': 'default'
			}
		},

		sprite: {
			all: {
				'src': 'images/sprites/*.png',
				'dest': 'images/sprites.png',
				'destCss': 'sass/base/_sprites.scss',
				'imgPath': 'images/sprites.png',
				'algorithm': 'binary-tree',
			}
		},

		svgmin: {
			options: {
				plugins: [ // https://github.com/svg/svgo/tree/master/plugins
					{ removeComments: true },
					{ removeTitle: true },
					{ removeUselessStrokeAndFill: true },
					{ removeEmptyAttrs: true }
				]
			},
			dist: {
				files: [{
					expand: true,
					cwd: '',
					src: ['images/svg/*.svg'],
					dest: ''
				}]
			}
		},

		svgstore: {
			options: {
				prefix: 'icon-',
				cleanup: ['fill', 'style'],
				svg: {
					style: 'display: none;'
				}
			},
			default: {
				files: {
					'images/svg-defs.svg': 'images/svg/*.svg',
				}
			}
		},

		sass: {
			options: {
				sourceMap: true,
				outputStyle: 'expanded',
				lineNumbers: true,
				includePaths: [
					'bower_components/bourbon/app/assets/stylesheets',
					'bower_components/neat/app/assets/stylesheets'
				]
			},
			dist: {
				files: {
					'style.css': 'sass/style.scss'
				}
			}
		},

		autoprefixer: {
			options: {
				browsers: ['last 2 versions', 'ie 9'],
				map: {
					inline: false,
					sourcesContent: false
				}
			},
			dist: {
				src: ['style.css']
			}
		},

		combine_mq: {
			default_options: {
				expand: true,
				cwd: '',
				src: ['style.css'],
				dest: ''
			}
		},

		csscomb: {
			dist: {
				files: [{
					expand: true,
					cwd: '',
					src: ['style.css'],
					dest: '',
				}]
			}
		},

		cssmin: {
			minify: {
				expand: true,
				cwd: '',
				src: ['style.css'],
				dest: '',
				ext: '.min.css'
			}
		},

		concat: {
			dist: {
				src: ['js/concat/*.js'],
				dest: 'js/project.js',
			}
		},

		uglify: {
			build: {
				options: {
					mangle: false
				},
				files: [{
					expand: true,
					cwd: 'js/',
					src: ['**/*.js', '!**/*.min.js', '!concat/*.js'],
					dest: 'js/',
					ext: '.min.js'
				}]
			}
		},

		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'images/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'images/'
				}]
			}
		},

		watch: {

			scripts: {
				files: ['js/**/*.js'],
				tasks: ['javascript'],
				options: {
					spawn: false,
					livereload: true,
				},
			},

			css: {
				files: ['sass/**/*.scss'],
				tasks: ['sass'],
				options: {
					spawn: false,
					livereload: true,
				},
			},

			sprite: {
				files: ['images/sprites/*.png'],
				tasks: ['sprite', 'styles'],
				options: {
					spawn: false,
					livereload: true,
				},
			},

			svg: {
				files: ['images/svg/*.svg'],
				tasks: ['svgstore'],
				options: {
					spawn: false,
					livereload: true,
				},
			},
		},

		shell: {
			grunt: {
				command: '',
			}
		},

		clean: {
			js: ['js/project*', 'js/**/*.min.js'],
			css: ['style.css', 'style.min.css']
		},

		makepot: {
			theme: {
				options: {
					cwd: '',
					domainPath: 'languages/',
					potFilename: '_s.pot',
					type: 'wp-theme'
				}
			}
			/*plugin_name: {
				options: {
					cwd: 'plugins/plugin_name',
					domainPath: '/languages/',
					potFilename: 'plugin_name.pot',
					type: 'wp-plugin'
				}
			}
			repeat as necessary
			*/
		},

		addtextdomain: {
			theme: {
				options: {
					textdomain: '_s'
				},
				target: {
					files: {
						src: ['*.php']
					}
				}
			},
			/*plugin_name: {
				options: {
					textdomain: 'text-domain'
				},
				target: {
					files: {
						src: ['*.php']
					}
				}
			}
			repeat as necessary
			*/
		},

		phpcs: {
			application: {
				dir: [
					'**/*.php',
					'!**/node_modules/**'
				]
			},
			options: {
				bin: '~/phpcs/scripts/phpcs',
				standard: 'WordPress'
			}
		},

		sassdoc: {
			default: {
				src: [
					'sass/**/*.scss',
					'bower_components/bourbon/app/assets/stylesheets',
					'bower_components/neat/app/assets/stylesheets'
				],
				options: {
					dest: './sassdoc/',
					display: {
						access: ['public'],
						watermark: false
					},
					groups: {
						wds: 'WebDevStudios',
						'undefined': 'Bourbon & Neat'
					},
					description: 'Sass Documentation, which includes Bourbon and Neat documentation as well.',
					sort: ['group>'],
				},
			},
		},

		notify_hooks: {
			options: {
				enabled: true,
				max_jshint_notifications: 5, // Limit the # of js-hint notifications (there can be many).
				title: "wd_s", // Don't use package.json, since it's _s at the moment.
				success: false, // Don't show success notifications.
				duration: 2, // How long the notification shows.
			}
		},

	});

	grunt.registerTask('styles', ['sass', 'autoprefixer', 'combine_mq', 'csscomb', 'cssmin']);
	grunt.registerTask('javascript', ['concat', 'uglify']);
	grunt.registerTask('imageminnewer', ['newer:imagemin']);
	grunt.registerTask('sprites', ['sprite']);
	grunt.registerTask('icons', ['svgmin', 'svgstore']);
	grunt.registerTask('i18n', ['makepot']);
	grunt.registerTask('default', ['styles', 'javascript', 'imageminnewer', 'icons', 'i18n', 'sassdoc']);

	// grunt-notify shows native notifications on errors.
	grunt.loadNpmTasks('grunt-notify');
	grunt.task.run('notify_hooks');
};
