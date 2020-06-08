let store = document.getElementById('store');
let quantity = document.getElementById('quantity');
let product = document.getElementById('product');
let log = document.getElementById('log');

document.querySelector('button').addEventListener('click', displaySentence);

function displaySentence(e) {
    e.preventDefault();
    console.log(store.value, quantity.value, product.value)
    console.log(`I went to ${store.value} to buy ${quantity.value} ${product.value}(s)`);
    log.innerHTML = 'I went to ' + store.value + ' to buy '+ quantity.value + ' ' + product.value + '(s)';
}