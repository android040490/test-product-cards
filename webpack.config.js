"use strict;"
const webpack = require('webpack');
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    context: path.resolve(__dirname, "./src"),
    entry: [
        "./app.js"
    ],
    output: {
        path: path.resolve(__dirname, "./dist"),
        publicPath: '/dist/',
        filename: "bundle.js"
    }, //
    watch: true,

    
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: ['css-loader', 'sass-loader']
                })
              },
        ]
    },
    plugins: [
        new ExtractTextPlugin('main.css')
        
    ],
    
    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['.js'],
      },
    devServer: {
        historyApiFallback: true
      }
}