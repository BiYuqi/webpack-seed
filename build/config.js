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
    assetsPublicPath: '/',
    productionSourceMap: false,
    devtool: '#source-map'
  }
}
