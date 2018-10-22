/**
 * 默认样式+默认逻辑
 */
import '@/common/js/base'
import './index.scss'
// 测试用的工具函数
import { indexPage } from 'utils/tools'
import EjsTest from '@/templates/index.test.ejs'

document.querySelector('.index-title').innerHTML = indexPage()

// 测试ejs模板使用
const data = [
  {
    link: 'html/about.html',
    key: '关于页面'
  },
  {
    link: 'html/setting.html',
    key: '设置页面'
  },
  {
    link: 'html/login.html',
    key: '登录页面'
  },
  {
    link: 'html/news-tech.html',
    key: '多目录测试'
  }
]
// 注入模板数据
// 经过测试 ajax异步返回数据, 打包后亦正常渲染
$('.ejs-dynamic-inject').html(EjsTest({
  index: data
}))
// setTimeout(() => {
//   $('.ejs-dynamic-inject').html(EjsTest({
//     index: data
//   }))
// }, 1000)