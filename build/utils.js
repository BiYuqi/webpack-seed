const path = require('path')
const glob = require('glob')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const baseConfig = require('./config.js')

/**
 * 多入口配置
 */
exports.entries = () => {
  const entryFiles = glob.sync(baseConfig.NORMAL_PAGE_PATH + `/*/${baseConfig.STATIC_JS_NAME}.js`)
  const entry = {}
  entryFiles.forEach(filePath => {
    const fileNameReg = new RegExp(`(\\w+)\/${baseConfig.STATIC_JS_NAME}.js$`)
    const fileName = filePath.match(fileNameReg)[1]
    entry[fileName] = filePath
  })
  return entry
}
/**
 * 多页面页面配置
 */
exports.htmlPlugin = () => {
  const entryHtml = glob.sync(baseConfig.NORMAL_PAGE_PATH + `/*/${baseConfig.STATIC_TEMPLATE_NAME}.js`)
  const arrHtml = []
  entryHtml.forEach(htmlPath => {
    const htmlReg = new RegExp(`(\\w+)\/${baseConfig.STATIC_TEMPLATE_NAME}\.js$`)
    const filename = htmlPath.match(htmlReg)[1]
    let config = {
      template: htmlPath,
      filename: filename === 'index' ? `${filename}.html` : `${baseConfig.build.assetsSubDirectory}/${filename}.html`,
      // filename: `${filename}.html`,
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