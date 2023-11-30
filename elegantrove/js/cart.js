const cartPrice = document.querySelector('.cart-options__total-number')
const cartContainer = document.querySelector('.cart-items__container');

const cartData = JSON.parse(decodeURIComponent(localStorage.getItem('cart')))

for (const key in cartData) {
    cartContainer.innerHTML += 
    `<article class="cart-items__item cart-item">
    <div class="cart-item__content">
        <img src="${cartData[key].img}" alt="" class="cart-item__image">
        <div class="cart-item__info">
            <h2 class="cart-item__title">${cartData[key].name}</h2>
            <span class="cart-item__price">${cartData[key].price}</span>
        </div>
    </div>
    <div class="cart-item__func">
        <div class="cart-item__quanity quanity">
            <img src="./image/minus.svg" alt="Минус" class="quanity__minus">
            <span class="quanity__counter">${cartData[key].count}</span>
            <img src="./image/plus.svg" alt="Плюс" class="quanity__plus">
        </div>
        <img src="./image/close.svg" alt="" class="cart-item__close">
    </div>
</article>`;
cartPrice.innerHTML = Number(cartPrice.innerHTML) + (Number(cartData[key].price.slice(1)) * Number(cartData[key].count))
}

const closeBtns = document.querySelectorAll('.cart-item__close');

closeBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        const curItem = e.target.closest('.cart-item');
        const curPrice = Number(curItem.querySelector('.cart-item__price').innerHTML.slice(1))
        const curCounter = Number(curItem.querySelector('.quanity__counter').innerHTML)
        cartPrice.innerHTML = Number(cartPrice.innerHTML) - (curPrice * curCounter);
        delete cartData[curItem.querySelector('.cart-item__title').innerHTML];
        localStorage.setItem('cart', encodeURIComponent(JSON.stringify(cartData)));
        cartContainer.removeChild(curItem);
    })
})

document.querySelector('.cart-options__button').addEventListener('click', e => {
    localStorage.setItem('totalPrice', cartPrice.innerHTML);
})