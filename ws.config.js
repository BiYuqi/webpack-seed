module.exports = {
  baseDir: process.env.WS_PLATFORM === 'github' ? '/webpack-seed/' : '/',
  chainWebpack: config => {}
}
