'use strict';

let foodForm = document.getElementById('foodDonation');
let clothesForm = document.getElementById('clothesDonation');
let shelterForm = document.getElementById('shelterDonation');

foodForm.addEventListener('submit', function (event) {
  event.preventDefault();

  let userName = event.target.name.value;
  let adress = event.target.address.value;
  let phone = event.target.phoneNumber.value;
  let type = event.target.type.value;
  let qty = event.target.qty.value;
  let comment = event.target.comments.value;

  new Food(userName, adress, phone, type, qty, comment);

  foodForm.reset();
});
clothesForm.addEventListener('submit', function (event) {
  event.preventDefault();

  let userName = event.target.name.value;
  let adress = event.target.address.value;
  let phone = event.target.phoneNumber.value;
  let gender = event.target.gender.value;
  let season = event.target.season.value;
  let qty = event.target.qty.value;
  let comment = event.target.comments.value;

  new Clothes(userName, adress, phone, gender, season, qty, comment);

  clothesForm.reset();
});
shelterForm.addEventListener('submit', function (event) {
  event.preventDefault();

  let userName = event.target.name.value;
  let adress = event.target.address.value;
  let phone = event.target.phoneNumber.value;
  let type = event.target.shelter.value;

  let qty = event.target.qty.value;
  let comment = event.target.comments.value;

  new Shelter(userName, adress, phone, type, qty, comment);

  shelterForm.reset();
});

function openTab(evt, tabName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }
  document.getElementById(tabName).style.display = 'block';
  evt.currentTarget.className += ' active';
}
