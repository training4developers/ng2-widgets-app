'use strict';

module.exports = require('lodash').pick(
	JSON.parse(require('fs').readFileSync(
		require('path').join(__dirname, './package.json')),
		function(propName, propValue) {
			if (propName === 'port') {
				return process.env.PORT || propValue;
			}
			return propValue;
		}), ['webServer']);
