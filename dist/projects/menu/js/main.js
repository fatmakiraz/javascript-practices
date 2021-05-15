const menu = [{
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "img/food-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "img/food-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "img/food-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "img/food-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "img/food-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "img/food-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "img/food-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "img/food-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "img/food-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "bison steak",
        category: "dinner",
        price: 22.99,
        img: "img/food-10.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];

const menuCont = document.querySelector('.js-menuCont')
const categoryCont = document.querySelector('.js-categoryCont')

window.addEventListener('DOMContentLoaded', (() => {
    showMenuFoods(menu)
    showCategoryButtons()
}))

function showMenuFoods(menuFoods) {
    let showMenu = menuFoods.map((food) => {
        return `<div class="menu__food">
        <figure class="menu__food__image">
            <img src= ${food.img} alt="${food.title}">
        </figure>
        <div class="menu__food__content">
            <div class="menu__food__content__detail">
                <div class="menu__food__content__detail__title">
                ${food.title}
                </div>
                <div class="menu__food__content__detail__price">${food.price}</div>
            </div>
            <p class="menu__food__content__desc">
            ${food.desc}
            </p>
        </div>
    </div>`
    })
    showMenu = showMenu.join("")
    menuCont.innerHTML = showMenu
}

function showCategoryButtons() {
    const categories = menu.reduce((values, food) => {
        if (!values.includes(food.category)) {
            values.push(food.category)
        }
        return values
    },
    ['all'])
    const categoryBtns = categories
    .map((category) => {
        return `<button type="button" class="button menu__category__button js-btnFilter" aria-label="Menu category button" data-id=${category}>${category}</button>`
    })
    .join("")
    categoryCont.innerHTML = categoryBtns
    const btnFilter = categoryCont.querySelectorAll('.js-btnFilter')

btnFilter.forEach((btn) => {
    btn.addEventListener('click', ((e) => {
        const category = e.currentTarget.dataset.id
        const menuCategory = menu.filter((menuFoods) => {
            //console.log(menuFoods.category)
            if (menuFoods.category === category) {
                return menuFoods
            }
        })
        if (category === 'all') {
            showMenuFoods(menu)
        } else {
            showMenuFoods(menuCategory)
        }
    }))
})
}