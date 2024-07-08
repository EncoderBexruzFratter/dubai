gsap.registerPlugin(ScrollTrigger);

//   const report__title_2 = document.querySelector("#report__title_2");
//   let counterValue2 = 0;
//   const intervalId2 = setInterval(() => {
//     counterValue2++;
//     report__title_2.textContent = counterValue2 + "%";

//     if (counterValue2 >= 98) {
//       clearInterval(intervalId2);
//     }
//   }, 50);
//   const report__title_3 = document.querySelector("#report__title_3");
//   let counterValue3 = 0;
//   const intervalId3 = setInterval(() => {
//     counterValue3++;
//     report__title_3.textContent = counterValue3;

//     if (counterValue3 >= 500) {
//       clearInterval(intervalId3);
//     }
//   }, 10);

gsap.to(".gsap__scr", {
  scrollTrigger: {
    trigger: ".gsap__scr",
    start: "-410 410",
    end: "bottom",
    toggleClass: "report__title_1",
    // markers: true,
    onEnter: () => {
      if (document.querySelector(".report__title_1")) {
        countplus();
      }
    },
    onLeaveBack: () => {
      count_0();
    },
  },
});

// countplus function definition

function countplus() {
  const reportTitle = document.querySelector(".report__title_1");
  if (!reportTitle) return;

  let counterValue = 0;
  const intervalId = setInterval(() => {
    counterValue++;
    reportTitle.textContent = counterValue + "+";

    if (counterValue >= 100) {
      clearInterval(intervalId);
    }
  }, 50);
}
function count_0() {
  reportTitle.textContent = "0";
}

gsap.to(".gsap__scr1", {
  scrollTrigger: {
    trigger: ".gsap__scr1",
    start: "-570 410",
    end: "bottom",
    toggleClass: "report__title_2",
    // markers: true,
    onEnter: () => {
      if (document.querySelector(".report__title_2")) {
        countplus1();
      }
    },
    onLeaveBack: () => {
      count_1();
    },
  },
});

// countplus function definition
function countplus1() {
  const report__title_2 = document.querySelector(".report__title_2");
  let counterValue2 = 0;
  const intervalId2 = setInterval(() => {
    counterValue2++;
    report__title_2.textContent = counterValue2 + "%";

    if (counterValue2 >= 98) {
      clearInterval(intervalId2);
    }
  }, 50);
}
function count_1() {
  reportTitle.textContent = "0";
}
gsap.to(".gsap__scr2", {
  scrollTrigger: {
    trigger: ".gsap__scr2",
    start: "-730 410",
    end: "bottom",
    toggleClass: "report__title_3",
    // markers: true,
    onEnter: () => {
      if (document.querySelector(".report__title_3")) {
        countplus2();
      }
    },
    onLeaveBack: () => {
      count_3;
    },
  },
});

function countplus2() {
  const report__title_3 = document.querySelector(".report__title_3");
  let counterValue3 = 0;
  const intervalId3 = setInterval(() => {
    counterValue3++;
    report__title_3.textContent = counterValue3;

    if (counterValue3 >= 500) {
      clearInterval(intervalId3);
    }
  }, 10);
}
function count_3() {
  reportTitle.textContent = "0";
}
countplus()
count_0()
countplus1()
count_1()
countplus2()
count_3()