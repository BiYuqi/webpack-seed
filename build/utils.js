const path = require('path')
const glob = require('glob')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 普通模式页面配置
const NORMAL_PAGE_PATH = path.resolve(__dirname, '../normal/views')

/**
 * 多入口配置
 */
exports.entries = () => {
  const entryFiles = glob.sync(NORMAL_PAGE_PATH + '/*/*js')
  const entry = {}
  entryFiles.forEach(filePath => {
    const fileName = filePath.match(/(\w+)\.js$/)[1]
    entry[fileName] = filePath
  })
  return entry
}
/**
 * 多页面页面配置
 */
exports.htmlPlugin = () => {
  const entryHtml = glob.sync(NORMAL_PAGE_PATH + '/*/*.html')
  const arrHtml = []
  entryHtml.forEach(htmlPath => {
    const filename = htmlPath.match(/(\w+)\.html$/)[1]
    let config = {
      template: htmlPath,
      filename: `${filename}/${filename}.html`,
      chunks: [
        'manifest',
        'vendor',
        filename
      ],
      inject: true
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