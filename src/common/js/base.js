// 公用css 引入入口
import '../css/base.scss'

// @babel/polyfill
import '@babel/polyfill'

// 公用js逻辑编写区域
import './header'
import './footer'

// google analytics
import { GoogleAnalytics } from '../utils/google-analytics'

if (process.env.NODE_ENV === 'production') {
  new GoogleAnalytics()
}
