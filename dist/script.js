const header = document.querySelector("header");

let previousScrollY = 0;

const handleScroll = (e) => {
  if (window.scrollY > 100 && window.scrollY > previousScrollY) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }
  previousScrollY = window.scrollY;
};

document.addEventListener("scroll", handleScroll);

const overlay = document.querySelector(".overlay");
const dropdownNav = document.querySelector(".dropdown__nav");
const introImage = document.querySelector(".intro__image");
const headerIcon = document.querySelector(".header__icon");
const hamburger = document.querySelector(".header__hamburger");
const cross = document.querySelector(".header__cross");

const handleIconClick = () => {
  hamburger.classList.toggle("invisible");
  hamburger.classList.toggle("rotated");
  cross.classList.toggle("invisible");
  cross.classList.toggle("rotated");
  overlay.classList.toggle("invisible");
  introImage.classList.toggle("invisible");
  dropdownNav.classList.toggle("hidden");
};

headerIcon.addEventListener("click", handleIconClick);
