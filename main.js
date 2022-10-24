/* -----------------Navigation--------------------- */

const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");


menuBtn.onclick = () => {
  menu.classList.add("active");
  menuBtn.classList.add("hide");
};

cancelBtn.onclick = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
};


/* ----sticky---- */

const navbar = document.querySelector(".nav-bar");

window.onscroll = () => {
  this.scrollY > 20
    ? navbar.classList.add("sticky")
    : navbar.classList.remove("sticky");
};

const body = document.querySelector("body");

menuBtn.onclick = () => {
  menu.classList.add("active");
  menuBtn.classList.add("hide");
  body.classList.add("disabledScroll");
};

cancelBtn.onclick = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
  body.classList.remove("disabledScroll");
};