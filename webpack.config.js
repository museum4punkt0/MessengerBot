const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bot.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  target: "node"
};
