const buttonNewToDo = document.querySelector('#criar-tarefa');
const buttonCleanAll = document.querySelector('#apaga-tudo');
const buttonRemoveFinished = document.querySelector('#remover-finalizados');
const input = document.querySelector('#texto-tarefa');
const ol = document.querySelector('#lista-tarefas');

function createNewTodo() {
  const newLi = document.createElement('li');
  newLi.innerText = input.value;
  document.getElementById('lista-tarefas').appendChild(newLi);
  input.value = '';
}

buttonNewToDo.addEventListener('click', createNewTodo);
// as funções para os requisitos foram feitas com base no código do colega Lucas Godoi;
function itemListSelect() {
  ol.addEventListener('click', () => {
    li = document.querySelectorAll('li')
    for (let index = 0; index < li.length; index += 1) {
      li[index].style.backgroundColor = 'rgb(128, 128, 128)';
      const color = 'rgb(128, 128, 128)';
      li[index].style.backgroundColor = color;
    }
  });
}
itemListSelect();

function selectItem() {
  ol.addEventListener('click', (event) => {
    const color = event.target;
    const li = document.querySelectorAll('li');
    for (let index = 0; index < li.length; index += 1) {
      li[index].style.backgroundColor = document.body.style.backgroundColor;
      if (color.localName === 'li') {
        color.style.backgroundColor = 'rgb(128, 128, 128)';
      }
    }
  });
}
selectItem();

function toDoDone() {
  ol.addEventListener('dblclick', (event) => {
    const target = event.target;
    if (target.classList.contains('completed')) {
      target.classList.remove('completed');
      target.style.textDecoration = '';
    } else {
      target.classList.add('completed');
      target.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
    }
  });
}
toDoDone();

function clearAll() {
  buttonCleanAll.addEventListener('click', () => {
    ol.innerText = '';
  });
}
clearAll();

function clearToDoDone() {
  buttonRemoveFinished.addEventListener('click', () => {
  const classDone = document.querySelectorAll('.completed');
  for (let index = 0; index < classDone.length; index += 1) {
    ol.removeChild(classDone[index]);
    }
  });
}
clearToDoDone();
