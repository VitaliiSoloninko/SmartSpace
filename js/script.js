// Slider

const swiper = new Swiper('.slider-main-block', {
	loop: true,
	navigation: {
		nextEl: '.body-main-block__arrow.swiper-button-next',
		prevEl: '.body-main-block__arrow.swiper-button-prev',
	},
})

// Tabs section portfolio/works

const tabNavItems = document.querySelectorAll('.tabs-deals__button')
const tabItems = document.querySelectorAll('.item-tabs')
document.addEventListener('click', function (e) {
	const targetElement = e.target
	let currentActiveIndex = null
	let newActiveIndex = null
	if (targetElement.closest('.tabs-deals__button')) {
		tabNavItems.forEach((tabNavItem, index) => {
			if (tabNavItem.classList.contains('active')) {
				currentActiveIndex = index
				tabNavItem.classList.remove('active')
			}
			if (tabNavItem === targetElement) {
				newActiveIndex = index
			}
		})
		targetElement.classList.add('active')
		tabItems[currentActiveIndex].classList.remove('active')
		tabItems[newActiveIndex].classList.add('active')
	}
})

// Navigation by ID - anchors in HTML in Header a href="#home" in Section id="home"
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
	anchor.addEventListener('click', function (event) {
		event.preventDefault() // відмінили стандарте повеение кнопки, зараз вона не працює
		const blockID = anchor.getAttribute('href')
		document.querySelector('' + blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
	})
}
