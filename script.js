const buttonCreate = document.querySelector('#criar-tarefa');
const addInput = document.querySelector('#texto-tarefa');
const olItem = document.querySelector('#lista-tarefas');
const buttonErase = document.querySelector('#apaga-tudo');
const buttonEraseCompleted = document.querySelector('#remover-finalizados');
const buttonEraseSelected = document.querySelector('#remover-selecionado');

window.onload = function load() {
  addInput.focus();
};

function creatTask() {
  const liItem = document.createElement('li');
  liItem.innerText = addInput.value;
  liItem.addEventListener('click', (event) => {
    const selectedItem = document.querySelector('#selected');
    if (selectedItem) {
      selectedItem.removeAttribute('id');
    }
    const gray = event.target;
    gray.id = 'selected';
  });
  olItem.appendChild(liItem);
  addInput.value = '';
  liItem.addEventListener('dblclick', (event) => {
    const item = event.target;
    if (item.className === 'completed') {
      item.className = '';
      item.removeAttribute('id');
    } else {
      item.removeAttribute('id');
      item.className = 'completed';
    }
  });
  addInput.focus();
}
function eraseAll() {
  const list = document.getElementById('lista-tarefas');
  list.innerHTML = '';
}
function eraseCompleted() {
  const list = document.querySelectorAll('#lista-tarefas li');
  for (let index = 0; index < list.length; index += 1) {
    if (list[index].className === 'completed') {
      olItem.removeChild(list[index]);
    }
  }
}
function eraseSelected() {
  const list = document.getElementById('selected');
  if (list.id === 'selected') {
    olItem.removeChild(list);
  }
}
buttonCreate.addEventListener('click', creatTask);
buttonErase.addEventListener('click', eraseAll);
buttonEraseCompleted.addEventListener('click', eraseCompleted);
buttonEraseSelected.addEventListener('click', eraseSelected);
