/**
 * 默认样式+默认逻辑
 */
import 'assets/js/base'
// 测试用的工具函数
import { Shopping } from 'utils/tools'

console.log(Shopping())
document.querySelector('.shop-title').innerHTML = Shopping()
