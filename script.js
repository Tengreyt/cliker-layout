let clickCount = 0;

let clickElement = document.querySelector('p');

clickElement.addEventListener('click', () => {
    clickCount++;
    clickElement.innerHTML = ` Количество кликов: ${clickCount}`;
});
