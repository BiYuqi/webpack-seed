/**
 * 默认样式+默认逻辑 common/js/base.js
 */
import '@/common/js/base'
import './test-page.scss'
import { movieList } from '@/api/movie'

class TestDemo {
  init() {
    this.testToolFun()
    this.testFetchData()
  }

  testToolFun() {
    $('.js-btn').on('click', () => {
      alert('点击被响应')
    })
  }

  testFetchData() {
    const $axiosBtn = $('.axios-btn')
    $axiosBtn.on('click', async () => {
      $axiosBtn.prop('disabled', true).css({
        cursor: 'not-allowed'
      })
      try {
        const res = await movieList({})
        if (res.code === 200) {
          alert('请求成功')
        }
      } catch (e) {
        alert('请求失败')
      }
    })
  }
}

new TestDemo().init()
