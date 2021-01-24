import handlebars from 'handlebars'
import baseLayout from './standard.hbs'
import baseLayoutWithout from './standardWithoutBase.hbs'
import headerBase from './base/headerBase/headerBase.hbs'
import footerBase from './base/footerBase/footerBase.hbs'
import header from './base/header/header.hbs'
import footer from './base/footer/footer.hbs'

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
      googleAnalyzer: googleAnalyzer()
    }

    const skeleton = {
      [Standard]: baseLayout({
        headerBase: new handlebars.SafeString(headerBase(EnvVariables)),
        footerBase: new handlebars.SafeString(footerBase(EnvVariables)),
        header: new handlebars.SafeString(header()),
        footer: new handlebars.SafeString(footer()),
        content: new handlebars.SafeString(content())
      }),
      [StandardWithoutBase]: baseLayoutWithout({
        headerBase: new handlebars.SafeString(headerBase(EnvVariables)),
        footerBase: new handlebars.SafeString(footerBase(EnvVariables)),
        content: new handlebars.SafeString(content())
      })
    }

    console.log(skeleton)

    return skeleton[this.renderMode]
  }
}
