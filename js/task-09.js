const getRandomHexColor = () =>
	`#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;

const buttonEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

const onChangeColorForBody = () => {
	document.body.style.backgroundColor = getRandomHexColor();
	spanEl.textContent = getRandomHexColor();
};

buttonEl.addEventListener('click', onChangeColorForBody);
