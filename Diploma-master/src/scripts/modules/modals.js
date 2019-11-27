const modals = () => {
	const sections = document.querySelectorAll('section');
	const pageHeight = Math.max(
		document.body.scrollHeight, document.documentElement.scrollHeight,
		document.body.offsetHeight, document.documentElement.offsetHeight,
		document.body.clientHeight, document.documentElement.clientHeight
	);

	const timer = setTimeout(() => {
		// open offer menu
		const modalMenu = document.querySelector('.modal_offer');
		modalMenu.classList.add('closed_offer_modal');
		modalMenu.classList.add('modal_support_active');
	}, 1000 * 60);

	const checkScroll = () => {
		if(window.pageYOffset + sections[sections.length - 1].clientHeight > document.body.offsetHeight - sections[sections.length - 1].clientHeight) {
			// open offer menu
			const modalMenu = document.querySelector('.modal_offer');
			modalMenu.classList.add('closed_offer_modal');
			modalMenu.classList.add('modal_support_active');

			window.removeEventListener('scroll', checkScroll);
			clearTimeout(timer);
		}
	}

	window.addEventListener('scroll', checkScroll);

	const supportMenu = (menu, menuActive, closeBtn) => {
		window.addEventListener('resize', () => {
			if(window.innerWidth >= 1200) {
				document.querySelector('.main-support').style.marginRight = '';
			} else {
				document.querySelector('.main-support').style.marginRight = '-13rem';
			}
		});
	
		const modalMenu = document.querySelector(menu);
		const openBtn = document.querySelector('.main-support');
	
		modalMenu.classList.add('closed_support_modal');
		openBtn.style.transition = '.2s ease-in-out';
	
		if(window.innerWidth <= 1200) {
			openBtn.style.marginRight = '-13rem';
		}
	
		window.addEventListener('click', (e) => {
			if(e.target.closest('.main-support')) {
				// delete bottom menu
				window.removeEventListener('scroll', checkScroll);
				// clearing timer
				clearTimeout(timer);
				// open
				if(openBtn.style.marginRight === '-13rem') {
					openBtn.style.marginRight = '0';
					return;
				}
				modalMenu.classList.add(menuActive);
				if(window.innerWidth <= 1200) {
					openBtn.style.marginRight = '-13rem';
				}
			} else if(!e.target.closest(menu) || e.target.matches(closeBtn)) {
				// close
				if(window.innerWidth < 1200) {
					openBtn.style.marginRight = '-13rem';
				}
				modalMenu.classList.remove(menuActive);
			}
		});
	}	

	const offerMenu = (menu, menuActive, closeBtn) => {
		const modalMenu = document.querySelector(menu);
		modalMenu.classList.add('closed_offer_modal');
		
		window.addEventListener('click', (e) => {
			if(e.target.closest('.main-try')) {
				// delete bottom menu
				window.removeEventListener('scroll', checkScroll);
				// clearing timer
				clearTimeout(timer);
				// open
				modalMenu.classList.add(menuActive);
			} else if(!e.target.closest(menu) || e.target.matches(closeBtn)) {
				// close
				modalMenu.classList.remove(menuActive);
			}
		});
	}

	supportMenu('.modal_support', 'modal_support_active', '.support-header img');
	offerMenu('.modal_offer', 'modal_support_active', '.support-header img');
}


export default modals;

