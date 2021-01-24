import content from './test-page.hbs'
import { Layout } from '../../layout'

export default new Layout({
  pageTitle: '测试页面'
}).render(content)
