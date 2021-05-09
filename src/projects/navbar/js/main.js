const toggle = document.querySelector('.js-toggle')
const menu = document.querySelector('.js-header')

toggle.addEventListener('click', (() => {
	menu.classList.toggle('js-is-show')
}))