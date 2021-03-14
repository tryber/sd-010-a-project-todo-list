const selectButton = document.querySelector('#salvar-tarefas');
const selectOl = document.querySelector('#lista-tarefas');

// Requirement 13;

function moveUp() {
  const arrayList = document.querySelectorAll('li');
  for (let index = 0; index < arrayList.length; index += 1) {
    if (arrayList[index].className === 'selected' && index > 0) {
      const pos1 = arrayList[index].innerHTML;
      const pos2 = arrayList[index - 1].innerHTML;

      arrayList[index].innerHTML = pos2;
      arrayList[index - 1].innerHTML = pos1;
      arrayList[index - 1].classList.add('selected');
      arrayList[index].classList.remove('selected');
    }
  }
}

function moveDown() {
  const arrayList = document.querySelectorAll('li');
  for (let index = arrayList.length - 1; index >= 0; index -= 1) {
    if (arrayList[index].className === 'selected' && index < arrayList.length - 1) {
      const pos1 = arrayList[index].innerHTML;
      const pos2 = arrayList[index + 1].innerHTML;

      arrayList[index].innerHTML = pos2;
      arrayList[index + 1].innerHTML = pos1;
      arrayList[index + 1].classList.add('selected');
      arrayList[index].classList.remove('selected');
    }
  }
}

function addEventClickButtonUp() {
  const selectButtonUp = document.querySelector('#mover-cima');
  selectButtonUp.addEventListener('click', moveUp);
}
addEventClickButtonUp();

function addEventClickButtonDown() {
  const selectButtonDown = document.querySelector('#mover-baixo');
  selectButtonDown.addEventListener('click', moveDown);
}
addEventClickButtonDown();

// Requirement 9;
const twoClass = 'completed selected';
function taskCompleted() {
  const selectLis = document.querySelectorAll('li');
  for (let index = 0; index < selectLis.length; index += 1) {
    if (selectLis[index].className === 'selected') {
      selectLis[index].classList.add('completed');
    } else if (selectLis[index].className === twoClass) {
      selectLis[index].classList.remove('completed');
    }
  }
}

// Requirement 7, 8;

function changeBackgroundColor(Event) {
  const task = Event.target;
  const selectLis = document.querySelectorAll('li');
  for (let index = 0; index < selectLis.length; index += 1) {
    if (selectLis[index].className === 'selected'
      || selectLis[index].className === 'selected completed'
      || selectLis[index].className === twoClass) {
      selectLis[index].classList.remove('selected');
    }
  }
  task.classList.add('selected');
}

function savePage() {
  localStorage.setItem('Lis', selectOl.innerHTML);
}

function clikButtonSaveTasks() {
  selectButton.addEventListener('click', savePage);
}

function getItemsPage() {
  const getLi = localStorage.getItem('Lis');
  selectOl.innerHTML = getLi;
  const selectLis = document.querySelectorAll('li');
  for (let index = 0; index < selectLis.length; index += 1) {
    selectLis[index].addEventListener('click', changeBackgroundColor);
    selectLis[index].addEventListener('dblclick', taskCompleted);
  }
}
getItemsPage();
clikButtonSaveTasks();

// Requirement 5, 6;

function addTask() {
  const selectInputText = document.querySelector('#texto-tarefa');
  const selectOL = document.querySelector('#lista-tarefas');
  const createLI = document.createElement('li');
  createLI.innerHTML = selectInputText.value;
  createLI.addEventListener('click', changeBackgroundColor);
  createLI.addEventListener('dblclick', taskCompleted);
  selectOL.appendChild(createLI);
  selectInputText.value = '';
}

function createTask() {
  const selectButtonCreate = document.querySelector('#criar-tarefa');
  selectButtonCreate.addEventListener('click', addTask);
}

createTask();

// Requirement 10;
// pesquisado o uso da função .remove() em: https://developer.mozilla.org/pt-BR/docs/Web/API/ChildNode/remove
function removeTask() {
  const selectLis = document.querySelectorAll('li');
  for (let index = 0; index < selectLis.length; index += 1) {
    selectLis[index].remove('li');
  }
}

function clickButtonClearTasks() {
  const selectButtonClear = document.querySelector('#apaga-tudo');
  selectButtonClear.addEventListener('click', removeTask);
}
clickButtonClearTasks();

// Requirement 11;

function removeTasksAccomplished() {
  const selectLis = document.querySelectorAll('li');
  for (let index = 0; index < selectLis.length; index += 1) {
    if (selectLis[index].className === 'completed'
      || selectLis[index].className === 'selected completed'
      || selectLis[index].className === twoClass) {
      selectLis[index].remove('li');
    }
  }
}

function clickButtonClearTasksAccomplished() {
  const selectButtonClear = document.querySelector('#remover-finalizados');
  selectButtonClear.addEventListener('click', removeTasksAccomplished);
}
clickButtonClearTasksAccomplished();

function removeTaskSelected() {
  const select = document.querySelector('.selected');

  select.remove();
}

// Requirement 14;

function clickButtonRemoveSelectedTask() {
  const selectButtonClear = document.querySelector('#remover-selecionado');
  selectButtonClear.addEventListener('click', removeTaskSelected);
}
clickButtonRemoveSelectedTask();
