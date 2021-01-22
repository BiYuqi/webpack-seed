$('.font-weight-normal').on('click', () => {
  alert('哎呦, 点到我头了~~')
})

const demoNav = [
  {
    pagePath: process.env.WS_PLATFORM === 'github' ? '/webpack-seed/index.html' : '/index.html',
    display: '首页'
  },
  {
    pagePath: process.env.WS_PLATFORM === 'github' ? '/webpack-seed/html/test-page.html' : '/html/test-page.html',
    display: '测试页'
  },
  {
    pagePath: process.env.WS_PLATFORM === 'github' ? '/webpack-seed/html/fonts-page.html' : '/html/fonts-page.html',
    display: '图标页'
  }
]

$('.nav-list').html(demoNav.map(info => `<a class="p-2 text-dark" href="${info.pagePath}">${info.display}</a>`))
$('.nav-wrapper').append(`
<a class="btn btn-outline-primary" href="${
  process.env.WS_PLATFORM === 'github' ? '/webpack-seed/html/login-page.html' : '/html/login-page.html'
}">登录</a>`)
