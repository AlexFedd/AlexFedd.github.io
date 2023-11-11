gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if(ScrollTrigger.isTouch !== 1) {
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.wrapper-content',
        smooth: 1.5,
        effects: true,
    });

    gsap.fromTo('.header', {opacity: 1}, 
    {
        opacity: 0,
        scrollTrigger: {
            trigger: '.header',
            start: 'center',
            end: 'bottom',

            scrub: true,
        }
    })

    gsap.fromTo('.contacts-form', {opacity: 0}, 
    {
        opacity: 1,
        scrollTrigger: {
            trigger: '.contacts-form',
            start: '-800',
            end: 'center',
            scrub: true,
        }
    })
    


}

