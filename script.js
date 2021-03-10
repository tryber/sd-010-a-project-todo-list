const CREATE_TASK_BTN = 'criar-tarefa';
const INPUT_TEXT_BOX = 'texto-tarefa';
const TASK_LIST = 'lista-tarefas';
const CLEAR_ALL_BTN = 'apaga-tudo';
const CLEAR_COMPLETED_BTN = 'remover-finalizados';

function clearCompletedTasks() {
  const completedTasks = document.querySelectorAll('#lista-tarefas > .completed');
  // I'm sorry about this monstrosity https://stackoverflow.com/questions/4777077/removing-elements-by-class-name helped me to create this, go blame them I guess xD
  Array.from(completedTasks).forEach((task) => task.parentNode.removeChild(task));
}
function createClearCompletedTasksEventListener() {
  const clearCompletedBtn = document.getElementById(CLEAR_COMPLETED_BTN);
  clearCompletedBtn.addEventListener('click', clearCompletedTasks, false);
}
function completeTask(e) {
  if (e.target.nodeName === 'LI') {
    e.target.classList.toggle('completed');
  }
}
function createCompleteTaskEventListener() {
  const taskList = document.getElementById(TASK_LIST);
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event
  taskList.addEventListener('dblclick', completeTask, false);
}
function selectTask(e) {
  if (e.target.nodeName === 'LI') {
    const lastSelected = document.querySelector(`#${TASK_LIST} > .selected`);
    // https://stackoverflow.com/questions/2647867/how-can-i-determine-if-a-variable-is-undefined-or-null I needed a fix for when I select an item list for the first time
    if (lastSelected != null) {
      lastSelected.classList.toggle('selected');
    }
    e.target.classList.toggle('selected');
  }
}
function createSelectTaskEventListener() {
  const taskList = document.getElementById(TASK_LIST);
  taskList.addEventListener('click', selectTask, false);
}
function clearAllTasks() {
  const taskList = document.getElementById(TASK_LIST);
  // I'm not really satisfied with this
  while (taskList.childElementCount > 0) {
    taskList.firstElementChild.remove();
  }
}
function createClearAllTasksEventListener() {
  const clearAllBtn = document.getElementById(CLEAR_ALL_BTN);
  clearAllBtn.addEventListener('click', clearAllTasks, false);
}
function addTask() {
  const inputTextBox = document.getElementById(INPUT_TEXT_BOX);
  const newTask = document.createElement('li');
  newTask.innerText = inputTextBox.value;
  inputTextBox.value = '';
  const taskList = document.getElementById(TASK_LIST);
  taskList.appendChild(newTask);
}
function createAddTaskEventListener() {
  const addTaskBtn = document.getElementById(CREATE_TASK_BTN);
  addTaskBtn.addEventListener('click', addTask, false);
}
window.onload = function init() {
  createAddTaskEventListener();
  createClearAllTasksEventListener();
  createSelectTaskEventListener();
  createCompleteTaskEventListener();
  createClearCompletedTasksEventListener();
  // addSaveListEventListener();
};
