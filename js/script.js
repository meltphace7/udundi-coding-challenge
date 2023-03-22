"use strict";

console.log('hello');


const modal = document.querySelector('.modal');
const openModalBtn = document.querySelector(".open-modal-btn");
const closeModalBtn = document.querySelector('.close-modal-btn');
const headerTextContainer = document.querySelector('.header-text-container')

openModalBtn.addEventListener("click", () => {
    modal.classList.toggle("hidden");
    headerTextContainer.classList.toggle("hidden");
});

closeModalBtn.addEventListener("click", () => {
    modal.classList.toggle("hidden");
     headerTextContainer.classList.toggle("hidden");
});