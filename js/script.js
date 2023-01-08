// scroll observer///

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

//// back to top fuction///

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


///// pop-up visible///

const popupButton = document.querySelector(".footer-button");
const body = document.querySelector("body");
const popupClose = document.querySelector(".popup-close");
const popup = document.querySelector(".popup");


popupButton.addEventListener("click", ()=> {
  popup.classList.add("open");
  body.classList.add("lock");
});

popupClose.addEventListener("click", ()=> {
  popup.classList.remove("open");
  body.classList.remove("lock");
});