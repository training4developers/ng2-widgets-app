'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const helpers = require('./helpers');

module.exports = {

  entry: {
    'polyfills': './src/www/js/polyfills.ts',
    'vendor': './src/www/js/vendor.ts',
    'app': './src/www/js/main.ts'
  },

  resolve: {
    extensions: ['', '.ts', '.js', '.json', '.css', '.scss', '.html']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts',
        exclude: [/\.(spec|e2e)\.ts$/]
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'html',
        exclude: [ helpers.root('./src/www/index.html') ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
			{
			  test: /\.scss$/,
				exclude: helpers.root('src', 'www', 'js', 'app'),
        loaders: ['style','css','postcss','sass']
      },
			{
			  test: /\.scss$/,
			  include: helpers.root('src', 'www', 'js', 'app'),
			  loaders: ['raw','postcss','sass']
			}
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: './src/www/index.html'
    })
  ]

};
