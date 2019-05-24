import content from './index.ejs'
import layout from 'layout/layout/layout.js'
const pageTitle = '首页'

const temp = layout.init({ pageTitle }).run(content())

export default temp
