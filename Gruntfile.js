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

    clean: {
      tests: ["./screenshots1/", "./screenshots2/", "./screenshots3/"],
    },

    // Configuration to be run (and then tested).
    recap: {
      basic : {
        urls : ["http://www.datsun.com/"],
        widths : ["320", "480", "1024", "1900"],
        dest : "./screenshots1/",
        options : {
          waitTime : 50
        }
      },
      crawl : {
        urls : ["http://www.datsun.com/"],
        widths : ["320", "480", "1024", "1900"],
        dest : "./screenshots2/",
        options : {
          waitTime : 50,
          crawl : true
        }
      },
      login : {
        urls : ["https://uat-infiniti-gb.ngcss.akqa.net/en-gb/Admin/Customer?SearchTerm=customer"],
        widths : ["320", "480", "1024", "1900"],
        dest : "./screenshots3",
        options : {
          waitTime : 50,
          crawl : false,
          script : "./testScripts/test.nissanLogin.js"
        }
      }
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Whenever the "test" task is run, first clean the dest dirs, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'recap']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['test']);

};
