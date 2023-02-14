const counterValue = document.querySelector('#value');
const increaseCounter = document.querySelector('[data-action="decrement"]');
const decreaseCounter = document.querySelector('[data-action="increment"]');

counterValue.textContent = 0;
const onIncreaseCounterValue = event => {
	counterValue.textContent = Number(counterValue.textContent) + 1;
};
const onDecreaseCounterValue = event => {
	counterValue.textContent = Number(counterValue.textContent) - 1;
};

decreaseCounter.addEventListener('click', onIncreaseCounterValue);
increaseCounter.addEventListener('click', onDecreaseCounterValue);
