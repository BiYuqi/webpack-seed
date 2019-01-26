/**
 * 默认样式+默认逻辑
 */
import '@/common/js/base'
import './login.scss'
import __ from 'utils/dom'

__('.login-btn').on('click', () => {
  window.location.href = '../index.html'
})
