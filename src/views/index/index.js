/**
 * 默认样式+默认逻辑
 */
import '@/common/js/base'
import './index.scss'
// 测试用的dom函数
import __ from 'utils/dom'
import EjsTest from '@/templates/index.test.ejs'

__('.index-title').html('HOME')
// 测试ejs模板使用
const data = [
  {
    link: 'html/test-demo.html',
    key: '测试页面',
    icon: 'iconfont icon-rocket'
  },
  {
    link: 'html/fonts-demo.html',
    key: '内置图标库',
    icon: 'iconfont icon-Dollar'
  },
  {
    link: 'html/login.html',
    key: '登录页面',
    icon: 'iconfont icon-login'
  },
  {
    link: 'html/news-tech.html',
    key: '多目录测试',
    icon: 'iconfont icon-edit'
  }
  
]
// 注入模板数据
// 经过测试 ajax异步返回数据, 打包后亦正常渲染
__('.ejs-dynamic-inject').html(EjsTest({
  index: data
}))
// setTimeout(() => {
//   $('.ejs-dynamic-inject').html(EjsTest({
//     index: data
//   }))
// }, 1000)