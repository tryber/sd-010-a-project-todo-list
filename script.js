const taskList = document.querySelector('#lista-tarefas');

function addTask() {
  const eachTask = document.createElement('li');
  eachTask.className = 'task';
  eachTask.innerText = document.querySelector('#texto-tarefa').value;
  document.querySelector('#texto-tarefa').value = '';
  taskList.appendChild(eachTask);
}

const buttonAddTask = document.querySelector('#criar-tarefa');
buttonAddTask.addEventListener('click', addTask);

function removeBackground() {
  const everyTask = taskList.children;
  for (let i = 0; i < everyTask.length; i += 1) {
    everyTask[i].removeAttribute('style');
  }
}

function addBackground(event) {
  removeBackground();
  const eTarget = event.target;
  eTarget.style.backgroundColor = 'rgb(128, 128, 128)';
}

taskList.addEventListener('click', addBackground);

function completeUncompleteTasks(event) {
  const eTarget = event.target;
  if (eTarget.classList.contains('completed')) {
    eTarget.classList.remove('completed');
  } else eTarget.classList.add('completed');
}

taskList.addEventListener('dblclick', completeUncompleteTasks);

function removeList() {
  const allTasks = document.querySelectorAll('.task');
  for (let i = 0; i < allTasks.length; i += 1) {
    taskList.removeChild(allTasks[i]);
  }
}

document.querySelector('#apaga-tudo').addEventListener('click', removeList);

function removeCompleted() {
  const allCompleted = document.querySelectorAll('.completed');
  for (let i = 0; i < allCompleted.length; i += 1) {
    taskList.removeChild(allCompleted[i]);
  }
}

document.querySelector('#remover-finalizados').addEventListener('click', removeCompleted);
