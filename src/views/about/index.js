/**
 * 默认样式+默认逻辑 common/js/base.js
 */
import '@/common/js/base'
import './about.scss'
// 测试用的工具函数
import { About } from 'utils/tools'
import __ from 'utils/dom'
import { movieList } from '@/api/movie'


__('.about-title').html(About())

__('.about-test').on('click', () => {
  alert('about')
})

// render moview list
const aboutAjax = __('.about-ajax')
aboutAjax.on('click', () => {
  aboutAjax.prop('disabled', true)
  aboutAjax.css({
    cursor: 'not-allowed'
  })
  __('.movie-item').html('正在加载中......')

  let template = ''
  movieList({}).then(res => {
    const list = res.data.subjects
    list.forEach(item => {
      template += `<a href="${item.alt}" target="_blank">
        <li>${item.title} --- ${item.genres.join(',')}</li>
      </a>`
    })
    
    __('.movie-item').html(template)
    aboutAjax.prop('disabled', false)
    aboutAjax.css({
      cursor: 'pointer'
    })
  }).catch(error => {
    __('.movie-item').html('请求失败,请检查网络, 重新发起请求')
    aboutAjax.prop('disabled', false)
    aboutAjax.css({
      cursor: 'pointer'
    })
  })
})
