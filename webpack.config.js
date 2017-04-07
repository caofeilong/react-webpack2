var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var HtmlWebpackPlugin = require('html-webpack-plugin');
require('react-hot-loader')

module.exports = function (config) {
  let {devServer} = config;
  return {
    entry: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:9001',
      'webpack/hot/only-dev-server',
      './app/index.js'
    ],
    output: {
      filename: '[name]' + (!devServer ? '-[hash]' : '') + '.js',
      path: `${__dirname}/dist`,
      publicPath: '/'
    },
    devtool: 'inline-source-map',
    devServer: {
      port: 9001,
      hot: true,
      //host:'0.0.0.0',
      contentBase: `${__dirname}/dist/index.html`,
      publicPath: '/',
      proxy: {
        '/api/*': {
          target: 'http://lovesomnus.com:3000',
          secure: false
        }
      }
    },
    module: {
      rules: [
        {
          test: /\.js|jsx$/,
          use: ['babel-loader',],
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader?modules', 'postcss-loader',],
        },
        {
          test: /\.scss$/,
          exclude: [/node_modules/],
          loaders: ["style-loader", "css-loader?module", "sass-loader"]
        },
        {
          test: /\.gscss$/,
          exclude: [/node_modules/],
          loaders: ["style-loader", "css-loader?module", "sass-loader"]
        }
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'html-loader!./app/index.html'
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
    ]
  }
}
