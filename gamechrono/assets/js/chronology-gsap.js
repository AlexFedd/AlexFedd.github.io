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

    const cards = document.querySelectorAll('.chrono-card');
    let index = 0;
    cards.forEach(card => {
        if(index % 2 === 0) {
            gsap.fromTo(card, {opacity: 0,y: 200, x: -100}, 
                {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scrollTrigger: {
                        trigger: card,
                        start: '-1200',
                        end: '-300',
            
                        scrub: true,
                    }
                })
        }
        else {
            gsap.fromTo(card, {opacity: 0,y: 200, x: 100}, 
                {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scrollTrigger: {
                        trigger: card,
                        start: '-1200',
                        end: '-300',
            
                        scrub: true,
                    }
                })
        }
        index++;

    });


}

