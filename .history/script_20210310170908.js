const createTask = document.getElementById('criar-tarefa');
const inputTask = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');

function addTask(add) {
  add.preventDefault();
  const newTaskItem = document.createElement('li');
  const newTask = inputTask.value;
  newTaskItem.innerText = newTask;
  taskList.appendChild(newTaskItem);
  inputTask.value = '';
}

function changeItemColors(change) {
  change.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

createTask.addEventListener('click', addTask);
taskList.addEventListener('click', changeItemColors)