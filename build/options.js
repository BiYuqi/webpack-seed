const chalk = require('chalk')
const { findExistSync } = require('./utils')
const hasWsConfig = findExistSync(process.cwd(), 'ws.config.js')

const options = {
  port: 8989,
  baseDir: '/',
  outputDir: 'dist',
  chainWebpack: () => {},
  debug: false
}

const mergeOptions = {
  ...options,
  ...(hasWsConfig ? require(`${process.cwd()}/ws.config.js`) : {})
}

try {
  const hasHbsLoader = require.resolve('handlebars-loader')
  if (hasHbsLoader && options.debug) {
    console.log(chalk.yellow('检测到您正在使用handlebars-loader, 注意如果要使用handlebars作为模板'))
    console.log(chalk.yellow('ws.config.js里面assetsRule是必须配置的选项, 默认是common目录, 使用方式如下:'))
    console.log(chalk.yellow(`<img src="../../common/assets/image/xxx.png" />`))
  }

  if (!options.assetsRule) {
    options.assetsRule = /common/
  }
} catch (e) {

}

module.exports = mergeOptions
