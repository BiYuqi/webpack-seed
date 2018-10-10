/**
 * 默认样式+默认逻辑 common/js/base.js
 */
import 'assets/js/base'
import './about.scss'
// 测试用的工具函数
import { About } from 'utils/tools'


document.querySelector('.about-title').innerHTML = About()

document.querySelector('.about-btn').addEventListener('click', () => {
  alert('about')
  // test jquery
  console.log($('.about-title'))
})