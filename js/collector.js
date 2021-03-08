'use strict';

let table= document.getElementById('food');
//table.addEventListener('click',move());
//table.addEventListener( 'click', removeItemFromTable('food') );

let table2= document.getElementById('clothes');
//table2.addEventListener( 'click', removeItemFromTable('clothes') );

let table3= document.getElementById('shelter');
//table3.addEventListener( 'click', removeItemFromTable('shelter') );

let a=[];
let b=[];
let c=[];
let food1=[];
let clothes1=[];
let shelter1=[];

function load() {

  let foodItems = JSON.parse( localStorage.getItem( 'food' ) ) || [];
  for(let i=0;i<foodItems.length;i++){
    food1.push(foodItems[i].name,foodItems[i].adress,foodItems[i].phone,foodItems[i].type,foodItems[i].qty,foodItems[i].comment);
  // console.log(foodItems[1].name);
  }
  a.push(food1);
  // console.log(food1);
  // console.log(a);

  let clothesItems = JSON.parse( localStorage.getItem( 'clothes' ) ) || [];
  for(let i=0;i<clothesItems.length;i++){
    clothes1.push(clothesItems[i].name,clothesItems[i].adress,clothesItems[i].phone,clothesItems[i].gender,clothesItems[i].season,clothesItems[i].qty,clothesItems[i].comment);
    b.push(clothes1);
  }


  let shelterItems = JSON.parse( localStorage.getItem( 'shelter' ) ) || [];
  for(let i=0;i<shelterItems.length;i++){
    shelter1.push(shelterItems[i].name,shelterItems[i].adress,shelterItems[i].phone,shelterItems[i].type,shelterItems[i].qty,shelterItems[i].comment);
    c.push(shelter1);
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



let tableBody = document.createElement( 'tbody' );

// function move(element) {
//   let tableRes = document.getElementById('reserved');
//   let row = element.parentElement.parentElement;
//   console.log(row);
//   tableRes.appendChild(row);

// }

function showFood(){
  table.appendChild(tableBody);
  // for(let j=0;j<a.length;j++){
  for (let i = 0; i < food1.length; i++) {
    let row = document.createElement('tr');
    tableBody.appendChild(row);

    let btn = document.createElement('td');
    btn.innerHTML ='<button id="'+i+'" data-index="'+i+'" onclick="move(this)">move row</button>';
    row.appendChild(btn);

    // const tableData1 = document.createElement( 'td' );
    // row.appendChild( tableData1 );
    // const tableIndex = document.createElement( 'td' );
    // tableIndex.id = a[i].name;
    // tableData1.appendChild( tableIndex );
    // tableIndex.textContent = 'select';


    let title = document.createElement('td');
    title.textContent =food1[i];
    row.appendChild(title);

    let adress = document.createElement('td');
    adress.textContent = food1[i];
    row.appendChild(adress);

    let phoneNumber = document.createElement('td');
    phoneNumber.textContent = a[i].phone;
    row.appendChild(phoneNumber);

    let foodType = document.createElement('td');
    foodType.textContent = a[i].type;
    row.appendChild(foodType);

    let quantity = document.createElement('td');
    quantity.textContent = a[i].qty;
    row.appendChild(quantity);

    let comments = document.createElement('td');
    comments.textContent = a[i].comment;
    row.appendChild(comments);



    table.appendChild(row);

  }
  // }
}
showFood();

function showClothes(){
  table2.appendChild(tableBody);

  for (let i = 0; i < clothes.length; i++) {
    let row = document.createElement('tr');

    const tableData1 = document.createElement( 'td' );
    row.appendChild( tableData1 );
    const tableIndex = document.createElement( 'td' );
    tableIndex.id = clothes[i].name;
    tableData1.appendChild( tableIndex );
    tableIndex.textContent = 'select';

    let title = document.createElement('td');
    title.textContent = clothes[i].name;
    row.appendChild(title);

    let adress = document.createElement('td');
    adress.textContent = clothes[i].adress;
    row.appendChild(adress);

    let phoneNumber = document.createElement('td');
    phoneNumber.textContent = clothes[i].phone;
    row.appendChild(phoneNumber);

    let gender = document.createElement('td');
    gender.textContent = clothes[i].gender;
    row.appendChild(gender);


    let season = document.createElement('td');
    season.textContent = clothes[i].season;
    row.appendChild(season);

    let quantity = document.createElement('td');
    quantity.textContent = clothes[i].qty;
    row.appendChild(quantity);

    let comments = document.createElement('td');
    comments.textContent = clothes[i].comment;
    row.appendChild(comments);


    table2.appendChild(row);

  }
}


function showShelter(){
  table3.appendChild(tableBody);

  for (let i = 0; i < shelter.length ; i++) {
    let row = document.createElement('tr');

    const tableData1 = document.createElement( 'td' );
    row.appendChild( tableData1 );
    const tableIndex = document.createElement( 'td' );
    tableIndex.id = shelter[i].name;
    tableData1.appendChild( tableIndex );
    tableIndex.textContent = 'select';

    let title = document.createElement('td');
    title.textContent = shelter[i].name;
    row.appendChild(title);

    let adress = document.createElement('td');
    adress.textContent = shelter[i].adress;
    row.appendChild(adress);

    let phoneNumber = document.createElement('td');
    phoneNumber.textContent = shelter[i].phone;
    row.appendChild(phoneNumber);

    let Type = document.createElement('td');
    Type.textContent = shelter[i].type;
    row.appendChild(Type);

    let quantity = document.createElement('td');
    quantity.textContent = shelter[i].qty;
    row.appendChild(quantity);

    let comments = document.createElement('td');
    comments.textContent = shelter[i].comment;
    row.appendChild(comments);


    table3.appendChild(row);

  }
}

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


function openTab (evt, tabName) {
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

// table.addEventListener('click',openTab());
