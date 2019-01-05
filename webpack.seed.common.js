'use strict'
const path = require('path')

module.exports = {
  /**
   * 项目文件输出路径, 默认 '/'根目录
   * 有需要二级目录的可在此配置
   * 或者需要配置CDN地址的都可以在此处配置
   * 本项目由于需要在github的gitpage预览,所以配置了二级目录以便预览
   * @type {String}
   * @default '/'
  */
  BUILD_PATH: process.env.env_config === 'git' ? '/webpack-seed/' : '/',
  /**
   * 部署应用生成的生产环境构建文件的目录, 打包输出文件夹名 默认dist不建议修改
   * @param {string}
   * @default 'dist'
  */
  OUT_PUT_FOLDER_NAME: 'dist',
  /**
   * 本地开发 webpack-dev-server的选项配置
   * @param {string}
   * @default 'dist'
  */
  NORMAL_PAGE_PATH: path.resolve(__dirname, './src/views'),
  /**
   * 页面逻辑名称(即src/views/各个模块内部名称) 默认index.js
   * @type {String} 
   * @default 'index'
  */
  STATIC_JS_NAME: 'index',
  /**
   * 页面模板默认名称 默认tpl.ejs
   * @type {String}
   * @default 'tpl'
  */
  STATIC_TEMPLATE_NAME: 'tpl',
  /**
   * 页面输出html文件夹命名
  */
  OUT_PUT_HTML_FOLDER: 'html'
}