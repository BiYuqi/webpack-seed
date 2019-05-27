import content from './fonts-page.ejs'
import layout from 'layout/layoutAuth/layoutAuth.js'
const pageTitle = '图标示例'

const temp = layout.init({ pageTitle }).run(content())

export default temp
