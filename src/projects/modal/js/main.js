const btnOpenModal = document.querySelector('.js-btnOpenModal')
const btnCloseModal = document.querySelector('.js-btnCloseModal')
const modal = document.querySelector('.js-modal')

btnOpenModal.addEventListener('click', (() =>  {
    modal.classList.toggle('modal-is-show')
}))

btnCloseModal.addEventListener('click', (() => {
    modal.classList.remove('modal-is-show')
}))