const contentInput = document.getElementById('texto-tarefa');
const orderList = document.getElementById('lista-tarefas');
const buttonRemoveCompleted = document.getElementById('remover-finalizados');
const buttonRemoveSelected = document.getElementById('remover-selecionado');
const buttonAdd = document.getElementById('criar-tarefa');
const buttonClear = document.getElementById('apaga-tudo');
const line = document.getElementsByClassName('line');
const selected = document.getElementsByClassName('selected');
const completed = document.getElementsByClassName('completed');
const moveToUp = document.getElementById('mover-cima');
const moveToDown = document.getElementById('mover-baixo');

function addItemInList() {
  if (contentInput.value !== '' && contentInput.value.length <= 40) {
    const newline = document.createElement('li');
    newline.className = 'line';
    newline.innerText = contentInput.value;
    orderList.appendChild(newline);
  }
  contentInput.value = '';
}

function reselecting(event) {
  const target = event.target;
  const className = target.className;
  const background = target.style;
  if (target !== undefined) {
    if (className === 'line completed') {
      className = 'line selected completed';
      background.backgroundColor = 'rgb(128, 128, 128)';
    } else {
      className = 'line selected';
      background.backgroundColor = 'rgb(128, 128, 128)';
    }
  }
}

function selectText(event) {
  for (let index = 0; index < line.length; index += 1) {
    if (line[index].className === 'line selected completed' || line[index].className === 'line completed') {
      line[index].style.backgroundColor = '';
      line[index].className = 'line completed';
    } else {
      line[index].style.backgroundColor = '';
      line[index].className = 'line';
    }
  }
  reselecting(event);
}

function concludedOrNot(event) {
  const target = event.target;
  if (target.className === 'line selected completed' || target.className === 'line completed') {
    target.style.textDecoration = '';
    target.className = 'line selected';
  } else {
    target.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
    target.className = 'line selected completed';
  }
}

function removeCompleted() {
  for (let index = 0; index < completed.length;) {
    orderList.removeChild(completed[completed.length - 1]);
  }
}

function removeSelected() {
  orderList.removeChild(selected[0]);
}

function clearAll() {
  for (let index = 0; index < line.length;) {
    orderList.removeChild(line[line.length - 1]);
  }
}

function moveUpCondition(index) {
  const select = line[index];
  if (select.className === 'line selected' || select.className === 'line selected completed') {
    const storeLine = line[index - 1].innerHTML;
    const storeClassUp = line[index - 1].className;
    const storeClassDown = select.className;
    line[index - 1].innerHTML = select.innerHTML;
    select.innerHTML = storeLine;
    select.className = storeClassUp;
    select.style.backgroundColor = '';
    line[index - 1].className = storeClassDown;
    line[index - 1].style.backgroundColor = 'rgb(128, 128, 128)';
  }
}

function moveUp() {
  for (let index = 0; index < line.length; index += 1) {
    if (line[index - 1]) {
      moveUpCondition(index);
    }
  }
}

function moveDownCondition(index) {
  if (line[index + 1]) {
    const storeLine = line[index].innerHTML;
    const storeClassUp = line[index + 1].className;
    const storeClassDown = line[index].className;
    line[index].innerHTML = line[index + 1].innerHTML;
    line[index].className = storeClassUp;
    line[index].style.backgroundColor = '';
    line[index + 1].style.backgroundColor = 'rgb(128, 128, 128)';
    line[index + 1].innerHTML = storeLine;
    line[index + 1].className = storeClassDown;
  }
}

function moveDown() {
  const select = line[index];
  for (let index = 0; index < line.length; index += 1) {
    if (select.className === 'line selected' || select.className === 'line selected completed') {
      moveDownCondition(index);
      break;
    }
  }
}

window.onload = function init() {
  buttonAdd.addEventListener('click', addItemInList);
  orderList.addEventListener('click', selectText);
  orderList.addEventListener('dblclick', concludedOrNot);
  buttonClear.addEventListener('click', clearAll);
  buttonRemoveCompleted.addEventListener('click', removeCompleted);
  moveToUp.addEventListener('click', moveUp);
  moveToDown.addEventListener('click', moveDown);
  buttonRemoveSelected.addEventListener('click', removeSelected);
};
