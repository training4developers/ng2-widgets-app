'use strict';

const path = require('path');

module.exports = {

  devtool: 'inline-source-map',

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  module: {

		postLoaders: [
        // instrument only testing sources with Istanbul
        {
            test: /\.js$/,
            include: path.resolve('src/www/js/'),
            loader: 'istanbul-instrumenter'
        }
    ],

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
        loader: 'null'
      },
      {
        test: /\.scss$/,
        loader: 'null'
      }
    ]
  },
}
