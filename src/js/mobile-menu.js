const headerBurger = document.querySelector('.header-burger');
const headerMenu = document.querySelector('.header-menu');
const body = document.querySelector('body');

headerBurger.addEventListener('click', () => {
  headerBurger.classList.toggle('active');
  headerMenu.classList.toggle('active');
  body.classList.toggle('lock');
});
