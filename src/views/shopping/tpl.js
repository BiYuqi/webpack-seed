const content = require('./shopping.ejs')
const layout = require('layout')
const pageTitle = '购物车'

const temp = layout.init({pageTitle}).run(content({pageTitle}))

module.exports = temp