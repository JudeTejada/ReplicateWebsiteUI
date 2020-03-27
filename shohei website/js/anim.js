// ANIMATION
var tl = gsap.timeline();

tl.from(".hero__content", {
  opacity: 0,
  duration: 1,
  x: -40,
  ease: "power1.inOut",
  stagger: {
    grid: [7, 15],
    from: 11,
    axis: "y",
    amount: 1.5
  }
});

tl.from(".nav__ul", {
  opacity: 0,
  y: -30,
  ease: "power1.inOut",
  delay: 0.8
});

document.querySelector("#btn").addEventListener("click", () => {});

document.querySelector("#btn").addEventListener("click", () => {
  let menu = document.querySelector(".hamburger");
  menu.classList.toggle("active");

  Array.from(menu.children).forEach(item => {
    item.classList.toggle("fadeup");
  });
});

// SHOW LOGO IF ITS SCROLLED

window.addEventListener("scroll", e => {
  let last_known_scroll_position = window.scrollY;
  if (last_known_scroll_position) {
    document.querySelector(".heading--3").classList.remove("hide");
  } else {
    document.querySelector(".heading--3").classList.add("hide");
  }
});
