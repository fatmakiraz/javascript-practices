const alert = document.querySelector('.js-alert')
const form = document.querySelector('.js-form')
const grocery = document.querySelector('.js-groceryInput')
const btnSubmit = document.querySelector('.js-btnSubmit')

const groceryBottom = document.querySelector('.js-groceryBottom')
const groceryItemWrapper = document.querySelector('.js-groceryItemWrapper')
const btnClear = document.querySelector('.js-btnClear')

window.addEventListener('DOMContentLoaded', setupItems)

let editElement
//it will be true once clicked the edit button
let editFlag = false
let editID = ''

form.addEventListener('submit', addItem)

btnClear.addEventListener('click', clearItems)

function addItem(e) {
	e.preventDefault()
	const value = grocery.value
	const id = new Date().getTime().toString()
	// (value !== "" && editFlag === false-if not clicked the edit button/not true)
	if (value && !editFlag) {
		createListItem(id, value)
		displayAlert('Item  added to the list', 'success')

		groceryBottom.classList.add('is-show')
		addToLocalStorage(id, value)

		setBackToDefault()

	} else if (value && editFlag) {
		editElement.innerHTML = value
		displayAlert('Value changed', 'success')
		editLocalStorage(editID, value)
		setBackToDefault()
	} else {
		displayAlert('Please enter a value!', 'danger')
	}
}

function displayAlert(message, status) {
	alert.textContent = message
	alert.classList.add(`grocery__alert--${status}`)

	setTimeout(() => {
		alert.textContent = ""
		alert.classList.remove(`grocery__alert--${status}`)
	}, 2000)
}

function clearItems() {
	const items = document.querySelectorAll('.grocery__item')

	if (items.length > 0) {
		items.forEach((item) => {
			groceryItemWrapper.removeChild(item)
		})
		groceryBottom.classList.remove('is-show')
		displayAlert("All items have been removed", "danger")
		setBackToDefault()
		localStorage.removeItem('groceryItemWrapper')
	}
}

function removeItem(e) {
	const element = e.currentTarget.parentElement.parentElement
	const id = element.dataset.id
	groceryItemWrapper.removeChild(element)

	if (groceryItemWrapper.children.length === 0) {
		groceryBottom.classList.remove('is-show')
	}
	displayAlert('Item removed', 'danger')
	setBackToDefault()
	removeFromLocalStorage(id)
}

function editItem(e) {
	const element = e.currentTarget.parentElement.parentElement
	editElement = e.currentTarget.parentElement.previousElementSibling
	grocery.value = editElement.innerHTML
	editFlag = true
	editID = element.dataset.id

	btnSubmit.textContent = 'edit'
}

//after added an item, must be ready for adding another item- placeholder must be shown- value, ID etc must be '' and editFlag must be false
function setBackToDefault() {
	grocery.value = ''
	editFlag = false
	editID = ''
	btnSubmit.textContent = "submit"
}

function addToLocalStorage(id, value) {
	const groceryItemWrapper = {
		id: id,
		value: value
	}
	let items = getLocalStorage()

	items.push(groceryItemWrapper)
	localStorage.setItem('groceryItemWrapper', JSON.stringify(items))
}

function removeFromLocalStorage(id) {
	let items = getLocalStorage()

	items = items.filter((item) => {
		if (item.id !== id) {
			return item
		}
	})
	localStorage.setItem('groceryItemWrapper', JSON.stringify(items))
}

function editLocalStorage(id, value) {
	let items = getLocalStorage()
	items = items.map((item) => {
		if (item.id === id) {
			item.value = value
		}
		return item
	})
	localStorage.setItem('groceryItemWrapper', JSON.stringify(items))
}

function getLocalStorage() {
	return localStorage.getItem('groceryItemWrapper') ? JSON.parse(localStorage.getItem('groceryItemWrapper')) : []
}

function setupItems() {
	let items = getLocalStorage()
	if (items.length > 0) {
		items.forEach((item) => {
			createListItem(item.id, item.value)
		})
		groceryBottom.classList.add('is-show')
	}
}

function createListItem(id, value) {
	const element = document.createElement('div')
	element.classList.add('grocery__item')

	const attr = document.createAttribute('data-id')
	attr.value = id
	element.setAttributeNode(attr)
	element.innerHTML = `<p class="grocery__item__name">${value}</p>
		<div class="grocery__item__action">
			<button type="button" class="button js-btnEdit">
				<svg class="icon icon-edit">
					<use xlink:href="#icon-edit"></use>
				</svg>
			</button>
			<button type="button" class="button js-btnRemove">
				<svg class="icon icon-remove">
					<use xlink:href="#icon-remove"></use>
				</svg>
			</button>
		</div>`

	const btnRemove = element.querySelector('.js-btnRemove')
	btnRemove.addEventListener('click', removeItem)

	const btnEdit = element.querySelector('.js-btnEdit')

	btnEdit.addEventListener('click', editItem)

	groceryItemWrapper.appendChild(element)
}

//localStorage.setItem('key', JSON.stringify(['item1', 'item2']))
//const keys = JSON.parse(localStorage.getItem('key'))

//localStorage.removeItem('key')