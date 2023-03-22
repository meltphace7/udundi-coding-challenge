"use strict";

const modal = document.querySelector('.modal');
const openModalBtn = document.querySelector(".open-modal-btn");
const closeModalBtn = document.querySelector('.close-modal-btn');
const headerTitle = document.querySelector('.header-title')

openModalBtn.addEventListener("click", () => {
    modal.classList.toggle("hidden");
    headerTitle.classList.add("title-hidden");
});

closeModalBtn.addEventListener("click", () => {
    modal.classList.toggle("hidden");
     headerTitle.classList.remove("title-hidden");
});