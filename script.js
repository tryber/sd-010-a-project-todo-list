const btnCriarTarefa = document.getElementById('criar-tarefa');
const btnClearList = document.getElementById('apaga-tudo');
const btnClearCompleted = document.getElementById('remover-finalizados');
const btnSalveTask = document.getElementById('salvar-tarefas');
const listTasks = document.getElementById('lista-tarefas');
const inputValue = document.getElementById('texto-tarefa');
const completedTask = document.getElementsByClassName('completed');
const btnMoveUp = document.getElementById('mover-cima');
const btnMoveDown = document.getElementById('mover-baixo');
const btnSelectedRemove = document.getElementById('remover-selecionado');

function selectedTask() {
  listTasks.addEventListener('click', (e) => {
    const task = e.target;
    const taskSelected = document.querySelector('.selected');
    if (taskSelected !== null) {
      taskSelected.classList.remove('selected');
    }
    task.classList.add('selected');
  });
}

function dblClickTask() {
  listTasks.addEventListener('dblclick', (e) => {
    const task = e.target;
    task.classList.toggle('completed');
    if (task.classList.contains('completed')) {
      task.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
    } else {
      task.style.textDecoration = null;
    }
  });
}

function clearList() {
  while (listTasks.firstChild) {
    listTasks.removeChild(listTasks.firstChild);
  }
}

function clearCompletedTask() {
  while (completedTask.length !== 0) {
    completedTask[0].remove();
  }
}

function createTask() {
  if (inputValue.value !== '') {
    const li = document.createElement('li');
    listTasks.appendChild(li);
    li.className = 'task';
    li.innerHTML = inputValue.value;
    inputValue.value = '';
  }
}

function salveTasks() {
// for (let i = 0; i < taskItem.length; i += 1) {
  //   localStorage.setItem(`lista ${i}`, taskItem[i].outerHTML);
  // }
  localStorage.setItem('lista', listTasks.innerHTML);
}

function moveUp() {
  const taskSelected = document.querySelector('.selected');
  if (taskSelected !== null) {
    const taskPre = taskSelected.previousElementSibling;
    if (listTasks.firstChild !== taskSelected) {
      taskSelected.parentNode.insertBefore(taskSelected, taskPre);
    }
  }
}

function moveDown() {
  const taskSelected = document.querySelector('.selected');
  if (taskSelected !== null) {
    const taskNext = taskSelected.nextElementSibling;
    if (listTasks.lastChild !== taskSelected) {
      taskNext.parentNode.insertBefore(taskNext, taskSelected);
    }
  }
}

function selectedRemove() {
  const taskSelected = document.querySelector('.selected');
  if (taskSelected !== null) {
    taskSelected.remove();
  }
}

btnCriarTarefa.addEventListener('click', createTask);
btnClearCompleted.addEventListener('click', clearCompletedTask);
btnClearList.addEventListener('click', clearList);
btnSalveTask.addEventListener('click', salveTasks);
btnMoveUp.addEventListener('click', moveUp);
btnMoveDown.addEventListener('click', moveDown);
btnSelectedRemove.addEventListener('click', selectedRemove);

window.onload = () => {
  createTask();
  selectedTask();
  dblClickTask();
  // for (let i = 0; i < localStorage.length; i += 1) {
  //   listTasks.innerHTML += localStorage.getItem(`lista ${i}`);
  // }
  listTasks.innerHTML = localStorage.getItem('lista');
};
