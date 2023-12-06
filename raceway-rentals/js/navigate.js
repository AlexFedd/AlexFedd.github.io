const navigate = document.querySelector('.header-navigate-list');
const navigateBurger = document.querySelector('.navigate-burger');

navigateBurger.addEventListener('click', e => {
    navigate.classList.toggle('nav-open');
    navigateBurger.classList.toggle('burger-fix');
})