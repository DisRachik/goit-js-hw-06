const ingredients = [
	'Potatoes',
	'Mushrooms',
	'Garlic',
	'Tomatos',
	'Herbs',
	'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients');

const createListItems = items => {
	return items.map(item => {
		const liEl = document.createElement('li');
		liEl.classList.add('item');
		liEl.textContent = item;

		return liEl;
	});
};

const listElements = createListItems(ingredients);

ingredientsListEl.append(...listElements);
