const menuSwitcherButton = document.querySelector('.menu-switcher');
const navigation = document.querySelector('.navigation__list');
menuSwitcherButton.addEventListener('click', (e) => {
    navigation.classList.toggle('navigation__list--opened');
    menuSwitcherButton.classList.toggle('menu-switcher--opened');
});

navigation.querySelectorAll('.navigation__link').forEach(link => {
    link.addEventListener('click', e => {
        navigation.classList.toggle('navigation__list--opened');
        menuSwitcherButton.classList.toggle('menu-switcher--opened');
    })
})