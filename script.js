const newTask = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');
const createTaskBtn = document.getElementById('criar-tarefa');
const cleanAllBtn = document.getElementById('apaga-tudo');
const removeTaksDoneBtn = document.getElementById('remover-finalizados');

function addNewTask() {
  createTaskBtn.addEventListener('click', () => {
    const taskListItem = document.createElement('li');
    taskListItem.innerHTML = newTask.value;
    taskList.appendChild(taskListItem);
    function clearEntry() {
      newTask.value = '';
    }
    clearEntry();
  });
}

function changeItemBackground() {
  const tasks = document.querySelectorAll('li');
  tasks.forEach((task) => {
    task.addEventListener('click', (e) => {
      for (let index = 0; index < tasks.length; index += 1) {
        tasks[index].style.backgroundColor = '';
      }
      e.target.style.backgroundColor = 'rgb(128,128,128)';
    });
  });
}

function taskCompleted() {
  const tasks = document.querySelectorAll('li');
  tasks.forEach((task) => {
    task.addEventListener('dblclick', (e) => {
      task.addEventListener('dblclick', (ev) => {
        if (ev.target.classList.contains('completed')) {
          ev.target.classList.remove('completed');
        }
      });
      e.target.classList.add('completed');
    });
  });
}

function cleanAll() {
  cleanAllBtn.addEventListener('click', () => {
    const tasks = document.querySelectorAll('li');
    tasks.forEach((task) => {
      taskList.removeChild(task);
    });
  });
}
function removeTasksDone() {
  removeTaksDoneBtn.addEventListener('click', () => {
    const tasks = document.querySelectorAll('li');
    tasks.forEach((task) => {
      if (task.classList.contains('completed')) {
        taskList.removeChild(task);
      }
    });
  });
}

addNewTask();
createTaskBtn.addEventListener('click', changeItemBackground);
createTaskBtn.addEventListener('click', taskCompleted);
cleanAll();
removeTasksDone();
