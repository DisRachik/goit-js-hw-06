const categoriesEl = document.querySelector('#categories');
const categoriesItems = categoriesEl.querySelectorAll('.item');

const numberChildElements = categoriesEl.children.length;
console.log(`Number of categories: ${numberChildElements}`);

categoriesItems.forEach(item => {
	const titleItem = item.firstElementChild.textContent;
	const numberItemsInCategory = item.lastElementChild.children.length;

	console.log(`Category: ${titleItem} \nElements: ${numberItemsInCategory}`);
});
