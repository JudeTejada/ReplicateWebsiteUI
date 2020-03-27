//targets the Image
const targets = document.querySelectorAll(".gallery__img");
const logo = document.querySelector(".heading--3");
const lazyLoad = target => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        //Get the Image
        const img = entry.target;

        //get the src
        const src = img.getAttribute("data-src");
        //replace data-src with src
        img.setAttribute("src", src);

        //remove the opacity
        img.classList.remove("fade");
        console.log(img);
        observer.disconnect();
      }
    });
  });

  io.observe(target);
};

targets.forEach(lazyLoad);
