'use strict';

const path = require('path');

module.exports = {

    // outputs source map for error reporting
    // when unit tests fail, karma will display the TypeScript line number instead
    // of the JavaScript bundle line number
    devtool: 'inline-source-map',

    module: {

        loaders: [
            // transpile TypeScript to JavaScript
            {
                test: /\.tsx?$/,
                loader: 'ts'
            },
            // package HTML as JavaScript modules
            {
                test: /\.html$/,
                loader: 'html'
            },
            // package SASS files as JavaScript modules
            // this is needed otherwise Angular 2 complains that styleUrls is not a stylesheet
            // the actual style definitions are not used in unit testing
            // unlike the webpack dev config, we do not need to account for the global stylesheet
            {
                test: /\.scss$/,
                loaders: ['raw', 'postcss', 'sass']
            }
        ],
    },

    // processes the files through istanbul to add code coverage
    postLoaders: [{
        test: /\.(js|ts)$/,
        loader: 'istanbul-instrumenter-loader',
        include: path.join(__dirname, 'src', 'ts'),
        exclude: [/\.(e2e|spec)\.ts$/, /node_modules/]
    }],

};
