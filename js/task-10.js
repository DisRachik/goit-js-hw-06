const START_SIDE_SIZE = 30;
const INCREASE_SIDE = 10;

const getRandomHexColor = () =>
	`#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;

const inputEl = document.querySelector('#controls input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const containerForBoxes = document.querySelector('#boxes');

const addStyleForContainer = containerEl => {
	containerEl.setAttribute(
		'style',
		`display: flex; gap: 3px; flex-wrap: wrap; align-items: center`,
	);
};

const delateStyleForContainer = containerEl => {
	containerEl.setAttribute('style', ``);
};

const createBoxes = amount => {
	let newSquare = '';

	for (let i = 0; i < amount; i += 1) {
		const sideSizeOfSquare = START_SIDE_SIZE + i * INCREASE_SIDE;

		newSquare += `<div  style="
    width: ${sideSizeOfSquare}px; 
    height: ${sideSizeOfSquare}px; 
    background-color: ${getRandomHexColor()}; 
    border: 1px solid #000;
    "></div>`;
	}

	return newSquare;
};

const onButtonForCreate = () => {
	const numberOfNewItems = Number(inputEl.value);

	if (numberOfNewItems < inputEl.min || numberOfNewItems > inputEl.max) {
		inputEl.value = '';
		return alert(
			`Enter a number in the range ${inputEl.min} to ${inputEl.max}`,
		);
	}

	addStyleForContainer(containerForBoxes);
	containerForBoxes.insertAdjacentHTML(
		'beforeend',
		createBoxes(numberOfNewItems),
	);
};

const onButtonForDestroy = () => {
	containerForBoxes.innerHTML = '';
	inputEl.value = '';
	delateStyleForContainer(containerForBoxes);
};

btnCreate.addEventListener('click', onButtonForCreate);
btnDestroy.addEventListener('click', onButtonForDestroy);
