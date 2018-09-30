import { About } from 'utils/tools'
import about from './about.scss'
about.use()
console.log(About())

document.querySelector('.about-btn').addEventListener('click', () => {
  alert('about')
})