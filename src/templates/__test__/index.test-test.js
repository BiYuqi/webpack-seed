import { expect } from 'chai'
import EjsTest from '@/templates/index.test.ejs'

describe('Test Ejs Template', () => {
  const data = {
    index: [
      {
        link: 'html/test-demo.html',
        key: '测试页面',
        icon: 'iconfont icon-rocket'
      }
    ]
  }
  const html = EjsTest(data)
  const classReg = /class="([^"]+)"/gm
  const hrefReg = /href="([^"]+)"/

  it('should render correct className ejs-dynamic-item', () => {
    expect(classReg.exec(html)[1]).to.equal('ejs-dynamic-item')
  })

  it('should render correct icon className iconfont icon-rocket', () => {
    expect(classReg.exec(html)[1]).to.equal('iconfont icon-rocket')
  })

  it('should render correct href link', () => {
    expect(hrefReg.exec(html)[1]).to.equal('html/test-demo.html')
  })
})
