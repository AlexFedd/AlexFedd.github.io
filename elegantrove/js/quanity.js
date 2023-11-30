const quanities = document.querySelectorAll('.quanity');

quanities.forEach(el => {
    el.addEventListener('click', e => {
        let counter = el.querySelector('.quanity__counter');
        if(e.target === el.querySelector('.quanity__minus') && Number(counter.innerHTML) > 1) {
            counter.innerHTML = Number(counter.innerHTML) - 1;
        } 
        else if (e.target === el.querySelector('.quanity__plus') && Number(counter.innerHTML) < 100) {
            counter.innerHTML = Number(counter.innerHTML) + 1;
        }
    })
})