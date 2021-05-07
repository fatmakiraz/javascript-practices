const reviews = [{
		id: 1,
		name: "susan smith",
		job: "web developer",
		img: "img/person-1.jpg",
		text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
	},
	{
		id: 2,
		name: "anna johnson",
		job: "web designer",
		img: "img/person-2.jpg",
		text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
	},
	{
		id: 3,
		name: "peter jones",
		job: "intern",
		img: "img/person-3.jpg",
		text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
	},
	{
		id: 4,
		name: "bill anderson",
		job: "the boss",
		img: "img/person-4.jpg",
		text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
	},
]

const img = document.querySelector('.js-img')
const authorName = document.querySelector('.js-name')
const job = document.querySelector('.js-job')
const comment = document.querySelector('.js-comment')

const btnPrev = document.querySelector('.js-btnPrev')
const btnNext = document.querySelector('.js-btnNext')
const randomBtn = document.querySelector('.js-randomBtn')

let reviewsIndex = 0

window.addEventListener('DOMContentLoaded', (() => {
	showReview(reviewsIndex)
}))

function showReview(reviewsIndex) {
	const review = reviews[reviewsIndex]
	img.src = review.img
	authorName.textContent = review.name
	job.textContent = review.job
	comment.textContent = review.text
}

btnNext.addEventListener('click', (() => {
	reviewsIndex++
	if (reviewsIndex > reviews.length - 1) {
		reviewsIndex = 0
	}
	showReview(reviewsIndex)
}))

btnPrev.addEventListener('click', (() => {
	reviewsIndex--
	if (reviewsIndex < 0) {
		reviewsIndex = reviews.length - 1
	}
	showReview(reviewsIndex)
}))

randomBtn.addEventListener('click', (() => {
	reviewsIndex = getRandomIndex()
	showReview(reviewsIndex)
}))

const getRandomIndex = (() => {
	return Math.floor(Math.random() * reviews.length)
})