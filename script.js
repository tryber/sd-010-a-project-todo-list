const creatTaskButton = document.querySelector('#criar-tarefa');
const task = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const itens = document.getElementsByClassName('list-item');
const clearAllButton = document.getElementById('apaga-tudo');
const clearCompletedButton = document.getElementById('remover-finalizados');
const clearSelectedButton = document.getElementById('remover-selecionado');

function creatTask() {
  const list = document.createElement('li');
  list.innerText = task.value;
  task.value = '';
  list.className = 'list-item';
  taskList.appendChild(list);
}
creatTaskButton.addEventListener('click', creatTask);

// função realizada com a ajuda do Mauricio Viegas!
function addBackgroundColor() {
  taskList.addEventListener('click', (event) => {
    const backgroundColor = event.target;
    for (let index = 0; index < itens.length; index += 1) {
      if (itens[index].className.includes('selected')) {
        itens[index].classList.remove('selected');
      }
    }
    backgroundColor.classList.add('selected');
  });
}
addBackgroundColor();

function taskCompleted() {
  taskList.addEventListener('dblclick', (event) => {
    const completTask = event.target;
    if (completTask.className.includes('completed')) {
      completTask.classList.remove('completed');
      completTask.classList.remove('selected');
    } else {
      completTask.classList.remove('selected');
      completTask.classList.add('completed');
    }
  });
}
taskCompleted();

function clearAll() {
  taskList.innerHTML = '';
}
clearAllButton.addEventListener('click', clearAll);

// função realizada com a ajuda do Patrik Morais!
function clearTaskCompleted() {
  const intensCompleted = document.querySelectorAll('.completed');
  for (let index = 0; index < intensCompleted.length; index += 1) {
    taskList.removeChild(intensCompleted[index]);
  }
}
clearCompletedButton.addEventListener('click', clearTaskCompleted);

// quesito 14
function clearTaskSelected() {
  for (let index = 0; index < itens.length; index += 1) {
    if (itens[index].className.includes('selected')) {
      taskList.removeChild(itens[index]);
    }
  }
}
clearSelectedButton.addEventListener('click', clearTaskSelected);
