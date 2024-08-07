gsap.from(".page1 .box", {
    scale:-1,
    duration:2,
    delay:0.5,
    rotate:360,
    scrollTrigger:{
        scroller:"body",
        trigger:".page1",
        start:"top 60%",
        end:"top 10%",
        scrub:5
    }
})

gsap.from(".page2 .box", {
    scale:-1,
    duration:2,
    delay:0.5,
    rotate:360,
    scrollTrigger:{
        scroller:"body",
        trigger:".page2",
        start:"top 50%",
        end:"top 30%",
        scrub:5,
        markers:true,
    }
})

gsap.from(".page3 .box", {
    scale:-1,
    duration:2,
    delay:1,
    rotate:360,
    scrollTrigger:".page3",
})