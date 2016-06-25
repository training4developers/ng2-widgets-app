var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

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
      // {
      //   test: /\.css$/,
      //   exclude: helpers.root('src', 'www', 'js', 'app'),
      //   loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
      // },
      // {
      //   test: /\.css$/,
      //   include: helpers.root('src', 'www', 'js', 'app'),
      //   loader: 'raw'
      // },
			{
			  test: /\.scss$/,
				exclude: helpers.root('src', 'www', 'js', 'app'),
			  loader: ExtractTextPlugin.extract("style","css!sass") // sass-loader not scss-loader
			},
			{
			  test: /\.scss$/,
			  include: helpers.root('src', 'www', 'js', 'app'),
			  loaders: ['raw-loader', 'sass-loader'] // sass-loader not scss-loader
			}
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/www/index.html'
    })
  ]
};
