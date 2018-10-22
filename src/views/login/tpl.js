const content = require('./login.ejs')
const layout = require('layout/layoutAuth/layoutAuth.js')
const pageTitle = '登录'

const temp = layout.init({pageTitle}).run(content())

module.exports = temp