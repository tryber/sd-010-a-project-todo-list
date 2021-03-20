const taskList = document.getElementById('lista-tarefas');
// Funcao que aplica a classe que altera o background color para 'gray' ao item clicado e
// verifica se há outro elemento com essa classe e se ouver remove dele
function selectedTask(eventOrigin) {
  const selected = document.querySelector('.selected-task');
  const listItem = eventOrigin.target; // Recupera o elemento que foi clicado (possui um listener de click)

  if (selected != null) {
    selected.classList.remove('selected-task');// Remove a classe selected-task caso exista em algum elemento
  }
  listItem.classList.add('selected-task');// Adiciona a classe selected-task ao elemento clicado
}

// Funcao que adiciona um 'risco' na tarefa clicada 2x para indicar que está completa
function throughItem(eventOrigin) {
  const elementClasses = eventOrigin.target.classList.value;// Recupera uma string com o nome das classes do elemeto
  const listItem = eventOrigin.target;
  if (elementClasses.indexOf('completed') > -1) { // Verifica se o elemento clicado possui a classe 'completed'
    listItem.classList.remove('completed');
  } else {
    listItem.classList.add('completed');
  }
}

// Funcao que serve para adicionar o texto do input como um item da lista de tarefas
function submitTask() {
  const newTask = document.createElement('li');
  const taskText = document.formTasks.task.value;// Recupera o texto dentro do input para colocar na nova li
  newTask.addEventListener('click', selectedTask);
  newTask.addEventListener('dblclick', throughItem);
  newTask.innerText = taskText;
  taskList.appendChild(newTask);
  document.formTasks.task.value = ''; // Apaga o texto no imput apos salvar na lista
}

// Funcao que remove todos o conteudo do elemento que representa a lista
function clearTasks() {
  taskList.innerHTML = '';
}

// Funcao que remove apenas as tarefas completas que sao os itens com a classe 'completed'
function removeFinnished() {
  let completedTask = document.querySelector('.completed');
  while (completedTask != null) {
    taskList.removeChild(completedTask);
    completedTask = document.querySelector('.completed');
  }
}

// Funcao que remove apenas a tarefa selecionada
function removeSelected() {
  const task = document.querySelector('.selected-task');

  if (task != null) {
    taskList.removeChild(task);
  }
}

// Funcao que salva as propriedades dos li (texto e classes) no localStorage, utilizando um
// array de elementos
function pushTasks() {
  const listItems = document.getElementsByTagName('li');
  let item = {};
  const itemPropeties = [];
  for (let i = 0; i < listItems.length; i += 1) {
    item = {
      text: listItems[i].innerText,
      classes: listItems[i].classList.value,
    };
    itemPropeties.push(item);
  }
  localStorage.setItem('savedItems', JSON.stringify(itemPropeties));
}

// Funcao que recupera as informacoes salvas pela pushTasks() no localStorage e usa para criar
// os elementos 'li' como eram assim que foram salvos
function pullTasks() {
  const saved = localStorage.getItem('savedItems');
  if (saved != null) {
    const itemProperties = JSON.parse(saved);

    let newItem;

    for (let i = 0; i < itemProperties.length; i += 1) {
      newItem = document.createElement('li');
      newItem.innerText = itemProperties[i].text;
      newItem.classList.value = itemProperties[i].classes;
      newItem.addEventListener('click', selectedTask);
      newItem.addEventListener('dblclick', throughItem);
      taskList.appendChild(newItem);
    }
  }
}

// Funcao que inverte a posicao da tarefa de cima com a de baixo (se houver uma acima)
// A estratégia usada foi salvar o texto e classes da tarefa selecionada, criar uma nova li,
// atribuir esses elementos nela e sobrescrever a li acima e como foi recuperada uma 'copia'
// da li de cima em 'previous' antes de se sobrescrita, assim entao foi usada para sobrescrever
// a de baixo, assim o resltado final foi a 'troca de posicao' das duas
function moveUp() {
  const selected = document.querySelector('.selected-task');
  if (selected != null) {
    const previous = selected.previousElementSibling;
    if (previous != null) {
  
      const task = document.createElement('li');
      task.innerText = selected.innerText;
      task.classList.value = selected.classList.value;
      task.addEventListener('click', selectedTask);
      task.addEventListener('dblclick', throughItem);
      taskList.replaceChild(task, previous);
      taskList.replaceChild(previous, selected);
    }
  }
}

// Funcao quase identica a 'moveUp', so que agora o foco e o elemento abaixo do selecionado
function moveDown() {
  const selected = document.querySelector('.selected-task');

  if (selected != null) {
    const next = selected.nextElementSibling;
    if (next != null) {
  
      const task = document.createElement('li');
      task.innerText = selected.innerText;
      task.classList.value = selected.classList.value;
      task.addEventListener('click', selectedTask);
      task.addEventListener('dblclick', throughItem);
      taskList.replaceChild(task, next);
      taskList.replaceChild(next, selected);
    }
  }
}

// Funcao que adiciona 'escutadores' nos botoes
function addButtomListener() {
  const button1 = document.getElementById('criar-tarefa');
  const button2 = document.getElementById('apaga-tudo');
  const button3 = document.getElementById('remover-finalizados');
  const button4 = document.getElementById('salvar-tarefas');
  const button5 = document.getElementById('mover-cima');
  const button6 = document.getElementById('mover-baixo');
  const button7 = document.getElementById('remover-selecionado');
  button1.addEventListener('click', submitTask);
  button2.addEventListener('click', clearTasks);
  button3.addEventListener('click', removeFinnished);
  button4.addEventListener('click', pushTasks);
  button5.addEventListener('click', moveUp);
  button6.addEventListener('click', moveDown);
  button7.addEventListener('click', removeSelected);
}

// Arrows ↑ ⬆ ↓ ⬇
pullTasks();
addButtomListener();
