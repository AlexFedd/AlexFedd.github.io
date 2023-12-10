const items = document.querySelectorAll('.scientists-item');
const itemsContainer = document.querySelector('.scientists-items');

const search = document.querySelector('.search-window');

search.addEventListener('input', e => {
    itemsContainer.innerHTML = '';
    items.forEach(item => {
        if(item.querySelector('h3').innerHTML.toUpperCase().includes(e.target.value.toUpperCase())) {
            itemsContainer.appendChild(item);
        }
    })
})