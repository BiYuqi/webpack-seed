const fs = require('fs')
const path = require('path')
const glob = require('glob')
const merge = require('webpack-merge')

const resolve = (dir = '') => {
  return path.resolve(__dirname, '..', dir)
}

exports.resolve = resolve

/**
 * 多入口配置
 */
exports.entries = () => {
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
exports.htmlPlugin = () => {
  const entryHtml = glob.sync(resolve('src/views') + `/**/*/tpl.js`)
  const arrHtml = []
  entryHtml.forEach((htmlPath) => {
    const htmlReg = new RegExp(`([^\/]+)\/tpl\.js$`)
    const filename = htmlPath.match(htmlReg)[1]
    let config = {
      template: htmlPath,
      /**
       * 此处逻辑为，单独抽离index.html放到根目录
       * 其余文件打入html文件件
       */
      filename: filename === 'index' ? `${filename}.html` : `html/${filename}.html`,
      /**
       * 配置网站favicon.ico
       * 自动注入到页面
       */
      favicon: resolve('favicon.ico'),
      /**
       * 此处chunks名字与webpack.prod.config.js配置一致
       * optimization.splitChunks.cacheGroups
       * optimization.runtimeChunk
       */
      chunks: ['commons', 'vendor', 'manifest', filename],
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
    arrHtml.push(config)
  })
  return arrHtml
}

exports.findExistSync = (context, entry) => {
  return fs.existsSync(path.resolve(context, entry))
}
