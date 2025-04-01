"use strict";

///////////////////////////////////////
// Modal window

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

const message = document.createElement("div");

message.innerHTML =
  "We use cookies for improved functionality and analysis. <button class='btn btn--close-cookie'>Got it!</button>";
message.classList.add("cookie-message");

header.append(message);

message.style.width = "105%";
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";
message.style.padding = "0 9rem";
message.style.backgroundColor = "#444";

const btnCloseCookie = document.querySelector(".btn--close-cookie");

btnCloseCookie.addEventListener("click", function () {
  message.parentElement.removeChild(message);
});

const btnScrollTo = document.querySelector(".btn--scroll-to");

const scetion1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function (e) {
  const s1cords = scetion1.getBoundingClientRect();
  console.log(s1cords);
});
