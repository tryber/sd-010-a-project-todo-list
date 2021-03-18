const createTaskButton = document.getElementById('criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const clearButton = document.getElementById('apaga-tudo');
const clearFinishButton = document.getElementById('remover-finalizados');

function createTaskList() {
  const input = document.getElementById('texto-tarefa');
  const inputTask = input.value;
  if (inputTask.length > 0) {
    const taskListItem = document.createElement('li');
    taskListItem.innerText = inputTask;
    taskList.appendChild(taskListItem);
    input.value = '';
  }
}

function changeBackgroundColor(e) {
  for (let i = 0; i < taskList.children.length; i += 1) {
    if (taskList.children[i] !== e.target) {
      taskList.children[i].style.backgroundColor = 'white';
    }
  }
  e.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function completedTask(e) {
  const targetEvent = e.target;
  if (targetEvent.className !== 'completed') {
    targetEvent.className = 'completed';
  } else {
    targetEvent.className = 'no-completed';
  }
}

function removeAllTasks() {
  while (taskList.firstChild) {
    taskList.firstChild.remove();
  }
}

function removeFinishTasks() {
  const taskFinish = document.querySelectorAll('.completed');
  for (let i = taskFinish.length - 1; i >= 0; i -= 1) {
    if (taskFinish[i].className === 'completed') {
      taskFinish[i].remove();
    }
  }
}

createTaskButton.addEventListener('click', createTaskList);
taskList.addEventListener('click', changeBackgroundColor);
taskList.addEventListener('dblclick', completedTask);
clearButton.addEventListener('click', removeAllTasks);
clearFinishButton.addEventListener('click', removeFinishTasks);
