'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers = require('./helpers');

module.exports = {

  entry: {
    'polyfills': './src/www/js/polyfills.ts',
    'vendor': './src/www/js/vendor.ts',
    'app': './src/www/js/main.ts'
  },

  resolve: {
    extensions: ['', '.js', '.ts']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts'
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
			{
			  test: /\.scss$/,
				exclude: helpers.root('src', 'www', 'js', 'app'),
			  loader: ExtractTextPlugin.extract("style","css!sass")
			},
			{
			  test: /\.scss$/,
			  include: helpers.root('src', 'www', 'js', 'app'),
			  loaders: ['raw-loader', 'sass-loader']
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
