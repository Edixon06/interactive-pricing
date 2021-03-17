let range = document.querySelector('#range'),
    pageViews = document.querySelector('#page-views'),
    amountPerMonth = document.querySelector('#amount-per-month');

range.step = parseInt(range.step);
range.min = parseInt(range.min);
range.max = parseInt(range.max);
range.value = parseInt(range.value);

range.addEventListener('mousemove', () => {
    amountPerMonth.innerHTML = range.value;
    pageViews.innerHTML = range.value * 6.25;
})