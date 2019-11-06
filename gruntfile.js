// Gruntfile.js

module.exports = function(grunt) {

    /* Cool task timers */
    require('jit-grunt')(grunt);
    require('time-grunt')(grunt);
  
    grunt.initConfig({
  
      pkg: grunt.file.readJSON('package.json'),
  
      dirs: {
        sass: 'sass'
      },
  
      sass: {
       dist: {
        options: {
          outputStyle: 'expanded',
          sourcemap: false
        },
        files: {
          'style.css': 'sass/style.scss'
        }
      }
    },
  
    watch: {
      sass: {
        options: {
          livereload: true,
          spawn: true
        },
        files: ['<%= dirs.sass %>/*.scss', '<%= dirs.sass %>/*/*.scss' ],
        tasks: [
        'sass:dist'
        ]
      }
    }
  
  });
  
    grunt.registerTask('default', [
      'sass:dist',
      'watch:sass'
      ]);
  
  };
  