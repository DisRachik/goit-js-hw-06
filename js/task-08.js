const formEl = document.querySelector('.login-form');

const onFormSubmit = event => {
	event.preventDefault();
	const { email, password } = event.currentTarget.elements;

	if (!email.value || !password.value) {
		alert('Please fill in all the fields!');
	} else {
		const formData = {
			[email.name]: email.value,
			[password.name]: password.value,
		};
		console.log(formData);

		event.currentTarget.reset();
	}
};

formEl.addEventListener('submit', onFormSubmit);
