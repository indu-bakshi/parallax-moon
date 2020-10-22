// gsap.from("#bus",{x:100 ,y:100,duration:5});
// gsap.from('#text',{opacity:0,duration:2,y:500,ease:Back.easeOut.config(1.7)});
// gsap.from('#bus',{opacity:0,duration:10,y:4500,x:-9000,ease:Back.easeOut.config(1.7)});
gsap.to('#bus',{duration:7, motionPath: {
    path: "#path",
    align: "#path",
    alignOrigin: [0.7, 0.7],
    // autoRotate: true
    start: 0.1,
    end: 0.7
  },
  scale:0.15,
  opacity:0.8,
  repeat: -1,
  
});