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
  output: {
    path: resolve('html'),
    publicPath: '/',
    filename: '[name]/[name].[chunkhash].js',
    chunkFilename: '[id].[chunkhash].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('normal')
    }
  }
}