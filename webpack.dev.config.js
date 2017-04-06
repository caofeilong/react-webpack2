var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var HtmlWebpackPlugin = require('html-webpack-plugin');
require('react-hot-loader')

module.exports = function (config) {
  return {
    entry: [
      'react-hot-loader/patch',
      //'webpack-dev-server/client?http://localhost:8081',
      //'webpack/hot/only-dev-server',
      './app/index.js'
    ],
    output: {
      filename: 'bundle.js',
      path: `${__dirname}/dist`,
      publicPath: '/'
    },
    devtool: 'inline-source-map',
    devServer: {
      hot: true,
      contentBase:  `${__dirname}/dist`,
      publicPath: '/'
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
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'html-loader!./app/index.html'
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
    ]
  }
}
