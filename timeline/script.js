//inside timeline everything moves in sync
var tl = gsap.timeline()

tl.to("#box1",{
    x:1500,
    rotate:360,
    duration:1.5,
    borderRadius: "50%",
    repeat:1,
    yoyo:true,
    delay:1
})
tl.to("#box2",{
    x:1500,
    rotate:360,
    duration:1.5,
    borderRadius: "50%",
    repeat:1,
    yoyo : true
})
tl.to("#box3",{
    x:1500,
    rotate:360,
    duration:1.5,
    borderRadius: "50%",
    repeat:1,
    yoyo : true
})