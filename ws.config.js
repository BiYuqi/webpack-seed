const isProd = process.env.WS_ENV === 'production'

module.exports = {
  baseDir: '/',
  chainWebpack: config => {
    /**
     * 开发环境开启全量更新
     * 目前只有js scss改动会热更新, ejs文件并不会热更新，如果需要更新, 请配置如下:
     */
    if (!isProd) {
      config.devServer.watchContentBase(true)
    }
  }
}
