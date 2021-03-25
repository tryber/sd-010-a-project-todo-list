const addTaskBtn = document.getElementById('criar-tarefa');
const taskInput = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');
const clearBtn = document.getElementById('apaga-tudo');
const finishedBtn = document.getElementById('remover-finalizados');
const saveTasks = document.getElementById('salvar-tarefas');
const moveUpBtn = document.getElementById('mover-cima');
const moveDownBtn = document.getElementById('mover-baixo');
const removeSelectedBtn = document.getElementById('remover-selecionado');

function addTask() {
  if (taskInput.value !== '') {
    const newTaskItem = document.createElement('li');
    newTaskItem.classList.add('tasks__item');
    newTaskItem.textContent = taskInput.value;
    taskList.appendChild(newTaskItem);
    taskInput.value = '';
  }
}

addTaskBtn.addEventListener('click', addTask);

function changebackgroundColorItemList(event) {
  const { target } = event;
  const itemListSelected = document.querySelectorAll('.selected');
  itemListSelected.forEach((element) => {
    if (element !== target) {
      element.classList.remove('selected');
    }
  });
  target.classList.add('selected');
}

taskList.addEventListener('click', changebackgroundColorItemList);

function scratchItemList(event) {
  event.target.classList.toggle('completed');
}

taskList.addEventListener('dblclick', scratchItemList);

function clearItensList() {
  const tasksItens = document.querySelectorAll('.tasks__item');
  tasksItens.forEach((taskItem) => taskItem.parentNode.removeChild(taskItem));
  localStorage.removeItem('status');
}

clearBtn.addEventListener('click', clearItensList);

function removeFinishedElement() {
  const finishedElements = document.querySelectorAll('.completed');
  finishedElements.forEach((element) => element.parentNode.removeChild(element));
}

finishedBtn.addEventListener('click', removeFinishedElement);

const status = {
  added: [],
  completed: [],
};

function saveStatusItens() {
  status.added = [];
  status.completed = [];
  const itensList = document.querySelectorAll('.tasks__list  > li');
  itensList.forEach((item) => status.added.push(item.textContent));
  itensList.forEach((item) => status.completed.push(item.classList.contains('completed')));
  localStorage.setItem('status', JSON.stringify(status));
}

saveTasks.addEventListener('click', saveStatusItens);

function restoreStatusItens() {
  const list = JSON.parse(localStorage.getItem('status'));
  list.added.forEach((item) => {
    const newTaskItem = document.createElement('li');
    newTaskItem.classList.add('tasks__item');
    newTaskItem.textContent = item;
    taskList.appendChild(newTaskItem);
  });
  list.completed.forEach((item, index) => {
    const listItem = document.querySelectorAll('.tasks__item');
    if (item === true) {
      listItem[index].classList.add('completed');
    }
  });
}

const test = JSON.parse(localStorage.getItem('status'));
if (test !== null) {
  restoreStatusItens();
}

function moveUp() {
  const itemSelected = document.querySelector('.selected');
  if (itemSelected !== null) {
    const items = document.querySelectorAll('li');
    const list = Array.from(items);
    if (list.indexOf(itemSelected) !== 0) {
      taskList.insertBefore(itemSelected, itemSelected.previousElementSibling);
    }
  }
}

moveUpBtn.addEventListener('click', moveUp);

function moveDown() {
  const itemSelected = document.querySelector('.selected');
  if (itemSelected !== null) {
    const items = document.querySelectorAll('li');
    const list = Array.from(items);
    if (list.indexOf(itemSelected) !== list.length - 1) {
      taskList.insertBefore(itemSelected.nextElementSibling, itemSelected);
    }
  }
}

moveDownBtn.addEventListener('click', moveDown);

function removeSelected() {
  const itemSelected = document.querySelector('.selected');
  taskList.removeChild(itemSelected);
}

removeSelectedBtn.addEventListener('click', removeSelected);
