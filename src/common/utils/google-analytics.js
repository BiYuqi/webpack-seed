// This file can be safely deleted, just to count user access.
// <!-- Global site tag (gtag.js) - Google Analytics -->
class GoogleAnalytics {
  constructor() {
    this.script = document.createElement('script')
    const state = {
      src: 'https://www.googletagmanager.com/gtag/js?id=UA-138873126-2',
      context: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-138873126-2');`
    }

    this.insertAsLink(this.createScript(), state.src)
    this.insertAsContext(this.createScript(), state.context)
  }

  createScript() {
    return document.createElement('script')
  }

  insertAsContext(script, context) {
    script.innerHTML = context
    document.body.appendChild(script)
  }

  insertAsLink(script, href) {
    script.setAttribute('aysnc', true)
    script.setAttribute('src', href)
    document.body.appendChild(script)
  }
}

export { GoogleAnalytics }
