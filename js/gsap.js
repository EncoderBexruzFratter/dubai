gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline();

timeline.from(".hero__logo", {
  y: 50,
  duration: 1,
  ease: "ease"
});

const elementsToScale = [
  "#hero__left__top__btn_1",
  ".hero__left__bottom__link__img_box",
  "#hero__left__top__btn_2",
  ".hero__left__bottom__link",
  ".hero__right__bg",
  ".hero__right_top__btn_1",
  ".hero__right_top__btn_2",
  ".hero__right__bottom__download"
];

elementsToScale.forEach(selector => {
  gsap.to(selector, {
    scale: 1,
    duration: 1
  });
});

timeline.to(".hero__left__center__heading", {
  y: 50,
  duration: 1,
  ease: "ease"
});

const titleSpans = [
  ".hero__left__center__title_top span",
  ".hero__left__center__title_center span",
  ".hero__left__center__title_bottom span"
];

titleSpans.forEach(selector => {
  gsap.to(selector, {
    y: -67,
    duration: 1,
    ease: "ease"
  });
});

timeline.to(".hero__left__bottom__explore__link__text", {
  x: 30,
  opacity: 1,
  duration: 1,
  ease: "ease"
});

gsap.to(".hero__left__bottom__link__img_bg_black", {
  scale: 1,
  duration: 0.5
});

const rightTitles = [
  ".hero__right__top__title_1_left",
  ".hero__right__top__title_2_left"
];

rightTitles.forEach(selector => {
  gsap.to(selector, {
    y: -46,
    duration: 0.6
  });
});

gsap.to(".hero", {
  opacity: 1,
  duration: 0.6
});

gsap.to(".payment__bottom", {
  // maxWidth: 1440,
  // x:-100,
  // y:-240,
  // height:900,
  scale:2,
  duration:1,
  scrollTrigger: {
    trigger: ".payment__bottom",
    start: "top bottom",
    end: "top 200px",
    scrub: true,
  }
});

gsap.to(".hg", {
  // maxWidth: 1440,
  // x:-100,
  // y:-240,
  // height:900,
  scale:1.85,
  duration:1,
  scrollTrigger: {
    trigger: ".hg",
    start: "bottom 200px",
    end: "bottom 100",
    scrub: true,
    // markers:true,
  }
});
gsap.to(".payment__bg", {
  // maxWidth: 1440,
  // x:-100,
  // y:-240,
  // height:900,
  backgroundColor: "#232323",
  duration:3,
  scrollTrigger: {
    trigger: ".payment__bottom",
    start: "bottom 500px",
    end: "bottom 500",
    scrub: true,
    // markers:true,
  }
});
gsap.to(".portfolio__title", {
  y:-60,
  duration:1,
  scrollTrigger: {
    trigger: ".portfolio__title",
    start: "top 300",
    end: "bottom 300",
    // markers:true
  }
})
gsap.to(".portfolio__btn__box", {
  x:-330,
  duration:1,
  scrollTrigger: {
    trigger: ".portfolio__title",
    start: "top 300",
    end: "bottom 300",
    // markers:true
  }
})
gsap.to(".portfolio__card__top", {
  scale:1,
  duration:1,
  scrollTrigger: {
    trigger: ".portfolio__title",
    start: "top 300",
    end: "bottom 300",
    // markers:true
  }
})
gsap.to(".portfolio__card__center", {
  scale:1,
  duration:3,
  scrollTrigger: {
    trigger: ".portfolio__card__center",
    start: "top center",
    end: "bottom center",
    // markers:true
  }
})
gsap.to(".portfolio__card__bottom", {
  scale:1,
  duration:3,
  scrollTrigger: {
    trigger: ".portfolio__card__bottom",
    start: "top center",
    end: "bottom center",
    // markers:true
  }
})



