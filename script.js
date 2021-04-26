const taskList = '#lista-tarefas';

function createLi(text) {
  const listItem = document.createElement('li');
  listItem.innerText = text;
  listItem.className = 'task';
  document.getElementById('lista-tarefas').appendChild(listItem);
}

function addItem() {
  const button = document.getElementById('criar-tarefa');
  const textBox = document.getElementById('texto-tarefa');
  button.addEventListener('click', () => {
    const text = textBox.value;
    createLi(text);
    textBox.value = '';
  });
}

// codigo abaixo otimizado apos verificar o codigo de alguns colegas e aprendi o event e o target
function setColor() {
  const list = document.querySelector(taskList);
  list.addEventListener('click', (event) => {
    const selected = document.querySelector('.selected');
    if (selected === null) {
      event.target.classList.add('selected');
    } else {
      selected.classList.remove('selected');
      event.target.classList.add('selected');
    }
  });
}

function doneTaskSelect(array) {
  let result = 0;
  for (let index = 0; index < array.length; index += 1) {
    const element = array[index];
    if (element === 'completed') {
      result = 1;
    }
  }
  return result;
}

function doneTask() {
  const list = document.querySelector(taskList);
  list.addEventListener('dblclick', (event) => {
    const array = event.target.classList;
    const result = doneTaskSelect(array);
    if (result === 1) {
      event.target.classList.remove('completed');
    } else if (result === 0) {
      event.target.classList.add('completed');
    }
  });
}

function clearTasks() {
  const list = document.querySelector(taskList);
  const btn = document.querySelector('#apaga-tudo');
  btn.addEventListener('click', () => {
    while (list.hasChildNodes()) { // essa parte do código vi no w3school
      list.removeChild(list.firstChild);
    }
  });
}

function clearCompleted() {
  const btn = document.querySelector('#remover-finalizados');
  const done = document.getElementsByClassName('completed');
  btn.addEventListener('click', () => {
    while (done.length > 0) {
      done[0].remove();
    }
  });
}

function removeSelected() {
  const btn = document.querySelector('#remover-selecionado');
  btn.addEventListener('click', () => {
    document.querySelector('.selected').remove();
  });
}

function saveList() {
  const btn = document.querySelector('#salvar-tarefas');
  btn.addEventListener('click', () => {
    const listItems = document.getElementsByClassName('task');
    const list = [];
    for (let index = 0; index < listItems.length; index += 1) {
      list.push({
        content: listItems[index].textContent,
        class: listItems[index].className,
      });
    }
    localStorage.setItem('list', JSON.stringify(list));
  });
}

function createLiNew(object) {
  const listItem = document.createElement('li');
  listItem.innerText = object.content;
  listItem.className = object.class;
  document.getElementById('lista-tarefas').appendChild(listItem);
}

function readLocalStorage() {
  if (localStorage.getItem('list') !== null) {
    const list = JSON.parse(localStorage.getItem('list'));
    list.forEach((element) => {
      createLiNew(element);
    });
  }
}

window.onload = function run() {
  readLocalStorage();
  addItem();
  setColor();
  doneTask();
  clearTasks();
  clearCompleted();
  saveList();
  removeSelected();
};
