window.addEventListener("scroll", (e) => {
  Object.assign(document.documentElement, {
    style: `--scrollTop: ${this.scrollY}px`,
  });
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if(ScrollTrigger.isTouch !== 1) {
    ScrollSmoother.create({
        wrapper: ".wrapper",
        content: ".wrapper__container",
        effects: true,
      });
      
      const descrBlocks = document.querySelectorAll(".descr-block");
      let index = 1;
      descrBlocks.forEach((item) => {
        if (index % 2 === 1) {
          gsap.fromTo(
            item.querySelector('.descr-block__img'),
            { opacity: 0, x: 100 },
            {
              opacity: 1,
              x: 0,
              scrollTrigger: {
                trigger: item.querySelector('.descr-block__img'),
                start: "200 bottom",
                end: "130% bottom",
                scrub: true,
              },
            }
          );
          gsap.fromTo(
              item.querySelector('.descr-block__content'),
              { opacity: 0, x: -100 },
              {
                opacity: 1,
                x: 0,
                scrollTrigger: {
                  trigger: item.querySelector('.descr-block__content'),
                  start: "200 bottom",
                  end: "130% bottom",
        
                  scrub: true,
                },
              }
            );
        }
        else {
          gsap.fromTo(
              item,
              { opacity: 0, x: -100 },
              {
                opacity: 1,
                x: 0,
                scrollTrigger: {
                  trigger: item,
                  start: "200 bottom",
                  end: "130% bottom",
        
                  scrub: true,
                },
              }
            );
            gsap.fromTo(
              item.querySelector('.descr-block__content'),
              { opacity: 0, x: 100 },
              {
                opacity: 1,
                x: 0,
                scrollTrigger: {
                  trigger: item.querySelector('.descr-block__content'),
                  start: "200 bottom",
                  end: "130% bottom",
        
                  scrub: true,
                },
              }
            );
            
        }
        index++;
      });
}

document.querySelector('.header__button').addEventListener('click', e => {
    document.documentElement.scrollTo(0,document.querySelector('.blocks').getBoundingClientRect().top);
    e.preventDefault();
});

document.querySelector('.num-block').addEventListener('click', event => {
    const curClicked = event.target.closest('.num-block__num');
    if(curClicked.classList.contains('01')) {
        document.documentElement.scrollTo(0,document.querySelector('#I01').getBoundingClientRect().top);
    } else
    if(curClicked.classList.contains('02')) {
        document.documentElement.scrollTo(0,document.querySelector('#I02').getBoundingClientRect().top);
    } else
    if(curClicked.classList.contains('03')) {
        document.documentElement.scrollTo(0,document.querySelector('#I03').getBoundingClientRect().top);
    }
})


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

window.addEventListener('load', e => {
    document.querySelector('body').style.overflow = '';
    document.querySelector('.page-loader').style.display = 'none';
})
if(!document.querySelector('.header').loaded) {

}
else {
    document.querySelector('body').style.overflow = '';

}