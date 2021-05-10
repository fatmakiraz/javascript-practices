const btnMenu = document.querySelector('.js-btnMenu')
const sidebar = document.querySelector('.js-sidebar')
const btnClose = document.querySelector('.js-btnClose')

btnMenu.addEventListener('click', (() => {
    sidebar.classList.toggle('is-show')
}))

btnClose.addEventListener('click', (() => {
    sidebar.classList.remove('is-show')
}))

