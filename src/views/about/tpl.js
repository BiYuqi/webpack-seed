const content = require('./about.ejs')
const layout = require('layout')
const pageTitle = '关于我'

const temp = layout.init({pageTitle}).run(content({pageTitle}))

module.exports = temp