/* eslint-disable */
var path = require('path');
const webpack = require('webpack');

module.exports = [{
  mode: 'development',
  entry: './app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  }
}];
