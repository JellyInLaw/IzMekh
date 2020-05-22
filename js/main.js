const burger = document.querySelector(".burger");
const headerNav = document.querySelector(".header__nav");

burger.onclick = function () {
  burger.classList.toggle("is-active");
  headerNav.classList.toggle("is-active");
};

window.onscroll = function () {
  if (window.pageYOffset > 80) {
    headerNav.classList.add("header__nav-onscroll");
  } else {
    headerNav.classList.remove("header__nav-onscroll");
  }
};
//nav

let category = document.querySelectorAll(".categories__item");
const content = document.querySelectorAll(".content");

let addHidden = function () {
  for (let cont of content) {
    cont.classList.add("hidden");
  }
  for (let cat of category) {
    cat.style.textDecoration = "underline";
  }
};

addHidden();
content[0].classList.remove("hidden");
category[0].style.textDecoration = "none";

for (let cat of category) {
  cat.onclick = function () {
    addHidden();
    content[cat.dataset.type].classList.remove("hidden");
    cat.style.textDecoration = "none";
  };
}
//works
