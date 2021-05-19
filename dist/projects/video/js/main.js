const preloaderCont = document.querySelector('.js-preloaderCont')

window.addEventListener('load', (() => {
    setTimeout(() => {
        preloaderCont.classList.add('js-hidePreloader')
    }, 300);
}))

const video = document.querySelector('.js-videoWrap')
const btnPlay = document.querySelector('.js-btnPlay')
const btnPause = document.querySelector('.js-btnPause')
const btnCurrent = document.querySelector('.js-btnCurrent')

btnPause.addEventListener('click', (() => {
    btnCurrent.classList.add('js-videoPause')
    btnCurrent.classList.remove('js-videoPlay')
    video.pause()
}))

btnPlay.addEventListener('click', (() => {
    btnCurrent.classList.add('js-videoPlay')
    btnCurrent.classList.remove('js-videoPause')
    video.play()
}))

const btnInc = document.querySelector('.js-btn--increase')
const btnDec = document.querySelector('.js-btn--decrease')
const inputValue = document.querySelector('.js-btn--value')

btnInc.addEventListener('click', (() => {
    updateVideoSpeed(0.5)
}))

btnDec.addEventListener('click', (() => {
    updateVideoSpeed(-0.5)
}))

const updateVideoSpeed = ((rate) => {
    video.playbackRate += rate
    inputValue.value = video.playbackRate
})