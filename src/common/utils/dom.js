class MinJQ {
  constructor(selector) {
    this.elem = document.querySelector(selector)
    return this
  }
  baseReg(name) {
    const reg = new RegExp(`(^|\\s)${name}(\\s|$)`, 'g')
    return reg.test(this.elem.className)
  }
  hasClass(name) {
    return this.baseReg(name) ? true : false
  }
  addClass(name) {
    if (typeof name !== 'string' || name.indexOf(' ') > -1) {
      throw Error('The name only suppor an string, and not contains space')
    }
    if (!this.baseReg(name)) {
      this.elem.className += ` ${name}`
    }
    return this
  }
  removeClass(name) {
    if (this.hasClass(name)) {
      const remove = new RegExp(`(^|\\s)${name}(\\s|$)`, 'g')
      this.elem.className = this.elem.className.replace(remove, '')
    }
    return this
  }
  toggleClass(name) {
    if (this.hasClass(name)) {
      this.removeClass(name)
    } else {
      this.addClass(name)
    }
    return this
  }
  on(type, fn) {
    this.elem &&
      this.elem.addEventListener(type, e => {
        fn && fn(e)
      })
    return this
  }
  html(html) {
    this.elem.innerHTML = html
    return this
  }
  val(val) {
    if (!val) {
      throw Error('The value cannot be empty')
    }
    this.elem.value = val
    return this
  }
  attr(...arg) {
    if (arg.length === 0) {
      throw Error('The attr method passes at least one parameter')
    }
    if (arg.length === 1) {
      this.elem.getAttribute(arg[0])
    }
    if (arg.length === 2) {
      this.elem.setAttribute(arg[0], arg[1])
    }
    return this
  }
  css(style) {
    if (typeof style !== 'object') {
      throw Error('The css method only support an object')
    }
    for (let i in style) {
      this.elem.style[i] = style[i]
    }
    return this
  }
  prop(...arg) {
    if (arg.length === 0 || arg.length > 2) {
      throw Error('The prop method passes at least one parameter')
    }
    if (arg.length === 1) {
      return this.elem[arg[0]]
    }
    if (arg.length === 2) {
      this.elem[arg[0]] = arg[1]
    }
    return this
  }
  getStyle() {}
}
const minJq = arg => {
  return new MinJQ(arg)
}
export default minJq
