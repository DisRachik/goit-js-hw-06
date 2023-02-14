const images = [
	{
		url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		alt: 'White and Black Long Fur Cat',
	},
	{
		url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
	},
	{
		url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		alt: 'Group of Horses Running',
	},
];

const galleryEl = document.querySelector('.gallery');
galleryEl.style.padding = '0';
galleryEl.style.listStyle = 'none';
galleryEl.style.display = 'flex';
galleryEl.style.gap = '20px';

const makeImgGallery = images
	.map(({ url, alt }) => `<li><img src ="${url}" alt="${alt}"></li>`)
	.join('');

galleryEl.insertAdjacentHTML('afterbegin', makeImgGallery);

const liEl = [...galleryEl.children];
liEl.forEach(li => {
	li.style.maxWidth = 'calc((100% - (20px * 2)) / 3)';

	const imgEl = li.firstElementChild;
	imgEl.style.display = 'block';
	imgEl.style.width = '100%';
	imgEl.style.height = '100%';
	imgEl.style.objectFit = 'cover';
});
