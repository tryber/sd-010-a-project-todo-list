const createTask = document.getElementById('criar-tarefa');
let inputTask = document.getElementById('texto-tarefa');
let taskList = document.getElementById('lista-tarefas');

function addTask(add) {
  add.preventDefault();
  let newTaskItem = document.createElement('li');
  let newTask = inputTask.value;
  newTaskItem.innerText = newTask;
  taskList.appendChild(newTaskItem);
  inputTask.value = '';
}

createTask.addEventListener('click', addTask);