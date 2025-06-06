gsap.to("#page2 h1",{
    transform:"translateX(-165%)",
    scrollTrigger:{
        trigger:"#page2 ",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub:5,
        pin:true

    }
})
//when using pin trigger parent in which object is in above case page 1 is parent of h1