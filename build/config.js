'use strict'

const path = require('path')

// 页面模块路径(页面存放地址)
const NORMAL_PAGE_PATH = path.resolve(__dirname, '../src/views')

/**
 * 可自行修改,在此配置，需要与页面对应
 * 每个模块下 tpl.js 是页面模板入口
 * 每个模块下 index.js 是业务逻辑入口
*/

// 页面逻辑名称 默认index.js
const STATIC_JS_NAME = 'index'

// 页面模板默认名称 默认tpl.ejs
const STATIC_TEMPLATE_NAME = 'tpl'

// 输出路径
// 默认 '/'根目录
// 有需要二级目录的可在此配置
const BUILD_PATH = process.env.env_config === 'git' ? '/webpack-seed/' : '/'

/**
 * 页面输出html文件夹命名
*/
const OUT_PUT_HTML_FOLDER = 'html'

/**
 * 打包输出文件夹名 默认dist 不建议修改
*/
const OUT_PUT_FOLDER_NAME = 'dist'

module.exports = {
  NORMAL_PAGE_PATH,
  STATIC_JS_NAME,
  STATIC_TEMPLATE_NAME,
  OUT_PUT_FOLDER_NAME,
  dev: {
    // Paths
    assetsSubDirectory: OUT_PUT_HTML_FOLDER,
    assetsPublicPath: '/',
    // 默认端口
    port: 9000,
    // 自动打开浏览器
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false,
    useEslint: true,
    /**
     * https://webpack.docschina.org/configuration/dev-server/#devserver-proxy
     * 开发环境跨域配置, 默认关闭, 配置如下
     * 请求到 /api/users 现在会被代理到请求 http://localhost:3000/api/users
     * pathRewrite重写路径
    */
    // proxyTable: {
    //   '/api': {
    //     target: 'http://localhost:3000',
    //     pathRewrite: {
    //       '^/api' : ''
    //     }
    //   }
    // }
    proxyTable: {}
  },
  build: {
    assetsRoot: path.resolve(__dirname, `../${OUT_PUT_FOLDER_NAME}`),
    assetsSubDirectory: OUT_PUT_HTML_FOLDER,
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
    devtool: '#source-map',
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
