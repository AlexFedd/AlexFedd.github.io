
AOS.init({
    disable: 'phone',
    once: true,
    duration: '500'
});

const logos = document.querySelectorAll('.logo');

logos.forEach( logo => {
    logo.addEventListener('click', e => {
        window.location.reload();
    });
});
const popUp = document.querySelector('.push-up');
function popUpActivate() {
    setTimeout(() => {
        popUp.style.right = '10px';
        const audio = new Audio('./assets/audio/popup.mp3')
        audio.play();
        setTimeout(() => {
            popUp.style.opacity = '0';
        }, 2000)
    }, 40000);

}
const submitPopUp = document.querySelector('.form-submit');
document.addEventListener('submit', event => {
    event.preventDefault();
    submitPopUp.style.display = 'block';
    setTimeout( () => {
        submitPopUp.style.display = 'none';
    }, 3000)
});

popUpActivate();
var player = new Playerjs({id:"reviewAudio1", file:"./assets/audio/review-1.mp3"});
var player2 = new Playerjs({id:"reviewAudio2", file:"./assets/audio/review-2.mp3"});
var player3 = new Playerjs({id:"reviewAudio3", file:"./assets/audio/review-3.mp3"});