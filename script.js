const slides = document.querySelectorAll(".slide");
const container = document.querySelector(".container");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

prev.addEventListener("click", () => {
  const activeSlide = document.querySelector(".slide.active");

  // Remove active class from current slide
  activeSlide.classList.remove("active");

  const prevSlide =
    activeSlide.previousElementSibling || slides[slides.length - 1];

  prevSlide.classList.add("active");
  prevSlide.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

next.addEventListener("click", () => {
  const activeSlide = document.querySelector(".slide.active");

  // Remove active class from current slide
  activeSlide.classList.remove("active");

  let nextSlide = activeSlide.nextElementSibling || slides[0];

  nextSlide.classList.add("active");
  nextSlide.scrollIntoView({ behavior: "smooth", block: "nearest" });
});
