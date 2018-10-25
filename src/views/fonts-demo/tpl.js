const content = require('./fonts-demo.ejs')
const layout = require('layout/layoutAuth/layoutAuth.js')
const pageTitle = '图标示例'

const temp = layout.init({pageTitle}).run(content())

module.exports = temp