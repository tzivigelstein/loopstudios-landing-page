const body = document.getElementById('root')

const menuButton = document.getElementById('mobile-nav__menu-icon')
const closeButton = document.getElementById('mobile-nav__close-icon')

const menu = document.getElementById('hero_hide-menu')

menuButton.addEventListener('click', showNav)
closeButton.addEventListener('click', hideNav)

function showNav() {
  body.style.overflow = 'hidden'
  menu.style.left = 0
}

function hideNav() {
  body.style.overflow = 'initial'
  menu.style.left = '-100%'
}
