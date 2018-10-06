const layout = require('./layout.ejs')
const header = require('@/components/header/header.ejs')
const footer = require('@/components/footer/footer.ejs')
// 第三方库静态地址变量--->注入模板
const STATIC_FILE = require('build/libs.js')

const printConfig = {
  pageTitle: ''
}

const moduleExports = {
  init ({ pageTitle }) {
    printConfig.pageTitle = pageTitle
    return this
  },
  run (content) {
    // 此处后续可添加全局的初始化配置加载第三库的选项
    const componentBaseData = Object.assign({}, STATIC_FILE, printConfig)
    const renderData = {
      header: header(componentBaseData),
      footer: footer(componentBaseData),
      content
    }
    return layout(renderData)
  }
}

module.exports = moduleExports