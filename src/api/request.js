import axios from 'axios'

/**
 * 全局的接口配置在此处
 */

const server = axios.create({
  // 测试用的接口，比较慢，豆瓣电影的数据
  baseURL: 'https://heroku-douban-api.herokuapp.com',

  // 区分环境(只有2个)
  // baseURL: process.env.NODE_ENV === 'development' ? '开发环境地址' : '生产环境地址',

  // 多环境配置(2+)可以通过命令行控制 
  // 本项目配置如下(仅仅用于区分github环境)
  // "build:git": "cross-env NODE_ENV=production env_config=git webpack --config build/webpack.prod.config.js"
  // 其中 env_config=git 意思是git环境
  // https://github.com/BiYuqi/webpack-seed/blob/master/build/config.js#L23
  // https://github.com/BiYuqi/webpack-seed/blob/master/package.json#L9
  /**
   * @example {实战} 多环境区分接口地址(2+环境)
   * 注意：需要在package.json中scripts配置
  */
  // "dev:dev": "cross-env NODE_ENV=development env_config=dev webpack-dev-server --open --inline --mode development --config build/webpack.dev.config",
  // "build:test": "cross-env NODE_ENV=production env_config=test webpack --config build/webpack.prod.config.js",
  // "build:pro": "cross-env NODE_ENV=production env_config=pro webpack --config build/webpack.prod.config.js"
  // baseURL: process.env.env_config === 'dev' ? '本地开发环境地址' : process.env.env_config === 'test' ? '测试环境地址' : '生产环境地址',
  timeout: 30000
})

server.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/json; charset=UTF-8'
  // config.headers['Authorization'] = 'Your server return token'
  return config
}, error => {
  return Promise.reject(error)
})

server.interceptors.response.use(response => {
  /**
   * 这里可以做接口相关的拦截设置
   */
  // const res = response.data
  // if (res.code === 401) {
  //   console.log('账户登录失效')
  // }
  return response
}, error => {
  return Promise.reject(error)
})

export default server
