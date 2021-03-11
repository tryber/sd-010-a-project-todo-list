const inputAddTask = document.getElementById('texto-tarefa');
const buttonAddTask = document.getElementById('criar-tarefa');
const tasksList = document.getElementById('lista-tarefas');
const buttonClearTasks = document.getElementById('apaga-tudo');
const buttonClearCompleted = document.getElementById('remover-finalizados');
const buttonSaveTasks = document.getElementById('salvar-tarefas');
const buttonMoveTaskUp = document.getElementById('mover-cima');
const buttonMoveTaskDown = document.getElementById('mover-baixo');
const buttonRemoveTask = document.getElementById('remover-selecionado');

const colors = {
  selected: 'rgb(128, 128, 128)',
};

const tasksFunctions = {
  selectTask(element) {
    const tasks = tasksList.children;
    for (let index = 0; index < tasks.length; index += 1) {
      const task = tasks[index];
      task.style.backgroundColor = 'transparent';
      task.classList.remove('selected');
    }

    const task = element.target;
    task.style.backgroundColor = colors.selected;
    task.classList.add('selected');
  },

  completeTask(element) {
    const task = element.target;
    task.classList.toggle('completed');
  },
};

function buttonActions(button, arrayOfActions) {
  for (let index = 0; index < arrayOfActions.length; index += 1) {
    const action = arrayOfActions[index];
    button.addEventListener('click', action);
  }
}

function addTask() {
  const newTask = document.createElement('li');
  newTask.textContent = inputAddTask.value;
  tasksList.appendChild(newTask);
  inputAddTask.value = '';
}

function getTasks() {
  const tasks = tasksList.children;
  for (let index = 0; index < tasks.length; index += 1) {
    const task = tasks[index];
    task.addEventListener('click', tasksFunctions.selectTask);
    task.addEventListener('dblclick', tasksFunctions.completeTask);
  }
  return tasks;
}

function clearTasks() {
  const tasks = document.querySelectorAll('li');
  tasks.forEach((task) => {
    task.remove();
  });
}

function clearCompleted() {
  const tasks = document.querySelectorAll('li');
  tasks.forEach((task) => {
    if (task.classList.contains('completed')) {
      task.remove();
    }
  });
}

function saveTasks() {
  const tasks = getTasks();
  const tasksToStorage = [];
  for (let index = 0; index < tasks.length; index += 1) {
    let task = tasks[index];
    const taskContent = task.textContent;
    const taskIsCompleted = task.classList.contains('completed');
    task = `${taskContent}/${taskIsCompleted}`;
    tasksToStorage.push(task);
  }
  localStorage.setItem('tasks', tasksToStorage);
}

function taskToObject(currentTask) {
  let task = currentTask;
  task = task.split('/');
  task = {
    content: task[0],
    isCompleted: task[1] === 'true',
  };
  return task;
}

function markIfTaskIsCompleted(task, taskElement) {
  if (task.isCompleted === true) {
    taskElement.classList.add('completed');
  }
}

function loadTasks() {
  const storageTasks = localStorage.getItem('tasks');
  const tasks = storageTasks.split(',');
  for (let index = 0; index < tasks.length; index += 1) {
    if (storageTasks !== '') {
      const task = taskToObject(tasks[index]);
      const taskElement = document.createElement('li');
      taskElement.textContent = task.content;
      markIfTaskIsCompleted(task, taskElement);
      tasksList.appendChild(taskElement);
    }
  }
  getTasks();
}

function getSelectedTask() {
  return document.querySelector('li.selected');
}

function cloneTask(copy, taskSelected) {
  const copyTask = copy;
  copyTask.textContent = taskSelected.textContent;
  copyTask.classList.add('selected');
  copyTask.style.backgroundColor = colors.selected;
  copyTask.addEventListener('click', tasksFunctions.selectTask);
  copyTask.addEventListener('dblclick', tasksFunctions.completeTask);
  if (taskSelected.classList.contains('completed')) {
    copyTask.classList.add('completed');
  }
}

function moveTaskUp() {
  const taskSelected = getSelectedTask();
  if (taskSelected !== null) {
    const copyTask = document.createElement('li');
    cloneTask(copyTask, taskSelected);

    if (taskSelected.previousSibling == null) {
      taskSelected.click();
    } else {
      tasksList.insertBefore(copyTask, taskSelected.previousSibling);
      taskSelected.remove();
    }
  }
}

function conditionsToMoveDown(copyTask, taskSelected) {
  if (taskSelected.nextSibling != null) {
    taskSelected.nextSibling.insertAdjacentElement('afterend', copyTask);
    taskSelected.remove();
  } else if (taskSelected.nextSibling == null) {
    taskSelected.click();
  } else {
    tasksList.insertBefore(copyTask, taskSelected.nextSibling.nextSibling);
    taskSelected.remove();
  }
}

function moveTaskDown() {
  const taskSelected = getSelectedTask();
  if (taskSelected !== null) {
    const copyTask = document.createElement('li');
    cloneTask(copyTask, taskSelected);
    conditionsToMoveDown(copyTask, taskSelected);
  }
}

function removeTask() {
  const task = getSelectedTask();
  task.remove();
}

if (localStorage.getItem('tasks') && localStorage.getItem('tasks').length !== 0) loadTasks();
buttonActions(buttonAddTask, [addTask, getTasks]);
buttonActions(buttonClearTasks, [clearTasks]);
buttonActions(buttonClearCompleted, [clearCompleted]);
buttonActions(buttonSaveTasks, [saveTasks]);
buttonActions(buttonMoveTaskUp, [moveTaskUp]);
buttonActions(buttonMoveTaskDown, [moveTaskDown]);
buttonActions(buttonRemoveTask, [removeTask]);
