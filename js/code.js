var tables = new Array();
var numbersID = 0;



function createTable(l, c, p) {

  var table = document.createElement('table');
  var thead = document.createElement('thead');
  var tbody = document.createElement('tbody');
  table.appendChild(tbody);

    for (let i = 0; i < (l); i++){
    let tr = document.createElement('tr');
    for (let j = 0; j < c; j++){
      let inp = document.createElement('input');
      let num = i + j;
      inp.id = 'inputEl' + numbersID;
      let str = 'inputEl' + numbersID;
      if((window.localStorage.getItem(str) !== undefined) && (window.localStorage.getItem(str) !== null)){
        inp.value = window.localStorage.getItem(str);
      }
      inp.oninput = function(){
        console.log(inp.id, 'value = ',inp.value);
        window.localStorage.setItem(inp.id, inp.value);
      }
      numbersID += 1;
      window.localStorage.setItem('numberID', numbersID);
      tr.appendChild(inp);
    }
    tbody.appendChild(tr);
  }

  p.appendChild(table);

  for(let i = 0; i < numbersID; i++) {

  }
}


function getValue(){
  let lines = document.querySelector('.lines');
  let columns = document.querySelector('.columns');
  let p = document.querySelector('.paragraphes');

  if (lines.value < 1) {
    alert('Min lines is 1!')
    lines.value = 1;
  }
  if (columns.value < 1) {
    alert('Min Column is 1!')
    columns.value = 1;
  }
  if (columns.value > 4) {
    alert('Max Column is 4!');
    columns.value = 4;
  }

  let lp = [lines.value, columns.value];
  tables.push(lp);

  window.localStorage.setItem('wasCreated', 1);
  window.localStorage.setItem('createdTables', JSON.stringify(tables));

  createTable(lines.value, columns.value, p);
  /*document.querySelectorAll('input').forEach(function(e) {
        console.log('input = ', e.value, 'name = ', e.name);
    });*/
}

function deleteTable() {
  var el = document.querySelectorAll('table');
  el.forEach((item, i) => {
    item.remove();
  });

  window.localStorage.clear();
  tables = [];
  numbersID = 0;
}


function loadTable() {
  let p = document.querySelector('.paragraphes');
  tables = JSON.parse(window.localStorage.getItem('createdTables'));
  numbersID = Number(window.localStorage.getItem('numberID'));

  console.log('var = ', numbersID, 'type = ', typeof numbersID);
  let saveNumber = numbersID;
  numbersID = 0;

  for(let i = 0; i < tables.length; i++){
    let a = tables[i];
    createTable(Number(a[0]), Number(a[1]), p);
  }

  numbersID = saveNumber;
}


window.onload = function() {
  if(window.localStorage.getItem('wasCreated') !== null){
    loadTable();
  }

  let form = document.getElementById('createT');
  form.addEventListener('submit', function(){
    getValue();
  });

  //document.querySelector('.buttonCreate').addEventListener('click', getValue);
  document.querySelector('.buttonDelete').addEventListener('click', deleteTable);

}
