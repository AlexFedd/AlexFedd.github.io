const quanities = document.querySelectorAll('.quanity');
quanities.forEach(el => {
    console.log(el);
    el.addEventListener('click', e => {
        let counter = el.querySelector('.quanity__counter');
        if(e.target === el.querySelector('.quanity__minus') && Number(counter.innerHTML) > 1) {
            counter.innerHTML = Number(counter.innerHTML) - 1;
            if(el.closest('.cart-item')) {
                const totalCost = document.querySelector('.cart-options__total-number');
                totalCost.innerHTML = Number(totalCost.innerHTML) - Number(el.closest('.cart-item').querySelector('.cart-item__price').innerHTML.slice(1))
            }
        } 
        else if (e.target === el.querySelector('.quanity__plus') && Number(counter.innerHTML) < 100) {
            counter.innerHTML = Number(counter.innerHTML) + 1;
            if(el.closest('.cart-item')) {
                const totalCost = document.querySelector('.cart-options__total-number');
                totalCost.innerHTML = Number(totalCost.innerHTML) + Number(el.closest('.cart-item').querySelector('.cart-item__price').innerHTML.slice(1))
            }
        }
    })
})