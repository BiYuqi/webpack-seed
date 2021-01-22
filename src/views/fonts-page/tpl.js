import content from './fonts-page.ejs'
import { Layout } from '../../layout'

export default new Layout({
  pageTitle: '图标示例'
}).render(content())
