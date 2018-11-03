const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const utils = require('./utils.js')
const config = require('./config')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  output: {
    path: resolve('dist'),
    publicPath: config.build.assetsPublicPath,
    /**
     * 该方案页面路径显示不友好 暂不采取2018.10.07 00:07
     * 模块的js打包后跟着模块走
     * 首页的js单独打包进入js文件夹
     * 其他模块跟着自己的模块走
     * 注意：根据name匹配的首页 index
     * [name]表示entry每一项中的key，用以批量指定生成后文件的名称
     * https://webpack.js.org/configuration/output/#output-filename
     */
    // filename: (bundle) => {
    //   return bundle.chunk.name === 'index' ? 'js/[name].[chunkhash].js' : utils.assetsPath('[name]/[name].[chunkhash].js')
    // },
    filename: 'js/[name].[chunkhash].js',
    // 公共模块js单独放一个js文件夹
    chunkFilename: 'js/[name].[id].[chunkhash].js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        // 复用的文件，单独抽离 后续再优化此配置
        commons: {
          name: 'commons',
          chunks: 'all', 
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
        }
      }
    },
    /**
     * 提取 webpack 运行时代码
     * optimization.runtimeChunk 直接置为 true 或设置 name
     * webpack会添加一个只包含运行时(runtime)额外代码块到每一个入口
     * 注：这个需要看场景使用，会导致每个入口都加载多一份运行时代码
     */
    runtimeChunk: {
      name: 'manifest'
    },
    // 样式优化
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          cache: true,
          parallel: true,
          warnings: false,
          comments: false,
          compress: {
            // 移除 warning
            warnings: false,
            // 移除 console
            drop_console: true
          }
        }
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    // 打包前清理旧文件夹
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../'),
      verbose:  true
    }),

    // 压缩抽离样式
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),

    // 页面模板
    ...utils.htmlPlugin()
  ]
})
// 分析依赖图
// 执行 npm run analyzer 即可自动打开预览
if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig