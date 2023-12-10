const nav = document.querySelector('.nav-ul');
const navButton = document.querySelector('.nav-button');

navButton.addEventListener('click', e => {
    nav.classList.toggle('nav-ul-active');
    navButton.classList.toggle('fixed');
    navButton.parentNode.classList.toggle('no-button')
})