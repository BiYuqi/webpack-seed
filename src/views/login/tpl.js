import content from './login.ejs'
import layout from 'layout/layoutAuth/layoutAuth.js'
const pageTitle = '登录'

const temp = layout.init({ pageTitle }).run(content())

export default temp
