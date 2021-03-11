const taskListContainer = document.querySelector('#lista-tarefas');

function removeSelected() {
  const selected = document.querySelector('.selected');
  selected.parentNode.removeChild(selected);
}

function clickRemove() {
  const removeButton = document.querySelector('#remover-selecionado');

  removeButton.addEventListener('click', removeSelected);
}

function findSelected(list) {
  let selectedIndex;
  for (let index = 0; index < list.length; index += 1) {
    if (list[index].className.includes('selected')) {
      selectedIndex = index;
    }
  }
  return selectedIndex;
}

function moveDown() {
  const list = document.querySelectorAll('.task');
  if (list.length <= 1) {
    return;
  }
  const selectedIndex = findSelected(list);
  if (selectedIndex + 1 < list.length) {
    const selectedItem = list[selectedIndex];
    const nextItem = list[selectedIndex + 1];
    const nextItemHolder = nextItem.outerHTML;
    nextItem.outerHTML = selectedItem.outerHTML;
    selectedItem.outerHTML = nextItemHolder;
  }
}

function buttonDown() {
  const buttonMoveDown = document.querySelector('#mover-baixo');

  buttonMoveDown.addEventListener('click', moveDown);
}

function moveUp() {
  const list = document.querySelectorAll('.task');
  if (list.length <= 1) {
    return;
  }
  const selectedIndex = findSelected(list);
  if (selectedIndex > 0) {
    const selectedItem = list[selectedIndex];
    const previousItem = list[selectedIndex - 1];
    const previousItemHolder = previousItem.outerHTML;
    previousItem.outerHTML = selectedItem.outerHTML;
    selectedItem.outerHTML = previousItemHolder;
  }
}

function buttonUp() {
  const buttonMoveUp = document.querySelector('#mover-cima');

  buttonMoveUp.addEventListener('click', moveUp);
}

function displayStoraged() {
  if (localStorage.length > 0) {
    for (let index = 0; index < localStorage.length; index += 1) {
      const saved = `list${[index]}`;
      const listItem = document.createElement('li');
      taskListContainer.appendChild(listItem);
      listItem.outerHTML = localStorage[saved];
    }
  }
}

function saveStorage() {
  const taskList = document.querySelectorAll('.task');
  localStorage.clear();

  for (let index = 0; index < taskList.length; index += 1) {
    const list = taskList[index].outerHTML;
    const item = `list${[index]}`;
    localStorage.setItem(item, list);
  }
}

function setStoraged() {
  const buttonSaveTasks = document.querySelector('#salvar-tarefas');

  buttonSaveTasks.addEventListener('click', saveStorage);
}

function removeCompleted() {
  const completedList = document.querySelectorAll('.completed');

  for (let index = completedList.length - 1; index >= 0; index -= 1) {
    completedList[index].parentNode.removeChild(completedList[index]);
  }
}

function removeCompletedButton() {
  const completedButton = document.querySelector('#remover-finalizados');
  completedButton.addEventListener('click', removeCompleted);
}

function clearList() {
  const taskList = document.querySelectorAll('.task');

  for (let index = taskList.length - 1; index >= 0; index -= 1) {
    taskList[index].parentNode.removeChild(taskList[index]);
  }
}

function clearButtonClick() {
  const clearButton = document.querySelector('#apaga-tudo');

  clearButton.addEventListener('click', clearList);
}

function lineThrough(event) {
  const selectedTask = event.target;
  if (selectedTask.className.includes('completed')) {
    selectedTask.classList.remove('completed');
  } else {
    selectedTask.classList.add('completed');
  }
}

function setComplete() {
  taskListContainer.addEventListener('dblclick', lineThrough);
}

function changeTaskBgColor(event) {
  const selectedTask = event.target;
  const clearPreviousTask = document.querySelector('.selected');
  if (clearPreviousTask !== null) {
    clearPreviousTask.classList.remove('selected');
  }
  if (selectedTask.className.includes('task')) {
    selectedTask.classList.add('selected');
  }
}

function selectTask() {
  taskListContainer.addEventListener('click', changeTaskBgColor);
}

function getNewTask() {
  const taskText = document.querySelector('#texto-tarefa');
  const text = taskText.value;
  taskText.value = '';
  return text;
}

function addTask() {
  const text = getNewTask();

  const newTask = document.createElement('li');
  newTask.innerText = text;
  newTask.className = 'task';
  taskListContainer.appendChild(newTask);
}

function createTask() {
  const createTaskButton = document.querySelector('#criar-tarefa');

  createTaskButton.addEventListener('click', addTask);
}

createTask();
selectTask();
setComplete();
clearButtonClick();
removeCompletedButton();
setStoraged();
displayStoraged();
buttonUp();
buttonDown();
clickRemove();
