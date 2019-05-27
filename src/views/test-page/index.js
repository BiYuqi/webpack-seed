/**
 * 默认样式+默认逻辑 common/js/base.js
 */
import '@/common/js/base'
import './test-page.scss'
// 测试用的工具函数
import __ from 'utils/dom'
import { movieList } from '@/api/movie'

class TestDemo {
  init() {
    this.testToolFun()
    this.testFetchData()
  }

  testToolFun() {
    __('.wbs-test-page_title').html('Test Page')

    __('.wbs-test-page_about-test').on('click', () => {
      alert('Test Page Js')
    })
  }

  testFetchData() {
    const aboutAjax = __('.wbs-test-page_about-ajax')
    aboutAjax.on('click', () => {
      aboutAjax.prop('disabled', true).css({
        cursor: 'not-allowed'
      })
      __('.wbs-test-page_movie').html('正在加载中......')

      let template = ''
      movieList({})
        .then(res => {
          console.log(res)
          if (res.data.code !== 200) {
            __('.wbs-test-page_movie').html(res.data.msg)
            return
          }

          const list = res.data.subjects
          list.forEach(item => {
            template += `<a href="${item.alt}" target="_blank">
            <li>${item.title} --- ${item.genres.join(',')}</li>
          </a>`
          })

          __('.wbs-test-page_movie').html(template)
          aboutAjax.prop('disabled', false).css({
            cursor: 'pointer'
          })
        })
        .catch(error => {
          __('.wbs-test-page_movie').html('请求失败,请检查网络, 重新发起请求')
          aboutAjax.prop('disabled', false).css({
            cursor: 'pointer'
          })
        })
    })
  }
}

new TestDemo().init()
