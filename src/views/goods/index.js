/**
 * 默认样式+默认逻辑
 */
import 'assets/js/base'
// 测试用的工具函数
import { Good } from 'utils/tools'

console.log(Good())
document.querySelector('.good-title').innerHTML = Good()
