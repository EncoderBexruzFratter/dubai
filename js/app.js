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
    end: "bottom",
    scrub: true,
  }
});

gsap.to(".hg", {
  maxWidth: 1440,
  x:-100,
  y:-240,
  height:900,
  scale:1.85,
  duration:1,
  scrollTrigger: {
    trigger: ".payment__bottom",
    start: "bottom -100px",
    end: "bottom -bottom",
    scrub: true,
  }
});
