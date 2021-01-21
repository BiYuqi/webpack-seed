import content from './test-page.ejs'
import { Layout } from '../../layout'

export default new Layout({
  pageTitle: '测试页面'
}).render(content())
