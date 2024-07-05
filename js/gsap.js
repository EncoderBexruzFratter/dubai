gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline();

timeline.from(".hero__logo", {
  y: 50,
  duration: 1,
  ease: "ease",
});

const elementsToScale = [
  "#hero__left__top__btn_1",
  ".hero__left__bottom__link__img_box",
  "#hero__left__top__btn_2",
  ".hero__left__bottom__link",
  ".hero__right__bg",
  ".hero__right_top__btn_1",
  ".hero__right_top__btn_2",
  ".hero__right__bottom__download",
];

elementsToScale.forEach((selector) => {
  gsap.to(selector, {
    scale: 1,
    duration: 1,
    toggleActions:"restart none  reverse none "
  });
});

gsap.to(".hero__left__bottom__link", {
  delay: 1,
  duration: 1,
  maxWidth: 196,
  toggleActions:"restart none  reverse none "
  
});

timeline.to(".hero__left__center__heading", {
  y: 50,
  duration: 1,
  toggleActions:"restart none  reverse none "

});

const titleSpans = [
  ".hero__left__center__title_top span",
  ".hero__left__center__title_center span",
  ".hero__left__center__title_bottom span",
];

titleSpans.forEach((selector) => {
  gsap.to(selector, {
    y: -67,
    duration: 2,
    ease: "ease",
    toggleActions:"restart none  reverse none "

  });
});

timeline.to(".hero__left__bottom__explore__link__text", {
  x: 30,
  opacity: 1,
  duration: 1,
  ease: "ease",
  toggleActions:"restart none  reverse none "

});

gsap.to(".hero__left__bottom__link__img_bg_black", {
  scale: 1,
  maxWidth: 196,
  duration: .6,
  toggleActions:"restart none  reverse none "

});

const rightTitles = [
  ".hero__right__top__title_1_left",
  ".hero__right__top__title_2_left",
];

rightTitles.forEach((selector) => {
  gsap.to(selector, {
    y: -46,
    duration: 0.6,
    toggleActions:"restart none  reverse none "

  });
});

gsap.to(".hero", {
  opacity: 1,
  duration: 0.6,
  toggleActions:"restart none  reverse none "

});



gsap.to(".portfolio__card__top", {
  scale: 1,
  duration: 3,
  scrollTrigger: {
    trigger: ".portfolio__card__top",
    start: "top center",
    end: "bottom center",
    // markers:true
    scrub: 4,
  },
});
gsap.to(".portfolio__card__center", {
  scale: 1,
  duration: 3,
  scrollTrigger: {
    trigger: ".portfolio__card__center",
    start: "top center",
    end: "bottom center",
    // markers:true,
    scrub: 4,
  },
});
gsap.to(".portfolio__card__bottom", {
  scale: 1,
  duration: 3,
  scrollTrigger: {
    trigger: ".portfolio__card__bottom",
    start: "1000 500",
    end: "1000 center",
    // markers:true,
    scrub: 4,
  },
});

gsap.to(".payment__scroll__box", {
  scale: 2.1,
  duration: 10,
  scrollTrigger: {
    trigger: ".payment__scroll__box",
    start: "-1000 -500",
    end: "bottom bottom",
    // markers: true,
    scrub: 2,
  },
});
gsap.to(".payment__container", {
  maxWidth:1360,
  duration: 5,
  scrollTrigger: {
    trigger: ".payment__container",
    start: "500 400",
    end: "1000 400",
    // markers: true,
    scrub: 2,
  },
});
gsap.to(".payment", {
  backgroundColor:"#232323",
  scrollTrigger: {
    trigger: ".payment",
    start: "400 400",
    end: "1000 400",
    // markers: true,
    scrub: true,
    // pin:true

  },
});
gsap.to("#payment__scroll__box", {
  backgroundColor:"#232323",
  scrollTrigger: {
    trigger: "#payment__scroll__box",
    start: "600 400",
    end: "1000 400",
    // markers: true,
    scrub: true,
  },
});
gsap.to(".portfolio__btn__box", {
  x: -330,
  // duration: 1,
  scrollTrigger: {
    trigger: ".portfolio__btn__box",
    start: "top 700",
    end: "bottom 300",
    // markers:true,
    scrub: 4,
  },
});

// tl.to(".portfolio__container", {
//   maxWidth:1540,
//   duration:1,
//   scrollTrigger: {
//     trigger: ".portfolio__container",
//     start:"1500 500",
//     end:"1500 500",
//     scrub:2,
//     // markers:true
//   }
// }).to(".portfolio__container", {
//   y:-150,
//   maxWidth: 1400,
//   duration:10,
//   // delay:2,
//   scrollTrigger: {
//     trigger: ".portfolio__container",
//     start:"2500 center",
//     end:"2500 center",
//     scrub:4,
//     markers:true
//   }
// })




