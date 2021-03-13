// Desafio 5 a 9
function selectItem(eventoDeOrigem) {
  const exclueOld = document.getElementsByClassName('selected');
  if (exclueOld.length > 0) {
    exclueOld[0].classList.remove('selected');
    eventoDeOrigem.target.classList.add('selected');
  } else {
    eventoDeOrigem.target.classList.add('selected');
  }
}

function donetItem(eventoDeOrigem) {
  eventoDeOrigem.target.classList.toggle('completed');
}

function addTask() {
  // Captura informação de texto
  const actualizeText = document.getElementById('texto-tarefa');
  const saveText = actualizeText.value;
  // Cria o elemento da lista
  const accessList = document.getElementById('lista-tarefas');
  const creatListElement = document.createElement('li');
  // preenche com o texto
  creatListElement.innerHTML = saveText;
  const print = accessList.appendChild(creatListElement);
  // Apaga a entrada na caixa de digitação
  actualizeText.value = '';
  // Adiciona o escutador de eventos
  const currentLists = document.getElementsByTagName('li');
  for (let index = 0; index < currentLists.length; index += 1) {
    currentLists[index].addEventListener('click', selectItem);
    currentLists[index].addEventListener('dblclick', donetItem);
  }
  return print;
}

const createTask = document.getElementById('criar-tarefa');
createTask.addEventListener('click', addTask);

// Desafio 10
function deleteAll() {
  const currentTasks = document.querySelectorAll('li');
  for (let index = 0; index < currentTasks.length; index += 1) {
    currentTasks[index].remove();
  }
}

const deleteTasks = document.getElementById('apaga-tudo');
deleteTasks.addEventListener('click', deleteAll);

// Desafio 11
function deleteAllDones() {
  const currentDoneTasks = document.querySelectorAll('.completed');
  for (let index = 0; index < currentDoneTasks.length; index += 1) {
    currentDoneTasks[index].remove();
  }
}

const deleteDoneTasks = document.getElementById('remover-finalizados');
deleteDoneTasks.addEventListener('click', deleteAllDones);

// Desafio 12
function saveTasks() {
  const currentTasks = document.getElementsByTagName('li');
  localStorage.setItem('currentTasks', JSON.stringify(currentTasks));
}

const saveAllTasks = document.getElementById('salvar-tarefas');
saveAllTasks.addEventListener('click', saveTasks);
