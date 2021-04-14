const webpack = require('webpack')
const portFinder = require('portfinder')
const chalk = require('chalk')
const boxen = require('boxen')
const config = require('./base')
const { resolve } = require('./utils')
const options = require('./options')

config
  .mode('development')
  .output.path(resolve('dist'))
  .filename('[name].js')
  .publicPath('/')
  .end()
  .devServer.contentBase([resolve('src'), resolve('dist')])
  .port(options.port)
  .open(true)
  .hot(true)
  .inline(true)
  .noInfo(true)
  .disableHostCheck(true)
  .watchContentBase(true)
  .end()

// Open HMR
config.plugin('HMR').use(webpack.HotModuleReplacementPlugin).end()

options.chainWebpack && options.chainWebpack(config)

/**
 * 处理端口冲突以及运行服务状态
 */
async function autoFindAvailablePort(config) {
  return new Promise((resolve) => {
    portFinder.basePort = config.toConfig().devServer.port

    portFinder.getPort({ host: 'localhost' }, (err, port) => {
      if (err) {
        console.log(chalk.red('Got error when find available port.'))
      }
      config.devServer.port(port).end()
      resolve(config.toConfig())
      console.log(
        boxen(`${chalk.blue(`Server is running at:`)} ${chalk.greenBright(`http://localhost:${port}.`)}`, {
          padding: 1,
          margin: 1,
          borderColor: 'cyan',
          borderStyle: 'classic'
        })
      )
    })
  })
}

module.exports = autoFindAvailablePort(config)
