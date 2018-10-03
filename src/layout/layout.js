const layout = require('./layout.ejs')
const header = require('@/components/header/header.ejs')
const footer = require('@/components/footer/footer.ejs')
// const navBar = require('@/components/nab-bar/nav-bar.ejs')

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
    const componentBaseData = Object.assign({}, printConfig)
    const renderData = {
      header: header(componentBaseData),
      footer: footer(componentBaseData),
      // navBar: navBar(componentBaseData),
      content
    }
    return layout(renderData)
  }
}

module.exports = moduleExports