// Este site pode ser visto rodando na url
// https://rogerio-lambert.github.io/javaScript-DOM/todo/toDoList.html
//
// Bloco de inicialização de variáveis globais

const addTaskButton = document.getElementById('criar-tarefa');
const inputTask = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');
const clearButton = document.getElementById('apaga-tudo');
const saveButton = document.getElementById('salvar-tarefas');
const removeCompletedButton = document.getElementById('remover-finalizados');
const moveUpButton = document.getElementById('mover-cima');
const moveDownButton = document.getElementById('mover-baixo');
const removeTaskButton = document.getElementById('remover-selecionado');
let selectedTask = null;

// bloco de declaração de funções

// Esta função adiciona a classe selected a tarefa quando clicada fazendo esta ficar marcada de cinza
function markTask(event) {
  if (selectedTask === null) {
    selectedTask = event.target;
  } else if (event.target !== selectedTask) {
    selectedTask.classList.remove('selected');
    selectedTask = event.target;
  }
  selectedTask.classList.add('selected');
}

// Esta função adiciona a classe completed à tarefa quando clicada duas vezes, fazendo esta ficar "cortada"
function markCompleted(event) {
  const testedTask = event.target;
  if (testedTask.className.includes('completed')) {
    testedTask.classList.remove('completed');
  } else {
    testedTask.classList.add('completed');
  }
}

// Esta função adiciona à lista de tarefas uma nova tarefa digitada pelo usuário
function addTask() {
  if (inputTask.value !== '') {
    const task = document.createElement('li');
    task.className = 'task';
    task.innerText = inputTask.value;
    inputTask.value = '';
    task.addEventListener('click', markTask);
    task.addEventListener('dblclick', markCompleted);
    taskList.appendChild(task);
  } else {
    alert('Insira o conteúdo da tarefa');
  }
}

// Esta função limpa a lista de tarefas quando o usuário aperta o botão "apagar lista"
function clearTaskList() {
  document.getElementById('lista-tarefas').innerHTML = '';
}

// Esta função remove da lista de tarefas aquelas que foram previamente marcadas como completas
function removeCompletedTasks() {
  const completedTasks = document.getElementsByClassName('completed');
  for (let index = completedTasks.length - 1; index >= 0; index -= 1) {
    completedTasks[index].remove();
  }
}

function saveTaskList() {
  localStorage.setItem('taskList', taskList.innerHTML);
  alert('A lista foi salva no browser');
}

// Esta função move uma tarefa selecionada uma posição para cima
function moveTaskUp() {
  if (selectedTask !== null && selectedTask.previousElementSibling !== null) {
    taskList.insertBefore(selectedTask, selectedTask.previousElementSibling);
  }
}

// Esta função move uma tarefa selecionada uma posição para baixo
function moveTaskDown() {
  if (selectedTask !== null && selectedTask.nextElementSibling !== null) {
    taskList.insertBefore(selectedTask.nextElementSibling, selectedTask);
  }
}

// Esta função resgata uma lista de tarefas gravadas no browser do cliente
function recoverySavedTaskList() {
  if (localStorage.getItem('taskList') !== null) {
    taskList.innerHTML = localStorage.getItem('taskList');
    const tasks = document.getElementsByClassName('task');
    for (let index = 0; index < tasks.length; index += 1) {
      tasks[index].addEventListener('click', markTask);
      tasks[index].addEventListener('dblclick', markCompleted);
    }
    selectedTask = document.querySelector('.selected');
  }
}

// Esta função remove o tarefa selecionada

function removeTask() {
  taskList.removeChild(selectedTask);
}

// Bloco de criação de escutadores de eventos

addTaskButton.addEventListener('click', addTask);
clearButton.addEventListener('click', clearTaskList);
removeCompletedButton.addEventListener('click', removeCompletedTasks);
saveButton.addEventListener('click', saveTaskList);
moveUpButton.addEventListener('click', moveTaskUp);
moveDownButton.addEventListener('click', moveTaskDown);
removeTaskButton.addEventListener('click', removeTask);

// Bloco de ações de inicialização da página

recoverySavedTaskList();
