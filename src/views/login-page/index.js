/**
 * 默认样式+默认逻辑
 */
import '@/common/js/base'
import './login-page.scss'

$('.ws-login_btn').on('click', () => {
  // 为了部署演示版加了publicPath
  window.location.href = process.env.WS_PLATFORM === 'github' ? '/webpack-seed/' : '/'
})
