import content from './login-page.ejs'
import { Layout } from '../../layout'

export default new Layout({
  pageTitle: '登录',
  renderMode: 'standardWithoutBase'
}).render(content())
