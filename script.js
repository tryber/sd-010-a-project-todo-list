const buttonUp = document.querySelector('#mover-cima');
const buttonDown = document.querySelector('#mover-baixo');
const saveButton = document.querySelector('#salvar-tarefas');
const finishedTask = document.querySelector('#remover-finalizados');
const deleteButton = document.querySelector('#apaga-tudo');
const removeButton = document.querySelector('#remover-selecionado');
const button = document.querySelector('#criar-tarefa');
const ol = document.querySelector('#lista-tarefas');

function taskList() {
  button.addEventListener('click', () => {
    const insertText = document.getElementById('texto-tarefa').value;
    document.getElementById('texto-tarefa').value = '';
    const textList = document.createElement('li');
    textList.innerText = insertText;
    ol.appendChild(textList);
  });
}
taskList();

function changeColor() {
  ol.addEventListener('click', (e) => {
    const itemList = e.target;
    const liClass = document.getElementsByClassName('item')[0];
    if (liClass !== undefined) {
      liClass.classList.remove('item');
    }
    itemList.classList.add('item');
  });
}
changeColor();

function completeTask() {
  ol.addEventListener('dblclick', (e) => {
    e.target.classList.toggle('completed');
  });
}
completeTask();

function deleteTask() {
  deleteButton.addEventListener('click', () => {
    const taskItens = document.querySelector('#lista-tarefas');
    taskItens.innerHTML = '';
  });
}
deleteTask();

function itemFinished() {
  finishedTask.addEventListener('click', () => {
    const finishedItens = document.querySelectorAll('.completed');
    for (let index = 0; index < finishedItens.length; index += 1) {
      finishedItens[index].remove();
    }
  });
}
itemFinished();

function removeSelected(){
  removeButton.addEventListener('click', () => {
    const selected = document.querySelector('.item');
    selected.remove();
  });
}
removeSelected();

function saveList() {
  saveButton.addEventListener('click', () => {
    localStorage.setItem('savedList', ol.innerHTML);
  });
}
saveList();

function getList() {
  const recoveredList = localStorage.getItem('savedList');
  ol.innerHTML = recoveredList;
}
getList();

function moveDownTasks() {
  buttonDown.addEventListener('click', () => {
    const li = document.querySelector('.item');
    if (li === null) return;
    if (li === ol.lastChild) return;
    else ol.insertBefore(li.nextSibling, li);
  });
}
moveDownTasks();

function moveUpTasks() {
  buttonUp.addEventListener('click', () => {
    const li = document.querySelector('.item');
    if (li === null) return;
    if (li === ol.firstChild) return;
    else ol.insertBefore(li, li.previousSibling);    
  });
}
moveUpTasks();

/* Gostaria de deixar aqui meu agradecimento aos alunos Renzo Sevilha e André Barroso pela ajuda nos
requisitos e na refatoração do código! Meu muito obrigado!*/
//trechos de código retirados de https://www.w3schools.com/jsref/met_node_insertbefore.asp
