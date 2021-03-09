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

const slides = document.getElementsByClassName('.client-container');

section1.addEventListener('click', function (event) {
  if (event.target.matches('.arrow')) {
    ourSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }
});
section2.addEventListener('click', function (event) {
  if (event.target.matches('.arrow')) {
    doSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }
});
section3.addEventListener('click', function (event) {
  if (event.target.matches('.arrow')) {
    goalsSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }
});

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
  } else {
    document.getElementById('navbar').style.top = '-70px';
    navItem.classList.remove('scrolled');
    donate.classList.remove('scrolled-donate');
  }
  startYOffset = currentYOffset;

  if (currentYOffset === 0) {
    navItem.classList.remove('scrolled');
    donate.classList.remove('scrolled-donate');
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
  let dots = document.getElementsByClassName('dot1');
  for (let index = 0; index < texts.length; index++) {
    texts[index].style.display = 'none';
  }
  textIndex++;
  if (textIndex > texts.length) {
    textIndex = 1;
  }
  for (let index = 0; index < dots.length; index++) {
    dots[index].className = dots[index].className.replace(' active1', '');
  }
  texts[textIndex - 1].style.display = 'flex';
  dots[textIndex - 1].className += ' active1';
  setTimeout(textSlides, 3500);
}

let section1ScrollIn = ourSection.getBoundingClientRect();

window.onscroll = function () {
  console.log(window.pageYOffset);
  // console.log('hi');
  let x = window.pageYOffset;
  if (x === section1ScrollIn) console.log('hello');
};
