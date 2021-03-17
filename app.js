let range = document.querySelector('#range'),
    pageViews = document.querySelector('#page-views'),
    amountPerMonth = document.querySelector('#amount-per-month'),
    switchButton = document.querySelector('#switch'),
    yearOrMonth = document.querySelector('#year-month');

range.step = parseInt(range.step);
range.min = parseInt(range.min);
range.max = parseInt(range.max);
range.value = parseInt(range.value);

switchButton.addEventListener('click', () => {
    if(!switchButton.checked) {
        yearOrMonth.innerHTML = 'month';
        range.min= 0;
        range.max= 32;
        range.step= 2;
    } else {
        yearOrMonth.innerHTML = 'year';
        range.min= 0;
        range.max= 380;
        range.step= 38;
    }
})

range.addEventListener('mousemove', () => {
    amountPerMonth.innerHTML = range.value;
    pageViews.innerHTML = range.value * 6.25;
})