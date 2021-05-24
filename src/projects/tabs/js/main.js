const btnTabs = document.querySelectorAll('.js-btnTabs')
const contents = document.querySelectorAll('.js-content')
const tabsWrap = document.querySelector('.js-tabsWrap')

tabsWrap.addEventListener('click', ((e) =>{
    const title = e.target.dataset.title
    if(title) {
        btnTabs.forEach((btn) => {
            btn.classList.remove('active')
            e.target.classList.add('active')
        })

        contents.forEach((content) => {
            content.classList.remove('active')
            if(content.dataset.title == title){
                content.classList.add('active')
            }
        })
    }
} ))