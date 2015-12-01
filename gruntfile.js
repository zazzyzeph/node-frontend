module.exports = function(grunt) {
  grunt.initConfig ({
    sass: {
      dist: {
        files: {
          'public/stylesheets/style.css' : 'sass/app.scss'
        },
      },
    },
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['javascripts/*.js'],
        dest: 'public/javascripts/main.js',
      },
    },
    watch: {
      sass: {
        files: ['sass/**/*.scss'],
        tasks: ['sass'],
        options: {
          livereload : true
        },
      },
      jade: {
        files: ['views/**/*.jade'],
        options: {
          livereload : true
        },
      },
      js: {
        files: ['javascripts/**/*.js'],
        tasks: ['concat'],
        options: {
          livereload : true
        },
      },
    },
  });
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('default', ['watch']);
};


