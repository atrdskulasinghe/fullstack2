// document.addEventListener('DOMContentLoaded', () => {
let menuIcon = document.querySelector(".menu-icon");
let menu = document.querySelector(".menu");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    menu.classList.toggle("active");
});

let menuClose = document.querySelector(".menu-close");

menuClose.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    menu.classList.toggle("active");
});
console.log("hell")
// });
