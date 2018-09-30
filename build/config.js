'use strict'

const path = require('path')
module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: 'html',
    assetsPublicPath: '/',
    port: 8080,
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false,
  },
  build: {
    // Template for index.html 暂未用到
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'html',
    assetsPublicPath: '/',
    productionSourceMap: false,
    devtool: '#source-map'
  }
}
