const input = document.querySelector('#texto-tarefa');

const addButton = document.querySelector('#criar-tarefa');
const deleteButton = document.querySelector('#apaga-tudo');
const removeButton = document.querySelector('#remover-finalizados');
const removeSelected = document.querySelector('#remover-selecionado');
const saveButton = document.querySelector('#salvar-tarefas');
const upButton = document.querySelector('#mover-cima');
const downButton = document.querySelector('#mover-baixo');

const list = document.querySelector('#lista-tarefas');

const store = localStorage;

function clearInput() {
  input.value = '';
}

function selectTask(e) {
  const event = e.target;
  const previous = document.querySelector('.selected');

  // if (previous || event === previous) {
  //   previous.classList.remove('selected');
  // }

  if (previous) {
    previous.classList.remove('selected');
  }

  // if (event !== previous) event.classList.add('selected');
  event.classList.add('selected');
}

function completeTask(e) {
  const event = e.target;

  // https://www.javascripttutorial.net/dom/css/check-if-an-element-contains-a-class/
  if (event.classList.contains('completed')) {
    event.classList.remove('completed');
  } else event.classList.add('completed');
}

function createTask(value, className) {
  const task = document.createElement('li');

  if (className) task.classList.add(className);

  task.innerText = value;
  task.addEventListener('click', selectTask);
  task.addEventListener('dblclick', completeTask);

  return task;
}

function setStore() {
  const tasks = list.childNodes;
  const storedToDo = [];
  if (!tasks.length) {
    return alert('Sua lista de tarefas está vázia!');
  }

  tasks.forEach((task) => {
    const taskObj = {};
    if (task.classList.contains('selected')) {
      task.classList.remove('selected');
    }

    taskObj.textContent = task.textContent;
    taskObj.class = task.className;
    storedToDo.push(`${JSON.stringify(taskObj)}`);
  });
  store.setItem('storedToDo', storedToDo.join('|'));
  setTimeout(() => alert('Lista salva com sucesso'), 500);
}

function getStore() {
  const isTrue = store.getItem('storedToDo');
  const storedToDo = isTrue ? store.getItem('storedToDo').split('|') : [];

  if (storedToDo.length) {
    storedToDo.forEach((toDo) => {
      const { textContent, class: className } = JSON.parse(toDo);
      const task = createTask(textContent, className);

      list.appendChild(task);
    });
  }
}

function addTask() {
  list.appendChild(createTask(input.value));
  clearInput();
}

function deleteAll() {
  list.innerText = '';
}

function removeCompleted() {
  const completed = document.querySelectorAll('.completed');

  completed.forEach((task) => task.remove());
}

function remove() {
  const selected = document.querySelector('.selected');
  selected.remove();
}

// https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/before
function moveUp() {
  const selected = document.querySelector('.selected');
  const upSibling = selected ? selected.previousElementSibling : null;
  const arrayList = list.childNodes;

  arrayList.forEach((task) => {
    if (task === upSibling) {
      task.before(selected);
    }
  });
}

// https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/after
function moveDown() {
  const selected = document.querySelector('.selected');
  const downSibling = selected ? selected.nextElementSibling : null;
  const arrayList = list.childNodes;

  arrayList.forEach((task) => {
    if (task === downSibling) {
      task.after(selected);
    }
  });
}

function getEvents() {
  addButton.addEventListener('click', addTask);
  deleteButton.addEventListener('click', deleteAll);
  removeButton.addEventListener('click', removeCompleted);
  removeSelected.addEventListener('click', remove);
  saveButton.addEventListener('click', setStore);
  upButton.addEventListener('click', moveUp);
  downButton.addEventListener('click', moveDown);
}

window.onload = () => {
  getEvents();
  getStore();
};
