const text = document.getElementById('texto-tarefa');
const getClick = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
getClick.addEventListener('click', addText);
list.addEventListener('click', click);
list.addEventListener('dblclick', dblclick);

function addText() {
  const createItem = document.createElement('li');
  createItem.innerText = text.value;
  text.value = '';
  createItem.className = 'listItem';
  list.appendChild(createItem);
}

function click(event) {
  const receiveItem = document.getElementsByClassName('listItem');
  const select = event.target;
  for (let index = 0; index < receiveItem.length; index += 1) {
    if (receiveItem[index] === select) {
      receiveItem[index].classList.add('selected');
      receiveItem[index].style.backgroundColor = 'rgb(128, 128, 128)';
    } else {
      receiveItem[index].classList.remove('selected');
      receiveItem[index].removeAttribute('style');
    }
  }
}

function dblclick(event) {
  const receiveItem = document.getElementsByClassName('selected');
  const finishSelected = event.target;
  for (let index = 0; index < receiveItem.length; index += 1) {
    if (receiveItem[index] === finishSelected && receiveItem[index].classList.contains('completed')) {
      finishSelected.classList.remove('completed');
    } else {
      finishSelected.classList.add('completed');
    }
  }
}
