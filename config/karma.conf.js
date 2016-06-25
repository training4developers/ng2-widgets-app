'use strict';

// Sauce Labs Platform Configurator
// https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/

// process.env.SAUCE_USERNAME = '';
// process.env.SAUCE_ACCESS_KEY = '';

const customLaunchers = require('./custom-launchers');

module.exports = function (config) {

  var _config = {

		// base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [ 'jasmine' ],


		// list of files / patterns to load in the browser
    files: [
      { pattern: './karma-test-shim.js', watched: false }
    ],

		// list of files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './karma-test-shim.js': [ 'coverage', 'webpack', 'sourcemap' ]
    },

    webpack: require('./webpack.test'),

		// test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: [ 'progress', 'junit', 'coverage', 'saucelabs' ],

		junitReporter: {
			outputDir: '../reports/junit',
			outputFile: 'test-results.xml'
		},

		coverageReporter: {
			dir: '../reports/coverage',
			reporters: [
        { type: 'text-summary' },
        { type: 'json' },
        { type: 'html' }
      ]
    },

		sauceLabs: {
      testName: 'Karma and Sauce Labs demo',
			startConnect: false
    },

		captureTimeout: 120000,


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


		// // start these browsers
    // // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		customLaunchers: customLaunchers,

		browsers: Object.keys(customLaunchers),

		phantomjsLauncher: {
			// Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
			exitOnResourceError: true
		},


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,


    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  };

  config.set(_config);
};
