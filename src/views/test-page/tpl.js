import content from './test-page.ejs'
import layout from 'layoutBase'
const pageTitle = '测试页面'

const temp = layout.init({ pageTitle }).run(content())

export default temp
