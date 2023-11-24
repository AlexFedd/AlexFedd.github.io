const steps = document.querySelectorAll('.form__step');
const buttonNext1 = document.querySelector('#button-1-next');
const buttonPrev2 = document.querySelector('#button-2-prev');
const buttonNext2 = document.querySelector('#button-2-next');
const loadingLine = document.querySelector('.load-line__loaded');



buttonNext1.addEventListener('click', e => {
    document.documentElement.scrollTop = 0;
    steps[0].style.display = 'none';
    steps[1].style.display = '';
    loadingLine.style.width = '66%';
    e.preventDefault();
})

buttonPrev2.addEventListener('click', e => {
    document.documentElement.scrollTop = 0;
    steps[0].style.display = '';
    steps[1].style.display = 'none';
    loadingLine.style.width = '';
    e.preventDefault();
})

buttonNext2.addEventListener('click', e => {
    document.documentElement.scrollTop = 0;
    steps[1].style.display = 'none';
    steps[2].style.display = '';
    loadingLine.style.width = '100%';
    e.preventDefault();
})

