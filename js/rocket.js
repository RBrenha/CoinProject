
var tl = new TimelineMax({});
    tl.addLabel('start', 0)
      .add(TweenMax.from(".takeoff", 0.5, {scaleY:0, y: -200, ease:Expo.easeInOut, delay:3}))
      .add(TweenMax.to("#rocket", 1 ,{className:"+=shake", delay:-1}))
      .add(TweenMax.to(".smoke", 2,{y: -50, delay: 1}))
      .add(TweenMax.to("#rocket", 1 ,{className: "-=shake"}))
      .add(TweenMax.to("#rocket",1, {y: -300,  delay:-1}))
      .add(TweenMax.to(".takeoff",1, {y: -300, delay:-1}))
      .add(TweenMax.to(".smoke", 5,{scale: 1, y: -20, delay: -1}))
      .add(TweenMax.to("#rocket",1, {y: -10, rotate: 40, delay: -3}))
      .add(TweenMax.to(".takeoff",0.2, {opacity: 0, delay: -3}))
      .add(TweenMax.to(".stars",0.2, {opacity: 0, delay: -3}))
      .add(TweenMax.from(".stars2",0.2, {opacity: 0, delay: -3}))
      .add(TweenMax.to(".artboard",0.2, {rotation: 40, delay: -3}))  
      .add(TweenMax.to(".smoke", 2,{opacity: 0, delay: -2}))
      
      
    
      
      


