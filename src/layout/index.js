import baseLayout from './standard.ejs'
import baseLayoutWithout from './standardWithoutBase.ejs'
import headerBase from './base/headerBase/headerBase.ejs'
import footerBase from './base/footerBase/footerBase.ejs'
import header from './base/header/header.ejs'
import footer from './base/footer/footer.ejs'
// 第三方库静态地址变量--->注入模板
import { libsConfig } from '../common/libs'
// 注入全局script 添加统计信息或者埋点信息
import { googleAnalyzer } from '../common/libs/scriptTags'
import { Standard, StandardWithoutBase } from '../constants/template'

/**
 * 注入环境变量
 * 生成页面结构
 * 经典的布局 header + content + footer
 */
export class Layout {
  constructor(options = {}) {
    this.pageTitle = options.pageTitle
    this.renderMode = options.renderMode || Standard
    this.isProduction = process.env.WS_ENV === 'production'
  }

  render(content) {
    const EnvVariables = {
      pageTitle: this.pageTitle,
      isProduction: this.isProduction,
      ...libsConfig,
      googleAnalyzer
    }

    const skeleton = {
      [Standard]: baseLayout({
        headerBase: headerBase(EnvVariables),
        footerBase: footerBase(EnvVariables),
        header: header(),
        footer: footer(),
        content
      }),
      [StandardWithoutBase]: baseLayoutWithout({
        headerBase: headerBase(EnvVariables),
        footerBase: footerBase(EnvVariables),
        content
      })
    }

    return skeleton[this.renderMode]
  }
}
