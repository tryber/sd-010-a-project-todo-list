const list = document.getElementById('lista-tarefas');
const creatTaskButton = document.querySelector('#criar-tarefa');
const clearTasksButton = document.querySelector('#apaga-tudo');
const clearCompletedButton = document.querySelector('#remover-finalizados');
const saveTasksButton = document.querySelector('#salvar-tarefas');
const removeSelectedButton = document.querySelector('#remover-selecionado');

function creatList() {
  const input = document.querySelector('#texto-tarefa');
  const inputTask = input.value;
  if (inputTask !== '') {
    const newItem = document.createElement('li');
    newItem.innerHTML = inputTask;
    list.appendChild(newItem);
    input.value = '';
  }
}

function selectList(e) {
  for (let i = 0; i < list.children.length; i += 1) {
    if (list.children[i] !== e.target) {
      list.children[i].style.backgroundColor = 'white';
    }
  }
  e.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function completTask(e) {
  e.target.classList.toggle('completed');
}

function clearTasks() {
  const reset = document.querySelector('#lista-tarefas');
  reset.innerHTML = '';
}

function clearComplet() {
  const completed = document.querySelectorAll('.completed');
  for (let i = 0; i < completed.length; i += 1) {
    completed[i].remove();
  }
}

function saveTasks() {
  localStorage.setItem(1, list.innerHTML);
}

function loadSavedTasks() {
  list.innerHTML = localStorage.getItem(1);
}

function removeSelected() {
  const selectedItem = document.querySelector('.selected');
  list.removeChild(selectedItem);
}

function addClassSelected(e) {
  const { target } = e;
  const selectedItem = document.querySelectorAll('.selected');
  selectedItem.forEach((el) => {
    if (el !== target) {
      el.classList.remove('selected');
    }
  });
  target.classList.add('selected');
}

window.onload = loadSavedTasks;

creatTaskButton.addEventListener('click', creatList);
list.addEventListener('click', selectList);
list.addEventListener('dblclick', completTask);
list.addEventListener('click', addClassSelected);
clearTasksButton.addEventListener('click', clearTasks);
clearCompletedButton.addEventListener('click', clearComplet);
saveTasksButton.addEventListener('click', saveTasks);
removeSelectedButton.addEventListener('click', removeSelected);
