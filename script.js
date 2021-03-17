const textBox = document.getElementById('texto-tarefa');

const createTaskBtn = document.getElementById('criar-tarefa');

createTaskBtn.innerText = 'AdicionarTarefa';

const toDoList = document.getElementById('lista-tarefas');

const listItens = document.getElementsByTagName('li');

const clearTasksDone = document.getElementById('remover-finalizados');

clearTasksDone.innerText = 'Clear Tasks Done';

function deleteSelectClass() {
  for (let index = 0; index < listItens.length; index += 1) {
    listItens[index].classList.remove('selected');
  }
}

function addSelectClass(e) {
  deleteSelectClass();
  e.target.className += ' selected';
}

function deleteCompletedClass() {
  for (let index = 0; index < listItens.length; index += 1) {
    listItens[index].classList.remove('completed');
  }
}

function addCompletedClass(e) {
  let sum = 0;
  for (let index = 0; index < e.target.classList.length; index += 1) {
    if (e.target.classList[index] !== 'completed') {
      sum += 1;
    }
  }
  if (sum === e.target.classList.length) {
    e.target.classList += ' completed';
  } else {
    deleteCompletedClass();
  }
}

function clearListTask() {
  for (let index = 0; index < listItens.length; index) {
    toDoList.removeChild(toDoList.firstElementChild);
  }
  localStorage.clear();
}

function addTaskToList() {
  const task = textBox.value;
  const taskElement = document.createElement('li');
  taskElement.innerText = task;
  taskElement.addEventListener('click', addSelectClass);
  taskElement.addEventListener('dblclick', addCompletedClass);
  toDoList.appendChild(taskElement);
  textBox.value = '';
}

createTaskBtn.addEventListener('click', addTaskToList);

const clearList = document.getElementById('apaga-tudo');
clearList.innerText = 'clear all tasks';
clearList.addEventListener('click', clearListTask);

function clearingTasksDone() {
  const tasks = document.getElementsByTagName('li');
  for (let index = (tasks.length - 1); index >= 0; index -= 1) {
    if (tasks[index].hasAttribute('class', 'completed')) {
      toDoList.removeChild(tasks[index]);
    }
  }
}

clearTasksDone.addEventListener('click', clearingTasksDone);
