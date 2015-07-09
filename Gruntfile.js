'use strict';
module.exports = function(grunt) {

  // Load tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    // Sass Task
    sass: {
      dist: {
        options: {
	        style: 'expanded'
        },
        // Define the CSS and SASS source files
        files: {
	        'style.css': 'sass/style.scss'
      	}
      }
    },

    // Watch Task
    watch: {
      sass: {
        files: [
          'sass/**/*.scss',
          'sass/*.scss'
        ],
        tasks: ['sass']
      }
    }
  });

  // Register tasks
  grunt.registerTask('default',['sass','watch']);

};
