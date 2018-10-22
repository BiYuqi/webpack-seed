const content = require('./setting.ejs')
const layout = require('layout/layout/layout.js')
const pageTitle = '设置'

const temp = layout.init({pageTitle}).run(content())

module.exports = temp