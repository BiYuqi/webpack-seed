import content from './index.hbs'
import { Layout } from '../../layout'

export default new Layout({
  pageTitle: '首页'
}).render(content)
