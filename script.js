const listaTarefasId = '#lista-tarefas';
function createTask() {
  const inputTask = document.getElementById('texto-tarefa');
  const olList = document.getElementById('lista-tarefas');

  if (!inputTask.value) {
    alert('Escreva algo');
  } else {
    const createTaskElement = document.createElement('li');
    createTaskElement.innerText = inputTask.value;
    createTaskElement.classList.add('task');
    olList.appendChild(createTaskElement);
    inputTask.value = '';
  }
}

function addTask() {
  const addTaskBtn = document.getElementById('criar-tarefa');
  addTaskBtn.addEventListener('click', createTask);
}

function cleanSelected() {
  const tasks = document.querySelectorAll('.task');
  for (let index = 0; index < tasks.length; index += 1) {
    tasks[index].classList.remove('selected');
  }
}

function selectTask() {
  const task = document.querySelector(listaTarefasId);
  task.addEventListener('click', (event) => {
    cleanSelected();
    event.target.classList.add('selected');
  });
}

function dblClick() {
  const task = document.querySelector(listaTarefasId);
  task.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
  });
}

function clearAllTasks() {
  const clearBtn = document.getElementById('apaga-tudo');

  clearBtn.addEventListener('click', (_event) => {
    const task = document.querySelector(listaTarefasId);
    const tasks = document.querySelectorAll('.task');

    for (let index = 0; index < tasks.length; index += 1) {
      task.removeChild(task.lastChild);
    }
  });
}

function clearCompletedTasks() {
  const clearCompleteds = document.querySelector('#remover-finalizados');

  clearCompleteds.addEventListener('click', () => {
    const task = document.querySelector(listaTarefasId);
    const tasksCompleteds = document.querySelectorAll('.completed');

    for (let index = 0; index < tasksCompleteds.length; index += 1) {
      task.removeChild(tasksCompleteds[index]);
    }
  });
}

function removeSelected() {
  const removeSelBtn = document.querySelector('#remover-selecionado');

  removeSelBtn.addEventListener('click', (_event) => {
    const taskSelected = document.querySelector('.selected');
    const task = document.querySelector('#lista-tarefas');

    task.removeChild(taskSelected);
  });
}

function saveTasks() {
  const saveBtn = document.getElementById('salvar-tarefas');
  saveBtn.addEventListener('click', () => {
    const tasks = document.getElementsByClassName('task');
    for (let index = 0; index < tasks.length; index += 1) {
      const tasksSaved = {
        text: tasks[index].innerText,
        class: tasks[index].className,
      };
      localStorage.setItem(index, JSON.stringify(tasksSaved));
    }
  });
}

function getTasks() {
  const task = document.getElementById('lista-tarefas');
  for (let index = 0; index < localStorage.length; index += 1) {
    const createTasks = document.createElement('li');
    const getTasksSaved = JSON.parse(localStorage.getItem(index));
    createTasks.innerText = getTasksSaved.text;
    createTasks.className = getTasksSaved.class;
    createTasks.classList.remove('selected');
    task.appendChild(createTasks);
  }
}

function up() {
  const upBtn = document.querySelector('#mover-cima');
  upBtn.addEventListener('click', () => {
    const selectedTask = document.querySelector('.selected');
    let previousTask;
    if (selectedTask) {
      previousTask = selectedTask.previousElementSibling;
    }
    if (previousTask) {
      const element = {
        text: previousTask.innerText,
        class: previousTask.className,
      };
      previousTask.innerText = selectedTask.innerText;
      previousTask.className = selectedTask.className;
      selectedTask.innerText = element.text;
      selectedTask.className = element.className;
    }
  });
}

function down() {
  const upBtn = document.querySelector('#mover-baixo');
  upBtn.addEventListener('click', () => {
    const selectedTask = document.querySelector('.selected');
    let nextTask;
    if (selectedTask) {
      nextTask = selectedTask.nextElementSibling;
    }
    if (nextTask) {
      const element = {
        text: nextTask.innerText,
        class: nextTask.className,
      };
      nextTask.innerText = selectedTask.innerText;
      nextTask.className = selectedTask.className;
      selectedTask.innerText = element.text;
      selectedTask.className = element.className;
    }
  });
}

window.onload = () => {
  addTask();
  selectTask();
  dblClick();
  clearAllTasks();
  clearCompletedTasks();
  removeSelected();
  saveTasks();
  getTasks();
  up();
  down();
};
