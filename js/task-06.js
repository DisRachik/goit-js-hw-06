const inputEl = document.querySelector('#validation-input');

const onValidInput = event => {
	if (event.currentTarget.value) {
		const addBorderColor =
			event.currentTarget.dataset.length > event.currentTarget.value.length
				? 'invalid'
				: 'valid';

		event.currentTarget.classList.add(addBorderColor);
	}
};

const oninputFocus = event => {
	event.currentTarget.classList.remove(event.currentTarget.classList[0]);
};

inputEl.addEventListener('blur', onValidInput);
inputEl.addEventListener('focus', oninputFocus);
