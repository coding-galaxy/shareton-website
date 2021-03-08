'use strict';

let foodForm = document.getElementById('foodDonation');
let clothesForm = document.getElementById('clothesDonation');
let shelterForm = document.getElementById('shelterDonation');

foodForm.addEventListener('submit', function (event) {
  event.preventDefault();
  //   console.log(event);
  let userName = event.target.name.value;
  let adress = event.target.address.value;
  let phone = event.target.phoneNumber.value;
  let type = event.target.type.value;
  let qty = event.target.qty.value;
  let comment = event.target.comments.value;

  new Food(userName, adress, phone, type, qty, comment);
  //   Food.prototype.saveTolocalStorage();

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
  //   Food.prototype.saveTolocalStorage();

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
  //   Food.prototype.saveTolocalStorage();

  shelterForm.reset();
});
