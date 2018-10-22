const content = require('./news-tech.ejs')
const layout = require('layout/layout/layout.js')
const pageTitle = '新闻-科技'

const temp = layout.init({pageTitle}).run(content())

module.exports = temp