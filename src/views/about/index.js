import { About } from 'utils/tools'
import './about.scss'

document.querySelector('.about-title').innerHTML = About()

document.querySelector('.about-btn').addEventListener('click', () => {
  alert('about')
})