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
gsap.fromTo('.last-news', {opacity: 0}, 
{
    opacity: 1,
    scrollTrigger: {
        trigger: '.header',
        start: '100',
        end: 'bottom',

        scrub: true,
    }
})
gsap.fromTo('.last-news__sample', {x: -50}, 
{
    x: 0,
    scrollTrigger: {
        trigger: '.header',
        start: '100',
        end: 'bottom',

        scrub: true,
    }
})
gsap.fromTo('.last-news__cards-wrapper', {x: 50}, 
{
    x: 0,
    scrollTrigger: {
        trigger: '.header',
        start: '100',
        end: 'bottom',

        scrub: true,
    }
})
}

