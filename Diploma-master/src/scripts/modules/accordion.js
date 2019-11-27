const accordion = () => {
	let titles = document.querySelectorAll('.js-ui-accordion p');
	let desc = document.querySelectorAll('.accordion-item');

	const clearAccordion = () => {
		desc.forEach((item) => {
			item.style.opacity = '0';
			item.style.maxHeight = '0';
		});
	}

	const showAccordion = (index) => {
		if(desc[index].style.maxHeight === '350px') {
			clearAccordion();
			return;
		}

		clearAccordion();
		desc[index].style.opacity = '1';
		desc[index].style.maxHeight = '350px';
	}


	titles.forEach((item, index) => {
		item.addEventListener('click', () => {
			showAccordion(index);
		});
	});


	clearAccordion();

}



export default accordion;