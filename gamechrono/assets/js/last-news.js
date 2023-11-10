const links = document.querySelectorAll('.last-news__link');
const cards = document.querySelectorAll('.mini-card');
let cardHeight = cards[0].clientHeight;
links.forEach(link => {
    link.addEventListener('mouseover', e => {
        document.querySelector('.last-news__link--active').classList.remove('last-news__link--active');
        link.classList.add('last-news__link--active');
        cards.forEach(card => {
            console.log(card);
            card.style.transform = `translateY(-${Array.from(links).indexOf(link) * cardHeight}px)`;
        })
        
    });
});