function solution() {
  if (window.innerWidth < 950) {
    // Kichik ekranlar uchun animatsiya
 
    gsap.to(".solution__anime_1", {
      duration:1,
      maxWidth:660,
      // paddingLeft:"12px",
      scrollTrigger:{
        trigger:".solution__anime_1",
        start:"top 100",
        end:"top 100",
        // scru,b:true,
        // markers:true,
        // markers:"true",
        toggleActions:"restart none reverse none"
      }
    })
    gsap.to(".solution__anime_2", {
      delay:.2,
      maxWidth:660,
      // paddingLeft:"12px",
      duration:1,
      scrollTrigger:{
        trigger:".solution__anime_1",
        start:"top 100",
        end:"top 100",
        // scru,b:true,
        // markers:true,
        // markers:"true",
        toggleActions:"restart none reverse none"
      }
    })
    gsap.to(".solution__anime_3", {
      delay:.3,
      maxWidth:660,
      // paddingLeft:"12px",
      duration:1,
      scrollTrigger:{
        trigger:".solution__anime_1",
        start:"top 100",
        end:"top 100",
        // scru,b:true,
        // markers:true,
        // markers:"true",
        toggleActions:"restart none reverse none"
      }
    })
    gsap.to(".solution__anime_4", {
      delay:.4,
      maxWidth:660,
      // paddingLeft:"12px",
      duration:1,
      scrollTrigger:{
        trigger:".solution__anime_1",
        start:"top 100",
        end:"top 100",
        // scru,b:true,
        // markers:true,
        // markers:"true",
        toggleActions:"restart none reverse none"
      }
    })
    gsap.to(".solution__right__carf", {
      duration:0,
      paddingLeft:"12px",
      scrollTrigger:{
        trigger:".solution__anime_1",
        start:"top 100",
        end:"top 100",
        // scru,b:true,
        // markers:true,
        // markers:"true",
        toggleActions:"restart none reverse none"
      }
    })
    gsap.to(".solutions__title_top span", {
      y:-67,
      duration:1,
      scrollTrigger:{
        trigger:".solution__anime_1",
        start:"-440 100",
        end:"-440 100",
        scrub:2,
        // markers:true,
      }
    })
    gsap.to(".solutions__title_centerz span", {
      y:-67,
      duration:1,
      scrollTrigger:{
        trigger:".solution__anime_1",
        start:"-440 100",
        end:"-440 100",
        scrub:2,
        // markers:true,
      }
    })
    gsap.to(".solutions__title__bottom span", {
      y:-67,
      duration:1,
      scrollTrigger:{
        trigger:".solution__anime_1",
        start:"-440 100",
        end:"-440 100",
        scrub:2,
        // markers:true,
      }
    })
    gsap.to(".solutions__left__link" , {
      x:50,
      duration:1,
      opacity:1,
      scrollTrigger:{
        trigger:".solution__anime_1",
        start:"-420 100",
        end:"-420 100",
        scrub:2,
        // markers:true,
      }
    })
  } else {
    gsap.to(".solution__anime_1", {
      duration:1,
      maxWidth:660,
      scrollTrigger:{
        trigger:".solution__anime_1",
        start:"-195 100",
        end:"-195 100",
        // scrub:true,
        // markers:"true",
        toggleActions:"restart none reverse none"
      }
    })
    gsap.to(".solution__anime_2", {
      delay:.2,
      maxWidth:660,
      duration:1,
      scrollTrigger:{
        trigger:".solution__anime_1",
        start:"-195 100",
        end:"-195 100",
        // scrub:true,
        // markers:"true",
        toggleActions:"restart none reverse none"
      }
    })
    gsap.to(".solution__anime_3", {
      delay:.3,
      maxWidth:660,
      duration:1,
      scrollTrigger:{
        trigger:".solution__anime_1",
        start:"-195 100",
        end:"-195 100",
        // scrub:true,
        // markers:"true",
        toggleActions:"restart none reverse none"
      }
    })
    gsap.to(".solution__anime_4", {
      delay:.4,
      maxWidth:660,
      duration:1,
      scrollTrigger:{
        trigger:".solution__anime_1",
        start:"-195 100",
        end:"-195 100",
        // scrub:true,
        // markers:"true",
        toggleActions:"restart none reverse none"
      }
    })
    gsap.to(".solutions__title_top span", {
      y:-67,
      duration:1,
      scrollTrigger:{
        trigger:".solution__anime_1",
        start:"-195 100",
        end:"-195 100",
        scrub:2
      }
    })
    gsap.to(".solutions__title_centerz span", {
      y:-67,
      duration:1,
      scrollTrigger:{
        trigger:".solution__anime_1",
        start:"-195 100",
        end:"-195 100",
        scrub:2
      }
    })
    gsap.to(".solutions__title__bottom span", {
      y:-67,
      duration:1,
      scrollTrigger:{
        trigger:".solution__anime_1",
        start:"-195 100",
        end:"-195 100",
        scrub:2
      }
    })
    gsap.to(".solutions__left__link" , {
      x:50,
      duration:1,
      opacity:1,
      scrollTrigger:{
        trigger:".solution__anime_1",
        start:"-195 100",
        end:"-195 100",
        scrub:2
      }
    })
  }
}
solution()


