module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    jasmine : {
      src : 'src/**/*.js',
      options : {
        specs : 'spec/**/*.js',
        template: require('grunt-template-jasmine-istanbul'),
        templateOptions: {
        	coverage: 'reports/coverage.json',
          report: [
          	{
          		type: 'cobertura',
          		options: {
          			dir: 'reports/coverage/cobertura'
          		}
          	},
          	{
          		type: 'lcov',
          		options: {
          			dir: 'reports/coverage/lcov'
          		}
          	}
          ]
        }
      }
    },
    jshint: {
      all: [
        'Gruntfile.js',
        'src/**/*.js',
        'spec/**/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
 

  grunt.registerTask('test', ['jasmine']);

  grunt.registerTask('default', ['test']);

};
