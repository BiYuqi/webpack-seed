const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const utils = require('./utils')
const config = require('./config.js')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    // 此处有坑 需要再研究下文档
    contentBase: path.join(__dirname, '../dist/index.html'),
    publicPath: '/',
    compress: true,
    port: config.dev.port,
    noInfo: true
  },
  plugins: [
    // hot replace 热更新需要配置该项
    new webpack.HotModuleReplacementPlugin()
  ].concat(utils.htmlPlugin())
})

module.exports = webpackConfig