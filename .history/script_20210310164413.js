let createTaskBtn = document.getElementById('criar-tarefa');
let inputTask = document.getElementById('texto-tarefa');
let taskList = document.getElementById('lista-tarefas');

function addTask(e) {
  e.preventDefault();
  const newTaskItem = document.createElement('li');
  const newTask = inputTask.value;
  newTaskItem.innerText = newTask;
  taskList.appendChild(newTaskItem);
  inputTask.value = '';
}

createTaskBtn.addEventListener('click', addTask);