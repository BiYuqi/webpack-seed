import axios from 'axios'

/**
 * 全局的接口配置在此处
 */
const server = axios.create({
  // 测试用的接口, 已经挂掉.
  baseURL: process.env.WS_BASE_API,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  }
})

server.interceptors.request.use(
  config => {
    // config.headers['Authorization'] = 'Your server return token'
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

server.interceptors.response.use(
  response => {
    /**
     * 这里可以做接口相关的拦截设置
     */
    // const res = response.data
    // if (res.code === 401) {
    //   console.log('账户登录失效')
    // }
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default server
