function createTask() {
  const selectInput = document.querySelector('#texto-tarefa');
  const list = document.createElement('li');
  const tasks = document.querySelector('#lista-tarefas');
  list.innerText = selectInput.value;
  tasks.appendChild(list);
  selectInput.value = '';
}

const task = document.querySelector('#criar-tarefa');
task.addEventListener('click', createTask);

function addSelect(evt) {
  const select = document.querySelector('.selected');
  if (select) {
    select.classList.remove('selected');
    evt.target.classList.add('selected');
  } else {
    evt.target.classList.add('selected');
  }
}
const addBackground = document.getElementById('lista-tarefas');
addBackground.addEventListener('click', addSelect);

// REQUISITO RESOLVIDO BASEADO EM EXERCICIO COURSE

function addLineThrough(evt) {
  if (evt.target.classList.contains('completed')) {
    evt.target.classList.remove('completed');
  } else {
    evt.target.classList.add('completed');
  }
}

const addLine = document.getElementById('lista-tarefas');
addLine.addEventListener('dblclick', addLineThrough);

function clear() {
  const list = document.querySelectorAll('li');
  for (let index = 0; index < list.length; index += 1) {
    list[index].remove();
  }
}

const clearTasks = document.getElementById('apaga-tudo');
clearTasks.addEventListener('click', clear);

function clearFinishTask() {
  const list = document.querySelectorAll('li');
  for (let index = 0; index < list.length; index += 1) {
    if (list[index].classList.contains('completed')) {
      list[index].remove();
    }
  }
}

const clearFinish = document.getElementById('remover-finalizados');
clearFinish.addEventListener('click', clearFinishTask);

function clearSelects() {
  const removeSelect = document.querySelector('.selected');
  removeSelect.remove();
}

const clearSelect = document.getElementById('remover-selecionado');
clearSelect.addEventListener('click', clearSelects);
