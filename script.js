function getInput() {
  const inputValue = document.getElementById('texto-tarefa').value;
  return inputValue;
}

function removeBackground() {
  const listRmItem = document.querySelectorAll('.selected');

  Array.from(listRmItem).forEach((item) => {
    item.classList.remove('selected');
  });
}

function cleanFinished() {
  const clearFinishedTasksButton = document.getElementById('remover-finalizados');
  const list = document.querySelector('ol');
  clearFinishedTasksButton.addEventListener('click', () => {
    const tasks = document.querySelectorAll('.completed');
    for (const task of tasks) {
      list.removeChild(task);
    }
  });
}

function cleanList() {
  const clearButton = document.getElementById('apaga-tudo');
  const list = document.querySelector('ol');
  clearButton.addEventListener('click', () => {
    list.innerHTML = '';
  });
}

function clickListItem(itemClick) {
  itemClick.addEventListener('click', (event) => {
    const element = event.target;
    removeBackground();
    element.classList.add('selected');
  });
}

function dblClickListItem(itemElement) {
  itemElement.addEventListener('dblclick', (event) => {
    const element = event.target;
    //  Para saber mais sobre toggle acessei o seguinte link:
    //  https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList
    element.classList.toggle('completed');
  });
}

function addListItem() {
  const ol = document.getElementById('lista-tarefas');
  const listElement = document.createElement('li');
  listElement.innerHTML = getInput();
  ol.appendChild(listElement);
  clickListItem(listElement);
  dblClickListItem(listElement);
}

function clickButtonAddTask() {
  const button = document.getElementById('criar-tarefa');
  const input = document.getElementById('texto-tarefa');

  button.addEventListener('click', () => {
    addListItem();
    input.value = '';
  });
}

window.onload = function startSession() {
  clickButtonAddTask();
  cleanList();
  cleanFinished();
};
