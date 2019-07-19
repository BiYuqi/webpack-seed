import content from './news-page.ejs'
import layout from 'layoutBase'
const pageTitle = '新闻-科技'

const temp = layout.init({ pageTitle }).run(content())

export default temp
