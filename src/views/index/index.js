/**
 * 默认样式+默认逻辑
 */
import '@/common/js/base'
import './index.scss'
import CardEjs from './card.ejs'

class HomePage {
  init() {
    this.renderContent()
  }

  renderContent() {
    // 测试ejs模板使用
    const data = [
      '支持前后端分离开发',
      '配置完整的打包方案',
      '支持本地开发热更新',
      'EJS 模板编译',
      'Base64 图片，雪碧图',
      '内置字体图标库 500+, 开箱即用',
      '支持 ES6 编写源码，编译生成生产代码 (最新支持可选链，展开操作符)',
      '...'
    ]
    $('.ws-home__content').html(CardEjs({ data }))
  }
}

new HomePage().init()
