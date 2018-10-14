'use strict'

const path = require('path')
// 输出路径
// 默认 '/'根目录
// 有需要二级目录的可在此配置
const BUILD_PATH = process.env.env_config === 'git' ? '/webpack-seed/' : '/'
module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: 'html',
    assetsPublicPath: '/',
    port: 9000,
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false,
    useEslint: true
  },
  build: {
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'html',
    /**
     * assetsPublicPath 设置的
     * 默认情况下，该配置方案假设你的应用是被部署在一个域名的根路径上例如 https://www.my-app.com/
     * 如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径
     * 例如，如果你的应用被部署在 https://www.my-app.com/my-app/
     * 则设置 baseUrl 为 /my-app/
     * @desc
     * 由于需要部署在git-pages 所以改配置临时改为/webpack-seed/
    */
    // 打包时 npm run build:git 该命令会打包的路径会自动带上项目地址/webpack-seed/
    // 普通打包(大部分) npm run build 默认 '/'
    // 该命令具体请看package.json scripts命令配置
    assetsPublicPath: BUILD_PATH,
    productionSourceMap: false,
    devtool: '#source-map'
  }
}
