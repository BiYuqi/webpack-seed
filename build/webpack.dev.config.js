const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const portfinder = require('portfinder')
const chalk = require('chalk')
const baseWebpackConfig = require('./webpack.base.config')
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
    new webpack.DefinePlugin({
      ISPROD: JSON.stringify(false)
    }),
    // hot replace 热更新需要配置该项
    new webpack.HotModuleReplacementPlugin(),

    // 页面模板
    ...utils.htmlPlugin()
  ]
})

module.exports = async () => {
  portfinder.basePort = webpackConfig.devServer.port

  portfinder.getPort({ host: '127.0.0.1' }, (err, port) => {
    if (err) {
      return
    }
    const uri = 'http://127.0.0.1:' + port

    webpackConfig.devServer.port = port
    console.log(chalk.yellow('Project is running at'), chalk.green(uri))
  })
  return webpackConfig
}
