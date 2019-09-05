const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackAutoFindPort = require('webpack-auto-find-port')
const chalk = require('chalk')
const baseWebpackConfig = require('./webpack.base.config')
const utils = require('./utils')
const baseConfig = require('./config.js')

const webpackDevConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    // 本地环境地址配置
    contentBase: path.join(__dirname, `../${baseConfig.OUT_PUT_FOLDER_NAME}/index.html`),
    publicPath: '/',
    compress: true,
    port: baseConfig.dev.port,
    noInfo: true,
    hot: true,
    // 开启调试, 可在移动端等同wifi环境下 ip访问
    disableHostCheck: true,
    // 跨域配置
    proxy: baseConfig.dev.proxyTable
  },
  plugins: [
    new webpack.DefinePlugin({
      ISPROD: JSON.stringify(false)
    }),
    // hot replace 热更新需要配置该项
    new webpack.HotModuleReplacementPlugin(),

    // 页面模板
    ...utils.htmlPlugin()
  ]
})

module.exports = webpackAutoFindPort({
  config: webpackDevConfig,
  logger: port => {
    console.log(chalk.green(`Project is Running at ${port}`))
  }
})
