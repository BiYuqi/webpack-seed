import content from './news-page.ejs'
import { Layout } from '../../../layout'

export default new Layout({
  pageTitle: '新闻-科技'
}).render(content())
