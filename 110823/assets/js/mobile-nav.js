const navigation = document.querySelector('.navigation');
const mobileBtn = document.querySelector('.mobile-nav');
const navBg = document.querySelector('.nav-mob-bg');
function openMenu() {
    navigation.classList.add('open')
    navBg.style.display = 'block'
}
navBg.addEventListener('click', event => {
    navigation.classList.remove('open');
    navBg.style.display = ''
})