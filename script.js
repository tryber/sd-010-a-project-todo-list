const list = document.getElementById('lista-tarefas');

const addBtn = document.querySelector('#criar-tarefa');

const liElement = document.getElementsByTagName('li');

const removeAllBtn = document.getElementById('apaga-tudo');

const removeCheck = document.getElementById('remover-finalizados');

const btnRemoveSelect = document.getElementById('remover-selecionado');

const btnSaveList = document.getElementById('salvar-tarefas');

// function loadSavedList() {
//   list.innerHTML = localStorage.getItem('key');
// }

// loadSavedList();

// function saveList() {
//   localStorage.setItem('saved', list.innerHTML);
// }

// btnSaveList.addEventListener('click', saveList);

btnSaveList.addEventListener('click', () => {
  localStorage.setItem('key', list.innerHTML);
});

const savedList = () => {
  if (localStorage.getItem('key') !== undefined) {
    const listItens = localStorage.getItem('key');
    list.innerHTML = listItens;
  }
};

savedList();

function removeSelect() {
  for (let index = 0; index < liElement.length; index += 1) {
    if (liElement[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      list.removeChild(liElement[index]);
    }
  }
}

btnRemoveSelect.addEventListener('click', removeSelect);

function addList() {
  const liList = document.createElement('li');
  const text = document.querySelector('#texto-tarefa');
  const textValue = text.value;
  liList.innerHTML = textValue;
  list.appendChild(liList);
  text.value = '';
}

addBtn.addEventListener('click', addList);

function check(event) {
  const eventTarget = event.target;
  if (eventTarget.classList.contains('completed')) {
    eventTarget.classList.remove('completed');
    eventTarget.style.textDecoration = '';
  } else {
    eventTarget.classList.add('completed');
    eventTarget.style.textDecoration = 'line-through solid rgb(0,0,0)';
  }
}

list.addEventListener('dblclick', check);

function paintGrey(event) {
  const eventTarget = event.target;
  for (let index = 0; index < liElement.length; index += 1) {
    if (liElement[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      liElement[index].style.removeProperty('background-color');
    }
  }
  eventTarget.style.backgroundColor = 'rgb(128,128,128)';
}

list.addEventListener('click', paintGrey);

function removeAll() {
  list.innerHTML = '';
}

removeAllBtn.addEventListener('click', removeAll);

function removeCheckItem() {
  const selectedItens = document.querySelectorAll('.completed');
  for (let index = 0; index < selectedItens.length; index += 1) {
    if (selectedItens[index].classList.contains('completed')) {
      list.removeChild(selectedItens[index]);
    }
  }
}
removeCheck.addEventListener('click', removeCheckItem);
