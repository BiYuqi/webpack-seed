const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// Warning: This project is no longer maintained. It does not support Webpack 5.
// https://github.com/numical/script-ext-html-webpack-plugin#deprecation-warning
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')

const config = require('./base')
const { resolve } = require('./utils')
const options = require('./options')

config
  .mode('production')
  .output.path(resolve(options.outputDir))
  .publicPath(options.baseDir)
  .filename('js/[name].[chunkhash].js')
  .chunkFilename('js/[name].[id].[chunkhash].js')
  .end()

/********* Mini Css Building Polyfill Start ********/
config.module.rule('css').uses.delete('style-loader')

config.module.rule('css').use(MiniCssExtractPlugin).loader(MiniCssExtractPlugin.loader).before('css-loader').end()
/********* Mini Css Building Polyfill End ********/

config
  .plugin('clean')
  .use(CleanWebpackPlugin)
  .end()
  .plugin('min-css')
  .use(MiniCssExtractPlugin, [
    {
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }
  ])
  .end()
  .plugin('inline-manifest')
  .use(ScriptExtHtmlWebpackPlugin, [
    {
      inline: /manifest\..*\.js$/
    }
  ])
  .end()

config.optimization
  .runtimeChunk({ name: 'manifest' })
  .splitChunks({
    cacheGroups: {
      commons: {
        name: 'commons',
        chunks: 'all',
        minChunks: 2,
        minSize: 1,
        priority: 0
      },
      vendor: {
        name: 'vendor',
        test: /[\\/]node_modules[\\/]/,
        chunks: 'initial',
        priority: 10
      }
    }
  })
  .minimizer('terser')
  .use(TerserPlugin)
  .end()
  .minimizer('css')
  .use(OptimizeCSSAssetsPlugin, [{ cssProcessorOptions: { safe: true } }])
  .end()

// 自定义配置读取
options.baseDir && config.output.publicPath(options.baseDir)
options.outputDir && config.output.path(resolve(options.outputDir))
options.chainWebpack && options.chainWebpack(config)

module.exports = config.toConfig()
