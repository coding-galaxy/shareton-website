function shelterReserve() {
  // tableFood.appendChild(tableBody);
  // for(let j=0;j<a.length;j++){
  if (localStorage.shelterReserved) {
    shelterReserved = JSON.parse(localStorage.getItem('shelterReserved'));

    shelter_reserve.textContent = '';
    for (let i = 0; i < shelterReserved.length; i++) {
      let tableRow = document.createElement('tr');
      shelter_reserve.appendChild(tableRow);
      let tableD = document.createElement('td');

      // console.log(food);
      tableRow.appendChild(tableD);
      tableD.textContent = shelterReserved[i].name;

      let tableD2 = document.createElement('td');
      tableRow.appendChild(tableD2);
      tableD2.textContent = shelterReserved[i].adress;

      let tableD3 = document.createElement('td');
      tableRow.appendChild(tableD3);
      tableD3.textContent = shelterReserved[i].phone;

      let tableD4 = document.createElement('td');
      tableRow.appendChild(tableD4);
      tableD4.textContent = shelterReserved[i].type;

      let tableD5 = document.createElement('td');
      tableRow.appendChild(tableD5);
      tableD5.textContent = shelterReserved[i].qty;

      let tableD6 = document.createElement('td');
      tableRow.appendChild(tableD6);
      tableD6.textContent = shelterReserved[i].comment;
    }
  }
}

function transfershelter(event) {
    shelterReserved.push(shelter[event.target.id]);

  console.log('ffff', shelterReserved);

  shelter.splice(event.target.id, 1);
  shelterItems.splice(event.target.id, 1);
  localStorage.setItem('shelter', JSON.stringify(shelter));
  localStorage.setItem('shelterReserved', JSON.stringify(shelterReserved));
  showShelter();
  shelterReserve();
}



tableShelter.addEventListener('click', transfershelter);
