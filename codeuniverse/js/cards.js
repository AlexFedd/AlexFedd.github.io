const cards = document.querySelectorAll('.app-card');
const cardsContainer = document.querySelector('.app-list__body')
const filterPrice = document.querySelector('[name="price"]')
const filterCategory = document.querySelector('[name="category"]')
filterCategory.addEventListener('change', e => {
    if(e.target.value === 'Все') {
        cardsContainer.innerHTML = '';
        cards.forEach(card => {
            cardsContainer.appendChild(card);
        })
    }
    else 
    if(e.target.value === 'Редактор кода') {
        cardsContainer.innerHTML = '';
        cards.forEach(card => {
            if(card.querySelector('.categ').innerHTML === e.target.value) {
                cardsContainer.appendChild(card);
            }
        })
    } else 
    if(e.target.value === '3D Моделирование') {
        cardsContainer.innerHTML = '';
        cards.forEach(card => {
            if(card.querySelector('.categ').innerHTML === e.target.value) {
                cardsContainer.appendChild(card);
            }
        })
    }
});

filterPrice.addEventListener('change', e => {
    if(e.target.value === 'Все') {
        cardsContainer.innerHTML = '';
        cards.forEach(card => {
            cardsContainer.appendChild(card);
        })
    }
    else 
    if(e.target.value === 'Бесплатный') {
        cardsContainer.innerHTML = '';
        cards.forEach(card => {
            if(card.querySelector('.pric').innerHTML === e.target.value) {
                cardsContainer.appendChild(card);
            }
        })
    } else 
    if(e.target.value === 'Платный') {
        cardsContainer.innerHTML = '';
        cards.forEach(card => {
            if(card.querySelector('.pric').innerHTML === e.target.value) {
                cardsContainer.appendChild(card);
            }
        })
    }
});