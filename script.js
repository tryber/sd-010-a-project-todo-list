const createTaskBtn = document.getElementById('criar-tarefa');
const eraseBtn = document.getElementById('remover-selecionado');
const eraseAllBtn = document.getElementById('apaga-tudo');
const removeCompletedBtn = document.getElementById('remover-finalizados');
const saveBtn = document.getElementById('salvar-tarefas');
const moveUpBtn = document.getElementById('mover-cima');
const moveDownBtn = document.getElementById('mover-baixo');
const inputTask = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');

function addTask(e) {
  e.preventDefault();
  const newTaskItem = document.createElement('li');
  newTaskItem.classList.add('task');
  const newTask = inputTask.value;
  newTaskItem.innerText = newTask;
  taskList.appendChild(newTaskItem);
  inputTask.value = '';
}

function selectItem(e) {
  const allTasks = document.querySelectorAll('.task');
  for (let index = 0; index < allTasks.length; index += 1) {
    // if (allTasks[index] !== e.target) {
    allTasks[index].classList.remove('selected');
    // }
  }
  // e.target.classList.toggle('selected'); Assim o requisito 13 não passa!
  e.target.classList.add('selected');
}

// .toggle retirado da documentação do MDN inspirado pela dica do Johnatas no Plantão
function markCompleted(e) {
  e.target.classList.toggle('completed');
}

function eraseItem() {
  const selectedItem = document.querySelector('.selected');
  selectedItem.remove();
}

function eraseAll() {
  taskList.innerHTML = '';
}

// .contains() retirado da doc do MDN - https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/contains
function removeCompleted() {
  const allTasks = document.querySelectorAll('.task');
  for (let index = allTasks.length - 1; index >= 0; index -= 1) {
    if (allTasks[index].classList.contains('completed')) {
      allTasks[index].remove();
    }
  }
}

function setTasks() {
  const allTasks = taskList.innerHTML;
  localStorage.setItem('tasks', allTasks);
}

function getTasks() {
  if (localStorage.tasks) {
    taskList.innerHTML = localStorage.getItem('tasks');
  }
}

// .insertBefore retirado da documentação do MDN
// https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
function moveItemUp() {
  const selectedItem = document.querySelector('.selected');
  const allTasks = document.querySelectorAll('.task');
  for (let index = 0; index < allTasks.length; index += 1) {
    if (allTasks[index] === selectedItem && index !== 0) {
      taskList.insertBefore(selectedItem, allTasks[index - 1]);
    }
  }
}

function moveItemDown() {
  const selectedItem = document.querySelector('.selected');
  const allTasks = document.querySelectorAll('.task');
  for (let index = 0; index < allTasks.length; index += 1) {
    if (allTasks[index] === selectedItem && index !== allTasks.length - 1) {
      taskList.insertBefore(selectedItem, allTasks[index + 2]);
    }
  }
}

createTaskBtn.addEventListener('click', addTask);
taskList.addEventListener('click', selectItem);
taskList.addEventListener('dblclick', markCompleted);
eraseBtn.addEventListener('click', eraseItem);
eraseAllBtn.addEventListener('click', eraseAll);
removeCompletedBtn.addEventListener('click', removeCompleted);
saveBtn.addEventListener('click', setTasks);
moveUpBtn.addEventListener('click', moveItemUp);
moveDownBtn.addEventListener('click', moveItemDown);
window.addEventListener('load', getTasks);
