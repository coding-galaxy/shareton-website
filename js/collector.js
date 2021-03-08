'use strict';

let table = document.getElementById('food');

let food = [];
let clothes = [];
let shelter = [];
let foodItems = [];
let foodReserved = [];
function load() {
  console.log(JSON.parse(localStorage.getItem('food')));
  foodItems = JSON.parse(localStorage.getItem('food')) || [];
  for (let i = 0; i < foodItems.length; i++) {
    food.push(foodItems[i]);
    console.log(food);
  }

  let clothesItems = JSON.parse(localStorage.getItem('clothes')) || [];
  for (let i = 0; i < clothesItems.length; i++) {
    clothes.push(clothesItems[i]);
    console.log(clothesItems);
    // b.push(clothes1);
  }

  let shelterItems = JSON.parse(localStorage.getItem('shelter')) || [];
  for (let i = 0; i < shelterItems.length; i++) {
    shelter.push(shelterItems[i]);
    // c.push(shelter1);
  }
}
load();

const tableFood = document.getElementById('foodTable');

function showFood() {
  // tableFood.appendChild(tableBody);
  // for(let j=0;j<a.length;j++){

  tableFood.textContent = '';
  for (let i = 0; i < food.length; i++) {
    let tableRow = document.createElement('tr');
    tableFood.appendChild(tableRow);
    let tableD = document.createElement('td');

    // console.log(food);
    tableRow.appendChild(tableD);
    tableD.textContent = food[i].name;

    let tableD2 = document.createElement('td');
    tableRow.appendChild(tableD2);
    tableD2.textContent = food[i].adress;

    let tableD3 = document.createElement('td');
    tableRow.appendChild(tableD3);
    tableD3.textContent = food[i].phone;

    let tableD4 = document.createElement('td');
    tableRow.appendChild(tableD4);
    tableD4.textContent = food[i].type;

    let tableD5 = document.createElement('td');
    tableRow.appendChild(tableD5);
    tableD5.textContent = food[i].qty;

    let tableD6 = document.createElement('td');
    tableRow.appendChild(tableD6);
    tableD6.textContent = food[i].comment;

    let tableD7 = document.createElement('td');
    tableRow.appendChild(tableD7);

    tableD7.innerHTML = `<a class="delete" id="${i}">+</a>`;

    // let btn = document.createElement('td');
    // btn.innerHTML =
    //   '<button id="' +
    //   i +
    //   '" data-index="' +
    //   i +
    //   '" onclick="move(this)">move row</button>';
    // row.appendChild(btn);
  }
}

const food_reserve = document.getElementById('foodReserve');

function foodReserve() {
  // tableFood.appendChild(tableBody);
  // for(let j=0;j<a.length;j++){
  if (localStorage.foodReserved) {
    foodReserved = JSON.parse(localStorage.getItem('foodReserved'));

    food_reserve.textContent = '';
    for (let i = 0; i < foodReserved.length; i++) {
      let tableRow = document.createElement('tr');
      food_reserve.appendChild(tableRow);
      let tableD = document.createElement('td');

      // console.log(food);
      tableRow.appendChild(tableD);
      tableD.textContent = foodReserved[i].name;

      let tableD2 = document.createElement('td');
      tableRow.appendChild(tableD2);
      tableD2.textContent = foodReserved[i].adress;

      let tableD3 = document.createElement('td');
      tableRow.appendChild(tableD3);
      tableD3.textContent = foodReserved[i].phone;

      let tableD4 = document.createElement('td');
      tableRow.appendChild(tableD4);
      tableD4.textContent = foodReserved[i].type;

      let tableD5 = document.createElement('td');
      tableRow.appendChild(tableD5);
      tableD5.textContent = foodReserved[i].qty;

      let tableD6 = document.createElement('td');
      tableRow.appendChild(tableD6);
      tableD6.textContent = foodReserved[i].comment;
    }
  }
}

showFood();
foodReserve();
const tableClothes = document.getElementById('clothesTable');

function showClothes() {
  // table2.appendChild(tableBody);
  console.log(clothes);

  for (let i = 0; i < clothes.length; i++) {
    let tableRow = document.createElement('tr');
    tableClothes.appendChild(tableRow);
    let tableD = document.createElement('td');

    // console.log(food);
    tableRow.appendChild(tableD);
    tableD.textContent = clothes[i].name;

    let tableD2 = document.createElement('td');
    tableRow.appendChild(tableD2);
    tableD2.textContent = clothes[i].adress;

    let tableD3 = document.createElement('td');
    tableRow.appendChild(tableD3);
    tableD3.textContent = clothes[i].phone;

    let tableD4 = document.createElement('td');
    tableRow.appendChild(tableD4);
    tableD4.textContent = clothes[i].gender;

    let tableD5 = document.createElement('td');
    tableRow.appendChild(tableD5);
    tableD5.textContent = clothes[i].season;

    let tableD6 = document.createElement('td');
    tableRow.appendChild(tableD6);
    tableD6.textContent = clothes[i].qty;

    let tableD7 = document.createElement('td');
    tableRow.appendChild(tableD7);
    tableD7.textContent = clothes[i].comment;

    let tableD8 = document.createElement('td');
    tableRow.appendChild(tableD8);
    tableD8.innerHTML = `<a class="delete" id="${i}">+</a>`;
  }
}
showClothes();

const tableShelter = document.getElementById('shelterTable');
function showShelter() {
  console.log(shelter);
  for (let i = 0; i < shelter.length; i++) {
    let tableRow = document.createElement('tr');
    tableShelter.appendChild(tableRow);
    let tableD = document.createElement('td');

    // console.log(food);
    tableRow.appendChild(tableD);
    tableD.textContent = shelter[i].name;

    let tableD2 = document.createElement('td');
    tableRow.appendChild(tableD2);
    tableD2.textContent = shelter[i].adress;

    let tableD3 = document.createElement('td');
    tableRow.appendChild(tableD3);
    tableD3.textContent = shelter[i].phone;

    let tableD4 = document.createElement('td');
    tableRow.appendChild(tableD4);
    tableD4.textContent = shelter[i].type;

    let tableD5 = document.createElement('td');
    tableRow.appendChild(tableD5);
    tableD5.textContent = shelter[i].qty;

    let tableD7 = document.createElement('td');
    tableRow.appendChild(tableD7);
    tableD7.textContent = shelter[i].comment;

    let tableD8 = document.createElement('td');
    tableRow.appendChild(tableD8);
    tableD8.innerHTML = `<a class="delete" id="${i}">+</a>`;
  }
}

showShelter();

function transferItem(event) {
  foodReserved.push(food[event.target.id]);

  console.log('ffff', foodReserved);

  food.splice(event.target.id, 1);
  foodItems.splice(event.target.id, 1);
  localStorage.setItem('food', JSON.stringify(food));
  localStorage.setItem('foodReserved', JSON.stringify(foodReserved));
  showFood();
  foodReserve();
  // if (event.target.matches('.delete')) {
  //   foodReserved = food.map(function (data) {
  //     if (event.target.id === 0) return data;
  //     else return '';
  //   });
  // }
}

tableFood.addEventListener('click', transferItem);

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

table.addEventListener('click', openTab());
