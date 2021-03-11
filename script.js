function addTask() {
  const btn = document.querySelector('button');
  btn.addEventListener('click', function () {
    const inputText = document.querySelector('input').value;
    const task = document.createElement('li');
    task.className = 'task';
    task.innerText = inputText;
    document.querySelector('#lista-tarefas').appendChild(task);
    document.querySelector('input').value = null;
  });
}

addTask();

function selectTask() {
  const taskList = document.querySelector('#lista-tarefas');
  taskList.addEventListener('click', function (event) {
    event.target.classList.add('selected');
    const allLines = document.querySelectorAll('li');
    for (let index = 0; index < allLines.length; index += 1) {
      if (allLines[index] !== event.target) {
        allLines[index].classList.remove('selected');
      }
    }
  });
}
selectTask();

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
  const tasksCounter = document.getElementsByClassName('task');
  for (let index = 0; index < tasksCounter.length; index += 1) {
    if (tasksCounter[index].classList.contains('completed')) {
      tasksCounter[index].style.textDecoration = 'line-through solid rgb(0, 0, 0)';
    }
  }
}
completeTask();

function moveUp() {
  const btn = document.createElement('button');
  btn.id = 'mover-cima';
  btn.innerText = 'Cima';
  document.querySelector('#dinamic-session').appendChild(btn);
  btn.addEventListener('click', function () {
    const tasksList = document.querySelectorAll('.task');
    for (let index = 0; index < tasksList.length; index += 1) {
      if (tasksList[index].classList.contains('selected') && index !== 0) {
        tasksList[index].classList.remove('selected');
        tasksList[index - 1].classList.add('selected');
        if (tasksList[index].classList.contains('completed')) {
          if (tasksList[index - 1].classList.contains('completed')) {
            tasksList[index].classList.add('completed');
          } else {
            tasksList[index].classList.remove('completed');
            tasksList[index - 1].classList.add('completed');
          }
        }
        const aux = tasksList[index].innerText;
        tasksList[index].innerText = tasksList[index - 1].innerText;
        tasksList[index - 1].innerText = aux;
      }
    }
  });
}
moveUp();

function moveDown() {
  const btn = document.createElement('button');
  btn.id = 'mover-baixo';
  btn.innerText = 'Baixo';
  document.querySelector('#dinamic-session').appendChild(btn);
  btn.addEventListener('click', function () {
    const tasksList = document.querySelectorAll('.task');
    for (let index = 0; index < tasksList.length; index += 1) {
      if (tasksList[index].classList.contains('selected') && index !== (tasksList.length - 1)) {
        if (tasksList[index].classList.contains('completed')) {
          if (tasksList[index + 1].classList.contains('completed')) {
            tasksList[index + 1].classList.add('completed');
          } else {
            tasksList[index].classList.remove('completed');
            tasksList[index + 1].classList.add('completed');
          }
        }
        let aux = tasksList[index].innerText;
        tasksList[index].innerText = tasksList[index+1].innerText;
        tasksList[index + 1].innerText = aux;
        tasksList[index].classList.remove('selected');
        tasksList[index + 1].classList.add('selected');
        break;
      }
    }
  });
}
moveDown();

function removeSelected() {
  const btn = document.createElement('button');
  btn.id = 'remover-selecionado';
  btn.innerText = 'X';
  document.getElementById('dinamic-session').appendChild(btn);
  btn.addEventListener('click', function () {
    const taskList = document.querySelector('#lista-tarefas');
    const selectedTask = document.querySelector('.selected');
    taskList.removeChild(selectedTask);
  });
}
removeSelected();

function deleteAllBtn() {
  const btn = document.createElement('button');
  btn.id = 'apaga-tudo';
  btn.innerText = 'Limpar a lista';
  document.getElementById('dinamic-session').appendChild(btn);
  btn.addEventListener('click', function () {
    const taskList = document.getElementById('lista-tarefas');
    const tasks = document.getElementsByClassName('task');
    for (let index = tasks.length; index > 0; index -= 1) {
      taskList.removeChild(tasks[index - 1]);
    }
  });
}
deleteAllBtn();

function deleteCompleteBtn() {
  const btn = document.createElement('button');
  btn.id = 'remover-finalizados';
  btn.innerText = 'Remove finalizados';
  document.getElementById('dinamic-session').appendChild(btn);
  btn.addEventListener('click', function () {
    const taskList = document.querySelector('#lista-tarefas');
    const completedTasks = document.querySelectorAll('.completed');
    for (let index = completedTasks.length; index > 0; index -= 1) {
      taskList.removeChild(completedTasks[index - 1]);
    }
  });
}
deleteCompleteBtn();
