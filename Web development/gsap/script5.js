var tl = gsap.timeline()
function time(){
    let a = 0 ;
    setInterval(() => {
        if (a<100) {
            a = a + Math.floor(Math.random()*20); 
            document.querySelector(".loader h1").innerHTML= a+"%";
        }
        else{
            a=100;
            document.querySelector(".loader h1").innerHTML= a+"%";
        }
    }, 150);
}

tl.to(".loader h1",{
    delay:0.5,
    duration:1,
    onStart:time()
})

tl.to(".loader",{
    top:"-100vh",
    delay:0.4,
    duration:1.5
})


gsap.to(".nav h2",{
    fontWeight:300,
    fontStretch: "1000%",
    duration:1,
    repeat:1,
    yoyo:true,
    delay:3,
})

gsap.to(".page1 h1",{
    transform:"translateX(-1370px)",
    fontWeight:200,
    scrollTrigger:{
        scrub:3,
        trigger:".page1",
        pin:true,
        start:"top 0%",
        end:"top -200%",
    }
})