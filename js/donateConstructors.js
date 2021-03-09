'use strict';

let foodAll = [];
console.log('i exsist');
let clothesAll = [];

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

if (JSON.parse(localStorage.getItem('shelter'))) {
  shelterAll = JSON.parse(localStorage.getItem('shelter'));
}
