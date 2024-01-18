const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  slidesPerView: 1,
  spaceBetween: 48,
});

const navBtn = document.querySelector(".navigation__nav-button");
const navList = document.querySelector(".navigation__list");
const closeBtn = document.querySelector(".navigation__close-btn");

document.addEventListener("click", (e) => {
  if (e.target.closest(".navigation__nav-button")) {
    navList.classList.toggle("navigation__list--opened");
  }
  else if (
    navList.classList.contains("navigation__list--opened") &&
    (e.target.classList.contains("navigation__close-btn") ||
      (e.target.closest(".navigation__list")=== null))
  ) {
    navList.classList.toggle("navigation__list--opened");
  }
});
