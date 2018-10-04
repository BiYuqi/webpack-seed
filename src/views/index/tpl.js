const content = require('./index.ejs')
const layout = require('layout/layout/layout.js')
const pageTitle = '首页'

const temp = layout.init({pageTitle}).run(content({pageTitle}))

module.exports = temp