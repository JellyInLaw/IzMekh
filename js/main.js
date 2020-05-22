const burger = document.querySelector(".burger");
const headerNav = document.querySelector(".header__nav");

burger.onclick = function () {
  burger.classList.toggle("is-active");
  headerNav.classList.toggle("is-active");
};

window.onscroll = function () {
  if (window.pageYOffset > 50) {
    headerNav.classList.add("header__nav-onscroll");
  } else {
    headerNav.classList.remove("header__nav-onscroll");
  }
};
