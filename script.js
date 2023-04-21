const dropdown = document.querySelector('.dropdown');
const toggle = dropdown.querySelector('.toggle');
const menu = dropdown.querySelector('.menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('open');
});