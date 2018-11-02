const content = require('./test-demo.ejs')
const layout = require('layout/layout/layout.js')
const pageTitle = '测试页面'

const temp = layout.init({pageTitle}).run(content())

module.exports = temp