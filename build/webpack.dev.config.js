const path = require('path')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const utils = require('./utils')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const webpackConfig = merge(baseWebpackConfig, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '..'), // 此处有坑 需要再研究下文档
    publicPath: '/',
    compress: true,
    port: 9000
  },
  output: {
    path: resolve('dist'),
    publicPath: '/',
    filename: '[name]/[name].[chunkhash].js',
    chunkFilename: '[id].[chunkhash].js'
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: path.resolve(__dirname, '../index.html'),
    //   inject: true
    // })
  ].concat(utils.htmlPlugin())
})

module.exports = webpackConfig