const createTask = document.getElementById('criar-tarefa');
const inputTask = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');
const removeAll = document.getElementById('apaga-tudo');

function addTask(add) {
  add.preventDefault();
  const newTaskItem = document.createElement('li');
  const newTask = inputTask.value;
  newTaskItem.classList.add('task')
  newTaskItem.innerText = newTask;
  taskList.appendChild(newTaskItem);
  inputTask.value = '';
}

function changeItemColors(change) {
  change.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function selectItem(changeItem) {
  const allTasks = document.querySelectorAll('.task');
  for (let i = 0; i < allTasks.length; i += 1) {
    allTasks[i].classList.remove('selected');
  }
  changeItem.target.classList.add('selected');
}

function markCompleted(mark) {
  if (!mark.target.classList.contains('completed')) {
    mark.target.classList.add('completed');
  } else {
    mark.target.classList.remove('completed');
  }
}

function removeAll(rall) {
  for ()
}

createTask.addEventListener('click', addTask);
taskList.addEventListener('click', changeItemColors, selectItem)
taskList.addEventListener('dblclick', markCompleted);

