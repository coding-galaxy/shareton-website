'use strict';

/* TODO:

1. initialise 3 constrcoutrs for each from
2. get the data from the forms to the constructer attributes and then to an aary
3. from the array the data should go to the local storage

*/
// getting from elements
let foodForm = document.getElementById('foodDonation');
let foodAll = [];
console.log('i exsist');
let clothesForm = document.getElementById('clothesDonation');
let clothesAll = [];

let shelterForm = document.getElementById('shelterDonation');
let shelterAll = [];

const Food = function (name, adress, phone, type, qty, comment) {
  // this is constrocuter for the food form
  this.name = name;
  this.adress = adress;
  this.phone = phone;
  this.type = type;
  this.qty = qty;
  this.comment = comment;
  this.foodAll = foodAll.push(this);
  localStorage.setItem('food', JSON.stringify(foodAll));
};
if (JSON.parse(localStorage.getItem('food'))) {
  foodAll = JSON.parse(localStorage.getItem('food'));
}

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

const Clothes = function (name, adress, phone, gender, season, qty, comment) {
  // this is constrocuter for the food form
  this.name = name;
  this.adress = adress;
  this.phone = phone;
  this.gender = gender;
  this.season = season;
  this.qty = qty;
  this.comment = comment;
  this.clothesAll = clothesAll.push(this);
  localStorage.setItem('clothes', JSON.stringify(clothesAll));
};

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

if (JSON.parse(localStorage.getItem('clothes'))) {
  clothesAll = JSON.parse(localStorage.getItem('clothes'));
}

const Shelter = function (name, adress, phone, type, qty, comment) {
  // this is constrocuter for the food form
  this.name = name;
  this.adress = adress;
  this.phone = phone;
  this.type = type;
  this.qty = qty;
  this.comment = comment;
  this.shelterAll = shelterAll.push(this);
  localStorage.setItem('shelter', JSON.stringify(shelterAll));
};

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

if (JSON.parse(localStorage.getItem('shelter'))) {
  shelterAll = JSON.parse(localStorage.getItem('shelter'));
}
