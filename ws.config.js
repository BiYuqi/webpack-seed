module.exports = {
  baseDir: process.env.WS_PLATFORM === 'github' ? '/webpack-seed/' : '/',
  chainWebpack: (config) => {
    config.devServer.port(8080)
  }
}
