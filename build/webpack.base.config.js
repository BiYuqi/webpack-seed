const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const utils = require('./utils')
const config = require('./config')

const devMode = process.env.NODE_ENV !== 'production'

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const webpackEslintRule = () => ({
  test: /\.js$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: resolve('src'),
  options: {
    formatter: require('eslint-friendly-formatter')
  }
})

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
      ...(config.dev.useEslint ? [webpackEslintRule()] : []),
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
      // 处理页面引入的图片文件
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: ['img:src', 'link:href']
          }
        }
      },
      {
        test: /\.ejs$/,
        include: resolve('src'),
        loader: 'ejs-loader'
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
          },
          {
            loader: 'postcss-loader'
          }
        ]
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
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'media/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json'],
    // 配置项目文件别名
    alias: {
      '@': resolve('src'),
      assets: resolve('src/common/assets'),
      utils: resolve('src/common/utils'),
      layout: resolve('src/layout'),
      build: resolve('build')
    }
  }
}
