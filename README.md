# grunt-recap

> Creates screenshots or responsive sites at different widths.  Uses the [recap](https://github.com/aintgoin2goa/recap/) module.

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-recap --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-recap');
```

## The "recap" task

### Overview
In your project's Gruntfile, add a section named `recap` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  recap: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### urls
Type `Array`
Required

An array of urls to capture.

#### widths
Type `Array`
Required

An array of widths to capture each page at.

#### dest
Type `string`
Required

The destination to save the screenshots to, relative to the location of the Gruntfile.  The directory will be created if it does not already exist.  *Make sure that you have permissions to write to this location*.

#### options.waitTime
Type: `Number`
Default value: `50`

How long to wait after page load before capturing the page - gives the site a chance to execute javascript and generally get ready.

#### options.crawl
Type: `Boolean`
Default value: `false`

If true, this option activates crawl mode.  Each url visited will be scanned for other links to the same site.  Any urls found will be added to the list of pages to capture.

### Usage Examples


```js
grunt.initConfig({
  recap: {
    urls : ["http://www.datsun.com/"],
    widths : ["320", "480", "1024", "1900"],
    dest : "./screenshots/",
    options : {
      waitTime : 50,
      crawl : true
    }
  }
});
```

