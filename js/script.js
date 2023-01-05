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
