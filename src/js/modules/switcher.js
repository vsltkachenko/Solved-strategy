function toggleSwitcher() {
	const switcher = document.querySelector('.switcher')

	const billings = document.querySelectorAll('.billing__item')
	const switcherBtn = document.querySelector('.switcher__btn')

	switcher.addEventListener('click', () => {
		billings.forEach((item) => item.classList.toggle('active'))
		switcherBtn.classList.toggle('active')
	})

	billings.forEach((billing) => {
		billing.addEventListener('click', () => {
			billings.forEach((item) => item.classList.remove('active'))
			billing.classList.add('active')
			switcherBtn.classList.remove('active')
			if (billings[1].classList.contains('active')) {
				switcherBtn.classList.add('active')
			}
		})
	})
}
toggleSwitcher()

function togglePrice() {
	const billing = document.querySelector('.billing')
	let oldPrices = document.querySelectorAll('.price__item-oldprice')
	let prices = document.querySelectorAll('.price__item-price')

	const oldPricesCash = [...oldPrices].map((item) => item.textContent)
	const pricesCash = [...prices].map((item) => item.innerHTML)

	const twelve = (item) => '$' + (item.textContent.slice(1) * 12).toFixed(2)

	billing.addEventListener('click', () => {
		const switcherBtn = document.querySelector('.switcher__btn')
		if (switcherBtn.classList.contains('active')) {
			oldPrices.forEach((item, i) => {
				if (item.textContent === oldPricesCash[i]) {
					item.textContent = twelve(item)
				}
			})
			for (let i = 0; i < prices.length - 1; i++) {
				let item = prices[i]
				if (item.innerHTML === pricesCash[i]) {
					item.innerHTML = twelve(item.childNodes[0]) + '<span>/year</span>'
				}
			}
		} else {
			oldPrices.forEach((item, i) => (item.textContent = oldPricesCash[i]))
			prices.forEach((item, i) => (item.innerHTML = pricesCash[i]))
		}
	})
}
togglePrice()
