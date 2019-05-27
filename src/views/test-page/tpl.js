import content from './test-page.ejs'
import layout from 'layout/layout/layout.js'
const pageTitle = '测试页面'

const temp = layout.init({ pageTitle }).run(content())

export default temp
