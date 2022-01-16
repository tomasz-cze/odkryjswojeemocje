document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar-collapse')
	const navHamburger = document.querySelector('.fa-bars')
	const allNavItems = document.querySelectorAll('.nav-link')
	const navList = document.querySelector('.collapse')

	function addShadow() {
		if (window.scrollY >= 100) {
			nav.classList.add('shadow-bg')
		} else {
			nav.classList.remove('shadow-bg')
		}
	}
	navHamburger.addEventListener('click', () => navList.classList.remove('show'))

	allNavItems.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')))

	navHamburger.addEventListener('click', () => nav.classList.add('shadow-bg'))

	const articules = document.querySelectorAll('.blog-card')

	window.addEventListener('scroll', addShadow);

})
