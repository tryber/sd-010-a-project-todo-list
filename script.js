const taskListContainer = document.querySelector('#lista-tarefas');

function createListItem() {
  const listItem = document.createElement('li');
  return listItem;
}

function inputText() {
  const text = document.querySelector('#texto-tarefa').value;
  return text;
}

function addTask() {
  const createTask = document.querySelector('#criar-tarefa');

  createTask.addEventListener('click', () => {
    const text = inputText();
    const listItem = createListItem();
    listItem.innerHTML = text;
    taskListContainer.appendChild(listItem);
    document.querySelector('#texto-tarefa').value = '';
  });
}

addTask();

function colorNone() {
  const list = document.querySelectorAll('li');
  for (let index = 0; index < list.length; index += 1) {
    list[index].style.backgroundColor = 'white';
  }
  return list;
}

function removeClassSelected() {
  const list = document.querySelectorAll('#lista-tarefas > li');
  for (let index = 0; index < list.length; index += 1) {
    list[index].classList.remove('selected');
  }
}

function changeBackgroundColor() {
  const gray = 'rgb(128, 128, 128)';
  const list = document.querySelectorAll('#lista-tarefas');
  for (let index = 0; index < list.length; index += 1) {
    list[index].addEventListener('click', (event) => {
      const parameter = event;
      removeClassSelected();
      list[index] = colorNone();
      parameter.target.classList.add('selected');
      parameter.target.style.backgroundColor = gray;
    });
  }
}

changeBackgroundColor();

function completedTask() {
  const list = document.querySelectorAll('#lista-tarefas');
  for (let index = 0; index < list.length; index += 1) {
    list[index].addEventListener('dblclick', (event) => {
      event.target.classList.toggle('completed');
    });
  }
}

completedTask();

function btnEraseAll() {
  const list = document.querySelector('#lista-tarefas');
  const eraseAll = document.querySelector('#apaga-tudo');

  eraseAll.addEventListener('click', () => {
    localStorage.removeItem('tasks');
    list.innerHTML = '';
  });
}

btnEraseAll();

function removeCompleted() {
  const remove = document.querySelector('#remover-finalizados');
  remove.addEventListener('click', () => {
    const completed = document.querySelectorAll('.completed');
    for (let index = 0; index < completed.length; index += 1) {
      if (completed[index].className.includes('completed')) {
        taskListContainer.removeChild(completed[index]);
      }
    }
  });
}

removeCompleted();

function removeSelected() {
  const remove = document.querySelector('#remover-selecionado');

  remove.addEventListener('click', () => {
    const list = document.querySelectorAll('.selected');
    for (let index = 0; index < list.length; index += 1) {
      if (list[index].className === 'selected') {
        taskListContainer.removeChild(list[index]);
      }
    }
  });
}

removeSelected();

function saveTasks() {
  const save = document.querySelector('#salvar-tarefas');

  save.addEventListener('click', () => {
    localStorage.setItem('tasks', JSON.stringify(taskListContainer.innerHTML));
  });
}

saveTasks();

function loudTasks() {
  if (localStorage.getItem('tasks') !== undefined) {
    const toDo = localStorage.getItem('tasks');
    taskListContainer.innerHTML = JSON.parse(toDo);
  }
}

loudTasks();

const moveUp = () => {
  const up = document.querySelector('#mover-cima');
  const taskList = document.querySelector('#lista-tarefas').childNodes;

  up.addEventListener('click', () => {
    console.log(taskList);
    for (let index = 1; index < taskList.length; index += 1) {
      if (taskList[index].className.includes('selected')) {
        const previousTask = taskList[index - 1];
        taskListContainer.insertBefore(taskList[index], previousTask);
      }
    }
  });
};

moveUp();

const moveDown = () => {
  const up = document.querySelector('#mover-baixo');
  const taskList = document.querySelector('#lista-tarefas').childNodes;

  up.addEventListener('click', () => {
    console.log(taskList);
    for (let index = taskList.length - 2; index >= 0; index -= 1) {
      if (taskList[index].className.includes('selected')) {
        const nextTask = taskList[index + 2];
        taskListContainer.insertBefore(taskList[index], nextTask);
      }
    }
  });
};

moveDown();
