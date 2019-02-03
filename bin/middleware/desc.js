const check = name => {
  if (/\d/.test(name)) {
    return true
  }
  return false
}

const hasNest = name => {
  return name.indexOf('/') > -1
}

const descCheck = desc => {
  if (!desc) {
    return '不能为空'
  }
  if (check(desc)) {
    return '模块不能包含数字'
  }
  return true
}

// TODO
// 此处判断是否存在该目录
module.exports = descCheck
