const path = require('path')
const webpack = require('webpack')
const utils = require('./utils')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

// console.log(utils.entries())
// console.log(utils.htmlPlugin())

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: utils.entries(),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('normal')
    }
  }
}