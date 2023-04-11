const menu = document.querySelector('.menu__list')
const menuBody = document.querySelector('.menu__body')
const burger = document.querySelector('.burger')

const body = document.body
const navBtn = document.querySelector('.nav__buttons')

if (menu && burger) {
	burger.addEventListener('click', (e) => {
		menu.classList.toggle('active')
		burger.classList.toggle('active')
		navBtn.classList.toggle('active')
		menuBody.classList.toggle('active')
		body.classList.toggle('lock')
	})

	menuBody.addEventListener('click', (e) => {
		if (e.target.classList.contains('menu__body')) {
			menu.classList.remove('active')
			burger.classList.remove('active')
			navBtn.classList.remove('active')
			menuBody.classList.remove('active')
			body.classList.remove('lock')
		}
	})

	menu.querySelectorAll('.menu__link').forEach((link) => {
		link.addEventListener('click', () => {
			menu.classList.remove('active')
			burger.classList.remove('active')
			navBtn.classList.remove('active')
			menuBody.classList.remove('active')
			body.classList.remove('lock')
		})
	})
}

/*===========================================*/

// const anchors = document.querySelectorAll('a[href*="#"]')
const anchors = document.querySelectorAll('.menu__link')

anchors.forEach((anchor) => {
	anchor.addEventListener('click', (event) => {
		event.preventDefault()

		const blockID = anchor.getAttribute('href').substring(1)

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
	})
})
