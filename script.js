const tasksList = document.querySelector('#lista-tarefas');

function addTask() {
  const indTask = document.createElement('li');
  indTask.className = 'task';
  indTask.innerText = document.querySelector('#texto-tarefa').value;
  document.querySelector('#texto-tarefa').value = '';
  tasksList.appendChild(indTask);
}

const addTaskBtn = document.querySelector('#criar-tarefa');
addTaskBtn.addEventListener('click', addTask);

function bgRemoval() {
  const allTasks = tasksList.children;
  for (let i = 0; i < allTasks.length; i += 1) {
    allTasks[i].removeAttribute('style');
  }
}

function bgAdd(event) {
  bgRemoval();
  const picked = event.target;
  picked.style.backgroundColor = 'rgb(128, 128, 128)';
}

tasksList.addEventListener('click', bgAdd);

function fulfillTasks(event) {
  const picked = event.target;
  if (picked.classList.contains('completed')) {
    picked.classList.remove('completed');
  } else picked.classList.add('completed');
}

tasksList.addEventListener('dblclick', fulfillTasks);

function eraseList() {
  const allTasks = document.querySelectorAll('.task');
  for (let index = 0; index < allTasks.length; index += 1) {
    tasksList.removeChild(allTasks[index]);
  }
}

document.querySelector('#apaga-tudo').addEventListener('click', eraseList);
