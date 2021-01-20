const path = require('path')

module.exports = {
  chainWebpack: (config) => {
    config.devServer.port(8080)
  }
}
