const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const utils = require('./utils.js')
const config = require('./config.js')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  output: {
    path: resolve('dist'),
    publicPath: '/',
    /**
     * 模块的js打包后跟着模块走
     * 首页的js单独打包进入js文件夹
     * 其他模块跟着自己的模块走
     * 注意：根据name匹配的首页 index
     */
    filename: (bundle) => {
      return bundle.chunk.name === 'index' ? 'js/[name].[chunkhash].js' : utils.assetsPath('[name]/[name].[chunkhash].js')
    },
    // filename: 'js/[name].[chunkhash].js',
    // 公共模块js单独放一个js文件夹
    chunkFilename: 'js/[name].[id].[chunkhash].js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        // 复用的文件，单独抽离 后续再优化此配置
        commons: {
          name: "commons",
          chunks: "all", 
          minChunks: 2,
          minSize: 1,
          priority: 0 
        },
        // 提取 node_modules 中代码
        vendor: { 
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all', 
          priority: 10
        },
        /**
         * 对应原来的 minchunks: Infinity
         * 提取 webpack 运行时代码
         * 直接置为 true 或设置 name
         */
        runtimeChunk: {
          name: 'manifest'
        }
      }
    },
    // 样式优化
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        // set to true if you want JS source maps
        sourceMap: false
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../'),
      verbose:  true
    }),
    // cant't build in css file, i dont't konw why 2018.10.02 19:57 by BYq
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),

    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, "../index.html"),
      // 此处相对于 path: resolve('dist')
      to: './',
      ignore: ['.*']
    }])

  ].concat(utils.htmlPlugin())
})

module.exports = webpackConfig