const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const utils = require('./utils')

const devMode = process.env.NODE_ENV !== 'production'

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: utils.entries(),
  output: {
    path: resolve('dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      // 处理页面引入的图片文件
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            //开启link的替换
            attrs: ['img:src', 'link:href']
          }
        }
      },
      // url-loader 底层是依赖file-loader的
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'image/[name].[hash:7].[ext]'
        }
      },
      // TODO 后期进行项目改造，复用页面
      {
        test: /\.ejs$/,
        loader: 'ejs-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    // 配置项目文件别名
    alias: {
      '@': resolve('src'),
      'assets': resolve('src/common/assets'),
      'utils': resolve('src/common/utils')
    }
  }
}