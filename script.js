/**
 * Consultei o repositório do Daniel Ribeiro para resolver essa parte.
 * Link: https://github.com/tryber/sd-010-a-project-todo-list/tree/defauth98-todo-list-project
 */
const addTask = () => {
  const btnTask = document.querySelector('#criar-tarefa');

  btnTask.onclick = () => {
    const taskList = document.querySelector('#lista-tarefas');
    const inputTask = document.querySelector('#texto-tarefa');
    const taskItem = document.createElement('li');

    taskItem.className = 'task';
    taskItem.innerText = inputTask.value;
    inputTask.value = '';
    taskList.appendChild(taskItem);
  };
};

/** Source: https://github.com/tryber/sd-010-a-project-todo-list/tree/renzosev-todo-list-project */
const completedItem = () => {
  const taskList = document.getElementById('lista-tarefas');

  taskList.addEventListener('dblclick', (e) => {
    if (e.target.classList.contains('completed')) {
      e.target.classList.remove('completed');
    } else {
      e.target.classList.add('completed');
    }
  });
};

/** Source: https://github.com/tryber/sd-010-a-project-todo-list/pull/94/files */
const selectItemList = () => {
  const taskList = document.querySelector('#lista-tarefas');

  taskList.addEventListener('click', (e) => {
    const taskItem = e.target;
    const taskSelected = document.querySelector('.selected');

    if (taskSelected !== null) {
      taskSelected.classList.remove('selected');
    } else {
      taskItem.classList.add('selected');
    }
  });
};

/** Source: https://github.com/tryber/sd-010-a-project-todo-list/pull/94/files */
const deleteCompletedItems = () => {
  const btnDeleteCompleted = document.querySelector('#remover-finalizados');
  const completedItemList = document.getElementsByClassName('completed');

  btnDeleteCompleted.addEventListener('click', () => {
    while (completedItemList.length !== 0) {
      completedItemList[0].remove();
    }
  });
};

/** Source: https://github.com/tryber/sd-010-a-project-todo-list/pull/94/files */
const deleteAllItems = () => {
  const btnDeleteAll = document.querySelector('#apaga-tudo');
  const listTasks = document.getElementById('lista-tarefas');
  btnDeleteAll.addEventListener('click', () => {
    while (listTasks.firstChild) {
      listTasks.removeChild(listTasks.firstChild);
    }
  });
};

window.onload = () => {
  addTask();
  deleteAllItems();
  completedItem();
  selectItemList();
  deleteCompletedItems();
};
