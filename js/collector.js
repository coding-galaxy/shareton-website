'use strict';

let table = document.getElementById('food');
//table.addEventListener('click',move());
//table.addEventListener( 'click', removeItemFromTable('food') );

let table2 = document.getElementById('clothes');
//table2.addEventListener( 'click', removeItemFromTable('clothes') );

let table3 = document.getElementById('shelter');
//table3.addEventListener( 'click', removeItemFromTable('shelter') );

// let a = [];
// let b = [];
// let c = [];
let food = [];
let clothes = [];
let shelter = [];

function load() {
  console.log(JSON.parse(localStorage.getItem('food')));
  let foodItems = JSON.parse(localStorage.getItem('food')) || [];
  for (let i = 0; i < foodItems.length; i++) {
    food.push(
      foodItems[i]
      // foodItems[i].adress,
      // foodItems[i].phone,
      // foodItems[i].type,
      // foodItems[i].qty,
      // foodItems[i].comment
    );
    console.log(food);
    // console.log(foodItems[1].name);
  }
  // a.push(food);
  // console.log(food1);
  // console.log(a);

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

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
// function render() {
//   load();
//   // clear();
//   showFood();
//   showClothes();
//   showShelter();
// }

// function clearTable() {
//   tableBody.innerHTML = '';
// }

// let tableBody = document.createElement('tbody');

// function move(element) {
//   let tableRes = document.getElementById('reserved');
//   let row = element.parentElement.parentElement;
//   console.log(row);
//   tableRes.appendChild(row);

// }
const tableFood = document.getElementById('foodTable');

function showFood() {
  // tableFood.appendChild(tableBody);
  // for(let j=0;j<a.length;j++){
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
showFood();

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
  }
}
// table3.appendChild(tableBody);

// for (let i = 0; i < shelter.length; i++) {
//   let row = document.createElement('tr');

//   const tableData1 = document.createElement('td');
//   row.appendChild(tableData1);
//   const tableIndex = document.createElement('td');
//   tableIndex.id = shelter[i].name;
//   tableData1.appendChild(tableIndex);
//   tableIndex.textContent = 'select';

//   let title = document.createElement('td');
//   title.textContent = shelter[i].name;
//   row.appendChild(title);

//   let adress = document.createElement('td');
//   adress.textContent = shelter[i].adress;
//   row.appendChild(adress);

//   let phoneNumber = document.createElement('td');
//   phoneNumber.textContent = shelter[i].phone;
//   row.appendChild(phoneNumber);

//   let Type = document.createElement('td');
//   Type.textContent = shelter[i].type;
//   row.appendChild(Type);

//   let quantity = document.createElement('td');
//   quantity.textContent = shelter[i].qty;
//   row.appendChild(quantity);

//   let comments = document.createElement('td');
//   comments.textContent = shelter[i].comment;
//   row.appendChild(comments);

//   table3.appendChild(row);

showShelter();
// table.addEventListener('click', function (event){
//   console.log(event.target);
//   food.splice(event.target.id,1);
//   localStorage.setItem('food',JSON.stringify(food));
//   console.log(food);
//   showFood();

// });

// function removeItemFromTable( event ) {

//   // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
//   // TODO: Save the cart back to local storage
//   // TODO: Re-draw the cart table

//   let deleteItem = event.target.id;
//   let newItemArr = [];
//   for ( let i = 0; i < cart.items.length; i++ ) {
//     if ( cart.items[i].product !== deleteItem ) {
//       newItemArr.push( cart.items[i] );
//     }
//   }
//   localStorage.setItem( 'cart', JSON.stringify( newItemArr ) );
//   clearCart();
//   showCart();
//   location.reload();

// }

// render();

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
