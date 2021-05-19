/*const headerWrap = document.querySelector('.js-headerWrap')

headerToggle.addEventListener('click', (() => {
    headerWrap.classList.toggle('js-menuShow')
})) */

// show header menu on mobile view according to height dynamically
const headerToggle = document.querySelector('.js-headerToggle')

const navWrap = document.querySelector('.js-navWrap')
const nav = document.querySelector('.js-nav')

headerToggle.addEventListener('click', (() => {
    const wrapHeight = navWrap.getBoundingClientRect().height
    const navHeight = nav.getBoundingClientRect().height

    if (wrapHeight === 0) {
        navWrap.style.height = `${navHeight}px`
    } else {
        navWrap.style.height = 0
    }
}))

// fixed header when scrolled
const header = document.querySelector('.js-header')

window.addEventListener('scroll', (() => {
    const scrollHeight = window.pageYOffset
    const headerHeight = header.getBoundingClientRect().height

    if (scrollHeight > headerHeight) {
        header.classList.add('js-showHeader')
    } else {
        header.classList.remove('js-showHeader')
    }

// scroll top button
    const scrollSection = document.querySelector('.js-scrollTop')

    if (scrollHeight > headerHeight) {
        scrollSection.classList.add('js-showScrollBtn')
    } else {
        scrollSection.classList.remove('js-showScrollBtn')
    }
}))

// smooth scroll between the sections
const scrollLinks = document.querySelectorAll('.js-scrollLink')

scrollLinks.forEach((link) => {
    link.addEventListener('click', ((e) => {
        e.preventDefault()
        const href = e.currentTarget.getAttribute('href').slice(1)
        const element = document.getElementById(href)

        const headerHeight = header.getBoundingClientRect().height
        const wrapHeight = navWrap.getBoundingClientRect().height
        let position = element.offsetTop - headerHeight

        if (headerHeight > 82) {
            position = position + wrapHeight
        }

        window.scrollTo({
            left: 0,
            top: position,
        })
        navWrap.style.height = 0
    }))
})

// up to date year 
const footerDate = document.querySelector('.js-footerDate')

footerDate.innerHTML = new Date().getFullYear()