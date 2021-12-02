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