const tl = gsap.timeline({
  scrollTrigger:{
    trigger:".smart__round__1",
    start:"-250 250",
    end:"-250 250",
    // markers:true,
    // scrub:2,
    
    toggleActions:"restart none  reverse none "
  }
});


tl.to(".smart__round__1" , {
  x:130,
  duration:2,

}).to(".smart__round__1" , {
  x:340,
  delay:1,
  duration:2,
}).to(".smart__round__1" , {
  x:451,
  delay:1,
  duration:2,
})

const tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:".smart__round__1",
    start:"-250 250",
    end:"-250 250",
    // markers:true,
    // scrub:2,
    
    toggleActions:"restart none  reverse none "
  }
});


tl2.to(".smart__round__2" , {
  y:-100,
  duration:2,
  opacity:1,
}).to(".smart__round__2" , {
  y:-270,
  delay:1,
  duration:2,
  opacity:1,
})
.to(".smart__round__2" , {
  y:-100,
  delay:1,
  duration:2,
  opacity:1,
})

const tl3 = gsap.timeline({
  scrollTrigger:{
    trigger:".smart__round__1",
    start:"-250 250",
    end:"-250 250",
    // markers:true,
    // scrub:2,
    
    toggleActions:"restart none  reverse none "
  }
});

tl3.to(".smart__round__3" , {
  x:-130,
  duration:2,
  opacity:1,
}).to(".smart__round__3" , {
  x:-340,
  delay:1,
  duration:2,
  opacity:1,
}).to(".smart__round__3" , {
  x:-451,
  delay:1,
  duration:1,
})

const tl4 = gsap.timeline({
  scrollTrigger:{
    trigger:".smart__round__1",
    start:"-250 250",
    end:"-250 250",
    // markers:true,
    // scrub:2,
    
    toggleActions:"restart none  reverse none "
  }
});

tl4.to(".smart__title" , {
  marginBottom:80,
  duration:2,
  opacity:1,
}).to(".smart__title" , {
  marginBottom:200,
  delay:1,
  duration:2,
  opacity:1,
})
.to(".smart__title" , {
  marginBottom:80,
  delay:1,
  duration:2,
  opacity:1,
})
const tl5 = gsap.timeline({
  scrollTrigger:{
    trigger:".smart__round__1",
    start:"-250 250",
    end:"-250 250",
    // markers:true,
    // scrub:2,
    
    toggleActions:"restart none  reverse none "
  }
});
tl5.to(".smart__gsap__animation__text" , {
  delay:3.8,
  duration:1,
  opacity:1,
})
.to(".smart__gsap__animation__text" , {
  opacity:0,
  delay:1,
  duration:1,
})
.to(".smart__gsap__animation__text" , {
  y: -80,
})
.to(".smart__gsap__animation__text" , {
  opacity:1,
  delay:.6,
  duration:1
})
gsap.to(".smart__round__text" , {
  delay:2,
  duration:1,
  maxWidth: 196,
  opacity:0,
  scrollTrigger:{
    trigger:".smart__round__1",
    start:"-250 250",
    end:"-250 250",
    // scrub:2,
    
    // markers:true,
    toggleActions:"restart none  reverse none "
  }
})

let tl6 = gsap.timeline({
  scrollTrigger:{
    trigger:".smart__round__1",
    start:"-250 250",
    end:"-250 250",
    // markers:true,
    // scrub:2,
    toggleActions:"restart none  reverse none "
  }
})
tl6.to(".smart__btn", {
  delay:8,
  scale:1,
  duration:1
})
.to(".smart__btn", {
  maxWidth:196,
  duration:1
})


function responsiveAnimation() {
  if (window.innerWidth < 768) {
    // Kichik ekranlar uchun animatsiya
    gsap.to(".portfolio__title", {
      y: -86,
      duration: 1,
      scrollTrigger: {
        trigger: ".portfolio__title",
        start: "-100 500",
        end: "-100 500",
        // markers:true,
        scrub: 2,
        // toggleActions:"restart none  reverse none "
      },
    });
    gsap.to(".portfolio__bottom__animation", {
      scale:1,
      duration:3,
      scrollTrigger:{
        trigger: ".portfolio__bottom__animation",
        start:"top 200",
        end:"top 200",
        scrub:1,
        // markers:true
      }
    })
  } else {
    // Katta ekranlar uchun animatsiya
    gsap.to(".portfolio__title", {
      y: -60,
      duration: 1,
      scrollTrigger: {
        trigger: ".portfolio__title",
        start: "top 500",
        end: "bottom 300",
        // markers:true,
        scrub: 2,
      },
    });
    gsap.to(".portfolio__bottom__animation", {
      scale:1,
      duration:3,
      scrollTrigger:{
        trigger: ".portfolio__bottom__animation",
        start:"-150 600",
        end:"bottom bottom",
        scrub:1,
        // markers:true
      }
    })
  }
}
responsiveAnimation()



