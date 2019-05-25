import content from './news-tech.ejs'
import layout from 'layout/layout/layout.js'
const pageTitle = '新闻-科技'

const temp = layout.init({ pageTitle }).run(content())

export default temp
