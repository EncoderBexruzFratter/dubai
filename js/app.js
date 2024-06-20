gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline();

timeline.from(".hero__logo", {
  y: 50,
  duration: 1,
  ease: "ease",
});
gsap.to("#hero__left__top__btn_1", {
  scale: 1,
  duration: 1,
  ease: "ease",
});
gsap.to(".hero__left__bottom__link__img_box", {
  scale: 1,
  duration: 1,
  ease: "ease",
});
gsap.to("#hero__left__top__btn_2", {
  scale: 1,
  duration: 1,
  ease: "ease",
});

gsap.to(".hero__left__center__heading", {
  y: 50,
  duration: 1,
  ease: "ease",
});
gsap.to(".hero__left__center__title_top span", {
  y: -67,
  duration: 1,
  ease: "ease",
});
gsap.to(".hero__left__center__title_center span", {
  y: -67,
  duration: 1,
  ease: "ease",
});

gsap.to(".hero__left__center__title_bottom span", {
  y: -67,
  duration: 1,
  ease: "ease",
});
gsap.to(".hero__left__bottom__explore__link__text", {
  x: 30,
  opacity: 1,
  duration: 1,
  ease: "ease",
});
gsap.to(".hero__left__bottom__link__img_bg_black", {
  scale: 1,
  duration: 0.5,
});
gsap.to(".hero__left__bottom__link__img_bg_black", {
  scale: 1,
  duration: 0.5,
});

gsap.to(".hero__left__bottom__link", {
  scale: 1,
  duration: 1,
});

gsap.to(".hero__right__bg", {
  scale: 1,
  duration: 1,
});

gsap.to(".hero__right__top__title_1_left", {
  y: -46,
  duration: 0.6,
});
gsap.to(".hero__right__top__title_2_left", {
  y: -46,
  duration: 0.6,
});
gsap.to(" .hero", {
  opacity: 1,
  duration: 0.6,
});
gsap.to(".hero__right_top__btn_1", {
  scale: 1,
  duration: 1,

});
gsap.to(".hero__right_top__btn_2", {
  scale: 1,
  duration: 1,
});
gsap.to(".hero__right__bottom__download", {
    scale: 1,
    duration: 1,
  });
