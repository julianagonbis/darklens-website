const openButton = document.getElementById('openButton');
const closeButton = document.getElementById('closeButton');
const menu = document.getElementById('menu');
const logoName = document.getElementById('logoName');

const openMenu = () => {
  menu.classList.add('active');
  setTimeout(() => {
    logoName.classList.add('active');
  }, 300);
};

const closeMenu = () => {
  menu.classList.remove('active');
  logoName.classList.remove('active');
};

openButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);
