const questions = document.querySelectorAll('.questions__card')

questions.forEach((question) => {
    const btnToggle = question.querySelector('.js-btnToggle')
    btnToggle.addEventListener('click', (() => {
        question.classList.toggle('show-answer')
        questions.forEach(((item) => {
            if(item !== question) {
                item.classList.remove('show-answer')
            }
        }))
}))
})