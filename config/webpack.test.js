'use strict';

const helpers = require('./helpers');

module.exports = {

  devtool: 'inline-source-map',

  resolve: {
    extensions: ['', '.ts', '.js'],
		root: helpers.root('src/www/js')
  },

  module: {

		preLoaders: [{
			test: /\.js$/,
			loader: 'source-map-loader',
			exclude: [
				helpers.root('node_modules/rxjs'),
				helpers.root('node_modules/@angular')
			]
		}],

    loaders: [
			{
				test: /\.ts$/,
				loader: 'awesome-typescript-loader',
				query: {
					noEmitHelpers: true
        }
			},
      { test: /\.html$/, loader: 'html' },
      { test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, loader: 'null' },
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
    ],

		postLoaders: [{
      test: /\.(js|ts)$/, loader: 'istanbul-instrumenter-loader',
      include: helpers.root('src/www/js'),
      exclude: [ /\.(e2e|spec)\.ts$/, /node_modules/ ]
    }]

  },
}
