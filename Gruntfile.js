/*
 * grunt-recap
 * https://github.com/aintgoin2goa/grunt-recap
 *
 * Copyright (c) 2013 Paul Wilson
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    recap: {
      basic : {
        urls : ["http://www.datsun.com/"],
        widths : ["320", "480", "1024", "1900"],
        dest : "./screenshots/",
        options : {
          waitTime : 50
        }
      },
      crawl : {
        urls : ["http://www.datsun.com/"],
        widths : ["320", "480", "1024", "1900"],
        dest : "./screenshots/",
        options : {
          waitTime : 50,
          crawl : true
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'recap', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
