'use strict';
console.log(window.pageYOffset);
// const scrollButton = document.getElementById('scroll');
const ourSection = document.querySelector('.grid-container');
const navItem = document.querySelector('nav');

const section1 = document.querySelector('.q');

section1.addEventListener('click', function (event) {
  if (event.target.matches('.arrow')) {
    ourSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }
});

let startYOffset = window.pageYOffset;

window.onscroll = function () {
  let currentYOffset = window.pageYOffset;

  if (startYOffset > currentYOffset) {
    document.getElementById('navbar').style.top = 0;
    navItem.classList.add('scrolled');
  } else {
    document.getElementById('navbar').style.top = '-70px';
    navItem.classList.remove('scrolled');
  }
  startYOffset = currentYOffset;

  if (currentYOffset === 0) {
    navItem.classList.remove('scrolled');
  }
};

// function blurImage() {
//   let image1 = document.getElementById('img1');
//   let image2 = document.getElementById('img2');
//   let image3 = document.getElementById('img3');
//   let image4 = document.getElementById('img4');
// }

const goalsSection = document.querySelector('.items__hero__container');

goalsSection.addEventListener('mouseover', function (event) {
  console.log(event.target);
  let arr = [];
  const image1 = document.getElementById('img1');
  const image2 = document.getElementById('img2');
  const image3 = document.getElementById('img3');
  const image4 = document.getElementById('img4');
  arr = [image1, image2, image3, image4];
  let itemHovered = event.target;

  for (let index = 0; index < arr.length; index++) {
    if (index !== itemHovered) {
      arr[index].style =
        'filter: brightness(0.5) saturate(0) contrast(1.2) blur(20px);';
    }
  }
});
