const images = document.querySelectorAll('.preloader');

images.forEach(image => {
	const imageSrc = image.getAttribute('data-src');
	if(!image.complete) {
		image.addEventListener('load', event => {
			image.setAttribute('src', imageSrc);
		});
	} else {
		image.setAttribute('src', imageSrc);
	}
});