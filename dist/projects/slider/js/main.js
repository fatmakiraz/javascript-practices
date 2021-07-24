const slides = document.querySelectorAll('.js-slide')
const btnPrev = document.querySelector('.js-btnPrev')
const btnNext = document.querySelector('.js-btnNext')

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`
})

let counter = 0
btnNext.addEventListener('click', (() => {
    counter++
    carousel()
}))

btnPrev.addEventListener('click', (() => {
    counter--
    carousel()
}))

function carousel() {
    if (counter < slides.length - 1) {
        btnNext.style.display = 'block'
    } else {
        btnNext.style.display = 'none'
    }

    if (counter > 0) {
        btnPrev.style.display = 'block'
    } else {
        btnPrev.style.display = 'none'
    }

    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%`
    })
}
btnPrev.style.display = 'none'