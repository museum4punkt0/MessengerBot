const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bot.js',
    path: path.resolve(__dirname, 'dist')
  },
  target: "node"
};
