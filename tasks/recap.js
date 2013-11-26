/*
 * grunt-recap
 * https://github.com/aintgoin2goa/grunt-recap
 *
 * Copyright (c) 2013 Paul Wilson
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('recap', 'Creates screenshots or responsive sites at different widths', function() {

    var done = this.async();

    this.requiresConfig("urls", "dest", "widths");

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      waitTime: 50,
      crawl: false
    });

    var data = this.data;

    var config =  {
      urls : data.urls,
      widths : data.widths,
      dest : data.dest,
      options : options
    };

    require("recap").run(config).then(
        function(msg){
           grunt.log.ok(msg);
           done();
        },
        function(err){
          grunt.log.error(err);
          done();
        }
    );
  
  });

};
