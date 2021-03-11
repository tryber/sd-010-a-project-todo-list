const createTask = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const taskText = document.querySelector('#texto-tarefa');
const taskListLi = document.querySelector('#lista-tarefas').childNodes;

// Criando o evento de clique duplo para riscar o item da lista
function lineThroughItem(event) {
  event.currentTarget.classList.toggle('completed');
}

// Alterar a cor de fundo do item quando clicado
function changeBackgroundColor(event) {
  for (let j = 0; j < taskListLi.length; j += 1) {
    taskListLi[j].classList.remove('selected');
  }
  event.currentTarget.classList.add('selected');
}

// Cria um item na "lista-tarefas" quando clicka no botão
function createLi() {
  const creatingLi = document.createElement('li');
  const textValue = taskText.value;
  creatingLi.innerText = textValue;

  taskList
    .appendChild(creatingLi)
    .addEventListener('dblclick', lineThroughItem);

  taskList
    .appendChild(creatingLi)
    .addEventListener('click', changeBackgroundColor);
  taskText.value = '';
}

createTask.addEventListener('click', createLi);

// Botão apagar tudo
const btnDelete = document.querySelector('#apaga-tudo');

function deleteList() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

btnDelete.addEventListener('click', deleteList);

// Botão apagar itens finalizados
const btnItensFinished = document.querySelector('#remover-finalizados');

function deleteFinishedList() {
  for (let i = taskListLi.length - 1; i >= 0; i -= 1) {
    if (taskListLi[i].classList.contains('completed')) {
      taskList.removeChild(taskListLi[i]);
    }
  }
}

btnItensFinished.addEventListener('click', deleteFinishedList);

// Salvar lista
const saveItensButton = document.querySelector('#salvar-tarefas');

function storageList() {
  localStorage.setItem('lista-itens', taskList.innerHTML);
}

saveItensButton.addEventListener('click', storageList);

function onloadItems() {
  function addEventLi() {
    for (let i = 0; i < taskListLi.length; i += 1) {
      taskListLi[i].addEventListener('dblclick', lineThroughItem);
      taskListLi[i].addEventListener('click', changeBackgroundColor);
    }
  }

  function getListStorage() {
    const saved = localStorage.getItem('lista-itens');
    if (saved) {
      taskList.innerHTML = saved;
    }
  }

  function removeSelected() {
    for (let i = 0; i < taskListLi.length; i += 1) {
      taskListLi[i].classList.remove('selected');
    }
  }

  getListStorage();
  removeSelected();
  addEventLi();
}

window.onload = onloadItems;

// Mover um item para cima
const moveUpButton = document.querySelector('#mover-cima');

function moveUp() {
  for (let i = 1; i < taskListLi.length; i += 1) {
    if (taskListLi[i].classList.contains('selected')) {
      const previousSibling = taskListLi[i - 1];
      taskList.insertBefore(taskListLi[i], previousSibling);
    }
  }
}

moveUpButton.addEventListener('click', moveUp);

// Mover um item para baixo
const moveDownButton = document.querySelector('#mover-baixo');

function moveDown() {
  for (let i = taskListLi.length - 2; i >= 0; i -= 1) {
    if (taskListLi[i].classList.contains('selected')) {
      const nextSibling = taskListLi[i + 2];
      taskList.insertBefore(taskListLi[i], nextSibling);
    }
  }
}

moveDownButton.addEventListener('click', moveDown);

// Apagar item selecionado
const removeItem = document.querySelector('#remover-selecionado');

function deleteSelected() {
  for (let i = 1; i < taskListLi.length; i += 1) {
    if (taskListLi[i].classList.contains('selected')) {
      taskList.removeChild(taskListLi[i]);
    }
  }
}

removeItem.addEventListener('click', deleteSelected);
