const hamburgerMenu = document.querySelector('.hamburger');
const closeMenu = document.querySelector('.menu__close');
const menuBlock = document.querySelector('.menu');

hamburgerMenu.addEventListener('click', () => {
  menuBlock.classList.add('active');
});

closeMenu.addEventListener('click', () => {
  menuBlock.classList.remove('active');
});
