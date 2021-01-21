import content from './fonts-page.ejs'
import { Layout } from '../../layout'
import { StandardWithoutBase } from '../../constants/template'

export default new Layout({
  pageTitle: '图标示例',
  renderMode: StandardWithoutBase
}).render(content())
