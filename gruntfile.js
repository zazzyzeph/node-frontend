module.exports = function(grunt) {
  grunt.initConfig ({
    sass: {
      dist: {
        files: {
          // 'public/stylesheets/style.css' : 'sass/app.scss'
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
      // This is for when you want to use Grunt
      // to compile SCSS instead of Express,
      // which is currently compiling it on
      // request. This is fast and easier on
      // dev, but i'm not sure if serving it
      // via Express is good for server load
      // in a production environment.
      // 
      // tldr don't use express to serve
      // scss on live
      // 
      // sass: {
      //   files: ['sass/**/*.scss'],
      //   tasks: ['sass'],
      //   options: {
      //     livereload : true
      //   },
      // },
      css: {
        files: ['public/stylesheets/style.css'],
        options: {
          livereload : true
        },
      },
      pug: {
        files: ['views/**/*.pug'],
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
  // grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('default', ['watch']);
};


