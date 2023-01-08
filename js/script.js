function scrolling(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("visible");
    } else {
      change.target.classList.remove("visible");
    }
  });
}

let options = {
  threshold: [0.5],
};
let observer = new IntersectionObserver(scrolling, options);
let elements = document.querySelectorAll(".scroll-animation");

for (let elm of elements) {
  observer.observe(elm);
}

function toTop () {
  window.scroll({
    top: 0, left: 0, behavior: "smooth"
  });
}

function goTop () {
  if (window.scrollY >= 1000) {
    document.querySelector(".back-to-top").classList.add("show");
    document.querySelector(".back-to-top").addEventListener("click", toTop)

  } else {
    document.querySelector(".back-to-top").classList.remove("show");
  }
}
window.addEventListener("scroll", goTop);
window.addEventListener("resize", goTop);