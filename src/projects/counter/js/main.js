const btns = document.querySelectorAll('.js-btn')
const value = document.querySelector('.js-value')
let count = 0;

btns.forEach((btn) => {
	btn.addEventListener('click', ((e) => {
		const classes = e.currentTarget.classList
		if(classes.contains('js-btn--decrease')) {
			count--
		}
		else if (classes.contains('js-btn--increase')) {
			count++
		}
		else {
			count = 0
		}

		if(count < 0) {
			value.style.color = '#c64756'
		}
		else if (count > 0) {
			value.style.color = '#00af91'
		}
		else {
			value.style.color = '#222'
		}

		value.textContent = count;
	}))
}
)