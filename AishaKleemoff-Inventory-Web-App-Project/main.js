const btnsRemove = document.querySelectorAll('.btn-remove');

btnsRemove.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.target.parentNode.parentNode.parentNode.remove();
    });
});
btnsStock.forEach((button) => {
    button.addEventListener('click', (event) => {
        if (event.target.nextSibling.textContent === 'In Stock') {
            event.target.nextSibling.classList.add('out-stock');
            event.target.nextSibling.classList.remove('stock-in');
            event.target.nextSibling.textContent = 'Out Of Stock';
            event.target.nextSibling.textContent = 'In Stock';
        }
    });
});

const currentYear = document.querySelector('#current-year');
const date = new Date();
const year = date.getFullYear();
currentYear.append(year);