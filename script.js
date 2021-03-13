const list = document.getElementById('lista-tarefas');

function renderNewTask(task) {
  list.appendChild(task);
}

function clearInput(input) {
  const text = input;
  text.value = '';
}

function selectTask(Event) {
  const currentItemSelected = document.querySelector('li.selected');
  const task = Event.target;

  const hasSelectedItem = currentItemSelected !== null;

  if (task.classList !== 'selected') {
    if (hasSelectedItem) {
      currentItemSelected.classList.remove('selected');
    }
    task.classList.add('selected');
  }
}

function completeTask(Event) {
  const task = Event.target;
  const isCompleted = task.className.includes('completed');

  if (isCompleted) {
    task.classList.remove('completed');
  } else {
    task.classList.add('completed');
  }
}

function addNewTask() {
  const task = document.getElementById('texto-tarefa');
  const listItem = document.createElement('li');

  listItem.innerText = task.value;
  listItem.className = 'list-item';
  listItem.addEventListener('click', selectTask);
  listItem.addEventListener('dblclick', completeTask);
  renderNewTask(listItem);
  clearInput(task);
  task.focus();
}

function deleteList() {
  list.innerHTML = '';
}

function removeCompletedTasks() {
  const completedTasks = document.querySelectorAll('.completed');
  completedTasks.forEach((task) => task.remove());
}

function saveList() {
  const tasks = document.querySelectorAll('.list-item');
  const tasksArray = [];
  tasks.forEach(((task) => tasksArray.push(task.outerHTML)));
  localStorage.setItem('tasks', tasksArray);
}

function loadSavedTasks() {
  if (localStorage.length > 0) {
    const tasks = localStorage.getItem('tasks').split(',');
    tasks.forEach((task) => {
      list.innerHTML += task;
    });
  }

  if (document.querySelectorAll('li')) {
    const listItem = document.querySelectorAll('li');
    listItem.forEach((item) => {
      item.addEventListener('click', selectTask);
      item.addEventListener('dblclick', completeTask);
    });
  }
}

function moveTaskUp() {
  const selectedTask = document.querySelector('.selected');
  const hasSelectedItem = selectedTask !== null;

  if (hasSelectedItem) {
    const isFirstElement = selectedTask === selectedTask.parentElement.firstChild;
    if (!isFirstElement) {
      list.insertBefore(selectedTask, selectedTask.previousElementSibling); // Referencia: João Nascimento -https://github.com/tryber/sd-010-a-project-todo-list/pull/5/files?file-filters%5B%5D=.css&file-filters%5B%5D=.js
    }
  }
}

function moveTaskDown() {
  const selectedTask = document.querySelector('.selected');
  const hasSelectedItem = selectedTask !== null;

  if (hasSelectedItem) {
    const isLastElement = selectedTask === selectedTask.parentElement.lastChild;
    if (!isLastElement) {
      list.insertBefore(selectedTask.nextElementSibling, selectedTask); // Referencia: João Nascimento -https://github.com/tryber/sd-010-a-project-todo-list/pull/5/files?file-filters%5B%5D=.css&file-filters%5B%5D=.js}
    }
  }
}

function deleteTask() {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask) selectedTask.remove();
}
// Referencia: Stack Overflow - https://stackoverflow.com/questions/14542062/eventlistener-enter-key
function enterPress(Event) {
  if (Event.key === 'Enter') {
    addNewTask();
  }
}

window.onload = () => {
  loadSavedTasks();
  // Adicina eventos de cliques nos botões
  document.getElementById('criar-tarefa').addEventListener('click', addNewTask);
  document.body.addEventListener('keypress', enterPress);

  document.getElementById('apaga-tudo').addEventListener('click', deleteList);

  document.getElementById('remover-finalizados').addEventListener('click', removeCompletedTasks);

  document.getElementById('salvar-tarefas').addEventListener('click', saveList);

  document.getElementById('mover-cima').addEventListener('click', moveTaskUp);
  document.getElementById('mover-baixo').addEventListener('click', moveTaskDown);

  document.getElementById('remover-selecionado').addEventListener('click', deleteTask);
};
