const fs = require('fs')
const path = require('path')
const glob = require('glob')
const merge = require('webpack-merge')

function resolve (dir = '') {
  return path.resolve(__dirname, '..', dir)
}

const isProduction = process.env.NODE_ENV === 'production'

/**
 * 多入口配置
 */
function entries() {
  const entryFiles = glob.sync(resolve('src/views') + `/**/*/index.js`)
  const entry = {}
  entryFiles.forEach((filePath) => {
    const fileNameReg = new RegExp(`([^\/]+)\/index.js$`)
    const fileName = filePath.match(fileNameReg)[1]
    entry[fileName] = filePath
  })
  return entry
}
/**
 * 多页面页面配置
 */
function htmlPluginOptions() {
  const entryHtml = glob.sync(resolve('src/views') + `/**/*/tpl.js`)
  const arrHtml = []
  entryHtml.forEach((htmlPath) => {
    const htmlReg = new RegExp(`([^\/]+)\/tpl\.js$`)
    const filename = htmlPath.match(htmlReg)[1]
    let config = {
      template: htmlPath,
      /**
       * 此处逻辑为，单独抽离index.html放到根目录
       * 其余文件打入html目录
       */
      filename: filename === 'index' ? `${filename}.html` : `html/${filename}.html`,
      favicon: resolve('favicon.ico'),
      chunks: ['commons', 'vendor', 'manifest', filename],
      inject: true,
      xhtml: true,
      minify: isProduction
    }
    if (isProduction) {
      config = merge(config, {
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true
        },
        chunksSortMode: 'dependency'
      })
    }
    arrHtml.push(config)
  })
  return arrHtml
}

function findExistSync(context, entry) {
  return fs.existsSync(path.resolve(context, entry))
}


module.exports = {
  resolve,
  entries,
  htmlPluginOptions,
  isProduction,
  findExistSync
}
