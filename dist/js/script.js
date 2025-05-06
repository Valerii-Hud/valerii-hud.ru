// Burger menu
const hamburgerMenu = document.querySelector('.hamburger');
const closeMenu = document.querySelector('.menu__close');
const menuBlock = document.querySelector('.menu');

hamburgerMenu.addEventListener('click', () => {
  menuBlock.classList.add('active');
});

closeMenu.addEventListener('click', () => {
  menuBlock.classList.remove('active');
});

// Sidepanel theme changer
window.addEventListener('scroll', () => {
  const sidepanel = document.querySelector('.sidepanel');
  if (!sidepanel) return;

  if (window.scrollY >= window.innerHeight) {
    sidepanel.classList.remove('sidepanel--white');
    sidepanel.classList.add('sidepanel--black');
  } else {
    sidepanel.classList.remove('sidepanel--black');
    sidepanel.classList.add('sidepanel--white');
  }
});

// Skills percent
const percents = document.querySelectorAll('.skills__proc');
const lines = document.querySelectorAll('.skills__stat-active');

percents.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});
