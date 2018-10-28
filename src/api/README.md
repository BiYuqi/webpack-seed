# 介绍

## request.js

基于axios二次封装，主要配置:

1.基础接口地址
2.开发环境配置
3.拦截器相关配置

## 基于request配置接口

> 以movie.js为例子
```js
// 引入request.js(封装后的axios)
import request from './request'

/**
 * @method
 * @desc 导出接口方法 GET
 * @desc 注意get的请求参数字段是params
 * @desc 以下皆采用ES6简写对象
*/
export const movieList = (params) => {
  return request({
    // 接口地址，基础baseUrl在request已经配置
    url: '/movie/in_theaters',
    // 请求方法
    method: 'GET',
    // get请求参数
    params
  })
}
```
> **注意: DELETE 请求方法参数传递与 GET 一样**

```js
/**
 * @method 
 * @desc 导出接口方法
 * @desc 注意POST的请求参数字段是data
 * @desc 以下皆采用ES6简写对象
*/
export const postDemo = (data) => {
  return request({
    // 接口地址， 基础baseUrl在request已经配置
    url: '/xxxxx/xxxx',
    // 请求方法
    method: 'POST',
    // post请求参数
    data
  })
}
```
> **注意: PUT 请求方法参数传递与 POST 一样**

## 使用方法

> 以movie.js为例子
```js
// 引入方法
import { movieList } from '@/api/movie'

// 调用
movieList({}).then((res) => {
  // 接口成功啦
}).catch(e => {
  // 接口调用失败了
})

```