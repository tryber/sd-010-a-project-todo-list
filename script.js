// adiciona tarefas
function addTask() {
  const button = document.querySelector('button');
  button.addEventListener('click', function adding () {
    const textInputted = document.querySelector('input').value;
    const newTask = document.createElement('li');
    newTask.className = 'task';
    newTask.innerText = textInputted;
    document.querySelector('#lista-tarefas').appendChild(newTask);
    document.querySelector('input').value = null;
  });
}

addTask();

function taskSelection() {
  const taskList = document.querySelector('#lista-tarefas');
  taskList.addEventListener('click', function (event) {
    event.target.classList.add('selected');
    const allTasks = document.querySelectorAll('li');
    for (let index = 0; index < allTasks.length; index += 1) {
      if (allTasks[index] !== event.target) {
        allTasks[index].classList.remove('selected');
      }
    }
  });
}

taskSelection();

function completeTask() {
  const taskList = document.querySelector('#lista-tarefas');
  taskList.addEventListener('dblclick', function (event) {
    if (event.target.classList.contains('task')) {
      if (event.target.classList.contains('completed')) {
        event.target.classList.remove('completed');
      } else {
        event.target.classList.add('completed');
      }
    }
  });
}

completeTask();
