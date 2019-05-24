import layout from './layout.ejs'
import headerBase from '../base/headerBase/headerBase.ejs'
import footerBase from '../base/footerBase/footerBase.ejs'
import header from '../base/header/header.ejs'
import footer from '../base/footer/footer.ejs'
// 第三方库静态地址变量--->注入模板
import STATIC_FILE from '@/common/libs/libs.js'

// 需要全局注入的script脚本，支持注入head & body底部
// const scriptTags = re

/**
 * 页面 title
 */
const printConfig = {
  pageTitle: ''
}

/**
 * 该处两个方法
 * 第一个为给每个页面注入title对象
 * 第二个是拼装页面,这个比较灵活，看自己需求怎么配置页面，目前给的是一个经典的布局 header + content + footer
 * return this作用是链式调用 用过jq的都懂 ~.~
 */
const moduleExports = {
  init({ pageTitle }) {
    printConfig.pageTitle = pageTitle
    return this
  },
  run(content) {
    // 此处后续可添加全局的初始化配置加载第三库的选项
    const componentBaseData = Object.assign({}, STATIC_FILE, printConfig)
    const renderData = {
      headerBase: headerBase(componentBaseData),
      footerBase: footerBase(componentBaseData),
      header: header(),
      footer: footer(),
      content
    }
    return layout(renderData)
  }
}

export default moduleExports
