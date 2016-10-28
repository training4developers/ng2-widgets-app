
// loaded the web server settings from package.json
const config = require('./bs-config');

// load webpack for plugins below
const webpack = require('webpack');

// configure the environment object for production mode
const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

// merge the common configuration with the environment specific configuration
module.exports = require('webpack-merge')(require('./webpack.common.js'), {
  
  // use full source maps
  // this specific setting value is required to set breakpoints in the TypeScript
  // in the web browser for development
  // other source map settings do not allow debugging in browser and vscode
  devtool: 'source-map',

  // out file settings
  // path points to web server content folder where the web server will serve the files from
  // publicPath is the path to the files from the perspective of the web browser requesting
  // the files from the web server, this is used to insert the script elements into the index.html
  // file
  // filename is the name of the files, where [name] is the name of each entry point, the [hash] is
	// the unique value for cache busting
  output: {
    path: require('./helpers').root(config.server.baseDir || config.server),
    publicPath: '/',
    filename: '[name].[hash].js'
  },

	// HTML minification breaks Angular 2's HTML parser
  htmlLoader: {
   minimize: false
  },

	// NoErrorsPlugin - does not emit assets which compile with errors
	// DedupePlugin - eliminates duplicate files
	// UglifyJsPlugin - minimizes JavaScript files, but function names are not discarded
	// DefinePlugin - configures environment variables for enabling production mode
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: { keep_fnames: true }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    })
  ]
});
