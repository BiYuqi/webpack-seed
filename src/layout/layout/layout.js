const layout = require('./layout.ejs')
const header = require('@/components/header/header.ejs')
const footer = require('@/components/footer/footer.ejs')
const bottom = require('@/components/bottom/bottom.ejs')
const navBar = require('@/components/nav-bar/nav-bar.ejs')
// 第三方库静态地址变量--->注入模板
const STATIC_FILE = require('@/common/libs/libs.js')

/**
 * 页面 title
 */
const printConfig = {
  pageTitle: ''
}

/**
 * 抽离bottom单独写出来 与nav一样
 * 只不过此处的bottom需要与footer组件合并
 */
const BottomTemplete = {
  bottom: bottom()
}

/**
 * 该处两个方法
 * 第一个为给每个页面注入title对象
 * 第二个是拼装页面,这个比较灵活，看自己需求怎么配置页面，目前给的是一个经典的布局 header + content + footer
 * return this作用是链式调用 用过jq的都懂 ~.~
 */
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
      footer: footer(Object.assign({}, BottomTemplete, componentBaseData)),
      navBar: navBar(componentBaseData),
      content
    }
    return layout(renderData)
  }
}

module.exports = moduleExports