gsap.to("#box",{
    x:1000,
    duration:2,
    delay:1,
    rotate:360,
    backgroundColor:"crimson",
    borderRadius:"50%",
    repeat:Infinity,
    yoyo:true
})
//to-when trying to reach from initaial to final vice versa for form
gsap.from("#box2",{
    x:1000,
    y:100,
    duration:2,
    delay:1,
    backgroundColor:"crimson",
    borderRadius:"50%",
    scale:0.5,
})
gsap.from("#box2 h1",{
    opacity:0,
    duration:1,
    y:30,
    delay:1,
    stagger:-1,
    
})
//stagger used to slow down multiple elements with same name tags