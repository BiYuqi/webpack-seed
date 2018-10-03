const content = require('./goods.ejs')
const layout = require('layout')
const pageTitle = '商品'

const temp = layout.init({pageTitle}).run(content({pageTitle}))

module.exports = temp