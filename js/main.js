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

$(document).ready(function () {
  $(".reviews__slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});
//slider reviews

$(document).ready(function () {
  $(".examples__slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  });
});
//slider examples

const body = document.querySelector(".body");
const modal = document.querySelector(".modal");
const cross = document.querySelector(".close-modal");
const submit = document.querySelector(".submit-button");
const orderButtons = document.querySelectorAll(".button");
const navOrder = document.querySelector("#navOrder");

let openModal = function () {
  modal.classList.remove("hidden");
  body.style.overflow = "hidden";
};

let closeModal = function () {
  modal.classList.add("hidden");
  body.style.overflow = "auto";
};

for (let orderButton of orderButtons) {
  orderButton.onclick = function () {
    openModal();
  };
}

navOrder.onclick = function () {
  openModal();
};

cross.onclick = function () {
  closeModal();
};

submit.onclick = function () {
  closeModal();
};

$(document).click(function (e) {
  if ($(e.target).is(".modal")) {
    closeModal();
  }
});
