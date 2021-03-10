const inputItems = document.querySelector('#criar-tarefa'); // Variaveis Gerais.
const listOfTasks = document.getElementById('lista-tarefas');
const deleteItems = document.getElementById('apaga-tudo');
const removeCompleteItems = document.getElementById('remover-finalizados');
const removeSelectedItems = document.getElementById('remover-selecionado');
const saveItemsList = document.getElementById('salvar-tarefas');
const moveUp = document.getElementById('mover-cima');
const moveDown = document.getElementById('mover-baixo');

// Funções Gerais e Eventos.
inputItems.addEventListener('click', function () { // Cria as tarefas digitadas colocando na lista ol.
  const taskInput = document.getElementById('texto-tarefa').value;
  if (taskInput !== '') {
    const newLine = document.createElement('li');
    newLine.innerHTML = taskInput;
    listOfTasks.appendChild(newLine);
    document.getElementById('texto-tarefa').value = '';
  } else {
    alert('Entrada Invalida!');
  }
});

listOfTasks.addEventListener('click', function (event) { // Ao selecionar algum item da li o marca em cinza
  const listItem = document.getElementsByTagName('li');
  event.target.style.backgroundColor = 'rgb(128,128,128)';
  event.target.id = 'isSelected';
  for (let index = 0; index < listItem.length; index += 1) {
    if (listItem[index] !== event.target) {
      listItem[index].style.backgroundColor = 'transparent';
      listItem[index].id = 'none';
    }
  }
});

listOfTasks.addEventListener('dblclick', function (event) { // Ao dar doubleclick em um item a função "risca", selecionando o mesmo.
  if (event.target.className !== 'completed') {
    event.target.className = 'completed';
  } else {
    event.target.className = '';
  }
});

deleteItems.addEventListener('click', function () { // Essa função deleta os item selecionados.
  const lines = document.getElementsByTagName('li');
  for (let index = 0; index < lines.length; index += 0) {
    lines[index].remove();
  }
});

removeCompleteItems.addEventListener('click', function () { // Essa função deleta as tarefas finalizadas.
  const completed = document.querySelectorAll('.completed');
  for (let index = 0; index < completed.length; index += 1) {
    completed[index].remove();
  }
});
  
saveItemsList.addEventListener('click', function () { // Salva os items da lista
  localStorage.clear();
  const list = document.getElementsByTagName('li');
  for (let item = 0; item < list.length; item += 1) {
    localStorage.setItem(item, list[item].innerHTML);
    localStorage.setItem(list[item].innerText, list[item].className);
  }
});
  
moveUp.addEventListener('click', function () { // Move uma tarefa selecionada da lista para uma casa a cima.
  const tasks = document.getElementsByTagName('li');
  for (let index = 1; index < tasks.length; index += 1) {
    if (tasks[index].id === 'isSelected') {
      const aux = tasks[index].innerText;
      const auxClass = tasks[index].className;
      tasks[index].innerText = tasks[index - 1].innerText;
      tasks[index].className = tasks[index - 1].className;
      tasks[index - 1].innerText = aux;
      tasks[index - 1].className = auxClass;
      tasks[index - 1].style.backgroundColor = 'rgb(128,128,128)';
      tasks[index - 1].id = 'isSelected';
      tasks[index].style.backgroundColor = 'transparent';
      tasks[index].id = 'none';
    }
  }
});
  
moveDown.addEventListener('click', function () { // Move uma tarefa selecionada da lista para uma casa a baixo.
  const tasks = document.getElementsByTagName('li');
  for (let index = tasks.length - 2; index >= 0; index -= 1) {
    if (tasks[index].id === 'isSelected') {
      const aux = tasks[index].innerText;
      const auxClass = tasks[index].className;
      tasks[index].innerText = tasks[index + 1].innerText;
      tasks[index].className = tasks[index + 1].className;
      tasks[index + 1].innerText = aux;
      tasks[index + 1].className = auxClass;
      tasks[index + 1].style.backgroundColor = 'rgb(128,128,128)';
      tasks[index + 1].id = 'isSelected';
      tasks[index].style.backgroundColor = 'transparent';
      tasks[index].id = 'none';
    }
  }
});
  
removeSelectedItems.addEventListener('click', function () { // Remove os itens selecionados
  document.getElementById('isSelected').remove();
});
  
function loadList() {
  for (let index = 0; index < (localStorage.length / 2); index += 1) {
    const localLine = document.createElement('li');
    localLine.innerText = localStorage.getItem(index);
    localLine.className = localStorage.getItem(localLine.innerText);
    taskList.appendChild(localLine);
  }
}
  
window.onload = loadList();