const inputTask = document.getElementById('texto-tarefa');
const olTasks = document.getElementById('lista-tarefas');
const buttonCreateTasks = document.getElementById('criar-tarefa');
const buttonClearAll = document.getElementById('apaga-tudo');
const buttonRemoveFinish = document.getElementById('remover-finalizados');
const buttonRemoveSelected = document.getElementById('remover-selecionado');
const buttonSave = document.getElementById('salvar-tarefas');

const createTasks = () => {
  const task = document.createElement('li');
  olTasks.appendChild(task);
  task.innerText = inputTask.value;
  inputTask.value = '';
  task.addEventListener('click', () => {
    const list = document.querySelectorAll('li');
    for (let indexList = 0; indexList < list.length; indexList += 1) {
      const styleList = list[indexList].style.backgroundColor;
      if (styleList === 'rgb(128, 128, 128)') {
        list[indexList].style.backgroundColor = '';
      }
    }
    task.style.backgroundColor = 'rgb(128, 128, 128)';
  });

  task.addEventListener('dblclick', () => {
    task.classList.toggle('completed');
  });
};

buttonCreateTasks.addEventListener('click', createTasks);

function clearAll() {
  olTasks.innerHTML = '';
}

buttonClearAll.addEventListener('click', clearAll);

function removeFinish() {
  const tasksFinish = document.querySelectorAll('.completed');
  for (let indexFinish = 0; indexFinish < tasksFinish.length; indexFinish += 1) {
    tasksFinish[indexFinish].remove();
  }
}

buttonRemoveFinish.addEventListener('click', removeFinish);

function removeSelected() {
  const listSelect = document.querySelectorAll('li');
  for (let indexList = 0; indexList < listSelect.length; indexList += 1) {
    const styleListSelect = listSelect[indexList].style.backgroundColor;
    if (styleListSelect === 'rgb(128, 128, 128)') {
      listSelect[indexList].remove();
    }
  }
}

buttonRemoveSelected.addEventListener('click', removeSelected);

function save() {
  localStorage.setItem('taskList', olTasks.innerHTML);
}

function savedTasks() {
  createTasks();
  olTasks.innerHTML = localStorage.getItem('taskList');
}

buttonSave.addEventListener('click', save);

window.onload = savedTasks;
