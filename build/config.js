'use strict'

const path = require('path')
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
     * 默认为 /
    */
    // assetsPublicPath: '/',
    assetsPublicPath: '/webpack-seed/',
    productionSourceMap: false,
    devtool: '#source-map'
  }
}
