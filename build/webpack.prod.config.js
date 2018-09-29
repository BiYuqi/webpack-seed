const path = require('path')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const utils = require('./utils')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const webpackConfig = merge(baseWebpackConfig, {
  output: {
    path: resolve('dist'),
    publicPath: '/',
    filename: '[name]/[name].[chunkhash].js',
    chunkFilename: '[id].[chunkhash].js'
  },
  plugins: [

  ].concat(utils.htmlPlugin())
})

module.exports = webpackConfig