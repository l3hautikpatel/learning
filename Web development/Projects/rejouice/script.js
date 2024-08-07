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

// locoMotiveCodePen(".main");     

function page1(){
    var loading = document.querySelector('.loading');
    var navOpen = document.querySelector('.navOpen');
    var navClose = document.querySelector('.navClose');


    var loadingString = "<span>";
    for (let i = 0; i < loading.innerHTML.length; i++) {
        const element = loading.innerHTML[i];
        if (element == ' '){
            loadingString += "  </span><span>"
        }else if(i == loading.innerHTML.length-1){
            loadingString += element+" </span>"
        }
        else{
            loadingString += element; 
        }
    }
    loading.innerHTML = '';
    
    setTimeout(() => {
        loading.innerHTML = loadingString;
        var tl = gsap.timeline();

        tl.from('.loading span',{
            x:30,
            opacity:0,
            duration:3,
            stagger:0.3,
        })
        tl.to('.loading',{
            delay:1,
            opacity:0,
        })
        tl.to('.container',{
            opacity:1,
        })
    }, 2000);


    navOpen.addEventListener('click',()=>{
        gsap.to('.navExpand',{
            height:'65%',
            duration: 0.4,
        })
    })
    navClose.addEventListener('click',()=>{
        gsap.to('.navExpand',{
            height:'0%',
            duration: 0.4,
        })
    })




}

page1()