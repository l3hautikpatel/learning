function locoMotiveCodePen(page) {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(page),
        smooth: true,
        multiplier: 1,
    });

    ScrollTrigger.scrollerProxy(page, {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            };
        },
        pinType: document.querySelector(page).style.transform ? 'transform' : 'fixed',
    });

    locoScroll.on('scroll', ScrollTrigger.update);
    ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
    ScrollTrigger.refresh();
}

locoMotiveCodePen(".main");

gsap.to('.box2',{
    x:500,
    y:"100%",
    rotation:90,
    duration:2,
    scrollTrigger:{
        scroller:'.main',
        trigger:'.page2',
        start:"top 75%",
        end:"top 25%",
        markers:true,
        scrub:true,
    },
})