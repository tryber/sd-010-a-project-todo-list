
function clearInput() {
  document.getElementById('criar-tarefa').addEventListener('click', () => {
    document.getElementById('texto-tarefa').value = '';
  });
}
function clearBackgroundColor() {
  const itemSelected = document.querySelector('.selected');
  itemSelected.classList.remove('selected');
 
}
function itemCheck() {
  const list = document.querySelector('#lista-tarefas');
  list.addEventListener('dblclick', (event) => {
    const e = event.target;
    if (e.classList.contains('completed')) {
      e.classList.remove('completed');
    } else {
     e.classList.add('completed');
  }
  });
}
function createListItem() {
  document.getElementById('criar-tarefa').addEventListener('click', () => {
    const texto = document.getElementById('texto-tarefa').value;
    const node = document.createElement('li');
    node.className = 'tarefa';
    const textNode = document.createTextNode(texto);
    node.appendChild(textNode);
    document.getElementById('lista-tarefas').appendChild(node);
    const list = document.querySelector('#lista-tarefas');
    
    list.addEventListener('click', (event) => {
      const e = event.target;
      if (document.querySelectorAll('.selected').length >= 1) {
        clearBackgroundColor();
      }
      e.classList.add('selected');
    });
  });
}
function clearButton() {
  const btn = document.getElementById('apaga-tudo');
  btn.addEventListener('click', () => {
    const list = document.getElementById('lista-tarefas');
    while (list.lastElementChild) {
      list.removeChild(list.lastElementChild);
     }
  });
}
function clearCompleted() {
  const btn = document.getElementById('remover-finalizados');
  const completed = document.getElementsByClassName('completed');
  btn.addEventListener('click', () => {
    for (let index = completed.length - 1; index >= 0; index -= 1) {
      completed[index].remove();
    } 
    
  });
}
window.onload = () => {
  createListItem();
  clearInput();
  
  if (document.getElementsByClassName('tarefa'.length >= 1)) {
    clearButton();
    itemCheck();
    clearCompleted();
  }
}
