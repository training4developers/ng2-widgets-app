'use strict';

Error.stackTraceLimit = Infinity;

require('core-js/es6');
require('core-js/es7/reflect');

// Typescript emit helpers polyfill
require('ts-helpers');

require('zone.js/dist/zone');
require('zone.js/dist/long-stack-trace-zone');
require('zone.js/dist/jasmine-patch');
require('zone.js/dist/async-test');
require('zone.js/dist/fake-async-test');
require('zone.js/dist/sync-test');

// RxJS
require('rxjs/Rx');

// specifies the location of the applicaiton files, and the pattern for the unit testing files
var appContext = require.context('../src/www/js', true, /\.spec\.ts/);

appContext.keys().forEach(appContext);

// loads the providers need for performing Angular 2 unit testing
var testing = require('@angular/core/testing');
var browser = require('@angular/platform-browser-dynamic/testing');

// may only be called once, providers in the actual unit tests should be loaded
// using addProvider in the unit test files
testing.setBaseTestProviders(
  browser.TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
  browser.TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
);
