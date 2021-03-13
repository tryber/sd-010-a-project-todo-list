const lT = 'lista-tarefas';
const greyC = 'rgb(128, 128, 128)';

function setTask() {
  const tagLi = document.createElement('li');
  tagLi.className = 'list-item';
  tagLi.innerText = document.getElementById('texto-tarefa').value;
  document.getElementById(lT).appendChild(tagLi);
  document.getElementById('texto-tarefa').value = '';
}

document.getElementById('criar-tarefa').addEventListener('click', setTask);

function clickColor(event) {
  const eT = event.target;
  eT.style.backgroundColor = greyC;
}

function unsetColor() {
  const items = document.getElementsByClassName('list-item');
  for (let index = 0; index < items.length; index += 1) {
    if (items[index].style.backgroundColor === greyC) {
      items[index].style.backgroundColor = 'white';
    }
  }
}

document.getElementById(lT).addEventListener('click', unsetColor);
document.getElementById(lT).addEventListener('click', clickColor);

function completeTask(event) {
  const evt = event.target;
  if (event.target.className === 'list-item') {
    evt.className = 'list-item completed';
  } else {
    evt.className = 'list-item';
  }
}

document.getElementById(lT).addEventListener('dblclick', completeTask);

function clearList() {
  const taskList = document.getElementById(lT);
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

document.getElementById('apaga-tudo').addEventListener('click', clearList);

function clearDoneItems() {
  const allItems = document.getElementById(lT).childNodes;
  for (let index = allItems.length - 1; index >= 0; index -= 1) {
    if (allItems[index].className === 'list-item completed') {
      document.getElementById(lT).removeChild(allItems[index]);
    }
  }
}

document.getElementById('remover-finalizados').addEventListener('click', clearDoneItems);

function saveItems() {
  localStorage.setItem('listLength', document.getElementsByClassName('list-item').length);
  for (let i = 0; i < document.getElementsByClassName('list-item').length; i += 1) {
    localStorage.setItem(`item${i}`, document.getElementsByClassName('list-item')[i].innerText);
  }
}

document.getElementById('salvar-tarefas').addEventListener('click', saveItems);

function saveCompletedItems() {
  const listItems = document.getElementsByClassName('list-item');
  for (let i = 0; i < listItems.length; i += 1) {
    localStorage.setItem(`item${i} className`, listItems[i].className);
  }
}

document.getElementById('salvar-tarefas').addEventListener('click', saveCompletedItems);

function resetList() {
  const listLength = parseInt(localStorage.getItem('listLength'), 10);
  for (let index = 0; index < listLength; index += 1) {
    const tagLi = document.createElement('li');
    tagLi.className = localStorage.getItem(`item${index} className`);
    tagLi.innerText = localStorage.getItem(`item${index}`);
    document.getElementById(lT).appendChild(tagLi);
  }
}

window.onload = resetList;

function moveUp() {
  const items = document.getElementsByClassName('list-item');
  for (let index = 1; index < items.length; index += 1) {
    const textSelected = items[index].innerText;
    const classSelected = items[index].className;
    if (items[index].style.backgroundColor === greyC) {
      items[index].innerText = items[index - 1].innerText;
      items[index - 1].innerText = textSelected;
      items[index].className = items[index - 1].className;
      items[index - 1].className = classSelected;
      items[index - 1].style.backgroundColor = greyC;
      items[index].style.backgroundColor = 'white';
    }
  }
}

document.getElementById('mover-cima').addEventListener('click', moveUp);

function moveDown() {
  const items = document.getElementsByClassName('list-item');
  for (let index = items.length - 2; index >= 0; index -= 1) {
    const textSelect = items[index].innerText;
    const classSelect = items[index].className;
    if (items[index].style.backgroundColor === greyC) {
      items[index].innerText = items[index + 1].innerText;
      items[index + 1].innerText = textSelect;
      items[index].className = items[index + 1].className;
      items[index + 1].className = classSelect;
      items[index + 1].style.backgroundColor = greyC;
      items[index].style.backgroundColor = 'white';
    }
  }
}

document.getElementById('mover-baixo').addEventListener('click', moveDown);

function removeSelectedItem() {
  const items = document.getElementsByClassName('list-item');
  for (let index = 0; index < items.length; index += 1) {
    if (items[index].style.backgroundColor === greyC) {
      document.getElementById(lT).removeChild(items[index]);
    }
  }
}

document.getElementById('remover-selecionado').addEventListener('click', removeSelectedItem);
