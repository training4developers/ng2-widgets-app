'use strict';

const config = require('../config');

module.exports = require('webpack-merge')(require('./webpack.common.js'), {

  devtool: 'inline-source-map',

  output: {
    path: require('./helpers').root(config.webServer.folder),
    publicPath: `${config.webServer.protocol}://${config.webServer.host}:${config.webServer.port}/`,
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  postcss: [ require('autoprefixer') ],

  resolveUrlLoader: { silent: true }

});
