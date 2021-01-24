const webpack = require('webpack')
const Config = require('webpack-chain')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve, entries, htmlPluginOptions } = require('./utils')
const loadEnv = require('./loadEnv')

// 加载用户自定义环境变量
const envs = loadEnv()

const config = new Config()

const entriesFilePath = entries()

config.context(resolve(''))

Object.keys(entriesFilePath).forEach((name) => {
  config.entry(name).add(entriesFilePath[name]).end()
})

config.module
  .rule('compile')
  .test(/\.([m|j])s$/)
  .include.add(resolve('src'))
  .end()
  .use('babel')
  .loader('babel-loader')
  .end()

config.module
  .rule('css')
  .include.add(resolve('src'))
  .end()
  .test(/\.s[ac]ss$/)
  .use('style-loader')
  .loader('style-loader')
  .end()
  .use('css-loader')
  .loader('css-loader')
  .end()
  .use('sass-loader')
  .loader('sass-loader')
  .end()
  .use('postcss-loader')
  .loader('postcss-loader')
  .end()

// support ejs
config.module
  .rule('ejs')
  .test(/\.ejs$/)
  .use('ejs-loader')
  .loader('ejs-loader')
  .end()

// support handlebars
config.module
  .rule('handlebars')
  .test(/\.hbs$/)
  .use('handlebars-loader')
  .loader('handlebars-loader')
  .end()

config.module
  .rule('font')
  .test(/\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/)
  .use('url-loader')
  .loader('url-loader')
  .options({
    limit: 10000,
    name: 'fonts/[name].[hash:7].[ext]'
  })
  .end()

config.module
  .rule('images')
  .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
  .use('url-loader')
  .loader('url-loader')
  .options({
    limit: 10000,
    name: 'image/[name].[hash:7].[ext]'
  })
  .end()

config.resolve.extensions
  .add('.js')
  .add('.json')
  .add('.ejs')
  .end()

config.resolve.alias
  .set('@', resolve('src'))
  .set('@layout', resolve('src/layout'))
  .set('@common', resolve('src/common'))
  .end()

htmlPluginOptions().forEach((htmlOptions, index) => {
  config.plugin(`html-plugin-${index}`).use(HtmlWebpackPlugin, [htmlOptions])
})

// 写入全局变量
if (Object.keys(envs).length) {
  Object.keys(envs).forEach(env => {
    envs[env] = JSON.stringify(envs[env])
  })
  config.plugin('define-env').use(webpack.DefinePlugin, [{
    'process.env': envs
  }])
}

module.exports = config
