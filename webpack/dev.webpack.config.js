const path = require('path');

module.exports = {
  mode: 'development',
  entry: './js/main',
  output: {
    path: path.resolve(__dirname, 'js/bundle'),
    filename: 'aplicacao.min.js'
  }
}