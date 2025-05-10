"use strict";

///////////////////////////////////////
// Modal window
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

console.log("hellow world");

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

const header = document.querySelector(".header");
/*
const message = document.createElement("div");

message.innerHTML =
  "We use cookies for improved functionality and analysis. <button class='btn btn--close-cookie'>Got it!</button>";
message.classList.add("cookie-message");

header.append(message);

message.style.width = "105%";
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 20 + "px";
message.style.padding = "0 9rem";
message.style.backgroundColor = "#444";

const btnCloseCookie = document.querySelector(".btn--close-cookie");

btnCloseCookie.addEventListener("click", function () {
  message.parentElement.removeChild(message);
});
*/

btnScrollTo.addEventListener("click", function (e) {
  /*
  const s1cords = section1.getBoundingClientRect();
 
  console.log(s1cords);

  console.log(e.target.getBoundingClientRect());

  console.log("Current scroll (X/Y)", window.pageXOffset, window.pageOffset);

  console.log(
    "height/width viewport",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  window.scrollTo(
    s1cords.left + window.pageXOffset,
    s1cords.top + window.pageYOffset
  );
 
  window.scrollTo({
    left: s1cords.left + window.pageXOffset,
    top: s1cords.top + window.pageYOffset,
    behavior: "smooth",
  });
   */
  section1.scrollIntoView({ behavior: "smooth" });
});

////////////////////////////////////////
//PAGE NAVIGATION
/*
document.querySelectorAll(".nav__link").forEach(function (element) {
  element.addEventListener("click", function (e) {
    e.preventDefault();
    const idAttribute = this.getAttribute("href");
    console.log(idAttribute);
    document.querySelector(idAttribute).scrollIntoView({ behavior: "smooth" });
  });
});
*/

// 1. Add Event listetner to common parent element
// 2. Detremine what element orginated the event

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  //Matching srategy
  if (e.target.classList.contains("nav__link")) {
    const idAttribute = e.target.getAttribute("href");
    //console.log(idAttribute);
    document.querySelector(idAttribute).scrollIntoView({ behavior: "smooth" });
  }
});

// Building Tabbed Components
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", function (event) {
  const clicked = event.target.closest(".operations__tab");
  //console.log(clicked);
  //ignore any click where the result is null
  //Guard clause
  if (!clicked) return;
  // Remove the active classes for both the tab and the content areas
  tabs.forEach((tabs) => tabs.classList.remove("operations__tab--active"));
  tabsContent.forEach((content) =>
    content.classList.remove("operations__content--active")
  );
  //Activate Tab
  clicked.classList.add("operations__tab--active");

  //activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

// MENU NAVIGATOR FADE ANIMATION
const handleHover = function (event) {
  if (event.target.classList.contains("nav__link")) {
    const link = event.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((element) => {
      if (element !== link) element.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
const navigator = document.querySelector(".nav");
/*
navigator.addEventListener("mouseover", function (event) {
  handleHover(event, 0.5);
});

navigator.addEventListener("mouseout", function (event) {
  handleHover(event, 1);
});*/

//OR
navigator.addEventListener("mouseover", handleHover.bind(0.5));

navigator.addEventListener("mouseout", handleHover.bind(1));

// Sticky Navigation
/*
const initialCoords = section1.getBoundingClientRect();
window.addEventListener("scroll", function () {
  //console.log(window.scrollY);

  if (window.scrollY > initialCoords.top) navigator.classList.add("sticky");
  else navigator.classList.remove("sticky");
});

// INTERSECTION OBSERVER API
/*
const observerCallBack = function (entries, observer) {
  entries.forEach((entry) => {
    console.log(entry);
  });
};
const observerOption = {
  root: null,
  threshold: [0, 0.39],
};

const observer = new IntersectionObserver(observerCallBack, observerOption);
observer.observe(section1);*/
const navHeight = navigator.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  //console.log(entry);

  if (!entry.isIntersecting) navigator.classList.add("sticky");
  else navigator.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
  //rootMargin: "-90px", there's a better way of doing this instead of hard coding it like this 😂.
});
headerObserver.observe(header);

// Reveal section
const allSections = document.querySelectorAll(".section");
const revealSection = function (entries, observer) {
  entries.forEach((entry) => {
    //console.log(entry);
    if (!entry.isIntersecting) return;

    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

// Lazy Loading Images
/*
const imgTarget = document.querySelectorAll("img[data-src]");
//console.log(imgTarget);
const loadImg = function (entries, observer) {
  const [entry] = entries;
  //console.log(entry)

  if (!entry.isIntersecting) return;

  // Replace src with data-src

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });
  observer.unobserve(entry.target)
};
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: `200px`
});

imgTarget.forEach((img) => imgObserver.observe(img));
*/
//BUILDING SLIDER COMPONENT
const slider = document.querySelector(".slider");
//slider.style.transform = "scale(0.4)";
//slider.style.overflow = "visible";

let currentSlide = 0;

const slides = document.querySelectorAll(".slide");
const maxSlide = slides.length;
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const dotsContainer = document.querySelector(".dots");

// Create new dots
const createDots = function () {
  slides.forEach(function (slide, i) {
    dotsContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}" ></button>`
    );
  });
};

createDots();

// ACTIVATE DOTS
const activateDots = function (slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dots) => dots.classList.remove("dots__dot--active"));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
};
activateDots(0);
///////////////
const goToSlide = function (toSlide) {
  slides.forEach(
    (slide, i) =>
      (slide.style.transform = `translateX(${100 * (i - toSlide)}%)`)
  );
};

goToSlide(0);

// Next slide
const nextSlide = function () {
  if (1 + currentSlide === maxSlide) {
    currentSlide = 0;
  } else currentSlide++;

  goToSlide(currentSlide);
  activateDots(currentSlide);
};

const prevSlide = function () {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else currentSlide--;

  goToSlide(currentSlide);
  activateDots(currentSlide);
};
console.log(maxSlide);
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

document.addEventListener("keydown", function (event) {
  //console.log(event);
  if (event.key === "ArrowLeft") prevSlide();
  event.key === "ArrowRight" && nextSlide();
});

dotsContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("dots__dot")) {
    //console.log("DOT");

    const { slide } = event.target.dataset;
    goToSlide(slide);
    activateDots(slide);
  }
});
// TYPES OF EVENTS AND EVENTS LISTENERS
//const h1 = document.querySelector("h1");
/*
h1.addEventListener("mouseenter", function (e) {
  alert("addEventListener: Great! You're reading the heading :D");
});

// old way of addding event listener to an element
h1.onmouseenter = function (e) {
  alert("onmouseenter: Great! You're reading the heading :D");
};
*/

//EVENT PROPAGATION IN PRACTICE

//rgb(255,255,255)
/*
const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const randomColor = () => {
  return `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(
    0,
    255
  )})`;
};
console.log(randomColor());

document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();

  // Stop Propagation
  //e.stopPropagation();
});

document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();

  // Stop Propagation
  //e.stopPropagation();
});

document.querySelector(".nav").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
});

console.log("dan");
*/

const h1 = document.querySelector("h1");

// Going downwards: child

//DOM Content Loaded
document.addEventListener("DOMContentLoaded", function (e) {
  console.log("HTML parsed and DOM tree built", e);
});
/*
window.addEventListener("beforeunload", function (event) {
  event.preventDefault();
  console.log(event);
  event.returnValue = "";
});
*/

window.addEventListener("load", function (e) {
  console.log("Page Fully Loaded", e);
});
