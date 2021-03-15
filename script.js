const btnTask = document.querySelector('#criar-tarefa');
const tasksList = document.querySelector('#lista-tarefas');
const deleteAll = document.querySelector('#apaga-tudo');
const deleteCompleted = document.querySelector('#remover-finalizados');
const saveTasks = document.querySelector('#salvar-tarefas');
const moveUp = document.querySelector('#mover-cima');
const moveDown = document.querySelector('#mover-baixo');
const deleteSelected = document.querySelector('#remover-selecionado');

btnTask.addEventListener('click', function () {
  const textTask = document.getElementById('texto-tarefa').value;
  document.getElementById('texto-tarefa').value = '';
  const list = document.createElement('li');
  list.innerText = textTask;
  tasksList.appendChild(list);
  list.classList.add('listItem');
  list.style.backgroundColor = 'white';
});

tasksList.addEventListener('click', function (event) {
  const lists = document.querySelectorAll('li');
  for (let list = 0; list < lists.length; list += 1) {
    if (lists[list].style.backgroundColor = 'white') {
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
      lists[list].classList.remove('selected');
      event.target.classList.add('selected');
    } else {
      event.target.backgroundColor = 'rgb(128, 128, 128)';
      event.target.classList.add('selected');
    }
  }
});

tasksList.addEventListener('dblclick', function (event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
});

deleteAll.addEventListener('click', function () {
  const listItemsToDelete = document.querySelectorAll('li');
  for (let indexEraseAll = 0; indexEraseAll < listItemsToDelete.length; indexEraseAll += 1) {
    listItemsToDelete[indexEraseAll].outerHTML = '';
    storageTasks();
  }
});

deleteCompleted.addEventListener('click', function () {
  const listItemsComplete = document.querySelectorAll('li');
  for (let indexCompleted = 0; indexCompleted < listItemsComplete.length; indexCompleted += 1) {
    if (listItemsComplete[indexCompleted].classList.contains('completed')) {
      listItemsComplete[indexCompleted].outerHTML = '';
      storageTasks();
    }
  }
});

function storageTasks() { 
  { localStorage.setItem('tasks', tasksList.innerHTML) };
}

saveTasks.addEventListener('click', function () {
  storageTasks();
});

function loadTasks() {
  { tasksList.innerHTML = localStorage.getItem('tasks') };
}

moveUp.addEventListener('click', function () {
  const listItems = document.querySelectorAll('li');
  const itemCompleted = document.querySelector('.selected');
  if (listItems[0] === itemCompleted) {
    return;
  }
  for (let index = 0; index < listItems.length; index += 1) {
    if (listItems[index] === itemCompleted) {
      itemCompleted.outerHTML = listItems[index - 1].outerHTML;
      listItems[index - 1].outerHTML = itemCompleted.outerHTML;
    } storageTasks();
  }
});

moveDown.addEventListener('click', function () {
  const listItems = document.querySelectorAll('li');
  const itemCompleted = document.querySelector('.selected');
  if (listItems[listItems.length - 1] === itemCompleted) {
    return;
  }
  for (let index = 0; index < listItems.length; index += 1) {
    if (listItems[index] === itemCompleted) {
      itemCompleted.outerHTML = listItems[index + 1].outerHTML;
      listItems[index + 1].outerHTML = itemCompleted.outerHTML;
    } storageTasks();
  }
});

deleteSelected.addEventListener('click', function () {
  const listItemsComplete = document.querySelectorAll('li');
  for (let indexCompleted = 0; indexCompleted < listItemsComplete.length; indexCompleted += 1) {
    if (listItemsComplete[indexCompleted].classList.contains('selected')) {
      listItemsComplete[indexCompleted].outerHTML = '';
      storageTasks();
    }
  }
});

window.onload = function () {
  loadTasks();
};

// Para auxilio no entendimento da logica e alguns exemplos de código foi necessária
// a busca por suporte com meus colegas no Slack e também ao consultar o código dos mesmos.
// Guilherme Lira
// Renzo
// também foram realizadas consultas nos sites:
// https://www.w3schools.com/jsref/prop_html_outerhtml.asp
// https://youtu.be/Ttf3CEsEwMQ
// https://youtu.be/ZGMJqxIkAb0