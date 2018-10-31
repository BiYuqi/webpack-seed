const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const utils = require('./utils')
const baseConfig = require('./config.js')


const webpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    // 本地环境地址配置
    contentBase: path.join(__dirname, `../${baseConfig.OUT_PUT_FOLDER_NAME}/index.html`),
    publicPath: '/',
    compress: true,
    port: baseConfig.dev.port,
    noInfo: true,
    // 开启调试, 可在移动端等同wifi环境下 ip访问
    disableHostCheck: true,
    // 跨域配置
    proxy: baseConfig.dev.proxyTable
  },
  plugins: [
    // hot replace 热更新需要配置该项
    new webpack.HotModuleReplacementPlugin(),

    // 页面模板
    ...utils.htmlPlugin()
  ]
})

module.exports = webpackConfig