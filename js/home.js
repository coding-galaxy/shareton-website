'use strict';
console.log(window.pageYOffset);
// const scrollButton = document.getElementById('scroll');
const ourSection = document.querySelector('.grid-container');
const doSection = document.querySelector('.do__description');
const goalsSection = document.querySelector('.golas__section');
const navItem = document.querySelector('nav');
const footerTop = document.querySelector('.parent');

const contact = document.querySelector('.contact');

const section1 = document.querySelector('.q');
const section2 = document.querySelector('.grid-container');

const donate = document.querySelector('.donate');
const section3 = document.querySelector('.arrow__conatainer3');
const faLogo = document.getElementById('logo-fa');
const logoSpan = document.querySelector('.logospan');
const h1Logo = document.querySelector('.h1logo');

const hover1 = document.querySelector('.hover1');
const hover2 = document.querySelector('.hover2');
// const hover3 = document.querySelector('.hover3');

// section1.addEventListener('click', function (event) {
//   if (event.target.matches('.arrow')) {
//     ourSection.scrollIntoView({
//       behavior: 'smooth',
//       block: 'start',
//       inline: 'start',
//     });
//   }
// });
// section2.addEventListener('click', function (event) {
//   if (event.target.matches('.arrow')) {
//     doSection.scrollIntoView({
//       behavior: 'smooth',
//       block: 'start',
//       inline: 'start',
//     });
//   }
// });
// section3.addEventListener('click', function (event) {
//   if (event.target.matches('.arrow')) {
//     goalsSection.scrollIntoView({
//       behavior: 'smooth',
//       block: 'start',
//       inline: 'start',
//     });
//   }
// });

contact.addEventListener('click', function (event) {
  console.log(event.target);

  footerTop.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'start',
  });
});

let startYOffset = window.pageYOffset;

window.onscroll = function () {
  let currentYOffset = window.pageYOffset;

  if (startYOffset > currentYOffset) {
    document.getElementById('navbar').style.top = 0;
    navItem.classList.add('scrolled');
    donate.classList.add('scrolled-donate');
    faLogo.classList.add('logo-scrolled');
    logoSpan.classList.add('heading-scrolled');
    h1Logo.classList.add('h1-scrolled');

    hover1.classList.add('hover-scrolled');
    hover2.classList.add('hover-scrolled');
    // hover3.classList.add('hover-scrolled');
  } else {
    document.getElementById('navbar').style.top = '-70px';
    navItem.classList.remove('scrolled');
    donate.classList.remove('scrolled-donate');
    logoSpan.classList.remove('heading-scrolled');
    faLogo.classList.remove('logo-scrolled');
    h1Logo.classList.remove('h1-scrolled');

    hover1.classList.remove('hover-scrolled');
    hover2.classList.remove('hover-scrolled');
    // hover3.classList.remove('hover-scrolled');
  }
  startYOffset = currentYOffset;

  if (currentYOffset === 0) {
    navItem.classList.remove('scrolled');
    donate.classList.remove('scrolled-donate');
    faLogo.classList.remove('logo-scrolled');
    logoSpan.classList.remove('heading-scrolled');
    h1Logo.classList.remove('h1-scrolled');
    hover1.classList.remove('hover-scrolled');
    hover2.classList.remove('hover-scrolled');
    // hover3.classList.remove('hover-scrolled');
    // navItem.classList.add('initial');
  }
};
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName('client-container');
  let dots = document.getElementsByClassName('dot');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'flex';
  dots[slideIndex - 1].className += ' active';
  setTimeout(showSlides, 3500); // Change image every 2 seconds
}
let textIndex = 0;
textSlides();
function textSlides() {
  let texts = document.getElementsByClassName('glass');

  for (let index = 0; index < texts.length; index++) {
    texts[index].style.display = 'none';
  }
  textIndex++;
  if (textIndex > texts.length) {
    textIndex = 1;
  }

  texts[textIndex - 1].style.display = 'flex';

  setTimeout(textSlides, 3500);
}
