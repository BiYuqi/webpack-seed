import content from './login-page.hbs'
import { Layout } from '../../layout'
import { StandardWithoutBase } from '../../constants/template'

export default new Layout({
  pageTitle: '登录',
  renderMode: StandardWithoutBase
}).render(content)
