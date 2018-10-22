/**
 * 默认样式+默认逻辑
 */
import '@/common/js/base'
import './login.scss'

$('.login-btn').on('click', () => {
  window.location.href = '../index.html'
})
console.log('login page')