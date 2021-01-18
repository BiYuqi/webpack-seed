const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('./base')
const { resolve, htmlPlugin } = require('./utils')

config
  .mode('development')
  .output.path(resolve('dist'))
  .filename('[name].js')
  .end()
  .devServer.contentBase([resolve('src'), resolve('dist')])
  .port(8989)
  .hot(true)
  .inline(true)
  .noInfo(true)
  .disableHostCheck(true)
  .end()

htmlPlugin().forEach((htmlOptions, index) => {
  config.plugin(`html-plugin-${index}`).use(HtmlWebpackPlugin, [htmlOptions])
})

console.log(JSON.stringify(config.toConfig(), null, 2))
module.exports = config.toConfig()
