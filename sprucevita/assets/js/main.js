const preloaders = document.querySelectorAll('.preloader');

preloaders.forEach(preloader => {
    const preloaderPhoto = preloader.querySelector('img');
    if(!preloaderPhoto.complete) {
        preloaderPhoto.style.opacity = '0';
        preloaderPhoto.addEventListener('load', event => {
            preloaderPhoto.style.opacity ='';
        });
    }
});