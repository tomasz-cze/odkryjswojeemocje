document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar')
	const allNavItems = document.querySelectorAll('.nav-link')
	const navList = document.querySelector('.collapse')

	function addShadow() {
		if (window.scrollY >= 100) {
			nav.classList.add('shadow-bg')
		} else {
			nav.classList.remove('shadow-bg')
		}
	}

	allNavItems.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')))

	const articules = document.querySelectorAll('.blog-card')



	articules.forEach(articul => articul.addEventListener('click', () => articul.classList.contains('bigArticul') ? articul.classList.remove('bigArticul'): articul.classList.add('bigArticul')))

	window.addEventListener('scroll', addShadow)
})
