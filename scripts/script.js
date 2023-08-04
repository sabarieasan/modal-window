"use strict";

// elements
const btnShowModal = document.querySelectorAll(".btn-show-modal");
const closeModal = document.getElementById("close-modal");
const modalWindow = document.getElementById("modal");

// // event listeners
for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener("click", function () {
    modalWindow.classList.remove("hidden");
  });
}
closeModal.addEventListener("click", function () {
  modalWindow.classList.add("hidden");
});
