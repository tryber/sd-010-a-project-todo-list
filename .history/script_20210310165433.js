const createTask = document.getElementById('criar-tarefa');
const inputTask = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');

function addTask(add) {
  add.preventDefault();
  let newTaskItem = document.createElement('li');
  let newTask = inputTask.value;
  newTaskItem.innerText = newTask;
  taskList.appendChild(newTaskItem);
  inputTask.value = '';
}

createTask.addEventListener('click', addTask);