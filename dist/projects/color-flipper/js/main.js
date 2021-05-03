const colors = ['#845EC2', '#B39CD0', '#C34A36', '#FF9671', '#FFC75F', '#2C73D2','#00C9A7', '#008F7A', '#F3C5FF', '#936C00', '#B25B00', '#005B44']
const buttonEl = document.querySelector('.js-button')
const colorEl = document.querySelector('.js-color')
const textColorEl = document.querySelector('.js-text-color')
let previousNumber

buttonEl.addEventListener('click', (() => {
	//get random number in the array-colors
	const randomNumber = getUniqueRandomNumber()
	const color = colors[randomNumber]

	document.body.style.backgroundColor = color
	colorEl.innerText = color
	colorEl.style.color = color
	textColorEl.style.color = color

	previousNumber = randomNumber
}))

const getUniqueRandomNumber = (() => {
	let randomNumber;
	while(true){
		randomNumber = getRandomNumber()
		if(previousNumber != randomNumber){
			break;
		}
	}

	return randomNumber;
})

const getRandomNumber = (() => {
	return Math.floor(Math.random() * colors.length)
})
