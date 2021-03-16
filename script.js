const list = {
  data: [''],
  lengthData: 0,
};
const makelist = document.getElementById('lista-tarefas');

function clickRemove() {
  for (let index = 0; index < list.data.length; index += 1) {
    const listLi = document.getElementsByTagName('li')[index];
    listLi.style.background = 'white';
  }
}

function clickList(e) {
  clickRemove();
  e.target.style.setProperty('background', 'rgb(128,128,128)');
}

function doubleClick(e) {
  if (e.target.classList.contains('completed')) {
    e.target.classList.remove('completed');
  } else {
    e.target.classList.add('completed');
  }
}

function listText() {
  const pushList = document.createElement('li');
  for (let index = 0; index < list.data.length; index += 1) {
    pushList.innerHTML = list.data[index];
    pushList.className = 'text-list';
    makelist.appendChild(pushList);
    pushList.addEventListener('click', clickList);
    pushList.addEventListener('dblclick', doubleClick);
  }
}

function pullText() {
  const text = document.getElementById('texto-tarefa');
  list.data[list.lengthData] = (text.value);
  text.value = '';
  list.lengthData += 1;
  listText();
}

function removeList() {
  const removeText = document.querySelectorAll('.text-list');
  for (let index = 0; index < removeText.length; index += 1) {
    makelist.removeChild(removeText[index]);
    list.data.pop();
    list.lengthData -= 1;
  }
}

function removeListCompleted() {
  const removeText = document.querySelectorAll('.text-list');
  for (let index = 0; index < removeText.length; index += 1) {
    if (removeText[index].classList.contains('completed')) {
      makelist.removeChild(removeText[index]);
      list.data.splice(index, 1);
      list.lengthData -= 1;
    }
  }
}

function listButton() {
  document.getElementById('criar-tarefa').addEventListener('click', pullText);
  document.getElementById('apaga-tudo').addEventListener('click', removeList);
  document.getElementById('remover-finalizados').addEventListener('click', removeListCompleted);
}

function init() {
  listButton();
}
window.onload = init;
