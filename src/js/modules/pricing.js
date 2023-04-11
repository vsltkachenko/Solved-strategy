function pricing() {
	const items = document.querySelectorAll('.price__item')

	items.forEach((item) => {
		item.addEventListener('click', () => {
			items.forEach((item) => item.classList.remove('price__item-active'))
			item.classList.add('price__item-active')
		})
	})
}
pricing()
