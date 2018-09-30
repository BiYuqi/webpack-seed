import { About } from 'utils/tools'
import './about.scss'
console.log(About())

document.querySelector('.about-btn').addEventListener('click', () => {
  alert('about')
})