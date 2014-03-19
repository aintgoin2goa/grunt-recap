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

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      waitTime: 50,
      crawl: false,
      script: null
    });

    var urls = this.data.urls,
        widths = this.data.widths,
        dest = this.data.dest;

    if(!urls){
      grunt.fail.warn("urls not specified", 3);
      return;
    } 

    if(!widths){
      grunt.fail.warn("widths not specified", 3);
      return;
    }

    if(!dest){
      grunt.fail.warn("dest not specified", 3);
      return;
    }      

    var config =  {
      urls : urls,
      widths : widths,
      dest : dest,
      options : options
    };

    var recap = require("recap");

    recap.on("console", function(type, message){
          switch(type){
            case "error":
                grunt.log.error(message);
                break;
            case "success":
                grunt.log.success(message);
                break;
            case "log" : 
                grunt.verbose.writeln(message);
                break;
            default :
                grunt.log.writeln;
                break;
          }
    });

    recap.run(config).then(
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
