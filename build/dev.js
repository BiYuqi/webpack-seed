const config = require('./base')
const { resolve } = require('./utils')
const options = require('./options')

config
  .mode('development')
  .output.path(resolve('dist'))
  .filename('[name].js')
  .publicPath('/')
  .end()
  .devServer.contentBase(resolve('dist'))
  .port(options.port)
  .hot(true)
  .inline(true)
  .noInfo(true)
  .disableHostCheck(true)
  .end()

options.chainWebpack && options.chainWebpack(config)

module.exports = config.toConfig()
