const content = require('./shopping.ejs')
const layout = require('layout/layout/layout.js')
const pageTitle = '购物车'

const temp = layout.init({pageTitle}).run(content({pageTitle}))

module.exports = temp