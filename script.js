function newTask() {
  const createLi = document.createElement('li');
  createLi.className = 'tasks';
  createLi.innerText = document.getElementById('texto-tarefa').value;
  document.getElementById('lista-tarefas').appendChild(createLi);
  document.getElementById('texto-tarefa').value = '';
}

document.getElementById('criar-tarefa').addEventListener('click', newTask);

function selectTask(event) {
  const tasks = document.getElementsByClassName('tasks');
  for (let index = 0; index < tasks.length; index += 1) {
    tasks[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

document.getElementById('lista-tarefas').addEventListener('click', selectTask);

function completeTask(event) {
  if (event.target.classList.contains("completed")) {
    event.target.classList.remove("completed");
  } else {
    event.target.classList.add("completed");
  }
}

document.getElementById('lista-tarefas').addEventListener('dblclick', completeTask);

function clearTaskList() {
  let toClear = document.getElementById("lista-tarefas");
  toClear.innerText = "";
}

document.getElementById("apaga-tudo").addEventListener('click', clearTaskList);

function clearCompleted() {
  const completedItens = document.getElementById('lista-tarefas').childNodes;
  for (let index = completedItens.length - 1; index >= 0; index -= 1) {
    if (completedItens[index].classList.contains("completed")) {
      document.getElementById('lista-tarefas').removeChild(completedItens[index]);
    }
  }
}

document.getElementById('remover-finalizados').addEventListener('click', clearCompleted);

// Requisitos bônus

const saveMeButton = document.getElementById('salvar-tarefas');
function storageList() {
  localStorage.setItem('savedTasks', document.getElementById('lista-tarefas').innerHTML);
}

saveMeButton.addEventListener('click', storageList);

window.onload = () => {
  const storagedSaves = localStorage.getItem('savedTasks');
  document.getElementById('lista-tarefas').innerHTML = storagedSaves;
};

const moveUp = document.getElementById('mover-cima');
const moveDown = document.getElementById('mover-baixo');

function upFunction() {
  const selectedItem = document.querySelector('.selected');
  const listItens = document.querySelectorAll('ol li');
  // const taskList = selectedItem.parentNode;
  const taskList = document.getElementById('lista-tarefas');

  for (let index = 0; index < listItens.length; index += 1) {
    if (listItens[index].classList.contains('selected') && index !== 0) {
      taskList.insertBefore(selectedItem, listItens[index - 1]);
    }
  }
}

function downFunction() {
  const selectedItem = document.querySelector('.selected');
  const listItens = document.querySelectorAll('ol li');
  const taskList = document.getElementById('lista-tarefas');

  for (let index = 0; index < listItens.length; index += 1) {
    if (listItens[index].classList.contains('selected') && index !== listItens.length - 1) {
      taskList.insertBefore(listItens[index + 1], selectedItem);
    }
  }
}

moveUp.addEventListener('click', upFunction);
moveDown.addEventListener('click', downFunction);

function deleteSelected() {
  document.querySelector('.selected').remove();
}
const removeButton = document.getElementById('remover-selecionado');
removeButton.addEventListener('click', deleteSelected);
