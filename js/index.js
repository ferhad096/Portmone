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