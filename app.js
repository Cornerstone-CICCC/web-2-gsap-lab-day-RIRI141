gsap.registerPlugin(ScrollTrigger);

// YOUR CODE HERE
const sec1 = gsap.timeline();

sec1
  .from(".section1 span:first-child", {
    x: "-100vw",
    duration: 1,
  })
  .from(
    ".section1 span:last-child",
    {
      x: "100vw",
      duration: 1,
    },
    "<"
  )
  .from(".section1 p", {
    rotate: 100,
    opacity: 0,
    transformOrigin: "top left",
    duration: 1,
  })
  .from(".section1 img", {
    y: "100vh",
    duration: 1,
  });

const sec2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2",
    toggleActions: "play none none reverse",
    start: "top top",
  },
});

sec2
  .from(".section2 span:first-child", {
    y: "-100vh",
    opacity: 0,
    duration: 0.5,
  })
  .from(".section2 span:last-child", {
    y: "-100vh",
    opacity: 0,
    duration: 0.5,
  })
  .from(".section2 p", {
    scaleX: 0,
    transformOrigin: "center center",
    opacity: 0,
    duration: 0.2,
  });

const sechor = gsap.timeline({
  scrollTrigger: {
    trigger: ".horizontal-sections",
    start: "top top",
    pin: true,
    scrub: true,
  },
});
sechor
  .from(".section3 h2", {
    x: "-100vw",
    scale: 30,
    duration: 0.5,
  })
  .to(".section3 span", {
    backgroundColor: "white",
    color: "black",
  })
  .from(".section3 span", {
    y: "100vh",
    stagger: 0.2,
  });
sechor
  .to(".horizontal-sections", {
    xPercent: -35,
  })
  .from(".section4 .portfolio-item", {
    x: "100vw",
    stagger: 0.2,
  });

const h2Strings = document.querySelector(".section5 h2");
const text = h2Strings.textContent;
const animeText = text
  .split("")
  .map((char) =>
    char === " " ? "<span>&nbsp;</span>" : `<span>${char}</span>`
  )
  .join("");
h2Strings.innerHTML = animeText;

const sec5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section5",
    start: "top top",
    pin: true,
    scrub: true,
  },
});

sec5
  .from(".section5 h2 span", {
    y: "-100vh",
    stagger: 0.1,
  })
  .from(".section5 p", {
    y: "-10px",
    opacity: 0,
  })
  .from(".section5 button", {
    opacity: 0,
    transformOrigin: "center center",
    scale: 0,
  })
  .from(".section5", {
    backgroundPosition: "180% 100%",
  })
  .to(".section5", {
    backgroundColor: "black",
    duration: 1,
  });
