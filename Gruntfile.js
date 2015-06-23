module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['**/*.js', 'bin/*'],
      options: {
        reporter: require('jshint-stylish'),
        curly: true,
        eqeqeq: true,
        eqnull: false,
        browser: true,
        indent: 2,
        quotmark: 'single',
        unused: false,
        ignores: ['node_modules/**/*.js'],
        globals: {
          jQuery: true
        },
      },
    },
    jsonlint: {
      sample: {
        src: ['package.json', 'temp.json']
      }
    },
    watch: {
      scripts: {
        files: ['**/*.js', 'bin/*'],
        tasks: ['jshint'],
        options: {
          livereload: true
        }
      },
      json: {
        files: ['package.json', 'temp.json'],
        tasks: ['newer:jsonlint'],
        options: {
          spawn: false
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jsonlint');
  grunt.registerTask('test',['jshint', 'jsonlint']);
  grunt.registerTask('default',['watch']);
};