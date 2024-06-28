const sliderContainer = document.querySelector(".slider-image");
const btnNextSlide = document.querySelector(".btn-next-slide");
const slideImage = document.querySelectorAll(".slider-image .item");
const btnPrevSlide = document.querySelector(".btn-prev-slide");
let numberSlide = 0;
let slideIndex = 0;

const showSlides = () => {
  let slides = document.querySelectorAll(".slider-image .item");
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${slideIndex * 100}%)`;
  });

  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
};

setInterval(showSlides, 3000);

const prevShowSlides = () => {
  let slides = document.querySelectorAll(".slider-image .item");
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${slideIndex * 100}%)`;
  });

  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
};

showSlides();
btnNextSlide.addEventListener("click", () => {
  showSlides();
});
btnPrevSlide.addEventListener("click", () => {
  console.log("loojdslf");
  prevShowSlides();
});
