



// // // page1 simple timeline and to from 
gsap.to(".box", {
    x: 900,
    y: 200,
    backgroundColor: "black",
    duration: 2,
    delay: 2,
    yoyo:true,
    repeat:-1,   // n for n time and -1 for  infinite 
    stagger:1,
})

let tl = gsap.timeline();
tl.to(".h5", {
    x:800,
    duration:2,
    color: "yellow",
})
tl.to(".h3", { 
    x:700,
    duration:2,
    color: "red",
})
tl.to(".h1", {
    x:600,
    duration:2,
    color: "#ff6b81",
})