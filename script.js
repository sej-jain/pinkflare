
function timelineone(){
    var t1= gsap.timeline({
        scrollTrigger:{
            trigger:"#page1",
            start:"top top",
            scrub:.8,
            // markers:true,
            pin:true,
            end:"bottom -250%"
        }
    })
    t1
    .to("#cimage",{
        left:"50%",
    })
    .to("#circle #btm img",{
        rotate:"-180deg",
        scale:1,
        duration:1,
        ease: Power1,
        stagger:.1
    },"hell")
    .to("#circle #top img",{
    
        scale:1,
        duration:1,
        ease: Power1,
        stagger:.1
    },"hell")
    .to("#cimage h2",{
     
        opacity:"0",
        duration:1,
        ease: Power1,
        stagger:.1
    },"hell")
    .to("#cimg  img",{
        scale:"0",
        duration:1,
        ease:Power1,
        stagger:1
    },"hell")
    .to("#nav h1",{
        // delay:-.5,
        color:"white",
    },"cl")
    .to("#rnav",{
        opacity:0,
        delay:-.3
    },"cl")
    .to("#rnav2",{
       opacity:1,
       delay:-.03
    },"cl")
    .to(".cdown",{
        color:"white",
    },"cl")
    .to("#circle ",{
        scale:.6,
        duration:1,
        ease: Power1,
        stagger:.1
    },"hell")
    .to("#overlay h1",{
        bottom:"-20%",
        ease:Power1,
        color:"white"
    },"hell")
    
    .to("#gola ",{
        top:"50%",
        scale:3, 
        duration:1,
        ease: Power1,
        stagger:.1
    },"hell")
    .to("#scircle",{
        scale:"0",
        duration:3,
        ease:Power1,
    },"hello")
    
    .to("#circle",{
        scale:"0",
        duration:1,
        ease:Power1,
    },"hello")
    .to("#gola",{
        opacity:0,
        scale:"0",
        ease:Power1,
    },"hello")
    .to("#page1>h2",{
        bottom:"8%",
        duration:2,
        rotate:"0deg",
        ease:Power1
    },"hello")
    .to("#pinkbox",    {
        top:"0%",
        duration:3,
        ease:Power1
    },"hello 1")
    .to("#pinkbox",    {
        top:"-100%",
        duration:1,
        ease:Power1
    },)
    
    
}
function timelinetwo(){
    var t2= gsap.timeline({
        scrollTrigger:{
            trigger:"#page2",
            start:"top top",
            scrub:.8,
            // markers:true,
            pin:true,
            end:"bottom -250%"
        }
    }) 
    t2
    .to("#nav h1",{
        // delay:-.5,
        color:"black",
    },"a")

    .to("#rnav",{
        opacity:1
    },"a")
    .to("#rnav2",{
       opacity:0
    },"a")
    .to(".cdown",{
        color:"black",
    },"a")
    .to(".pic",{
        top:"50%",
        
        ease:Power1,
        
    },"a")
    .to(" #stop .puc",{
        top:"50%",
        ease:Power1,
        duration:1,
        // delay:1,   
    },"a")
    .to(" #stop .puc",{
        left:"50%",
        ease:Power1,
    },"b")
    .to(" #stop .pic",{
        left:"50%",
        ease:Power1,
           
    },"b")
    
    .to(".pic",{
        scale:9,   
        ease:Power1,
        
    })
    .to("#nav h1",{
        delay:-.5,
        color:"white",
    },"cl")
    .to("#rnav",{
        opacity:0
    },"cl")
    .to("#rnav2",{
       opacity:1
    },"cl")
    .to(".cdown",{
        color:"white",
    },"cl")
    .to("#stop>h1",{
        left:"-280%",
        duration:3,   
        ease:Power1,
        
    },"c")
    .to(".pic",{
      background:"linear-gradient(to right, #d5a7b4, #b4aad5)"
    },"c")
    .to("#sbtm #p1",{
        opacity:0,
    },"c")
    .to("#sbtm>#one",{
        opacity:0,
    },"c")
    .to("#sbtm #p2",{
        opacity:1,
        delay:.5
    },"c")
    .to("#sbtm>#two",{
        opacity:1,
        delay:.5
    },"c")
    .to("#stop h1",{
        bottom:"0%",
        stagger:.4
    })
    .to("#sbtm>#two",{
        opacity:0,
        
    },"s")
    .to("#sbtm>#three",{
        opacity:1,
        delay:.5
    },"s")
    .to("#stop #pp1",{
        y:"0%",
        // duration:2
        
    })
    .to("#stop #pp2",{
        y:"0%",
        delay:-.4,
        // duration:2
       
    })
    .to("#stop #pp3",{
        y:"0%",
        delay:-.3,
    //    duration:1
    })
    .to("#stop #pp4",{
        y:"0%",
        delay:-.4,
        // duration:1
       
    })
    .to("#stop #pp5",{
        y:"0%",
        delay:-.4,
        // duration:1
       
    })
    .to(".baby1",{
       x:"-30%",
       duration:2
    })
    .to(".baby2",{
        x:"-30%",
        duration:1
    })
    
    
}


timelineone();
timelinetwo();

