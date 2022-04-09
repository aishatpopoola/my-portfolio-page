const navMenu = document.querySelector('#nav_menu');
const navToggle = document.querySelector('#nav_toggle');
const navClose = document.querySelector('#nav_close');

// MENU SHOW =====//
// Validate if constant exists //

const navToggler = () => {
  navMenu.classList.add('show-menu');
};
if (navToggle) {
  navToggle.addEventListener('click', navToggler);
}

//  menu hidden  //
const navCompact = () => {
  navMenu.classList.remove('show-menu');
  console.log(navMenu);

};
if (navClose) {
  navClose.addEventListener('click', navCompact);
}

// REMOVE MENU MOBILE //
const navLinks = document.querySelectorAll('.nav_link');
const linkAction = () => {
  // when we click on each nav link we remove the show menu class
  navMenu.classList.remove('show-menu');
};
navLinks.forEach(link => link.addEventListener('click', linkAction));