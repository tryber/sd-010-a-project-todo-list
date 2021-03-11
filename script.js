const taskList = document.getElementById('lista-tarefas');
const addTaskBtn = document.getElementById('criar-tarefa');
const eraseAllBtn = document.getElementById('apaga-tudo');
const eraseCompletedBtn = document.getElementById('remover-finalizados');
const saveListBtn = document.getElementById('salvar-tarefas');
const savedList = localStorage['latest-list'];
const moveUpBtn = document.getElementById('mover-cima');
const moveDownBtn = document.getElementById('mover-baixo');
const eraseSelectedBtn = document.getElementById('remover-selecionado');

// Adicionar itens do localStorage, caso existam
if (savedList !== undefined) {
  taskList.innerHTML = savedList;
}

function addTaskToList() {
  const newTask = document.createElement('li');
  const task = document.getElementById('texto-tarefa').value;
  newTask.innerText = task;
  taskList.appendChild(newTask);
  document.getElementById('texto-tarefa').value = '';
}

// Adicionar event listener no botão
addTaskBtn.addEventListener('click', addTaskToList);

function singleClickItem(event) {
  const clickedItem = event.target;
  const currentlySelectedItem = document.querySelector('.selected');
  if (currentlySelectedItem !== null) {
    // Remove a classe selected do item previamente selecionado
    currentlySelectedItem.classList.remove('selected');
  }
  clickedItem.classList.add('selected');
}

function doubleClickItem(event) {
  const doubleClickedItem = event.target;
  if (doubleClickedItem.classList.contains('completed')) {
    doubleClickedItem.classList.remove('completed');
  } else {
    doubleClickedItem.classList.add('completed');
  }
}

taskList.addEventListener('click', singleClickItem);
taskList.addEventListener('dblclick', doubleClickItem);

function eraseFullList() {
  taskList.innerHTML = '';
}
eraseAllBtn.addEventListener('click', eraseFullList);

function eraseCompletedItems() {
  const completedItems = document.querySelectorAll('.completed');
  for (let item = 0; item < completedItems.length; item += 1) {
    completedItems[item].remove();
  }
}
eraseCompletedBtn.addEventListener('click', eraseCompletedItems);

function saveListToLocalStorage() {
  // Salva a lista atual no local storage
  const latestList = document.getElementById('lista-tarefas').innerHTML;
  localStorage.setItem('latest-list', latestList);
}
saveListBtn.addEventListener('click', saveListToLocalStorage);

function moveItemUp() {
  const selected = document.querySelector('.selected');
  if (selected !== null) {
    const previous = selected.previousElementSibling;
    if (previous !== null) {
      const temp = selected.outerHTML;
      selected.outerHTML = previous.outerHTML;
      previous.outerHTML = temp;
    } else {
      // Faz nada
    }
  } else {
    // Faz nada
  }
}
moveUpBtn.addEventListener('click', moveItemUp);

function moveItemDown() {
  const selected = document.querySelector('.selected');
  if (selected !== null) {
    const next = selected.nextElementSibling;
    if (next !== null) {
      const temp = selected.outerHTML;
      selected.outerHTML = next.outerHTML;
      next.outerHTML = temp;
    } else {
      // Faz nada
    }
  } else {
    // Faz nada
  }
}
moveDownBtn.addEventListener('click', moveItemDown);

function eraseSelected() {
  const selected = document.querySelector('.selected');
  selected.remove();
}
eraseSelectedBtn.addEventListener('click', eraseSelected);
