/**
 * 默认样式+默认逻辑
 */
import '@/common/js/base'
import './index.scss'
// 测试用的dom函数
import __ from 'utils/dom'
import EjsTest from '@/templates/index.test.ejs'

class HomePage {
  init() {
    this.testTitle()
    this.testEjsTemplete()
  }

  testTitle() {
    __('.index-title').html('HOME')
  }

  testEjsTemplete() {
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
    __('.ejs-dynamic-inject').html(
      EjsTest({
        index: data
      })
    )
  }
  // 暂未用到
  testEjsTempleteAsync() {
    setTimeout(() => {
      $('.ejs-dynamic-inject').html(
        EjsTest({
          index: data
        })
      )
    }, 1000)
  }
}

new HomePage().init()
