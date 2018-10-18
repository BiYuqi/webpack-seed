const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const utils = require('./utils')
const baseConfig = require('./config.js')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    // 本地环境地址配置
    contentBase: path.join(__dirname, `../${baseConfig.OUT_PUT_FOLDER_NAME}/index.html`),
    publicPath: '/',
    compress: true,
    port: baseConfig.dev.port,
    noInfo: true
  },
  plugins: [
    // hot replace 热更新需要配置该项
    new webpack.HotModuleReplacementPlugin(),
    
    // add web site ico file, you can replace yours or remove it
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../src/common/assets/image/favicon.ico'),
      to: './',
      ignore: ['.*']
    }])
  ].concat(utils.htmlPlugin())
})

module.exports = webpackConfig