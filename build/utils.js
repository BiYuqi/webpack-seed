const path = require('path')
const glob = require('glob')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const baseConfig = require('./config.js')

// 普通模式页面配置
const NORMAL_PAGE_PATH = path.resolve(__dirname, '../src/views')

/**
 * 每个模块下 tpl.js 是页面模板入口
 * 每个模块下 index.js 是业务逻辑入口
*/

/**
 * 多入口配置
 */
exports.entries = () => {
  const entryFiles = glob.sync(NORMAL_PAGE_PATH + '/*/index.js')
  const entry = {}
  entryFiles.forEach(filePath => {
    const fileName = filePath.match(/(\w+)\/index.js$/)[1]
    entry[fileName] = filePath
  })
  return entry
}
/**
 * 多页面页面配置
 */
exports.htmlPlugin = () => {
  const entryHtml = glob.sync(NORMAL_PAGE_PATH + '/*/tpl.js')
  const arrHtml = []
  entryHtml.forEach(htmlPath => {
    const filename = htmlPath.match(/(\w+)\/tpl\.js$/)[1]
    let config = {
      template: htmlPath,
      filename: `${baseConfig.build.assetsSubDirectory}/${filename}/${filename}.html`,
      chunks: [
        'commons',
        'vendor',
        'manifest',
        filename
      ],
      inject: true,
      xhtml: true
    }
    if (process.env.NODE_ENV === 'production') {
      config = merge(config, {
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true
        },
        chunksSortMode: 'dependency'
      })
    }
    arrHtml.push(new HtmlWebpackPlugin(config))
  })
  return arrHtml
}
/**
 * 
 * @param {*} _path
 */
exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? baseConfig.build.assetsSubDirectory
    : baseConfig.dev.assetsSubDirectory

  return path.posix.join(assetsSubDirectory, _path)
}