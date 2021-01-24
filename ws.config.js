module.exports = {
  baseDir: process.env.WS_PLATFORM === 'github' ? '/webpack-seed/' : '/',
  // 匹配静态资源, 使用handlebars时, 建议配置assetsRule, 默认是common目录, 用来页面引用静态资源
  assetsRule: /common/,
  chainWebpack: config => {
    config.devServer.port(8080)
  }
}
