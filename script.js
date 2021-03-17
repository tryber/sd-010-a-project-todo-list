const inputText = document.getElementById('texto-tarefa');
const buttonTarefa = document.getElementById('criar-tarefa');
const olTarefas = document.getElementById('lista-tarefas');
const clear = document.getElementById('apaga-tudo');
const workDone = document.getElementById('remover-finalizados');

function criar() {
  const lista = document.createElement('li');
  const node = document.createTextNode(inputText.value);
  lista.appendChild(node);
  lista.classList.add('listItem');
  olTarefas.appendChild(lista);
  inputText.value = '';
}
buttonTarefa.addEventListener('click', criar);

function changeBg(event) {
  const liItem = document.getElementsByTagName('li');
  for (let i = 0; i < liItem.length; i += 1) {
    liItem[i].style.backgroundColor = 'white';
  }
  const itemClick = event.target;
  itemClick.style.backgroundColor = 'rgb(128, 128, 128)';
}
olTarefas.addEventListener('click', changeBg);

function doubleClick(e) {
  const itemLi = e.target;
  if (itemLi.className === 'listItem') {
    itemLi.className = 'listItem completed';
  } else {
    itemLi.className = 'listItem';
  }
}
olTarefas.addEventListener('dblclick', doubleClick);

function remChild() {
  while (olTarefas.firstChild) {
    olTarefas.removeChild(olTarefas.firstChild);
  }
}
clear.addEventListener('click', remChild);

function endRemove() {
  const listRemove = document.querySelectorAll('li');

  for (let i = 0; i < listRemove.length; i += 1) {
    if (listRemove[i].classList.contains('completed')) {
      listRemove[i].parentElement.removeChild(listRemove[i]);
    }
  }
}
workDone.addEventListener('click', endRemove);
