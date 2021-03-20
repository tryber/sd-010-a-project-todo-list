// Requisito 5 e 6 - Clicando no Botão e adicionando uma nova lista ordenada
function newList() {
  const getTextoTarefa = document.querySelector('#texto-tarefa');
  const getCriarTarefa = document.querySelector('#criar-tarefa');
  const getListaTarefa = document.querySelector('#lista-tarefas');

  getCriarTarefa.addEventListener('click', () => {
    if (getTextoTarefa.value.length > 0) {
      const novaLista = document.createElement('li');
      novaLista.innerText = getTextoTarefa.value;
      novaLista.className = 'item';
      getListaTarefa.appendChild(novaLista);
      getTextoTarefa.value = '';
    }
  });
}

// Requisito 7
// Exercício feito com a ajuda do código Lucas Andrade
// Link: https://github.com/tryber/sd-010-a-project-todo-list/blob/cdc6f5084c225c6852fcfe3e5acd1ac6269c540f/script.js
function changingBackgroundGreen(event) {
  const eventTarget = event.target;
  eventTarget.style.backgroundColor = 'rgb(128, 128, 128)';
  eventTarget.classList.add('selected');
}

function eventchangeBackgroundGreen() {
  const getIDTarefaLista = document.getElementById('lista-tarefas');
  const getTarefa = getIDTarefaLista;
  getTarefa.addEventListener('click', changingBackgroundGreen);
}

// Requisito 8
// Exercício feito com a ajuda do código Lucas Andrade
// Link: https://github.com/tryber/sd-010-a-project-todo-list/blob/cdc6f5084c225c6852fcfe3e5acd1ac6269c540f/script.js
function changingBackgroundWhite() {
  const getClassItem = document.getElementsByClassName('item');
  for (let index = 0; index < getClassItem.length; index += 1) {
    if (getClassItem[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      getClassItem[index].style.backgroundColor = 'white';
      getClassItem[index].classList.remove('selected');
    }
  }
}

function eventchangeBackgroundWhite() {
  const getListaTarefa = document.getElementById('lista-tarefas');
  getListaTarefa.addEventListener('click', changingBackgroundWhite);
}

// Requisito 9
// Exercício feito com a ajuda do código Lucas Andrade
// Link: https://github.com/tryber/sd-010-a-project-todo-list/blob/a08087c599642b1c3dbe9e5f048fa6c5c403ff3b/script.js
function setLineTrough(event) {
  const eventTarget = event.target;
  if (eventTarget.className === 'item selected') {
    eventTarget.classList.add('completed');
  } else {
    eventTarget.classList.remove('completed');
  }
}

function eventSetLineTrough() {
  const getIDListaTarefa = document.getElementById('lista-tarefas');
  getIDListaTarefa.addEventListener('dblclick', setLineTrough);
}

// Requisito 10
// https://developer.mozilla.org/pt-BR/docs/Web/API/Node/removeChild
function excludingAllList() {
  const lista = document.getElementById('lista-tarefas');
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }
}

function eventExcludingAllList() {
  const getApagaTudo = document.getElementById('apaga-tudo');
  getApagaTudo.addEventListener('click', excludingAllList);
}

// Requisito 11
function excludingSelected() {
  const listTask = document.getElementById('lista-tarefas');
  const itemClass = document.querySelectorAll('.completed');
  for (let index = 0; index < itemClass.length; index += 1) {
    listTask.removeChild(itemClass[index]);
  }
}

function eventExcludingSelected() {
  const btnRemove = document.getElementById('remover-finalizados');
  btnRemove.addEventListener('click', excludingSelected);
}

// Requisitos Bônus

// Requisito 12
// Exercício feito com ajuda do código do Gabriel Ferreira
// Link: https://github.com/tryber/sd-010-a-project-todo-list/pull/94/commits/1dcaed3dace7fd443757bdfc1d434cf5756e5776
function SavingList() {
  const itemList = document.querySelector('#lista-tarefas');
  localStorage.setItem('Listas', itemList.innerHTML);
}

function eventSavingList() {
  const btnSaveList = document.querySelector('#salvar-tarefas');
  btnSaveList.addEventListener('click', SavingList);
}

window.onload = () => {
  const itemList = document.querySelector('#lista-tarefas');
  itemList.innerHTML = localStorage.getItem('Listas');
};

// Requisito 13
// Esse exercício foi feito com a ajuda do Anderson Nascimento e com a ajuda do código do Gabriel Ferreira
// Link: https://github.com/tryber/sd-010-a-project-todo-list/blob/cfcf323ea3aaf3528e5c5a8a0042eb20c54701e8/script.js

function downElement() {
  const fatherItens = document.getElementById('lista-tarefas');
  const getSelected = document.querySelector('.selected');
  let move;

  if (getSelected !== null) {
    move = getSelected.nextElementSibling;
    if (fatherItens.lastChild !== getSelected) {
      move = fatherItens.insertBefore(getSelected.nextElementSibling, getSelected);
      return move;
    }
  }
}

function eventDownElement() {
  const btnMoverBaixo = document.querySelector('#mover-baixo');
  btnMoverBaixo.addEventListener('click', downElement);
}

function upElement() {
  const fatherItens = document.getElementById('lista-tarefas');
  const getSelected = document.querySelector('.selected');
  let move;

  if (getSelected !== null) {
    move = getSelected.previousElementSibling;
    if (fatherItens.firstChild !== getSelected) {
      move = fatherItens.insertBefore(getSelected, getSelected.previousElementSibling);
      return move;
    }
  }
}

function eventUpElement() {
  const btnMoverCima = document.querySelector('#mover-cima');
  btnMoverCima.addEventListener('click', upElement);
}

// Requisito 14
function removeSelected() {
  const listItem = document.querySelectorAll('.item');

  for (let index = 0; index < listItem.length; index += 1) {
    if (listItem[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      listItem[index].remove();
    }
  }
}

function eventRemoveSelected() {
  const btnRemoveSelected = document.querySelector('#remover-selecionado');
  btnRemoveSelected.addEventListener('click', removeSelected);
}

newList();
eventchangeBackgroundWhite();
eventchangeBackgroundGreen();
eventSetLineTrough();
eventExcludingAllList();
eventExcludingSelected();
eventSavingList();
eventDownElement();
eventUpElement();
eventRemoveSelected();
