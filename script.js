// Requirement 1

const createHeader = document.createElement('header');
document.body.appendChild(createHeader);

const createH1 = document.createElement('h1');
createH1.innerHTML = 'Minha Lista de Tarefas';
createHeader.appendChild(createH1);

// Requirement 2

const createP = document.createElement('p');
createP.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
createP.style.fontSize = '15px';
createP.id = 'funcionamento';
createH1.appendChild(createP);

// Requirement 3

const createInput = document.createElement('input');
createInput.id = 'texto-tarefa';
document.body.appendChild(createInput);

// Requirement 4

const createOrderedList = document.createElement('ol');
createOrderedList.id = 'lista-tarefas';
document.body.appendChild(createOrderedList);

// Requirement 5 - 6

const createButton = document.createElement('button');
document.body.appendChild(createButton);
createButton.innerText = 'Adicionar';
createButton.id = 'criar-tarefa';

createButton.addEventListener('click', createList);

function createList() {
  const createLi = document.createElement('li');
  createLi.innerHTML = createInput.value;
  createOrderedList.appendChild(createLi);
  createInput.value = '';
}

// Requirement 7 - 8

createOrderedList.addEventListener('click', paint);

function paint (e) {
  const listItem = createOrderedList.childNodes;
  for (let index = 0; index < listItem.length; index += 1) {
      listItem[index].style.backgroundColor = '';
  }
  e.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

// Requirement 9

createOrderedList.addEventListener('dblclick', riskItem);

function riskItem (e){
  if (e.target.classList.contains('completed')) {
        e.target.classList.remove('completed');
    } else e.target.classList.add('completed');
}

// Informações sobre classList retiradas no link: https://www.w3schools.com/jsref/prop_element_classlist.asp

// Requirement 10

const createButton2 = document.createElement('button');
document.body.appendChild(createButton2);
createButton2.innerText = 'Apagar tudo';
createButton2.id = 'apaga-tudo';


createButton2.addEventListener('click', erase);

function erase () {
let listItem2 = document.querySelectorAll('li');
for (let index = 0; index < listItem2.length; index += 1) {
  createOrderedList.removeChild(listItem2[index]);

} 
}
// Função realizada com a ajuda de thread do Slack, link: https://trybecourse.slack.com/archives/C01L16B9XC7/p1615823212003700

// Requirement 11

const createButton3 = document.createElement('button');
document.body.appendChild(createButton3);
createButton3.innerText = 'Remover finalizadas';
createButton3.id = 'remover-finalizados';


createButton3.addEventListener('click', remove);

function remove () {
const listItem3 = document.querySelectorAll('.completed');
for (let index = 0; index < listItem3.length; index += 1) {
  listItem3[index].parentElement.removeChild(listItem3[index]);

} 
}
// Dica do parentElement tirada da thread do Slack, link: https://trybecourse.slack.com/archives/C01L16B9XC7/p1616003000083500