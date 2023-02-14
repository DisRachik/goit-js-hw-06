const inputEl = document.querySelector('#validation-input');

const onValidInput = event => {
	const addBorderColor =
		inputEl.dataset.length > inputEl.value.length ? 'invalid' : 'valid';

	inputEl.classList.add(addBorderColor);
};

const oninputFocus = event => {
	inputEl.classList.remove(inputEl.classList[0]);
};

inputEl.addEventListener('blur', onValidInput);
inputEl.addEventListener('focus', oninputFocus);
