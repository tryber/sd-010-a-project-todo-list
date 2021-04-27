function add() {
  const getBtn = document.getElementById('criar-tarefa');
  const getInputText = document.getElementById('texto-tarefa');
  const getList = document.getElementById('lista-tarefas');

  getBtn.addEventListener('click', () => {
    const item = document.createElement('li');
    item.addEventListener('dblclick', () => {
    });
    item.addEventListener('click', () => {
      item.classList.add('selected');
    });
    getList.appendChild(item).innerText = getInputText.value;
    getInputText.value = '';
  });
}

function clickEvent(event) {
  const currentSelected = document.querySelectorAll('.selected');
  for (let index = 0; index < currentSelected.length; index += 1) {
    currentSelected[index].classList.remove('selected');
    const classSelected = event.target;
    classSelected.classList.add('selected');
  }
}
function clickDel(event) {
  const getCompleted = event.target;
  if (getCompleted.classList.value.includes('completed')) {
    getCompleted.classList.remove('completed');
  } else {
    getCompleted.classList.add('completed');
  }
}

function swapSelected() {
  const getSelected = document.getElementById('lista-tarefas');
  getSelected.addEventListener('click', clickEvent);
}

function CleanAll() {
  const getAllList = document.getElementById('lista-tarefas');
  while (getAllList.firstChild) {
    getAllList.firstChild.remove();
  }
  localStorage.clear();
}

function swapCompleted() {
  const getSelected = document.getElementById('lista-tarefas');
  getSelected.addEventListener('dblclick', clickDel);
}

function cleanAllListener() {
  const getCleanButton = document.getElementById('apaga-tudo');
  getCleanButton.addEventListener('click', CleanAll);
}

function cleanCompleted() {
  const getAllList = document.querySelectorAll('li');
  for (let index = 0; index < getAllList.length; index += 1) {
    if (getAllList[index].classList.value.includes('completed')) {
      getAllList[index].remove();
    }
  }
}

function cleanCompletedListener() {
  const getCleanButton = document.getElementById('remover-finalizados');
  getCleanButton.addEventListener('click', cleanCompleted);
}

function getLocalStorage() {
  document.querySelector('ol').innerHTML = localStorage.getItem('item');
}

function saveTasks() {
  document.getElementById('salvar-tarefas').addEventListener('click', () => {
    localStorage.setItem('item', document.querySelector('ol').innerHTML);
  });
}
function modifyPriority() {
  document.getElementById('mover-cima').addEventListener('click', () => {
    const getAllList = document.querySelectorAll('li');
    const getParent = document.querySelector('ol');
    for (let index = 1; index < getAllList.length; index += 1) {
      if (getAllList[index] === document.getElementsByClassName('selected')[0]) {
        getParent.insertBefore(document
          .getElementsByClassName('selected')[0], getAllList[index - 1]);
      }
    }
  });
  document.getElementById('mover-baixo').addEventListener('click', () => {
    const getAllList = document.querySelectorAll('li');
    const getParent = document.querySelector('ol');
    for (let index = 0; index < getAllList.length; index += 1) {
      if (getAllList[index] === document.getElementsByClassName('selected')[0]) {
        getParent.insertBefore(document
          .getElementsByClassName('selected')[0], getAllList[index + 2]);
      }
    }
  });
}

function removeSelected() {
  document.getElementById('remover-selecionado').addEventListener('click', () => {
    const getSelected = document.querySelector('.selected');
    getSelected.remove();
  });
}

window.onload = function () {
  add();
  swapSelected();
  swapCompleted();
  cleanAllListener();
  cleanCompletedListener();
  getLocalStorage();
  saveTasks();
  removeSelected();
  modifyPriority();
};

// Referências:
// https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
