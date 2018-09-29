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
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, "../index.html"),
      to: './', // 此处相对于 path: resolve('dist')
      ignore: ['.*']
     }])
  ].concat(utils.htmlPlugin())
})

module.exports = webpackConfig