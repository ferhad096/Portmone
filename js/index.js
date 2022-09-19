const hamburger = document.querySelector(".bar");
const mobileNav = document.querySelector(".mobile-nav");
const mobileOverlay = document.querySelector(".header-overlay");
const closeMenu = document.querySelector(".close-menu");


hamburger.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});

mobileOverlay.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});

closeMenu.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});


const searchBut = document.querySelector('.search');
const searchForm = document.querySelector('.search-form');
const nav = document.querySelector('nav');
const logo = document.querySelector('.logo');

searchBut.addEventListener("click", function() {
  searchBut.classList.toggle('active');
  searchForm.classList.toggle('block');
  nav.classList.toggle('none');
  logo.classList.toggle('none');
})