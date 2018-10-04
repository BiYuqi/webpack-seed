const content = require('./goods.ejs')
const layout = require('layout/layout/layout.js')
const pageTitle = '商品'

const temp = layout.init({pageTitle}).run(content({pageTitle}))

module.exports = temp