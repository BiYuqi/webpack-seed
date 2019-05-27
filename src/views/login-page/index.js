/**
 * 默认样式+默认逻辑
 */
import '@/common/js/base'
import './login-page.scss'
import __ from 'utils/dom'

__('.wbs-login_btn').on('click', () => {
  window.location.href = '/'
})
